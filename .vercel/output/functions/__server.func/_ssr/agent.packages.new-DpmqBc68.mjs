import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { u as useAuth, s as supabase, D as DashboardLayout, y as PackagePreviewCard, L as Label, I as Input, T as ToggleGroup, v as ToggleGroupItem, l as cn, z as RadioGroup, A as RadioGroupItem, m as Switch, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, B as Button, E as Collapsible, C as Card, F as CollapsibleTrigger, G as CollapsibleContent, d as CardContent } from "./router-BZcuc5AB.mjs";
import { P as ProtectedRoute } from "./ProtectedRoute-DoVUnduH.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { L as LoaderCircle, S as Star, c as ChevronDown } from "../_libs/lucide-react.mjs";
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
const PackageMediaManager = reactExports.lazy(() => import("./PackageMediaManager-BC8i-IO2.mjs").then((m) => ({
  default: m.PackageMediaManager
})));
const PackageTiersManager = reactExports.lazy(() => import("./PackageTiersManager-DLZtkgv9.mjs").then((m) => ({
  default: m.PackageTiersManager
})));
const CitySelect = reactExports.lazy(() => import("./CitySelect-hevy0da5.mjs").then((m) => ({
  default: m.CitySelect
})));
const SubLoading = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center py-6 text-sm text-muted-foreground", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
  " Loading…"
] });
function PackageEditorPage({
  existingId
} = {}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(NewPackagePage, { existingId });
}
const initialDraft = {
  title: "",
  type: "",
  departure_city: "",
  departure_country: "",
  date_start: "",
  date_end: "",
  hotel_name: "",
  hotel_stars: null,
  hotel_zone: "",
  distance_to_haram_m: null,
  meals_included: "",
  transport_type: "",
  visa_included: false,
  flights_included: false,
  base_price: "",
  currency: "GBP"
};
const knownHotels = {
  "Fairmont Makkah Clock Royal Tower": 50,
  "Swissôtel Makkah": 80,
  "Hilton Suites Makkah": 200,
  "Pullman Zamzam Makkah": 150,
  "Anjum Makkah": 350
};
function Section({
  title,
  defaultOpen = true,
  children
}) {
  const [open, setOpen] = reactExports.useState(defaultOpen);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Collapsible, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CollapsibleTrigger, { className: "flex w-full items-center justify-between p-4 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn("h-4 w-4 text-muted-foreground transition-transform", open && "rotate-180") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-4 pt-0", children }) })
  ] }) });
}
function NewPackagePage({
  existingId
} = {}) {
  const {
    agent,
    user
  } = useAuth();
  const navigate = useNavigate();
  const [draft, setDraft] = reactExports.useState(initialDraft);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [packageId, setPackageId] = reactExports.useState(existingId ?? null);
  const [media, setMedia] = reactExports.useState([]);
  const [loadingExisting, setLoadingExisting] = reactExports.useState(Boolean(existingId));
  const creatingRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (!existingId) return;
    (async () => {
      const {
        data,
        error
      } = await supabase.from("packages").select("*").eq("id", existingId).single();
      if (error || !data) {
        toast.error("Could not load package");
        setLoadingExisting(false);
        return;
      }
      const p = data;
      setDraft({
        title: p.title ?? "",
        type: p.type ?? "",
        departure_city: p.departure_city ?? "",
        departure_country: p.departure_country ?? "",
        date_start: p.date_start ?? "",
        date_end: p.date_end ?? "",
        hotel_name: p.hotel_name ?? "",
        hotel_stars: p.hotel_stars ?? null,
        hotel_zone: p.hotel_zone ?? "",
        distance_to_haram_m: p.distance_to_haram_m ?? null,
        meals_included: p.meals_included ?? "",
        transport_type: p.transport_type ?? "",
        visa_included: Boolean(p.visa_included),
        flights_included: Boolean(p.flights_included),
        base_price: p.base_price != null ? String(p.base_price) : "",
        currency: p.currency ?? "GBP"
      });
      setLoadingExisting(false);
    })();
  }, [existingId]);
  reactExports.useEffect(() => {
    if (existingId) return;
    if (!agent?.id || packageId || creatingRef.current) return;
    creatingRef.current = true;
    (async () => {
      const {
        data,
        error
      } = await supabase.from("packages").insert({
        agent_id: agent.id,
        title: "Untitled package",
        type: "umrah",
        departure_city: "",
        departure_country: "",
        status: "draft",
        currency: "GBP"
      }).select("id").single();
      if (error) {
        toast.error(`Could not create draft: ${error.message}`);
        creatingRef.current = false;
        return;
      }
      setPackageId(data.id);
    })();
  }, [agent?.id, packageId, existingId]);
  const update = (key, value) => {
    setDraft((d) => {
      const next = {
        ...d,
        [key]: value
      };
      if (key === "hotel_name" && typeof value === "string") {
        const match = Object.entries(knownHotels).find(([name]) => name.toLowerCase() === value.toLowerCase());
        if (match) next.distance_to_haram_m = match[1];
      }
      return next;
    });
  };
  const primaryMedia = media.find((m) => m.is_primary) ?? media[0] ?? null;
  const dateError = draft.date_start && draft.date_end && draft.date_end < draft.date_start ? "End date cannot be before the start date" : null;
  const submit = async (status) => {
    if (!agent?.id || !packageId) {
      toast.error("Draft not ready yet, please wait");
      return;
    }
    if (!draft.title || !draft.type || !draft.departure_city || !draft.departure_country) {
      toast.error("Please fill title, type, and departure location");
      return;
    }
    if (dateError) {
      toast.error(dateError);
      return;
    }
    if (status === "active") {
      const approvedImages = media.filter((m) => m.media_type === "photo" && m.moderation_status === "approved");
      if (approvedImages.length < 3) {
        toast.error(`At least 3 approved images are required to publish (you have ${approvedImages.length})`);
        return;
      }
    }
    setSubmitting(true);
    const payload = {
      title: draft.title,
      type: draft.type,
      departure_city: draft.departure_city,
      departure_country: draft.departure_country,
      date_start: draft.date_start || null,
      date_end: draft.date_end || null,
      base_price: draft.base_price ? Number(draft.base_price) : null,
      currency: draft.currency,
      hotel_name: draft.hotel_name || null,
      hotel_stars: draft.hotel_stars,
      hotel_zone: draft.hotel_zone || null,
      distance_to_haram_m: draft.distance_to_haram_m,
      meals_included: draft.meals_included || null,
      transport_type: draft.transport_type || null,
      visa_included: draft.visa_included,
      thumbnail_url: primaryMedia?.thumbnail_url ?? primaryMedia?.url ?? null,
      status
    };
    const {
      error
    } = await supabase.from("packages").update(payload).eq("id", packageId);
    setSubmitting(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success(status === "active" ? "Package published" : "Draft saved");
      navigate({
        to: "/agent/packages"
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardLayout, { title: existingId ? "Edit Package" : "New Package", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight text-foreground", children: existingId ? "Edit Package" : "New Package" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Fill in the details below - your live preview updates as you type." })
    ] }),
    loadingExisting ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-48 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[1fr_360px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "order-first lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PackagePreviewCard, { draft, primaryImageUrl: primaryMedia?.thumbnail_url ?? primaryMedia?.url }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Basics", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "title", children: "Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "title", placeholder: "e.g. Premium Umrah December 2026", value: draft.title, onChange: (e) => update("title", e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleGroup, { type: "single", value: draft.type, onValueChange: (v) => v && update("type", v), className: "justify-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupItem, { value: "hajj", children: "Hajj" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupItem, { value: "umrah", children: "Umrah" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "city", children: "Departure city" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "London", disabled: true }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CitySelect, { value: draft.departure_city, onSelect: (c) => {
                update("departure_city", c.name);
                update("departure_country", c.country_name);
              }, placeholder: "Select a city" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "country", children: "Country" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "country", placeholder: "Selected with city", value: draft.departure_country, readOnly: true })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ds", children: "Start date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "ds", type: "date", value: draft.date_start, onChange: (e) => update("date_start", e.target.value) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "de", children: "End date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "de", type: "date", min: draft.date_start || void 0, value: draft.date_end, onChange: (e) => update("date_end", e.target.value), "aria-invalid": !!dateError })
            ] })
          ] }),
          dateError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-destructive", children: dateError })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Accommodation", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "hotel", children: "Hotel name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "hotel", list: "hotel-suggestions", placeholder: "Fairmont Makkah Clock Royal Tower", value: draft.hotel_name, onChange: (e) => update("hotel_name", e.target.value) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("datalist", { id: "hotel-suggestions", children: Object.keys(knownHotels).map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: h }, h)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Star rating" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: [1, 2, 3, 4, 5].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => update("hotel_stars", n), className: "rounded p-1 transition hover:bg-secondary", "aria-label": `${n} stars`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: cn("h-6 w-6", (draft.hotel_stars ?? 0) >= n ? "fill-accent text-accent" : "text-muted-foreground") }) }, n)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Zone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroup, { value: draft.hotel_zone, onValueChange: (v) => update("hotel_zone", v), className: "flex gap-3", children: [{
              v: "A",
              label: "Zone A - Closest",
              color: "bg-emerald-500"
            }, {
              v: "B",
              label: "Zone B - Mid",
              color: "bg-amber-500"
            }, {
              v: "C",
              label: "Zone C - Far",
              color: "bg-rose-500"
            }].map((z) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: `zone-${z.v}`, className: cn("flex flex-1 cursor-pointer items-center gap-2 rounded-md border border-border p-3 transition", draft.hotel_zone === z.v && "border-primary bg-primary/5"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { id: `zone-${z.v}`, value: z.v }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-3 w-3 rounded-full", z.color) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: z.label })
            ] }, z.v)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "dist", children: "Distance to Haram (meters)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "dist", type: "number", placeholder: "Auto-filled for known hotels", value: draft.distance_to_haram_m ?? "", onChange: (e) => update("distance_to_haram_m", e.target.value ? Number(e.target.value) : null) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Photos & Videos", children: packageId && user?.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SubLoading, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(PackageMediaManager, { packageId, userId: user.id, onChange: setMedia }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center py-6 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
          "Preparing media uploader…"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Inclusions", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Meals" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleGroup, { type: "single", value: draft.meals_included, onValueChange: (v) => v && update("meals_included", v), className: "justify-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupItem, { value: "full", children: "Full board" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupItem, { value: "half", children: "Half board" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupItem, { value: "self", children: "Self-catered" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Transport" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleGroup, { type: "single", value: draft.transport_type, onValueChange: (v) => v && update("transport_type", v), className: "justify-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupItem, { value: "private", children: "Private" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupItem, { value: "shared", children: "Shared" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupItem, { value: "self", children: "Self-arranged" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-md border border-border p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "visa", className: "font-normal", children: "Visa included" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { id: "visa", checked: draft.visa_included, onCheckedChange: (c) => update("visa_included", c) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-md border border-border p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "flights", className: "font-normal", children: "Flights included" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { id: "flights", checked: draft.flights_included, onCheckedChange: (c) => update("flights_included", c) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Pricing", defaultOpen: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-[1fr_120px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "price", children: "Base price per adult" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "price", type: "number", placeholder: "2500", value: draft.base_price, onChange: (e) => update("base_price", e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cur", children: "Currency" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: draft.currency, onValueChange: (v) => update("currency", v), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "cur", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "GBP", children: "GBP" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "USD", children: "USD" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "EUR", children: "EUR" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "SAR", children: "SAR" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "AED", children: "AED" })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Pricing tiers (optional)", defaultOpen: false, children: packageId ? /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SubLoading, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(PackageTiersManager, { packageId, defaultCurrency: draft.currency }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center py-6 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
          "Preparing tiers…"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => submit("active"), disabled: submitting || !packageId, children: [
            submitting && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-1 h-4 w-4 animate-spin" }),
            "Publish"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => submit("draft"), disabled: submitting || !packageId, children: "Save as draft" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: () => navigate({
            to: "/agent/packages"
          }), children: "Cancel" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground", children: "Live preview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PackagePreviewCard, { draft, primaryImageUrl: primaryMedia?.thumbnail_url ?? primaryMedia?.url })
      ] }) })
    ] })
  ] }) });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PackageEditorPage, {}) });
export {
  PackageEditorPage,
  SplitComponent as component
};
