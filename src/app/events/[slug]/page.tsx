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
import type { Event, EventFormat } from "@/types/event";
import type { Metadata } from "next";
import { JsonLd, communityEventSchema } from "@/components/shared/JsonLd";
import { CircleArrowCTA } from "@/components/shared/CircleArrowCTA";
import { SITE_CONFIG } from "@/lib/constants";

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
    title: `${event.title} | St Katharine Rural Connect`,
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

const FORMAT_ATTENDANCE_MODE: Record<EventFormat, "online" | "offline" | "mixed"> = {
  virtual: "online",
  "in-person": "offline",
  hybrid: "mixed",
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

  // Build ISO datetime for JSON-LD structured data
  const eventUrl = `${SITE_CONFIG.url}/events/${event.slug}`;
  const startDateISO = `${event.date}T${event.time.replace(/(\d+):(\d+)\s*(AM|PM)/i, (_m, h, min, ap) => {
    let hour = parseInt(h, 10);
    if (ap.toUpperCase() === "PM" && hour !== 12) hour += 12;
    if (ap.toUpperCase() === "AM" && hour === 12) hour = 0;
    return `${hour.toString().padStart(2, "0")}:${min}:00`;
  })}`;
  let endDateISO: string | undefined;
  if (event.endTime) {
    endDateISO = `${event.date}T${event.endTime.replace(/(\d+):(\d+)\s*(AM|PM)/i, (_m, h, min, ap) => {
      let hour = parseInt(h, 10);
      if (ap.toUpperCase() === "PM" && hour !== 12) hour += 12;
      if (ap.toUpperCase() === "AM" && hour === 12) hour = 0;
      return `${hour.toString().padStart(2, "0")}:${min}:00`;
    })}`;
  }

  return (
    <>
      <JsonLd
        data={communityEventSchema({
          name: event.title,
          description: event.description,
          startDate: startDateISO,
          endDate: endDateISO,
          location: event.location,
          eventAttendanceMode: FORMAT_ATTENDANCE_MODE[event.format],
          url: eventUrl,
        })}
      />

      <div className="bg-surface-page">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          {/* Back link */}
          <Link
            href="/events"
            className="group mb-8 inline-flex items-center gap-2 font-body font-medium text-accent-600 transition-colors hover:text-accent-500"
          >
            <ArrowLeft className="h-4 w-4 transition-transform motion-safe:group-hover:-translate-x-1" aria-hidden="true" />
            Back to Events
          </Link>

          {/* Event header */}
          <div className="mb-2 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-accent-100 px-3 py-0.5 font-body text-xs font-medium text-accent-600">
              {TYPE_LABELS[event.type]}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-divider px-3 py-0.5 font-body text-xs font-medium text-text-muted">
              <FormatIcon className="h-3 w-3" aria-hidden="true" />
              {FORMAT_LABELS[event.format]}
            </span>
          </div>
          <h1 className="mb-8 font-heading text-3xl font-semibold text-primary-900 sm:text-4xl">
            {event.title}
          </h1>

          {/* Metadata grid */}
          <div className="mb-8 grid grid-cols-1 gap-4 rounded-2xl bg-surface-card p-6 sm:grid-cols-2">
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
                className="rounded-full border border-divider px-3 py-1 font-body text-sm font-medium text-text-body"
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
          <div className="rounded-2xl bg-surface-card p-8 text-center">
            <h2 className="mb-3 font-heading text-2xl font-semibold text-primary-900">
              Interested in attending?
            </h2>
            <p className="mb-6 font-body text-text-muted">
              Get in touch and we&rsquo;ll save you a place.
            </p>
            <div className="flex justify-center">
              <CircleArrowCTA
                label="Register Your Interest"
                href="/contact"
                variant="dark"
              />
            </div>
          </div>

          {/* Bottom back link */}
          <div className="mt-10">
            <Link
              href="/events"
              className="group inline-flex items-center gap-2 font-body font-medium text-accent-600 transition-colors hover:text-accent-500"
            >
              <ArrowLeft className="h-4 w-4 transition-transform motion-safe:group-hover:-translate-x-1" aria-hidden="true" />
              Back to Events
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
