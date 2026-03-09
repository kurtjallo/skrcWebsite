"use client";

import Image from "next/image";
import { m, useReducedMotion } from "motion/react";
import { Phone, Ear, Link2, HeartHandshake } from "lucide-react";
import { SECTION_IMAGES } from "@/lib/placeholders";
import type { LucideIcon } from "lucide-react";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";
import { CircleArrowCTA } from "@/components/shared/CircleArrowCTA";

interface ApproachStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: ApproachStep[] = [
  {
    number: "01",
    title: "Reach Out",
    description:
      "Get in touch by phone, email, or through our online form. There's no wrong way to start.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Listen & Understand",
    description:
      "We take time to hear what's going on and understand what matters most to you.",
    icon: Ear,
  },
  {
    number: "03",
    title: "Connect & Support",
    description:
      "We link you with the right services, resources, and people who can help.",
    icon: Link2,
  },
  {
    number: "04",
    title: "Walk Alongside",
    description:
      "We stay connected, check in, and make sure you have ongoing support when you need it.",
    icon: HeartHandshake,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function OurApproach() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-surface-page py-20 md:py-28" aria-label="Our approach">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel text="OUR APPROACH" />

        {/* Large statement */}
        <EmphasisHeading
          text="At St Katharine Rural Connect, we believe *support* should be more than a *service* — it should feel like *community*."
          as="h2"
          className="mt-8 max-w-5xl text-3xl font-normal leading-snug text-primary-900 md:text-4xl lg:text-[2.75rem] lg:leading-snug"
          accentItalic
        />

        {/* Two-column: Image left, steps right */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Image */}
          <div className="relative min-h-[400px] overflow-hidden rounded-2xl lg:min-h-0">
            <Image
              src={SECTION_IMAGES.approach}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: Step cards */}
          <m.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.1 }}
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <m.div
                  key={step.number}
                  className="rounded-2xl bg-white p-6"
                  variants={
                    shouldReduceMotion
                      ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
                      : cardVariants
                  }
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-100 text-accent-500">
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="font-heading text-3xl font-light text-stone-300">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-primary-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </m.div>
              );
            })}
          </m.div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <CircleArrowCTA label="Get Started Today" href="/contact" />
        </div>
      </div>
    </section>
  );
}
