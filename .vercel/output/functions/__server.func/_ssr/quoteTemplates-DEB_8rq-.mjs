import { J as FALLBACK_CURRENCIES, K as formatCurrency, s as supabase } from "./router-BZcuc5AB.mjs";
function formatPrice(amount, currency) {
  const meta = FALLBACK_CURRENCIES.find((c) => c.code === currency);
  return formatCurrency(amount, currency, meta?.decimals);
}
const MERGE_FIELDS = [
  "pilgrim_name",
  "package_name",
  "price_total",
  "hotel_name",
  "dates",
  "agent_name",
  "agent_phone"
];
async function listQuoteTemplates(agentId) {
  const { data, error } = await supabase.from("quote_templates").select("*").or(`agent_id.eq.${agentId},is_starter.eq.true`).order("is_starter", { ascending: false }).order("created_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
}
function applyMergeFields(template, values) {
  let out = template;
  for (const key of MERGE_FIELDS) {
    const raw = values[key];
    const replacement = raw === null || raw === void 0 || raw === "" ? `[${key}]` : String(raw);
    out = out.replaceAll(`{{${key}}}`, replacement);
  }
  return out;
}
function buildMergeValues(input) {
  const dates = input.date_from && input.date_to ? `${input.date_from} → ${input.date_to}` : input.date_from || input.date_to || "Flexible";
  const price = input.price_total != null && input.price_currency ? formatPrice(input.price_total, input.price_currency) : "";
  return {
    pilgrim_name: input.pilgrim_name ?? "",
    package_name: input.package_name ?? "",
    price_total: price,
    hotel_name: input.hotel_name ?? "",
    dates,
    agent_name: input.agent_name ?? "",
    agent_phone: input.agent_phone ?? ""
  };
}
function markdownToHtml(md) {
  const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const lines = md.split(/\r?\n/);
  let html = "";
  let inList = false;
  let inTable = false;
  const closeList = () => {
    if (inList) {
      html += "</ul>";
      inList = false;
    }
  };
  const closeTable = () => {
    if (inTable) {
      html += "</tbody></table>";
      inTable = false;
    }
  };
  const inline = (s) => escape(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/`(.+?)`/g, "<code>$1</code>");
  for (const raw of lines) {
    const line = raw.trimEnd();
    if (line.startsWith("|") && line.endsWith("|")) {
      const cells = line.slice(1, -1).split("|").map((c) => c.trim());
      if (cells.every((c) => /^-+$/.test(c.replace(/:/g, "")))) {
        continue;
      }
      if (!inTable) {
        closeList();
        html += '<table class="qt-table"><thead><tr>';
        for (const c of cells) html += `<th>${inline(c)}</th>`;
        html += "</tr></thead><tbody>";
        inTable = true;
        continue;
      }
      {
        html += "<tr>";
        for (const c of cells) html += `<td>${inline(c)}</td>`;
        html += "</tr>";
      }
      continue;
    }
    closeTable();
    if (/^### /.test(line)) {
      closeList();
      html += `<h3>${inline(line.slice(4))}</h3>`;
    } else if (/^## /.test(line)) {
      closeList();
      html += `<h2>${inline(line.slice(3))}</h2>`;
    } else if (/^# /.test(line)) {
      closeList();
      html += `<h1>${inline(line.slice(2))}</h1>`;
    } else if (/^[-*] /.test(line)) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${inline(line.slice(2))}</li>`;
    } else if (line === "") {
      closeList();
      html += "<br/>";
    } else {
      closeList();
      html += `<p>${inline(line)}</p>`;
    }
  }
  closeList();
  closeTable();
  return html;
}
export {
  MERGE_FIELDS as M,
  applyMergeFields as a,
  buildMergeValues as b,
  formatPrice as f,
  listQuoteTemplates as l,
  markdownToHtml as m
};
