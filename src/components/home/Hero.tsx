"use client";

import { m, useReducedMotion } from "motion/react";
import { SITE_CONFIG } from "@/lib/constants";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";
import { CircleArrowCTA } from "@/components/shared/CircleArrowCTA";

const PREMIUM_EASE = [0.25, 0.1, 0.25, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: PREMIUM_EASE, delay },
  };
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const motionProps = (delay: number) =>
    shouldReduceMotion
      ? { initial: { opacity: 1, y: 0 } }
      : fadeUp(delay);

  return (
    <section className="px-4 pt-4" aria-label="Welcome to St Katharine Rural Connect">
      <div
        className="relative overflow-hidden rounded-[20px]"
        style={{ minHeight: "75vh" }}
      >
        {/* Background placeholder — TODO: replace with next/image when real photo is ready */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800"
          aria-hidden="true"
        />

        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        {/* Content positioned at bottom */}
        <div className="relative z-10 flex min-h-[75vh] items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-12 pt-32 md:px-12 md:pb-20 md:pt-40 lg:px-16">
            {/* Two-column layout */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
              {/* Left: Heading */}
              <m.div
                {...motionProps(0.1)}
                animate={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : fadeUp(0.1).animate
                }
              >
                <EmphasisHeading
                  text="Support That *Strengthens* the Heart of *Rural Life*"
                  as="h1"
                  className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-display"
                />
              </m.div>

              {/* Right: Subtext + CTA */}
              <m.div
                className="flex flex-col justify-end"
                {...motionProps(0.3)}
                animate={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : fadeUp(0.3).animate
                }
              >
                <p className="mb-8 max-w-md text-lg leading-relaxed text-white/80">
                  We serve farmers, offshore workers, families, and community
                  members by creating accessible pathways to wellness, practical
                  resources, and meaningful belonging.
                </p>
                <CircleArrowCTA
                  label="Get in Touch"
                  href="/contact"
                  variant="light"
                />
              </m.div>
            </div>

            {/* Crisis line */}
            <m.p
              className="mt-10 text-sm text-white/50"
              {...motionProps(0.5)}
              animate={
                shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : fadeUp(0.5).animate
              }
            >
              Need to talk now? Call{" "}
              <a
                href={SITE_CONFIG.phoneHref}
                className="font-medium text-white/70 underline decoration-white/30 underline-offset-2 transition-colors duration-200 hover:text-white hover:decoration-white/60"
              >
                {SITE_CONFIG.phone}
              </a>
            </m.p>
          </div>
        </div>
      </div>
    </section>
  );
}
