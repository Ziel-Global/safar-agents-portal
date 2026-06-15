import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, C as Card, d as CardContent, B as Button, L as Label, I as Input, m as Switch, l as cn, s as supabase } from "./router-BZcuc5AB.mjs";
import { T as Textarea } from "./textarea-UU-ZedD5.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { L as LoaderCircle, x as Plus, S as Star, y as Trash2, G as Copy } from "../_libs/lucide-react.mjs";
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
const TIER_ORDER = ["economy", "standard", "premium", "vip"];
const TIER_LABELS = {
  economy: "Economy",
  standard: "Standard",
  premium: "Premium",
  vip: "VIP"
};
const TIER_DESCRIPTIONS = {
  economy: "Best value - comfortable essentials",
  standard: "Balanced comfort and convenience",
  premium: "Closer to Haram, upgraded room",
  vip: "Luxury hotel, private transport"
};
const TIER_ACCENTS = {
  economy: "border-border bg-card",
  standard: "border-primary/40 bg-primary/5",
  premium: "border-accent/40 bg-accent/5",
  vip: "border-amber-400/50 bg-amber-50 dark:bg-amber-950/30"
};
function sortTiers(tiers) {
  return [...tiers].sort(
    (a, b) => TIER_ORDER.indexOf(a.tier_name) - TIER_ORDER.indexOf(b.tier_name)
  );
}
function PackageTiersManager({ packageId, defaultCurrency = "GBP" }) {
  const [tiers, setTiers] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(null);
  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("package_tiers").select("*").eq("package_id", packageId);
    if (error) toast.error(error.message);
    else setTiers(sortTiers(data ?? []));
    setLoading(false);
  };
  reactExports.useEffect(() => {
    if (packageId) load();
  }, [packageId]);
  const usedNames = new Set(tiers.map((t) => t.tier_name));
  const available = TIER_ORDER.filter((t) => !usedNames.has(t));
  const addTier = async (name) => {
    if (tiers.length >= 4) {
      toast.error("Max 4 tiers per package");
      return;
    }
    const sorted = sortTiers(tiers);
    const idx = TIER_ORDER.indexOf(name);
    const lowerMax = sorted.filter((t) => TIER_ORDER.indexOf(t.tier_name) < idx).at(-1)?.price_adult ?? 1e3;
    const upperMin = sorted.find((t) => TIER_ORDER.indexOf(t.tier_name) > idx)?.price_adult ?? lowerMax + 500;
    const defaultPrice = Math.round((lowerMax + upperMin) / 2);
    const { data, error } = await supabase.from("package_tiers").insert({
      package_id: packageId,
      tier_name: name,
      price_adult: defaultPrice,
      currency: defaultCurrency,
      sort_order: idx,
      is_highlighted: name === "standard" && !tiers.some((t) => t.is_highlighted)
    }).select().single();
    if (error) toast.error(error.message);
    else {
      setTiers((prev) => sortTiers([...prev, data]));
      toast.success(`${TIER_LABELS[name]} tier added`);
    }
  };
  const updateTier = async (tier, patch) => {
    if (patch.price_adult != null) {
      const newPrice = Number(patch.price_adult);
      if (!Number.isFinite(newPrice) || newPrice <= 0) {
        toast.error("Price must be a positive number");
        return;
      }
      const idx = TIER_ORDER.indexOf(tier.tier_name);
      const lowerMax = tiers.filter((t) => t.id !== tier.id && TIER_ORDER.indexOf(t.tier_name) < idx).reduce(
        (acc, t) => acc == null || t.price_adult > acc ? t.price_adult : acc,
        null
      );
      const upperMin = tiers.filter((t) => t.id !== tier.id && TIER_ORDER.indexOf(t.tier_name) > idx).reduce(
        (acc, t) => acc == null || t.price_adult < acc ? t.price_adult : acc,
        null
      );
      if (lowerMax != null && newPrice <= lowerMax) {
        toast.error(
          `${TIER_LABELS[tier.tier_name]} price must be greater than lower tier (${lowerMax})`
        );
        load();
        return;
      }
      if (upperMin != null && newPrice >= upperMin) {
        toast.error(
          `${TIER_LABELS[tier.tier_name]} price must be less than higher tier (${upperMin})`
        );
        load();
        return;
      }
    }
    if (patch.price_child != null) {
      const c = Number(patch.price_child);
      if (!Number.isFinite(c) || c < 0) {
        toast.error("Child price must be zero or positive");
        return;
      }
    }
    setSaving(tier.id);
    const optimistic = { ...tier, ...patch };
    setTiers((prev) => sortTiers(prev.map((t) => t.id === tier.id ? optimistic : t)));
    const { error } = await supabase.from("package_tiers").update(patch).eq("id", tier.id);
    setSaving(null);
    if (error) {
      toast.error(error.message);
      load();
    }
  };
  const removeTier = async (tier) => {
    if (!confirm(`Remove ${TIER_LABELS[tier.tier_name]} tier?`)) return;
    const { error } = await supabase.from("package_tiers").delete().eq("id", tier.id);
    if (error) toast.error(error.message);
    else {
      setTiers((prev) => prev.filter((t) => t.id !== tier.id));
      toast.success("Tier removed");
    }
  };
  const copyFrom = (target, sourceId) => {
    const src = tiers.find((t) => t.id === sourceId);
    if (!src) return;
    updateTier(target, {
      hotel_override: src.hotel_override,
      zone_override: src.zone_override,
      room_type: src.room_type,
      transport_override: src.transport_override,
      meal_override: src.meal_override,
      description_override: src.description_override
      // do NOT copy price - must keep ordering valid
    });
    toast.success(`Copied details from ${TIER_LABELS[src.tier_name]}`);
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-32 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "Offer up to 4 tiers per package. Prices must increase from Economy → VIP. Highlight one tier as ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Most Popular" }),
        "."
      ] }) }),
      available.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (v) => addTier(v), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Add tier" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: available.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: n, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 inline h-3.5 w-3.5" }),
          " ",
          TIER_LABELS[n]
        ] }, n)) })
      ] })
    ] }),
    tiers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-dashed", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-col items-center gap-3 py-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No tiers yet - add Economy to start." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => addTier("economy"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4" }),
        " Add Economy tier"
      ] })
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 lg:grid-cols-2", children: tiers.map((tier) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: cn("overflow-hidden", TIER_ACCENTS[tier.tier_name]), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold", children: TIER_LABELS[tier.tier_name] }),
            tier.is_highlighted && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-current" }),
              " Most Popular"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: TIER_DESCRIPTIONS[tier.tier_name] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          saving === tier.id && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "icon",
              onClick: () => removeTier(tier),
              "aria-label": "Remove tier",
              className: "h-8 w-8 text-destructive",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Price per adult" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "number",
              defaultValue: tier.price_adult,
              onBlur: (e) => {
                const v = Number(e.target.value);
                if (v !== tier.price_adult) updateTier(tier, { price_adult: v });
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Price per child" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "number",
              defaultValue: tier.price_child ?? "",
              onBlur: (e) => {
                const v = e.target.value ? Number(e.target.value) : null;
                if (v !== tier.price_child) updateTier(tier, { price_child: v });
              }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Hotel override" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              defaultValue: tier.hotel_override ?? "",
              placeholder: "Inherit base hotel",
              onBlur: (e) => e.target.value !== (tier.hotel_override ?? "") && updateTier(tier, { hotel_override: e.target.value || null })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Room type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              defaultValue: tier.room_type ?? "",
              placeholder: "Quad / Triple / Double",
              onBlur: (e) => e.target.value !== (tier.room_type ?? "") && updateTier(tier, { room_type: e.target.value || null })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Transport override" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: tier.transport_override ?? "",
              onValueChange: (v) => updateTier(tier, { transport_override: v || null }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Inherit" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "private", children: "Private" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "shared", children: "Shared" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "self", children: "Self-arranged" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Meals override" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: tier.meal_override ?? "",
              onValueChange: (v) => updateTier(tier, { meal_override: v || null }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Inherit" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "full", children: "Full board" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "half", children: "Half board" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "self", children: "Self-catered" })
                ] })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Description override" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            defaultValue: tier.description_override ?? "",
            placeholder: "What makes this tier special…",
            rows: 2,
            onBlur: (e) => e.target.value !== (tier.description_override ?? "") && updateTier(tier, { description_override: e.target.value || null })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              id: `hl-${tier.id}`,
              checked: tier.is_highlighted,
              onCheckedChange: (c) => updateTier(tier, { is_highlighted: c })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: `hl-${tier.id}`, className: "text-xs font-normal", children: "Most Popular" })
        ] }),
        tiers.filter((t) => t.id !== tier.id).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (v) => copyFrom(tier, v), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectTrigger, { className: "h-8 w-[160px] text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "mr-1 h-3 w-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Copy from…" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: tiers.filter((t) => t.id !== tier.id).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t.id, children: TIER_LABELS[t.tier_name] }, t.id)) })
        ] })
      ] })
    ] }) }, tier.id)) })
  ] });
}
export {
  PackageTiersManager
};
