"use client";

import Link from "next/link";
import { Clock, MapPin, Monitor, Wifi } from "lucide-react";
import type { Event } from "@/types/event";
import {
  AUDIENCE_LABELS,
  TYPE_LABELS,
  FORMAT_LABELS,
} from "@/types/event";

interface EventCardProps {
  event: Event;
}

const TYPE_TAG_STYLES: Record<Event["type"], string> = {
  workshop: "bg-accent-100 text-accent-600",
  social: "bg-secondary-100 text-secondary-700",
  volunteer: "bg-emerald-50 text-emerald-700",
  support: "bg-blue-50 text-blue-700",
};

const FORMAT_ICONS: Record<Event["format"], React.ComponentType<{ className?: string }>> = {
  virtual: Monitor,
  "in-person": MapPin,
  hybrid: Wifi,
};

export function EventCard({ event }: EventCardProps) {
  const eventDate = new Date(event.date + "T00:00:00");
  const monthAbbr = eventDate
    .toLocaleDateString("en-GB", { month: "short" })
    .toUpperCase();
  const day = eventDate.getDate();

  const FormatIcon = FORMAT_ICONS[event.format];
  const timeDisplay = event.endTime
    ? `${event.time} \u2013 ${event.endTime}`
    : event.time;

  return (
    <article
      className="group relative overflow-hidden rounded-xl border border-stone-200 bg-white p-5
        transition-all duration-300 ease-premium
        hover:shadow-lg motion-safe:hover:-translate-y-1
        before:absolute before:left-0 before:top-0 before:h-[3px] before:w-full
        before:origin-left before:scale-x-0 before:bg-accent-500
        before:transition-transform before:duration-400 before:ease-premium
        group-hover:before:scale-x-100"
    >
      <Link
        href={`/events/${event.slug}`}
        className="flex flex-col gap-4 sm:flex-row"
      >
        {/* Date badge */}
        <time
          dateTime={event.date}
          className="flex w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-stone-100 p-2"
        >
          <span className="font-body text-xs font-bold text-accent-600">
            {monthAbbr}
          </span>
          <span className="font-heading text-2xl font-semibold text-primary-900">
            {day}
          </span>
        </time>

        {/* Card body */}
        <div className="min-w-0 flex-1">
          <h3 className="font-heading text-xl font-semibold text-primary-900 transition-colors group-hover:text-primary-700">
            {event.title}
          </h3>

          {/* Time and location */}
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-body text-sm text-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {timeDisplay}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {event.location}
            </span>
          </div>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {/* Type tag */}
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-body text-xs font-medium ${TYPE_TAG_STYLES[event.type]}`}
            >
              {TYPE_LABELS[event.type]}
            </span>

            {/* Format tag */}
            <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-0.5 font-body text-xs font-medium text-text-muted">
              <FormatIcon className="h-3 w-3" aria-hidden="true" />
              {FORMAT_LABELS[event.format]}
            </span>

            {/* Audience tags */}
            {event.audience.map((audience) => (
              <span
                key={audience}
                className="rounded-full bg-stone-200 px-2.5 py-0.5 font-body text-xs font-medium text-text-muted"
              >
                {AUDIENCE_LABELS[audience]}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
