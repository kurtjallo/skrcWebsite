/**
 * Placeholder images from Unsplash for development.
 * Replace with real photos before production launch.
 */

const unsplash = (id: string, w = 1920, h = 1080) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80`;

// ── Hero / landscape images ──────────────────────────────────────
export const HERO_IMAGES = {
  /** Homepage — Scottish highlands panorama */
  home: unsplash("photo-1506905925346-21bda4d32df4"),
  /** About page — rural countryside */
  about: unsplash("photo-1501854140801-50d01698950b"),
  /** Services page — green farmland */
  services: unsplash("photo-1500382017468-9049fed747ef"),
  /** Events page — outdoor community gathering */
  events: unsplash("photo-1511795409834-ef04bbd61622"),
  /** Team page — people working together */
  team: unsplash("photo-1522071820081-009f0129c71c"),
  /** Testimonials page — warm community */
  testimonials: unsplash("photo-1529156069898-49953e39b3ac"),
  /** FAQ page — conversation setting */
  faq: unsplash("photo-1516321497487-e288fb19713f"),
  /** Get Involved page — volunteers */
  getInvolved: unsplash("photo-1559027615-cd4628902d4a"),
  /** Partnerships page — collaboration */
  partnerships: unsplash("photo-1552664730-d307ca884978"),
  /** Who We Serve page — rural families */
  whoWeServe: unsplash("photo-1491438590914-bc09fcaaf77a"),
} as const;

// ── Pre-footer CTA images ────────────────────────────────────────
export const CTA_IMAGES = {
  /** Generic CTA — countryside path */
  generic: unsplash("photo-1441974231531-c6227db76b6e"),
  /** Services CTA — green hills */
  services: unsplash("photo-1470071459604-3b5ec3a7fe05"),
  /** About CTA — community connection */
  about: unsplash("photo-1517486808906-6ca8b3f04846"),
} as const;

// ── Service pillar images ────────────────────────────────────────
export const SERVICE_IMAGES = {
  /** Wellness & Mental Health */
  wellness: unsplash("photo-1544027993-37dbfe43562a", 800, 600),
  /** Agricultural Support */
  agriculture: unsplash("photo-1500595046743-cd271d694d30", 800, 600),
  /** Offshore Worker Support */
  offshore: unsplash("photo-1505118380757-91f5f5632de0", 800, 600),
  /** Community Connection */
  community: unsplash("photo-1529156069898-49953e39b3ac", 800, 600),
} as const;

// ── Portrait photos ──────────────────────────────────────────────
export const PORTRAITS = {
  man1: unsplash("photo-1507003211169-0a1dd7228f2d", 400, 500),
  woman1: unsplash("photo-1438761681033-6461ffad8d80", 400, 500),
  man2: unsplash("photo-1472099645785-5658abf4ff4e", 400, 500),
  woman2: unsplash("photo-1494790108377-be9c29b29330", 400, 500),
  man3: unsplash("photo-1500648767791-00dcc994a43e", 400, 500),
  woman3: unsplash("photo-1580489944761-15a19d654956", 400, 500),
  man4: unsplash("photo-1560250097-0b93528c311a", 400, 500),
} as const;

// ── Misc section images ──────────────────────────────────────────
export const SECTION_IMAGES = {
  /** About page — mission card */
  mission: unsplash("photo-1517486808906-6ca8b3f04846", 800, 600),
  /** About page — vision section */
  vision: unsplash("photo-1470071459604-3b5ec3a7fe05", 1200, 600),
  /** Homepage — Our Approach left column */
  approach: unsplash("photo-1464226184884-fa280b87c399", 800, 1000),
  /** Impact stories */
  impact1: unsplash("photo-1464226184884-fa280b87c399", 1200, 800),
  impact2: unsplash("photo-1500382017468-9049fed747ef", 1200, 800),
} as const;
