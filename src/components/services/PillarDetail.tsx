import Link from "next/link";
import { ArrowLeft, CheckCircle, Heart, Wheat, Anchor, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ServicePillar } from "@/types/services";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";
import { CircleArrowCTA } from "@/components/shared/CircleArrowCTA";
import { PreFooterCTA } from "@/components/shared/PreFooterCTA";

const ICON_MAP: Record<string, LucideIcon> = {
  Heart,
  Wheat,
  Anchor,
  Users,
};

interface PillarDetailProps {
  pillar: ServicePillar;
}

export function PillarDetail({ pillar }: PillarDetailProps) {
  const Icon = ICON_MAP[pillar.icon] ?? Heart;

  return (
    <>
      {/* 1. Interior Hero */}
      <InteriorHero heading={pillar.name} />

      {/* 2. Back link + intro */}
      <section className="bg-surface-page px-6 pt-10 pb-0">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-500 transition-colors duration-200 hover:text-accent-600"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to all services
          </Link>
        </div>
      </section>

      {/* 3. Two-column: Who & What */}
      <section className="bg-surface-page px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Who is this for? */}
            <div className="rounded-2xl bg-surface-card p-8 md:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100">
                <Icon
                  className="h-6 w-6 text-accent-500"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <SectionLabel text={pillar.orgName.toUpperCase()} className="mt-6" />
              <h2 className="mt-4 font-heading text-3xl font-semibold text-text-primary">
                Who is this for?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-body">
                {pillar.whoItsFor}
              </p>
            </div>

            {/* Right: What to expect */}
            <div className="rounded-2xl bg-surface-card p-8 md:p-10">
              <h2 className="font-heading text-3xl font-semibold text-text-primary">
                What to expect
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-body">
                {pillar.whatHappens}
              </p>
              <p className="mt-6 text-base leading-relaxed text-text-body">
                {pillar.howToGetStarted}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services list */}
      <section className="bg-surface-page px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl bg-surface-card p-8 md:p-12">
            <SectionLabel text="WHAT WE OFFER" />
            <EmphasisHeading
              text="Services *Available*"
              as="h2"
              className="mt-5 text-3xl md:text-4xl text-text-primary"
            />
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {pillar.services.map((service) => (
                <div
                  key={service}
                  className="flex items-start gap-3 rounded-xl border border-divider p-4 transition-colors duration-200 hover:border-accent-200 hover:bg-accent-100/30"
                >
                  <CheckCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent-500"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="text-base font-medium text-text-primary">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonial section */}
      {pillar.testimonial && (
        <section className="bg-surface-page px-6 pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 px-8 py-16 md:px-16 md:py-20">
              {/* Dot texture */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
                aria-hidden="true"
              />

              <div className="relative mx-auto max-w-3xl text-center">
                <span
                  className="font-heading text-7xl text-accent-400 opacity-30"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="-mt-6 font-heading text-xl font-light italic leading-relaxed text-white md:text-2xl lg:text-3xl">
                  {pillar.testimonial.quote}
                </blockquote>
                <footer className="mt-8">
                  <cite className="not-italic text-base text-white/70">
                    &mdash; {pillar.testimonial.name},{" "}
                    {pillar.testimonial.identifier}
                  </cite>
                </footer>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Ready CTA */}
      <section className="bg-surface-page px-6 pb-12 md:pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <EmphasisHeading
            text="Ready to Get *Started*?"
            as="h2"
            className="text-3xl md:text-4xl text-text-primary"
          />
          <p className="mt-4 text-lg leading-relaxed text-text-body">
            {pillar.howToGetStarted}
          </p>
          <div className="mt-8 flex justify-center">
            <CircleArrowCTA
              label="Get in Touch"
              href="/contact"
              variant="dark"
            />
          </div>
        </div>
      </section>

      {/* 7. PreFooterCTA */}
      <PreFooterCTA
        heading="Explore All Our *Services*"
        body="Discover the full range of support available through St Katharine Rural Connect."
        ctaLabel="View All Services"
        ctaHref="/services"
      />
    </>
  );
}
