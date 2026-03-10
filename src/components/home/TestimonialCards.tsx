"use client";

import Image from "next/image";
import { m, useReducedMotion } from "motion/react";
import { Play } from "lucide-react";
import { PORTRAITS } from "@/lib/placeholders";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { EmphasisHeading } from "@/components/shared/EmphasisHeading";
import { testimonials } from "@/data/testimonials";

const PORTRAIT_IMAGES = [PORTRAITS.man1, PORTRAITS.woman1, PORTRAITS.man2];

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

export default function TestimonialCards() {
  const shouldReduceMotion = useReducedMotion();
  const featured = testimonials.slice(0, 3);

  return (
    <section className="bg-surface-page py-20 md:py-28" aria-label="Testimonials">
      {/* Thin divider */}
      <div className="mx-auto mb-16 h-px max-w-7xl bg-divider" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionLabel text="TESTIMONIALS" align="center" />
          <EmphasisHeading
            text="What *Our Community* Says"
            as="h2"
            className="mt-6 text-3xl font-semibold text-primary-900 md:text-4xl"
          />
        </div>

        <m.div
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.12 }}
        >
          {featured.map((testimonial, index) => (
            <m.article
              key={testimonial.id}
              className="group relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: "3/4" }}
              variants={
                shouldReduceMotion
                  ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
                  : cardVariants
              }
            >
              <Image
                src={PORTRAIT_IMAGES[index % PORTRAIT_IMAGES.length]}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Dark gradient from bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/40 to-transparent" />

              {/* Play button (decorative — no video functionality) */}
              <div
                className="absolute right-4 bottom-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <Play className="h-4 w-4 text-white" fill="white" />
              </div>

              {/* Quote content */}
              <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8">
                <blockquote>
                  <p className="text-sm leading-relaxed text-white/90 md:text-base">
                    &ldquo;
                    {testimonial.quote.length > 180
                      ? testimonial.quote.slice(0, 180) + "..."
                      : testimonial.quote}
                    &rdquo;
                  </p>
                  <footer className="mt-4">
                    <cite className="not-italic">
                      <span className="block font-heading text-base font-semibold text-white">
                        {testimonial.firstName}
                      </span>
                      <span className="text-xs text-white/60">
                        {testimonial.identifier}
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  );
}
