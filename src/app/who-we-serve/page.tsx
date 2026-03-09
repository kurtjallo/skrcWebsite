import { createMetadata } from "@/lib/metadata";
import { audienceSegments } from "@/data/audiences";
import { servicePillars } from "@/data/services";
import { AudienceCard } from "@/components/services/AudienceCard";
import { HERO_IMAGES } from "@/lib/placeholders";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";
import { CircleArrowCTA } from "@/components/shared/CircleArrowCTA";

export const metadata = createMetadata({
  title: "Who We Serve",
  description:
    "Support for farmers, offshore workers, families, and community members. Find out how St Katharine Rural Connect serves your community.",
  path: "/who-we-serve",
});

export default function WhoWeServePage() {
  return (
    <>
      <InteriorHero
        heading="Who We *Serve*"
        backgroundImage={HERO_IMAGES.whoWeServe}
      />

      {/* Intro */}
      <section className="bg-surface-page py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <SectionLabel text="OUR COMMUNITIES" align="center" />
          <EmphasisHeading
            text="We're Here for *You*"
            as="h2"
            className="mx-auto mt-6 max-w-3xl text-3xl md:text-4xl text-text-primary"
          />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-body">
            Whether you&rsquo;re farming the land, working offshore, supporting
            family from home, or looking to connect with your community &mdash;
            there&rsquo;s a place for you here.
          </p>
        </div>
      </section>

      {/* Audience segments */}
      {audienceSegments.map((segment, index) => {
        const relevantPillars = servicePillars.filter((pillar) =>
          segment.relevantPillarIds.includes(pillar.id)
        );
        const isReversed = index % 2 !== 0;

        return (
          <section
            key={segment.id}
            className="bg-surface-page px-6 pb-20 md:pb-28"
          >
            {/* Thin divider between segments */}
            {index > 0 && (
              <div
                className="mx-auto mb-20 max-w-5xl border-t border-divider md:mb-28"
                aria-hidden="true"
              />
            )}
            <AudienceCard
              segment={segment}
              relevantPillars={relevantPillars}
              reversed={isReversed}
            />
          </section>
        );
      })}

      {/* "Not sure where you fit?" CTA section */}
      <section className="bg-primary-900 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <EmphasisHeading
            text="Not Sure Where You *Fit*?"
            as="h2"
            className="text-3xl text-white md:text-4xl"
          />
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            That&rsquo;s absolutely fine. Our support isn&rsquo;t about fitting
            into a category &mdash; it&rsquo;s about getting you the help
            that&rsquo;s right for you. Get in touch and we&rsquo;ll take it
            from there.
          </p>
          <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <CircleArrowCTA
              label="Get in Touch"
              href="/contact"
              variant="light"
            />
            <a
              href="/services"
              className="font-body text-base font-medium text-accent-300 underline underline-offset-4 transition-colors duration-200 hover:text-accent-200"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
