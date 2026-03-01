import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { partners, partnershipApproach } from "@/data/partners";

export const metadata = createMetadata({
  title: "Partnerships",
  description:
    "Learn about St Katharine Rural Connect's partnership approach and meet the organisations working alongside us to strengthen rural communities.",
  path: "/partnerships",
});

export default function PartnershipsPage() {
  return (
    <>
      {/* Section 1: Page Header */}
      <section className="bg-stone-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-body text-overline font-bold uppercase tracking-widest text-accent-600">
            Partnerships
          </p>
          <h1 className="mt-4 font-heading text-5xl font-semibold text-text-primary">
            Stronger Together
          </h1>
          <p className="mt-6 max-w-prose text-lg text-text-body">
            Real, lasting change in rural communities happens through
            collaboration. We work alongside organisations that share our
            commitment to supporting rural people and places.
          </p>
        </div>
      </section>

      {/* Section 2: Partnership Approach */}
      <section className="bg-stone-100 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            {/* Left column: Narrative */}
            <div>
              <h2 className="font-heading text-4xl font-semibold text-text-primary">
                Our Approach to Partnership
              </h2>
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
            <div>
              <h3 className="mb-4 font-heading text-xl font-semibold text-primary-900">
                We partner with:
              </h3>
              <ul className="space-y-4">
                {partnershipApproach.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mr-3 mt-2 inline-block h-2 w-2 flex-shrink-0 rotate-45 bg-accent-500" />
                    <span className="text-base text-text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Partner Logos */}
      <section className="bg-stone-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-heading text-4xl font-semibold text-text-primary">
            Our Partners
          </h2>
          <p className="mb-12 mt-4 text-center text-base text-text-muted">
            We are proud to work alongside these organisations.
          </p>

          <div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner) => {
              const content = (
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-stone-100 grayscale transition-all duration-500 hover:grayscale-0">
                    <span className="font-heading text-lg font-semibold text-stone-400">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-body text-sm font-medium text-text-muted">
                    {partner.name}
                  </span>
                </div>
              );

              return (
                <div
                  key={partner.id}
                  className="flex min-h-[120px] flex-col items-center justify-center rounded-lg border border-stone-200 bg-white p-6 transition-all duration-300 hover:border-accent-300 hover:shadow-md"
                >
                  {partner.url ? (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs italic text-text-muted">
            Partner logos will be displayed here. Showing partner names as
            placeholders.
          </p>
        </div>
      </section>

      {/* Section 4: Become a Partner CTA */}
      <section className="bg-primary-900 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-heading text-4xl font-semibold text-text-on-dark">
            Become a Partner
          </h2>
          <p className="mx-auto mt-6 max-w-prose text-lg text-stone-300">
            If your organisation shares our commitment to rural wellbeing,
            we&rsquo;d love to explore how we can work together. Partnership
            with SKRC means joining a growing network dedicated to ensuring no
            rural person faces their challenges alone.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-accent-500 px-8 py-4 font-body font-semibold text-primary-950 transition-colors duration-300 hover:bg-accent-400"
          >
            Get in Touch About Partnership
          </Link>
          <a
            href="tel:01234567890"
            className="mt-4 block text-sm text-stone-400 transition-colors duration-300 hover:text-stone-300"
          >
            Or call us on 01234 567890
          </a>
        </div>
      </section>
    </>
  );
}
