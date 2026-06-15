import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useAuth, D as DashboardLayout, C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, L as Label, I as Input, B as Button, k as Badge, s as supabase } from "./router-BZcuc5AB.mjs";
import { P as ProtectedRoute } from "./ProtectedRoute-DoVUnduH.mjs";
import { T as Textarea } from "./textarea-UU-ZedD5.mjs";
import { m as markdownToHtml } from "./quoteTemplates-DEB_8rq-.mjs";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-CSm-Zs3Y.mjs";
import { a5 as Pencil, x as Plus, al as Pin, $ as Eye } from "../_libs/lucide-react.mjs";
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
async function listAgentArticles(agentId, opts) {
  let q = supabase.from("agent_articles").select("*").eq("agent_id", agentId).order("is_pinned", { ascending: false }).order("published_at", { ascending: false, nullsFirst: false }).order("created_at", { ascending: false });
  const { data, error } = await q;
  if (error) throw error;
  return data ?? [];
}
function NewArticlePage() {
  const {
    agent
  } = useAuth();
  useNavigate();
  const [editingId, setEditingId] = reactExports.useState(null);
  const [title, setTitle] = reactExports.useState("");
  const [body, setBody] = reactExports.useState("");
  const [featuredImage, setFeaturedImage] = reactExports.useState("");
  const [tagsInput, setTagsInput] = reactExports.useState("");
  const [metaTitle, setMetaTitle] = reactExports.useState("");
  const [metaDescription, setMetaDescription] = reactExports.useState("");
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [articles, setArticles] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (!agent) return;
    refresh();
  }, [agent]);
  async function refresh() {
    if (!agent) return;
    const list = await listAgentArticles(agent.id).catch(() => []);
    setArticles(list);
  }
  function reset() {
    setEditingId(null);
    setTitle("");
    setBody("");
    setFeaturedImage("");
    setTagsInput("");
    setMetaTitle("");
    setMetaDescription("");
  }
  function startEdit(a) {
    setEditingId(a.id);
    setTitle(a.title);
    setBody(a.body);
    setFeaturedImage(a.featured_image ?? "");
    setTagsInput((a.tags ?? []).join(", "));
    setMetaTitle(a.meta_title ?? "");
    setMetaDescription(a.meta_description ?? "");
  }
  async function save(status) {
    if (!agent) return;
    if (!title.trim()) {
      toast.error("Title is required");
      return;
    }
    setSubmitting(true);
    const tags = tagsInput.split(",").map((t) => t.trim()).filter(Boolean);
    const payload = {
      agent_id: agent.id,
      title: title.trim(),
      slug: "",
      body,
      featured_image: featuredImage || null,
      tags,
      meta_title: metaTitle || null,
      meta_description: metaDescription || null,
      status
    };
    try {
      if (editingId) {
        const {
          error
        } = await supabase.from("agent_articles").update(payload).eq("id", editingId);
        if (error) throw error;
        toast.success(status === "published" ? "Article updated and published" : "Draft saved");
      } else {
        const {
          error
        } = await supabase.from("agent_articles").insert([payload]);
        if (error) throw error;
        toast.success(status === "published" ? "Article published" : "Draft saved");
      }
      reset();
      await refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not save");
    } finally {
      setSubmitting(false);
    }
  }
  async function togglePin(a) {
    const {
      error
    } = await supabase.from("agent_articles").update({
      is_pinned: !a.is_pinned
    }).eq("id", a.id);
    if (error) toast.error(error.message);
    else refresh();
  }
  async function unpublish(a) {
    const {
      error
    } = await supabase.from("agent_articles").update({
      status: "draft"
    }).eq("id", a.id);
    if (error) toast.error(error.message);
    else refresh();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardLayout, { title: "Guides & Tips", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-5xl space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          editingId ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          editingId ? "Edit article" : "New article"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Markdown supported. Articles publish immediately to your profile." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: title, onChange: (e) => setTitle(e.target.value), placeholder: "A pilgrim's guide to...", className: "mt-1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Featured image URL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: featuredImage, onChange: (e) => setFeaturedImage(e.target.value), placeholder: "https://...", className: "mt-1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Tags (comma-separated)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: tagsInput, onChange: (e) => setTagsInput(e.target.value), placeholder: "hajj, prep, visa", className: "mt-1" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "SEO title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: metaTitle, onChange: (e) => setMetaTitle(e.target.value), placeholder: "Optional", className: "mt-1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "SEO description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: metaDescription, onChange: (e) => setMetaDescription(e.target.value), placeholder: "Optional, ~155 chars", className: "mt-1" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Body (Markdown)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: body, onChange: (e) => setBody(e.target.value), rows: 16, className: "mt-1 font-mono text-sm", placeholder: "# Heading\n\nYour content..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Preview" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-sm dark:prose-invert mt-1 min-h-[400px] max-w-none rounded-md border border-border bg-background p-4", dangerouslySetInnerHTML: {
              __html: markdownToHtml(body || "_Nothing to preview yet._")
            } })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
          editingId && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", onClick: reset, children: "Cancel edit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => save("draft"), disabled: submitting, children: "Save draft" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => save("published"), disabled: submitting, children: editingId ? "Update & publish" : "Publish" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Your articles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Drafts stay private. Published articles appear on your profile." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: articles.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rounded-md border border-dashed border-border p-8 text-center text-sm text-muted-foreground", children: "No articles yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Views" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: articles.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            a.is_pinned && /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { className: "h-3.5 w-3.5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: a.title })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: a.status === "published" ? "default" : "secondary", children: a.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-sm text-muted-foreground", children: a.views }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => startEdit(a), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => togglePin(a), title: a.is_pinned ? "Unpin" : "Pin", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pin, { className: a.is_pinned ? "h-3.5 w-3.5 fill-current" : "h-3.5 w-3.5" }) }),
            a.status === "published" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => unpublish(a), title: "Unpublish", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5" }) })
          ] }) })
        ] }, a.id)) })
      ] }) })
    ] })
  ] }) });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NewArticlePage, {}) });
export {
  SplitComponent as component
};
