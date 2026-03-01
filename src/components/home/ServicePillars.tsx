"use client";

import Link from "next/link";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "motion/react";
import { Heart, Wheat, Anchor, Users, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { servicePillars } from "@/data/homepage";
import { GoldAccentLine } from "@/components/shared/GoldAccentLine";

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
    <section className="bg-stone-50 py-16 md:py-24" aria-label="Our services">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-3 text-overline font-bold uppercase tracking-widest text-accent-600">
            Our Services
          </p>
          <h2 className="mb-4 font-heading text-4xl font-semibold text-text-primary">
            Four Pillars of Support
          </h2>
          <p className="mx-auto max-w-2xl text-text-muted">
            Whether you need someone to talk to, practical help on the farm, or
            a place to feel part of something -- we&apos;re here for you.
          </p>
        </div>

        <LazyMotion features={domAnimation}>
          <m.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              staggerChildren: shouldReduceMotion ? 0 : 0.12,
            }}
          >
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
                    className="group relative block overflow-hidden rounded-lg bg-white p-8 shadow-sm transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-md"
                  >
                    {/* Gold top border on hover */}
                    <GoldAccentLine
                      className="absolute left-0 top-0"
                      animated
                    />

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 text-primary-700">
                      {Icon && (
                        <Icon
                          className="h-6 w-6"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    <h3 className="mt-4 font-heading text-2xl font-semibold text-text-primary">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-base text-text-body">
                      {pillar.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-600 transition-colors duration-200 group-hover:text-accent-500">
                      Learn more
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </m.div>
              );
            })}
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}
