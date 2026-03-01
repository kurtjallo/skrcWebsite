"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-stone-50 border-b border-stone-200">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading font-semibold text-2xl text-primary-900 transition-colors hover:text-primary-700"
        >
          St Katharine Rural Connect
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative font-body font-medium text-base text-text-body transition-colors hover:text-primary-900",
                "after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px]",
                "after:bg-accent-500 after:origin-left",
                "after:transition-transform after:duration-400 after:ease-premium",
                pathname === item.href
                  ? "text-primary-900 after:scale-x-100"
                  : "after:scale-x-0 hover:after:scale-x-100"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-text-body hover:text-primary-900 transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
