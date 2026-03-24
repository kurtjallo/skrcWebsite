import type { Testimonial } from "@/types";

// TODO: All testimonials below (except Dave's) are PLACEHOLDERS with fictional names/quotes.
// Leanne will provide real testimonials from community members before launch.
// Do NOT launch with these fake testimonials.
export const testimonials: Testimonial[] = [
  {
    id: "testi-farmer",
    quote:
      "Running a farm can be overwhelming, especially when everything feels like it depends on you. St Katharine Rural Connect gave us more than information -- they gave us support we could actually use, and people who understood the pressures we were under. It made us feel less alone.",
    firstName: "Placeholder",
    identifier: "farmer",
    segment: "farmer",
  },
  {
    id: "testi-offshore",
    quote:
      "When you work away for long periods, it can feel like you're disconnected from everything at home. Having access to support that understood our lifestyle made a real difference for me and my family. It reminded us that we still had a community behind us.",
    firstName: "Placeholder",
    identifier: "rotational worker",
    segment: "offshore-worker",
  },
  {
    id: "testi-community",
    quote:
      "The events and programs have created a stronger sense of connection in our area. People are meeting, talking, and supporting one another in ways that weren't happening before. It feels like something positive and lasting is being built.",
    firstName: "Placeholder",
    identifier: "community member",
    segment: "community",
  },
  {
    id: "testi-family",
    quote:
      "As the spouse of a rotational worker, I often felt like I was carrying things on my own. Through St Katharine Rural Connect, I found resources, encouragement, and people who truly understood the strain that comes with this kind of life.",
    firstName: "Placeholder",
    identifier: "spouse of a rotational worker",
    segment: "family",
  },
  {
    id: "testi-dave",
    quote:
      "You are the rarest diamond and your worth is immeasurable. The lives of the people you have impacted over the years and around the world just boggles my mind. Your strength of character and your commitment to the community is truly beyond compare and I am truly honoured and humbled to call you my friend.",
    firstName: "Dave",
    identifier: "Founder, LuxGive",
    segment: "community",
  },
];
