import { CalendarX } from "lucide-react";
import type { Event } from "@/types/event";
import { EventCard } from "@/components/events/EventCard";

interface EventGridProps {
  events: Event[];
  onClearFilters?: () => void;
}

export function EventGrid({ events, onClearFilters }: EventGridProps) {
  if (events.length === 0) {
    return (
      <div className="py-16 text-center">
        <CalendarX
          className="mx-auto mb-4 text-stone-300"
          size={48}
          aria-hidden="true"
        />
        <h3 className="mb-2 font-heading text-xl text-primary-900">
          No events match your filters
        </h3>
        <p className="mb-6 font-body text-text-muted">
          Try adjusting your filters to find events that interest you.
        </p>
        {onClearFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="font-body font-medium text-accent-600 underline hover:text-accent-500"
          >
            Clear all filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {events.map((event) => (
        <EventCard key={event.slug} event={event} />
      ))}
    </div>
  );
}
