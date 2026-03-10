import { createMetadata } from "@/lib/metadata";
import { HERO_IMAGES } from "@/lib/placeholders";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";
import { CircleArrowCTA } from "@/components/shared/CircleArrowCTA";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { faqs } from "@/data/faqs";

export const metadata = createMetadata({
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about St Katharine Rural Connect's services, support, events, volunteering, and how to get in touch.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <InteriorHero
        heading="Frequently Asked *Questions*"
        backgroundImage={HERO_IMAGES.faq}
        objectPosition="center 40%"
      />

      {/* FAQ Accordion Section */}
      <section className="bg-surface-page px-6 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <SectionLabel text="FAQS" align="center" />
            <EmphasisHeading
              text="Answers to *Common* Questions"
              as="h2"
              className="mt-5 text-3xl md:text-4xl text-primary-900"
            />
          </div>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-surface-page px-6 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-surface-card border border-divider px-8 py-12 text-center sm:px-12">
            <EmphasisHeading
              text="Still Have *Questions*?"
              as="h2"
              className="text-2xl md:text-3xl text-primary-900"
            />
            <p className="mt-4 mb-8 font-body text-base text-text-body max-w-md mx-auto">
              We&rsquo;re here to help. Get in touch and our team will be happy
              to answer anything you need.
            </p>
            <div className="flex justify-center">
              <CircleArrowCTA label="Get in Touch" href="/contact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
