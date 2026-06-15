import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { P as ProtectedRoute } from "./ProtectedRoute-DoVUnduH.mjs";
import { u as useAuth, D as DashboardLayout, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, m as Switch, n as Skeleton, C as Card, d as CardContent, k as Badge, B as Button, s as supabase, l as cn } from "./router-BZcuc5AB.mjs";
import { E as EmptyState } from "./empty-state-DidBJBq9.mjs";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, e as DialogFooter } from "./dialog-D8TTSPkc.mjs";
import { T as Textarea } from "./textarea-UU-ZedD5.mjs";
import { z as Funnel, S as Star, D as Camera, E as MessageSquare } from "../_libs/lucide-react.mjs";
import { f as format } from "../_libs/date-fns.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
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
const SIZE = {
  sm: "h-3.5 w-3.5",
  md: "h-5 w-5",
  lg: "h-7 w-7",
  xl: "h-12 w-12"
};
function StarRating({
  value,
  onChange,
  size = "md",
  readOnly,
  className
}) {
  const interactive = !readOnly && !!onChange;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("inline-flex items-center gap-1", className), children: [1, 2, 3, 4, 5].map((n) => {
    const filled = n <= Math.round(value);
    return interactive ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "aria-label": `${n} star${n > 1 ? "s" : ""}`,
        className: "rounded transition hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        onClick: () => onChange?.(n),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Star,
          {
            className: cn(
              SIZE[size],
              filled ? "fill-amber-400 text-amber-400" : "text-muted-foreground/40"
            )
          }
        )
      },
      n
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      Star,
      {
        className: cn(
          SIZE[size],
          filled ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"
        )
      },
      n
    );
  }) });
}
const REVIEW_DIMENSIONS = [
  { key: "hotel_accuracy", label: "Hotel accuracy", prompt: "Did the hotel match the description?" },
  { key: "transport_quality", label: "Transport quality", prompt: "How was the transport organisation?" },
  { key: "guide_quality", label: "Guide quality", prompt: "How knowledgeable and helpful was your guide?" },
  { key: "communication", label: "Communication", prompt: "How clearly and quickly did the agent respond?" },
  { key: "value_for_money", label: "Value for money", prompt: "Was the package good value?" }
];
const MAX_HIGHLIGHTS = 5;
function AgentReviewsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Content, {}) });
}
function Content() {
  const {
    agent
  } = useAuth();
  const [reviews, setReviews] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [minRating, setMinRating] = reactExports.useState("0");
  const [hasPhotos, setHasPhotos] = reactExports.useState(false);
  const [needsResponse, setNeedsResponse] = reactExports.useState(false);
  const [respondTo, setRespondTo] = reactExports.useState(null);
  const [responseText, setResponseText] = reactExports.useState("");
  const [saving, setSaving] = reactExports.useState(false);
  async function load() {
    if (!agent) return;
    setLoading(true);
    const {
      data,
      error
    } = await supabase.from("reviews").select("id, overall_rating, dimensions, review_text, created_at, agent_response, agent_responded_at, is_highlighted, moderation_status, pilgrim_id, review_media(id, url, media_type)").eq("agent_id", agent.id).order("created_at", {
      ascending: false
    });
    if (error) toast.error("Could not load reviews");
    else setReviews((data ?? []).map((r) => ({
      ...r,
      media: r.review_media ?? []
    })));
    setLoading(false);
  }
  reactExports.useEffect(() => {
    load();
  }, [agent?.id]);
  const filtered = reactExports.useMemo(() => {
    return reviews.filter((r) => {
      if (Number(minRating) > 0 && r.overall_rating < Number(minRating)) return false;
      if (hasPhotos && r.media.length === 0) return false;
      if (needsResponse && r.agent_response) return false;
      return true;
    });
  }, [reviews, minRating, hasPhotos, needsResponse]);
  const highlightedCount = reviews.filter((r) => r.is_highlighted).length;
  async function toggleHighlight(r) {
    if (!r.is_highlighted && highlightedCount >= MAX_HIGHLIGHTS) {
      toast.error(`You can highlight up to ${MAX_HIGHLIGHTS} reviews`);
      return;
    }
    setReviews((prev) => prev.map((x) => x.id === r.id ? {
      ...x,
      is_highlighted: !x.is_highlighted
    } : x));
    const {
      error
    } = await supabase.from("reviews").update({
      is_highlighted: !r.is_highlighted
    }).eq("id", r.id);
    if (error) {
      toast.error("Could not update", {
        description: error.message
      });
      setReviews((prev) => prev.map((x) => x.id === r.id ? {
        ...x,
        is_highlighted: r.is_highlighted
      } : x));
    }
  }
  function openRespond(r) {
    setRespondTo(r);
    setResponseText(r.agent_response ?? "");
  }
  async function saveResponse() {
    if (!respondTo) return;
    setSaving(true);
    const {
      error
    } = await supabase.from("reviews").update({
      agent_response: responseText.trim() || null
    }).eq("id", respondTo.id);
    setSaving(false);
    if (error) {
      toast.error("Could not save response", {
        description: error.message
      });
      return;
    }
    toast.success("Response posted");
    setRespondTo(null);
    load();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardLayout, { title: "Reviews", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex flex-wrap items-end justify-between gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Pilgrim reviews" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
          "Respond to feedback and highlight your best reviews. ",
          highlightedCount,
          "/",
          MAX_HIGHLIGHTS,
          " highlighted."
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-wrap items-center gap-3 rounded-lg border border-border bg-card p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: minRating, onValueChange: setMinRating, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 w-[140px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "0", children: "Any rating" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "3", children: "3+ stars" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "4", children: "4+ stars" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "5", children: "5 stars only" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: hasPhotos, onCheckedChange: setHasPhotos }),
          " Has photos"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: needsResponse, onCheckedChange: setNeedsResponse }),
          " Needs response"
        ] })
      ] }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 w-full" })
      ] }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-7 w-7" }), title: reviews.length === 0 ? "No reviews yet" : "No reviews match these filters", description: reviews.length === 0 ? "Once pilgrims complete their trips, their reviews will appear here. Use templates to politely solicit reviews after a successful booking." : "Try clearing the rating, photos, or response filters." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: filtered.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { value: r.overall_rating, size: "sm", readOnly: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: r.overall_rating.toFixed(1) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] capitalize", children: r.moderation_status }),
          r.is_highlighted ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary border-primary/30 border text-[10px]", children: "Highlighted" }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs text-muted-foreground", children: format(new Date(r.created_at), "PP") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid gap-2 sm:grid-cols-3", children: REVIEW_DIMENSIONS.map((d) => {
          const s = r.dimensions?.[d.key];
          if (!s) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              d.label,
              ": "
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
              s.rating,
              "/5"
            ] })
          ] }, d.key);
        }) }),
        r.review_text ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 whitespace-pre-line text-sm text-foreground/90", children: r.review_text }) : null,
        r.media.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-3.5 w-3.5" }),
          " ",
          r.media.length,
          " attachment",
          r.media.length > 1 ? "s" : ""
        ] }) : null,
        r.agent_response ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-md border-l-4 border-primary/60 bg-secondary/40 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: "Your response" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 whitespace-pre-line text-sm text-foreground/80", children: r.agent_response })
        ] }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => openRespond(r), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4" }),
            " ",
            r.agent_response ? "Edit response" : "Respond"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: r.is_highlighted ? "default" : "outline", onClick: () => toggleHighlight(r), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4" }),
            " ",
            r.is_highlighted ? "Unhighlight" : "Highlight"
          ] })
        ] })
      ] }) }, r.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!respondTo, onOpenChange: (o) => !o ? setRespondTo(null) : null, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Respond to review" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: responseText, onChange: (e) => setResponseText(e.target.value), rows: 5, placeholder: "Thank you for travelling with us..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setRespondTo(null), disabled: saving, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: saveResponse, disabled: saving, children: saving ? "Saving..." : "Post response" })
      ] })
    ] }) })
  ] });
}
export {
  AgentReviewsPage as component
};
