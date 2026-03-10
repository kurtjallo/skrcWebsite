"use client";

import { useEffect, useRef } from "react";
import {
  m,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from "motion/react";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";
import { impactStats } from "@/data/homepage";

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));

  useEffect(() => {
    if (shouldReduceMotion) {
      if (ref.current) {
        ref.current.textContent = `${value}${suffix}`;
      }
      return;
    }

    if (inView) {
      const controls = animate(motionValue, value, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, value, duration, motionValue, shouldReduceMotion, suffix]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${v}${suffix}`;
      }
    });
    return unsubscribe;
  }, [rounded, suffix, shouldReduceMotion]);

  return (
    <span ref={ref}>
      {shouldReduceMotion ? `${value}${suffix}` : `0${suffix}`}
    </span>
  );
}

export default function WhoWeAre() {
  return (
    <section
      className="bg-surface-page py-20 md:py-28"
      aria-label="Who we are"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel text="WHO WE ARE" />

        {/* Large statement */}
        <div className="mt-8 max-w-5xl">
          <EmphasisHeading
            text="St Katharine Rural Connect is a *community-rooted* initiative *strengthening* social, emotional, and practical support systems for *rural people* and places."
            as="h2"
            className="text-3xl font-normal leading-snug text-primary-900 md:text-4xl lg:text-[2.75rem] lg:leading-snug"
            accentItalic
          />
        </div>

        {/* Stats row — white cards with left blue border accent */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {impactStats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl border-l-[3px] border-accent-500 bg-white px-6 py-8"
              role="figure"
              aria-label={`${stat.value}${stat.suffix ?? ""} ${stat.label}`}
            >
              <p className="font-heading text-4xl font-light text-primary-900 md:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={2}
                />
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
