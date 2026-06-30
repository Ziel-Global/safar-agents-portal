import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CheckCircle2, Loader2 } from "lucide-react";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Request Agent Access - Safar" },
      { name: "description", content: "Request access to the Safar agent portal." },
    ],
  }),
  component: RequestAccessPage,
});

function RequestAccessPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!/^[\p{L}\s'-]+$/u.test(fullName.trim())) {
      toast.error("Full name can only contain letters, spaces, hyphens, and apostrophes");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("agent_access_requests").insert({
      email: email.trim().toLowerCase(),
      full_name: fullName.trim(),
      country_code: country.trim(),
      business_name: businessName.trim(),
      city: city.trim(),
      status: "pending",
    });
    setSubmitting(false);

    if (error) {
      const msg = error.message.includes("already")
        ? "A request for this email is already being reviewed."
        : error.message;
      toast.error(msg);
      return;
    }

    setSubmitted(true);
    toast.success("Request submitted");
  };

  if (submitted) {
    return (
      <AuthLayout>
        <div className="flex flex-1 items-center justify-center px-4 py-16">
          <Card className="w-full max-w-md border-border bg-card shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle2 className="h-6 w-6 text-emerald-700" />
              </div>
              <CardTitle className="text-2xl">Request received</CardTitle>
              <CardDescription>
                We&apos;ll review your application and email you at <strong>{email}</strong> if
                approved. You&apos;ll then be able to set up your login credentials.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full" variant="outline">
                <Link to="/login">Back to sign in</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <div className="flex flex-1 items-center justify-center px-4 py-16">
        <Card className="w-full max-w-md border-border bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Request agent access</CardTitle>
            <CardDescription>
              Submit your agency details for review. Approved agents receive an email invitation to
              create their login.
            </CardDescription>
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
                {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Submit request"}
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
