import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useAuth, D as DashboardLayout, C as Card, a as CardHeader, c as CardDescription, b as CardTitle, d as CardContent, s as supabase, n as Skeleton, l as cn, B as Button, m as Switch, L as Label, I as Input } from "./router-BZcuc5AB.mjs";
import { A as Alert, a as AlertTitle, b as AlertDescription, P as Progress } from "./progress-CTc6cUL9.mjs";
import { P as ProtectedRoute } from "./ProtectedRoute-DoVUnduH.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as LEVEL_STYLES, l as levelFromCount } from "./badges-DtcsFvGi.mjs";
import { T as Textarea } from "./textarea-UU-ZedD5.mjs";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription, e as DialogFooter } from "./dialog-D8TTSPkc.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { w as ShieldAlert, i as Package, e as Calendar, l as Users, n as ChartColumn, m as ShieldCheck, C as ChevronRight, Y as Lightbulb, T as TriangleAlert, j as Megaphone, Z as Info } from "../_libs/lucide-react.mjs";
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
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
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
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-progress.mjs";
const TOTAL_BADGES = 4;
function VerificationProgress({ agentId }) {
  const [verified, setVerified] = reactExports.useState(null);
  const [pending, setPending] = reactExports.useState(0);
  reactExports.useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data } = await supabase.from("agent_badges").select("status").eq("agent_id", agentId);
      if (cancelled) return;
      const rows = data ?? [];
      setVerified(rows.filter((r) => r.status === "verified").length);
      setPending(rows.filter((r) => r.status === "pending").length);
    })();
    return () => {
      cancelled = true;
    };
  }, [agentId]);
  if (verified == null) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 rounded-xl" });
  }
  const level = levelFromCount(verified);
  const pct = Math.min(100, Math.round(verified / TOTAL_BADGES * 100));
  const remaining = TOTAL_BADGES - verified;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Verification progress" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: cn(
              "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize",
              LEVEL_STYLES[level]
            ),
            children: level === "none" ? "Not verified" : `${level} tier`
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: remaining > 0 ? `Verify ${remaining} more credential${remaining > 1 ? "s" : ""} to reach ${level === "none" ? "bronze" : level === "bronze" ? "silver" : level === "silver" ? "gold" : "platinum"} tier.` : "You've reached the highest verification tier. Pilgrims trust you most." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1.5 flex items-center justify-between text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            verified,
            " of ",
            TOTAL_BADGES,
            " verified"
          ] }),
          pending > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            pending,
            " under review"
          ] }) : null
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: pct, className: "h-2" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", variant: remaining > 0 ? "default" : "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/agent/onboarding/credentials", children: [
        remaining > 0 ? "Add credentials" : "Manage credentials",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
      ] }) })
    ] })
  ] });
}
function AvailabilityToggle({ agentId }) {
  const [status, setStatus] = reactExports.useState("online");
  const [autoReply, setAutoReply] = reactExports.useState("");
  const [returnDate, setReturnDate] = reactExports.useState("");
  const [open, setOpen] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data } = await supabase.from("agent_availability").select("status, auto_reply, return_date").eq("agent_id", agentId).maybeSingle();
      if (cancelled) return;
      if (data) {
        setStatus(data.status);
        setAutoReply(data.auto_reply ?? "");
        setReturnDate(data.return_date ? data.return_date.slice(0, 10) : "");
      }
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [agentId]);
  const persist = async (next, reply, ret) => {
    setSaving(true);
    const { error } = await supabase.from("agent_availability").upsert(
      {
        agent_id: agentId,
        status: next,
        auto_reply: next === "away" ? reply : null,
        return_date: next === "away" && ret ? new Date(ret).toISOString() : null
      },
      { onConflict: "agent_id" }
    );
    setSaving(false);
    if (error) {
      toast.error("Couldn't update availability", { description: error.message });
      return false;
    }
    return true;
  };
  const onToggle = async (checked) => {
    if (checked) {
      const ok = await persist("online", "", "");
      if (ok) {
        setStatus("online");
        toast.success("You're online");
      }
    } else {
      setOpen(true);
    }
  };
  const onSaveAway = async () => {
    if (!autoReply.trim()) {
      toast.error("Please enter an auto-reply message");
      return;
    }
    const ok = await persist("away", autoReply.trim(), returnDate);
    if (ok) {
      setStatus("away");
      setOpen(false);
      toast.success("Set to away - auto-replies enabled");
    }
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-32 animate-pulse rounded-md bg-secondary" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: cn(
            "h-2 w-2 rounded-full",
            status === "online" ? "bg-emerald-500" : "bg-amber-500"
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: status === "online" ? "Online" : "Away" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Switch,
        {
          checked: status === "online",
          onCheckedChange: onToggle,
          "aria-label": "Toggle availability"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Set yourself to Away" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: 'Pilgrims will see an "Away" badge on your profile. New leads will get an automatic reply with your message.' })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "auto-reply", children: "Auto-reply message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "auto-reply",
              value: autoReply,
              onChange: (e) => setAutoReply(e.target.value),
              placeholder: "Thanks for your enquiry - I'm currently away and will reply when I'm back.",
              rows: 4,
              maxLength: 500
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "return-date", children: "Return date (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "return-date",
              type: "date",
              value: returnDate,
              onChange: (e) => setReturnDate(e.target.value),
              min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: () => setOpen(false), disabled: saving, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onSaveAway, disabled: saving, children: saving ? "Saving…" : "Set to Away" })
      ] })
    ] }) })
  ] });
}
const FACTOR_LABELS = {
  reviews: "Customer reviews",
  response: "Response speed",
  years: "Years active",
  verification: "Verified credentials",
  complaints: "Complaint record"
};
function trustGaugeColor(score) {
  if (score >= 71)
    return {
      stroke: "stroke-emerald-500",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      label: "Highly Trusted"
    };
  if (score >= 41)
    return {
      stroke: "stroke-amber-500",
      bg: "bg-amber-50",
      text: "text-amber-700",
      label: "Trusted"
    };
  return {
    stroke: "stroke-rose-500",
    bg: "bg-rose-50",
    text: "text-rose-700",
    label: "New"
  };
}
function TrustGauge({
  score,
  size = 140,
  className
}) {
  const colour = trustGaugeColor(score);
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - Math.min(Math.max(score, 0), 100) / 100 * circumference;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative inline-grid place-content-center", className), style: { width: size, height: size }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: size, height: size, viewBox: "0 0 140 140", className: "-rotate-90", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "circle",
        {
          cx: "70",
          cy: "70",
          r: radius,
          fill: "none",
          strokeWidth: "12",
          className: "stroke-secondary"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "circle",
        {
          cx: "70",
          cy: "70",
          r: radius,
          fill: "none",
          strokeWidth: "12",
          strokeLinecap: "round",
          strokeDasharray: circumference,
          strokeDashoffset: offset,
          className: cn("transition-[stroke-dashoffset] duration-700", colour.stroke)
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 grid place-content-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("text-3xl font-bold", colour.text), children: score }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold uppercase tracking-wide text-muted-foreground", children: colour.label })
    ] })
  ] });
}
function TrustFactorsBars({ factors }) {
  const entries = Object.keys(FACTOR_LABELS).map((k) => ({
    key: k,
    label: FACTOR_LABELS[k],
    value: Number(factors[k] ?? 0)
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: entries.map((e) => {
    const pct = e.value / 20 * 100;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground/80", children: e.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tabular-nums text-muted-foreground", children: [
          e.value.toFixed(1),
          " / 20"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "h-full rounded-full transition-all",
            pct >= 70 ? "bg-emerald-500" : pct >= 40 ? "bg-amber-500" : "bg-rose-500"
          ),
          style: { width: `${pct}%` }
        }
      ) })
    ] }, e.key);
  }) });
}
function TrustBreakdownCard({ agentId }) {
  const [data, setData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data: row } = await supabase.from("trust_scores").select("agent_id, total_score, factors, tips, computed_at").eq("agent_id", agentId).maybeSingle();
      if (cancelled) return;
      setData(row);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [agentId]);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Trust score" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Loading your trust breakdown…" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-32 animate-pulse rounded-md bg-secondary" }) })
    ] });
  }
  const score = data?.total_score ?? 0;
  const factors = data?.factors ?? {
    reviews: 0,
    response: 0,
    years: 0,
    verification: 0,
    complaints: 0
  };
  const tips = data?.tips ?? [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Trust score" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "A 0–100 score that pilgrims see on your profile and search results." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 sm:grid-cols-[auto,1fr] sm:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrustGauge, { score }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrustFactorsBars, { factors }) })
      ] }),
      tips.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "mt-0.5 h-4 w-4 text-amber-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-amber-900", children: "Boost your score" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-1 list-disc space-y-1 pl-4 text-sm text-amber-800", children: tips.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t }, t)) })
        ] })
      ] }) }) : null
    ] })
  ] });
}
function bucketFor(expiresAt) {
  if (!expiresAt) return "no-expiry";
  const days = Math.floor((new Date(expiresAt).getTime() - Date.now()) / 864e5);
  if (days < 0) return "expired";
  if (days < 30) return "critical";
  if (days < 90) return "warning";
  return "ok";
}
function bucketLabel(b) {
  switch (b) {
    case "expired":
      return "Expired";
    case "critical":
      return "<30 days";
    case "warning":
      return "30–90 days";
    case "ok":
      return ">90 days";
    case "no-expiry":
      return "No expiry";
  }
}
function bucketClasses(b) {
  switch (b) {
    case "expired":
      return "bg-foreground text-background border-foreground";
    case "critical":
      return "bg-destructive/10 text-destructive border-destructive/30";
    case "warning":
      return "bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/40 dark:text-amber-200";
    case "ok":
      return "bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-200";
    case "no-expiry":
      return "bg-secondary text-muted-foreground border-border";
  }
}
async function fetchAgentBadgesWithExpiry(agentId) {
  const { data, error } = await supabase.from("agent_badges").select("id, badge_type, status, expires_at, verified_at, badge_types(name, color_hex)").eq("agent_id", agentId).order("expires_at", { ascending: true, nullsFirst: false });
  if (error) throw error;
  return (data ?? []).map((r) => {
    const bt = r.badge_types;
    return {
      id: r.id,
      badge_type: r.badge_type,
      status: r.status,
      expires_at: r.expires_at,
      verified_at: r.verified_at,
      badge_name: bt?.name ?? r.badge_type,
      color_hex: bt?.color_hex ?? "#888"
    };
  });
}
function ComplianceWidget({ agentId }) {
  const [badges, setBadges] = reactExports.useState(null);
  reactExports.useEffect(() => {
    fetchAgentBadgesWithExpiry(agentId).then(setBadges).catch(() => setBadges([]));
  }, [agentId]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5 text-primary" }),
          " Compliance"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Track licence and credential expiry dates." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/agent/onboarding/credentials", children: "Manage" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: badges === null ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 animate-pulse rounded-md bg-secondary" }) : badges.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border border-dashed border-border p-6 text-center text-sm text-muted-foreground", children: "No credentials uploaded yet. Add one to start building trust." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: badges.map((b) => {
      const bucket = b.status === "expired" ? "expired" : bucketFor(b.expires_at);
      const date = b.expires_at ? new Date(b.expires_at).toLocaleDateString() : "No expiry";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          className: cn(
            "flex items-center justify-between gap-3 rounded-md border px-3 py-2 text-sm",
            bucketClasses(bucket)
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              (bucket === "critical" || bucket === "expired") && /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: b.badge_name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs opacity-70", children: [
                "· ",
                b.status
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: date }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-current/30 px-2 py-0.5 font-semibold", children: bucketLabel(bucket) })
            ] })
          ]
        },
        b.id
      );
    }) }) })
  ] });
}
async function listPublishedForCountry(country) {
  let q = supabase.from("regulatory_updates").select("*").not("published_at", "is", null).order("published_at", { ascending: false }).limit(10);
  if (country) {
    q = q.or(`countries.cs.{${country}},countries.eq.{}`);
  }
  const { data, error } = await q;
  if (error) throw error;
  return data ?? [];
}
function severityClasses(s) {
  switch (s) {
    case "critical":
      return "bg-destructive/10 text-destructive border-destructive/30";
    case "warning":
      return "bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/40 dark:text-amber-200";
    default:
      return "bg-secondary text-foreground border-border";
  }
}
function RegulatoryUpdatesWidget({ countryCode }) {
  const [updates, setUpdates] = reactExports.useState(null);
  reactExports.useEffect(() => {
    listPublishedForCountry(countryCode).then(setUpdates).catch(() => setUpdates([]));
  }, [countryCode]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "h-5 w-5 text-primary" }),
        " Regulatory updates"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardDescription, { children: [
        "Recent advisories",
        countryCode ? ` for ${countryCode}` : "",
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: updates === null ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 animate-pulse rounded-md bg-secondary" }) : updates.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No active updates." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: updates.slice(0, 5).map((u) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "li",
      {
        className: cn(
          "rounded-md border px-3 py-2 text-sm",
          severityClasses(u.severity)
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
          u.severity === "critical" || u.severity === "warning" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "mt-0.5 h-4 w-4 shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "mt-0.5 h-4 w-4 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: u.title }),
            u.body ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 line-clamp-2 text-xs opacity-90", children: u.body }) : null,
            u.published_at ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs opacity-60", children: new Date(u.published_at).toLocaleDateString() }) : null
          ] })
        ] })
      },
      u.id
    )) }) })
  ] });
}
function AgentDashboardPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AgentDashboardContent, {}) });
}
function AgentDashboardContent() {
  const {
    agent,
    profile
  } = useAuth();
  const name = agent?.business_name ?? profile?.full_name ?? "agent";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardLayout, { title: "Agent Dashboard", headerExtras: agent?.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(AvailabilityToggle, { agentId: agent.id }) : null, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold tracking-tight text-foreground", children: [
        "Welcome back, ",
        name
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Manage your packages and connect with pilgrims worldwide." })
    ] }),
    agent?.status === "suspended" || agent?.status === "banned" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { variant: "destructive", className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertTitle, { children: agent.status === "banned" ? "Your account has been permanently banned" : "Your account is currently suspended" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: agent.status === "banned" ? "Your account has been disabled and your packages are no longer visible to pilgrims. Contact the Safar trust team if you believe this is a mistake." : "Your packages are hidden from search and new leads are paused until the suspension is lifted. Check your notifications for details, or contact the Safar trust team." })
    ] }) : null,
    agent?.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 grid gap-6 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(VerificationProgress, { agentId: agent.id }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrustBreakdownCard, { agentId: agent.id })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 grid gap-6 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ComplianceWidget, { agentId: agent.id }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RegulatoryUpdatesWidget, { countryCode: agent?.country_code ?? null })
      ] })
    ] }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [{
      icon: Package,
      title: "Active packages",
      value: "0"
    }, {
      icon: Calendar,
      title: "Bookings",
      value: "0"
    }, {
      icon: Users,
      title: "Customers",
      value: "0"
    }, {
      icon: ChartColumn,
      title: "Revenue",
      value: "$0"
    }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-4 w-4 text-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl", children: c.value })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-secondary" }) })
    ] }, c.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-6 border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Recent activity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Your latest bookings and inquiries will appear here." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48 rounded-md bg-secondary/60" }) })
    ] })
  ] }) });
}
export {
  AgentDashboardPage as component
};
