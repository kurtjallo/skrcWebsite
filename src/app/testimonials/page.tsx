import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { testimonials } from "@/data/testimonials";
import type { AudienceSegment } from "@/types";

export const metadata = createMetadata({
  title: "Testimonials",
  description:
    "Hear from farmers, offshore workers, families, and community members about how St Katharine Rural Connect has made a difference in their lives.",
  path: "/testimonials",
});

const segmentStyles: Record<
  AudienceSegment,
  { label: string; borderColor: string; bgColor: string; iconColor: string }
> = {
  farmer: {
    label: "Farmer",
    borderColor: "border-l-green-700",
    bgColor: "bg-green-50",
    iconColor: "text-green-700",
  },
  "offshore-worker": {
    label: "Offshore Worker",
    borderColor: "border-l-blue-700",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-700",
  },
  community: {
    label: "Community Member",
    borderColor: "border-l-secondary-500",
    bgColor: "bg-secondary-100",
    iconColor: "text-secondary-700",
  },
  family: {
    label: "Family Member",
    borderColor: "border-l-accent-500",
    bgColor: "bg-accent-100",
    iconColor: "text-accent-600",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Section 1: Page Header */}
      <section className="bg-stone-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-body text-overline font-bold uppercase tracking-widest text-accent-600">
            Testimonials
          </p>
          <h1 className="mt-4 font-heading text-5xl font-semibold text-text-primary">
            Voices from Our Community
          </h1>
          <p className="mt-6 max-w-prose text-lg text-text-body">
            The people we serve are at the heart of everything we do. Here are
            some of their stories &mdash; in their own words.
          </p>
        </div>
      </section>

      {/* Section 2: Testimonials Grid */}
      <section className="bg-stone-100 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial) => {
              const style = segmentStyles[testimonial.segment];
              return (
                <blockquote
                  key={testimonial.id}
                  className={`rounded-lg border border-stone-200 border-l-4 p-8 shadow-sm ${style.bgColor} ${style.borderColor}`}
                >
                  <span
                    aria-hidden="true"
                    className="mb-2 block font-heading text-5xl leading-none text-accent-500"
                  >
                    &ldquo;
                  </span>
                  <p className="text-base italic leading-relaxed text-text-body">
                    {testimonial.quote}
                  </p>
                  <footer className="mt-4">
                    <cite className="block text-sm font-medium not-italic text-text-primary">
                      &mdash; {testimonial.firstName}, {testimonial.identifier}
                    </cite>
                    <span
                      className={`mt-3 inline-block rounded-full border border-current/20 px-3 py-1 text-xs font-medium ${style.iconColor} ${style.bgColor}`}
                    >
                      {style.label}
                    </span>
                  </footer>
                </blockquote>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: CTA Section */}
      <section className="bg-primary-900 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-heading text-4xl font-semibold text-text-on-dark">
            Your Story Matters Too
          </h2>
          <p className="mx-auto mt-6 max-w-prose text-lg text-stone-300">
            Whether you&rsquo;re a farmer, offshore worker, family member, or
            community member, we&rsquo;re here for you. Every conversation is
            confidential, and there&rsquo;s never any pressure.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-accent-500 px-8 py-4 font-body font-semibold text-primary-950 transition-colors duration-300 hover:bg-accent-400"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
