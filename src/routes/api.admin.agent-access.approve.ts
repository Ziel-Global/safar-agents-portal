import { createFileRoute } from "@tanstack/react-router";
import { verifyAdminRequest } from "@/lib/admin-auth";

export const Route = createFileRoute("/api/admin/agent-access/approve")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { userId: adminId } = await verifyAdminRequest(request);
          const body = (await request.json()) as { requestId?: string };
          if (!body.requestId) {
            return Response.json({ error: "requestId is required" }, { status: 400 });
          }

          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
          const { data: accessRequest, error: fetchError } = await supabaseAdmin
            .from("agent_access_requests")
            .select("*")
            .eq("id", body.requestId)
            .maybeSingle();

          if (fetchError) {
            return Response.json({ error: fetchError.message }, { status: 500 });
          }
          if (!accessRequest) {
            return Response.json({ error: "Request not found" }, { status: 404 });
          }
          if (accessRequest.status !== "pending") {
            return Response.json({ error: "Only pending requests can be approved" }, { status: 400 });
          }

          const origin =
            request.headers.get("origin") ??
            process.env.VITE_APP_URL ??
            process.env.SUPABASE_URL?.replace(".supabase.co", ".lovable.app") ??
            "http://localhost:8080";

          const { data: inviteData, error: inviteError } = await supabaseAdmin.auth.admin.inviteUserByEmail(
            accessRequest.email,
            {
              data: {
                role: "agent",
                agent_invite: "true",
                access_request_id: accessRequest.id,
                full_name: accessRequest.full_name,
                country_code: accessRequest.country_code,
                business_name: accessRequest.business_name,
                city: accessRequest.city,
              },
              redirectTo: `${origin}/accept-invite`,
            },
          );

          if (inviteError) {
            return Response.json({ error: inviteError.message }, { status: 400 });
          }

          const now = new Date().toISOString();
          const { error: updateError } = await supabaseAdmin
            .from("agent_access_requests")
            .update({
              status: "invited",
              reviewed_by: adminId,
              reviewed_at: now,
              invited_at: now,
            })
            .eq("id", accessRequest.id);

          if (updateError) {
            return Response.json({ error: updateError.message }, { status: 500 });
          }

          await supabaseAdmin.from("admin_audit_log").insert({
            admin_id: adminId,
            action: "agent_access.approve",
            entity_type: "agent_access_request",
            entity_id: accessRequest.id,
            details: {
              email: accessRequest.email,
              invited_user_id: inviteData.user?.id ?? null,
            },
          });

          return Response.json({ success: true, status: "invited" });
        } catch (err) {
          if (err instanceof Response) return err;
          const message = err instanceof Error ? err.message : "Approval failed";
          return Response.json({ error: message }, { status: 500 });
        }
      },
    },
  },
});
