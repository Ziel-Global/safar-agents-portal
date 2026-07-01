import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { computeCredentialAlerts, type CredentialAlertSummary } from "@/lib/credential-alerts";
import type { BadgeStatus } from "@/lib/badges";

const EMPTY: CredentialAlertSummary = {
  total: 0,
  pending: 0,
  missing: 0,
  needsReupload: 0,
  label: "",
};

export function useCredentialAlerts(agentId: string | undefined) {
  const [alerts, setAlerts] = useState<CredentialAlertSummary>(EMPTY);

  const refresh = useCallback(async () => {
    if (!agentId) {
      setAlerts(EMPTY);
      return;
    }

    const [{ data: types }, { data: subs }] = await Promise.all([
      supabase.from("badge_types").select("id").order("name"),
      supabase.from("agent_badges").select("badge_type, status").eq("agent_id", agentId),
    ]);

    const badgeTypeIds = (types ?? []).map((t) => t.id);
    const submissions = (subs ?? []) as { badge_type: string; status: BadgeStatus }[];
    setAlerts(computeCredentialAlerts(badgeTypeIds, submissions));
  }, [agentId]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  useEffect(() => {
    const onFocus = () => {
      refresh();
    };
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, [refresh]);

  useEffect(() => {
    if (!agentId) return;

    const channel = supabase
      .channel(`credential-alerts:${agentId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "agent_badges",
          filter: `agent_id=eq.${agentId}`,
        },
        () => {
          refresh();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [agentId, refresh]);

  return alerts;
}
