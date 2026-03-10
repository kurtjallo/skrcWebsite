import { Heart, Calendar, Gift, Handshake, Share2 } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { HERO_IMAGES } from "@/lib/placeholders";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";
import { CircleArrowCTA } from "@/components/shared/CircleArrowCTA";
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
      <InteriorHero
        heading="Get *Involved*"
        backgroundImage={HERO_IMAGES.getInvolved}
        objectPosition="center 30%"
      />

      {/* Intro */}
      <section className="bg-surface-page py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionLabel text="MAKE A DIFFERENCE" />
          <EmphasisHeading
            text="Be Part of Something *Meaningful*"
            as="h2"
            className="mt-6 max-w-2xl text-3xl md:text-4xl text-text-primary"
          />
          <p className="mt-6 max-w-prose text-lg text-text-body">
            There are many ways to support rural communities through St
            Katharine Rural Connect. Whether you have time, resources,
            connections, or simply a willingness to care, there&rsquo;s a place
            for you.
          </p>
        </div>
      </section>

      {/* Involvement Options */}
      <section className="bg-surface-page px-4 pb-20 md:pb-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-6">
          {involvementOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div
                key={option.title}
                className="grid grid-cols-1 items-start gap-6 rounded-2xl bg-surface-card p-8 transition-shadow duration-300 hover:shadow-lg md:grid-cols-[auto_1fr_auto]"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-100">
                    <Icon
                      size={24}
                      className="text-accent-600"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-primary-900">
                    {option.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-text-body">
                    {option.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex items-center md:self-center">
                  <CircleArrowCTA
                    label={option.ctaText}
                    href={option.ctaHref}
                    variant="dark"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary-900 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <EmphasisHeading
            text="Not Sure Where to *Start*?"
            as="h2"
            className="text-3xl text-white md:text-4xl"
          />
          <p className="mx-auto mt-6 max-w-prose text-lg text-white/80">
            That&rsquo;s perfectly fine. Get in touch and we&rsquo;ll help you
            find the right way to get involved. No commitment, no pressure
            &mdash; just a conversation.
          </p>
          <div className="mt-8 flex justify-center">
            <CircleArrowCTA
              label="Contact Our Team"
              href="/contact"
              variant="light"
            />
          </div>
        </div>
      </section>
    </>
  );
}
