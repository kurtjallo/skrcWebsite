import type { AudienceSegment } from "@/types/audience";

export const audienceSegments: AudienceSegment[] = [
  {
    id: "farmers",
    name: "Farmers and Agricultural Workers",
    shortName: "Farmers",
    description:
      "Whether you're managing a family farm, working the land as part of a team, or carrying the weight of a difficult season, we understand the unique pressures of agricultural life. We're here with practical support, peer connection, and a listening ear -- whenever you need it.",
    relevantPillarIds: ["wellbeing", "farm-life"],
    accessPoints: [
      {
        method: "Phone or email",
        description: "Call or email us directly",
      },
      {
        method: "Online form",
        description: "Fill in our contact form",
      },
      {
        method: "Partner referrals",
        description: "Referred through one of our partner organisations",
      },
      {
        method: "Farm workshops",
        description: "Drop in at one of our farm-focused sessions",
      },
    ],
    testimonial: {
      quote:
        "Running a farm can be overwhelming, especially when everything feels like it depends on you. St Katharine Rural Connect gave us more than information -- they gave us support we could actually use, and people who understood the pressures we were under. It made us feel less alone.",
      name: "James",
      identifier: "farmer",
    },
  },
  {
    id: "offshore-workers",
    name: "Offshore, Rotational, and Remote Workers",
    shortName: "Offshore Workers",
    description:
      "Working away from home comes with unique challenges -- for you and for the people who matter most. Whether you're on a rig, at sea, or working remotely, we offer support that fits around your schedule and understands your working life.",
    relevantPillarIds: ["wellbeing", "work-away"],
    accessPoints: [
      {
        method: "Remote or virtual contact",
        description: "Phone, video call, or online chat",
      },
      {
        method: "Flexible scheduling",
        description: "We work around your rotation",
      },
      {
        method: "Before, during, or after deployment",
        description: "Support at every stage",
      },
    ],
    testimonial: {
      quote:
        "When you work away for long periods, it can feel like you're disconnected from everything at home. Having access to support that understood our lifestyle made a real difference for me and my family. It reminded us that we still had a community behind us.",
      name: "Craig",
      identifier: "rotational worker",
    },
  },
  {
    id: "families",
    name: "Family Members",
    shortName: "Families",
    description:
      "If your partner, parent, or family member works away or runs a farm, you know what it's like to carry things on your own. We're here for spouses, children, and loved ones -- with resources, encouragement, and people who truly understand.",
    relevantPillarIds: ["wellbeing", "work-away", "community"],
    accessPoints: [
      {
        method: "Events and programmes",
        description: "Join local gatherings and workshops",
      },
      {
        method: "Direct contact",
        description: "Phone or email us any time",
      },
      {
        method: "Local resources",
        description: "We'll connect you with support near you",
      },
    ],
    testimonial: {
      quote:
        "As the spouse of a rotational worker, I often felt like I was carrying things on my own. Through St Katharine Rural Connect, I found resources, encouragement, and people who truly understood the strain that comes with this kind of life.",
      name: "Laura",
      identifier: "spouse of an offshore worker",
    },
  },
  {
    id: "community",
    name: "Community Members",
    shortName: "Community",
    description:
      "Whether you've lived here your whole life or you're new to the area, there's a place for you. Come along to an event, volunteer your time, or simply connect with your neighbours. Stronger communities start with people like you showing up.",
    relevantPillarIds: ["wellbeing", "community"],
    accessPoints: [
      {
        method: "Events and programmes",
        description: "See what's happening near you",
      },
      {
        method: "Direct contact",
        description: "Phone, email, or drop in",
      },
      {
        method: "Volunteer initiatives",
        description: "Get involved and give back",
      },
      {
        method: "Partner organisations",
        description: "Through our network of local partners",
      },
    ],
    testimonial: {
      quote:
        "The events and programs have created a stronger sense of connection in our area. People are meeting, talking, and supporting one another in ways that weren't happening before. It feels like something positive and lasting is being built.",
      name: "Helen",
      identifier: "community member",
    },
  },
];
