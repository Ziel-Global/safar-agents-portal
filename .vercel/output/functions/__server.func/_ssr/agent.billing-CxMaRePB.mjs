import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useAuth, D as DashboardLayout, k as Badge, B as Button, l as cn } from "./router-BZcuc5AB.mjs";
import { P as ProtectedRoute } from "./ProtectedRoute-DoVUnduH.mjs";
import { f as fetchSubscriptionPlans, T as TIER_LABEL, a as TIER_RANK, s as setAgentTier } from "./subscriptions-CHaOBxgA.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { k as Sparkles, a as Check } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
function BillingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BillingContent, {}) });
}
function BillingContent() {
  const {
    agent,
    refresh
  } = useAuth();
  const [plans, setPlans] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [pendingTier, setPendingTier] = reactExports.useState(null);
  const currentTier = agent?.subscription_tier ?? "free";
  const currentRank = TIER_RANK[currentTier] ?? 0;
  reactExports.useEffect(() => {
    void fetchSubscriptionPlans().then((p) => {
      setPlans(p);
      setLoading(false);
    });
  }, []);
  const handleChange = async (tier) => {
    if (!agent?.id) return;
    setPendingTier(tier);
    const {
      ok,
      error
    } = await setAgentTier(agent.id, tier);
    if (!ok) {
      toast.error(error ?? "Failed to update plan");
    } else {
      toast.success(`Switched to ${TIER_LABEL[tier]} plan`);
      await refresh();
    }
    setPendingTier(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardLayout, { title: "Billing & Plans", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Choose the plan that fits your agency" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
        "You're currently on the",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: TIER_LABEL[currentTier] }),
        " ",
        "plan."
      ] })
    ] }) }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card p-12 text-center text-sm text-muted-foreground", children: "Loading plans…" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5", children: plans.map((plan) => {
      const isCurrent = plan.tier === currentTier;
      const isUpgrade = (TIER_RANK[plan.tier] ?? 0) > currentRank;
      const isDowngrade = (TIER_RANK[plan.tier] ?? 0) < currentRank;
      const featured = plan.tier === "professional";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative flex h-full flex-col rounded-xl border bg-card p-5 shadow-sm", featured ? "border-primary ring-2 ring-primary/20" : "border-border"), children: [
        featured ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-1 h-3 w-3" }),
          " Most popular"
        ] }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground", children: plan.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex items-baseline gap-1", children: plan.is_custom ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-foreground", children: "Custom" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-3xl font-bold text-foreground", children: [
            "£",
            plan.price_monthly.toFixed(0)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "/mo" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 flex-1 space-y-2 text-sm", children: plan.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
        ] }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 min-w-0", children: isCurrent ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { disabled: true, variant: "outline", className: "h-auto min-h-9 w-full whitespace-normal py-2", children: "Current plan" }) : plan.is_custom ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "h-auto min-h-9 w-full whitespace-normal py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:sales@safar.example", children: "Contact sales" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "h-auto min-h-9 w-full whitespace-normal py-2 text-xs leading-tight sm:text-sm", variant: isUpgrade ? "default" : "outline", disabled: pendingTier !== null, onClick: () => handleChange(plan.tier), children: pendingTier === plan.tier ? "Updating…" : isUpgrade ? `Upgrade to ${plan.name}` : isDowngrade ? `Downgrade to ${plan.name}` : `Switch to ${plan.name}` }) })
      ] }, plan.id);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground", children: "Feature comparison" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[640px] text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-4", children: "Feature" }),
          plans.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-4 font-semibold text-foreground", children: p.name }, p.id))
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: COMPARISON_ROWS.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 text-foreground/80", children: row.label }),
          plans.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: row.values[p.tier] ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "-" }) }, p.id))
        ] }, row.label)) })
      ] }) })
    ] })
  ] }) });
}
const COMPARISON_ROWS = [{
  label: "Public agency listing",
  values: {
    free: true,
    standard: true,
    professional: true,
    premium: true,
    enterprise: true
  }
}, {
  label: "Unlimited leads",
  values: {
    free: false,
    standard: true,
    professional: true,
    premium: true,
    enterprise: true
  }
}, {
  label: "Performance analytics",
  values: {
    free: false,
    standard: true,
    professional: true,
    premium: true,
    enterprise: true
  }
}, {
  label: "Media gallery & templates",
  values: {
    free: false,
    standard: true,
    professional: true,
    premium: true,
    enterprise: true
  }
}, {
  label: "Promotional campaigns",
  values: {
    free: false,
    standard: false,
    professional: true,
    premium: true,
    enterprise: true
  }
}, {
  label: "Featured listings",
  values: {
    free: false,
    standard: false,
    professional: true,
    premium: true,
    enterprise: true
  }
}, {
  label: "Priority lead delivery",
  values: {
    free: false,
    standard: false,
    professional: true,
    premium: true,
    enterprise: true
  }
}, {
  label: "Competitor benchmarks",
  values: {
    free: false,
    standard: false,
    professional: false,
    premium: true,
    enterprise: true
  }
}, {
  label: "Homepage spotlight",
  values: {
    free: false,
    standard: false,
    professional: false,
    premium: true,
    enterprise: true
  }
}, {
  label: "Multi-location & API",
  values: {
    free: false,
    standard: false,
    professional: false,
    premium: false,
    enterprise: true
  }
}];
export {
  BillingPage as component
};
