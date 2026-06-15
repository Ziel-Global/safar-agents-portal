import { Link, useLocation } from "@tanstack/react-router";
import {
  Settings,
  Package,
  Users,
  BarChart3,
  MoonStar,
  Star,
  LayoutDashboard,
  ShieldCheck,
  FolderOpen,
  Megaphone,
  CreditCard,
  Sparkles,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

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
  { title: "Analytics", url: "/agent/analytics", icon: BarChart3 },
  { title: "Billing", url: "/agent/billing", icon: CreditCard },
  { title: "Referrals", url: "/agent/referrals", icon: Users },
  { title: "Articles", url: "/agent/content/new", icon: FolderOpen },
  { title: "Settings", url: "/settings", icon: Settings },
] as const;

export function DashboardSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <Link to="/agent/dashboard" className="flex items-center gap-2 px-2 py-1 font-bold text-sidebar-primary">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
            <MoonStar className="h-4 w-4" />
          </span>
          {!collapsed && <span className="text-lg tracking-tight">Safar Agents</span>}
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Agent</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {agentItems.map((item) => {
                const isActive =
                  location.pathname === item.url ||
                  (item.url === "/agent/packages" &&
                    location.pathname.startsWith("/agent/packages"));
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link to={item.url as "/"} preload="intent">
                        <item.icon className="h-4 w-4" />
                        {!collapsed && <span>{item.title}</span>}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
