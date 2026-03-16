"use client";

import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/lib/constants";

export function UtilityBar() {
  const pathname = usePathname();

  // Hide on homepage — hero has its own crisis line, and header is transparent/fixed
  if (pathname === "/") return null;

  return (
    <div className="bg-primary-950 text-stone-100 py-2">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <div className="flex items-center gap-6 font-body text-sm ml-auto">
          <a
            href="/contact"
            className="text-stone-100 underline-offset-4 transition-colors hover:text-accent-400 hover:underline"
          >
            Need Support?
          </a>
          <a
            href={SITE_CONFIG.zeffyDonateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 underline-offset-4 transition-colors hover:text-accent-400 hover:underline"
          >
            Donate
          </a>
        </div>
      </div>
    </div>
  );
}
