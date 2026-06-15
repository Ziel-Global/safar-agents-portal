import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { O as Route, s as supabase, D as DashboardLayout, B as Button, l as cn, L as Label, I as Input, m as Switch } from "./router-BZcuc5AB.mjs";
import { P as ProtectedRoute } from "./ProtectedRoute-DoVUnduH.mjs";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, e as DialogFooter } from "./dialog-D8TTSPkc.mjs";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-lDUr4Uqx.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as ArrowLeft, L as LoaderCircle, ah as ChevronLeft, C as ChevronRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-popover.mjs";
function ymd(d) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function startOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}
function getMonthGrid(month) {
  const first = startOfMonth(month);
  const startWeekday = (first.getDay() + 6) % 7;
  const days = [];
  for (let i = 0; i < startWeekday; i++) {
    days.push(new Date(first.getFullYear(), first.getMonth(), i - startWeekday + 1));
  }
  const lastDay = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
  for (let d = 1; d <= lastDay; d++) {
    days.push(new Date(first.getFullYear(), first.getMonth(), d));
  }
  while (days.length % 7 !== 0) {
    const last = days[days.length - 1];
    days.push(new Date(last.getFullYear(), last.getMonth(), last.getDate() + 1));
  }
  return days;
}
function dotColor(row) {
  if (!row) return "bg-muted text-muted-foreground";
  if (row.is_blackout) return "bg-muted text-muted-foreground line-through";
  const remaining = row.available_slots - row.booked_slots;
  if (remaining <= 0) return "bg-rose-500/20 text-rose-700 dark:text-rose-300";
  if (remaining <= 5) return "bg-amber-500/20 text-amber-800 dark:text-amber-200";
  return "bg-emerald-500/20 text-emerald-800 dark:text-emerald-200";
}
function AvailabilityCalendar({ packageId }) {
  const [month, setMonth] = reactExports.useState(startOfMonth(/* @__PURE__ */ new Date()));
  const [rows, setRows] = reactExports.useState({});
  const [loading, setLoading] = reactExports.useState(true);
  const [selected, setSelected] = reactExports.useState(/* @__PURE__ */ new Set());
  const [bulkOpen, setBulkOpen] = reactExports.useState(false);
  const [bulkSlots, setBulkSlots] = reactExports.useState("20");
  const [bulkPrice, setBulkPrice] = reactExports.useState("");
  const [bulkBlackout, setBulkBlackout] = reactExports.useState(false);
  const grid = reactExports.useMemo(() => getMonthGrid(month), [month]);
  const load = async () => {
    setLoading(true);
    const start = ymd(grid[0]);
    const end = ymd(grid[grid.length - 1]);
    const { data, error } = await supabase.from("package_availability").select("*").eq("package_id", packageId).gte("date", start).lte("date", end);
    if (error) toast.error(error.message);
    else {
      const map = {};
      (data ?? []).forEach((r) => {
        map[r.date] = r;
      });
      setRows(map);
    }
    setLoading(false);
  };
  reactExports.useEffect(() => {
    if (packageId) load();
  }, [packageId, month.getFullYear(), month.getMonth()]);
  const toggleSelect = (date, e) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (e.shiftKey || e.metaKey || e.ctrlKey) {
        if (next.has(date)) next.delete(date);
        else next.add(date);
      } else {
        next.clear();
        next.add(date);
      }
      return next;
    });
  };
  const dragAnchorRef = reactExports.useRef(null);
  const draggedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const up = () => {
      dragAnchorRef.current = null;
    };
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => {
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, []);
  const handlePointerDown = (date, e) => {
    if (e.button !== 0) return;
    dragAnchorRef.current = date;
    draggedRef.current = false;
  };
  const handlePointerEnter = (date, e) => {
    const anchor = dragAnchorRef.current;
    if (!anchor) return;
    if (e.buttons === 0) {
      dragAnchorRef.current = null;
      return;
    }
    if (date === anchor && !draggedRef.current) return;
    draggedRef.current = true;
    const [lo, hi] = anchor < date ? [anchor, date] : [date, anchor];
    const next = /* @__PURE__ */ new Set();
    grid.forEach((d) => {
      const ds = ymd(d);
      if (ds >= lo && ds <= hi) next.add(ds);
    });
    setSelected(next);
  };
  const upsertRow = async (date, patch) => {
    const existing = rows[date];
    const merged = {
      package_id: packageId,
      date,
      available_slots: existing?.available_slots ?? 0,
      booked_slots: existing?.booked_slots ?? 0,
      price_override: existing?.price_override ?? null,
      is_blackout: existing?.is_blackout ?? false,
      ...patch
    };
    const { data, error } = await supabase.from("package_availability").upsert(
      {
        package_id: merged.package_id,
        date: merged.date,
        available_slots: merged.available_slots,
        booked_slots: merged.booked_slots,
        price_override: merged.price_override,
        is_blackout: merged.is_blackout
      },
      { onConflict: "package_id,date" }
    ).select().single();
    if (error) {
      toast.error(error.message);
      return null;
    }
    setRows((prev) => ({ ...prev, [date]: data }));
    return data;
  };
  const clearRow = async (date) => {
    const existing = rows[date];
    if (!existing?.id) return;
    const { error } = await supabase.from("package_availability").delete().eq("id", existing.id);
    if (error) toast.error(error.message);
    else {
      setRows((prev) => {
        const next = { ...prev };
        delete next[date];
        return next;
      });
      toast.success("Cleared");
    }
  };
  const applyBulk = async () => {
    if (selected.size === 0) {
      toast.error("Select at least one date");
      return;
    }
    const slots = Number(bulkSlots) || 0;
    const price = bulkPrice ? Number(bulkPrice) : null;
    let success = 0;
    for (const date of selected) {
      const r = await upsertRow(date, {
        available_slots: slots,
        is_blackout: bulkBlackout,
        price_override: price
      });
      if (r) success += 1;
    }
    toast.success(`Updated ${success} date${success === 1 ? "" : "s"}`);
    setBulkOpen(false);
    setSelected(/* @__PURE__ */ new Set());
  };
  const monthLabel = month.toLocaleDateString(void 0, { month: "long", year: "numeric" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            size: "icon",
            onClick: () => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1)),
            "aria-label": "Previous month",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "min-w-[150px] text-center text-base font-semibold", children: monthLabel }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            size: "icon",
            onClick: () => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1)),
            "aria-label": "Next month",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: selected.size > 0 ? `${selected.size} selected` : "Click, drag, or shift-click to select dates" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", disabled: selected.size === 0, onClick: () => setBulkOpen(true), children: [
          "Bulk set (",
          selected.size,
          ")"
        ] }),
        selected.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => setSelected(/* @__PURE__ */ new Set()), children: "Clear" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { color: "bg-emerald-500/30", label: "6+ open" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { color: "bg-amber-500/40", label: "1–5 left" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { color: "bg-rose-500/30", label: "Sold out" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { color: "bg-muted", label: "Blackout / unset" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3", children: [
      loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-64 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" }) }),
      !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 grid grid-cols-7 gap-1 text-center text-[10px] font-semibold uppercase text-muted-foreground", children: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: d }, d)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1", children: grid.map((d) => {
          const date = ymd(d);
          const inMonth = d.getMonth() === month.getMonth();
          const row = rows[date];
          const remaining = row ? row.available_slots - row.booked_slots : 0;
          const isSelected = selected.has(date);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onPointerDown: (e) => handlePointerDown(date, e),
                onPointerEnter: (e) => handlePointerEnter(date, e),
                onClick: (e) => {
                  if (draggedRef.current) {
                    e.preventDefault();
                    e.stopPropagation();
                    draggedRef.current = false;
                    return;
                  }
                  toggleSelect(date, e);
                },
                className: cn(
                  "flex h-16 w-full flex-col items-center justify-center rounded-md border text-xs transition focus:outline-none focus:ring-2 focus:ring-ring",
                  inMonth ? "border-border" : "border-transparent opacity-40",
                  dotColor(row),
                  isSelected && "ring-2 ring-primary ring-offset-1 ring-offset-card"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: d.getDate() }),
                  row && !row.is_blackout && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] opacity-90", children: [
                    Math.max(0, remaining),
                    "/",
                    row.available_slots
                  ] }),
                  row?.is_blackout && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase", children: "Blackout" })
                ]
              }
            ) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-72", align: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              DateEditor,
              {
                date,
                row,
                onSave: async (patch) => {
                  await upsertRow(date, patch);
                  toast.success("Saved");
                },
                onClear: () => clearRow(date)
              }
            ) })
          ] }, date);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: bulkOpen, onOpenChange: setBulkOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
        "Bulk set ",
        selected.size,
        " date",
        selected.size === 1 ? "" : "s"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Available slots" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "number",
              value: bulkSlots,
              onChange: (e) => setBulkSlots(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Price override (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "number",
              value: bulkPrice,
              onChange: (e) => setBulkPrice(e.target.value),
              placeholder: "Leave blank to use base price"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-md border border-border p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "bulk-blackout", className: "font-normal", children: "Blackout these dates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { id: "bulk-blackout", checked: bulkBlackout, onCheckedChange: setBulkBlackout })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: () => setBulkOpen(false), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: applyBulk, children: "Apply" })
      ] })
    ] }) })
  ] });
}
function Legend({ color, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-3 w-3 rounded", color) }),
    " ",
    label
  ] });
}
function DateEditor({
  date,
  row,
  onSave,
  onClear
}) {
  const [slots, setSlots] = reactExports.useState(String(row?.available_slots ?? 20));
  const [price, setPrice] = reactExports.useState(row?.price_override != null ? String(row.price_override) : "");
  const [blackout, setBlackout] = reactExports.useState(row?.is_blackout ?? false);
  const [saving, setSaving] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: new Date(date).toLocaleDateString(void 0, { dateStyle: "full" }) }),
      row && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        row.booked_slots,
        " booked of ",
        row.available_slots,
        " (",
        Math.max(0, row.available_slots - row.booked_slots),
        " left)"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Available slots" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: slots, onChange: (e) => setSlots(e.target.value) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Price override" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: price, onChange: (e) => setPrice(e.target.value), placeholder: "Use base price" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: `bo-${date}`, className: "text-xs font-normal", children: "Blackout" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { id: `bo-${date}`, checked: blackout, onCheckedChange: setBlackout })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-2 pt-1", children: [
      row && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: onClear, className: "text-destructive", children: "Clear" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          className: "ml-auto",
          disabled: saving,
          onClick: async () => {
            setSaving(true);
            await onSave({
              available_slots: Number(slots) || 0,
              price_override: price ? Number(price) : null,
              is_blackout: blackout
            });
            setSaving(false);
          },
          children: [
            saving && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-1 h-3.5 w-3.5 animate-spin" }),
            " Save"
          ]
        }
      )
    ] })
  ] });
}
function AvailabilityPage() {
  const {
    id
  } = Route.useParams();
  const [pkg, setPkg] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    (async () => {
      const {
        data,
        error
      } = await supabase.from("packages").select("title, base_price, currency").eq("id", id).single();
      if (error) {
        setPkg(null);
      } else {
        setPkg(data);
      }
      setLoading(false);
    })();
  }, [id]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardLayout, { title: "Availability", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-5xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/agent/packages", className: "inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
      " Back to packages"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: "Availability" }),
      pkg && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: pkg.title }),
        " · base",
        " ",
        pkg.currency,
        " ",
        pkg.base_price ?? "-"
      ] })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-64 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }) }) : !pkg ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Package not found." }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AvailabilityCalendar, { packageId: id })
  ] }) });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvailabilityPage, {}) });
export {
  SplitComponent as component
};
