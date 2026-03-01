"use client";

import { useState, useMemo } from "react";
import { events } from "@/data/events";
import { EventFilters } from "@/components/events/EventFilters";
import { EventGrid } from "@/components/events/EventGrid";
import type { EventAudience, EventType, EventFormat } from "@/types/event";

export default function EventsPage() {
  const [selectedAudiences, setSelectedAudiences] = useState<EventAudience[]>(
    [],
  );
  const [selectedTypes, setSelectedTypes] = useState<EventType[]>([]);
  const [selectedFormats, setSelectedFormats] = useState<EventFormat[]>([]);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      // Audience: OR within dimension -- event matches if ANY of its audiences are selected
      const audienceMatch =
        selectedAudiences.length === 0 ||
        event.audience.some((a) => selectedAudiences.includes(a));

      // Type: OR within dimension
      const typeMatch =
        selectedTypes.length === 0 || selectedTypes.includes(event.type);

      // Format: OR within dimension
      const formatMatch =
        selectedFormats.length === 0 || selectedFormats.includes(event.format);

      // AND across dimensions
      return audienceMatch && typeMatch && formatMatch;
    });
  }, [selectedAudiences, selectedTypes, selectedFormats]);

  const activeFilterCount =
    selectedAudiences.length + selectedTypes.length + selectedFormats.length;

  const handleClearAll = () => {
    setSelectedAudiences([]);
    setSelectedTypes([]);
    setSelectedFormats([]);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Page header */}
        <div className="mb-10">
          <p className="mb-3 font-body text-sm font-bold uppercase tracking-wider text-accent-600">
            What&rsquo;s On
          </p>
          <h1 className="mb-4 font-heading text-4xl font-semibold text-primary-900 sm:text-5xl">
            Events Calendar
          </h1>
          <p className="max-w-2xl font-body text-lg text-text-body">
            Find workshops, support groups, community gatherings, and
            volunteering opportunities near you. Filter by who it&rsquo;s for,
            what type, or how it&rsquo;s held.
          </p>
        </div>

        {/* Filters */}
        <EventFilters
          selectedAudiences={selectedAudiences}
          selectedTypes={selectedTypes}
          selectedFormats={selectedFormats}
          onAudienceChange={setSelectedAudiences}
          onTypeChange={setSelectedTypes}
          onFormatChange={setSelectedFormats}
          onClearAll={handleClearAll}
          activeFilterCount={activeFilterCount}
        />

        {/* Results count */}
        <p className="mb-4 font-body text-sm text-text-muted">
          Showing {filteredEvents.length} of {events.length} events
        </p>

        {/* Event grid */}
        <EventGrid events={filteredEvents} onClearFilters={handleClearAll} />
      </div>
    </div>
  );
}
