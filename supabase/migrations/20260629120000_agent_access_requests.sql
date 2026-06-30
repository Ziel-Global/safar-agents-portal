-- Agent access request workflow: submit → admin review → invite → set password → login

CREATE TABLE public.agent_access_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  full_name text NOT NULL,
  country_code text NOT NULL,
  business_name text NOT NULL,
  city text NOT NULL,
  status text NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'rejected', 'invited', 'completed')),
  rejection_reason text,
  reviewed_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  reviewed_at timestamptz,
  invited_at timestamptz,
  completed_at timestamptz,
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_agent_access_requests_status ON public.agent_access_requests(status);
CREATE INDEX idx_agent_access_requests_email ON public.agent_access_requests(lower(email));
CREATE INDEX idx_agent_access_requests_created ON public.agent_access_requests(created_at DESC);

-- One open request per email at a time
CREATE UNIQUE INDEX idx_agent_access_requests_open_email
  ON public.agent_access_requests (lower(email))
  WHERE status IN ('pending', 'invited');

ALTER TABLE public.agent_access_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a pending access request"
  ON public.agent_access_requests FOR INSERT
  WITH CHECK (
    status = 'pending'
    AND user_id IS NULL
    AND reviewed_by IS NULL
    AND reviewed_at IS NULL
    AND invited_at IS NULL
    AND completed_at IS NULL
    AND rejection_reason IS NULL
  );

CREATE POLICY "Admins can view access requests"
  ON public.agent_access_requests FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update access requests"
  ON public.agent_access_requests FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER trg_agent_access_requests_touch
  BEFORE UPDATE ON public.agent_access_requests
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- Validate new requests (no duplicate open requests, no existing agent account)
CREATE OR REPLACE FUNCTION public.validate_agent_access_request()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.email := lower(trim(NEW.email));

  IF NEW.status <> 'completed' AND EXISTS (
    SELECT 1
    FROM auth.users u
    JOIN public.profiles p ON p.id = u.id
    WHERE lower(u.email) = NEW.email
      AND p.role = 'agent'
      AND p.deleted_at IS NULL
  ) THEN
    RAISE EXCEPTION 'An agent account with this email already exists';
  END IF;

  IF TG_OP = 'INSERT' AND EXISTS (
    SELECT 1 FROM public.agent_access_requests r
    WHERE lower(r.email) = NEW.email
      AND r.status IN ('pending', 'invited')
  ) THEN
    RAISE EXCEPTION 'A request for this email is already being processed';
  END IF;

  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_validate_agent_access_request
  BEFORE INSERT OR UPDATE OF email, status ON public.agent_access_requests
  FOR EACH ROW EXECUTE FUNCTION public.validate_agent_access_request();

-- Block self-registration as agent; only invited users may become agents
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_role text := COALESCE(NEW.raw_user_meta_data ->> 'role', 'pilgrim');
BEGIN
  IF v_role = 'agent' THEN
    IF COALESCE(NEW.raw_user_meta_data ->> 'agent_invite', '') <> 'true' THEN
      RAISE EXCEPTION 'Agent accounts require an approved invitation';
    END IF;

    IF NOT EXISTS (
      SELECT 1 FROM public.agent_access_requests
      WHERE lower(email) = lower(NEW.email)
        AND status = 'invited'
    ) THEN
      RAISE EXCEPTION 'No approved agent access request found for this email';
    END IF;
  END IF;

  INSERT INTO public.profiles (id, role, full_name, country_code)
  VALUES (
    NEW.id,
    v_role,
    NEW.raw_user_meta_data ->> 'full_name',
    NEW.raw_user_meta_data ->> 'country_code'
  );

  IF v_role = 'agent' THEN
    UPDATE public.agent_access_requests
       SET user_id = NEW.id,
           status = 'completed',
           completed_at = now(),
           updated_at = now()
     WHERE lower(email) = lower(NEW.email)
       AND status = 'invited';
  END IF;

  RETURN NEW;
END;
$$;

GRANT SELECT, INSERT ON public.agent_access_requests TO anon, authenticated;
GRANT UPDATE ON public.agent_access_requests TO authenticated;
