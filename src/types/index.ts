// Shared types for the SKRC website
// Types will be added as features are built

export type AudienceSegment = "farmer" | "offshore-worker" | "family" | "community";

export type EventFormat = "in-person" | "virtual" | "hybrid";

export type EventType = "workshop" | "social" | "volunteer" | "support";

export interface TeamMember {
  id: string;
  name: string;
  role: string; // e.g., "Chair" for board, "Executive Director" for staff
  bio: string; // 2-3 sentence bio
  connection: string; // Rural/community connection (board) or area of responsibility (staff)
  imageUrl?: string; // Optional placeholder path
  group: "board" | "staff";
}

export interface Testimonial {
  id: string;
  quote: string;
  firstName: string;
  identifier: string; // e.g., "dairy farmer near Huntly"
  segment: AudienceSegment; // Reuse existing AudienceSegment type
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string; // Path to logo image (placeholder)
  description?: string; // Optional short description
  url?: string; // Optional partner website URL
}

export interface InvolvementOption {
  id: string;
  title: string; // e.g., "Volunteer With Us"
  description: string; // What this involvement means
  ctaText: string; // CTA button text
  ctaHref: string; // Where the CTA links
  icon: string; // Lucide icon name
}
