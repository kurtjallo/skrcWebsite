import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Phone, Mail, Clock, MapPin } from "lucide-react";
import { PRIMARY_NAV_ITEMS, SECONDARY_NAV_ITEMS, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

const SOCIAL_ICON_MAP = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
} as const;

export function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* 5-column grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Brand */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="/images/skrc-logo.png"
                alt="St Katharine Rural Connect"
                width={35}
                height={53}
                className="h-12 w-auto transition-opacity hover:opacity-80"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {SITE_CONFIG.tagline}
            </p>
            {/* Social icon links */}
            <div className="mt-6 flex items-center gap-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = SOCIAL_ICON_MAP[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white/50 transition-colors hover:text-white"
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Main pages */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Menu
            </h4>
            <ul className="mt-4 space-y-3">
              {PRIMARY_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: More */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              More
            </h4>
            <ul className="mt-4 space-y-3">
              {SECONDARY_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
                >
                  <Phone size={16} aria-hidden="true" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
                >
                  <Mail size={16} aria-hidden="true" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Clock size={16} aria-hidden="true" />
                {SITE_CONFIG.officeHours}
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <MapPin size={16} aria-hidden="true" />
                {SITE_CONFIG.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-xs text-white/50 sm:text-left" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Scottish
            Charity No. {SITE_CONFIG.charityNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}
