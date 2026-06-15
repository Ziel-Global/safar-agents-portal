import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { f as useSensors, h as useSensor, P as PointerSensor, D as DndContext, i as DragOverlay, b as useDroppable } from "../_libs/dnd-kit__core.mjs";
import { S as SortableContext, v as verticalListSortingStrategy, u as useSortable } from "../_libs/dnd-kit__sortable.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { P as ProtectedRoute } from "./ProtectedRoute-DoVUnduH.mjs";
import { u as useAuth, s as supabase, D as DashboardLayout, k as Badge, T as ToggleGroup, v as ToggleGroupItem, B as Button, l as cn, C as Card, o as Sheet, p as SheetContent, q as SheetHeader, r as SheetTitle, t as SheetDescription, n as Skeleton, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, L as Label, I as Input } from "./router-BZcuc5AB.mjs";
import { C as CSS } from "../_libs/dnd-kit__utilities.mjs";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-CmB7P5i6.mjs";
import { T as Textarea } from "./textarea-UU-ZedD5.mjs";
import { f as formatPrice, l as listQuoteTemplates, b as buildMergeValues, a as applyMergeFields } from "./quoteTemplates-DEB_8rq-.mjs";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-lDUr4Uqx.mjs";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription, e as DialogFooter } from "./dialog-D8TTSPkc.mjs";
import { E as EmptyState } from "./empty-state-DidBJBq9.mjs";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CSm-Zs3Y.mjs";
import { I as LayoutGrid, J as List, x as Plus, N as Inbox, O as GripVertical, e as Calendar, l as Users, W as Wallet, Q as Plane, E as MessageSquare, R as Send, X, V as CircleCheck, L as LoaderCircle } from "../_libs/lucide-react.mjs";
import { f as format } from "../_libs/date-fns.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/dnd-kit__accessibility.mjs";
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
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__react-popover.mjs";
const LEAD_STATUS_LABEL = {
  new: "New",
  contacted: "Contacted",
  quote_sent: "Quote Sent",
  awaiting_deposit: "Awaiting Deposit",
  confirmed: "Confirmed",
  completed: "Completed",
  lost: "Lost"
};
const KANBAN_COLUMNS = [
  "new",
  "contacted",
  "quote_sent",
  "awaiting_deposit",
  "confirmed",
  "completed"
];
function ageBucket(createdAt) {
  const ms = Date.now() - new Date(createdAt).getTime();
  const hours = ms / (1e3 * 60 * 60);
  if (hours < 2) return "fresh";
  if (hours < 12) return "warm";
  return "stale";
}
function ageLabel(createdAt) {
  const ms = Date.now() - new Date(createdAt).getTime();
  const mins = Math.floor(ms / 6e4);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}
const AGE_COLORS = {
  fresh: "bg-emerald-100 text-emerald-800 border-emerald-300",
  warm: "bg-amber-100 text-amber-800 border-amber-300",
  stale: "bg-rose-100 text-rose-800 border-rose-300"
};
const LOST_REASONS = [
  "Price too high",
  "Chose another agent",
  "No response",
  "Dates unavailable",
  "Not serious",
  "Other"
];
const TYPE_ICON = {
  hajj: "🕋",
  umrah: "🕌"
};
function LeadCard({ lead, onClick, isOverlay }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: lead.id,
    data: { lead }
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1
  };
  const bucket = ageBucket(lead.created_at);
  const tripIcon = lead.trip_type ? TYPE_ICON[lead.trip_type] ?? "✈️" : "✈️";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      ref: setNodeRef,
      style,
      className: cn(
        "group cursor-pointer border border-border bg-card p-3 shadow-sm transition hover:border-primary/40 hover:shadow-md",
        isOverlay && "rotate-2 shadow-xl"
      ),
      onClick,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-sm font-semibold text-foreground", children: lead.pilgrim_name || "Anonymous" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: tripIcon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize", children: lead.trip_type ?? "trip" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Drag lead",
              className: "touch-none rounded p-1 text-muted-foreground opacity-0 transition group-hover:opacity-100 hover:bg-secondary",
              ...attributes,
              ...listeners,
              onClick: (e) => e.stopPropagation(),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(GripVertical, { className: "h-4 w-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-3 space-y-1.5 text-xs text-foreground", children: [
          lead.departure_date ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(lead.departure_date).toLocaleDateString() })
          ] }) : null,
          lead.group_size ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              lead.group_size,
              " traveller",
              lead.group_size > 1 ? "s" : ""
            ] })
          ] }) : null,
          lead.budget_range ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-3.5 w-3.5 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: lead.budget_range })
          ] }) : null
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cn("text-[10px]", AGE_COLORS[bucket]), children: ageLabel(lead.created_at) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "h-3.5 w-3.5 text-muted-foreground" })
        ] })
      ]
    }
  );
}
const TYPE_LABEL = {
  hajj: "Hajj",
  umrah: "Umrah"
};
const MessageThread = reactExports.lazy(
  () => import("./MessageThread-xKiiAgTg.mjs").then((m) => ({ default: m.MessageThread }))
);
function LeadDetailPanel({ lead, onClose, onChanged, onSendQuote }) {
  const { user } = useAuth();
  const [rfq, setRfq] = reactExports.useState(null);
  const [quotes, setQuotes] = reactExports.useState([]);
  const [notes, setNotes] = reactExports.useState([]);
  const [booking, setBooking] = reactExports.useState(null);
  const [completing, setCompleting] = reactExports.useState(false);
  const [newNote, setNewNote] = reactExports.useState("");
  const [savingNote, setSavingNote] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [showLostReason, setShowLostReason] = reactExports.useState(false);
  const [lostReason, setLostReason] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (!lead) return;
    setShowLostReason(false);
    setLostReason("");
    setBooking(null);
    setLoading(true);
    (async () => {
      const [rfqRes, quotesRes, notesRes, bookingRes] = await Promise.all([
        lead.rfq_id ? supabase.from("rfqs").select(
          "id, type, departure_city, departure_country, date_from, date_to, adults, children, budget_min, budget_max, budget_currency, zone_pref, meal_pref, transport_pref, notes"
        ).eq("id", lead.rfq_id).maybeSingle() : Promise.resolve({ data: null }),
        lead.rfq_id ? supabase.from("quotes").select("id, price_total, price_currency, hotel_name, hotel_zone, status, created_at").eq("rfq_id", lead.rfq_id).eq("agent_id", lead.agent_id).order("created_at", { ascending: false }) : Promise.resolve({ data: [] }),
        supabase.from("lead_notes").select("id, note, created_at, user_id").eq("lead_id", lead.id).order("created_at", { ascending: false }),
        lead.rfq_id ? supabase.from("bookings").select("id, status, trip_end").eq("rfq_id", lead.rfq_id).eq("agent_id", lead.agent_id).order("created_at", { ascending: false }).limit(1).maybeSingle() : Promise.resolve({ data: null })
      ]);
      setRfq(rfqRes.data ?? null);
      setQuotes(quotesRes.data ?? []);
      setNotes(notesRes.data ?? []);
      setBooking(bookingRes.data ?? null);
      setLoading(false);
    })();
  }, [lead]);
  async function addNote() {
    if (!lead || !user || !newNote.trim()) return;
    setSavingNote(true);
    const { data, error } = await supabase.from("lead_notes").insert({ lead_id: lead.id, user_id: user.id, note: newNote.trim() }).select("id, note, created_at, user_id").single();
    setSavingNote(false);
    if (error) {
      toast.error("Could not save note");
      return;
    }
    setNotes((prev) => [data, ...prev]);
    setNewNote("");
  }
  async function markAsLost() {
    if (!lead) return;
    if (!lostReason) {
      toast.error("Pick a reason");
      return;
    }
    const { error } = await supabase.from("leads").update({ status: "lost", lost_reason: lostReason }).eq("id", lead.id);
    if (error) {
      toast.error("Could not update lead");
      return;
    }
    toast.success("Marked as lost");
    onChanged();
    onClose();
  }
  async function changeStatus(next) {
    if (!lead) return;
    const { error } = await supabase.from("leads").update({ status: next }).eq("id", lead.id);
    if (error) {
      toast.error("Could not update status");
      return;
    }
    toast.success(`Moved to ${LEAD_STATUS_LABEL[next]}`);
    onChanged();
  }
  async function markTripCompleted() {
    if (!booking) return;
    setCompleting(true);
    const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    const { error } = await supabase.from("bookings").update({ status: "completed", trip_end: yesterday }).eq("id", booking.id);
    setCompleting(false);
    if (error) {
      toast.error("Could not complete trip", { description: error.message });
      return;
    }
    toast.success("Trip marked completed — the pilgrim can now leave a review");
    setBooking({ ...booking, status: "completed", trip_end: yesterday });
    onChanged();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open: !!lead, onOpenChange: (o) => !o ? onClose() : null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SheetContent, { className: "w-full overflow-y-auto sm:max-w-xl", children: lead ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetTitle, { className: "flex items-center gap-2", children: [
        lead.pilgrim_name || "Anonymous",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: LEAD_STATUS_LABEL[lead.status] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetDescription, { children: [
        lead.trip_type ? TYPE_LABEL[lead.trip_type] : "Trip",
        " ·",
        " ",
        format(new Date(lead.created_at), "PP")
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "details", className: "mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "details", children: "Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "messages", disabled: !lead.rfq_id, children: "Messages" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "details", className: "mt-4 space-y-6", children: [
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 w-full" })
        ] }) : rfq ? /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "Trip details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-2 grid grid-cols-2 gap-x-3 gap-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs text-muted-foreground", children: "From" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("dd", { children: [
                rfq.departure_city,
                ", ",
                rfq.departure_country
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs text-muted-foreground", children: "Dates" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("dd", { children: [
                rfq.date_from ?? "Any",
                " → ",
                rfq.date_to ?? "Any"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs text-muted-foreground", children: "Group" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("dd", { children: [
                rfq.adults,
                " adult",
                rfq.adults > 1 ? "s" : "",
                rfq.children > 0 ? `, ${rfq.children} child` : ""
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs text-muted-foreground", children: "Budget" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("dd", { children: [
                formatPrice(rfq.budget_min ?? 0, rfq.budget_currency),
                " –",
                " ",
                formatPrice(rfq.budget_max ?? 0, rfq.budget_currency)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs text-muted-foreground", children: "Zone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "capitalize", children: rfq.zone_pref })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs text-muted-foreground", children: "Meals" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "capitalize", children: rfq.meal_pref })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs text-muted-foreground", children: "Transport" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "capitalize", children: rfq.transport_pref })
            ] })
          ] }),
          rfq.notes ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 rounded-md bg-secondary/50 p-2 text-xs text-foreground/80", children: [
            "“",
            rfq.notes,
            "”"
          ] }) : null
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "RFQ no longer available." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-semibold text-foreground", children: [
            "Your quotes (",
            quotes.length,
            ")"
          ] }),
          quotes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "No quote sent for this RFQ yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-2", children: quotes.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "rounded-md border border-border bg-card p-2 text-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: formatPrice(q.price_total, q.price_currency) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] capitalize", children: q.status })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  q.hotel_name ?? "-",
                  " ",
                  q.hotel_zone ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "· Zone ",
                    q.hotel_zone
                  ] }) : null
                ] })
              ]
            },
            q.id
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "flex items-center gap-2 text-sm font-semibold text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4" }),
            " Notes"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                value: newNote,
                onChange: (e) => setNewNote(e.target.value),
                rows: 2,
                placeholder: "Add a private note..."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: addNote, disabled: savingNote || !newNote.trim(), children: savingNote ? "Saving..." : "Add note" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2", children: [
            notes.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "rounded-md border border-border bg-secondary/30 p-2 text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap text-foreground/90", children: n.note }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] text-muted-foreground", children: format(new Date(n.created_at), "PPp") })
                ]
              },
              n.id
            )),
            notes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-xs text-muted-foreground", children: "No notes yet." }) : null
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "Actions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: onSendQuote, className: "gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
              " Send Quote"
            ] }),
            lead.status !== "contacted" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => changeStatus("contacted"), children: "Mark contacted" }) : null,
            lead.status !== "lost" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: () => setShowLostReason((s) => !s), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "mr-1 h-4 w-4" }),
              " Mark as Lost"
            ] }) : null,
            booking && booking.status !== "completed" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                onClick: markTripCompleted,
                disabled: completing,
                className: "gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
                  completing ? "Completing..." : "Mark trip completed"
                ]
              }
            ) : null
          ] }),
          booking?.status === "completed" ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-emerald-600", children: "Trip completed — the pilgrim can now leave a review." }) : null,
          showLostReason ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-2 rounded-md border border-border p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground", children: "Reason" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: lostReason, onValueChange: setLostReason, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select a reason" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: LOST_REASONS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, children: r }, r)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "destructive", onClick: markAsLost, children: "Confirm lost" })
          ] }) : null
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "messages", className: "mt-4", children: lead.rfq_id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        reactExports.Suspense,
        {
          fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-10 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin" }) }),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            MessageThread,
            {
              rfqId: lead.rfq_id,
              viewerType: "agent",
              emptyHint: "Start the conversation - pilgrims appreciate a warm intro before pricing."
            }
          )
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "This lead isn't linked to an RFQ, so messaging isn't available." }) })
    ] })
  ] }) : null }) });
}
function SendQuoteDialog({
  rfqId,
  agentId,
  matchId,
  defaultCurrency = "GBP",
  title,
  description,
  onClose,
  onSent,
  rfqContext
}) {
  const { agent } = useAuth();
  const [price, setPrice] = reactExports.useState("");
  const [currency, setCurrency] = reactExports.useState(defaultCurrency);
  const [hotelName, setHotelName] = reactExports.useState("");
  const [zone, setZone] = reactExports.useState("");
  const [validUntil, setValidUntil] = reactExports.useState("");
  const [notes, setNotes] = reactExports.useState("");
  const [breakdown, setBreakdown] = reactExports.useState("");
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [templates, setTemplates] = reactExports.useState([]);
  const [templatesOpen, setTemplatesOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!agent) return;
    listQuoteTemplates(agent.id).then(setTemplates).catch(() => null);
  }, [agent]);
  function loadTemplate(t) {
    const values = buildMergeValues({
      pilgrim_name: rfqContext?.pilgrim_name ?? null,
      package_name: rfqContext?.package_name ?? null,
      price_total: Number(price) || null,
      price_currency: currency,
      hotel_name: hotelName || null,
      date_from: rfqContext?.date_from ?? null,
      date_to: rfqContext?.date_to ?? null,
      agent_name: agent?.business_name ?? null,
      agent_phone: null
    });
    setNotes(applyMergeFields(t.html_template, values));
    setTemplatesOpen(false);
  }
  async function submit() {
    const priceNum = Number(price);
    if (!Number.isFinite(priceNum) || priceNum <= 0) {
      toast.error("Enter a valid total price");
      return;
    }
    setSubmitting(true);
    try {
      const { error } = await supabase.from("quotes").insert({
        rfq_id: rfqId,
        agent_id: agentId,
        price_total: priceNum,
        price_currency: currency,
        hotel_name: hotelName || null,
        hotel_zone: zone || null,
        valid_until: validUntil || null,
        notes: notes || null,
        price_breakdown: breakdown ? { summary: breakdown } : {}
      });
      if (error) throw error;
      if (matchId) {
        await supabase.from("rfq_agent_matches").update({ responded: true, responded_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", matchId);
      }
      await supabase.from("rfqs").update({ status: "quotes_received" }).eq("id", rfqId);
      toast.success("Quote sent");
      onSent();
    } catch (err) {
      console.error(err);
      toast.error("Could not send quote", {
        description: err instanceof Error ? err.message : "Please try again"
      });
    } finally {
      setSubmitting(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: true, onOpenChange: (o) => !o ? onClose() : null, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm", children: "Total price" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "number",
              min: 0,
              value: price,
              onChange: (e) => setPrice(e.target.value),
              placeholder: "2,499",
              className: "mt-1"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm", children: "Currency" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: currency, onValueChange: setCurrency, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["GBP", "USD", "EUR", "SAR", "AED"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm", children: "Hotel name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: hotelName,
              onChange: (e) => setHotelName(e.target.value),
              placeholder: "e.g. Hilton Makkah",
              className: "mt-1"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm", children: "Hotel zone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: zone, onValueChange: (v) => setZone(v), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select zone" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "A", children: "A - Closest" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "B", children: "B - Mid" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "C", children: "C - Farther" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm", children: "Valid until" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "date",
            value: validUntil,
            onChange: (e) => setValidUntil(e.target.value),
            className: "mt-1"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm", children: "Price breakdown (optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: breakdown,
            onChange: (e) => setBreakdown(e.target.value),
            rows: 2,
            placeholder: "e.g. Flights £700, Hotel £1,200, Visa £100...",
            className: "mt-1"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm", children: "Notes for the pilgrim (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open: templatesOpen, onOpenChange: setTemplatesOpen, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", size: "sm", children: "Load template" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-72 p-2", align: "end", children: templates.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground p-2", children: "No templates yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 max-h-64 overflow-auto", children: templates.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => loadTemplate(t),
                className: "w-full text-left text-sm px-2 py-1.5 rounded hover:bg-accent",
                children: [
                  t.name,
                  t.is_starter && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-xs text-muted-foreground", children: "starter" })
                ]
              },
              t.id
            )) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: notes,
            onChange: (e) => setNotes(e.target.value),
            rows: 4,
            placeholder: "What makes this offer great...",
            className: "mt-1"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: onClose, disabled: submitting, children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: submit, disabled: submitting, children: submitting ? "Sending..." : "Send quote" })
    ] })
  ] }) });
}
function Shimmer({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn("skeleton-shimmer rounded-md", className),
      "aria-hidden": "true",
      ...props
    }
  );
}
function LeadCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 rounded-lg border border-border bg-card p-3 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Shimmer, { className: "h-4 w-28" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Shimmer, { className: "h-4 w-10 rounded-full" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Shimmer, { className: "h-3 w-3/4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Shimmer, { className: "h-3 w-16" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Shimmer, { className: "h-3 w-14" })
    ] })
  ] });
}
function LeadsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LeadsContent, {}) });
}
function LeadsContent() {
  const {
    agent
  } = useAuth();
  const [leads, setLeads] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [view, setView] = reactExports.useState("kanban");
  const [activeLead, setActiveLead] = reactExports.useState(null);
  const [draggingLead, setDraggingLead] = reactExports.useState(null);
  const [quoteFor, setQuoteFor] = reactExports.useState(null);
  const [newLeadIds, setNewLeadIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const newLeadTimers = reactExports.useRef(/* @__PURE__ */ new Map());
  const sensors = useSensors(useSensor(PointerSensor, {
    activationConstraint: {
      distance: 5
    }
  }));
  async function load() {
    if (!agent) return;
    setLoading(true);
    const {
      data,
      error
    } = await supabase.from("leads").select("id, agent_id, rfq_id, pilgrim_id, status, pilgrim_name, trip_type, departure_date, group_size, budget_range, score, created_at, first_response_at, source, snoozed_until, tags, source_detail, lost_reason, updated_at").eq("agent_id", agent.id).order("created_at", {
      ascending: false
    }).range(0, 199);
    if (error) {
      toast.error("Could not load leads");
    } else {
      setLeads(data ?? []);
    }
    setLoading(false);
  }
  reactExports.useEffect(() => {
    load();
  }, [agent?.id]);
  reactExports.useEffect(() => {
    if (!agent?.id) return;
    const channel = supabase.channel(`agent-leads-${agent.id}`).on("postgres_changes", {
      event: "INSERT",
      schema: "public",
      table: "leads",
      filter: `agent_id=eq.${agent.id}`
    }, (payload) => {
      const lead = payload.new;
      setLeads((prev) => prev.some((l) => l.id === lead.id) ? prev : [lead, ...prev]);
      setNewLeadIds((prev) => new Set(prev).add(lead.id));
      const t = setTimeout(() => {
        setNewLeadIds((prev) => {
          const next = new Set(prev);
          next.delete(lead.id);
          return next;
        });
        newLeadTimers.current.delete(lead.id);
      }, 4e3);
      newLeadTimers.current.set(lead.id, t);
      toast.success(`New lead: ${lead.pilgrim_name || "Anonymous"}`);
    }).on("postgres_changes", {
      event: "UPDATE",
      schema: "public",
      table: "leads",
      filter: `agent_id=eq.${agent.id}`
    }, (payload) => {
      const lead = payload.new;
      setLeads((prev) => prev.map((l) => l.id === lead.id ? lead : l));
    }).subscribe();
    return () => {
      newLeadTimers.current.forEach((t) => clearTimeout(t));
      newLeadTimers.current.clear();
      supabase.removeChannel(channel);
    };
  }, [agent?.id]);
  const grouped = reactExports.useMemo(() => {
    const map = {
      new: [],
      contacted: [],
      quote_sent: [],
      awaiting_deposit: [],
      confirmed: [],
      completed: [],
      lost: []
    };
    for (const l of leads) map[l.status]?.push(l);
    return map;
  }, [leads]);
  function handleDragStart(e) {
    const lead = leads.find((l) => l.id === e.active.id);
    if (lead) setDraggingLead(lead);
  }
  async function handleDragEnd(e) {
    setDraggingLead(null);
    const {
      active,
      over
    } = e;
    if (!over) return;
    const lead = leads.find((l) => l.id === active.id);
    if (!lead) return;
    const overId = String(over.id);
    let next = null;
    if (KANBAN_COLUMNS.includes(overId)) {
      next = overId;
    } else {
      const overLead = leads.find((l) => l.id === overId);
      if (overLead) next = overLead.status;
    }
    if (!next || lead.status === next) return;
    const previous = lead.status;
    setLeads((prev) => prev.map((l) => l.id === lead.id ? {
      ...l,
      status: next
    } : l));
    const {
      error
    } = await supabase.from("leads").update({
      status: next
    }).eq("id", lead.id);
    if (error) {
      toast.error("Could not move lead - reverted");
      setLeads((prev) => prev.map((l) => l.id === lead.id ? {
        ...l,
        status: previous
      } : l));
    } else {
      toast.success(`Moved to ${LEAD_STATUS_LABEL[next]}`);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardLayout, { title: "Leads", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-[1400px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-wrap items-end justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Pilgrim leads" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Drag leads between columns as they move through your pipeline." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-sm", children: [
            leads.length,
            " total"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleGroup, { type: "single", value: view, onValueChange: (v) => v && setView(v), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupItem, { value: "kanban", "aria-label": "Kanban", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupItem, { value: "list", "aria-label": "List", children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { className: "h-4 w-4" }) })
          ] })
        ] })
      ] }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 overflow-x-auto pb-4", children: KANBAN_COLUMNS.slice(0, 4).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-72 shrink-0 space-y-2 rounded-lg border border-border bg-secondary/30 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shimmer, { className: "h-4 w-24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LeadCardSkeleton, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LeadCardSkeleton, {})
      ] }, s)) }) : leads.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "h-7 w-7" }), title: "No leads yet", description: "Make sure your packages are active and match common departure countries. Leads will appear here as pilgrims request quotes.", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/agent/packages/new", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
        " Create a package"
      ] }) }) }) : view === "kanban" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(DndContext, { sensors, onDragStart: handleDragStart, onDragEnd: handleDragEnd, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 sm:mx-0 sm:snap-none sm:px-0", children: KANBAN_COLUMNS.map((status) => /* @__PURE__ */ jsxRuntimeExports.jsx(KanbanColumn, { status, leads: grouped[status], newLeadIds, onCardClick: setActiveLead }, status)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DragOverlay, { children: draggingLead ? /* @__PURE__ */ jsxRuntimeExports.jsx(LeadCard, { lead: draggingLead, onClick: () => {
        }, isOverlay: true }) : null })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ListView, { leads, onRowClick: setActiveLead })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LeadDetailPanel, { lead: activeLead, onClose: () => setActiveLead(null), onChanged: load, onSendQuote: () => {
      if (activeLead) setQuoteFor(activeLead);
    } }),
    quoteFor && quoteFor.rfq_id && agent ? /* @__PURE__ */ jsxRuntimeExports.jsx(SendQuoteDialog, { rfqId: quoteFor.rfq_id, agentId: agent.id, title: "Send a quote", description: `${quoteFor.pilgrim_name || "Pilgrim"} · ${quoteFor.trip_type ?? ""}`, onClose: () => setQuoteFor(null), onSent: () => {
      setQuoteFor(null);
      load();
    } }) : null
  ] });
}
function KanbanColumn({
  status,
  leads,
  newLeadIds,
  onCardClick
}) {
  const {
    setNodeRef,
    isOver
  } = useDroppable({
    id: status
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: setNodeRef, className: cn("flex w-[80vw] max-w-[18rem] shrink-0 snap-start flex-col rounded-lg border border-border bg-secondary/30 p-3 transition sm:w-72 sm:snap-align-none", isOver && "border-primary bg-primary/5"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: LEAD_STATUS_LABEL[status] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: leads.length })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SortableContext, { items: leads.map((l) => l.id), strategy: verticalListSortingStrategy, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
      leads.map((lead) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(newLeadIds.has(lead.id) && "animate-in fade-in slide-in-from-top-2"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(LeadCard, { lead, onClick: () => onCardClick(lead) }) }, lead.id)),
      leads.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "py-6 text-center text-xs text-muted-foreground", children: "No leads" }) : null
    ] }) })
  ] });
}
function ListView({
  leads,
  onRowClick
}) {
  const [sortKey, setSortKey] = reactExports.useState("created_at");
  const [dir, setDir] = reactExports.useState("desc");
  const sorted = reactExports.useMemo(() => {
    const copy = [...leads];
    copy.sort((a, b) => {
      const av = a[sortKey] ?? "";
      const bv = b[sortKey] ?? "";
      if (av < bv) return dir === "asc" ? -1 : 1;
      if (av > bv) return dir === "asc" ? 1 : -1;
      return 0;
    });
    return copy;
  }, [leads, sortKey, dir]);
  function toggle(key) {
    if (sortKey === key) setDir(dir === "asc" ? "desc" : "asc");
    else {
      setSortKey(key);
      setDir("desc");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Pilgrim" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Trip" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { onClick: () => toggle("departure_date"), className: "cursor-pointer", children: "Departure" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Group" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Budget" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { onClick: () => toggle("status"), className: "cursor-pointer", children: "Status" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { onClick: () => toggle("created_at"), className: "cursor-pointer", children: "Age" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: sorted.map((lead) => {
      const bucket = ageBucket(lead.created_at);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "cursor-pointer", onClick: () => onRowClick(lead), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: lead.pilgrim_name || "Anonymous" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "capitalize", children: lead.trip_type ?? "-" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: lead.departure_date ? new Date(lead.departure_date).toLocaleDateString() : "-" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: lead.group_size ?? "-" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "max-w-[180px] truncate", children: lead.budget_range ?? "-" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: LEAD_STATUS_LABEL[lead.status] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cn("text-[10px]", AGE_COLORS[bucket]), children: ageLabel(lead.created_at) }) })
      ] }, lead.id);
    }) })
  ] }) });
}
export {
  LeadsPage as component
};
