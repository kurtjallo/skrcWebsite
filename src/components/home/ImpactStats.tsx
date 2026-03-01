"use client";

import { useEffect, useRef } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from "motion/react";
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

export default function ImpactStats() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="bg-primary-900 py-16 md:py-24"
        aria-label="Our impact in numbers"
      >
        <div className="mx-auto max-w-6xl px-4">
          {/* Overline */}
          <m.div
            className="mb-10 text-center"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="mb-4 text-overline font-bold uppercase tracking-widest text-accent-500">
              Our Impact
            </p>
            {/* Thin gold accent line */}
            <div
              className="mx-auto h-[1px] w-[60px] bg-accent-500 opacity-60"
              aria-hidden="true"
            />
          </m.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {impactStats.map((stat, index) => (
              <div
                key={stat.id}
                className={`text-center ${
                  index < impactStats.length - 1
                    ? "md:border-r md:border-primary-700"
                    : ""
                }`}
                role="figure"
                aria-label={`${stat.value}${stat.suffix ?? ""} ${stat.label}`}
              >
                <p className="font-heading text-5xl font-light text-white md:text-display">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2}
                  />
                </p>
                <p className="mt-2 text-base text-stone-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
