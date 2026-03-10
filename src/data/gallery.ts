export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
  /** Portrait (9:16-ish) images get a tall span in the masonry grid */
  portrait?: boolean;
}

export type GalleryCategory =
  | "all"
  | "paint-nights"
  | "community-events"
  | "sports"
  | "workshops"
  | "outreach"
  | "gatherings";

export const GALLERY_CATEGORIES: {
  value: GalleryCategory;
  label: string;
}[] = [
  { value: "all", label: "All Photos" },
  { value: "paint-nights", label: "Paint Nights" },
  { value: "community-events", label: "Community Events" },
  { value: "sports", label: "Sports & Recreation" },
  { value: "workshops", label: "Workshops & Classes" },
  { value: "outreach", label: "Outreach & Partnerships" },
  { value: "gatherings", label: "Gatherings & Meals" },
];

export const galleryImages: GalleryImage[] = [
  // Paint Nights
  {
    src: "/images/community/paint-night-sunset-group.jpg",
    alt: "Large group proudly showing their sunset paintings at a community paint night",
    category: "paint-nights",
  },
  {
    src: "/images/community/paint-night-barn-group.jpg",
    alt: "Farm workers displaying colourful tree paintings at a barn paint night",
    category: "paint-nights",
  },
  {
    src: "/images/community/paint-night-instructor.jpg",
    alt: "Paint night instructor standing proudly beside the evening's sunset painting on an easel",
    category: "paint-nights",
    portrait: true,
  },
  {
    src: "/images/community/paint-night-group.jpg",
    alt: "Community members gathered for a paint night session",
    category: "paint-nights",
  },
  {
    src: "/images/community/paint-night-artwork-1.jpg",
    alt: "Colourful artwork created during a community paint night",
    category: "paint-nights",
  },

  // Community Events
  {
    src: "/images/community/clothing-swap-sorting.jpg",
    alt: "Community members sorting donated clothing at a clothing swap event",
    category: "community-events",
  },
  {
    src: "/images/community/clothing-swap-browsing.jpg",
    alt: "People browsing tables of donated clothes at the community clothing swap",
    category: "community-events",
  },
  {
    src: "/images/community/holiday-gift-giving.jpg",
    alt: "Farm workers receiving holiday gifts at a seasonal celebration",
    category: "community-events",
  },
  {
    src: "/images/community/prize-winners-barn.jpg",
    alt: "Community members with prizes at a barn event celebration",
    category: "community-events",
  },
  {
    src: "/images/community/norfolk-opp-community-event.jpg",
    alt: "Community event with Norfolk County OPP officers and local partners",
    category: "community-events",
  },

  // Sports & Recreation
  {
    src: "/images/community/soccer-team-sunset.jpg",
    alt: "Soccer team celebrating with a trophy at sunset",
    category: "sports",
  },
  {
    src: "/images/community/soccer-team-medals.jpg",
    alt: "Winning soccer team posing with medals and a large trophy",
    category: "sports",
  },
  {
    src: "/images/community/giant-jenga-playing.jpg",
    alt: "Community members playing giant Jenga outside a local church",
    category: "sports",
    portrait: true,
  },
  {
    src: "/images/community/giant-jenga-crowd.jpg",
    alt: "Crowd watching a tense giant Jenga game at a community social",
    category: "sports",
    portrait: true,
  },
  {
    src: "/images/community/giant-jenga-wide.jpg",
    alt: "Wide view of the giant Jenga game at a summer community event",
    category: "sports",
    portrait: true,
  },
  {
    src: "/images/community/barn-activities-games.jpg",
    alt: "Women enjoying team games and activities in a barn",
    category: "sports",
  },

  // Workshops & Classes
  {
    src: "/images/community/bracelet-making-table.jpg",
    alt: "Community members and a firefighter making bead bracelets at a workshop table",
    category: "workshops",
  },
  {
    src: "/images/community/bracelet-making-portrait-1.jpg",
    alt: "Man proudly displaying a handmade bead bracelet at a craft workshop",
    category: "workshops",
    portrait: true,
  },
  {
    src: "/images/community/bracelet-making-portrait-2.jpg",
    alt: "Man in a green cap showing off his handmade bracelet",
    category: "workshops",
    portrait: true,
  },
  {
    src: "/images/community/bracelet-making-portrait-4.jpg",
    alt: "Man wearing sunglasses showing a completed bead bracelet on his wrist",
    category: "workshops",
    portrait: true,
  },
  {
    src: "/images/community/bracelet-making-portrait-5.jpg",
    alt: "Woman smiling while showing a blue bead bracelet she made",
    category: "workshops",
    portrait: true,
  },
  {
    src: "/images/community/esl-language-class.jpg",
    alt: "Participants in an English language class working through workbooks together",
    category: "workshops",
  },
  {
    src: "/images/community/womens-support-group.jpg",
    alt: "Women gathered around a conference table for a support group meeting",
    category: "workshops",
  },
  {
    src: "/images/community/spanish-speaking-group.jpg",
    alt: "Spanish-speaking community members in a group workshop session",
    category: "workshops",
  },
  {
    src: "/images/community/workers-on-tractor.jpg",
    alt: "Women posing on a large JCB tractor during a farm visit",
    category: "workshops",
    portrait: true,
  },

  // Outreach & Partnerships
  {
    src: "/images/community/board-staff-group.jpg",
    alt: "Board and staff group photo at a formal meeting",
    category: "outreach",
  },
  {
    src: "/images/community/ccsyr-staff-portrait.jpg",
    alt: "Three staff members in front of an organisational banner",
    category: "outreach",
    portrait: true,
  },
  {
    src: "/images/community/ccsyr-staff-spanish-banner.jpg",
    alt: "Staff members with a Spanish-language services banner",
    category: "outreach",
    portrait: true,
  },
  {
    src: "/images/community/outreach-banner-barn.jpg",
    alt: "Two outreach workers with an information banner at a farm visit",
    category: "outreach",
    portrait: true,
  },
  {
    src: "/images/community/ccsyr-booth-raffle.jpg",
    alt: "Staff members at a raffle and information booth at a community event",
    category: "outreach",
    portrait: true,
  },
  {
    src: "/images/community/ccsyr-street-team.jpg",
    alt: "Street team members ready for community outreach with flyers",
    category: "outreach",
    portrait: true,
  },
  {
    src: "/images/community/partnership-three-women.jpg",
    alt: "Three women at a partnership event in a community hall",
    category: "outreach",
    portrait: true,
  },
  {
    src: "/images/community/partnership-two-women.jpg",
    alt: "Two partners celebrating their collaboration",
    category: "outreach",
    portrait: true,
  },

  // Gatherings & Meals
  {
    src: "/images/community/community-meeting-families.jpg",
    alt: "Families and community members gathered around a large table for a meeting",
    category: "gatherings",
  },
  {
    src: "/images/community/community-meeting-families-2.jpg",
    alt: "Community gathering with families around tables in a church hall",
    category: "gatherings",
  },
  {
    src: "/images/community/pizza-night-barn.jpg",
    alt: "Volunteer serving stacks of pizza at a barn community night",
    category: "gatherings",
    portrait: true,
  },
  {
    src: "/images/community/barn-community-meal.jpg",
    alt: "Large group eating together at colourful tables in a barn",
    category: "gatherings",
  },
  {
    src: "/images/community/barn-worship-gathering.jpg",
    alt: "Community gathered for a worship and music evening in a barn",
    category: "gatherings",
    portrait: true,
  },
  {
    src: "/images/community/live-music-singing.jpg",
    alt: "Musicians and singers performing live music at a barn gathering",
    category: "gatherings",
  },
  {
    src: "/images/community/community-group.jpg",
    alt: "Community members gathered together outdoors",
    category: "gatherings",
  },
  {
    src: "/images/community/family-gathering.jpg",
    alt: "Families enjoying time together at a community event",
    category: "gatherings",
  },
];
