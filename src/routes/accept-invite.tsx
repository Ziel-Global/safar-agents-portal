import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, AlertCircle } from "lucide-react";
import {
  acceptInvite,
  verifyInviteToken,
  type InviteVerifySuccess,
} from "@/lib/admin-api";

export const Route = createFileRoute("/accept-invite")({
  validateSearch: (search: Record<string, unknown>) => ({
    token: typeof search.token === "string" ? search.token : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Set Up Your Account - Safar" },
      { name: "description", content: "Complete your Safar agent account setup." },
    ],
  }),
  component: AcceptInvitePage,
});

type PageState =
  | { kind: "missing-token" }
  | { kind: "verifying" }
  | { kind: "invalid"; message: string }
  | { kind: "ready"; invite: InviteVerifySuccess; token: string };

function AcceptInvitePage() {
  const { token } = Route.useSearch();
  const navigate = useNavigate();
  const [page, setPage] = useState<PageState>(
    token ? { kind: "verifying" } : { kind: "missing-token" },
  );
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!token) {
      setPage({ kind: "missing-token" });
      return;
    }

    let cancelled = false;
    setPage({ kind: "verifying" });

    verifyInviteToken(token)
      .then((result) => {
        if (cancelled) return;
        if (result.valid) {
          setPage({ kind: "ready", invite: result, token });
        } else {
          setPage({ kind: "invalid", message: result.error });
        }
      })
      .catch(() => {
        if (cancelled) return;
        setPage({
          kind: "invalid",
          message: "Could not verify invite link. Please try again later.",
        });
      });

    return () => {
      cancelled = true;
    };
  }, [token]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (page.kind !== "ready") return;

    if (password !== confirm) {
      toast.error("Passwords don't match");
      return;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setSubmitting(true);
    const result = await acceptInvite(page.token, password);
    setSubmitting(false);

    if ("error" in result) {
      toast.error(result.error);
      return;
    }

    if (result.success !== true) {
      toast.error("Could not create account. Please try again.");
      return;
    }

    toast.success("Account created — sign in with your new password");
    navigate({
      to: "/login",
      search: { created: "1" },
      replace: true,
    });
  };

  return (
    <AuthLayout>
      <div className="flex flex-1 items-center justify-center px-4 py-16">
        <Card className="w-full max-w-md border-border bg-card shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Set up your agent account</CardTitle>
            <CardDescription>
              {page.kind === "ready"
                ? "Choose a password to activate your Safar agent account."
                : "Complete your registration using the link from your invitation email."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {page.kind === "missing-token" || page.kind === "invalid" ? (
              <div className="flex flex-col items-center gap-3 rounded-lg border border-rose-200 bg-rose-50 p-4 text-center text-sm text-rose-900">
                <AlertCircle className="h-8 w-8 text-rose-600" />
                <p className="font-medium">
                  {page.kind === "missing-token"
                    ? "Invalid or missing invite link"
                    : page.message}
                </p>
                <p className="text-xs text-rose-800/80">
                  Open the full link from your invitation email, or contact support for a new
                  invite.
                </p>
              </div>
            ) : null}

            {page.kind === "verifying" ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : null}

            {page.kind === "ready" ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={page.invite.fullName}
                    readOnly
                    className="bg-muted"
                    autoComplete="name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={page.invite.email}
                    readOnly
                    className="bg-muted"
                    autoComplete="email"
                  />
                </div>
                {page.invite.businessName ? (
                  <p className="text-sm text-muted-foreground">
                    Agency: <span className="font-medium text-foreground">{page.invite.businessName}</span>
                  </p>
                ) : null}
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
                  <Label htmlFor="confirm">Confirm password</Label>
                  <Input
                    id="confirm"
                    type="password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    minLength={8}
                    required
                    autoComplete="new-password"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={submitting}>
                  {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Create account"}
                </Button>
              </form>
            ) : null}

            <p className="mt-4 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </AuthLayout>
  );
}
