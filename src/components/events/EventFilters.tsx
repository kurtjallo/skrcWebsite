"use client";

import type { EventAudience, EventType, EventFormat } from "@/types/event";
import {
  AUDIENCE_LABELS,
  TYPE_LABELS,
  FORMAT_LABELS,
} from "@/types/event";

interface EventFiltersProps {
  selectedAudiences: EventAudience[];
  selectedTypes: EventType[];
  selectedFormats: EventFormat[];
  onAudienceChange: (audiences: EventAudience[]) => void;
  onTypeChange: (types: EventType[]) => void;
  onFormatChange: (formats: EventFormat[]) => void;
  onClearAll: () => void;
  activeFilterCount: number;
}

function toggleItem<T>(items: T[], item: T): T[] {
  return items.includes(item)
    ? items.filter((i) => i !== item)
    : [...items, item];
}

function FilterGroup<T extends string>({
  label,
  options,
  selected,
  onChange,
}: {
  label: string;
  options: Record<T, string>;
  selected: T[];
  onChange: (next: T[]) => void;
}) {
  return (
    <div>
      <p className="mb-2 font-body text-sm font-semibold uppercase tracking-wider text-text-body">
        {label}
      </p>
      <div className="flex flex-wrap gap-2" role="group" aria-label={`Filter by ${label.toLowerCase()}`}>
        {(Object.entries(options) as [T, string][]).map(([key, display]) => {
          const isSelected = selected.includes(key);
          return (
            <button
              key={key}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onChange(toggleItem(selected, key))}
              className={`rounded-full border px-4 py-1.5 font-body text-sm font-medium transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2
                ${
                  isSelected
                    ? "border-primary-900 bg-primary-900 text-stone-50"
                    : "border-stone-200 bg-stone-100 text-text-body hover:border-stone-300 hover:bg-stone-200"
                }`}
            >
              {display}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function EventFilters({
  selectedAudiences,
  selectedTypes,
  selectedFormats,
  onAudienceChange,
  onTypeChange,
  onFormatChange,
  onClearAll,
  activeFilterCount,
}: EventFiltersProps) {
  return (
    <div className="mb-8 rounded-xl border border-stone-200 bg-white p-6">
      <h2 className="sr-only">Filter Events</h2>

      <div className="space-y-4">
        <FilterGroup<EventAudience>
          label="Audience"
          options={AUDIENCE_LABELS}
          selected={selectedAudiences}
          onChange={onAudienceChange}
        />

        <FilterGroup<EventType>
          label="Event Type"
          options={TYPE_LABELS}
          selected={selectedTypes}
          onChange={onTypeChange}
        />

        <FilterGroup<EventFormat>
          label="Format"
          options={FORMAT_LABELS}
          selected={selectedFormats}
          onChange={onFormatChange}
        />
      </div>

      {activeFilterCount > 0 && (
        <div className="mt-4 border-t border-stone-200 pt-4">
          <button
            type="button"
            onClick={onClearAll}
            className="font-body text-sm font-medium text-accent-600 underline hover:text-accent-500"
          >
            Clear all filters
            <span className="ml-2 inline-flex items-center rounded-full bg-accent-100 px-2 py-0.5 font-body text-xs font-bold text-accent-600">
              {activeFilterCount}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
