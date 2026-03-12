import Link from "next/link";
import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Links",
  description: SITE_CONFIG.tagline,
  path: "/links",
});

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
          {/* Logo */}
          <Image
            src="/images/skrc-logo.png"
            alt="St Katharine Rural Connect"
            width={107}
            height={160}
            className="mx-auto mb-5 h-32 w-auto"
          />

          <h1 className="font-heading text-2xl font-semibold text-white">
            {SITE_CONFIG.name}
          </h1>
          <p className="mt-2 font-body text-sm text-white/60">
            {SITE_CONFIG.tagline}
          </p>
        </div>


        {/* Action buttons */}
        <div className="flex flex-col gap-3">
          {ACTION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block w-full rounded-full border border-white/20 px-6 py-3.5 text-center font-body text-base font-medium text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-10 text-center font-body text-xs text-white/30">
          {SITE_CONFIG.email}
        </p>
      </div>
    </div>
  );
}
