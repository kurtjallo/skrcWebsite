import Link from "next/link";
import { Button } from "@/components/ui/button";

const STEPS = [
  "You call or fill in our form",
  "We\u2019ll have a friendly conversation to understand how we can help",
  "We\u2019ll suggest the right support for you",
  "You\u2019re in control \u2014 no pressure, completely confidential",
] as const;

export function WhatHappensWhenYouCall() {
  return (
    <section className="bg-stone-200 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Overline */}
        <p className="text-center font-body text-overline font-bold uppercase tracking-widest text-accent-600">
          What happens when you get in touch
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-center font-heading text-3xl font-semibold text-text-primary md:text-4xl">
          It&rsquo;s simpler than you think
        </h2>

        {/* Steps container */}
        <div className="relative mt-12">
          {/* Connecting line -- desktop horizontal, mobile vertical */}
          <div
            className="absolute left-5 top-5 hidden h-[2px] w-[calc(100%-2.5rem)] bg-stone-300 md:block"
            aria-hidden="true"
          />
          <div
            className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-[2px] bg-stone-300 md:hidden"
            aria-hidden="true"
          />

          {/* Steps */}
          <ol className="relative flex flex-col gap-10 md:flex-row md:gap-0">
            {STEPS.map((step, index) => (
              <li
                key={index}
                className="flex items-start gap-4 md:flex-1 md:flex-col md:items-center md:text-center"
              >
                {/* Number circle */}
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-accent-500 bg-stone-200">
                  <span className="font-heading text-lg font-semibold text-accent-600">
                    {index + 1}
                  </span>
                </div>

                {/* Step text */}
                <p className="pt-1 text-base leading-relaxed text-text-body md:mt-4 md:max-w-[14rem] md:pt-0">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Button variant="default" size="lg" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
