import type { Metadata } from "next";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Links | ${SITE_CONFIG.name}`,
  description: SITE_CONFIG.tagline,
};

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
};

const ACTION_LINKS = [
  { label: "Visit Our Website", href: "/" },
  { label: "Get in Touch", href: "/contact" },
  { label: "See Upcoming Events", href: "/events" },
  { label: "Our Services", href: "/services" },
  { label: "Donate", href: "/get-involved" },
] as const;

export default function LinksPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      {/* Subtle radial glow behind profile */}
      <div
        className="pointer-events-none fixed inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 30%, rgba(59,59,255,0.15), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-sm">
        {/* Profile */}
        <div className="text-center mb-10">
          {/* Initials circle */}
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-accent-500/20 border border-accent-500/30">
            <span className="font-heading text-2xl font-semibold text-accent-400">
              SK
            </span>
          </div>

          <h1 className="font-heading text-2xl font-semibold text-white">
            {SITE_CONFIG.name}
          </h1>
          <p className="mt-2 font-body text-sm text-white/60">
            {SITE_CONFIG.tagline}
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {SOCIAL_LINKS.map((link) => {
            const Icon = ICON_MAP[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:border-accent-400 hover:text-accent-400 hover:bg-accent-400/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
              </a>
            );
          })}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-3">
          {ACTION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block w-full rounded-full border border-white/20 px-6 py-3.5 text-center font-body text-base font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Footer charity info */}
        <p className="mt-10 text-center font-body text-xs text-white/30">
          Scottish Charity {SITE_CONFIG.charityNumber}
        </p>
      </div>
    </div>
  );
}
