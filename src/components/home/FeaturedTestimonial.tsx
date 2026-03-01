"use client";

import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "motion/react";
import { testimonials } from "@/data/testimonials";

const PREMIUM_EASE = [0.25, 0.1, 0.25, 1] as const;

interface FeaturedTestimonialProps {
  index?: number;
}

export default function FeaturedTestimonial({
  index = 0,
}: FeaturedTestimonialProps) {
  const shouldReduceMotion = useReducedMotion();
  const testimonial = testimonials[index];

  if (!testimonial) return null;

  const noMotion = { opacity: 1, y: 0, scale: 1 };

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="bg-stone-100 py-16 md:py-24"
        aria-label="Testimonial"
      >
        <m.div
          className="mx-auto max-w-4xl px-4 text-center"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: PREMIUM_EASE }}
        >
          {/* Decorative gold quote mark */}
          <m.div
            className="mb-6 select-none font-heading text-[6rem] leading-none text-accent-500 opacity-30 md:text-[8rem]"
            initial={
              shouldReduceMotion
                ? noMotion
                : { opacity: 0, scale: 0.8 }
            }
            whileInView={shouldReduceMotion ? noMotion : { opacity: 0.3, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: PREMIUM_EASE }}
            aria-hidden="true"
          >
            &ldquo;
          </m.div>

          <blockquote className="-mt-16 md:-mt-20">
            {/* Quote text */}
            <m.p
              className="mx-auto max-w-prose font-heading text-2xl font-normal italic leading-relaxed text-text-primary md:text-3xl"
              initial={
                shouldReduceMotion ? noMotion : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                ease: PREMIUM_EASE,
                delay: shouldReduceMotion ? 0 : 0.2,
              }}
            >
              {testimonial.quote}
            </m.p>

            {/* Attribution */}
            <m.footer
              className="mt-6"
              initial={
                shouldReduceMotion ? noMotion : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                ease: PREMIUM_EASE,
                delay: shouldReduceMotion ? 0 : 0.4,
              }}
            >
              <cite className="not-italic text-base text-text-muted">
                &mdash; {testimonial.firstName}, {testimonial.identifier}
              </cite>

              {/* Thin gold accent line */}
              <div
                className="mx-auto mt-6 h-[1px] w-10 bg-accent-500"
                aria-hidden="true"
              />
            </m.footer>
          </blockquote>
        </m.div>
      </section>
    </LazyMotion>
  );
}
