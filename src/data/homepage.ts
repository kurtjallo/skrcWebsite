import type { ServicePillar, SelfIdCard, ImpactStat } from "@/types/homepage";

export const servicePillars: ServicePillar[] = [
  {
    id: "wellbeing",
    title: "Supporting Your Wellbeing",
    description:
      "Whether you're dealing with stress, loneliness, or just a difficult season, we're here to listen and help you find the right support.",
    icon: "Heart",
    slug: "supporting-your-wellbeing",
    color: "accent-500",
  },
  {
    id: "farm-life",
    title: "Supporting Farm Life",
    description:
      "Farming is more than a job -- it's a way of life. We offer practical support, peer connection, and help navigating the pressures of life on the land.",
    icon: "Wheat",
    slug: "supporting-farm-life",
    color: "accent-500",
  },
  {
    id: "work-away",
    title: "Supporting Those Who Work Away",
    description:
      "For offshore, rotational, and remote workers -- and the families who hold things together back home. We're here wherever you are.",
    icon: "Anchor",
    slug: "supporting-those-who-work-away",
    color: "accent-500",
  },
  {
    id: "community",
    title: "Strengthening Our Community",
    description:
      "Community doesn't just happen -- it takes people showing up. Join us for events, workshops, volunteering, and everything in between.",
    icon: "Users",
    slug: "strengthening-our-community",
    color: "accent-500",
  },
];

export const selfIdCards: SelfIdCard[] = [
  {
    id: "farmer",
    label: "Farmer",
    description: "Find support tailored to life on the farm.",
    href: "/who-we-serve#farmers",
    icon: "Tractor",
  },
  {
    id: "offshore",
    label: "Offshore Worker",
    description: "Stay connected to support, wherever you're working.",
    href: "/who-we-serve#offshore",
    icon: "Ship",
  },
  {
    id: "family",
    label: "Family Member",
    description: "Support for those holding things together at home.",
    href: "/who-we-serve#families",
    icon: "Home",
  },
  {
    id: "community",
    label: "Community Member",
    description: "Get involved, connect, and be part of something good.",
    href: "/who-we-serve#community",
    icon: "HandHeart",
  },
];

export const impactStats: ImpactStat[] = [
  {
    id: "people-supported",
    value: 500,
    suffix: "+",
    label: "People Supported",
  },
  {
    id: "events-hosted",
    value: 50,
    suffix: "+",
    label: "Events Hosted",
  },
  {
    id: "community-partners",
    value: 20,
    suffix: "+",
    label: "Community Partners",
  },
  {
    id: "service-areas",
    value: 4,
    label: "Service Areas",
  },
];
