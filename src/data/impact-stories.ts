import { SERVICE_IMAGES, SECTION_IMAGES } from "@/lib/placeholders";

export interface ImpactStory {
  id: string;
  headline: string;
  description: string;
  tags: { text: string; variant: "filled" | "outline" }[];
  imageUrl: string;
  href: string;
}

export const impactStories: ImpactStory[] = [
  {
    id: "story-farmers-peer-support",
    headline: "Bringing Farmers Together Through Peer Support",
    description:
      "How community-led support groups are helping farmers share the load and find strength in shared experience.",
    tags: [
      { text: "Agricultural Support", variant: "filled" },
      { text: "Community", variant: "outline" },
    ],
    imageUrl: SERVICE_IMAGES.agriculture,
    href: "/services/supporting-farm-life",
  },
  {
    id: "story-offshore-families",
    headline: "Supporting Offshore Families Through Separation",
    description:
      "Building connections and resilience for families navigating the challenges of rotational work.",
    tags: [
      { text: "Offshore Support", variant: "filled" },
      { text: "Families", variant: "outline" },
    ],
    imageUrl: SERVICE_IMAGES.offshore,
    href: "/services/supporting-those-who-work-away",
  },
  {
    id: "story-rural-resilience",
    headline: "Building Resilience in Rural Communities",
    description:
      "From workshops to volunteer networks, see how community-driven programmes are creating lasting change.",
    tags: [
      { text: "Community Wellness", variant: "filled" },
      { text: "Development", variant: "outline" },
    ],
    imageUrl: SECTION_IMAGES.impact1,
    href: "/services/strengthening-our-community",
  },
];
