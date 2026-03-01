import Link from "next/link";
import { Heart, Calendar, Gift, Handshake, Share2 } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import type { LucideIcon } from "lucide-react";

export const metadata = createMetadata({
  title: "Get Involved",
  description:
    "Join St Katharine Rural Connect as a volunteer, event attendee, donor, partner, or advocate. There are many ways to strengthen rural communities.",
  path: "/get-involved",
});

interface InvolvementOption {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

const involvementOptions: InvolvementOption[] = [
  {
    icon: Heart,
    title: "Volunteer With Us",
    description:
      "Give your time and skills to support rural communities. Whether you can spare an hour a week or a day a month, there's a role that fits. Volunteers are the backbone of our community work \u2014 from helping at events to providing peer support.",
    ctaText: "Register Your Interest",
    ctaHref: "/contact",
  },
  {
    icon: Calendar,
    title: "Attend Events",
    description:
      "Join us for workshops, gatherings, and community events across rural Scotland. Our events bring people together for learning, connection, and support. Everyone is welcome, whether you're looking for help or simply want to be part of something positive.",
    ctaText: "See Upcoming Events",
    ctaHref: "/events",
  },
  {
    icon: Gift,
    title: "Donate Today",
    description:
      "Your generosity helps us reach more people in rural communities who need support. Every contribution, no matter the size, goes directly towards delivering services, running events, and keeping our support accessible and free for those who need it most.",
    ctaText: "Make a Donation",
    ctaHref: "/contact",
  },
  {
    icon: Handshake,
    title: "Become a Partner",
    description:
      "We work alongside community organisations, agricultural networks, mental health providers, local agencies, and businesses committed to rural wellbeing. Together, we can create a stronger network of support across rural Scotland.",
    ctaText: "Explore Partnership",
    ctaHref: "/partnerships",
  },
  {
    icon: Share2,
    title: "Share Our Story",
    description:
      "Sometimes the most powerful thing you can do is spread the word. Share our work with your community, on social media, or simply by telling a neighbour about us. You never know who might need to hear that support is available.",
    ctaText: "Learn More",
    ctaHref: "/about",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Section 1: Page Header */}
      <section className="bg-stone-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-body text-overline font-bold uppercase tracking-widest text-accent-600">
            Get Involved
          </p>
          <h1 className="mt-4 font-heading text-5xl font-semibold text-text-primary">
            Be Part of Something Meaningful
          </h1>
          <p className="mt-6 max-w-prose text-lg text-text-body">
            There are many ways to support rural communities through St
            Katharine Rural Connect. Whether you have time, resources,
            connections, or simply a willingness to care, there&rsquo;s a place
            for you.
          </p>
        </div>
      </section>

      {/* Section 2: Involvement Options */}
      <section className="bg-stone-100 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-8">
          {involvementOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div
                key={option.title}
                className="grid grid-cols-1 items-start gap-8 rounded-lg border border-stone-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md md:grid-cols-[auto_1fr]"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-100">
                    <Icon
                      size={28}
                      className="text-accent-600"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h2 className="font-heading text-3xl font-semibold text-primary-900">
                    {option.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-text-body">
                    {option.description}
                  </p>
                  <Link
                    href={option.ctaHref}
                    className="mt-6 inline-block rounded-md bg-primary-900 px-6 py-3 font-body font-medium text-text-on-dark transition-colors duration-300 hover:bg-primary-700"
                  >
                    {option.ctaText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3: CTA Banner */}
      <section className="bg-primary-900 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-heading text-4xl font-semibold text-text-on-dark">
            Not Sure Where to Start?
          </h2>
          <p className="mx-auto mt-6 max-w-prose text-lg text-stone-300">
            That&rsquo;s perfectly fine. Get in touch and we&rsquo;ll help you
            find the right way to get involved. No commitment, no pressure
            &mdash; just a conversation.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-accent-500 px-8 py-4 font-body font-semibold text-primary-950 transition-colors duration-300 hover:bg-accent-400"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
