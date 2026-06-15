import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { e as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useAuth, D as DashboardLayout, B as Button, C as Card, d as CardContent, a as CardHeader, k as Badge, I as Input, s as supabase } from "./router-BZcuc5AB.mjs";
import { P as ProtectedRoute } from "./ProtectedRoute-DoVUnduH.mjs";
import { A as AlertDialog, a as AlertDialogTrigger, b as AlertDialogContent, c as AlertDialogHeader, d as AlertDialogTitle, e as AlertDialogDescription, f as AlertDialogFooter, g as AlertDialogCancel, h as AlertDialogAction } from "./alert-dialog-DD4U4n8v.mjs";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription, e as DialogFooter } from "./dialog-D8TTSPkc.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { F as FolderOpen, j as Megaphone, x as Plus, L as LoaderCircle, H as Hotel, a5 as Pencil, a6 as CalendarDays, G as Copy, a7 as BookmarkPlus, a8 as Archive, y as Trash2 } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-alert-dialog.mjs";
function discountLabel(campaign) {
  if (campaign.discount_type === "percentage") return `${campaign.discount_value}% off`;
  return `${campaign.discount_value} off`;
}
async function fetchActiveCampaignsForPackages(packageIds) {
  const result = /* @__PURE__ */ new Map();
  if (packageIds.length === 0) return result;
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const { data: links } = await supabase.from("campaign_packages").select("campaign_id, package_id").in("package_id", packageIds);
  if (!links || links.length === 0) return result;
  const campaignIds = Array.from(new Set(links.map((l) => l.campaign_id)));
  const { data: campaigns } = await supabase.from("campaigns").select("id, name, type, discount_type, discount_value, start_date, end_date, status").in("id", campaignIds).eq("status", "active").lte("start_date", today).gte("end_date", today);
  if (!campaigns) return result;
  const campaignMap = new Map(campaigns.map((c) => [c.id, c]));
  for (const link of links) {
    const camp = campaignMap.get(link.campaign_id);
    if (camp && !result.has(link.package_id)) {
      result.set(link.package_id, camp);
    }
  }
  return result;
}
const statusVariant = {
  draft: {
    label: "Draft",
    className: "bg-muted text-muted-foreground"
  },
  active: {
    label: "Active",
    className: "bg-primary/15 text-primary"
  },
  sold_out: {
    label: "Sold Out",
    className: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200"
  },
  archived: {
    label: "Archived",
    className: "bg-secondary text-secondary-foreground"
  }
};
function PackagesPage() {
  const {
    agent
  } = useAuth();
  const navigate = useNavigate();
  const [packages, setPackages] = reactExports.useState([]);
  const [campaignsByPkg, setCampaignsByPkg] = reactExports.useState(/* @__PURE__ */ new Map());
  const [loading, setLoading] = reactExports.useState(true);
  const load = async () => {
    if (!agent?.id) return;
    setLoading(true);
    const {
      data,
      error
    } = await supabase.from("packages").select("id, title, type, status, base_price, currency, departure_city, date_start, date_end, hotel_name, thumbnail_url, agent_id").eq("agent_id", agent.id).order("created_at", {
      ascending: false
    });
    if (error) {
      toast.error("Failed to load packages");
    } else {
      const rows = data ?? [];
      setPackages(rows);
      const map = await fetchActiveCampaignsForPackages(rows.map((r) => r.id));
      setCampaignsByPkg(map);
    }
    setLoading(false);
  };
  reactExports.useEffect(() => {
    load();
  }, [agent?.id]);
  const handleDuplicate = async (pkg) => {
    const {
      data,
      error
    } = await supabase.rpc("duplicate_package", {
      package_uuid: pkg.id
    });
    if (error) {
      toast.error("Failed to duplicate: " + error.message);
      return;
    }
    toast.success("Package duplicated as draft");
    if (data) {
      load();
    } else {
      load();
    }
  };
  const [templateDialogOpen, setTemplateDialogOpen] = reactExports.useState(false);
  const [templateName, setTemplateName] = reactExports.useState("");
  const [templateSource, setTemplateSource] = reactExports.useState(null);
  const openTemplateDialog = (pkg) => {
    setTemplateSource(pkg);
    setTemplateName(pkg.title);
    setTemplateDialogOpen(true);
  };
  const handleSaveTemplate = async () => {
    if (!templateSource || !agent?.id || !templateName.trim()) return;
    const {
      data: full
    } = await supabase.from("packages").select("*").eq("id", templateSource.id).single();
    if (!full) {
      toast.error("Failed to load package");
      return;
    }
    const f = full;
    const template_data = {
      title: f.title,
      type: f.type,
      departure_city: f.departure_city,
      departure_country: f.departure_country,
      base_price: f.base_price,
      currency: f.currency,
      hotel_name: f.hotel_name,
      hotel_stars: f.hotel_stars,
      hotel_zone: f.hotel_zone,
      distance_to_haram_m: f.distance_to_haram_m,
      meals_included: f.meals_included,
      transport_type: f.transport_type,
      visa_included: f.visa_included,
      group_size_min: f.group_size_min,
      group_size_max: f.group_size_max,
      accessibility: f.accessibility
    };
    const {
      error
    } = await supabase.from("package_templates").insert([{
      agent_id: agent.id,
      name: templateName.trim(),
      template_data
    }]);
    if (error) toast.error("Failed to save template: " + error.message);
    else {
      toast.success("Template saved");
      setTemplateDialogOpen(false);
      setTemplateSource(null);
      setTemplateName("");
    }
  };
  const handleArchive = async (pkg) => {
    const {
      error
    } = await supabase.from("packages").update({
      status: "archived"
    }).eq("id", pkg.id);
    if (error) toast.error("Failed to archive");
    else {
      toast.success("Package archived");
      load();
    }
  };
  const handleDelete = async (pkg) => {
    const {
      error
    } = await supabase.from("packages").delete().eq("id", pkg.id);
    if (error) toast.error("Failed to delete");
    else {
      toast.success("Package deleted");
      load();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardLayout, { title: "My Packages", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight text-foreground", children: "My Packages" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Create, edit, and manage every package you offer pilgrims." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "flex-1 sm:flex-none", onClick: () => navigate({
            to: "/agent/templates"
          }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FolderOpen, { className: "mr-1 h-4 w-4" }),
            " Templates"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "flex-1 sm:flex-none", onClick: () => navigate({
            to: "/agent/campaigns/new"
          }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "mr-1 h-4 w-4" }),
            " New Campaign"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "flex-1 sm:flex-none", onClick: () => navigate({
            to: "/agent/packages/new"
          }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4" }),
            " New Package"
          ] })
        ] })
      ] }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-48 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }) }) : packages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-dashed", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-col items-center justify-center gap-3 py-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Hotel, { className: "h-10 w-10 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: "No packages yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Create your first package to start receiving bookings." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => navigate({
          to: "/agent/packages/new"
        }), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4" }),
          " Create Package"
        ] })
      ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: packages.map((pkg) => {
        const sv = statusVariant[pkg.status];
        const campaign = campaignsByPkg.get(pkg.id);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] bg-gradient-to-br from-primary/15 via-accent/20 to-primary/10 flex items-center justify-center text-primary/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Hotel, { className: "h-12 w-12" }),
            campaign ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-2 top-2 flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-primary/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "h-3 w-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: discountLabel(campaign) })
            ] }) : null
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold leading-tight text-foreground", children: pkg.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: sv.className, variant: "outline", children: sv.label })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground capitalize", children: [
              pkg.type,
              " · ",
              pkg.departure_city
            ] }),
            campaign ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs font-medium text-primary", children: [
              "Active campaign: ",
              campaign.name
            ] }) : null
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg font-bold text-primary", children: [
              pkg.currency,
              " ",
              pkg.base_price ?? "-"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/agent/packages/$id/edit", params: {
                id: pkg.id
              }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "mr-1 h-3.5 w-3.5" }),
                " Edit"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/agent/packages/$id/availability", params: {
                id: pkg.id
              }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "mr-1 h-3.5 w-3.5" }),
                " Availability"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => handleDuplicate(pkg), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "mr-1 h-3.5 w-3.5" }),
                " Duplicate"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => openTemplateDialog(pkg), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookmarkPlus, { className: "mr-1 h-3.5 w-3.5" }),
                " Save as Template"
              ] }),
              pkg.status !== "archived" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => handleArchive(pkg), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { className: "mr-1 h-3.5 w-3.5" }),
                " Archive"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "text-destructive", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "mr-1 h-3.5 w-3.5" }),
                  " Delete"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "Delete package?" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
                      'This will permanently remove "',
                      pkg.title,
                      '". This action cannot be undone.'
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { children: "Cancel" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: () => handleDelete(pkg), className: "bg-destructive text-destructive-foreground hover:bg-destructive/90", children: "Delete" })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }, pkg.id);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-sm text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/agent/dashboard", className: "text-primary hover:underline", children: "← Back to dashboard" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: templateDialogOpen, onOpenChange: setTemplateDialogOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Save as Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Create a reusable blueprint from this package. Dates, availability, and status will not be saved." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-foreground", children: "Template name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: templateName, onChange: (e) => setTemplateName(e.target.value), placeholder: "e.g. Standard 14-day Umrah package" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setTemplateDialogOpen(false), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleSaveTemplate, disabled: !templateName.trim(), children: "Save Template" })
      ] })
    ] }) })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PackagesPage, {}) });
export {
  SplitComponent as component
};
