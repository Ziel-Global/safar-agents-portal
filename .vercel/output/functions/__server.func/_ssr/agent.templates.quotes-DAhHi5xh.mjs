import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { P as ProtectedRoute } from "./ProtectedRoute-DoVUnduH.mjs";
import { u as useAuth, D as DashboardLayout, B as Button, n as Skeleton, l as cn, k as Badge, C as Card, d as CardContent, L as Label, I as Input, s as supabase } from "./router-BZcuc5AB.mjs";
import { T as Textarea } from "./textarea-UU-ZedD5.mjs";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-CmB7P5i6.mjs";
import { m as markdownToHtml, a as applyMergeFields, M as MERGE_FIELDS, l as listQuoteTemplates, b as buildMergeValues } from "./quoteTemplates-DEB_8rq-.mjs";
import { A as ArrowLeft, x as Plus, S as Star, k as Sparkles, y as Trash2 } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-tabs.mjs";
const SAMPLE_VALUES = buildMergeValues({
  pilgrim_name: "Aisha Rahman",
  package_name: "14-night Premium Umrah",
  price_total: 2499,
  price_currency: "GBP",
  hotel_name: "Hilton Suites Makkah",
  date_from: "2026-03-12",
  date_to: "2026-03-26",
  agent_name: "Noor Travel",
  agent_phone: "+44 20 7946 0000"
});
function QuoteTemplatesPage() {
  const {
    agent
  } = useAuth();
  const [templates, setTemplates] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [selectedId, setSelectedId] = reactExports.useState(null);
  const [name, setName] = reactExports.useState("");
  const [body, setBody] = reactExports.useState("");
  const [saving, setSaving] = reactExports.useState(false);
  async function reload() {
    if (!agent) return;
    setLoading(true);
    try {
      const t = await listQuoteTemplates(agent.id);
      setTemplates(t);
      if (!selectedId && t.length > 0) {
        setSelectedId(t[0].id);
        setName(t[0].name);
        setBody(t[0].html_template);
      }
    } catch (err) {
      toast.error("Could not load templates", {
        description: err instanceof Error ? err.message : void 0
      });
    } finally {
      setLoading(false);
    }
  }
  reactExports.useEffect(() => {
    reload();
  }, [agent?.id]);
  const selected = templates.find((t) => t.id === selectedId) ?? null;
  const isStarter = selected?.is_starter ?? false;
  const ownTemplates = templates.filter((t) => !t.is_starter);
  const starterTemplates = templates.filter((t) => t.is_starter);
  function selectTemplate(t) {
    setSelectedId(t.id);
    setName(t.name);
    setBody(t.html_template);
  }
  async function createBlank() {
    if (!agent) return;
    const {
      data,
      error
    } = await supabase.from("quote_templates").insert({
      agent_id: agent.id,
      name: "Untitled template",
      html_template: "Assalamu alaikum {{pilgrim_name}},\n\nThank you for your enquiry about **{{package_name}}**.\n\n- Hotel: {{hotel_name}}\n- Dates: {{dates}}\n- Total: **{{price_total}}**\n\nWarm regards,\n{{agent_name}}\n{{agent_phone}}",
      merge_fields: MERGE_FIELDS
    }).select("*").single();
    if (error) {
      toast.error("Could not create template");
      return;
    }
    const created = data;
    setTemplates((prev) => [created, ...prev]);
    selectTemplate(created);
    toast.success("New template created");
  }
  async function duplicateStarter(t) {
    if (!agent) return;
    const {
      data,
      error
    } = await supabase.from("quote_templates").insert({
      agent_id: agent.id,
      name: `${t.name} (copy)`,
      html_template: t.html_template,
      design_id: t.design_id,
      merge_fields: t.merge_fields
    }).select("*").single();
    if (error) {
      toast.error("Could not copy template");
      return;
    }
    const created = data;
    setTemplates((prev) => [created, ...prev]);
    selectTemplate(created);
    toast.success("Copied to your templates");
  }
  async function save() {
    if (!selected || isStarter) return;
    if (!name.trim()) {
      toast.error("Name is required");
      return;
    }
    setSaving(true);
    const {
      error
    } = await supabase.from("quote_templates").update({
      name: name.trim(),
      html_template: body
    }).eq("id", selected.id);
    setSaving(false);
    if (error) {
      toast.error("Could not save");
      return;
    }
    toast.success("Saved");
    setTemplates((prev) => prev.map((t) => t.id === selected.id ? {
      ...t,
      name: name.trim(),
      html_template: body
    } : t));
  }
  async function setDefault() {
    if (!selected || isStarter) return;
    const {
      error
    } = await supabase.from("quote_templates").update({
      is_default: true
    }).eq("id", selected.id);
    if (error) {
      toast.error("Could not set default");
      return;
    }
    toast.success("Set as default");
    reload();
  }
  async function deleteTemplate() {
    if (!selected || isStarter) return;
    if (!confirm("Delete this template?")) return;
    const {
      error
    } = await supabase.from("quote_templates").delete().eq("id", selected.id);
    if (error) {
      toast.error("Could not delete");
      return;
    }
    toast.success("Deleted");
    setSelectedId(null);
    setName("");
    setBody("");
    reload();
  }
  function insertField(field) {
    setBody((prev) => `${prev}{{${field}}}`);
  }
  const previewHtml = reactExports.useMemo(() => markdownToHtml(applyMergeFields(body, SAMPLE_VALUES)), [body]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardLayout, { title: "Quote Templates", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", asChild: true, className: "mb-4 gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/agent/leads", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Back to leads"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[280px_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: createBlank, className: "w-full gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " New template"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Your templates" }),
          loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-full" })
          ] }) : ownTemplates.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "No templates yet - create one or duplicate a starter below." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: ownTemplates.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => selectTemplate(t), className: cn("flex w-full items-center justify-between rounded-md border px-3 py-2 text-left text-sm transition", selectedId === t.id ? "border-primary bg-primary/10" : "border-border hover:bg-secondary/50"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: t.name }),
            t.is_default ? /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-amber-400 text-amber-400" }) : null
          ] }) }, t.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-2 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
            " Starters"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: starterTemplates.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => selectTemplate(t), className: cn("flex w-full items-center justify-between rounded-md border px-3 py-2 text-left text-sm transition", selectedId === t.id ? "border-primary bg-primary/10" : "border-border hover:bg-secondary/50"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", children: "Starter" })
          ] }) }, t.id)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-5", children: !selected ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-[400px] items-center justify-center text-sm text-muted-foreground", children: "Select or create a template to start editing." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-[200px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Template name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: name, onChange: (e) => setName(e.target.value), disabled: isStarter, className: "mt-1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: isStarter ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => duplicateStarter(selected), className: "gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
            " Duplicate to edit"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: setDefault, disabled: selected.is_default, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "mr-1 h-4 w-4" }),
              selected.is_default ? "Default" : "Set default"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: deleteTemplate, className: "gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }),
              " Delete"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: save, disabled: saving, children: saving ? "Saving..." : "Save" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Insert merge field" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 flex flex-wrap gap-1.5", children: MERGE_FIELDS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => insertField(f), disabled: isStarter, className: "rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-xs hover:bg-secondary disabled:opacity-50", type: "button", children: `{{${f}}}` }, f)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "edit", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "edit", children: "Markdown" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "preview", children: "Preview (sample data)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "edit", className: "mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: body, onChange: (e) => setBody(e.target.value), rows: 18, disabled: isStarter, className: "font-mono text-sm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] text-muted-foreground", children: "Supports **bold**, *italic*, # headings, - lists, and | tables |." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "preview", className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qt-preview rounded-md border border-border bg-card p-4 text-sm text-foreground", dangerouslySetInnerHTML: {
            __html: previewHtml
          } }) })
        ] })
      ] }) }) })
    ] })
  ] }) });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuoteTemplatesPage, {}) });
export {
  SplitComponent as component
};
