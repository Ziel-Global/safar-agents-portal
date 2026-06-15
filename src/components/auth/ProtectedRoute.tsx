import { useEffect, type ReactNode } from "react";
import { useNavigate, useLocation } from "@tanstack/react-router";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";

interface ProtectedRouteProps {
  children: ReactNode;
  /** Where to send unauthenticated users (default /login). */
  redirectTo?: string;
}

/**
 * Guard for authenticated agent routes.
 */
export function ProtectedRoute({ children, redirectTo = "/login" }: ProtectedRouteProps) {
  const { loading, user, profile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const roleMismatch = !!profile && profile.role !== "agent";
  const awaitingProfile = !!user && !profile;

  useEffect(() => {
    if (loading) return;

    if (!user) {
      navigate({
        to: redirectTo,
        search: { redirect: location.href } as never,
        replace: true,
      });
      return;
    }

    if (roleMismatch) {
      navigate({ to: "/unauthorised" as never, replace: true });
    }
  }, [loading, user, roleMismatch, navigate, location.href, redirectTo]);

  if (loading && !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || roleMismatch || awaitingProfile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return <>{children}</>;
}
