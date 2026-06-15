import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { P as ProtectedRoute } from "./ProtectedRoute-DoVUnduH.mjs";
import { u as useAuth, D as DashboardLayout, B as Button, k as Badge, n as Skeleton, s as supabase, C as Card, a as CardHeader, b as CardTitle, l as cn, c as CardDescription, d as CardContent, L as Label, I as Input, x as buttonVariants } from "./router-BZcuc5AB.mjs";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-lDUr4Uqx.mjs";
import { g as getBadgeIcon } from "./badges-DtcsFvGi.mjs";
import { A as ArrowLeft, ae as CircleX, V as CircleCheck, af as Clock, ag as FileText, aa as Upload, e as Calendar$1, L as LoaderCircle, ah as ChevronLeft, C as ChevronRight, c as ChevronDown } from "../_libs/lucide-react.mjs";
import { f as format } from "../_libs/date-fns.mjs";
import { g as getDefaultClassNames, D as DayPicker } from "../_libs/react-day-picker.mjs";
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
import "../_libs/radix-ui__react-popover.mjs";
import "../_libs/date-fns__tz.mjs";
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DayPicker,
    {
      showOutsideDays,
      className: cn(
        "bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal",
          defaultClassNames.weekday
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
        week_number: cn(
          "text-muted-foreground select-none text-[0.8rem]",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
          defaultClassNames.day
        ),
        range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames
      },
      components: {
        Root: ({ className: className2, rootRef, ...props2 }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-slot": "calendar", ref: rootRef, className: cn(className2), ...props2 });
        },
        Chevron: ({ className: className2, orientation, ...props2 }) => {
          if (orientation === "left") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: cn("size-4", className2), ...props2 });
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { ...props2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children }) });
        },
        ...components
      },
      ...props
    }
  );
}
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button,
    {
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      ),
      ...props
    }
  );
}
const STATUS_BADGE = {
  pending: {
    label: "Under review",
    className: "bg-amber-100 text-amber-900 border-amber-300",
    Icon: Clock
  },
  verified: {
    label: "Verified",
    className: "bg-emerald-100 text-emerald-900 border-emerald-300",
    Icon: CircleCheck
  },
  expired: {
    label: "Expired",
    className: "bg-rose-100 text-rose-900 border-rose-300",
    Icon: CircleX
  },
  rejected: {
    label: "Rejected",
    className: "bg-rose-100 text-rose-900 border-rose-300",
    Icon: CircleX
  }
};
function CredentialsPage() {
  const {
    agent
  } = useAuth();
  const navigate = useNavigate();
  const [badgeTypes, setBadgeTypes] = reactExports.useState([]);
  const [submissions, setSubmissions] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const refresh = async () => {
    if (!agent?.id) return;
    const [{
      data: types
    }, {
      data: subs
    }] = await Promise.all([supabase.from("badge_types").select("*").order("name"), supabase.from("agent_badges").select("*").eq("agent_id", agent.id)]);
    setBadgeTypes(types ?? []);
    setSubmissions(subs ?? []);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    refresh();
  }, [agent?.id]);
  const verifiedCount = submissions.filter((s) => s.status === "verified").length;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardLayout, { title: "Verify your credentials", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: () => navigate({
        to: "/agent/dashboard"
      }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Back to dashboard"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "px-3 py-1.5", children: [
        verifiedCount,
        " / ",
        badgeTypes.length,
        " verified"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: "Build trust with verified badges" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Upload your official documents. Our team reviews each submission within 1–2 business days." })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: Array.from({
      length: 4
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-72 rounded-xl" }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: badgeTypes.map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx(CredentialCard, { type, submission: submissions.find((s) => s.badge_type === type.id), agentId: agent?.id ?? "", onChanged: refresh }, type.id)) })
  ] }) });
}
function CredentialCard({
  type,
  submission,
  agentId,
  onChanged
}) {
  const Icon = getBadgeIcon(type.icon_name);
  const status = submission?.status;
  const [file, setFile] = reactExports.useState(null);
  const [expiry, setExpiry] = reactExports.useState(submission?.expires_at ? new Date(submission.expires_at) : void 0);
  const [uploading, setUploading] = reactExports.useState(false);
  const canEdit = !submission || submission.status === "rejected" || submission.status === "expired";
  const handleSubmit = async () => {
    if (!file) {
      toast.error("Please choose a document");
      return;
    }
    if (!agentId) return;
    setUploading(true);
    try {
      const ext = file.name.split(".").pop()?.toLowerCase() ?? "pdf";
      const path = `${(await supabase.auth.getUser()).data.user?.id}/${agentId}/${type.id}-${Date.now()}.${ext}`;
      const {
        error: upErr
      } = await supabase.storage.from("agent-credentials").upload(path, file, {
        contentType: file.type,
        upsert: true
      });
      if (upErr) throw upErr;
      if (submission) {
        const {
          error
        } = await supabase.from("agent_badges").update({
          document_url: path,
          expires_at: expiry ? format(expiry, "yyyy-MM-dd") : null,
          status: "pending",
          rejection_reason: null
        }).eq("id", submission.id);
        if (error) throw error;
      } else {
        const {
          error
        } = await supabase.from("agent_badges").insert({
          agent_id: agentId,
          badge_type: type.id,
          document_url: path,
          expires_at: expiry ? format(expiry, "yyyy-MM-dd") : null,
          status: "pending"
        });
        if (error) throw error;
      }
      toast.success(`${type.name} submitted`, {
        description: "We'll review it shortly."
      });
      setFile(null);
      onChanged();
    } catch (err) {
      const e = err;
      toast.error("Upload failed", {
        description: e.message ?? "Please try again."
      });
    } finally {
      setUploading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-col border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 shrink-0 place-content-center rounded-xl", style: {
        backgroundColor: type.color_hex
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-white" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex flex-wrap items-center gap-2 text-base", children: [
          type.name,
          status ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-semibold", STATUS_BADGE[status].className), children: [
            (() => {
              const StatusIcon = STATUS_BADGE[status].Icon;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(StatusIcon, { className: "h-3 w-3" });
            })(),
            STATUS_BADGE[status].label
          ] }) : null
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "mt-1", children: type.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-[11px] text-muted-foreground", children: [
          "Issued by ",
          type.authority
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-1 flex-col gap-3", children: [
      submission?.status === "rejected" && submission.rejection_reason ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-rose-300 bg-rose-50 p-3 text-xs text-rose-900", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Reason:" }),
        " ",
        submission.rejection_reason
      ] }) : null,
      submission?.status === "verified" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-emerald-300 bg-emerald-50 p-3 text-xs text-emerald-900", children: [
        "Verified on ",
        submission.verified_at ? format(new Date(submission.verified_at), "PP") : "-",
        submission.expires_at ? ` · Expires ${format(new Date(submission.expires_at), "PP")}` : ""
      ] }) : null,
      canEdit ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: `file-${type.id}`, className: "text-xs font-semibold", children: "Document (PDF, JPEG, PNG)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: `file-${type.id}`, className: cn("flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-border bg-secondary/40 px-4 py-5 text-center transition-colors hover:bg-secondary", file && "border-primary/40 bg-primary/5"), children: file ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-6 w-6 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground", children: file.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-muted-foreground", children: [
              (file.size / 1024).toFixed(0),
              " KB"
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-6 w-6 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground", children: "Click to upload" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: "Max 10MB" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: `file-${type.id}`, type: "file", accept: "application/pdf,image/jpeg,image/png", className: "hidden", onChange: (e) => {
            const f = e.target.files?.[0];
            if (f && f.size > 10 * 1024 * 1024) {
              toast.error("File too large (max 10MB)");
              return;
            }
            setFile(f ?? null);
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Expiry date (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: cn("justify-start text-left font-normal", !expiry && "text-muted-foreground"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar$1, { className: "h-4 w-4" }),
              expiry ? format(expiry, "PP") : "Pick a date"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { mode: "single", selected: expiry, onSelect: setExpiry, disabled: (d) => d < /* @__PURE__ */ new Date(), initialFocus: true, className: cn("p-3 pointer-events-auto") }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleSubmit, disabled: uploading || !file, className: "mt-auto", children: [
          uploading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }),
          submission ? "Resubmit" : "Submit for review"
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto rounded-md border border-border bg-secondary/40 p-3 text-xs text-muted-foreground", children: [
        "Submitted ",
        submission?.created_at ? format(new Date(submission.created_at), "PP") : "",
        ". We'll email you when the review is complete."
      ] }),
      type.help_url ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: type.help_url, target: "_blank", rel: "noreferrer", className: "text-[11px] font-semibold text-primary hover:underline", children: [
        "Learn about ",
        type.name,
        " →"
      ] }) : null
    ] })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CredentialsPage, {}) });
export {
  SplitComponent as component
};
