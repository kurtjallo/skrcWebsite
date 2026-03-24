import type { ServicePillar } from "@/types/services";

// TODO: All testimonial quotes and names in service pillars are PLACEHOLDERS.
// Leanne will provide real testimonials before launch.
export const servicePillars: ServicePillar[] = [
  {
    id: "wellbeing",
    slug: "supporting-your-wellbeing",
    name: "Supporting Your Wellbeing",
    orgName: "Community Wellness and Mental Health",
    tagline:
      "Someone to talk to, and a hand finding the right support.",
    whoItsFor:
      "For anyone in our rural community who could use someone to talk to, or a hand finding the right support.",
    whatHappens:
      "Whether you're dealing with stress, grief, loneliness, or just a difficult season, we're here to listen. We can connect you with local services, offer peer support sessions, or simply provide a safe space to talk things through. No referral needed.",
    howToGetStarted:
      "Give us a ring or fill in our contact form -- we'll take it from there.",
    services: [
      "Individual support and referrals",
      "Mental health and emotional wellness resources",
      "Peer support and workshops (stress, burnout, grief, resilience)",
      "Programs addressing rural isolation",
    ],
    icon: "Heart",
    testimonial: {
      quote:
        "Running a farm can be overwhelming, especially when everything feels like it depends on you. St Katharine Rural Connect gave us more than information -- they gave us support we could actually use, and people who understood the pressures we were under. It made us feel less alone.",
      name: "James",
      identifier: "farmer",
    },
  },
  {
    id: "farm-life",
    slug: "supporting-farm-life",
    name: "Supporting Farm Life",
    orgName: "Agricultural Support and Resources",
    tagline:
      "Practical support and connection for farming families.",
    whoItsFor:
      "For farming families navigating the pressures, uncertainties, and rewards of life on the land.",
    whatHappens:
      "Farming is more than a job -- it's a way of life, and it comes with unique pressures. We offer practical support sessions, help you find grants and financial assistance, and create spaces where farming folk can connect and share what they're going through.",
    howToGetStarted:
      "Get in touch by phone or online -- no forms, no fuss.",
    services: [
      "Farm wellbeing and sustainability sessions",
      "Financial, operational, and social support referrals",
      "Farm-focused mental wellness",
      "Access to grants, programmes, and assistance",
    ],
    icon: "Wheat",
    testimonial: {
      quote:
        "As the spouse of a rotational worker, I often felt like I was carrying things on my own. Through St Katharine Rural Connect, I found resources, encouragement, and people who truly understood the strain that comes with this kind of life.",
      name: "Sarah",
      identifier: "farmer's wife",
    },
  },
  {
    id: "work-away",
    slug: "supporting-those-who-work-away",
    name: "Supporting Those Who Work Away",
    orgName: "Offshore Worker Engagement and Support",
    tagline:
      "Support for offshore, rotational, and remote workers -- and their families.",
    whoItsFor:
      "For offshore, rotational, and remote workers -- and the families who hold things together back home.",
    whatHappens:
      "Working away from home comes with its own challenges. We offer remote check-ins, peer connection, and support for families. Whether you're on a rig, at sea, or working remotely, we're here.",
    howToGetStarted:
      "Reach out by phone, email, or online -- we work around your schedule.",
    services: [
      "Remote-access support and check-ins",
      "Peer connection for workers away from home",
      "Family support and resources",
    ],
    icon: "Anchor",
    testimonial: {
      quote:
        "When you work away for long periods, it can feel like you're disconnected from everything at home. Having access to support that understood our lifestyle made a real difference for me and my family. It reminded us that we still had a community behind us.",
      name: "Craig",
      identifier: "rotational worker",
    },
  },
  {
    id: "community",
    slug: "strengthening-our-community",
    name: "Strengthening Our Community",
    orgName: "Community Connection and Development",
    tagline:
      "Events, volunteering, and ways to build a stronger local community.",
    whoItsFor:
      "For anyone who wants to be part of building a stronger, more connected rural community.",
    whatHappens:
      "Community doesn't just happen -- it takes people showing up. We bring neighbours together through events, workshops, and volunteering. Whether you want to learn something new, share a skill, or just meet folk nearby, there's a place for you here.",
    howToGetStarted:
      "Check our events calendar or get in touch to find out what's happening near you.",
    services: [
      "Local events and gatherings",
      "Volunteer engagement",
      "Workshops and skill-sharing",
      "Partnerships with local groups",
    ],
    icon: "Users",
    testimonial: {
      quote:
        "The events and programs have created a stronger sense of connection in our area. People are meeting, talking, and supporting one another in ways that weren't happening before. It feels like something positive and lasting is being built.",
      name: "Margaret",
      identifier: "community member",
    },
  },
];

/**
 * Find a service pillar by its URL slug.
 * Returns undefined if no matching pillar is found.
 */
export function getServiceBySlug(
  slug: string
): ServicePillar | undefined {
  return servicePillars.find((pillar) => pillar.slug === slug);
}
