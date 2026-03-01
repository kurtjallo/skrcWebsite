import Link from "next/link";
import { Facebook, Twitter, Instagram, Phone, Mail, Clock, MapPin } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

const SOCIAL_ICON_MAP = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
} as const;

export function Footer() {
  const quickLinks = NAV_ITEMS.slice(0, 5);
  const moreLinks = NAV_ITEMS.slice(5);

  return (
    <footer className="bg-primary-950 text-stone-100">
      <div className="mx-auto max-w-7xl py-16 px-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <h3 className="font-heading text-xl text-stone-50 mb-4">
              St Katharine Rural Connect
            </h3>
            <p className="text-stone-300 text-sm leading-relaxed mb-4">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-stone-400 text-sm">
              Scottish Charity No. {SITE_CONFIG.charityNumber}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-accent-500 font-body font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-stone-300 text-sm transition-colors hover:text-accent-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: More Links */}
          <div>
            <h4 className="text-accent-500 font-body font-semibold text-sm uppercase tracking-wider mb-4">
              More
            </h4>
            <ul className="space-y-3">
              {moreLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-stone-300 text-sm transition-colors hover:text-accent-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-accent-500 font-body font-semibold text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="flex items-center gap-2 text-stone-300 transition-colors hover:text-accent-400"
                >
                  <Phone size={16} aria-hidden="true" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-stone-300 transition-colors hover:text-accent-400"
                >
                  <Mail size={16} aria-hidden="true" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-stone-300">
                <Clock size={16} aria-hidden="true" />
                {SITE_CONFIG.officeHours}
              </li>
              <li className="flex items-center gap-2 text-stone-300">
                <MapPin size={16} aria-hidden="true" />
                {SITE_CONFIG.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-stone-400 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Scottish Charity No.{" "}
              {SITE_CONFIG.charityNumber}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = SOCIAL_ICON_MAP[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-stone-400 transition-colors hover:text-accent-400"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
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
