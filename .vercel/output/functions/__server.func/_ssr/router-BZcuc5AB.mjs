import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as createRouter, u as useRouter, a as createRootRouteWithContext, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useRouterState, e as useNavigate, f as useLocation } from "../_libs/tanstack__react-router.mjs";
import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root } from "../_libs/radix-ui__react-separator.mjs";
import { O as Overlay, P as Portal, C as Content, b as Close, a as Title, D as Description, R as Root$1 } from "../_libs/radix-ui__react-dialog.mjs";
import { P as Portal$1, C as Content2, a as Provider, R as Root3, T as Trigger } from "../_libs/radix-ui__react-tooltip.mjs";
import { S as SubTrigger2, a as SubContent2, P as Portal2, C as Content2$1, I as Item2, b as CheckboxItem2, c as ItemIndicator2, R as RadioItem2, L as Label2, d as Separator2, e as Root2$3, T as Trigger$2 } from "../_libs/radix-ui__react-dropdown-menu.mjs";
import { R as Root$2, V as Viewport, C as Corner, S as ScrollAreaScrollbar, a as ScrollAreaThumb } from "../_libs/radix-ui__react-scroll-area.mjs";
import { R as Root$3, I as Image, F as Fallback } from "../_libs/radix-ui__react-avatar.mjs";
import { R as Root$4 } from "../_libs/radix-ui__react-label.mjs";
import { R as Root$5, T as Thumb } from "../_libs/radix-ui__react-switch.mjs";
import { R as Root2, I as Item2$1 } from "../_libs/radix-ui__react-toggle-group.mjs";
import { R as Root$6 } from "../_libs/radix-ui__react-toggle.mjs";
import { R as Root2$1, I as Item2$2, a as Indicator } from "../_libs/radix-ui__react-radio-group.mjs";
import { T as Trigger$1, I as Icon, S as ScrollUpButton, a as ScrollDownButton, P as Portal$2, C as Content2$2, V as Viewport$1, L as Label$1, b as Item, c as ItemIndicator, d as ItemText, e as Separator$1, R as Root2$2, f as Value } from "../_libs/radix-ui__react-select.mjs";
import { R as Root$7, C as CollapsibleTrigger$1, a as CollapsibleContent$1 } from "../_libs/radix-ui__react-collapsible.mjs";
import { X, P as PanelLeft, C as ChevronRight, a as Check, b as Circle, c as ChevronDown, d as ChevronUp, H as Hotel, M as MapPin, e as Calendar, U as Utensils, B as Bus, f as BadgeCheck, L as LoaderCircle, S as Star, g as MoonStar, h as LayoutDashboard, i as Package, F as FolderOpen, j as Megaphone, k as Sparkles, l as Users, m as ShieldCheck, n as ChartColumn, o as CreditCard, p as Settings, q as Bell, r as CheckCheck, s as LogOut } from "../_libs/lucide-react.mjs";
import { H as formatDistanceToNow } from "../_libs/date-fns.mjs";
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
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
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
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/radix-ui__react-menu.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
const Toaster = ({ ...props }) => {
  const [position, setPosition] = reactExports.useState(
    typeof window !== "undefined" && window.innerWidth < 640 ? "bottom-center" : "bottom-right"
  );
  reactExports.useEffect(() => {
    const onResize = () => {
      setPosition(window.innerWidth < 640 ? "bottom-center" : "bottom-right");
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      position,
      duration: 3e3,
      visibleToasts: 3,
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function createSupabaseClient() {
  const SUPABASE_URL = "https://ropnafxzhgbtwaolzgor.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvcG5hZnh6aGdidHdhb2x6Z29yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0MjEwMDUsImV4cCI6MjA5MTk5NzAwNX0.f1kqVHLGCMdaf-q4G87TgWJ6w7EKzfSHE07NFVaAsJc";
  return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      storage: typeof window !== "undefined" ? localStorage : void 0,
      persistSession: true,
      autoRefreshToken: true
    }
  });
}
let _supabase;
const supabase = new Proxy({}, {
  get(_, prop, receiver) {
    if (!_supabase) _supabase = createSupabaseClient();
    return Reflect.get(_supabase, prop, receiver);
  }
});
const AuthContext = reactExports.createContext(void 0);
const USER_LOCAL_KEYS = [];
function clearUserLocalState() {
  if (typeof window === "undefined") return;
  for (const key of USER_LOCAL_KEYS) {
    try {
      window.localStorage.removeItem(key);
    } catch {
    }
  }
}
function getJwtIssuedAt(accessToken) {
  if (!accessToken || typeof window === "undefined") return null;
  try {
    const payload = accessToken.split(".")[1];
    if (!payload) return null;
    const json = JSON.parse(window.atob(payload.replace(/-/g, "+").replace(/_/g, "/")));
    return typeof json.iat === "number" ? json.iat : null;
  } catch {
    return null;
  }
}
function sessionWasRevoked(activeSession, revokedAt) {
  if (!activeSession || !revokedAt) return false;
  const issuedAt = getJwtIssuedAt(activeSession.access_token);
  const revokedAtSeconds = Math.floor(new Date(revokedAt).getTime() / 1e3);
  return issuedAt !== null && issuedAt < revokedAtSeconds;
}
function AuthProvider({ children }) {
  const [session, setSession] = reactExports.useState(null);
  const [profile, setProfile] = reactExports.useState(null);
  const [agent, setAgent] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const lastUserIdRef = reactExports.useRef(null);
  const forcedSignOutRef = reactExports.useRef(false);
  const forceLocalSignOut = async (message) => {
    if (forcedSignOutRef.current) return;
    forcedSignOutRef.current = true;
    try {
      await supabase.removeAllChannels();
    } catch {
    }
    await supabase.auth.signOut({ scope: "local" }).catch(() => {
    });
    clearUserLocalState();
    lastUserIdRef.current = null;
    setProfile(null);
    setAgent(null);
    setSession(null);
    toast.error(message);
    if (typeof window !== "undefined") window.location.href = "/login";
  };
  const loadProfile = async (userId, activeSession) => {
    const { data: profileData } = await supabase.from("profiles").select("*").eq("id", userId).maybeSingle();
    const typed = profileData;
    if (typed?.deleted_at) {
      await supabase.auth.signOut();
      clearUserLocalState();
      setProfile(null);
      setAgent(null);
      toast.error("This account has been deleted.");
      if (typeof window !== "undefined") window.location.href = "/login";
      return;
    }
    if (sessionWasRevoked(activeSession ?? session, typed?.session_revoked_at)) {
      await forceLocalSignOut("You've been signed out on all devices.");
      return;
    }
    setProfile(typed);
    if (typed?.role === "agent") {
      const { data: agentData } = await supabase.from("agents").select(
        "id, user_id, business_name, slug, logo_url, cover_image_url, city, country_code, bio, status, subscription_tier"
      ).eq("user_id", userId).maybeSingle();
      setAgent(agentData);
    } else {
      setAgent(null);
    }
  };
  reactExports.useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, newSession) => {
      setSession(newSession);
      if (event === "PASSWORD_RECOVERY") {
        if (typeof window !== "undefined" && !window.location.pathname.startsWith("/reset-password")) {
          window.location.href = "/reset-password";
        }
        return;
      }
      if (event === "SIGNED_OUT") {
        lastUserIdRef.current = null;
        clearUserLocalState();
        setProfile(null);
        setAgent(null);
        return;
      }
      if (newSession?.user) {
        forcedSignOutRef.current = false;
        const newId = newSession.user.id;
        const userChanged = lastUserIdRef.current !== newId;
        lastUserIdRef.current = newId;
        if (event === "INITIAL_SESSION" || event === "SIGNED_IN" || event === "USER_UPDATED" || userChanged) {
          setTimeout(() => {
            loadProfile(newId, newSession);
          }, 0);
        }
      } else {
        lastUserIdRef.current = null;
        setProfile(null);
        setAgent(null);
      }
    });
    supabase.auth.getSession().then(({ data: { session: existing } }) => {
      setSession(existing);
      if (existing?.user) {
        lastUserIdRef.current = existing.user.id;
        loadProfile(existing.user.id, existing).finally(() => setLoading(false));
      } else {
        setLoading(false);
      }
    });
    const onStorage = (e) => {
      if (!e.key) return;
      if (e.key.startsWith("sb-") && e.newValue === null) {
        supabase.auth.signOut({ scope: "local" }).catch(() => {
        });
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("storage", onStorage);
    }
    return () => {
      subscription.unsubscribe();
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", onStorage);
      }
    };
  }, []);
  reactExports.useEffect(() => {
    if (!session?.user) return;
    const checkRevocation = () => {
      loadProfile(session.user.id, session);
    };
    const onFocus = () => checkRevocation();
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") checkRevocation();
    };
    const interval = window.setInterval(checkRevocation, 3e4);
    window.addEventListener("focus", onFocus);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      window.clearInterval(interval);
      window.removeEventListener("focus", onFocus);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [session?.access_token, session?.user?.id]);
  const signOut = async (opts) => {
    const scope = opts?.scope ?? "local";
    try {
      try {
        await supabase.removeAllChannels();
      } catch {
      }
      await supabase.auth.signOut({ scope });
    } finally {
      clearUserLocalState();
      lastUserIdRef.current = null;
      setProfile(null);
      setAgent(null);
      setSession(null);
      if (!opts?.silent && typeof window !== "undefined") {
        toast.success("You've been signed out.");
      }
    }
  };
  const refresh = async () => {
    if (session?.user) {
      await loadProfile(session.user.id);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AuthContext.Provider,
    {
      value: {
        session,
        user: session?.user ?? null,
        profile,
        agent,
        loading,
        signOut,
        refresh,
        refreshProfile: refresh
      },
      children
    }
  );
}
function useAuth() {
  const ctx = reactExports.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
const DEFAULT_CURRENCY = "GBP";
const FALLBACK_DECIMALS = 2;
const FALLBACK_RATES = {
  USD: 1,
  GBP: 0.79,
  EUR: 0.92,
  SAR: 3.75,
  PKR: 278,
  IDR: 16200,
  TRY: 38.5,
  BDT: 119,
  NGN: 1580
};
const FALLBACK_CURRENCIES = [
  { code: "GBP", symbol: "£", name: "British Pound", decimals: 2, flag_emoji: "🇬🇧", sort_order: 1 },
  { code: "USD", symbol: "$", name: "US Dollar", decimals: 2, flag_emoji: "🇺🇸", sort_order: 2 },
  { code: "EUR", symbol: "€", name: "Euro", decimals: 2, flag_emoji: "🇪🇺", sort_order: 3 },
  { code: "SAR", symbol: "ر.س", name: "Saudi Riyal", decimals: 2, flag_emoji: "🇸🇦", sort_order: 4 },
  { code: "PKR", symbol: "₨", name: "Pakistani Rupee", decimals: 0, flag_emoji: "🇵🇰", sort_order: 5 },
  { code: "IDR", symbol: "Rp", name: "Indonesian Rupiah", decimals: 0, flag_emoji: "🇮🇩", sort_order: 6 },
  { code: "TRY", symbol: "₺", name: "Turkish Lira", decimals: 2, flag_emoji: "🇹🇷", sort_order: 7 },
  { code: "BDT", symbol: "৳", name: "Bangladeshi Taka", decimals: 0, flag_emoji: "🇧🇩", sort_order: 8 },
  { code: "NGN", symbol: "₦", name: "Nigerian Naira", decimals: 0, flag_emoji: "🇳🇬", sort_order: 9 }
];
function convertAmount(amount, from, to, rates) {
  if (amount == null || !isFinite(amount)) return null;
  if (from === to) return amount;
  const fromRate = rates[from];
  const toRate = rates[to];
  if (!fromRate || !toRate) return null;
  const usd = amount / fromRate;
  const result = usd * toRate;
  return Math.round(result * 1e6) / 1e6;
}
function formatCurrency(amount, currency, decimals) {
  if (amount == null) return "-";
  const dp = decimals ?? FALLBACK_DECIMALS;
  try {
    return new Intl.NumberFormat(void 0, {
      style: "currency",
      currency,
      maximumFractionDigits: dp,
      minimumFractionDigits: 0
    }).format(amount);
  } catch {
    const meta = FALLBACK_CURRENCIES.find((c) => c.code === currency);
    const sym = meta?.symbol ?? currency;
    const rounded = Number(amount.toFixed(dp));
    return `${sym} ${rounded.toLocaleString(void 0, { maximumFractionDigits: dp })}`;
  }
}
const STORAGE_KEY = "safar.preferredCurrency";
const CurrencyContext = reactExports.createContext(void 0);
function readGuestCurrency() {
  if (typeof window === "undefined") return DEFAULT_CURRENCY;
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? DEFAULT_CURRENCY;
  } catch {
    return DEFAULT_CURRENCY;
  }
}
function CurrencyProvider({ children }) {
  const { user, profile, refresh } = useAuth();
  const [currency, setCurrencyState] = reactExports.useState(DEFAULT_CURRENCY);
  const [currencies, setCurrencies] = reactExports.useState(FALLBACK_CURRENCIES);
  const [rates, setRates] = reactExports.useState(FALLBACK_RATES);
  const [ratesUpdatedAt, setRatesUpdatedAt] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (profile?.preferred_currency) {
      setCurrencyState(profile.preferred_currency);
    } else if (!user) {
      setCurrencyState(readGuestCurrency());
    }
  }, [profile, user]);
  const loadRates = reactExports.useCallback(async () => {
    const [{ data: curList }, { data: rateRows }] = await Promise.all([
      supabase.from("currencies").select("*").order("sort_order"),
      supabase.from("exchange_rates").select("base_currency, target_currency, rate, fetched_at").eq("base_currency", "USD").order("fetched_at", { ascending: false })
    ]);
    if (curList && curList.length > 0) {
      setCurrencies(curList);
    }
    if (rateRows && rateRows.length > 0) {
      const latest = {};
      let newest = null;
      for (const row of rateRows) {
        if (!(row.target_currency in latest)) {
          latest[row.target_currency] = Number(row.rate);
        }
        if (!newest || row.fetched_at > newest) newest = row.fetched_at;
      }
      setRates({ ...FALLBACK_RATES, ...latest });
      setRatesUpdatedAt(newest);
    }
  }, []);
  reactExports.useEffect(() => {
    loadRates();
  }, [loadRates]);
  const setCurrency = reactExports.useCallback(
    async (code) => {
      setCurrencyState(code);
      if (typeof window !== "undefined") {
        try {
          window.localStorage.setItem(STORAGE_KEY, code);
        } catch {
        }
      }
      if (user) {
        await supabase.from("profiles").update({ preferred_currency: code }).eq("id", user.id);
        await refresh();
      }
    },
    [user, refresh]
  );
  const convertPrice = reactExports.useCallback(
    (amount, originalCurrency) => convertAmount(amount, originalCurrency, currency, rates),
    [currency, rates]
  );
  const formatPrice = reactExports.useCallback(
    (amount, originalCurrency) => {
      if (amount == null) return "-";
      const target = currencies.find((c) => c.code === currency);
      const dp = target?.decimals ?? 2;
      const converted = convertAmount(amount, originalCurrency, currency, rates);
      if (converted == null) {
        const orig = currencies.find((c) => c.code === originalCurrency);
        return formatCurrency(amount, originalCurrency, orig?.decimals);
      }
      return formatCurrency(converted, currency, dp);
    },
    [currency, currencies, rates]
  );
  const refreshRates = reactExports.useCallback(async () => {
    await loadRates();
  }, [loadRates]);
  const value = reactExports.useMemo(
    () => ({
      currency,
      setCurrency,
      currencies,
      rates,
      ratesUpdatedAt,
      formatPrice,
      convertPrice,
      refreshRates
    }),
    [currency, setCurrency, currencies, rates, ratesUpdatedAt, formatPrice, convertPrice, refreshRates]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CurrencyContext.Provider, { value, children });
}
function useCurrency() {
  const ctx = reactExports.useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used inside CurrencyProvider");
  return ctx;
}
function useFormatPrice() {
  return useCurrency().formatPrice;
}
const appCss = "/assets/styles-EgppA_-K.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/login",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go to sign in"
      }
    ) })
  ] }) });
}
const Route$p = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Safar Agents - Hajj & Umrah Agent Portal" },
      {
        name: "description",
        content: "Manage packages, leads, campaigns, and bookings in the Safar agent portal."
      },
      { name: "author", content: "Safar" },
      { property: "og:title", content: "Safar Agents" },
      {
        property: "og:description",
        content: "The agent portal for licensed Hajj and Umrah travel agencies on Safar."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Safar" },
      { name: "theme-color", content: "#0f766e" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-title", content: "Safar" },
      { name: "twitter:title", content: "Safar Agents" },
      { name: "description", content: "Safar agent portal for licensed Hajj & Umrah travel agencies." },
      { property: "og:description", content: "Safar agent portal for licensed Hajj & Umrah travel agencies." },
      { name: "twitter:description", content: "Safar agent portal for licensed Hajj & Umrah travel agencies." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2d62e69a-d5c7-41bd-9944-a0111928e30b/id-preview-e38e05d4--b48ec71f-046a-4006-a0c1-ce1ac58a4145.lovable.app-1776694017345.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2d62e69a-d5c7-41bd-9944-a0111928e30b/id-preview-e38e05d4--b48ec71f-046a-4006-a0c1-ce1ac58a4145.lovable.app-1776694017345.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$p.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CurrencyProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-right" })
  ] }) }) });
}
const $$splitComponentImporter$n = () => import("./unauthorised-Dssel_8z.mjs");
const Route$o = createFileRoute("/unauthorised")({
  head: () => ({
    meta: [{
      title: "Access denied - Safar Agents"
    }, {
      name: "description",
      content: "You don't have permission to view this page."
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const $$splitComponentImporter$m = () => import("./signup-C7gTISgl.mjs");
const Route$n = createFileRoute("/signup")({
  validateSearch: (search) => ({
    redirect: typeof search.redirect === "string" ? search.redirect : void 0
  }),
  head: () => ({
    meta: [{
      title: "Agent Sign Up - Safar"
    }, {
      name: "description",
      content: "Create your Safar agent account."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const $$splitComponentImporter$l = () => import("./settings-DpJI2IRq.mjs");
const Route$m = createFileRoute("/settings")({
  head: () => ({
    meta: [{
      title: "Account settings - Safar"
    }, {
      name: "description",
      content: "Manage your Safar account, security, and preferences."
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./reset-password-CtrTEwe3.mjs");
const Route$l = createFileRoute("/reset-password")({
  head: () => ({
    meta: [{
      title: "Reset Password - Safar"
    }, {
      name: "description",
      content: "Set a new password for your Safar account."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./login-D7J9Wvwl.mjs");
const Route$k = createFileRoute("/login")({
  validateSearch: (search) => ({
    redirect: typeof search.redirect === "string" ? search.redirect : void 0
  }),
  head: () => ({
    meta: [{
      title: "Agent Login - Safar"
    }, {
      name: "description",
      content: "Sign in to the Safar agent portal."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./forgot-password-B06mamUm.mjs");
const Route$j = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [{
      title: "Forgot Password - Safar"
    }, {
      name: "description",
      content: "Reset your Safar account password."
    }, {
      property: "og:title",
      content: "Forgot Password - Safar"
    }, {
      property: "og:description",
      content: "Reset your Safar account password."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./index-Uhky0fr0.mjs");
const Route$i = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Safar Agents"
    }, {
      name: "description",
      content: "Agent portal for managing Hajj and Umrah packages, leads, and bookings."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./agent.templates-DsQpV8tn.mjs");
const Route$h = createFileRoute("/agent/templates")({
  head: () => ({
    meta: [{
      title: "Package Templates - Safar"
    }, {
      name: "description",
      content: "Reusable templates for your packages."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./agent.reviews-Cy-g99wB.mjs");
const Route$g = createFileRoute("/agent/reviews")({
  head: () => ({
    meta: [{
      title: "Reviews - Safar Agent"
    }, {
      name: "description",
      content: "Manage and respond to pilgrim reviews."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./agent.referrals-D3Zpa084.mjs");
const Route$f = createFileRoute("/agent/referrals")({
  head: () => ({
    meta: [{
      title: "Referrals - Safar"
    }, {
      name: "description",
      content: "Invite pilgrims to Safar with your referral code and track sign-ups."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./agent.leads-QiPlMfAZ.mjs");
const Route$e = createFileRoute("/agent/leads")({
  head: () => ({
    meta: [{
      title: "Leads - Safar Agent"
    }, {
      name: "description",
      content: "Track and manage pilgrim leads in your sales pipeline."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./agent.dashboard-CNPgMWLV.mjs");
const Route$d = createFileRoute("/agent/dashboard")({
  head: () => ({
    meta: [{
      title: "Agent Dashboard - Safar"
    }, {
      name: "description",
      content: "Manage your Hajj and Umrah packages, bookings, and customers as a verified Safar agent."
    }, {
      property: "og:title",
      content: "Agent Dashboard - Safar"
    }, {
      property: "og:description",
      content: "Your agent dashboard."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./agent.billing-CxMaRePB.mjs");
const Route$c = createFileRoute("/agent/billing")({
  head: () => ({
    meta: [{
      title: "Billing & Plans - Safar"
    }, {
      name: "description",
      content: "Manage your Safar subscription and unlock advanced agent tools."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./agent.analytics-DEWQ82Ex.mjs");
const Route$b = createFileRoute("/agent/analytics")({
  head: () => ({
    meta: [{
      title: "Analytics - Safar Agent"
    }, {
      name: "description",
      content: "Track profile views, enquiries, conversion rate and revenue across your Hajj and Umrah packages."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./agent.packages.index-CUsoDeeP.mjs");
const Route$a = createFileRoute("/agent/packages/")({
  head: () => ({
    meta: [{
      title: "My Packages - Safar"
    }, {
      name: "description",
      content: "Manage your Hajj and Umrah packages."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./agent.campaigns.index-CrQSKhM_.mjs");
const Route$9 = createFileRoute("/agent/campaigns/")({
  head: () => ({
    meta: [{
      title: "Campaigns - Safar"
    }, {
      name: "description",
      content: "Manage your promotional campaigns."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const Route$8 = createFileRoute("/api/auth/signout-all-devices")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const authHeader = request.headers.get("authorization") ?? "";
        if (!authHeader.startsWith("Bearer ")) {
          return Response.json({ error: "Missing session token" }, { status: 401 });
        }
        const token = authHeader.slice("Bearer ".length);
        const supabaseUrl = process.env.SUPABASE_URL;
        const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY ?? process.env.SUPABASE_ANON_KEY;
        if (!supabaseUrl || !publishableKey) {
          return Response.json({ error: "Authentication is temporarily unavailable" }, { status: 500 });
        }
        const verifier = createClient(supabaseUrl, publishableKey, {
          global: { headers: { Authorization: authHeader } },
          auth: { persistSession: false, autoRefreshToken: false }
        });
        const { data: userData, error: userError } = await verifier.auth.getUser(token);
        if (userError || !userData.user) {
          return Response.json({ error: "Invalid or expired session" }, { status: 401 });
        }
        const { supabaseAdmin } = await import("./client.server-BMj2q4-x.mjs");
        const revokedAt = (/* @__PURE__ */ new Date()).toISOString();
        const { error: updateError } = await supabaseAdmin.from("profiles").update({ session_revoked_at: revokedAt }).eq("id", userData.user.id);
        if (updateError) {
          return Response.json({ error: updateError.message }, { status: 500 });
        }
        const { error: signOutError } = await supabaseAdmin.auth.admin.signOut(token, "global");
        if (signOutError) {
          return Response.json({ error: signOutError.message }, { status: 500 });
        }
        return Response.json({ success: true, revoked_at: revokedAt });
      }
    }
  }
});
const $$splitComponentImporter$7 = () => import("./agent.templates.quotes-DAhHi5xh.mjs");
const Route$7 = createFileRoute("/agent/templates/quotes")({
  head: () => ({
    meta: [{
      title: "Quote Templates - Safar Agent"
    }, {
      name: "description",
      content: "Create and manage reusable quote templates with merge fields."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = reactExports.useState(void 0);
  reactExports.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,transform,box-shadow] duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 disabled:active:scale-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Separator = reactExports.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    ref,
    decorative,
    orientation,
    className: cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    ),
    ...props
  }
));
Separator.displayName = Root.displayName;
const Sheet = Root$1;
const SheetPortal = Portal;
const SheetOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = reactExports.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = Content.displayName;
const SheetHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
SheetHeader.displayName = "SheetHeader";
const SheetTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = Title.displayName;
const SheetDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = Description.displayName;
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("animate-pulse rounded-md bg-primary/10", className), ...props });
}
const TooltipProvider = Provider;
const Tooltip = Root3;
const TooltipTrigger = Trigger;
const TooltipContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = Content2.displayName;
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = reactExports.createContext(null);
function useSidebar() {
  const context = reactExports.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
const SidebarProvider = reactExports.forwardRef(
  ({
    defaultOpen = true,
    open: openProp,
    onOpenChange: setOpenProp,
    className,
    style,
    children,
    ...props
  }, ref) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = reactExports.useState(false);
    const [_open, _setOpen] = reactExports.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = reactExports.useCallback(
      (value) => {
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
          setOpenProp(openState);
        } else {
          _setOpen(openState);
        }
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open]
    );
    const toggleSidebar = reactExports.useCallback(() => {
      return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
    }, [isMobile, setOpen, setOpenMobile]);
    reactExports.useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
          event.preventDefault();
          toggleSidebar();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);
    const state = open ? "expanded" : "collapsed";
    const contextValue = reactExports.useMemo(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          "--sidebar-width": SIDEBAR_WIDTH,
          "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
          ...style
        },
        className: cn(
          "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
          className
        ),
        ref,
        ...props,
        children
      }
    ) }) });
  }
);
SidebarProvider.displayName = "SidebarProvider";
const Sidebar = reactExports.forwardRef(
  ({
    side = "left",
    variant = "sidebar",
    collapsible = "offcanvas",
    className,
    children,
    ...props
  }, ref) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    if (collapsible === "none") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
            className
          ),
          ref,
          ...props,
          children
        }
      );
    }
    if (isMobile) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        SheetContent,
        {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
          style: {
            "--sidebar-width": SIDEBAR_WIDTH_MOBILE
          },
          side,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { className: "sr-only", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { children: "Sidebar" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SheetDescription, { children: "Displays the mobile sidebar." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full flex-col", children })
          ]
        }
      ) });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref,
        className: "group peer hidden text-sidebar-foreground md:block",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
                "group-data-[collapsible=offcanvas]:w-0",
                "group-data-[side=right]:rotate-180",
                variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
                side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
                className
              ),
              ...props,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "data-sidebar": "sidebar",
                  className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                  children
                }
              )
            }
          )
        ]
      }
    );
  }
);
Sidebar.displayName = "Sidebar";
const SidebarTrigger = reactExports.forwardRef(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Button,
    {
      ref,
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      className: cn("h-7 w-7", className),
      onClick: (event) => {
        onClick?.(event);
        toggleSidebar();
      },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PanelLeft, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
});
SidebarTrigger.displayName = "SidebarTrigger";
const SidebarRail = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        ref,
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: toggleSidebar,
        title: "Toggle Sidebar",
        className: cn(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          className
        ),
        ...props
      }
    );
  }
);
SidebarRail.displayName = "SidebarRail";
const SidebarInset = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "main",
      {
        ref,
        className: cn(
          "relative flex w-full flex-1 flex-col bg-background",
          "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
          className
        ),
        ...props
      }
    );
  }
);
SidebarInset.displayName = "SidebarInset";
const SidebarInput = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Input,
    {
      ref,
      "data-sidebar": "input",
      className: cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      ),
      ...props
    }
  );
});
SidebarInput.displayName = "SidebarInput";
const SidebarHeader = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        "data-sidebar": "header",
        className: cn("flex flex-col gap-2 p-2", className),
        ...props
      }
    );
  }
);
SidebarHeader.displayName = "SidebarHeader";
const SidebarFooter = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        "data-sidebar": "footer",
        className: cn("flex flex-col gap-2 p-2", className),
        ...props
      }
    );
  }
);
SidebarFooter.displayName = "SidebarFooter";
const SidebarSeparator = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Separator,
    {
      ref,
      "data-sidebar": "separator",
      className: cn("mx-2 w-auto bg-sidebar-border", className),
      ...props
    }
  );
});
SidebarSeparator.displayName = "SidebarSeparator";
const SidebarContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        "data-sidebar": "content",
        className: cn(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          className
        ),
        ...props
      }
    );
  }
);
SidebarContent.displayName = "SidebarContent";
const SidebarGroup = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        "data-sidebar": "group",
        className: cn("relative flex w-full min-w-0 flex-col p-2", className),
        ...props
      }
    );
  }
);
SidebarGroup.displayName = "SidebarGroup";
const SidebarGroupLabel = reactExports.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "group-label",
      className: cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      ),
      ...props
    }
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
const SidebarGroupAction = reactExports.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "group-action",
      className: cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";
const SidebarGroupContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      "data-sidebar": "group-content",
      className: cn("w-full text-sm", className),
      ...props
    }
  )
);
SidebarGroupContent.displayName = "SidebarGroupContent";
const SidebarMenu = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "ul",
    {
      ref,
      "data-sidebar": "menu",
      className: cn("flex w-full min-w-0 flex-col gap-1", className),
      ...props
    }
  )
);
SidebarMenu.displayName = "SidebarMenu";
const SidebarMenuItem = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "li",
    {
      ref,
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className),
      ...props
    }
  )
);
SidebarMenuItem.displayName = "SidebarMenuItem";
const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const SidebarMenuButton = reactExports.forwardRef(
  ({
    asChild = false,
    isActive = false,
    variant = "default",
    size = "default",
    tooltip,
    className,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();
    const button = /* @__PURE__ */ jsxRuntimeExports.jsx(
      Comp,
      {
        ref,
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        className: cn(sidebarMenuButtonVariants({ variant, size }), className),
        ...props
      }
    );
    if (!tooltip) {
      return button;
    }
    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip
      };
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: button }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TooltipContent,
        {
          side: "right",
          align: "center",
          hidden: state !== "collapsed" || isMobile,
          ...tooltip
        }
      )
    ] });
  }
);
SidebarMenuButton.displayName = "SidebarMenuButton";
const SidebarMenuAction = reactExports.forwardRef(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-action",
      className: cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      ),
      ...props
    }
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";
const SidebarMenuBadge = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      "data-sidebar": "menu-badge",
      className: cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  )
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";
const SidebarMenuSkeleton = reactExports.forwardRef(({ className, showIcon = false, ...props }, ref) => {
  const width = reactExports.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      "data-sidebar": "menu-skeleton",
      className: cn("flex h-8 items-center gap-2 rounded-md px-2", className),
      ...props,
      children: [
        showIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Skeleton,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": width
            }
          }
        )
      ]
    }
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
const SidebarMenuSub = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "ul",
    {
      ref,
      "data-sidebar": "menu-sub",
      className: cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  )
);
SidebarMenuSub.displayName = "SidebarMenuSub";
const SidebarMenuSubItem = reactExports.forwardRef(
  ({ ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { ref, ...props })
);
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
const SidebarMenuSubButton = reactExports.forwardRef(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
const agentItems = [
  { title: "Dashboard", url: "/agent/dashboard", icon: LayoutDashboard },
  { title: "Packages", url: "/agent/packages", icon: Package },
  { title: "Templates", url: "/agent/templates", icon: FolderOpen },
  { title: "Quote Templates", url: "/agent/templates/quotes", icon: FolderOpen },
  { title: "Campaigns", url: "/agent/campaigns", icon: Megaphone },
  { title: "Featured Ads", url: "/agent/advertising/featured", icon: Sparkles },
  { title: "Leads", url: "/agent/leads", icon: Users },
  { title: "Reviews", url: "/agent/reviews", icon: Star },
  { title: "Credentials", url: "/agent/onboarding/credentials", icon: ShieldCheck },
  { title: "Analytics", url: "/agent/analytics", icon: ChartColumn },
  { title: "Billing", url: "/agent/billing", icon: CreditCard },
  { title: "Referrals", url: "/agent/referrals", icon: Users },
  { title: "Articles", url: "/agent/content/new", icon: FolderOpen },
  { title: "Settings", url: "/settings", icon: Settings }
];
function DashboardSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Sidebar, { collapsible: "icon", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarHeader, { className: "border-b border-sidebar-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/agent/dashboard", className: "flex items-center gap-2 px-2 py-1 font-bold text-sidebar-primary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MoonStar, { className: "h-4 w-4" }) }),
      !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg tracking-tight", children: "Safar Agents" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SidebarGroup, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarGroupLabel, { children: "Agent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarGroupContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMenu, { children: agentItems.map((item) => {
        const isActive = location.pathname === item.url || item.url === "/agent/packages" && location.pathname.startsWith("/agent/packages");
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMenuButton, { asChild: true, isActive, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: item.url, preload: "intent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-4 w-4" }),
          !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.title })
        ] }) }) }, item.title);
      }) }) })
    ] }) })
  ] });
}
function PageTransition({
  children,
  className
}) {
  const isNavigating = useRouterState({
    select: (s) => s.isLoading || s.isTransitioning
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "transition-opacity duration-150",
        isNavigating ? "opacity-0" : "opacity-100",
        className
      ),
      children
    }
  );
}
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const DropdownMenu = Root2$3;
const DropdownMenuTrigger = Trigger$2;
const DropdownMenuSubTrigger = reactExports.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SubTrigger2,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
const DropdownMenuSubContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SubContent2,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = SubContent2.displayName;
const DropdownMenuContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2$1,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = Content2$1.displayName;
const DropdownMenuItem = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Item2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = Item2.displayName;
const DropdownMenuCheckboxItem = reactExports.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  CheckboxItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
const DropdownMenuRadioItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  RadioItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
const DropdownMenuLabel = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label2,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = Label2.displayName;
const DropdownMenuSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator2,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = Separator2.displayName;
const ScrollArea = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Root$2,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollBar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Corner, {})
    ]
  }
));
ScrollArea.displayName = Root$2.displayName;
const ScrollBar = reactExports.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
function NotificationBell() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [notifications, setNotifications] = reactExports.useState([]);
  const [open, setOpen] = reactExports.useState(false);
  const unread = notifications.filter((n) => !n.is_read).length;
  const load = reactExports.useCallback(async () => {
    if (!user) return;
    const { data } = await supabase.from("notifications").select("*").eq("user_id", user.id).order("created_at", { ascending: false }).limit(20);
    setNotifications(data ?? []);
  }, [user]);
  reactExports.useEffect(() => {
    if (!user) {
      setNotifications([]);
      return;
    }
    load();
    const channel = supabase.channel(
      `notifications-${user.id}-${Math.random().toString(36).slice(2, 10)}`
    );
    channel.on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "notifications",
        filter: `user_id=eq.${user.id}`
      },
      (payload) => {
        const n = payload.new;
        setNotifications((prev) => [n, ...prev].slice(0, 20));
      }
    ).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, load]);
  async function markAllRead() {
    if (!user || unread === 0) return;
    const ids = notifications.filter((n) => !n.is_read).map((n) => n.id);
    setNotifications((prev) => prev.map((n) => ({ ...n, is_read: true })));
    await supabase.from("notifications").update({ is_read: true }).in("id", ids);
  }
  async function handleClick(n) {
    if (!n.is_read) {
      setNotifications((prev) => prev.map((x) => x.id === n.id ? { ...x, is_read: true } : x));
      await supabase.from("notifications").update({ is_read: true }).eq("id", n.id);
    }
    setOpen(false);
    if (n.link_url) {
      navigate({ to: n.link_url });
    }
  }
  if (!user) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "icon", className: "relative", "aria-label": "Notifications", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-5 w-5" }),
      unread > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Badge,
        {
          className: "absolute -right-1 -top-1 h-5 min-w-5 justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground",
          variant: "default",
          children: unread > 9 ? "9+" : unread
        }
      ) : null
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", className: "w-80 p-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-3 py-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Notifications" }),
        unread > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-7 gap-1 text-xs",
            onClick: markAllRead,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCheck, { className: "h-3.5 w-3.5" }),
              " Mark all read"
            ]
          }
        ) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "max-h-96", children: notifications.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-10 text-center text-sm text-muted-foreground", children: "You're all caught up." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border", children: notifications.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => handleClick(n),
          className: cn(
            "flex w-full items-start gap-3 px-3 py-3 text-left transition-colors hover:bg-secondary/60",
            !n.is_read && "bg-primary/5"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "mt-1.5 h-2 w-2 shrink-0 rounded-full",
                  n.is_read ? "bg-transparent" : "bg-primary"
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-sm font-medium text-foreground", children: n.title }),
              n.body ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 line-clamp-2 text-xs text-muted-foreground", children: n.body }) : null,
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] text-muted-foreground", children: formatDistanceToNow(new Date(n.created_at), { addSuffix: true }) })
            ] })
          ]
        }
      ) }, n.id)) }) })
    ] })
  ] });
}
const Avatar = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root$3,
  {
    ref,
    className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
    ...props
  }
));
Avatar.displayName = Root$3.displayName;
const AvatarImage = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = Image.displayName;
const AvatarFallback = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = Fallback.displayName;
const SIZE_PRESETS = {
  // Search result cards, agent directory cards, dashboard cards
  card: { width: 400, height: 300, quality: 75, resize: "cover" },
  // Small previews (review media thumbnails, gallery strip)
  thumbnail: { width: 160, height: 160, quality: 70, resize: "cover" },
  // Package detail hero image, gallery main slide
  hero: { width: 1200, height: 700, quality: 80, resize: "cover" },
  // Agent logo on profile card / package detail
  avatar: { width: 80, height: 80, quality: 75, resize: "cover" },
  // Header / very small avatars
  "avatar-sm": { width: 40, height: 40, quality: 60, resize: "cover" }
};
function isSupabaseStorageUrl(url) {
  return /\/storage\/v1\/object\/(public|sign)\//.test(url);
}
function getOptimizedImageUrl(url, options) {
  if (!url) return null;
  if (!isSupabaseStorageUrl(url)) return url;
  const opts = "size" in options ? SIZE_PRESETS[options.size] : options;
  const transformed = url.replace(
    /\/storage\/v1\/object\/(public|sign)\//,
    "/storage/v1/render/image/$1/"
  );
  const params = new URLSearchParams();
  if (opts.width) params.set("width", String(opts.width));
  if (opts.height) params.set("height", String(opts.height));
  if (opts.quality) params.set("quality", String(opts.quality));
  if (opts.resize) params.set("resize", opts.resize);
  const sep = transformed.includes("?") ? "&" : "?";
  return `${transformed}${sep}${params.toString()}`;
}
function optimizedFor(url, size) {
  return getOptimizedImageUrl(url, { size });
}
function getInitials(name, email) {
  if (name) {
    return name.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase() ?? "").join("");
  }
  return email?.[0]?.toUpperCase() ?? "U";
}
function UserMenu() {
  const { user, profile, agent, signOut } = useAuth();
  const navigate = useNavigate();
  if (!user) return null;
  const displayName = profile?.full_name ?? user.email ?? "Account";
  const initials = getInitials(profile?.full_name, user.email);
  const avatarUrl = optimizedFor(agent?.logo_url ?? null, "avatar-sm");
  const handleSignOut = async () => {
    await signOut();
    navigate({ to: "/login" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", className: "flex items-center gap-2 px-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-8 w-8", children: [
        avatarUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: avatarUrl, alt: displayName }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-primary text-primary-foreground text-xs", children: initials })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden text-sm font-medium text-foreground sm:inline-block max-w-[140px] truncate", children: displayName })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", className: "w-56", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuLabel, { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium truncate", children: displayName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal text-muted-foreground truncate", children: user.email })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/agent/dashboard", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "mr-2 h-4 w-4" }),
        "Dashboard"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/settings", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "mr-2 h-4 w-4" }),
        "Settings"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onClick: handleSignOut, className: "text-destructive focus:text-destructive", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "mr-2 h-4 w-4" }),
        "Log out"
      ] })
    ] })
  ] });
}
function DashboardLayout({
  children,
  title,
  headerExtras
}) {
  const isNavigating = useRouterState({
    select: (s) => s.isLoading || s.isTransitioning
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen w-full bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardSidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: `pointer-events-none absolute inset-x-0 top-0 h-0.5 overflow-hidden transition-opacity ${isNavigating ? "opacity-100" : "opacity-0"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-1/3 animate-[route-progress_1s_ease-in-out_infinite] bg-primary" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarTrigger, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-sm font-semibold text-foreground", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-2", children: [
          headerExtras,
          /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationBell, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserMenu, {})
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 px-4 py-6 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PageTransition, { children }) })
    ] })
  ] }) });
}
const Card = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn(
        "rounded-xl border bg-card text-card-foreground shadow transition-shadow duration-200",
        className
      ),
      ...props
    }
  )
);
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("font-semibold leading-none tracking-tight", className),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root$4, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root$4.displayName;
const Switch = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root$5,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = Root$5.displayName;
const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Toggle = reactExports.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root$6,
  {
    ref,
    className: cn(toggleVariants({ variant, size, className })),
    ...props
  }
));
Toggle.displayName = Root$6.displayName;
const ToggleGroupContext = reactExports.createContext({
  size: "default",
  variant: "default"
});
const ToggleGroup = reactExports.forwardRef(({ className, variant, size, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root2,
  {
    ref,
    className: cn("flex items-center justify-center gap-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleGroupContext.Provider, { value: { variant, size }, children })
  }
));
ToggleGroup.displayName = Root2.displayName;
const ToggleGroupItem = reactExports.forwardRef(({ className, children, variant, size, ...props }, ref) => {
  const context = reactExports.useContext(ToggleGroupContext);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Item2$1,
    {
      ref,
      className: cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size
        }),
        className
      ),
      ...props,
      children
    }
  );
});
ToggleGroupItem.displayName = Item2$1.displayName;
const RadioGroup = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2$1, { className: cn("grid gap-2", className), ...props, ref });
});
RadioGroup.displayName = Root2$1.displayName;
const RadioGroupItem = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Item2$2,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-3.5 w-3.5 fill-primary" }) })
    }
  );
});
RadioGroupItem.displayName = Item2$2.displayName;
const Select = Root2$2;
const SelectValue = Value;
const SelectTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger$1,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = Trigger$1.displayName;
const SelectScrollUpButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = ScrollUpButton.displayName;
const SelectScrollDownButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = ScrollDownButton.displayName;
const SelectContent = reactExports.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$2, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Content2$2,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Viewport$1,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = Content2$2.displayName;
const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label$1,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = Label$1.displayName;
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ItemText, { children })
    ]
  }
));
SelectItem.displayName = Item.displayName;
const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator$1,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = Separator$1.displayName;
const Collapsible = Root$7;
const CollapsibleTrigger = CollapsibleTrigger$1;
const CollapsibleContent = CollapsibleContent$1;
const zoneColor = {
  A: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200",
  B: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200",
  C: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200"
};
function PackagePreviewCard({
  draft,
  primaryImageUrl
}) {
  const title = draft.title || "Your package title";
  const dateRange = draft.date_start && draft.date_end ? `${new Date(draft.date_start).toLocaleDateString()} – ${new Date(draft.date_end).toLocaleDateString()}` : "Select dates";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden border-border", children: [
    primaryImageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: primaryImageUrl,
        alt: title,
        className: "aspect-[4/3] w-full object-cover"
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] w-full bg-gradient-to-br from-primary/15 via-accent/20 to-primary/10 flex items-center justify-center text-primary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hotel, { className: "h-16 w-16" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold leading-tight text-foreground", children: title }),
          draft.type && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "capitalize", children: draft.type })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "From" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg font-bold text-primary", children: [
            draft.currency,
            " ",
            draft.base_price || "-"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
            draft.departure_city || "Departure city",
            draft.departure_country ? `, ${draft.departure_country}` : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: dateRange })
        ] }),
        draft.hotel_name && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Hotel, { className: "h-3.5 w-3.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
            draft.hotel_name,
            draft.hotel_stars ? ` · ${draft.hotel_stars}★` : ""
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 pt-1", children: [
        draft.hotel_zone && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: cn(
              "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
              zoneColor[draft.hotel_zone]
            ),
            children: [
              "Zone ",
              draft.hotel_zone
            ]
          }
        ),
        draft.distance_to_haram_m != null && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-xs", children: [
          draft.distance_to_haram_m,
          "m to Haram"
        ] }),
        draft.meals_included && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Utensils, { className: "mr-1 h-3 w-3" }),
          " ",
          draft.meals_included
        ] }),
        draft.transport_type && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bus, { className: "mr-1 h-3 w-3" }),
          " ",
          draft.transport_type
        ] }),
        draft.visa_included && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "mr-1 h-3 w-3" }),
          " Visa"
        ] }),
        draft.flights_included && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: "✈ Flights" })
      ] })
    ] })
  ] });
}
const $$splitComponentImporter$6 = () => import("./agent.packages.new-DpmqBc68.mjs");
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
const Route$6 = createFileRoute("/agent/packages/new")({
  head: () => ({
    meta: [{
      title: "New Package - Safar"
    }, {
      name: "description",
      content: "Create a new Hajj or Umrah package."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
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
const $$splitComponentImporter$5 = () => import("./agent.onboarding.credentials-Mb_J2n-Q.mjs");
const Route$5 = createFileRoute("/agent/onboarding/credentials")({
  head: () => ({
    meta: [{
      title: "Verify Your Credentials - Safar"
    }, {
      name: "description",
      content: "Upload your trade licenses and accreditations to unlock trust badges on your Safar profile."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./agent.content.new-DXaPXYwK.mjs");
const Route$4 = createFileRoute("/agent/content/new")({
  head: () => ({
    meta: [{
      title: "New Article - Safar"
    }, {
      name: "description",
      content: "Write and publish a guide for pilgrims on your agent profile."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./agent.campaigns.new-C6X8P_cY.mjs");
const Route$3 = createFileRoute("/agent/campaigns/new")({
  head: () => ({
    meta: [{
      title: "New Campaign - Safar"
    }, {
      name: "description",
      content: "Create a promotional campaign for your packages."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./agent.advertising.featured-rvPaN53H.mjs");
const Route$2 = createFileRoute("/agent/advertising/featured")({
  head: () => ({
    meta: [{
      title: "Featured Listings - Safar"
    }, {
      name: "description",
      content: "Promote your packages with sponsored placements in search results."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./agent.packages._id.edit-D5EckQns.mjs");
const Route$1 = createFileRoute("/agent/packages/$id/edit")({
  head: () => ({
    meta: [{
      title: "Edit Package - Safar"
    }, {
      name: "description",
      content: "Edit your Hajj or Umrah package."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitNotFoundComponentImporter = () => import("./agent.packages._id.availability-B8iFgEL-.mjs");
const $$splitErrorComponentImporter = () => import("./agent.packages._id.availability-BXeeVaV8.mjs");
const $$splitComponentImporter = () => import("./agent.packages._id.availability-Dw_G4kdt.mjs");
const Route = createFileRoute("/agent/packages/$id/availability")({
  head: () => ({
    meta: [{
      title: "Manage Availability - Safar"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const UnauthorisedRoute = Route$o.update({
  id: "/unauthorised",
  path: "/unauthorised",
  getParentRoute: () => Route$p
});
const SignupRoute = Route$n.update({
  id: "/signup",
  path: "/signup",
  getParentRoute: () => Route$p
});
const SettingsRoute = Route$m.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => Route$p
});
const ResetPasswordRoute = Route$l.update({
  id: "/reset-password",
  path: "/reset-password",
  getParentRoute: () => Route$p
});
const LoginRoute = Route$k.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$p
});
const ForgotPasswordRoute = Route$j.update({
  id: "/forgot-password",
  path: "/forgot-password",
  getParentRoute: () => Route$p
});
const IndexRoute = Route$i.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$p
});
const AgentTemplatesRoute = Route$h.update({
  id: "/agent/templates",
  path: "/agent/templates",
  getParentRoute: () => Route$p
});
const AgentReviewsRoute = Route$g.update({
  id: "/agent/reviews",
  path: "/agent/reviews",
  getParentRoute: () => Route$p
});
const AgentReferralsRoute = Route$f.update({
  id: "/agent/referrals",
  path: "/agent/referrals",
  getParentRoute: () => Route$p
});
const AgentLeadsRoute = Route$e.update({
  id: "/agent/leads",
  path: "/agent/leads",
  getParentRoute: () => Route$p
});
const AgentDashboardRoute = Route$d.update({
  id: "/agent/dashboard",
  path: "/agent/dashboard",
  getParentRoute: () => Route$p
});
const AgentBillingRoute = Route$c.update({
  id: "/agent/billing",
  path: "/agent/billing",
  getParentRoute: () => Route$p
});
const AgentAnalyticsRoute = Route$b.update({
  id: "/agent/analytics",
  path: "/agent/analytics",
  getParentRoute: () => Route$p
});
const AgentPackagesIndexRoute = Route$a.update({
  id: "/agent/packages/",
  path: "/agent/packages/",
  getParentRoute: () => Route$p
});
const AgentCampaignsIndexRoute = Route$9.update({
  id: "/agent/campaigns/",
  path: "/agent/campaigns/",
  getParentRoute: () => Route$p
});
const ApiAuthSignoutAllDevicesRoute = Route$8.update({
  id: "/api/auth/signout-all-devices",
  path: "/api/auth/signout-all-devices",
  getParentRoute: () => Route$p
});
const AgentTemplatesQuotesRoute = Route$7.update({
  id: "/quotes",
  path: "/quotes",
  getParentRoute: () => AgentTemplatesRoute
});
const AgentPackagesNewRoute = Route$6.update({
  id: "/agent/packages/new",
  path: "/agent/packages/new",
  getParentRoute: () => Route$p
});
const AgentOnboardingCredentialsRoute = Route$5.update({
  id: "/agent/onboarding/credentials",
  path: "/agent/onboarding/credentials",
  getParentRoute: () => Route$p
});
const AgentContentNewRoute = Route$4.update({
  id: "/agent/content/new",
  path: "/agent/content/new",
  getParentRoute: () => Route$p
});
const AgentCampaignsNewRoute = Route$3.update({
  id: "/agent/campaigns/new",
  path: "/agent/campaigns/new",
  getParentRoute: () => Route$p
});
const AgentAdvertisingFeaturedRoute = Route$2.update({
  id: "/agent/advertising/featured",
  path: "/agent/advertising/featured",
  getParentRoute: () => Route$p
});
const AgentPackagesIdEditRoute = Route$1.update({
  id: "/agent/packages/$id/edit",
  path: "/agent/packages/$id/edit",
  getParentRoute: () => Route$p
});
const AgentPackagesIdAvailabilityRoute = Route.update({
  id: "/agent/packages/$id/availability",
  path: "/agent/packages/$id/availability",
  getParentRoute: () => Route$p
});
const AgentTemplatesRouteChildren = {
  AgentTemplatesQuotesRoute
};
const AgentTemplatesRouteWithChildren = AgentTemplatesRoute._addFileChildren(
  AgentTemplatesRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  ForgotPasswordRoute,
  LoginRoute,
  ResetPasswordRoute,
  SettingsRoute,
  SignupRoute,
  UnauthorisedRoute,
  AgentAnalyticsRoute,
  AgentBillingRoute,
  AgentDashboardRoute,
  AgentLeadsRoute,
  AgentReferralsRoute,
  AgentReviewsRoute,
  AgentTemplatesRoute: AgentTemplatesRouteWithChildren,
  AgentAdvertisingFeaturedRoute,
  AgentCampaignsNewRoute,
  AgentContentNewRoute,
  AgentOnboardingCredentialsRoute,
  AgentPackagesNewRoute,
  ApiAuthSignoutAllDevicesRoute,
  AgentCampaignsIndexRoute,
  AgentPackagesIndexRoute,
  AgentPackagesIdAvailabilityRoute,
  AgentPackagesIdEditRoute
};
const routeTree = Route$p._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1e3,
        gcTime: 30 * 60 * 1e3,
        refetchOnWindowFocus: false,
        retry: 1
      }
    }
  });
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // Preload routes on hover/focus so clicks feel instant.
    defaultPreload: "intent",
    defaultPreloadDelay: 30,
    // Let Query manage cache freshness; the router's preload cache must not
    // short-circuit useQuery's staleTime.
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  RadioGroupItem as A,
  Button as B,
  Card as C,
  DashboardLayout as D,
  Collapsible as E,
  CollapsibleTrigger as F,
  CollapsibleContent as G,
  useIsMobile as H,
  Input as I,
  FALLBACK_CURRENCIES as J,
  formatCurrency as K,
  Label as L,
  Route$1 as M,
  PackageEditorPage as N,
  Route as O,
  PageTransition as P,
  router as Q,
  Route$n as R,
  Select as S,
  ToggleGroup as T,
  CardHeader as a,
  CardTitle as b,
  CardDescription as c,
  CardContent as d,
  useCurrency as e,
  SelectTrigger as f,
  SelectValue as g,
  SelectContent as h,
  SelectItem as i,
  Route$k as j,
  Badge as k,
  cn as l,
  Switch as m,
  Skeleton as n,
  Sheet as o,
  SheetContent as p,
  SheetHeader as q,
  SheetTitle as r,
  supabase as s,
  SheetDescription as t,
  useAuth as u,
  ToggleGroupItem as v,
  useFormatPrice as w,
  buttonVariants as x,
  PackagePreviewCard as y,
  RadioGroup as z
};
