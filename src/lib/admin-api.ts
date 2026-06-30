/** Base URL for invite verify/accept (runs on this agents portal). */
export function getInviteApiUrl(): string {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  const url =
    import.meta.env.VITE_APP_URL ??
    import.meta.env.VITE_ADMIN_API_URL ??
    "http://localhost:8080";
  return url.replace(/\/$/, "");
}

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

export type InviteVerifyResponse = InviteVerifySuccess | InviteVerifyFailure;

export interface InviteAcceptSuccess {
  success: true;
  userId: string;
}

export interface InviteAcceptFailure {
  error: string;
}

export async function verifyInviteToken(token: string): Promise<InviteVerifyResponse> {
  const res = await fetch(
    `${getInviteApiUrl()}/api/invite/verify?token=${encodeURIComponent(token)}`,
  );
  const body = (await res.json()) as InviteVerifyResponse;
  if (!res.ok || body.valid !== true) {
    return {
      valid: false,
      error:
        body.valid === false
          ? body.error
          : "Invite link is invalid or expired",
    };
  }
  return body;
}

export async function acceptInvite(
  token: string,
  password: string,
): Promise<InviteAcceptSuccess | InviteAcceptFailure> {
  const res = await fetch(`${getInviteApiUrl()}/api/invite/accept`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, password }),
  });
  const body = (await res.json()) as InviteAcceptSuccess | InviteAcceptFailure & { success?: boolean };
  if (!res.ok || body.success !== true) {
    return {
      error:
        "error" in body && typeof body.error === "string"
          ? body.error
          : "Could not create account",
    };
  }
  return body as InviteAcceptSuccess;
}
