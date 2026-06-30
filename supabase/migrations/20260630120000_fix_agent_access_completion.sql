-- Complete agent access requests when invited agents finish signup.
-- Also backfill rows stuck on "invited" after account creation.

-- Allow completing a request after the agent account has been created.
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

-- Infer agent role from agent_invite when role metadata is omitted (admin invite API).
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_role text := COALESCE(
    NEW.raw_user_meta_data ->> 'role',
    CASE
      WHEN COALESCE(NEW.raw_user_meta_data ->> 'agent_invite', '') = 'true' THEN 'agent'
      ELSE 'pilgrim'
    END
  );
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

-- Safety net: complete access request when an agent profile is created/updated.
CREATE OR REPLACE FUNCTION public.complete_agent_access_on_agent_profile()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_email text;
BEGIN
  IF NEW.role <> 'agent' THEN
    RETURN NEW;
  END IF;

  SELECT lower(u.email) INTO v_email
  FROM auth.users u
  WHERE u.id = NEW.id;

  IF v_email IS NULL THEN
    RETURN NEW;
  END IF;

  UPDATE public.agent_access_requests
     SET user_id = NEW.id,
         status = 'completed',
         completed_at = COALESCE(completed_at, now()),
         updated_at = now()
   WHERE lower(email) = v_email
     AND status = 'invited'
     AND user_id IS NULL;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_complete_agent_access_on_profile ON public.profiles;
CREATE TRIGGER trg_complete_agent_access_on_profile
  AFTER INSERT OR UPDATE OF role ON public.profiles
  FOR EACH ROW
  WHEN (NEW.role = 'agent')
  EXECUTE FUNCTION public.complete_agent_access_on_agent_profile();

-- Backfill access requests left on "invited" after successful signup.
UPDATE public.agent_access_requests r
   SET status = 'completed',
       user_id = u.id,
       completed_at = COALESCE(r.completed_at, u.created_at),
       updated_at = now()
  FROM auth.users u
 WHERE lower(r.email) = lower(u.email)
   AND r.status = 'invited'
   AND r.user_id IS NULL
   AND COALESCE(u.raw_user_meta_data ->> 'agent_invite', '') = 'true';
