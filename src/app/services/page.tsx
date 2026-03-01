import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { servicePillars } from "@/data/services";
import { PillarCard } from "@/components/services/PillarCard";
import { WhatHappensWhenYouCall } from "@/components/services/WhatHappensWhenYouCall";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Our Services",
  description:
    "Supporting your wellbeing, farm life, those who work away, and our community. Find out how St Katharine Rural Connect can help.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-stone-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-body text-overline font-bold uppercase tracking-widest text-accent-600">
            Our Services
          </p>
          <h1 className="mt-4 font-heading text-5xl font-light text-text-primary md:text-display">
            How We Can Help
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-body">
            Whether you&rsquo;re looking for someone to talk to, practical
            support for your farm, connection while working away, or ways to
            strengthen your community &mdash; we&rsquo;re here.
          </p>
        </div>
      </section>

      {/* Pillar cards grid */}
      <section className="bg-stone-100 px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {servicePillars.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </section>

      {/* WhatHappensWhenYouCall section */}
      <WhatHappensWhenYouCall />

      {/* Bottom CTA section */}
      <section className="bg-primary-900 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-text-on-dark">
            Not sure where to start?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-on-dark/80">
            That&rsquo;s completely fine. Get in touch and we&rsquo;ll help you
            find the right support.
          </p>
          <div className="mt-8">
            <Button variant="gold" size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
