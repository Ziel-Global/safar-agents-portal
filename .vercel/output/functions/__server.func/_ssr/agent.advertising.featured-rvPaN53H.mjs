import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useAuth, D as DashboardLayout, B as Button, l as cn, s as supabase, k as Badge, L as Label, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, I as Input } from "./router-BZcuc5AB.mjs";
import { P as ProtectedRoute } from "./ProtectedRoute-DoVUnduH.mjs";
import { t as tierMeets, T as TIER_LABEL } from "./subscriptions-CHaOBxgA.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { am as Lock, A as ArrowLeft, x as Plus, $ as Eye, an as MousePointerClick, R as Send, a1 as PoundSterling } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-separator.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/radix-ui__react-tooltip.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__react-menu.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-scroll-area.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-avatar.mjs";
import "../_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-switch.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/radix-ui__react-toggle-group.mjs";
import "../_libs/radix-ui__react-toggle.mjs";
import "../_libs/radix-ui__react-radio-group.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/date-fns.mjs";
function FeatureLock({
  requiredTier,
  featureName,
  className,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative overflow-hidden rounded-xl border border-border bg-card", className), children: [
    children ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none select-none blur-sm", "aria-hidden": true, children }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/70 p-6 text-center backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-content-center rounded-full bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground", children: [
          featureName,
          " is locked"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [
          "Upgrade to ",
          TIER_LABEL[requiredTier],
          " to unlock this feature."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/agent/billing", children: [
        "Upgrade to ",
        TIER_LABEL[requiredTier]
      ] }) })
    ] })
  ] });
}
async function fetchAgentFeaturedCampaigns(agentId) {
  const { data, error } = await supabase.from("featured_campaigns").select("*").eq("agent_id", agentId).order("created_at", { ascending: false });
  if (error || !data) return [];
  return data;
}
async function fetchFeaturedMetrics(campaignIds) {
  const map = /* @__PURE__ */ new Map();
  if (campaignIds.length === 0) return map;
  const { data, error } = await supabase.rpc("featured_metrics_for_campaigns", {
    _campaign_ids: campaignIds
  });
  if (error) throw error;
  for (const r of data ?? []) {
    map.set(r.campaign_id, {
      impressions: r.impressions ?? 0,
      clicks: r.clicks ?? 0,
      rfqs: r.rfqs ?? 0,
      cost: Number(r.cost ?? 0)
    });
  }
  return map;
}
function estimateDailyImpressions(budget, bid, marketCount) {
  if (bid <= 0) return 0;
  const fromBudget = Math.floor(budget / Math.max(bid, 0.01));
  const reach = Math.max(marketCount, 1) * 250;
  return Math.min(fromBudget, reach);
}
const TARGET_MARKETS = [
  { code: "GB", name: "United Kingdom" },
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "PK", name: "Pakistan" },
  { code: "ID", name: "Indonesia" },
  { code: "IN", name: "India" },
  { code: "BD", name: "Bangladesh" },
  { code: "NG", name: "Nigeria" },
  { code: "TR", name: "Türkiye" },
  { code: "AE", name: "UAE" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "MY", name: "Malaysia" },
  { code: "EG", name: "Egypt" },
  { code: "FR", name: "France" },
  { code: "DE", name: "Germany" }
];
function AdvertisingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdvertisingContent, {}) });
}
function AdvertisingContent() {
  const {
    agent
  } = useAuth();
  const tier = agent?.subscription_tier ?? "free";
  const allowed = tierMeets(tier, "professional");
  if (!agent?.id) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardLayout, { title: "Featured Listings", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full max-w-3xl text-sm text-muted-foreground", children: "Loading agent…" }) });
  }
  if (!allowed) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardLayout, { title: "Featured Listings", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureLock, { requiredTier: "professional", featureName: "Featured Listings", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground", children: "Boost your reach" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Sponsored packages appear at the top of relevant search results in the markets you choose." })
    ] }) }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdvertisingDashboard, { agentId: agent.id });
}
function AdvertisingDashboard({
  agentId
}) {
  const [packages, setPackages] = reactExports.useState([]);
  const [campaigns, setCampaigns] = reactExports.useState([]);
  const [metrics, setMetrics] = reactExports.useState(/* @__PURE__ */ new Map());
  const [loading, setLoading] = reactExports.useState(true);
  const [showForm, setShowForm] = reactExports.useState(false);
  reactExports.useEffect(() => {
    void (async () => {
      setLoading(true);
      const [pkgRes, list] = await Promise.all([supabase.from("packages").select("id, title").eq("agent_id", agentId).eq("status", "active").order("created_at", {
        ascending: false
      }), fetchAgentFeaturedCampaigns(agentId)]);
      setPackages(pkgRes.data ?? []);
      setCampaigns(list);
      const m = await fetchFeaturedMetrics(list.map((c) => c.id));
      setMetrics(m);
      setLoading(false);
    })();
  }, [agentId]);
  const reload = async () => {
    const list = await fetchAgentFeaturedCampaigns(agentId);
    setCampaigns(list);
    const m = await fetchFeaturedMetrics(list.map((c) => c.id));
    setMetrics(m);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardLayout, { title: "Featured Listings", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-6xl space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/agent/dashboard", className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Back to dashboard"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setShowForm((v) => !v), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4" }),
        " ",
        showForm ? "Cancel" : "New campaign"
      ] })
    ] }),
    showForm ? /* @__PURE__ */ jsxRuntimeExports.jsx(NewCampaignForm, { agentId, packages, onCreated: async () => {
      setShowForm(false);
      await reload();
    } }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-lg font-semibold text-foreground", children: "Active campaigns" }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground", children: "Loading…" }) : campaigns.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-dashed border-border bg-card p-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "No campaigns yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Create a featured campaign to appear at the top of search results." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2", children: campaigns.map((c) => {
        const m = metrics.get(c.id) ?? {
          impressions: 0,
          clicks: 0,
          rfqs: 0,
          cost: 0
        };
        const ctr = m.impressions > 0 ? m.clicks / m.impressions * 100 : 0;
        const pkg = packages.find((p) => p.id === c.package_id);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: c.name ?? pkg?.title ?? "Campaign" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                c.start_date,
                " → ",
                c.end_date
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: cn(c.status === "active" ? "bg-primary/10 text-primary" : "bg-secondary text-foreground/70"), children: c.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-1", children: (c.target_markets ?? []).slice(0, 6).map((cc) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-secondary px-2 py-0.5 text-[11px] font-medium text-foreground/70", children: TARGET_MARKETS.find((t) => t.code === cc)?.name ?? cc }, cc)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: Eye, label: "Impressions", value: m.impressions }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: MousePointerClick, label: "Clicks", value: m.clicks }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: Send, label: "Enquiries", value: m.rfqs }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: PoundSterling, label: "Cost", value: `£${m.cost.toFixed(2)}` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs text-muted-foreground", children: [
            "CTR: ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground/80", children: [
              ctr.toFixed(2),
              "%"
            ] }),
            " · ",
            "Bid: £",
            Number(c.bid_amount).toFixed(2),
            " · Budget: £",
            Number(c.budget).toFixed(0)
          ] })
        ] }, c.id);
      }) })
    ] })
  ] }) });
}
function Metric({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-background p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3" }),
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-lg font-bold text-foreground", children: value })
  ] });
}
function NewCampaignForm({
  agentId,
  packages,
  onCreated
}) {
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const in14 = new Date(Date.now() + 14 * 864e5).toISOString().slice(0, 10);
  const [packageId, setPackageId] = reactExports.useState(packages[0]?.id ?? "");
  const [markets, setMarkets] = reactExports.useState(["GB"]);
  const [budget, setBudget] = reactExports.useState(100);
  const [bid, setBid] = reactExports.useState(0.5);
  const [startDate, setStartDate] = reactExports.useState(today);
  const [endDate, setEndDate] = reactExports.useState(in14);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const estDaily = reactExports.useMemo(() => estimateDailyImpressions(budget, bid, markets.length), [budget, bid, markets.length]);
  const days = Math.max(1, Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / 864e5) + 1);
  const toggleMarket = (code) => setMarkets((prev) => prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]);
  const submit = async () => {
    if (!packageId) {
      toast.error("Select a package to promote");
      return;
    }
    if (markets.length === 0) {
      toast.error("Choose at least one target market");
      return;
    }
    setSubmitting(true);
    const {
      error
    } = await supabase.from("featured_campaigns").insert({
      agent_id: agentId,
      package_id: packageId,
      target_markets: markets,
      budget,
      bid_amount: bid,
      start_date: startDate,
      end_date: endDate,
      status: "active"
    });
    setSubmitting(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Featured campaign created");
    await onCreated();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-primary/30 bg-card p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground", children: "New featured campaign" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Package to promote" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: packageId, onValueChange: setPackageId, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Choose a package" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: packages.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p.id, children: p.title }, p.id)) })
        ] }),
        packages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "You have no active packages - publish one first." }) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Daily budget (£)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: 1, value: budget, onChange: (e) => setBudget(Number(e.target.value)), className: "mt-1.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Bid per click (£)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.05", min: 0.05, value: bid, onChange: (e) => setBid(Number(e.target.value)), className: "mt-1.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Start date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: startDate, onChange: (e) => setStartDate(e.target.value), className: "mt-1.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "End date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: endDate, onChange: (e) => setEndDate(e.target.value), className: "mt-1.5" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Target markets" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap gap-2", children: TARGET_MARKETS.map((m) => {
        const active = markets.includes(m.code);
        return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => toggleMarket(m.code), className: cn("rounded-full border px-3 py-1 text-xs font-medium transition-colors", active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground/70 hover:border-primary/40"), children: m.name }, m.code);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-lg border border-border bg-secondary/40 p-4 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Estimated reach" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-muted-foreground", children: [
        "Approx. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: estDaily.toLocaleString() }),
        " ",
        "impressions/day across ",
        markets.length || 0,
        " market(s) for ",
        days,
        " day(s)."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex justify-end gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: submit, disabled: submitting, children: submitting ? "Creating…" : "Launch campaign" }) })
  ] });
}
export {
  AdvertisingPage as component
};
