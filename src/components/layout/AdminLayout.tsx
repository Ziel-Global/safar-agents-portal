import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { MoonStar } from "lucide-react";
import { UserMenu } from "@/components/auth/UserMenu";

export function AdminLayout({ children, title }: { children: ReactNode; title: string }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur sm:px-6">
        <Link to="/admin/access-requests" className="flex items-center gap-2 font-bold text-primary">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <MoonStar className="h-4 w-4" />
          </span>
          <span className="text-sm tracking-tight">Safar Admin</span>
        </Link>
        <h1 className="ml-4 text-sm font-semibold text-foreground">{title}</h1>
        <div className="ml-auto">
          <UserMenu />
        </div>
      </header>
      <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
