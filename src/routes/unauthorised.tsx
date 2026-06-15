import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldOff, ArrowLeft, LayoutDashboard } from "lucide-react";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export const Route = createFileRoute("/unauthorised")({
  head: () => ({
    meta: [
      { title: "Access denied - Safar Agents" },
      { name: "description", content: "You don't have permission to view this page." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: UnauthorisedPage,
});

function UnauthorisedPage() {
  const { profile, user } = useAuth();

  return (
    <AuthLayout>
      <div className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="mx-auto w-full max-w-xl text-center">
          <div className="relative mx-auto mb-8 h-40 w-40">
            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl" />
            <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-border bg-card shadow-xl shadow-primary/5">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-destructive/10">
                <ShieldOff className="h-12 w-12 text-destructive" strokeWidth={1.75} />
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Access denied
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            This portal is for registered travel agents only. Sign in with an agent account or
            register your agency.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="outline">
              <Link to="/login">
                <ArrowLeft className="mr-1 h-4 w-4" /> Back to sign in
              </Link>
            </Button>
            {user && profile?.role === "agent" ? (
              <Button asChild>
                <Link to="/agent/dashboard">
                  <LayoutDashboard className="mr-1 h-4 w-4" /> Go to dashboard
                </Link>
              </Button>
            ) : (
              <Button asChild>
                <Link to="/signup">Register as an agent</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
