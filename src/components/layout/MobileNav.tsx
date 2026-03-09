"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, AnimatePresence, useReducedMotion } from "motion/react";
import { X, Phone } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Close on route change
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
    // Only trigger on pathname change, not on initial render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus close button when opened
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  if (shouldReduceMotion) {
    if (!isOpen) return null;

    return (
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 z-40 bg-primary-950/60 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Drawer */}
        <nav
          className="fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-stone-50 shadow-2xl"
          aria-label="Mobile navigation"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex justify-end p-4">
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 text-text-body hover:text-primary-900 transition-colors"
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-col px-6 py-4 gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "block py-3 px-4 font-body text-lg rounded-lg transition-colors",
                  pathname === item.href
                    ? "text-primary-900 bg-stone-100 font-medium"
                    : "text-text-body hover:bg-stone-100 hover:text-primary-900"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-stone-200">
            <a
              href={SITE_CONFIG.phoneHref}
              className="flex items-center gap-3 font-body text-primary-900 font-medium"
            >
              <Phone size={18} aria-hidden="true" />
              {SITE_CONFIG.phone}
            </a>
            <p className="mt-2 text-sm text-text-muted">{SITE_CONFIG.officeHours}</p>
          </div>
        </nav>
      </>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary-950/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <m.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-stone-50 shadow-2xl"
            aria-label="Mobile navigation"
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 text-text-body hover:text-primary-900 transition-colors"
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col px-6 py-4 gap-1">
              {NAV_ITEMS.map((item, i) => (
                <m.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "block py-3 px-4 font-body text-lg rounded-lg transition-colors",
                      pathname === item.href
                        ? "text-primary-900 bg-stone-100 font-medium"
                        : "text-text-body hover:bg-stone-100 hover:text-primary-900"
                    )}
                  >
                    {item.label}
                  </Link>
                </m.div>
              ))}
            </div>

            {/* Phone CTA at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-stone-200">
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex items-center gap-3 font-body text-primary-900 font-medium"
              >
                <Phone size={18} aria-hidden="true" />
                {SITE_CONFIG.phone}
              </a>
              <p className="mt-2 text-sm text-text-muted">{SITE_CONFIG.officeHours}</p>
            </div>
          </m.nav>
        </>
      )}
    </AnimatePresence>
  );
}
