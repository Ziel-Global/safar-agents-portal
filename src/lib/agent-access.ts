export const AGENT_ACCESS_STATUSES = ["pending", "rejected", "invited", "completed"] as const;
export type AgentAccessStatus = (typeof AGENT_ACCESS_STATUSES)[number];

export interface AgentAccessRequest {
  id: string;
  email: string;
  full_name: string;
  country_code: string;
  business_name: string;
  city: string;
  status: AgentAccessStatus;
  rejection_reason: string | null;
  reviewed_by: string | null;
  reviewed_at: string | null;
  invited_at: string | null;
  completed_at: string | null;
  user_id: string | null;
  created_at: string;
  updated_at: string;
}

export const ACCESS_STATUS_LABEL: Record<AgentAccessStatus, string> = {
  pending: "Pending review",
  rejected: "Rejected",
  invited: "Invite sent",
  completed: "Active",
};

export const ACCESS_STATUS_STYLE: Record<AgentAccessStatus, string> = {
  pending: "bg-amber-100 text-amber-900 border-amber-300",
  rejected: "bg-rose-100 text-rose-900 border-rose-300",
  invited: "bg-sky-100 text-sky-900 border-sky-300",
  completed: "bg-emerald-100 text-emerald-900 border-emerald-300",
};
