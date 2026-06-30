import { useEffect, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";

export function AdminProtectedRoute({ children }: { children: ReactNode }) {
  const { loading, user, profile } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate({ to: "/login", search: { redirect: "/admin/access-requests" } as never, replace: true });
      return;
    }
    if (profile?.role !== "admin") {
      navigate({ to: "/unauthorised", replace: true });
    }
  }, [loading, user, profile, navigate]);

  if (loading || !user || profile?.role !== "admin") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return <>{children}</>;
}
