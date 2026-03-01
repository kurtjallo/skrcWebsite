"use client";

import Link from "next/link";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "motion/react";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { events } from "@/data/events";
import type { EventFormat } from "@/types/event";

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

const FORMAT_STYLES: Record<EventFormat, string> = {
  "in-person": "bg-accent-100 text-accent-600",
  virtual: "bg-secondary-100 text-primary-700",
  hybrid: "bg-stone-200 text-text-body",
};

function formatEventDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  const day = new Intl.DateTimeFormat("en-GB", { day: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en-GB", { month: "short" }).format(date);
  return { day, month: month.toUpperCase() };
}

function formatLabel(format: EventFormat): string {
  const labels: Record<EventFormat, string> = {
    "in-person": "In Person",
    virtual: "Virtual",
    hybrid: "Hybrid",
  };
  return labels[format];
}

export default function EventsPreview() {
  const shouldReduceMotion = useReducedMotion();

  // Sort events by date ascending, take first 3
  const upcomingEvents = [...events]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  return (
    <section className="bg-stone-50 py-16 md:py-24" aria-label="Upcoming events">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <p className="mb-3 text-overline font-bold uppercase tracking-widest text-accent-600">
            Upcoming Events
          </p>
          <h2 className="mb-4 font-heading text-4xl font-semibold text-text-primary">
            What&apos;s Coming Up
          </h2>
          <p className="text-text-muted">
            Join us at our upcoming events and workshops.
          </p>
        </div>

        <LazyMotion features={domAnimation}>
          <m.div
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              staggerChildren: shouldReduceMotion ? 0 : 0.12,
            }}
          >
            {upcomingEvents.map((event) => {
              const { day, month } = formatEventDate(event.date);
              return (
                <m.div
                  key={event.slug}
                  variants={
                    shouldReduceMotion
                      ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
                      : cardVariants
                  }
                >
                  <Link
                    href={`/events/${event.slug}`}
                    className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-md"
                  >
                    {/* Date badge */}
                    <div className="bg-primary-800 p-4 text-center text-white">
                      <p className="font-heading text-3xl font-bold">{day}</p>
                      <p className="text-sm uppercase tracking-wide">{month}</p>
                    </div>

                    {/* Card body */}
                    <div className="p-5">
                      {/* Format badge */}
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${FORMAT_STYLES[event.format]}`}
                      >
                        {formatLabel(event.format)}
                      </span>

                      <h3 className="mt-3 font-heading text-xl font-semibold text-text-primary">
                        {event.title}
                      </h3>

                      <div className="mt-2 space-y-1">
                        <p className="flex items-center gap-1.5 text-sm text-text-muted">
                          <Clock
                            className="h-3.5 w-3.5 shrink-0"
                            aria-hidden="true"
                          />
                          {event.time}
                          {event.endTime && ` – ${event.endTime}`}
                        </p>
                        <p className="flex items-center gap-1.5 text-sm text-text-muted">
                          <MapPin
                            className="h-3.5 w-3.5 shrink-0"
                            aria-hidden="true"
                          />
                          {event.location}
                        </p>
                      </div>
                    </div>
                  </Link>
                </m.div>
              );
            })}
          </m.div>
        </LazyMotion>

        {/* View All Events link */}
        <div className="mt-10 text-center">
          <Link
            href="/events"
            className="group inline-flex items-center gap-1.5 font-medium text-accent-600 transition-colors duration-200 hover:text-accent-500"
          >
            View All Events
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
