"use client";

import { useState, useMemo } from "react";
import { events } from "@/data/events";
import { HERO_IMAGES } from "@/lib/placeholders";
import { InteriorHero } from "@/components/layout/InteriorHero";
import { SectionLabel } from "@/components/shared/SectionLabel";
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
    <>
      <InteriorHero
        heading="*Events*"
        backgroundImage={HERO_IMAGES.events}
        objectPosition="center 40%"
      />

      <section className="bg-surface-page py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Section intro */}
          <div className="mb-10">
            <SectionLabel text="WHAT'S ON" />
            <p className="mt-6 max-w-2xl font-body text-lg text-text-body">
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
          <p className="mb-4 font-body text-sm text-text-muted" aria-live="polite">
            Showing {filteredEvents.length} of {events.length} events
          </p>

          {/* Event grid */}
          <EventGrid events={filteredEvents} onClearFilters={handleClearAll} />
        </div>
      </section>
    </>
  );
}
