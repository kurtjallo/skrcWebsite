// Service pillar type definitions for /services pages

export interface ServicePillar {
  id: string; // e.g. "wellbeing"
  slug: string; // URL slug e.g. "supporting-your-wellbeing"
  name: string; // User-facing plain language name
  orgName: string; // Organizational/internal name
  tagline: string; // One-line description for cards
  whoItsFor: string; // "Who it's for" -- one sentence about the person, not the problem
  whatHappens: string; // "What happens" -- 2-3 sentences about the experience
  howToGetStarted: string; // "How to get started" -- single clear action step
  services: string[]; // List of specific service offerings
  icon: string; // Lucide icon name (e.g. "Heart", "Wheat", "Anchor", "Users")
  testimonial?: {
    quote: string;
    name: string;
    identifier: string; // e.g. "dairy farmer near Huntly"
  };
}
