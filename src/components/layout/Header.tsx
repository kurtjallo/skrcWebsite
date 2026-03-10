"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { PRIMARY_NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

interface HeaderProps {
  variant?: "solid" | "transparent";
}

export function Header({ variant }: HeaderProps) {
  const pathname = usePathname();
  const resolvedVariant = variant ?? (pathname === "/" ? "transparent" : "solid");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleOpenMobileNav = useCallback(() => {
    setIsMobileNavOpen(true);
  }, []);

  const handleCloseMobileNav = useCallback(() => {
    setIsMobileNavOpen(false);
  }, []);

  // Scroll detection for transparent -> solid transition
  useEffect(() => {
    if (resolvedVariant !== "transparent") return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [resolvedVariant]);

  const isTransparent = resolvedVariant === "transparent" && !scrolled;

  return (
    <header
      className={cn(
        resolvedVariant === "transparent" ? "fixed" : "sticky",
        "top-0 z-50 w-full transition-colors duration-300",
        isTransparent
          ? "bg-transparent"
          : "bg-surface-page/95 backdrop-blur-sm border-b border-divider"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
        {/* Logo — intentionally oversized, overlaps nav bar */}
        <Link href="/" className="relative z-10 shrink-0 -my-4">
          <Image
            src="/images/skrc-logo.png"
            alt="St Katharine Rural Connect"
            width={80}
            height={120}
            className="h-28 w-auto drop-shadow-sm transition-opacity hover:opacity-80"
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
                isTransparent
                  ? "text-white/90 hover:text-white"
                  : "text-text-body hover:text-primary-900",
                "after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px]",
                "after:bg-accent-400 after:origin-left",
                "after:transition-transform after:duration-400 after:ease-premium",
                pathname === item.href
                  ? cn(
                      isTransparent ? "text-white" : "text-primary-900",
                      "after:scale-x-100"
                    )
                  : "after:scale-x-0 hover:after:scale-x-100"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={cn(
            "xl:hidden p-2 transition-colors",
            isTransparent
              ? "text-white hover:text-white/80"
              : "text-text-body hover:text-primary-900"
          )}
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
