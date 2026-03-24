/**
 * Site image paths – real photos from the organisation.
 * Images are stored in public/images/ and served locally.
 *
 * IMPORTANT: Every image path must be unique across ALL collections.
 * No image should appear in more than one place.
 */

// ── Community videos ─────────────────────────────────────────────
export const COMMUNITY_VIDEOS = {
  /** Outdoor games day — relay/bucket game on the field */
  outdoorGames: "/videos/skrc-video-1.mp4",
  /** Indoor social — card and board games at community hall */
  indoorGathering: "/videos/skrc-video-2.mp4",
  /** Event setup — barn venue with medals and decorations */
  eventSetup: "/videos/skrc-video-3.mp4",
  /** Outdoor community meal — long table in a garden */
  communityMeal: "/videos/skrc-video-4.mp4",
  /** Indoor group activity — warehouse gathering with ball game */
  indoorActivity: "/videos/skrc-video-5.mp4",
  /** Paint night — sunflower painting at a colourful table */
  paintNight: "/videos/skrc-video-6.mp4",
} as const;

// ── Hero / landscape images ──────────────────────────────────────
export const HERO_IMAGES = {
  /** Homepage — tractor planting in open field */
  home: "/images/farm/tractor-planting.jpg",
  /** About page — board and staff group photo */
  about: "/images/community/board-staff-group.jpg",
  /** Services page — tomato harvest workers */
  services: "/images/farm/tomato-harvest.jpg",
  /** Events page — community paint night sunset group */
  events: "/images/community/paint-night-sunset-group.jpg",
  /** Team page — greenhouse workers */
  team: "/images/farm/greenhouse-workers.jpg",
  /** Testimonials page — asparagus packing (smiling worker) */
  testimonials: "/images/farm/asparagus-packing.jpg",
  /** FAQ page — welcome centre art class */
  faq: "/images/community/welcome-centre-art.jpg",
  /** Get Involved page — outdoor giant Jenga community game */
  getInvolved: "/images/community/giant-jenga-playing.jpg",
  /** Partnerships page — Norfolk OPP community event */
  partnerships: "/images/community/norfolk-opp-community-event.jpg",
  /** Who We Serve page — apple orchard worker */
  whoWeServe: "/images/farm/apple-orchard-worker.jpg",
  /** Gallery page — paint night painting activity */
  gallery: "/images/community/paint-night-group.jpg",
  /** Community page — barn activities and games */
  community: "/images/community/barn-activities-games.jpg",
} as const;

// ── Pre-footer CTA images ────────────────────────────────────────
export const CTA_IMAGES = {
  /** Generic CTA — workers in planted field */
  generic: "/images/farm/workers-planted-field.jpg",
  /** Services CTA — asparagus field worker */
  services: "/images/farm/asparagus-field-worker.jpg",
  /** About CTA — paint night barn group */
  about: "/images/community/paint-night-barn-group.jpg",
  /** Community CTA — worship gathering in barn */
  community: "/images/community/barn-worship-gathering.jpg",
} as const;

// ── Service pillar images ────────────────────────────────────────
export const SERVICE_IMAGES = {
  /** Wellness & Mental Health — women's support group meeting */
  wellness: "/images/community/womens-support-group.jpg",
  /** Agricultural Support — workers on tractor */
  agriculture: "/images/community/workers-on-tractor.jpg",
  /** Offshore Worker Support — field worker portrait */
  offshore: "/images/farm/field-worker-portrait.jpg",
  /** Community Connection — community meeting with families */
  community: "/images/community/community-meeting-families.jpg",
} as const;

// ── Portrait photos ──────────────────────────────────────────────
export const PORTRAITS = {
  man1: "/images/farm/workers-tractor-barn.jpg",
  woman1: "/images/community/partnership-three-women.jpg",
  man2: "/images/farm/apple-picker.jpg",
  woman2: "/images/community/bracelet-making-portrait-5.jpg",
  man3: "/images/community/bracelet-making-portrait-1.jpg",
  woman3: "/images/community/paint-night-artwork-2.jpg",
  man4: "/images/community/paint-night-artwork-1.jpg",
  /** Featured testimonial avatar — bracelet-making portrait */
  featured: "/images/community/bracelet-making-portrait-4.jpg",
} as const;

// ── Misc section images ──────────────────────────────────────────
export const SECTION_IMAGES = {
  /** About page — mission card (live music singing in barn) */
  mission: "/images/community/live-music-singing.jpg",
  /** About page — vision section (community meal in barn) */
  vision: "/images/community/barn-community-meal.jpg",
  /** Homepage — Our Approach left column (community meeting) */
  approach: "/images/community/community-meeting-families-2.jpg",
  /** Impact stories — soccer team medals */
  impact1: "/images/community/soccer-team-medals.jpg",
  /** Impact stories — soccer team sunset celebration */
  impact2: "/images/community/soccer-team-sunset.jpg",
} as const;

// ── Impact story images (unique per story) ───────────────────────
export const IMPACT_IMAGES = {
  /** Farmers peer support story — asparagus cutting in field */
  farmSupport: "/images/farm/asparagus-cutting.jpg",
  /** Offshore families story — family gathering outdoors */
  offshoreFamily: "/images/community/family-gathering.jpg",
  /** Rural resilience story — community group portrait */
  ruralResilience: "/images/community/community-group.jpg",
} as const;
