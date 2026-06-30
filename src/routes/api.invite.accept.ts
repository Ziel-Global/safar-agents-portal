import { createFileRoute } from "@tanstack/react-router";
import { acceptInviteServer } from "@/lib/invite-server";

export const Route = createFileRoute("/api/invite/accept")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as { token?: string; password?: string };
          if (!body.token) {
            return Response.json({ error: "token is required" }, { status: 400 });
          }
          if (!body.password) {
            return Response.json({ error: "password is required" }, { status: 400 });
          }

          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
          const result = await acceptInviteServer(supabaseAdmin, body.token, body.password);

          if ("error" in result) {
            return Response.json({ error: result.error }, { status: 400 });
          }

          return Response.json(result);
        } catch (err) {
          const message = err instanceof Error ? err.message : "Accept failed";
          return Response.json({ error: message }, { status: 500 });
        }
      },
    },
  },
});
