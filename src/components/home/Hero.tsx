"use client";

import Link from "next/link";
import { m, useReducedMotion } from "motion/react";
import { SITE_CONFIG } from "@/lib/constants";

const PREMIUM_EASE = [0.25, 0.1, 0.25, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: PREMIUM_EASE, delay },
  };
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const motionProps = (delay: number) =>
    shouldReduceMotion
      ? { initial: { opacity: 1, y: 0 } }
      : fadeUp(delay);

  return (
    <>
      {/* TODO: Replace gradient with actual landscape image using next/image */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800"
        aria-label="Welcome to St Katharine Rural Connect"
      >
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-4 py-24 text-center md:py-32 lg:py-40">
          {/* Gold accent line */}
          <m.div
            className="mx-auto mb-8 h-[2px] bg-accent-500"
            initial={shouldReduceMotion ? { width: 80 } : { width: 0 }}
            animate={{ width: 80 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.8, ease: PREMIUM_EASE }
            }
            aria-hidden="true"
          />

          {/* Overline */}
          <m.p
            className="mb-6 text-overline font-bold uppercase tracking-widest text-accent-500"
            {...motionProps(0.2)}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : fadeUp(0.2).animate}
          >
            St Katharine Rural Connect
          </m.p>

          {/* Main heading */}
          <m.h1
            className="mx-auto mb-6 max-w-4xl font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-display"
            {...motionProps(0.4)}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : fadeUp(0.4).animate}
          >
            Strengthening rural communities through support, connection, and care
          </m.h1>

          {/* Subheading */}
          <m.p
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-stone-100"
            {...motionProps(0.55)}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : fadeUp(0.55).animate}
          >
            We serve farmers, offshore workers, families, and community members
            by creating accessible pathways to wellness, practical resources, and
            meaningful belonging.
          </m.p>

          {/* CTAs */}
          <m.div
            className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            {...motionProps(0.7)}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : fadeUp(0.7).animate}
          >
            <Link
              href="/contact"
              className="inline-flex rounded-md bg-accent-500 px-8 py-3 font-medium text-primary-950 transition-colors duration-300 hover:bg-accent-400"
            >
              Get in Touch
            </Link>
            <Link
              href="/events"
              className="inline-flex rounded-md border-2 border-white px-8 py-3 font-medium text-white transition-colors duration-300 hover:bg-white/10"
            >
              See What&apos;s On
            </Link>
          </m.div>

          {/* Crisis line */}
          <m.p
            className="text-sm text-stone-300"
            {...motionProps(0.85)}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : fadeUp(0.85).animate}
          >
            Need to talk now? Call{" "}
            <a
              href={SITE_CONFIG.phoneHref}
              className="font-medium text-stone-100 underline decoration-stone-400 underline-offset-2 transition-colors duration-200 hover:text-accent-400 hover:decoration-accent-400"
            >
              {SITE_CONFIG.phone}
            </a>
          </m.p>
        </div>
      </section>
    </>
  );
}
