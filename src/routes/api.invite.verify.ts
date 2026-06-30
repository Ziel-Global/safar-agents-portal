import { createFileRoute } from "@tanstack/react-router";
import { verifyInviteTokenServer } from "@/lib/invite-server";

export const Route = createFileRoute("/api/invite/verify")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        try {
          const url = new URL(request.url);
          const token = url.searchParams.get("token") ?? "";
          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
          const result = await verifyInviteTokenServer(supabaseAdmin, token);
          const status = result.valid ? 200 : 400;
          return Response.json(result, { status });
        } catch (err) {
          const message = err instanceof Error ? err.message : "Verification failed";
          return Response.json({ valid: false, error: message }, { status: 500 });
        }
      },
    },
  },
});
