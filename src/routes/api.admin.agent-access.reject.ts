import { createFileRoute } from "@tanstack/react-router";
import { verifyAdminRequest } from "@/lib/admin-auth";

export const Route = createFileRoute("/api/admin/agent-access/reject")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { userId: adminId } = await verifyAdminRequest(request);
          const body = (await request.json()) as { requestId?: string; reason?: string };
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
            return Response.json({ error: "Only pending requests can be rejected" }, { status: 400 });
          }

          const now = new Date().toISOString();
          const reason = body.reason?.trim() || null;

          const { error: updateError } = await supabaseAdmin
            .from("agent_access_requests")
            .update({
              status: "rejected",
              rejection_reason: reason,
              reviewed_by: adminId,
              reviewed_at: now,
            })
            .eq("id", accessRequest.id);

          if (updateError) {
            return Response.json({ error: updateError.message }, { status: 500 });
          }

          await supabaseAdmin.from("admin_audit_log").insert({
            admin_id: adminId,
            action: "agent_access.reject",
            entity_type: "agent_access_request",
            entity_id: accessRequest.id,
            details: { email: accessRequest.email, reason },
          });

          return Response.json({ success: true, status: "rejected" });
        } catch (err) {
          if (err instanceof Response) return err;
          const message = err instanceof Error ? err.message : "Rejection failed";
          return Response.json({ error: message }, { status: 500 });
        }
      },
    },
  },
});
