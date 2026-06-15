import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/login")({
  validateSearch: (search: Record<string, unknown>) => ({
    redirect: typeof search.redirect === "string" ? search.redirect : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Agent Login - Safar" },
      { name: "description", content: "Sign in to the Safar agent portal." },
    ],
  }),
  component: LoginPage,
});

function safeRedirect(target: string | undefined): string | null {
  if (!target) return null;
  if (target.startsWith("/") && !target.startsWith("//")) return target;
  return null;
}

function LoginPage() {
  const { user, profile, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const search = Route.useSearch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (loading || !user || !profile) return;
    const intended = safeRedirect(search.redirect);
    if (!intended) return;
    if (profile.role !== "agent") {
      navigate({ to: "/unauthorised", replace: true });
      return;
    }
    navigate({ to: intended as "/agent/dashboard", replace: true });
  }, [loading, user, profile, navigate, search.redirect]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setSubmitting(false);

    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Welcome back");
  };

  return (
    <AuthLayout>
      <div className="flex flex-1 items-center justify-center px-4 py-16">
        <Card className="w-full max-w-md border-border bg-card shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Agent sign in</CardTitle>
            <CardDescription>Access your Safar agent dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            {user && profile && (
              <div className="mb-4 rounded-md border border-border bg-muted/50 p-3 text-sm">
                <p className="text-muted-foreground">
                  You're already signed in
                  {profile.full_name ? ` as ${profile.full_name}` : ""}.
                </p>
                <div className="mt-2 flex items-center gap-3">
                  {profile.role === "agent" ? (
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={() => navigate({ to: "/agent/dashboard" })}
                    >
                      Continue to dashboard
                    </Button>
                  ) : null}
                  <button
                    type="button"
                    className="text-xs text-primary hover:underline"
                    onClick={() => signOut()}
                  >
                    Sign out to switch accounts
                  </button>
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@agency.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={submitting}
              >
                {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Sign in"}
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                No account?{" "}
                <Link to="/signup" className="font-medium text-primary hover:underline">
                  Register as an agent
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </AuthLayout>
  );
}
