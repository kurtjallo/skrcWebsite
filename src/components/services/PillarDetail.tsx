import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ServicePillar } from "@/types/services";
import { WhatHappensWhenYouCall } from "@/components/services/WhatHappensWhenYouCall";
import { Button } from "@/components/ui/button";

interface PillarDetailProps {
  pillar: ServicePillar;
}

export function PillarDetail({ pillar }: PillarDetailProps) {
  return (
    <>
      {/* 1. Hero section */}
      <section className="bg-stone-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-body text-overline font-bold uppercase tracking-widest text-accent-600">
            {pillar.orgName}
          </p>
          <h1 className="mt-4 font-heading text-4xl font-light text-text-primary md:text-display">
            {pillar.name}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-body">
            {pillar.tagline}
          </p>
        </div>
      </section>

      {/* 2. Who it's for / What to expect -- two-column */}
      <section className="bg-stone-100 px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left: Who is this for? */}
          <div>
            <h2 className="font-heading text-3xl font-semibold text-text-primary">
              Who is this for?
            </h2>
            <div
              className="mt-4 h-[2px] w-16 bg-accent-500"
              aria-hidden="true"
            />
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              {pillar.whoItsFor}
            </p>
          </div>

          {/* Right: What to expect */}
          <div>
            <h2 className="font-heading text-3xl font-semibold text-text-primary">
              What to expect
            </h2>
            <div
              className="mt-4 h-[2px] w-16 bg-accent-500"
              aria-hidden="true"
            />
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              {pillar.whatHappens}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Services list */}
      <section className="bg-stone-50 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-heading text-3xl font-semibold text-text-primary">
            What we offer
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {pillar.services.map((service) => (
              <div
                key={service}
                className="border-l-4 border-accent-500 py-4 pl-6"
              >
                <p className="text-lg font-medium text-text-primary">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimonial section (dark) */}
      {pillar.testimonial && (
        <section className="bg-primary-900 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="font-heading text-6xl text-accent-500 opacity-30"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote className="-mt-6 font-heading text-2xl font-light italic leading-relaxed text-text-on-dark md:text-3xl">
              {pillar.testimonial.quote}
            </blockquote>
            <p className="mt-6 text-base text-accent-300">
              &mdash; {pillar.testimonial.name},{" "}
              {pillar.testimonial.identifier}
            </p>
          </div>
        </section>
      )}

      {/* 5. How to get started + CTA */}
      <section className="bg-stone-100 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-text-primary">
            Ready to get in touch?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-body">
            {pillar.howToGetStarted}
          </p>
          <div className="mt-8">
            <Button variant="default" size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 6. WhatHappensWhenYouCall section */}
      <WhatHappensWhenYouCall />

      {/* 7. Back to services */}
      <section className="bg-stone-50 px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-600 transition-colors duration-200 hover:text-accent-500"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to all services
          </Link>
        </div>
      </section>
    </>
  );
}
