import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useAuth, s as supabase, n as Skeleton, l as cn, B as Button } from "./router-BZcuc5AB.mjs";
import { T as Textarea } from "./textarea-UU-ZedD5.mjs";
import { f as format } from "../_libs/date-fns.mjs";
import { R as Send } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
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
async function fetchMessages(rfqId) {
  const { data, error } = await supabase.from("messages").select("id, rfq_id, sender_id, sender_type, body, attachments, is_read, created_at").eq("rfq_id", rfqId).order("created_at", { ascending: true });
  if (error) throw error;
  return data ?? [];
}
async function sendMessage(opts) {
  const { error } = await supabase.from("messages").insert({
    rfq_id: opts.rfqId,
    sender_id: opts.senderId,
    sender_type: opts.senderType,
    body: opts.body
  });
  if (error) throw error;
}
async function markMessagesRead(rfqId, viewerType) {
  const otherType = viewerType === "pilgrim" ? "agent" : "pilgrim";
  await supabase.from("messages").update({ is_read: true }).eq("rfq_id", rfqId).eq("sender_type", otherType).eq("is_read", false);
}
function MessageThread({ rfqId, viewerType, className, emptyHint, readOnly }) {
  const { user } = useAuth();
  const [messages, setMessages] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [body, setBody] = reactExports.useState("");
  const [sending, setSending] = reactExports.useState(false);
  const scrollRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    let active = true;
    setLoading(true);
    fetchMessages(rfqId).then((m) => {
      if (!active) return;
      setMessages(m);
      setLoading(false);
      markMessagesRead(rfqId, viewerType).catch(() => null);
    }).catch(() => {
      if (!active) return;
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [rfqId, viewerType]);
  reactExports.useEffect(() => {
    const channel = supabase.channel(`rfq-messages-${rfqId}`).on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "messages",
        filter: `rfq_id=eq.${rfqId}`
      },
      (payload) => {
        const m = payload.new;
        setMessages((prev) => prev.some((x) => x.id === m.id) ? prev : [...prev, m]);
        if (m.sender_type !== viewerType) {
          markMessagesRead(rfqId, viewerType).catch(() => null);
        }
      }
    ).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [rfqId, viewerType]);
  reactExports.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages.length]);
  async function submit() {
    if (!user || !body.trim() || sending) return;
    setSending(true);
    try {
      await sendMessage({ rfqId, senderId: user.id, senderType: viewerType, body: body.trim() });
      setBody("");
    } catch (err) {
      toast.error("Could not send", {
        description: err instanceof Error ? err.message : "Please try again"
      });
    } finally {
      setSending(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex h-full min-h-[420px] flex-col rounded-md border border-border bg-card", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollRef, className: "flex-1 space-y-3 overflow-y-auto p-4", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-2/3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "ml-auto h-12 w-1/2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-3/5" })
    ] }) : messages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "py-10 text-center text-sm text-muted-foreground", children: emptyHint ?? "No messages yet - say hello to get the conversation started." }) : messages.map((m) => {
      const mine = m.sender_type === viewerType;
      const isSystem = m.sender_type === "system";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: cn(
            "flex flex-col",
            isSystem ? "items-center" : mine ? "items-end" : "items-start"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm",
                  isSystem ? "bg-muted text-muted-foreground text-xs italic" : mine ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-secondary text-foreground rounded-bl-sm"
                ),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap break-words", children: m.body })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 text-[10px] text-muted-foreground", children: format(new Date(m.created_at), "PPp") })
          ]
        },
        m.id
      );
    }) }),
    readOnly ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground", children: "You'll be notified of new messages from agents. Direct replies aren't available yet." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: body,
            onChange: (e) => setBody(e.target.value),
            onKeyDown: (e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                submit();
              }
            },
            rows: 2,
            placeholder: "Write a message...",
            className: "min-h-[44px] flex-1 resize-none",
            disabled: sending
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: submit, disabled: sending || !body.trim(), className: "gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
          "Send"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] text-muted-foreground", children: "Enter to send · Shift+Enter for newline" })
    ] })
  ] });
}
export {
  MessageThread
};
