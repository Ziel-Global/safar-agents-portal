import { s as supabase } from "./router-BZcuc5AB.mjs";
const TIER_RANK = {
  free: 0,
  standard: 1,
  professional: 2,
  premium: 3,
  enterprise: 4
};
const TIER_LABEL = {
  free: "Free",
  standard: "Standard",
  professional: "Professional",
  premium: "Premium",
  enterprise: "Enterprise"
};
async function fetchSubscriptionPlans() {
  const { data, error } = await supabase.from("subscription_plans").select("*").order("sort_order", { ascending: true });
  if (error || !data) return [];
  return data.map((row) => ({
    id: row.id,
    name: row.name,
    tier: row.tier,
    price_monthly: Number(row.price_monthly ?? 0),
    currency: row.currency ?? "GBP",
    features: Array.isArray(row.features) ? row.features : [],
    lead_limit: row.lead_limit ?? null,
    sort_order: row.sort_order,
    is_custom: row.is_custom ?? false
  }));
}
function tierMeets(current, required) {
  const c = current ?? "free";
  return (TIER_RANK[c] ?? 0) >= TIER_RANK[required];
}
async function setAgentTier(agentId, tier) {
  const { error } = await supabase.from("agents").update({ subscription_tier: tier }).eq("id", agentId);
  if (error) return { ok: false, error: error.message };
  return { ok: true };
}
export {
  TIER_LABEL as T,
  TIER_RANK as a,
  fetchSubscriptionPlans as f,
  setAgentTier as s,
  tierMeets as t
};
