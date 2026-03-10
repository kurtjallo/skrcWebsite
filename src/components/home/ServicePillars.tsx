"use client";

import Image from "next/image";
import Link from "next/link";
import { m, useReducedMotion } from "motion/react";
import { Heart, Wheat, Anchor, Users } from "lucide-react";
import { HERO_IMAGES } from "@/lib/placeholders";
import type { LucideIcon } from "lucide-react";
import { servicePillars } from "@/data/homepage";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";
import { CircleArrowCTA } from "@/components/shared/CircleArrowCTA";

const ICON_MAP: Record<string, LucideIcon> = {
  Heart,
  Wheat,
  Anchor,
  Users,
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function ServicePillars() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-surface-page py-20 md:py-28" aria-label="Our services">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel text="OUR SERVICES" />
        <EmphasisHeading
          text="Four Pillars of *Support*"
          as="h2"
          className="mt-6 text-3xl font-semibold text-primary-900 md:text-4xl"
        />

        {/* Grid: 2x2 service cards + tall CTA card */}
        <m.div
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.1 }}
        >
          {/* 2x2 grid on the left (takes 2 columns) */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:col-span-2">
            {servicePillars.map((pillar) => {
              const Icon = ICON_MAP[pillar.icon];
              return (
                <m.div
                  key={pillar.id}
                  variants={
                    shouldReduceMotion
                      ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
                      : cardVariants
                  }
                >
                  <Link
                    href={`/services/${pillar.slug}`}
                    className="group block rounded-2xl bg-white p-7 transition-[transform,box-shadow] duration-300 ease-premium hover:-translate-y-1 hover:shadow-lg"
                  >
                    {Icon && (
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-100 text-accent-500">
                        <Icon
                          className="h-5 w-5"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>
                    )}
                    <h3 className="font-heading text-xl font-semibold text-primary-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text-muted">
                      {pillar.description}
                    </p>
                  </Link>
                </m.div>
              );
            })}
          </div>

          {/* Tall CTA card spanning both rows */}
          <m.div
            variants={
              shouldReduceMotion
                ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
                : cardVariants
            }
          >
            <div className="relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl p-8">
              <Image
                src={HERO_IMAGES.home}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/50 to-primary-950/30" />
              <div className="relative z-10">
                <EmphasisHeading
                  text="Start Your *Support Journey*"
                  as="h3"
                  className="mb-4 text-2xl font-semibold text-white md:text-3xl"
                />
                <p className="mb-6 text-sm leading-relaxed text-white/70">
                  Not sure where to begin? Get in touch and we&apos;ll help you
                  find the right support.
                </p>
                <CircleArrowCTA
                  label="Get in Touch"
                  href="/contact"
                  variant="light"
                />
              </div>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
