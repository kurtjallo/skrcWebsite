# Phase 5: Events Calendar -- Plan Index

This phase is split into 2 executable plans across 2 waves.

## Wave Structure

| Wave | Plan | Objective | Autonomous |
|------|------|-----------|------------|
| 1 | 05-01 | Event types, sample data, and EventCard component | Yes |
| 2 | 05-02 | EventFilters, EventGrid, events page, event detail page | No (checkpoint) |

## Plans

- **Plan 01** (`05-events-calendar/05-01-PLAN.md`): Foundation -- types, 10 sample events, EventCard with premium hover
- **Plan 02** (`05-events-calendar/05-02-PLAN.md`): Feature -- filter bar, grid layout, events listing page, event detail pages

## Dependency Graph

```
Plan 01 (types + data + card) ──> Plan 02 (filters + pages + detail)
                                        └──> checkpoint:human-verify
```

## Requirements Coverage

| Requirement | Plan | How Addressed |
|-------------|------|---------------|
| EVENT-01: Events calendar page with list/grid view | 02 | EventGrid + events/page.tsx |
| EVENT-02: Filter by audience | 02 | EventFilters audience toggle + filter logic |
| EVENT-03: Filter by type | 02 | EventFilters type toggle + filter logic |
| EVENT-04: Filter by format | 02 | EventFilters format toggle + filter logic |
| EVENT-05: Individual event detail page | 02 | events/[slug]/page.tsx |

## Files Created

| File | Plan | Purpose |
|------|------|---------|
| `src/types/event.ts` | 01 | Event interface, union types, label maps |
| `src/data/events.ts` | 01 | 10 sample events |
| `src/components/events/EventCard.tsx` | 01 | Event card with date badge, tags, hover |
| `src/components/events/EventFilters.tsx` | 02 | Filter bar with toggle buttons |
| `src/components/events/EventGrid.tsx` | 02 | Grid layout with empty state |
| `src/app/events/page.tsx` | 02 | Filterable events listing page |
| `src/app/events/[slug]/page.tsx` | 02 | Event detail page (SSG) |

## Execution

```
/gsd:execute-phase 05-events-calendar
```

Execute Plan 01 first (Wave 1), then Plan 02 (Wave 2). Plan 02 ends with a human verification checkpoint.
