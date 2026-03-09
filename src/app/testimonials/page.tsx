import { createMetadata } from "@/lib/metadata";
import { testimonials } from "@/data/testimonials";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";
import { CircleArrowCTA } from "@/components/shared/CircleArrowCTA";
import { Play } from "lucide-react";
import type { AudienceSegment } from "@/types";

export const metadata = createMetadata({
  title: "Testimonials",
  description:
    "Hear from farmers, offshore workers, families, and community members about how St Katharine Rural Connect has made a difference in their lives.",
  path: "/testimonials",
});

const SEGMENT_LABELS: Record<AudienceSegment, string> = {
  farmer: "Farmer",
  "offshore-worker": "Offshore Worker",
  community: "Community Member",
  family: "Family Member",
};

const CARD_GRADIENTS = [
  "from-primary-800 via-primary-900 to-primary-950",
  "from-primary-950 via-primary-800 to-primary-900",
  "from-primary-900 via-primary-950 to-primary-800",
  "from-primary-800 to-primary-950",
];

export default function TestimonialsPage() {
  return (
    <>
      <InteriorHero
        heading="*Testimonials*"
        backgroundImage="/images/placeholder-hero.svg"
      />

      {/* Section intro */}
      <section className="bg-surface-page py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <SectionLabel text="TESTIMONIALS" align="center" />
          <EmphasisHeading
            text="What *Our Community* Says"
            as="h2"
            className="mx-auto mt-6 max-w-3xl text-3xl md:text-4xl text-text-primary"
          />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-body">
            The people we serve are at the heart of everything we do. Here are
            some of their stories &mdash; in their own words.
          </p>
        </div>
      </section>

      {/* Testimonial Cards */}
      <section className="bg-surface-page px-4 pb-20 md:pb-28 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => {
            const gradient = CARD_GRADIENTS[index % CARD_GRADIENTS.length];
            const segmentLabel = SEGMENT_LABELS[testimonial.segment];
            // Truncate quote for card display
            const truncatedQuote =
              testimonial.quote.length > 180
                ? testimonial.quote.substring(0, 180).trimEnd() + "\u2026"
                : testimonial.quote;

            return (
              <div
                key={testimonial.id}
                className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg motion-safe:hover:-translate-y-1"
                style={{ aspectRatio: "3 / 4" }}
              >
                {/* Gradient placeholder background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
                />

                {/* Dark gradient from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-950/60 to-transparent" />

                {/* Decorative play button */}
                <div
                  className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
                  aria-hidden="true"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <Play className="h-6 w-6 text-white/60 ml-0.5" />
                  </div>
                </div>

                {/* Content at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  {/* Segment tag */}
                  <span className="mb-3 inline-flex items-center rounded-full bg-accent-500 px-2.5 py-0.5 font-body text-xs font-medium text-white">
                    {segmentLabel}
                  </span>

                  {/* Quote */}
                  <blockquote>
                    <p className="text-sm leading-relaxed text-white/90">
                      &ldquo;{truncatedQuote}&rdquo;
                    </p>
                    <footer className="mt-3">
                      <cite className="block text-sm font-medium not-italic text-white">
                        {testimonial.firstName}
                      </cite>
                      <span className="text-xs text-white/60">
                        {testimonial.identifier}
                      </span>
                    </footer>
                  </blockquote>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <EmphasisHeading
            text="Your Story *Matters* Too"
            as="h2"
            className="text-3xl text-white md:text-4xl"
          />
          <p className="mx-auto mt-6 max-w-prose text-lg text-white/80">
            Whether you&rsquo;re a farmer, offshore worker, family member, or
            community member, we&rsquo;re here for you. Every conversation is
            confidential, and there&rsquo;s never any pressure.
          </p>
          <div className="mt-8 flex justify-center">
            <CircleArrowCTA
              label="Get in Touch"
              href="/contact"
              variant="light"
            />
          </div>
        </div>
      </section>
    </>
  );
}
