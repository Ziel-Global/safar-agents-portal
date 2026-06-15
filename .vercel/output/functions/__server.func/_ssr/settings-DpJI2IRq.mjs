import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as ProtectedRoute } from "./ProtectedRoute-DoVUnduH.mjs";
import { u as useAuth, e as useCurrency, D as DashboardLayout, C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, L as Label, I as Input, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, B as Button, s as supabase } from "./router-BZcuc5AB.mjs";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription, e as DialogFooter } from "./dialog-D8TTSPkc.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { L as LoaderCircle, u as Save, K as KeyRound, v as Monitor, w as ShieldAlert, T as TriangleAlert } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const COUNTRY_OPTIONS = [
  { code: "GB", name: "United Kingdom" },
  { code: "PK", name: "Pakistan" },
  { code: "ID", name: "Indonesia" },
  { code: "NG", name: "Nigeria" },
  { code: "US", name: "United States" },
  { code: "TR", name: "Turkey" },
  { code: "BD", name: "Bangladesh" },
  { code: "EG", name: "Egypt" },
  { code: "MY", name: "Malaysia" },
  { code: "IN", name: "India" }
];
const LOCALES = [{
  code: "en",
  name: "English"
}, {
  code: "ar",
  name: "Arabic (العربية)"
}, {
  code: "ur",
  name: "Urdu (اردو)"
}, {
  code: "id",
  name: "Indonesian (Bahasa)"
}, {
  code: "tr",
  name: "Turkish (Türkçe)"
}];
function SettingsPage() {
  const {
    user,
    profile,
    signOut,
    refreshProfile
  } = useAuth();
  const {
    currencies,
    currency,
    setCurrency
  } = useCurrency();
  const [fullName, setFullName] = reactExports.useState(profile?.full_name ?? "");
  const [country, setCountry] = reactExports.useState(profile?.country_code ?? "");
  const [locale, setLocale] = reactExports.useState(profile?.preferred_locale ?? "en");
  const [savingProfile, setSavingProfile] = reactExports.useState(false);
  const [signingOutAll, setSigningOutAll] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setFullName(profile?.full_name ?? "");
    setCountry(profile?.country_code ?? "");
    setLocale(profile?.preferred_locale ?? "en");
  }, [profile]);
  const [pwOpen, setPwOpen] = reactExports.useState(false);
  const [newPw, setNewPw] = reactExports.useState("");
  const [confirmPw, setConfirmPw] = reactExports.useState("");
  const [pwSubmitting, setPwSubmitting] = reactExports.useState(false);
  const [delOpen, setDelOpen] = reactExports.useState(false);
  const [delConfirm, setDelConfirm] = reactExports.useState("");
  const [delSubmitting, setDelSubmitting] = reactExports.useState(false);
  const handleSaveProfile = async (e) => {
    e.preventDefault();
    if (!user) return;
    setSavingProfile(true);
    const {
      error
    } = await supabase.from("profiles").update({
      full_name: fullName.trim() || null,
      country_code: country || null,
      preferred_locale: locale
    }).eq("id", user.id);
    setSavingProfile(false);
    if (error) {
      toast.error("Couldn't save: " + error.message);
      return;
    }
    await refreshProfile();
    toast.success("Profile updated");
  };
  const handleCurrencyChange = async (code) => {
    await setCurrency(code);
    toast.success("Preferred currency updated");
  };
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (newPw.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    if (newPw !== confirmPw) {
      toast.error("Passwords don't match");
      return;
    }
    setPwSubmitting(true);
    const {
      error
    } = await supabase.auth.updateUser({
      password: newPw
    });
    setPwSubmitting(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Password updated");
    setNewPw("");
    setConfirmPw("");
    setPwOpen(false);
  };
  const handleSignOutAll = async () => {
    if (signingOutAll) return;
    setSigningOutAll(true);
    const {
      data: sessionData
    } = await supabase.auth.getSession();
    const token = sessionData.session?.access_token;
    if (!token) {
      setSigningOutAll(false);
      toast.error("Please sign in again before signing out all devices.");
      return;
    }
    const response = await fetch("/api/auth/signout-all-devices", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (!response.ok) {
      setSigningOutAll(false);
      const body = await response.json().catch(() => null);
      toast.error("Couldn't sign out all devices: " + (body?.error ?? "Please try again."));
      return;
    }
    await signOut({
      scope: "local",
      silent: true
    });
    toast.success("Signed out of all devices");
    if (typeof window !== "undefined") window.location.href = "/";
  };
  const handleDeleteAccount = async () => {
    if (!user) return;
    if (delConfirm !== "DELETE") {
      toast.error('Type "DELETE" to confirm');
      return;
    }
    setDelSubmitting(true);
    const {
      error
    } = await supabase.from("profiles").update({
      deleted_at: (/* @__PURE__ */ new Date()).toISOString()
    }).eq("id", user.id);
    if (error) {
      setDelSubmitting(false);
      toast.error("Couldn't delete: " + error.message);
      return;
    }
    await signOut({
      scope: "global",
      silent: true
    });
    toast.success("Your account has been deleted.");
    if (typeof window !== "undefined") window.location.href = "/";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DashboardLayout, { title: "Account settings", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto w-full max-w-3xl px-4 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Account settings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Manage your profile, security, and account preferences." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Profile" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Update how your name and location appear across Safar." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSaveProfile, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "fullName", children: "Full name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "fullName", value: fullName, onChange: (e) => setFullName(e.target.value), autoComplete: "name" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", value: user?.email ?? "", disabled: true, readOnly: true, className: "text-muted-foreground" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "country", children: "Country" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: country, onValueChange: setCountry, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "country", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select country" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: COUNTRY_OPTIONS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c.code, children: c.name }, c.code)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "locale", children: "Preferred language" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: locale, onValueChange: setLocale, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "locale", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: LOCALES.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: l.code, children: l.name }, l.code)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 sm:col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ccy", children: "Preferred currency" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: currency, onValueChange: handleCurrencyChange, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "ccy", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: currencies.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: c.code, children: [
                    c.flag_emoji ? `${c.flag_emoji} ` : "",
                    c.code,
                    " - ",
                    c.name
                  ] }, c.code)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Saves automatically when you change it." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: savingProfile, children: [
              savingProfile ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-1 h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "mr-1 h-4 w-4" }),
              "Save profile"
            ] }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { className: "h-4 w-4" }),
              " Security"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Manage your password." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setPwOpen(true), children: "Change password" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "h-4 w-4" }),
              " Sessions"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Sign out of every browser and device where you're currently signed in." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: handleSignOutAll, disabled: signingOutAll, children: [
            signingOutAll ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-1 h-4 w-4 animate-spin" }) : null,
            "Sign out of all devices"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-destructive/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-destructive", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-4 w-4" }),
              " Danger zone"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Permanently delete your account and associated data. This cannot be undone." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "destructive", onClick: () => setDelOpen(true), children: "Delete account" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: pwOpen, onOpenChange: setPwOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Change password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Enter a new password. You'll stay signed in on this device." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handlePasswordSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "newPw", children: "New password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "newPw", type: "password", value: newPw, onChange: (e) => setNewPw(e.target.value), placeholder: "At least 8 characters", minLength: 8, required: true, autoComplete: "new-password" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "confirmPw", children: "Confirm password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "confirmPw", type: "password", value: confirmPw, onChange: (e) => setConfirmPw(e.target.value), minLength: 8, required: true, autoComplete: "new-password" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: () => setPwOpen(false), children: "Cancel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: pwSubmitting, children: [
            pwSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-1 h-4 w-4 animate-spin" }) : null,
            "Update password"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: delOpen, onOpenChange: setDelOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2 text-destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
          " Delete your account?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "This will permanently delete your account and all associated data. This cannot be undone." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "del", children: [
          "Type ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-semibold", children: "DELETE" }),
          " to confirm"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "del", value: delConfirm, onChange: (e) => setDelConfirm(e.target.value), placeholder: "DELETE" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setDelOpen(false), disabled: delSubmitting, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "destructive", onClick: handleDeleteAccount, disabled: delSubmitting || delConfirm !== "DELETE", children: [
          delSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-1 h-4 w-4 animate-spin" }) : null,
          "Permanently delete"
        ] })
      ] })
    ] }) })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsPage, {}) });
export {
  SplitComponent as component
};
