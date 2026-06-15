import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { l as cn } from "./router-BZcuc5AB.mjs";
import { N as Inbox } from "../_libs/lucide-react.mjs";
function EmptyState({
  icon,
  title,
  description,
  action,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card px-6 py-12 text-center",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-muted-foreground", children: icon ?? /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-base font-semibold text-foreground", children: title }),
        description ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 max-w-sm text-sm text-muted-foreground", children: description }) : null,
        action ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: action }) : null
      ]
    }
  );
}
export {
  EmptyState as E
};
