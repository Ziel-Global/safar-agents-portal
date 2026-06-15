import { useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Safar Agents" },
      { name: "description", content: "Agent portal for managing Hajj and Umrah packages, leads, and bookings." },
    ],
  }),
  component: IndexRedirect,
});

function IndexRedirect() {
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user && profile?.role === "agent") {
      navigate({ to: "/agent/dashboard", replace: true });
      return;
    }
    navigate({ to: "/login", replace: true });
  }, [loading, user, profile, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}
