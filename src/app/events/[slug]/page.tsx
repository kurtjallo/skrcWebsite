import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Monitor,
  Wifi,
} from "lucide-react";
import { events } from "@/data/events";
import {
  AUDIENCE_LABELS,
  TYPE_LABELS,
  FORMAT_LABELS,
} from "@/types/event";
import type { Event } from "@/types/event";
import type { Metadata } from "next";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: `${event.title} | Events | St Katharine Rural Connect`,
    description: event.description,
  };
}

const FORMAT_ICONS: Record<
  Event["format"],
  React.ComponentType<{ className?: string }>
> = {
  virtual: Monitor,
  "in-person": MapPin,
  hybrid: Wifi,
};

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const eventDate = new Date(event.date + "T00:00:00");
  const formattedDate = eventDate.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const timeDisplay = event.endTime
    ? `${event.time} \u2013 ${event.endTime}`
    : event.time;
  const FormatIcon = FORMAT_ICONS[event.format];

  return (
    <main id="main-content" className="min-h-screen bg-stone-50">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Back link */}
        <Link
          href="/events"
          className="group mb-8 inline-flex items-center gap-2 font-body font-medium text-accent-600 hover:text-accent-500"
        >
          <ArrowLeft className="h-4 w-4 transition-transform motion-safe:group-hover:-translate-x-1" />
          Back to Events
        </Link>

        {/* Event header */}
        <p className="mb-3 font-body text-sm font-bold uppercase tracking-wider text-accent-600">
          {TYPE_LABELS[event.type]}
        </p>
        <h1 className="mb-6 font-heading text-3xl font-semibold text-primary-900 sm:text-4xl">
          {event.title}
        </h1>

        {/* Metadata grid */}
        <div className="mb-8 grid grid-cols-1 gap-4 rounded-xl border border-stone-200 bg-white p-6 sm:grid-cols-2">
          {/* Date */}
          <div className="flex items-start gap-3">
            <Calendar
              className="mt-0.5 h-5 w-5 shrink-0 text-accent-500"
              aria-hidden="true"
            />
            <time dateTime={event.date} className="font-body text-text-body">
              {formattedDate}
            </time>
          </div>

          {/* Time */}
          <div className="flex items-start gap-3">
            <Clock
              className="mt-0.5 h-5 w-5 shrink-0 text-accent-500"
              aria-hidden="true"
            />
            <span className="font-body text-text-body">{timeDisplay}</span>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <MapPin
              className="mt-0.5 h-5 w-5 shrink-0 text-accent-500"
              aria-hidden="true"
            />
            <span className="font-body text-text-body">{event.location}</span>
          </div>

          {/* Format */}
          <div className="flex items-start gap-3">
            <FormatIcon
              className="mt-0.5 h-5 w-5 shrink-0 text-accent-500"
              aria-hidden="true"
            />
            <span className="font-body text-text-body">
              {FORMAT_LABELS[event.format]}
            </span>
          </div>
        </div>

        {/* Audience badges */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="mr-2 font-body text-sm font-semibold text-text-muted">
            Who it&rsquo;s for:
          </span>
          {event.audience.map((audience) => (
            <span
              key={audience}
              className="rounded-full bg-stone-200 px-3 py-1 font-body text-sm font-medium text-text-body"
            >
              {AUDIENCE_LABELS[audience]}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="mb-10">
          <p className="font-body text-lg leading-relaxed text-text-body">
            {event.description}
          </p>
        </div>

        {/* CTA section */}
        <div className="rounded-xl bg-stone-100 p-8 text-center">
          <h2 className="mb-3 font-heading text-2xl font-semibold text-primary-900">
            Interested in attending?
          </h2>
          <p className="mb-6 font-body text-text-muted">
            Get in touch and we&rsquo;ll save you a place.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-primary-900 px-8 py-3 font-body font-semibold text-stone-50 transition-colors duration-200 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
          >
            Register Your Interest
          </Link>
        </div>

        {/* Bottom back link */}
        <div className="mt-10">
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 font-body font-medium text-accent-600 hover:text-accent-500"
          >
            <ArrowLeft className="h-4 w-4 transition-transform motion-safe:group-hover:-translate-x-1" />
            Back to Events
          </Link>
        </div>
      </div>
    </main>
  );
}
