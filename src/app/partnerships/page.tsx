import { createMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import { partners, partnershipApproach } from "@/data/partners";
import { HERO_IMAGES } from "@/lib/placeholders";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";
import { CircleArrowCTA } from "@/components/shared/CircleArrowCTA";

export const metadata = createMetadata({
  title: "Partnerships",
  description:
    "Learn about St Katharine Rural Connect's partnership approach and meet the organisations working alongside us to strengthen rural communities.",
  path: "/partnerships",
});

export default function PartnershipsPage() {
  return (
    <>
      <InteriorHero
        heading="*Partnerships*"
        backgroundImage={HERO_IMAGES.partnerships}
        objectPosition="center 35%"
      />

      {/* Partnership Approach */}
      <section className="bg-surface-page py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            {/* Left column: Narrative */}
            <div>
              <SectionLabel text="OUR APPROACH" />
              <EmphasisHeading
                text="*Stronger* Together"
                as="h2"
                className="mt-6 text-3xl md:text-4xl text-text-primary"
              />
              <p className="mt-6 text-base leading-relaxed text-text-body">
                We believe that the best support for rural communities comes from
                organisations working together, not in isolation. Our
                partnerships are built on shared values, mutual respect, and a
                genuine commitment to making rural life better. We bring local
                knowledge and community trust; our partners bring specialist
                expertise and resources. Together, we create something neither
                could achieve alone.
              </p>
            </div>

            {/* Right column: Partner types list */}
            <div className="rounded-2xl bg-surface-card p-8">
              <h3 className="mb-5 font-heading text-xl font-semibold text-primary-900">
                We partner with:
              </h3>
              <ul className="space-y-4">
                {partnershipApproach.map((item) => (
                  <li key={item} className="flex items-start">
                    <span
                      className="mr-3 mt-2 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-accent-500"
                      aria-hidden="true"
                    />
                    <span className="text-base text-text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Grid */}
      <section className="bg-surface-page pb-20 md:pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto mb-12 border-t border-divider"
            aria-hidden="true"
          />
          <div className="text-center">
            <SectionLabel text="OUR PARTNERS" align="center" />
            <EmphasisHeading
              text="*Trusted* By"
              as="h2"
              className="mx-auto mt-6 text-3xl md:text-4xl text-text-primary"
            />
            <p className="mt-4 text-base text-text-muted">
              We are proud to work alongside these organisations.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {partners.map((partner) => {
              const cardContent = (
                <div className="flex flex-col items-center justify-center gap-3 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-900/5">
                    <span className="font-heading text-xl font-semibold text-primary-900">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-body text-sm font-medium text-primary-900">
                    {partner.name}
                  </span>
                  {partner.description && (
                    <span className="text-xs text-text-muted">
                      {partner.description}
                    </span>
                  )}
                </div>
              );

              return (
                <div
                  key={partner.id}
                  className="flex min-h-[160px] flex-col items-center justify-center rounded-2xl bg-surface-card p-6 transition-[transform,box-shadow] duration-300 hover:shadow-lg motion-safe:hover:-translate-y-1"
                >
                  {partner.url ? (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center"
                    >
                      {cardContent}
                    </a>
                  ) : (
                    cardContent
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="bg-primary-900 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <EmphasisHeading
            text="Become a *Partner*"
            as="h2"
            className="text-3xl text-white md:text-4xl"
          />
          <p className="mx-auto mt-6 max-w-prose text-lg text-white/80">
            If your organisation shares our commitment to rural wellbeing,
            we&rsquo;d love to explore how we can work together. Partnership
            with SKRC means joining a growing network dedicated to ensuring no
            rural person faces their challenges alone.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <CircleArrowCTA
              label="Get in Touch About Partnership"
              href="/contact"
              variant="light"
            />
            <a
              href={SITE_CONFIG.phoneHref}
              className="text-sm text-white/60 transition-colors duration-300 hover:text-white/80"
            >
              Or call us on {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
