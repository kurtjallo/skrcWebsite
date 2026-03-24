// Event type definitions for /events pages

export type EventAudience = "farmers" | "offshore" | "families" | "community" | "women" | "seniors";
export type EventType = "workshop" | "social" | "volunteer" | "support";
export type EventFormat = "in-person" | "virtual" | "hybrid";

export interface Event {
  slug: string;
  title: string;
  description: string; // Full description for detail page (2-4 sentences)
  date: string; // ISO date string e.g. "2026-04-15"
  time: string; // Display time e.g. "10:00 AM"
  endTime?: string; // Optional e.g. "12:00 PM"
  location: string; // Venue or "Online" or "Online + [venue]"
  audience: EventAudience[]; // Can serve multiple audiences
  type: EventType;
  format: EventFormat;
  image?: string; // Optional image path
  featured?: boolean; // For homepage preview
}

export const AUDIENCE_LABELS: Record<EventAudience, string> = {
  farmers: "Farmers",
  offshore: "Offshore Workers",
  families: "Families",
  community: "All Community",
  women: "Women",
  seniors: "Seniors",
};

export const TYPE_LABELS: Record<EventType, string> = {
  workshop: "Workshop",
  social: "Social",
  volunteer: "Volunteer",
  support: "Support",
};

export const FORMAT_LABELS: Record<EventFormat, string> = {
  "in-person": "In Person",
  virtual: "Virtual",
  hybrid: "Hybrid",
};
