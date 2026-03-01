import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { audienceSegments } from "@/data/audiences";
import { servicePillars } from "@/data/services";
import { AudienceCard } from "@/components/services/AudienceCard";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Who We Serve",
  description:
    "Support for farmers, offshore workers, families, and community members. Find out how St Katharine Rural Connect serves your community.",
  path: "/who-we-serve",
});

export default function WhoWeServePage() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-stone-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-body text-overline font-bold uppercase tracking-widest text-accent-600">
            Who We Serve
          </p>
          <h1 className="mt-4 font-heading text-5xl font-light text-text-primary md:text-display">
            We&rsquo;re Here for You
          </h1>
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
        const bgClass = index % 2 === 0 ? "bg-stone-50" : "bg-stone-100";

        return (
          <section
            key={segment.id}
            className={`${bgClass} px-6 py-16 md:py-20`}
          >
            <AudienceCard
              segment={segment}
              relevantPillars={relevantPillars}
              reversed={isReversed}
            />
          </section>
        );
      })}

      {/* "Not sure where you fit?" CTA section */}
      <section className="bg-primary-900 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-text-on-dark">
            Not sure where you fit?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-on-dark/80">
            That&rsquo;s absolutely fine. Our support isn&rsquo;t about fitting
            into a category &mdash; it&rsquo;s about getting you the help
            that&rsquo;s right for you. Get in touch and we&rsquo;ll take it
            from there.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="gold" size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Link
              href="/services"
              className="text-base font-medium text-accent-300 underline underline-offset-4 transition-colors duration-200 hover:text-accent-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
