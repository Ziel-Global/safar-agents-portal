import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate, f as useLocation } from "../_libs/tanstack__react-router.mjs";
import { u as useAuth } from "./router-BZcuc5AB.mjs";
import { L as LoaderCircle } from "../_libs/lucide-react.mjs";
function ProtectedRoute({ children, redirectTo = "/login" }) {
  const { loading, user, profile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const roleMismatch = !!profile && profile.role !== "agent";
  const awaitingProfile = !!user && !profile;
  reactExports.useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate({
        to: redirectTo,
        search: { redirect: location.href },
        replace: true
      });
      return;
    }
    if (roleMismatch) {
      navigate({ to: "/unauthorised", replace: true });
    }
  }, [loading, user, roleMismatch, navigate, location.href, redirectTo]);
  if (loading && !user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" }) });
  }
  if (!user || roleMismatch || awaitingProfile) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
}
export {
  ProtectedRoute as P
};
