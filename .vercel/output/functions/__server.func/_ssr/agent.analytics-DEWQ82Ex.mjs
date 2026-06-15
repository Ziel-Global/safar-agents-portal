import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as Papa } from "../_libs/papaparse.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useAuth, w as useFormatPrice, D as DashboardLayout, B as Button, C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, n as Skeleton, s as supabase, l as cn } from "./router-BZcuc5AB.mjs";
import { P as ProtectedRoute } from "./ProtectedRoute-DoVUnduH.mjs";
import { T as Tabs, a as TabsList, b as TabsTrigger } from "./tabs-CmB7P5i6.mjs";
import { _ as Download, $ as Eye, E as MessageSquare, a0 as Percent, a1 as PoundSterling, a2 as Minus, a3 as TrendingUp, a4 as TrendingDown } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, L as LineChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, a as Line, B as BarChart, b as Bar, P as PieChart, c as Pie, d as Cell, A as AreaChart, e as Area } from "../_libs/recharts.mjs";
import "stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
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
import "../_libs/date-fns.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/lodash.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
function presetToRange(preset, custom) {
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  const to = today;
  const from = new Date(today);
  switch (preset) {
    case "7d":
      from.setDate(from.getDate() - 6);
      break;
    case "30d":
      from.setDate(from.getDate() - 29);
      break;
    case "90d":
      from.setDate(from.getDate() - 89);
      break;
    case "ytd":
      from.setMonth(0, 1);
      break;
    case "custom":
      return custom ?? { from, to };
  }
  return { from, to };
}
function previousRange({ from, to }) {
  const lengthMs = to.getTime() - from.getTime();
  const prevTo = new Date(from);
  prevTo.setDate(prevTo.getDate() - 1);
  const prevFrom = new Date(prevTo.getTime() - lengthMs);
  return { from: prevFrom, to: prevTo };
}
function toIsoDate(d) {
  return d.toISOString().slice(0, 10);
}
function eachDay({ from, to }) {
  const out = [];
  const cur = new Date(from);
  while (cur <= to) {
    out.push(toIsoDate(cur));
    cur.setDate(cur.getDate() + 1);
  }
  return out;
}
async function fetchAgentMetrics(agentId, range) {
  const { data, error } = await supabase.rpc("agent_analytics_daily", {
    _agent_id: agentId,
    _from: toIsoDate(range.from),
    _to: toIsoDate(range.to)
  });
  if (error) throw error;
  const map = /* @__PURE__ */ new Map();
  for (const r of data ?? []) {
    map.set(r.date, {
      date: r.date,
      views: r.views ?? 0,
      enquiries: r.enquiries ?? 0,
      quotes_sent: r.quotes_sent ?? 0,
      bookings: r.bookings ?? 0,
      revenue: Number(r.revenue ?? 0)
    });
  }
  return eachDay(range).map(
    (d) => map.get(d) ?? {
      date: d,
      views: 0,
      enquiries: 0,
      quotes_sent: 0,
      bookings: 0,
      revenue: 0
    }
  );
}
function totals(metrics) {
  const sum = metrics.reduce(
    (acc, m) => {
      acc.views += m.views;
      acc.enquiries += m.enquiries;
      acc.quotes += m.quotes_sent;
      acc.bookings += m.bookings;
      acc.revenue += m.revenue;
      return acc;
    },
    { views: 0, enquiries: 0, quotes: 0, bookings: 0, revenue: 0 }
  );
  const conversionRate = sum.enquiries > 0 ? sum.quotes / sum.enquiries * 100 : 0;
  return { ...sum, conversionRate };
}
function pctChange(current, previous) {
  if (previous === 0) return current === 0 ? 0 : null;
  return (current - previous) / previous * 100;
}
async function fetchRevenueByPackage(agentId, range) {
  const { data, error } = await supabase.rpc("agent_revenue_by_package", {
    _agent_id: agentId,
    _from: toIsoDate(range.from),
    _to: toIsoDate(range.to)
  });
  if (error) throw error;
  return (data ?? []).map((row) => ({
    package_id: row.package_id,
    title: row.title ?? "Untitled",
    revenue: Number(row.revenue ?? 0),
    bookings: row.bookings ?? 0
  }));
}
async function fetchLeadSources(agentId, range) {
  const { data, error } = await supabase.rpc("agent_lead_sources", {
    _agent_id: agentId,
    _from: toIsoDate(range.from),
    _to: toIsoDate(range.to)
  });
  if (error) throw error;
  return (data ?? []).map((row) => ({
    source: row.source ?? "unknown",
    count: row.count ?? 0
  }));
}
async function fetchMarketBenchmark(countryCode, range) {
  const { data, error } = await supabase.rpc("market_conversion_benchmark", {
    _country_code: countryCode ?? null,
    _from: toIsoDate(range.from),
    _to: toIsoDate(range.to)
  });
  if (error) return null;
  return data === null ? null : Number(data);
}
function AnalyticsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnalyticsContent, {}) });
}
const PRESETS = [{
  key: "7d",
  label: "7 days"
}, {
  key: "30d",
  label: "30 days"
}, {
  key: "90d",
  label: "90 days"
}, {
  key: "ytd",
  label: "YTD"
}, {
  key: "custom",
  label: "Custom"
}];
const SOURCE_COLORS = ["var(--primary)", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"];
function AnalyticsContent() {
  const {
    agent
  } = useAuth();
  const fmt = useFormatPrice();
  const [preset, setPreset] = reactExports.useState("30d");
  const [customFrom, setCustomFrom] = reactExports.useState("");
  const [customTo, setCustomTo] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(true);
  const [current, setCurrent] = reactExports.useState([]);
  const [previous, setPrevious] = reactExports.useState([]);
  const [revPackages, setRevPackages] = reactExports.useState([]);
  const [sources, setSources] = reactExports.useState([]);
  const [benchmark, setBenchmark] = reactExports.useState(null);
  const range = reactExports.useMemo(() => {
    if (preset === "custom" && customFrom && customTo) {
      return {
        from: new Date(customFrom),
        to: new Date(customTo)
      };
    }
    return presetToRange(preset);
  }, [preset, customFrom, customTo]);
  const prevRange = reactExports.useMemo(() => previousRange(range), [range]);
  reactExports.useEffect(() => {
    if (!agent?.id) return;
    let cancelled = false;
    setLoading(true);
    Promise.all([fetchAgentMetrics(agent.id, range), fetchAgentMetrics(agent.id, prevRange), fetchRevenueByPackage(agent.id, range), fetchLeadSources(agent.id, range), fetchMarketBenchmark(agent.country_code ?? null, range)]).then(([cur, prev, rev, src, bench]) => {
      if (cancelled) return;
      setCurrent(cur);
      setPrevious(prev);
      setRevPackages(rev);
      setSources(src);
      setBenchmark(bench);
    }).catch((err) => {
      toast.error("Couldn't load analytics", {
        description: err.message ?? String(err)
      });
    }).finally(() => {
      if (!cancelled) setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [agent?.id, range.from.getTime(), range.to.getTime()]);
  const curTotals = reactExports.useMemo(() => totals(current), [current]);
  const prevTotals = reactExports.useMemo(() => totals(previous), [previous]);
  const handleDownload = () => {
    const fromStr = range.from.toISOString().slice(0, 10);
    const toStr = range.to.toISOString().slice(0, 10);
    const sections = [];
    sections.push(Papa.unparse({
      fields: ["metric", "value"],
      data: [["Date range", `${fromStr} to ${toStr}`], ["Profile views", curTotals.views], ["Enquiries", curTotals.enquiries], ["Quotes sent", curTotals.quotes], ["Bookings", curTotals.bookings], ["Conversion rate (%)", curTotals.conversionRate.toFixed(1)], ["Revenue (GBP)", curTotals.revenue.toFixed(2)]]
    }));
    sections.push("Daily breakdown\n" + Papa.unparse(current.map((m) => ({
      date: m.date,
      views: m.views,
      enquiries: m.enquiries,
      quotes_sent: m.quotes_sent,
      bookings: m.bookings,
      revenue: m.revenue.toFixed(2)
    })), {
      columns: ["date", "views", "enquiries", "quotes_sent", "bookings", "revenue"]
    }));
    if (revPackages.length > 0) {
      sections.push("Top packages by revenue\n" + Papa.unparse(revPackages.map((p) => ({
        package: p.title,
        revenue: p.revenue.toFixed(2)
      })), {
        columns: ["package", "revenue"]
      }));
    }
    if (sources.length > 0) {
      sections.push("Lead sources\n" + Papa.unparse(sources.map((s) => ({
        source: s.source,
        count: s.count
      })), {
        columns: ["source", "count"]
      }));
    }
    const csv = sections.join("\n\n");
    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `analytics-${fromStr}-to-${toStr}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Report downloaded");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardLayout, { title: "Analytics", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight", children: "Performance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          range.from.toLocaleDateString(),
          " – ",
          range.to.toLocaleDateString()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { value: preset, onValueChange: (v) => setPreset(v), children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { children: PRESETS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: p.key, children: p.label }, p.key)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: handleDownload, disabled: loading, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
          " Download CSV"
        ] })
      ] })
    ] }),
    preset === "custom" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2", children: [
        "From",
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: customFrom, onChange: (e) => setCustomFrom(e.target.value), className: "rounded-md border border-input bg-background px-2 py-1" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2", children: [
        "To",
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: customTo, onChange: (e) => setCustomTo(e.target.value), className: "rounded-md border border-input bg-background px-2 py-1" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }), title: "Profile Views", value: curTotals.views.toLocaleString(), change: pctChange(curTotals.views, prevTotals.views), spark: current.map((m) => m.views), loading }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4" }), title: "Enquiries", value: curTotals.enquiries.toLocaleString(), change: pctChange(curTotals.enquiries, prevTotals.enquiries), spark: current.map((m) => m.enquiries), loading }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Percent, { className: "h-4 w-4" }), title: "Conversion Rate", value: `${curTotals.conversionRate.toFixed(1)}%`, change: pctChange(curTotals.conversionRate, prevTotals.conversionRate), spark: current.map((m) => m.enquiries > 0 ? m.quotes_sent / m.enquiries * 100 : 0), loading, footer: /* @__PURE__ */ jsxRuntimeExports.jsx(BenchmarkNote, { benchmark, value: curTotals.conversionRate }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(PoundSterling, { className: "h-4 w-4" }), title: "Revenue", value: fmt(curTotals.revenue, "GBP"), change: pctChange(curTotals.revenue, prevTotals.revenue), spark: current.map((m) => m.revenue), loading })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Enquiry volume" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Daily new leads received over the selected period" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "h-72", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-full w-full" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data: current, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", className: "stroke-muted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "date", tickFormatter: (d) => d.slice(5), fontSize: 11 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { allowDecimals: false, fontSize: 11 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
          background: "var(--background)",
          border: "1px solid var(--border)",
          borderRadius: 8,
          fontSize: 12
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { type: "monotone", dataKey: "enquiries", stroke: "var(--primary)", strokeWidth: 2, dot: false })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Conversion funnel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "How visitors move from view to booking" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 w-full" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { totals: curTotals }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Top packages by revenue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Highest earning packages this period" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "h-72", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-full w-full" }) : revPackages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyChart, { message: "No bookings in this period yet" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: revPackages, layout: "vertical", margin: {
          left: 16
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", className: "stroke-muted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { type: "number", fontSize: 11 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { dataKey: "title", type: "category", width: 120, fontSize: 11, tickFormatter: (v) => v.length > 18 ? `${v.slice(0, 17)}…` : v }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => fmt(v, "GBP"), contentStyle: {
            background: "var(--background)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            fontSize: 12
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "revenue", fill: "var(--primary)", radius: [0, 6, 6, 0] })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Lead sources" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Where your enquiries are coming from" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "h-72", children: [
          loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-full w-full" }) : sources.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyChart, { message: "No leads in this period yet" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: sources, dataKey: "count", nameKey: "source", innerRadius: 50, outerRadius: 90, paddingAngle: 2, children: sources.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: SOURCE_COLORS[i % SOURCE_COLORS.length] }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
              background: "var(--background)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              fontSize: 12
            } })
          ] }) }),
          sources.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap gap-3 text-xs", children: sources.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-3 w-3 rounded-sm", style: {
              backgroundColor: SOURCE_COLORS[i % SOURCE_COLORS.length]
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize text-muted-foreground", children: s.source.replace(/_/g, " ") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: s.count })
          ] }, s.source)) })
        ] })
      ] })
    ] })
  ] }) });
}
function KpiCard({
  icon,
  title,
  value,
  change,
  spark,
  loading,
  footer
}) {
  const data = spark.map((v, i) => ({
    i,
    v
  }));
  const arrow = change === null ? /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3.5 w-3.5" }) : change > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3.5 w-3.5" }) : change < 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3.5 w-3.5" });
  const trendClass = change === null || change === 0 ? "text-muted-foreground" : change > 0 ? "text-emerald-600 dark:text-emerald-500" : "text-rose-600 dark:text-rose-500";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground", children: [
        icon,
        title
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center gap-0.5 text-xs font-medium", trendClass), children: [
        arrow,
        change === null ? "-" : `${Math.abs(change).toFixed(1)}%`
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-end justify-between gap-2", children: [
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-20" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold tracking-tight", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-24", children: data.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AreaChart, { data, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { dataKey: "v", stroke: "var(--primary)", fill: "var(--primary)", fillOpacity: 0.18, strokeWidth: 1.5, dot: false, isAnimationActive: false }) }) }) })
    ] }),
    footer ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: footer }) : null
  ] }) });
}
function Funnel({
  totals: totals2
}) {
  const stages = [{
    label: "Views",
    value: totals2.views
  }, {
    label: "Enquiries",
    value: totals2.enquiries
  }, {
    label: "Quotes",
    value: totals2.quotes
  }, {
    label: "Bookings",
    value: totals2.bookings
  }];
  const max = Math.max(stages[0].value, 1);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: stages.map((s, i) => {
    const widthPct = Math.max(8, s.value / max * 100);
    const prev = i > 0 ? stages[i - 1].value : null;
    const conv = prev && prev > 0 ? s.value / prev * 100 : null;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.label }),
        conv !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground", children: [
          conv.toFixed(1),
          "% from previous"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 flex h-9 items-center rounded-md bg-muted/50 p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-center justify-between rounded bg-primary px-3 text-sm font-semibold text-primary-foreground transition-all", style: {
        width: `${widthPct}%`
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.value.toLocaleString() }) }) })
    ] }, s.label);
  }) });
}
function BenchmarkNote({
  benchmark,
  value
}) {
  const market = benchmark ?? 28;
  const above = value >= market;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
    "Market average:",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground", children: [
      market.toFixed(1),
      "%"
    ] }),
    value > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: above ? "text-emerald-600 dark:text-emerald-500" : "text-rose-600 dark:text-rose-500", children: [
      " ",
      "- you're ",
      above ? "above" : "below",
      " average"
    ] })
  ] });
}
function EmptyChart({
  message
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-center justify-center text-sm text-muted-foreground", children: message });
}
export {
  AnalyticsPage as component
};
