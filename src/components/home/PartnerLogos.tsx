"use client";

import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "motion/react";
import { partners } from "@/data/partners";

export default function PartnerLogos() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="bg-stone-100 py-12 md:py-16"
        aria-label="Our partners and supporters"
      >
        {/* Thin gold separator */}
        <div
          className="mx-auto mb-10 h-[1px] max-w-4xl bg-accent-500 opacity-20"
          aria-hidden="true"
        />

        <m.div
          className="mx-auto max-w-6xl px-4 text-center"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="mb-8 text-sm font-bold uppercase tracking-widest text-text-muted">
            Supported By
          </p>

          {/* TODO: Replace text names with actual partner logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <span
                key={partner.id}
                className="text-lg text-text-muted opacity-50 transition-opacity duration-300 hover:opacity-100"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </m.div>
      </section>
    </LazyMotion>
  );
}
