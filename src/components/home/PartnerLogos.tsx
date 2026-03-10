"use client";

import { m, useReducedMotion } from "motion/react";
import { partners } from "@/data/partners";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";

export default function PartnerLogos() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="bg-surface-page py-20 md:py-28"
      aria-label="Our partners and supporters"
    >
      {/* Thin divider */}
      <div
        className="mx-auto mb-16 h-px max-w-7xl bg-divider"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 text-center">
        <SectionLabel text="WE WORK WITH" align="center" />
        <EmphasisHeading
          text="*Trusted* By"
          as="h2"
          className="mt-6 text-3xl font-semibold text-primary-900 md:text-4xl"
        />

        {/* 2x4 grid of partner cards */}
        <m.div
          className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center rounded-2xl bg-white px-6 py-8 transition-shadow duration-300 hover:shadow-md"
            >
              {/* TODO: Replace with actual logo images in monochrome navy */}
              <span className="text-center font-heading text-sm font-semibold text-primary-900/60">
                {partner.name}
              </span>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
