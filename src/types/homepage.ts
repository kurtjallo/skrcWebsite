// Homepage-specific type definitions

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  identifier: string; // e.g. "farmer"
  audience: "farmer" | "offshore" | "family" | "community";
}

export interface Event {
  id: string;
  title: string;
  date: string; // ISO date string
  time: string;
  location: string;
  format: "in-person" | "virtual" | "hybrid";
  type: "workshop" | "social" | "volunteer" | "support";
  audience: ("farmer" | "offshore" | "family" | "community")[];
  description: string;
  slug: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl?: string; // Optional -- use placeholder if not provided
}

export interface ServicePillar {
  id: string;
  title: string; // User-facing plain language name
  description: string;
  icon: string; // Lucide icon name
  slug: string; // URL slug for /services/[slug]
  color: string; // Tailwind color class for accent
}

export interface SelfIdCard {
  id: string;
  label: string; // "Farmer", "Offshore Worker", etc.
  description: string; // Brief one-liner
  href: string; // Link destination
  icon: string; // Lucide icon name
}

export interface ImpactStat {
  id: string;
  value: number;
  suffix?: string; // e.g. "+" or "%"
  label: string;
}
