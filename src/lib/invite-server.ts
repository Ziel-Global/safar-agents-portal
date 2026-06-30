import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

type InviteTokenRow = {
  id: string;
  email: string;
  token: string;
  role: string;
  metadata: {
    full_name?: string;
    business_name?: string;
    country_code?: string;
    city?: string;
    access_request_id?: string;
  } | null;
  expires_at: string;
  used: boolean;
};

export interface InviteVerifySuccess {
  valid: true;
  email: string;
  role: string;
  fullName: string;
  businessName: string;
}

export interface InviteVerifyFailure {
  valid: false;
  error: string;
}

export type InviteVerifyResult = InviteVerifySuccess | InviteVerifyFailure;

async function findInviteToken(
  supabase: SupabaseClient<Database>,
  token: string,
): Promise<InviteTokenRow | null> {
  const { data, error } = await supabase
    .from("invite_tokens")
    .select("id, email, token, role, metadata, expires_at, used")
    .eq("token", token)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data as InviteTokenRow | null;
}

export async function verifyInviteTokenServer(
  supabase: SupabaseClient<Database>,
  token: string,
): Promise<InviteVerifyResult> {
  if (!token?.trim()) {
    return { valid: false, error: "Invite link is invalid or expired" };
  }

  const row = await findInviteToken(supabase, token.trim());
  if (!row) {
    return { valid: false, error: "Invite link is invalid or expired" };
  }
  if (row.used) {
    return { valid: false, error: "This invite has already been used" };
  }
  if (new Date(row.expires_at) < new Date()) {
    return { valid: false, error: "This invite has expired" };
  }

  const meta = row.metadata ?? {};
  return {
    valid: true,
    email: row.email,
    role: row.role,
    fullName: meta.full_name ?? "",
    businessName: meta.business_name ?? "",
  };
}

export interface InviteAcceptSuccess {
  success: true;
  userId: string;
}

export interface InviteAcceptFailure {
  error: string;
}

export type InviteAcceptResult = InviteAcceptSuccess | InviteAcceptFailure;

async function completeAccessRequest(
  supabase: SupabaseClient<Database>,
  accessRequestId: string,
  userId: string,
): Promise<void> {
  const now = new Date().toISOString();
  const { error } = await supabase
    .from("agent_access_requests")
    .update({
      status: "completed",
      user_id: userId,
      completed_at: now,
      updated_at: now,
    })
    .eq("id", accessRequestId)
    .eq("status", "invited");

  if (error) throw new Error(error.message);
}

export async function acceptInviteServer(
  supabase: SupabaseClient<Database>,
  token: string,
  password: string,
): Promise<InviteAcceptResult> {
  if (!token?.trim()) {
    return { error: "Invalid invite token" };
  }
  if (!password || password.length < 8) {
    return { error: "Password must be at least 8 characters" };
  }

  const row = await findInviteToken(supabase, token.trim());
  if (!row) {
    return { error: "Invite link is invalid or expired" };
  }
  if (row.used) {
    return { error: "This invite has already been used" };
  }
  if (new Date(row.expires_at) < new Date()) {
    return { error: "This invite has expired" };
  }

  const meta = row.metadata ?? {};
  const accessRequestId = meta.access_request_id;

  const userMetadata = {
    role: "agent",
    agent_invite: "true",
    access_request_id: accessRequestId ?? null,
    full_name: meta.full_name ?? "",
    country_code: meta.country_code ?? "",
    business_name: meta.business_name ?? "",
    city: meta.city ?? "",
  };

  const { data: created, error: createError } = await supabase.auth.admin.createUser({
    email: row.email,
    password,
    email_confirm: true,
    user_metadata: userMetadata,
  });

  if (createError) {
    if (createError.message.toLowerCase().includes("already")) {
      return { error: "An account with this email already exists. Try signing in." };
    }
    return { error: createError.message };
  }

  const userId = created.user?.id;
  if (!userId) {
    return { error: "Could not create account" };
  }

  const now = new Date().toISOString();
  const { error: tokenError } = await supabase
    .from("invite_tokens")
    .update({ used: true, used_at: now })
    .eq("id", row.id)
    .eq("used", false);

  if (tokenError) {
    return { error: tokenError.message };
  }

  if (accessRequestId) {
    await completeAccessRequest(supabase, accessRequestId, userId);
  } else {
    const { error: emailMatchError } = await supabase
      .from("agent_access_requests")
      .update({
        status: "completed",
        user_id: userId,
        completed_at: now,
        updated_at: now,
      })
      .eq("email", row.email.toLowerCase())
      .eq("status", "invited");

    if (emailMatchError) {
      return { error: emailMatchError.message };
    }
  }

  return { success: true, userId };
}
