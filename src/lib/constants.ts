export const siteConfig = {
  name: "St Katharine Rural Connect",
  description: "Support, connection, and care for rural communities",
  url: "https://stkatharine-ruralconnect.org",
  locale: "en-GB",
} as const;

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Events", href: "/events" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
] as const;
