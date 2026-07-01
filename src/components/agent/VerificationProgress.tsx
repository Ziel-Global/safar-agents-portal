import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ShieldCheck, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { levelFromCount, LEVEL_STYLES, type VerificationLevel } from "@/lib/badges";
import { cn } from "@/lib/utils";

const TOTAL_BADGES = 4;

export function VerificationProgress({ agentId }: { agentId: string }) {
  const [totalBadges, setTotalBadges] = useState<number | null>(null);
  const [verified, setVerified] = useState<number | null>(null);
  const [uploaded, setUploaded] = useState(0);
  const [pending, setPending] = useState(0);
  const [rejected, setRejected] = useState(0);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [{ data: badgeTypes }, { data }] = await Promise.all([
        supabase.from("badge_types").select("id"),
        supabase.from("agent_badges").select("status").eq("agent_id", agentId),
      ]);
      if (cancelled) return;
      const rows = data ?? [];
      const total = badgeTypes?.length ?? TOTAL_BADGES;
      setTotalBadges(total);
      setUploaded(rows.length);
      setVerified(rows.filter((r) => r.status === "verified").length);
      setPending(rows.filter((r) => r.status === "pending").length);
      setRejected(rows.filter((r) => r.status === "rejected" || r.status === "expired").length);
    })();
    return () => {
      cancelled = true;
    };
  }, [agentId]);

  if (verified == null || totalBadges == null) {
    return <Skeleton className="h-32 rounded-xl" />;
  }

  const level: VerificationLevel = levelFromCount(verified);
  const pct = totalBadges > 0 ? Math.min(100, Math.round((uploaded / totalBadges) * 100)) : 0;
  const remaining = Math.max(0, totalBadges - uploaded);
  const showCredentialsButton = remaining > 0;

  return (
    <Card className="border-border">
      <CardHeader className="pb-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <CardTitle className="text-base">Verification progress</CardTitle>
          </div>
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize",
              LEVEL_STYLES[level],
            )}
          >
            {level === "none" ? "Not verified" : `${level} tier`}
          </span>
        </div>
        <CardDescription>
          {remaining > 0
            ? `Upload ${remaining} more credential${remaining > 1 ? "s" : ""} to continue toward ${
                level === "none"
                  ? "bronze"
                  : level === "bronze"
                    ? "silver"
                    : level === "silver"
                      ? "gold"
                      : "platinum"
              } tier.`
            : "You've reached the highest verification tier. Pilgrims trust you most."}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="mb-1.5 flex items-center justify-between text-xs text-muted-foreground">
            <span>
              {uploaded} of {totalBadges} uploaded
            </span>
            {pending > 0 ? <span>{pending} under review</span> : null}
          </div>
          <Progress value={pct} className="h-2" />
        </div>
        {pending > 0 ? (
          <p className="text-xs text-muted-foreground">
            Verification pending - awaiting admin review. You can upload again once review is
            complete.
          </p>
        ) : null}
        {rejected > 0 ? (
          <div className="rounded-md border border-rose-300 bg-rose-50 p-2.5 text-xs text-rose-900">
            {rejected} document{rejected > 1 ? "s were" : " was"} rejected. Please re-upload in
            Credentials.
          </div>
        ) : null}
        {showCredentialsButton ? (
          <Button asChild size="sm" variant="default">
            <Link to="/agent/onboarding/credentials">
              Add credentials
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}
