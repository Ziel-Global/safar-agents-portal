import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { e as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useAuth, s as supabase, D as DashboardLayout, B as Button, C as Card, a as CardHeader, b as CardTitle, d as CardContent, l as cn, L as Label, I as Input, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem } from "./router-BZcuc5AB.mjs";
import { P as ProtectedRoute } from "./ProtectedRoute-DoVUnduH.mjs";
import { C as Checkbox$1, a as CheckboxIndicator } from "../_libs/radix-ui__react-checkbox.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as ArrowLeft, V as CircleCheck, L as LoaderCircle, j as Megaphone, a as Check } from "../_libs/lucide-react.mjs";
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
const Checkbox = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Checkbox$1,
  {
    ref,
    className: cn(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckboxIndicator, { className: cn("grid place-content-center text-current"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) })
  }
));
Checkbox.displayName = Checkbox$1.displayName;
const CAMPAIGN_TYPES = [{
  value: "holiday",
  label: "Holiday Promo",
  emoji: "🎉"
}, {
  value: "last_minute",
  label: "Last-Minute Deal",
  emoji: "⚡"
}, {
  value: "early_bird",
  label: "Early Bird",
  emoji: "🐦"
}, {
  value: "custom",
  label: "Custom Campaign",
  emoji: "✨"
}];
function CampaignNewPage() {
  const {
    agent
  } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = reactExports.useState("");
  const [type, setType] = reactExports.useState("custom");
  const [discountType, setDiscountType] = reactExports.useState("percentage");
  const [discountValue, setDiscountValue] = reactExports.useState("10");
  const [startDate, setStartDate] = reactExports.useState(() => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
  const [endDate, setEndDate] = reactExports.useState(() => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() + 14);
    return d.toISOString().slice(0, 10);
  });
  const [activate, setActivate] = reactExports.useState(true);
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const dateError = endDate < startDate ? "End date must be after the start date" : startDate < today ? "Start date cannot be in the past" : null;
  const [packages, setPackages] = reactExports.useState([]);
  const [selected, setSelected] = reactExports.useState(/* @__PURE__ */ new Set());
  const [loading, setLoading] = reactExports.useState(true);
  const [submitting, setSubmitting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!agent?.id) return;
    setLoading(true);
    supabase.from("packages").select("id, title, base_price, currency").eq("agent_id", agent.id).in("status", ["active", "draft"]).order("created_at", {
      ascending: false
    }).then(({
      data,
      error
    }) => {
      if (error) toast.error("Failed to load packages");
      else setPackages(data ?? []);
      setLoading(false);
    });
  }, [agent?.id]);
  const toggle = (id) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  const handleTypeChange = (v) => {
    setType(v);
    if (!name) {
      const t = CAMPAIGN_TYPES.find((x) => x.value === v);
      if (t && v !== "custom") setName(t.label);
    }
  };
  const handleSubmit = async () => {
    if (!agent?.id) return;
    if (!name.trim()) {
      toast.error("Please enter a campaign name");
      return;
    }
    const dv = parseFloat(discountValue);
    if (!Number.isFinite(dv) || dv <= 0) {
      toast.error("Discount must be greater than 0");
      return;
    }
    if (discountType === "percentage" && dv > 100) {
      toast.error("Percentage discount cannot exceed 100%");
      return;
    }
    if (selected.size === 0) {
      toast.error("Pick at least one package to include");
      return;
    }
    if (dateError) {
      toast.error(dateError);
      return;
    }
    setSubmitting(true);
    const {
      data: created,
      error: campErr
    } = await supabase.from("campaigns").insert([{
      agent_id: agent.id,
      name: name.trim(),
      type,
      discount_type: discountType,
      discount_value: dv,
      start_date: startDate,
      end_date: endDate,
      status: activate ? "active" : "draft"
    }]).select("id").single();
    if (campErr || !created) {
      toast.error("Failed to create campaign: " + (campErr?.message ?? ""));
      setSubmitting(false);
      return;
    }
    const links = Array.from(selected).map((pid) => ({
      campaign_id: created.id,
      package_id: pid
    }));
    const {
      error: linkErr
    } = await supabase.from("campaign_packages").insert(links);
    if (linkErr) {
      toast.error("Campaign created but packages failed to link: " + linkErr.message);
      setSubmitting(false);
      return;
    }
    toast.success(activate ? "Campaign launched! 🎉" : "Campaign saved as draft");
    setSubmitting(false);
    navigate({
      to: "/agent/campaigns"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardLayout, { title: "New Campaign", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Create Campaign" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Run a limited-time promotion across one or more of your packages." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/agent/campaigns", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-1 h-4 w-4" }),
        " Cancel"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[1fr_320px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Campaign type" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 sm:grid-cols-2", children: CAMPAIGN_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => handleTypeChange(t.value), className: cn("flex items-center gap-2 rounded-lg border p-3 text-left transition-colors", type === t.value ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: t.emoji }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: t.label }),
            type === t.value && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "ml-auto h-4 w-4 text-primary" })
          ] }, t.value)) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Details" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cname", children: "Campaign name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "cname", value: name, onChange: (e) => setName(e.target.value), placeholder: "e.g. Early Booking 2026" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Discount type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: discountType, onValueChange: (v) => setDiscountType(v), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "percentage", children: "Percentage (%)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "fixed", children: "Fixed amount" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "dv", children: [
                  "Discount value ",
                  discountType === "percentage" ? "(%)" : "(amount)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "dv", type: "number", min: "0", step: "0.01", value: discountValue, onChange: (e) => setDiscountValue(e.target.value) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "sd", children: "Start date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "sd", type: "date", min: today, value: startDate, onChange: (e) => setStartDate(e.target.value) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ed", children: "End date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "ed", type: "date", min: startDate, value: endDate, onChange: (e) => setEndDate(e.target.value), "aria-invalid": !!dateError })
              ] })
            ] }),
            dateError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: dateError }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: activate, onCheckedChange: (v) => setActivate(v === true) }),
              "Activate immediately (otherwise saved as draft)"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base", children: [
            "Packages to include (",
            selected.size,
            " selected)"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-24 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin text-primary" }) }) : packages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            "You don't have any packages yet.",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/agent/packages/new", className: "text-primary hover:underline", children: "Create one first" }),
            "."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: packages.map((pkg) => {
            const isSel = selected.has(pkg.id);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: cn("flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors", isSel ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: isSel, onCheckedChange: () => toggle(pkg.id) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground", children: pkg.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: pkg.base_price != null ? `${pkg.currency} ${pkg.base_price}` : "No base price" })
              ] })
            ] }, pkg.id);
          }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-4 lg:sticky lg:top-24 lg:self-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-primary/30 bg-primary/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "h-4 w-4" }),
            " Preview"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase text-muted-foreground", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: name || "Untitled" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase text-muted-foreground", children: "Discount" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-primary", children: discountType === "percentage" ? `${discountValue}% off` : `${discountValue} off` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase text-muted-foreground", children: "Runs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-foreground", children: [
                startDate,
                " → ",
                endDate
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase text-muted-foreground", children: "Packages" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-foreground", children: [
                selected.size,
                " selected"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "w-full", onClick: handleSubmit, disabled: submitting, children: [
          submitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-1 h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "mr-1 h-4 w-4" }),
          activate ? "Launch Campaign" : "Save as Draft"
        ] })
      ] })
    ] })
  ] }) });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CampaignNewPage, {}) });
export {
  SplitComponent as component
};
