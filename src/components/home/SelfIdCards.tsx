"use client";

import Link from "next/link";
import { m, useReducedMotion } from "motion/react";
import { Tractor, Ship, Home, HandHeart, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { selfIdCards } from "@/data/homepage";
import { GoldAccentLine } from "@/components/shared/GoldAccentLine";

const ICON_MAP: Record<string, LucideIcon> = {
  Tractor,
  Ship,
  Home,
  HandHeart,
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

export default function SelfIdCards() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-stone-100 py-16 md:py-24" aria-label="Find support for you">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-3 text-overline font-bold uppercase tracking-widest text-accent-600">
            I Am A...
          </p>
          <h2 className="font-heading text-4xl font-semibold text-text-primary">
            Find Support For You
          </h2>
        </div>

        <m.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              staggerChildren: shouldReduceMotion ? 0 : 0.12,
            }}
          >
            {selfIdCards.map((card) => {
              const Icon = ICON_MAP[card.icon];
              return (
                <m.div
                  key={card.id}
                  variants={
                    shouldReduceMotion
                      ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
                      : cardVariants
                  }
                >
                  <Link
                    href={card.href}
                    className="group relative block overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-[transform,box-shadow] duration-300 ease-premium hover:-translate-y-1 hover:shadow-md"
                  >
                    {/* Gold top border on hover */}
                    <GoldAccentLine
                      className="absolute left-0 top-0"
                      animated
                    />

                    {Icon && (
                      <Icon
                        className="h-10 w-10 text-accent-500"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    )}
                    <h3 className="mt-3 font-heading text-xl font-semibold text-text-primary">
                      {card.label}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted">
                      {card.description}
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
      </div>
    </section>
  );
}
