"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { PRIMARY_NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { MobileNav } from "./MobileNav";

export function Header() {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleOpenMobileNav = useCallback(() => {
    setIsMobileNavOpen(true);
  }, []);

  const handleCloseMobileNav = useCallback(() => {
    setIsMobileNavOpen(false);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full bg-surface-page/95 backdrop-blur-sm border-b border-divider"
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
        {/* Logo — intentionally oversized, overlaps nav bar */}
        <Link href="/" className="relative z-10 shrink-0 -my-4">
          <Image
            src="/images/skrc-logo.png"
            alt="St Katharine Rural Connect"
            width={93}
            height={140}
            className="h-32 w-auto drop-shadow-sm transition-opacity hover:opacity-80"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-5">
          {PRIMARY_NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative font-body font-medium text-sm whitespace-nowrap transition-colors",
                "text-text-body hover:text-primary-900",
                "after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px]",
                "after:bg-accent-400 after:origin-left",
                "after:transition-transform after:duration-400 after:ease-premium",
                pathname === item.href
                  ? "text-primary-900 after:scale-x-100"
                  : "after:scale-x-0 hover:after:scale-x-100"
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE_CONFIG.zeffyDonateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-md bg-sky-200 px-5 py-2 font-body text-sm font-semibold text-sky-800 transition-colors hover:bg-sky-300"
          >
            Donate
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="xl:hidden p-2 transition-colors text-text-body hover:text-primary-900"
          aria-label="Open menu"
          onClick={handleOpenMobileNav}
        >
          <Menu size={24} aria-hidden="true" />
        </button>
      </div>

      {/* Mobile navigation drawer */}
      <MobileNav isOpen={isMobileNavOpen} onClose={handleCloseMobileNav} />
    </header>
  );
}
