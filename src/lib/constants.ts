export type NavItem = {
  readonly label: string;
  readonly href: string;
};

export type SocialLink = {
  readonly label: string;
  readonly href: string;
  readonly icon: "facebook" | "twitter" | "instagram";
};

export const SITE_CONFIG = {
  name: "St Katharine Rural Connect",
  shortName: "SKRC",
  phone: "01234 567890",
  phoneHref: "tel:+441234567890",
  email: "hello@skrc.org.uk",
  charityNumber: "SC000000",
  officeHours: "Monday - Friday, 9am - 5pm",
  location: "Rural Scotland",
  tagline: "Support, connection, and care for rural communities",
  url: "https://skrc.org.uk",
  locale: "en-GB",
  formspreeEndpoint: "https://formspree.io/f/xbdzoywa",
} as const;

export const PRIMARY_NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Events", href: "/events" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
] as const;

export const SECONDARY_NAV_ITEMS: readonly NavItem[] = [
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Community", href: "/community" },
  { label: "Gallery", href: "/gallery" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Team", href: "/team" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
] as const;

export const NAV_ITEMS: readonly NavItem[] = [
  ...PRIMARY_NAV_ITEMS,
  ...SECONDARY_NAV_ITEMS,
] as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Twitter", href: "#", icon: "twitter" },
  { label: "Instagram", href: "#", icon: "instagram" },
] as const;
