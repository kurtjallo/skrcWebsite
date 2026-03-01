// Audience segment type definitions for /who-we-serve page

export interface AccessPoint {
  method: string; // e.g. "Phone/email"
  description: string; // e.g. "Call or email us directly"
}

export interface AudienceSegment {
  id: string; // e.g. "farmers"
  name: string; // e.g. "Farmers and Agricultural Workers"
  shortName: string; // e.g. "Farmers" (for cards/nav)
  description: string; // 2-3 sentences about how SKRC serves them
  relevantPillarIds: string[]; // IDs of relevant service pillars
  accessPoints: AccessPoint[];
  testimonial?: {
    quote: string;
    name: string;
    identifier: string;
  };
}
