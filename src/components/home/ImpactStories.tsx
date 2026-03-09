"use client";

import Image from "next/image";
import { m, useReducedMotion } from "motion/react";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";
import { CircleArrowCTA } from "@/components/shared/CircleArrowCTA";
import { impactStories } from "@/data/impact-stories";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function ImpactStories() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-surface-page py-20 md:py-28" aria-label="Impact stories">
      {/* Thin divider */}
      <div className="mx-auto mb-16 h-px max-w-7xl bg-divider" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionLabel text="IMPACT STORIES" align="center" />
          <EmphasisHeading
            text="Real *Impact* Across Our Communities"
            as="h2"
            className="mt-6 text-3xl font-semibold text-primary-900 md:text-4xl"
          />
        </div>

        {/* Story cards — stacked full-width */}
        <m.div
          className="mt-14 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.15 }}
        >
          {impactStories.map((story) => (
            <m.article
              key={story.id}
              className="group relative overflow-hidden rounded-2xl"
              style={{ minHeight: "340px" }}
              variants={
                shouldReduceMotion
                  ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
                  : cardVariants
              }
            >
              <Image
                src={story.imageUrl}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 via-primary-950/50 to-transparent" />

              {/* Content */}
              <div className="relative z-10 flex min-h-[340px] flex-col justify-between p-8 md:p-10 lg:p-12">
                {/* Top: Tags */}
                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <span
                      key={tag.text}
                      className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                        tag.variant === "filled"
                          ? "bg-accent-500 text-white"
                          : "bg-white/20 text-white backdrop-blur-sm"
                      }`}
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>

                {/* Bottom: Headline + CTA */}
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-2xl">
                    <h3 className="font-heading text-2xl font-semibold text-white md:text-3xl">
                      {story.headline}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {story.description}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <CircleArrowCTA
                      label="Read More"
                      href={story.href}
                      variant="light"
                    />
                  </div>
                </div>
              </div>
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  );
}
