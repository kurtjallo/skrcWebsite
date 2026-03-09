import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Heart, Wheat, Anchor, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { HERO_IMAGES, CTA_IMAGES, SERVICE_IMAGES } from "@/lib/placeholders";
import { servicePillars } from "@/data/services";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";
import { CircleArrowCTA } from "@/components/shared/CircleArrowCTA";
import { PreFooterCTA } from "@/components/shared/PreFooterCTA";

export const metadata = createMetadata({
  title: "Our Services",
  description:
    "Supporting your wellbeing, farm life, those who work away, and our community. Find out how St Katharine Rural Connect can help.",
  path: "/services",
});

const ICON_MAP: Record<string, LucideIcon> = {
  Heart,
  Wheat,
  Anchor,
  Users,
};

const PILLAR_IMAGES: Record<string, string> = {
  "supporting-your-wellbeing": SERVICE_IMAGES.wellness,
  "supporting-farm-life": SERVICE_IMAGES.agriculture,
  "supporting-those-who-work-away": SERVICE_IMAGES.offshore,
  "strengthening-our-community": SERVICE_IMAGES.community,
};

export default function ServicesPage() {
  return (
    <>
      {/* 1. Interior Hero */}
      <InteriorHero heading="Our *Services*" backgroundImage={HERO_IMAGES.services} />

      {/* 2. Section intro */}
      <section className="bg-surface-page px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel text="OUR SERVICES" />
          <EmphasisHeading
            text="Solutions We *Provide*"
            as="h2"
            className="mt-5 text-4xl md:text-5xl text-text-primary"
          />
          <p className="mt-6 max-w-2xl text-lg text-text-body">
            Whether you&rsquo;re looking for someone to talk to, practical
            support for your farm, connection while working away, or ways to
            strengthen your community &mdash; we&rsquo;re here.
          </p>
        </div>
      </section>

      {/* 3. Pillar detail cards -- stacked vertically */}
      <section className="bg-surface-page px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl space-y-16 md:space-y-20">
          <h2 className="sr-only">Service Pillars in Detail</h2>
          {servicePillars.map((pillar, index) => {
            const Icon = ICON_MAP[pillar.icon] ?? Heart;
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={pillar.id}
                className={`grid grid-cols-1 items-start gap-8 lg:grid-cols-5 lg:gap-12 ${
                  isReversed ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Left / Image card (~40%) */}
                <div
                  className={`relative overflow-hidden rounded-[20px] lg:col-span-2 ${
                    isReversed ? "lg:[direction:ltr]" : ""
                  }`}
                >
                  <div className="aspect-[4/5] relative">
                    <Image
                      src={PILLAR_IMAGES[pillar.slug] ?? SERVICE_IMAGES.community}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />

                    {/* Dark gradient overlay from bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent" />

                    {/* Icon badge */}
                    <div className="absolute top-6 left-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100">
                        <Icon
                          className="h-6 w-6 text-accent-500"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    {/* Overlaid content at bottom */}
                    <div className="absolute right-0 bottom-0 left-0 p-6 md:p-8">
                      <h3 className="font-heading text-2xl font-semibold text-white md:text-3xl">
                        {pillar.name}
                      </h3>
                      <div className="mt-4">
                        <CircleArrowCTA
                          label="Learn More"
                          href={`/services/${pillar.slug}`}
                          variant="light"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right / Content (~60%) */}
                <div
                  className={`lg:col-span-3 lg:py-4 ${
                    isReversed ? "lg:[direction:ltr]" : ""
                  }`}
                >
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent-500">
                    {pillar.orgName}
                  </p>

                  {/* Why It Matters */}
                  <h4 className="mt-6 font-heading text-xl font-semibold italic text-text-primary">
                    Why It Matters:
                  </h4>
                  <p className="mt-3 text-base leading-relaxed text-text-body">
                    {pillar.whatHappens}
                  </p>

                  {/* What's Included */}
                  <h4 className="mt-8 font-heading text-xl font-semibold italic text-text-primary">
                    What&rsquo;s Included:
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {pillar.services.map((service) => (
                      <li key={service} className="flex items-start gap-3">
                        <CheckCircle
                          className="mt-0.5 h-5 w-5 shrink-0 text-accent-500"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                        <span className="text-base text-text-body">
                          {service}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Inline CTA */}
                  <div className="mt-8">
                    <CircleArrowCTA
                      label="Get in Touch"
                      href="/contact"
                      variant="dark"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 4. PreFooterCTA */}
      <PreFooterCTA backgroundImage={CTA_IMAGES.services}
        heading="Not Sure Where to *Start*?"
        body="That's completely fine. Get in touch and we'll help you find the right support for your situation."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
    </>
  );
}
