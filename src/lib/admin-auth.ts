import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export async function verifyAdminRequest(request: Request): Promise<{ userId: string }> {
  const authHeader = request.headers.get("authorization") ?? "";
  if (!authHeader.startsWith("Bearer ")) {
    throw Response.json({ error: "Missing session token" }, { status: 401 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY ?? process.env.SUPABASE_ANON_KEY;
  if (!supabaseUrl || !publishableKey) {
    throw Response.json({ error: "Authentication is temporarily unavailable" }, { status: 500 });
  }

  const verifier = createClient<Database>(supabaseUrl, publishableKey, {
    global: { headers: { Authorization: authHeader } },
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const token = authHeader.slice("Bearer ".length);
  const { data: userData, error: userError } = await verifier.auth.getUser(token);
  if (userError || !userData.user) {
    throw Response.json({ error: "Invalid or expired session" }, { status: 401 });
  }

  const { data: profile, error: profileError } = await verifier
    .from("profiles")
    .select("role")
    .eq("id", userData.user.id)
    .maybeSingle();

  if (profileError || profile?.role !== "admin") {
    throw Response.json({ error: "Admin access required" }, { status: 403 });
  }

  return { userId: userData.user.id };
}
