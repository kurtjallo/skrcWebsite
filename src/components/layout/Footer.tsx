import Link from "next/link";
import { Facebook, Twitter, Instagram, Phone, Mail, Clock, MapPin } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

const SOCIAL_ICON_MAP = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
} as const;

export function Footer() {
  const menuLinks = NAV_ITEMS.slice(0, 5);

  return (
    <footer className="bg-primary-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <p className="font-heading text-xl text-white">
              St Katharine Rural Connect
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {SITE_CONFIG.tagline}
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded border border-white/30 px-5 py-2 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>

          {/* Column 2: Menu */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Menu
            </h4>
            <ul className="mt-4 space-y-3">
              {menuLinks.map((item) => (
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

          {/* Column 3: Socials */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Socials
            </h4>
            <ul className="mt-4 space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
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
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Copyright + charity number */}
            <p className="text-center text-xs text-white/50 sm:text-left">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Scottish
              Charity No. {SITE_CONFIG.charityNumber}
            </p>

            {/* Social icon links */}
            <div className="flex items-center gap-4">
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
        </div>
      </div>
    </footer>
  );
}
