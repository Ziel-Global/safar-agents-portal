import { Q as Plane, ai as Building2, aj as Moon, ak as Shield } from "../_libs/lucide-react.mjs";
const BADGE_ICONS = {
  Shield,
  Moon,
  Building2,
  Plane
};
function getBadgeIcon(name) {
  return BADGE_ICONS[name] ?? Shield;
}
function levelFromCount(count) {
  if (count >= 4) return "platinum";
  if (count === 3) return "gold";
  if (count === 2) return "silver";
  if (count === 1) return "bronze";
  return "none";
}
const LEVEL_STYLES = {
  none: "bg-secondary text-muted-foreground border-border",
  bronze: "bg-amber-100 text-amber-900 border-amber-300",
  silver: "bg-slate-100 text-slate-800 border-slate-300",
  gold: "bg-yellow-100 text-yellow-900 border-yellow-400",
  platinum: "bg-primary/10 text-primary border-primary/40"
};
export {
  LEVEL_STYLES as L,
  getBadgeIcon as g,
  levelFromCount as l
};
