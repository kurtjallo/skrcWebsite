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
    alt: "Girls night out",
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
    alt: "Farm workers gathered for a paint night session at NIAW Health Fair",
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
    alt: "Shopping for free at a church event",
    category: "community-events",
  },
  {
    src: "/images/community/clothing-swap-browsing.jpg",
    alt: "Free fun shopping!",
    category: "community-events",
  },
  {
    src: "/images/community/holiday-gift-giving.jpg",
    alt: "Farm workers receiving holiday gifts at a seasonal celebration",
    category: "community-events",
  },
  {
    src: "/images/community/prize-winners-barn.jpg",
    alt: "Christmas game night",
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
    alt: "Crowd watching intense giant Jenga game while shopping in Downtown Simcoe",
    category: "sports",
    portrait: true,
  },
  {
    src: "/images/community/barn-activities-games.jpg",
    alt: "Games night on a farm",
    category: "sports",
  },

  // Workshops & Classes
  {
    src: "/images/community/bracelet-making-portrait-2.jpg",
    alt: "IAW Health Fair event",
    category: "workshops",
    portrait: true,
  },
  {
    src: "/images/community/bracelet-making-portrait-4.jpg",
    alt: "IAW event",
    category: "workshops",
    portrait: true,
  },
  {
    src: "/images/community/bracelet-making-portrait-5.jpg",
    alt: "Smiling while showing a bracelet he made",
    category: "workshops",
    portrait: true,
  },
  {
    src: "/images/community/esl-language-class.jpg",
    alt: "Participants in a class",
    category: "workshops",
  },
  {
    src: "/images/community/womens-support-group.jpg",
    alt: "Mixed English and Spanish support class",
    category: "workshops",
  },
  {
    src: "/images/community/workers-on-tractor.jpg",
    alt: "Posing for a photoshoot",
    category: "workshops",
    portrait: true,
  },

  // Outreach & Partnerships
  {
    src: "/images/community/ccsyr-booth-raffle.jpg",
    alt: "Leanne and Bobbi-Ann Brady, MPP of Norfolk Haldimand",
    category: "outreach",
    portrait: true,
  },
  {
    src: "/images/community/partnership-three-women.jpg",
    alt: "Hazel Hernandez, Consulate General of El Salvador, visiting our office. Maureen from IAW",
    category: "outreach",
    portrait: true,
  },
  {
    src: "/images/community/partnership-two-women.jpg",
    alt: "Language support class",
    category: "outreach",
    portrait: true,
  },

  // Gatherings & Meals
  {
    src: "/images/community/community-meeting-families.jpg",
    alt: "English language support",
    category: "gatherings",
  },
  {
    src: "/images/community/pizza-night-barn.jpg",
    alt: "SKRC board member serving pizza at a games night",
    category: "gatherings",
    portrait: true,
  },
  {
    src: "/images/community/barn-community-meal.jpg",
    alt: "Games night!",
    category: "gatherings",
  },
  {
    src: "/images/community/barn-worship-gathering.jpg",
    alt: "Praise and worship night on a farm",
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
    alt: "Bingo night on a farm",
    category: "gatherings",
  },
];
