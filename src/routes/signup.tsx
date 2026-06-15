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

export const Route = createFileRoute("/signup")({
  validateSearch: (search: Record<string, unknown>) => ({
    redirect: typeof search.redirect === "string" ? search.redirect : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Agent Sign Up - Safar" },
      { name: "description", content: "Create your Safar agent account." },
    ],
  }),
  component: SignupPage,
});

function safeRedirect(target: string | undefined): string | null {
  if (!target) return null;
  if (target.startsWith("/") && !target.startsWith("//")) return target;
  return null;
}

function SignupPage() {
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();
  const search = Route.useSearch();
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    if (!loading && user && profile?.role === "agent") {
      const intended = safeRedirect(search.redirect) ?? "/agent/dashboard";
      navigate({ to: intended as "/agent/dashboard", replace: true });
    }
  }, [loading, user, profile, navigate, search.redirect]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!/^[\p{L}\s'-]+$/u.test(fullName.trim())) {
      toast.error("Full name can only contain letters, spaces, hyphens, and apostrophes");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: "agent",
          full_name: fullName,
          country_code: country,
          business_name: businessName,
          city,
        },
        emailRedirectTo: `${window.location.origin}/agent/dashboard`,
      },
    });

    setSubmitting(false);

    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Account created — welcome to Safar!");
  };

  return (
    <AuthLayout>
      <div className="flex flex-1 items-center justify-center px-4 py-16">
        <Card className="w-full max-w-md border-border bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Create your agent account</CardTitle>
            <CardDescription>List packages and manage leads on Safar</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full name</Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value.replace(/[^\p{L}\s'-]/gu, ""))}
                  required
                  autoComplete="name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={8}
                  required
                  autoComplete="new-password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  placeholder="e.g. United Kingdom"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  autoComplete="country-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessName">Business name</Label>
                <Input
                  id="businessName"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  placeholder="e.g. London"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  autoComplete="address-level2"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={submitting}
              >
                {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Create account"}
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </AuthLayout>
  );
}
