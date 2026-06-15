import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { MoonStar } from "lucide-react";
import { PageTransition } from "@/components/ui/page-transition";

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border px-4 py-4 sm:px-6">
        <Link to="/login" className="inline-flex items-center gap-2 font-bold text-primary">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <MoonStar className="h-5 w-5" />
          </span>
          <span className="text-xl tracking-tight">Safar Agents</span>
        </Link>
      </header>
      <main className="flex flex-1 flex-col">
        <PageTransition>{children}</PageTransition>
      </main>
    </div>
  );
}
