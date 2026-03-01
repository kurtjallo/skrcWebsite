import type { Partner } from "@/types";

export const partners: Partner[] = [
  {
    id: "partner-1",
    name: "RSABI",
    logoUrl: "/images/partners/rsabi.svg",
    description: "Royal Scottish Agricultural Benevolent Institution",
    url: "https://rsabi.org.uk",
  },
  {
    id: "partner-2",
    name: "Farming Community Network",
    logoUrl: "/images/partners/fcn.svg",
    description: "Supporting farming families across the UK",
  },
  {
    id: "partner-3",
    name: "NHS Grampian",
    logoUrl: "/images/partners/nhs-grampian.svg",
    description: "Regional health services",
  },
  {
    id: "partner-4",
    name: "Aberdeenshire Council",
    logoUrl: "/images/partners/aberdeenshire.svg",
    description: "Local government services and community support",
  },
  {
    id: "partner-5",
    name: "SAMH",
    logoUrl: "/images/partners/samh.svg",
    description: "Scottish Association for Mental Health",
  },
  {
    id: "partner-6",
    name: "Rural Support NI",
    logoUrl: "/images/partners/rural-support.svg",
    description: "Supporting rural communities in Northern Ireland",
  },
];

export const partnershipApproach: string[] = [
  "Community organisations, agricultural networks, and mental health providers",
  "Local service agencies, municipalities, and faith communities",
  "Education and training partners, and businesses committed to rural wellbeing",
];
