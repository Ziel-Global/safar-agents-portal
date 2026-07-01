import type { BadgeStatus } from "@/lib/badges";

export interface CredentialAlertSummary {
  total: number;
  pending: number;
  missing: number;
  needsReupload: number;
  label: string;
}

export function computeCredentialAlerts(
  badgeTypeIds: string[],
  submissions: { badge_type: string; status: BadgeStatus }[],
): CredentialAlertSummary {
  const byType = new Map(submissions.map((s) => [s.badge_type, s.status]));

  let pending = 0;
  let missing = 0;
  let needsReupload = 0;

  for (const typeId of badgeTypeIds) {
    const status = byType.get(typeId);
    if (!status) {
      missing += 1;
    } else if (status === "pending") {
      pending += 1;
    } else if (status === "rejected" || status === "expired") {
      needsReupload += 1;
    }
  }

  const parts: string[] = [];
  if (pending > 0) {
    parts.push(
      `${pending} verification pending — awaiting admin review`,
    );
  }
  if (missing > 0) {
    parts.push(`${missing} credential${missing > 1 ? "s" : ""} not uploaded`);
  }
  if (needsReupload > 0) {
    parts.push(`${needsReupload} need${needsReupload > 1 ? "" : "s"} re-upload`);
  }

  return {
    // Sidebar count tracks documents that still need action from the agent.
    // Pending submissions are already uploaded, so they should not increment the badge.
    total: missing + needsReupload,
    pending,
    missing,
    needsReupload,
    label: parts.join(" · "),
  };
}
