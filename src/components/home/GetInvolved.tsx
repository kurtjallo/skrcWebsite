"use client";

import Link from "next/link";
import { m, useReducedMotion } from "motion/react";
import { HandHelping, Handshake, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GoldAccentLine } from "@/components/shared/GoldAccentLine";
import { SITE_CONFIG } from "@/lib/constants";

interface EngagementCard {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  ctaVariant: "secondary" | "primary";
}

const engagementCards: EngagementCard[] = [
  {
    icon: HandHelping,
    title: "Volunteer With Us",
    description:
      "Give your time and skills to help strengthen your community. From events to mentoring, there's a role for everyone.",
    ctaText: "Find Out How",
    ctaHref: "/get-involved",
    ctaVariant: "secondary",
  },
  {
    icon: Handshake,
    title: "Become a Partner",
    description:
      "Join a network of organisations committed to rural wellbeing. Together, we can reach more people and make a bigger impact.",
    ctaText: "Partner With Us",
    ctaHref: "/partnerships",
    ctaVariant: "secondary",
  },
  {
    icon: Heart,
    title: "Support Our Work",
    description:
      "Your donation helps us keep services free and accessible for everyone who needs them. Every contribution counts.",
    ctaText: "Donate Today",
    ctaHref: SITE_CONFIG.zeffyDonateUrl,
    ctaVariant: "primary",
  },
];

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

export default function GetInvolved() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-stone-100 py-16 md:py-24" aria-label="Get involved">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-3 text-overline font-bold uppercase tracking-widest text-accent-600">
            Get Involved
          </p>
          <h2 className="mb-4 font-heading text-4xl font-semibold text-text-primary">
            Be Part of Something Meaningful
          </h2>
          <p className="mx-auto max-w-2xl text-text-muted">
            There are many ways to support rural communities &mdash; and every
            contribution makes a difference.
          </p>
        </div>

        <m.div
            className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              staggerChildren: shouldReduceMotion ? 0 : 0.12,
            }}
          >
            {engagementCards.map((card) => {
              const Icon = card.icon;
              return (
                <m.div
                  key={card.title}
                  className="group relative overflow-hidden rounded-lg bg-white p-8 text-center shadow-sm transition-[transform,box-shadow] duration-300 ease-premium hover:-translate-y-1 hover:shadow-md"
                  variants={
                    shouldReduceMotion
                      ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
                      : cardVariants
                  }
                >
                  {/* Gold top border on hover */}
                  <GoldAccentLine
                    className="absolute left-0 top-0"
                    animated
                  />

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-stone-100 text-primary-600">
                    <Icon
                      className="h-7 w-7"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-4 font-heading text-2xl font-semibold text-text-primary">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-base text-text-body">
                    {card.description}
                  </p>

                  {card.ctaHref.startsWith("http") ? (
                    <a
                      href={card.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-6 inline-block rounded-md px-6 py-2.5 font-medium transition-colors duration-300 ${
                        card.ctaVariant === "primary"
                          ? "bg-accent-500 text-primary-950 hover:bg-accent-400"
                          : "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
                      }`}
                    >
                      {card.ctaText}
                    </a>
                  ) : (
                    <Link
                      href={card.ctaHref}
                      className={`mt-6 inline-block rounded-md px-6 py-2.5 font-medium transition-colors duration-300 ${
                        card.ctaVariant === "primary"
                          ? "bg-accent-500 text-primary-950 hover:bg-accent-400"
                          : "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
                      }`}
                    >
                      {card.ctaText}
                    </Link>
                  )}
                </m.div>
              );
            })}
        </m.div>
      </div>
    </section>
  );
}
