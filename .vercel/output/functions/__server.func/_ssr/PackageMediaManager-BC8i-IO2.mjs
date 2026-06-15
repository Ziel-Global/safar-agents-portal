import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { f as useSensors, h as useSensor, D as DndContext, j as closestCenter, k as KeyboardSensor, P as PointerSensor } from "../_libs/dnd-kit__core.mjs";
import { S as SortableContext, r as rectSortingStrategy, a as arrayMove, s as sortableKeyboardCoordinates, u as useSortable } from "../_libs/dnd-kit__sortable.mjs";
import { C as CSS } from "../_libs/dnd-kit__utilities.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as Alert, a as AlertTitle, b as AlertDescription, P as Progress } from "./progress-CTc6cUL9.mjs";
import { s as supabase, l as cn, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem } from "./router-BZcuc5AB.mjs";
import { T as TriangleAlert, aa as Upload, L as LoaderCircle, ab as Video, S as Star, y as Trash2 } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/dnd-kit__accessibility.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/radix-ui__react-progress.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
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
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-separator.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
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
async function compressImage(file, options = {}) {
  const { maxWidth = 1920, quality = 0.8, mimeType = "image/jpeg" } = options;
  if (!file.type.startsWith("image/")) return file;
  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
  const img = await new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Failed to load image"));
    image.src = dataUrl;
  });
  const scale = Math.min(1, maxWidth / img.width);
  const targetWidth = Math.round(img.width * scale);
  const targetHeight = Math.round(img.height * scale);
  const canvas = document.createElement("canvas");
  canvas.width = targetWidth;
  canvas.height = targetHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) return file;
  ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
  const blob = await new Promise(
    (resolve) => canvas.toBlob(resolve, mimeType, quality)
  );
  if (!blob) return file;
  const newName = file.name.replace(/\.[^.]+$/, "") + (mimeType === "image/webp" ? ".webp" : ".jpg");
  return new File([blob], newName, { type: mimeType, lastModified: Date.now() });
}
const LABEL_OPTIONS = [
  { value: "hotel_exterior", label: "Hotel exterior" },
  { value: "room", label: "Room" },
  { value: "transport", label: "Transport" },
  { value: "meals", label: "Meals" },
  { value: "haram_proximity", label: "Haram proximity" },
  { value: "general", label: "General" }
];
const ACCEPTED_IMAGE = ["image/jpeg", "image/png", "image/webp"];
const ACCEPTED_VIDEO = ["video/mp4"];
const MAX_VIDEO_BYTES = 50 * 1024 * 1024;
function PackageMediaManager({ packageId, userId, onChange }) {
  const [items, setItems] = reactExports.useState([]);
  const [uploads, setUploads] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [isDragOver, setIsDragOver] = reactExports.useState(false);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );
  reactExports.useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase.from("package_media").select("*").eq("package_id", packageId).order("sort_order", { ascending: true });
      if (!cancelled) {
        if (error) toast.error(error.message);
        else setItems(data ?? []);
        setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [packageId]);
  reactExports.useEffect(() => {
    onChange?.(items);
  }, [items, onChange]);
  const handleFiles = reactExports.useCallback(
    async (fileList) => {
      const files = Array.from(fileList);
      for (const file of files) {
        const isImage = ACCEPTED_IMAGE.includes(file.type);
        const isVideo = ACCEPTED_VIDEO.includes(file.type);
        if (!isImage && !isVideo) {
          toast.error(`${file.name}: unsupported file type`);
          continue;
        }
        if (isVideo && file.size > MAX_VIDEO_BYTES) {
          toast.error(`${file.name}: video exceeds 50MB`);
          continue;
        }
        const uploadId = crypto.randomUUID();
        setUploads((u) => [...u, { id: uploadId, name: file.name, progress: 5 }]);
        try {
          let processed = file;
          if (isImage) {
            processed = await compressImage(file, { maxWidth: 1920, quality: 0.8 });
            setUploads(
              (u) => u.map((up) => up.id === uploadId ? { ...up, progress: 30 } : up)
            );
          }
          const ext = processed.name.split(".").pop() || (isVideo ? "mp4" : "jpg");
          const path = `${userId}/${packageId}/${crypto.randomUUID()}.${ext}`;
          const { error: uploadError } = await supabase.storage.from("package-media").upload(path, processed, {
            cacheControl: "3600",
            upsert: false,
            contentType: processed.type
          });
          if (uploadError) throw uploadError;
          setUploads(
            (u) => u.map((up) => up.id === uploadId ? { ...up, progress: 75 } : up)
          );
          const { data: pub } = supabase.storage.from("package-media").getPublicUrl(path);
          const publicUrl = pub.publicUrl;
          const nextOrder = items.length === 0 ? 0 : Math.max(...items.map((i) => i.sort_order)) + 1;
          const isFirst = items.length === 0 && uploads.length === 0;
          const { data: inserted, error: insertError } = await supabase.from("package_media").insert({
            package_id: packageId,
            url: publicUrl,
            thumbnail_url: isImage ? publicUrl : null,
            media_type: isVideo ? "video" : "photo",
            sort_order: nextOrder,
            is_primary: isFirst,
            label: "general"
          }).select().single();
          if (insertError) throw insertError;
          setItems((prev) => [...prev, inserted]);
          setUploads(
            (u) => u.map((up) => up.id === uploadId ? { ...up, progress: 100 } : up)
          );
          setTimeout(
            () => setUploads((u) => u.filter((up) => up.id !== uploadId)),
            800
          );
        } catch (err) {
          const message = err instanceof Error ? err.message : "Upload failed";
          toast.error(`${file.name}: ${message}`);
          setUploads(
            (u) => u.map((up) => up.id === uploadId ? { ...up, progress: 100, error: message } : up)
          );
          setTimeout(
            () => setUploads((u) => u.filter((up) => up.id !== uploadId)),
            3e3
          );
        }
      }
    },
    [items, packageId, uploads.length, userId]
  );
  const onInputChange = (e) => {
    if (e.target.files?.length) {
      void handleFiles(e.target.files);
      e.target.value = "";
    }
  };
  const onDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files?.length) void handleFiles(e.dataTransfer.files);
  };
  const setPrimary = async (id) => {
    const prev = items;
    setItems((current) => current.map((i) => ({ ...i, is_primary: i.id === id })));
    const others = prev.filter((i) => i.id !== id && i.is_primary).map((i) => i.id);
    if (others.length > 0) {
      await supabase.from("package_media").update({ is_primary: false }).in("id", others);
    }
    const { error } = await supabase.from("package_media").update({ is_primary: true }).eq("id", id);
    if (error) {
      toast.error(error.message);
      setItems(prev);
    }
  };
  const updateLabel = async (id, label) => {
    const prev = items;
    setItems((current) => current.map((i) => i.id === id ? { ...i, label } : i));
    const { error } = await supabase.from("package_media").update({ label }).eq("id", id);
    if (error) {
      toast.error(error.message);
      setItems(prev);
    }
  };
  const remove = async (id) => {
    const prev = items;
    const target = prev.find((i) => i.id === id);
    setItems((current) => current.filter((i) => i.id !== id));
    const { error } = await supabase.from("package_media").delete().eq("id", id);
    if (error) {
      toast.error(error.message);
      setItems(prev);
      return;
    }
    if (target) {
      const match = target.url.match(/\/package-media\/(.+)$/);
      if (match) await supabase.storage.from("package-media").remove([match[1]]);
    }
  };
  const handleDragEnd = async (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = items.findIndex((i) => i.id === active.id);
    const newIndex = items.findIndex((i) => i.id === over.id);
    if (oldIndex < 0 || newIndex < 0) return;
    const reordered = arrayMove(items, oldIndex, newIndex).map((i, idx) => ({
      ...i,
      sort_order: idx
    }));
    setItems(reordered);
    await Promise.all(
      reordered.map(
        (i) => supabase.from("package_media").update({ sort_order: i.sort_order }).eq("id", i.id)
      )
    );
  };
  const approvedCount = items.filter((i) => i.moderation_status === "approved").length;
  const showWarning = !loading && approvedCount < 3;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    showWarning && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { variant: "default", className: "border-accent/40 bg-accent/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-accent-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertTitle, { className: "text-sm", children: "Add more photos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-xs", children: [
        "You need at least 3 approved images to publish this package. You currently have",
        " ",
        approvedCount,
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "label",
      {
        onDragOver: (e) => {
          e.preventDefault();
          setIsDragOver(true);
        },
        onDragLeave: () => setIsDragOver(false),
        onDrop,
        className: cn(
          "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-muted/30 p-6 text-center transition hover:bg-muted/60",
          isDragOver && "border-primary bg-primary/5"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-8 w-8 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-foreground", children: "Drag & drop, or click to upload" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "JPEG, PNG, WebP up to 1920px · MP4 up to 50MB" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "file",
              accept: "image/jpeg,image/png,image/webp,video/mp4",
              multiple: true,
              className: "hidden",
              onChange: onInputChange
            }
          )
        ]
      }
    ),
    uploads.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: uploads.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-foreground", children: u.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-muted-foreground", u.error && "text-destructive"), children: u.error ? u.error : `${u.progress}%` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: u.progress, className: "h-1.5" })
    ] }, u.id)) }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-8 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin" }) }) : items.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      DndContext,
      {
        sensors,
        collisionDetection: closestCenter,
        onDragEnd: handleDragEnd,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SortableContext, { items: items.map((i) => i.id), strategy: rectSortingStrategy, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-3", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          SortableMedia,
          {
            item,
            onPrimary: setPrimary,
            onLabel: updateLabel,
            onRemove: remove
          },
          item.id
        )) }) })
      }
    ) : null
  ] });
}
function SortableMedia({
  item,
  onPrimary,
  onLabel,
  onRemove
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: item.id
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: setNodeRef,
      style,
      className: cn(
        "group relative overflow-hidden rounded-md border border-border bg-card",
        item.is_primary && "ring-2 ring-primary"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ...attributes,
            ...listeners,
            className: "relative aspect-square cursor-grab active:cursor-grabbing",
            children: item.media_type === "video" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full items-center justify-center bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "h-8 w-8 text-muted-foreground" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: item.thumbnail_url ?? item.url,
                alt: item.label ?? "Package media",
                className: "h-full w-full object-cover",
                draggable: false
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => onPrimary(item.id),
            className: cn(
              "absolute left-1.5 top-1.5 rounded-full bg-background/90 p-1.5 backdrop-blur transition hover:bg-background",
              item.is_primary && "bg-primary text-primary-foreground hover:bg-primary"
            ),
            "aria-label": item.is_primary ? "Primary image" : "Set as primary",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Star,
              {
                className: cn("h-3.5 w-3.5", item.is_primary && "fill-current")
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => onRemove(item.id),
            className: "absolute right-1.5 top-1.5 rounded-full bg-background/90 p-1.5 text-destructive opacity-0 backdrop-blur transition hover:bg-background group-hover:opacity-100",
            "aria-label": "Remove",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: item.label ?? "general",
            onValueChange: (v) => onLabel(item.id, v),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-7 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: LABEL_OPTIONS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: o.value, className: "text-xs", children: o.label }, o.value)) })
            ]
          }
        ) })
      ]
    }
  );
}
export {
  PackageMediaManager
};
