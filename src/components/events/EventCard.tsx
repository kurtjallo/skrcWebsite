import Link from "next/link";
import { Clock, MapPin, Monitor, Wifi, ArrowUpRight } from "lucide-react";
import type { Event } from "@/types/event";
import {
  AUDIENCE_LABELS,
  TYPE_LABELS,
  FORMAT_LABELS,
} from "@/types/event";
import { SITE_CONFIG } from "@/lib/constants";

interface EventCardProps {
  event: Event;
}

const FORMAT_ICONS: Record<
  Event["format"],
  React.ComponentType<{ className?: string }>
> = {
  virtual: Monitor,
  "in-person": MapPin,
  hybrid: Wifi,
};

const monthFormatter = new Intl.DateTimeFormat(SITE_CONFIG.locale, { month: "short" });

export function EventCard({ event }: EventCardProps) {
  const eventDate = new Date(event.date + "T00:00:00");
  const monthAbbr = monthFormatter.format(eventDate).toUpperCase();
  const day = eventDate.getDate();

  const FormatIcon = FORMAT_ICONS[event.format];
  const timeDisplay = event.endTime
    ? `${event.time} \u2013 ${event.endTime}`
    : event.time;

  return (
    <article className="group relative overflow-hidden rounded-2xl bg-surface-card transition-[transform,box-shadow] duration-300 ease-premium hover:shadow-lg motion-safe:hover:-translate-y-1">
      <Link
        href={`/events/${event.slug}`}
        className="flex flex-col gap-5 p-6"
      >
        {/* Top row: date badge + type/format tags */}
        <div className="flex items-start justify-between gap-4">
          {/* Date badge */}
          <time
            dateTime={event.date}
            className="flex w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-primary-900 px-3 py-2.5"
          >
            <span className="font-body text-[11px] font-bold uppercase tracking-wider text-accent-300">
              {monthAbbr}
            </span>
            <span className="font-heading text-2xl font-semibold leading-tight text-white">
              {day}
            </span>
          </time>

          {/* Tags */}
          <div className="flex flex-wrap justify-end gap-1.5">
            <span className="inline-flex items-center rounded-full bg-accent-100 px-2.5 py-0.5 font-body text-xs font-medium text-accent-600">
              {TYPE_LABELS[event.type]}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-divider px-2.5 py-0.5 font-body text-xs font-medium text-text-muted">
              <FormatIcon className="h-3 w-3" aria-hidden="true" />
              {FORMAT_LABELS[event.format]}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl font-semibold text-primary-900 transition-colors group-hover:text-accent-600">
          {event.title}
        </h3>

        {/* Time and location */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-body text-sm text-text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-accent-500" aria-hidden="true" />
            {timeDisplay}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-accent-500" aria-hidden="true" />
            {event.location}
          </span>
        </div>

        {/* Audience tags */}
        <div className="flex flex-wrap gap-1.5">
          {event.audience.map((audience) => (
            <span
              key={audience}
              className="rounded-full border border-divider px-2.5 py-0.5 font-body text-xs font-medium text-text-muted"
            >
              {AUDIENCE_LABELS[audience]}
            </span>
          ))}
        </div>

        {/* Arrow indicator */}
        <div className="flex items-center justify-end">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-900 text-white transition-transform duration-300 group-hover:scale-110">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
