---
phase: 05-events-calendar
plan: 02
status: complete
---

# 05-02 Summary: EventFilters, EventGrid, Events Page, and Event Detail Page

## What was built

### EventFilters component (`src/components/events/EventFilters.tsx`)
- Client component with three filter groups: Audience, Event Type, Format
- Toggle buttons with `aria-pressed` for accessibility
- Active state: `bg-primary-900 text-stone-50`; Default: `bg-stone-100 text-text-body`
- Gold focus rings (`focus:ring-accent-500`)
- "Clear all filters" button with active count badge, only visible when filters active
- Generic `FilterGroup` sub-component iterates label maps via `Object.entries()`

### EventGrid component (`src/components/events/EventGrid.tsx`)
- Renders EventCard array in 2-column responsive grid (`grid-cols-1 md:grid-cols-2`)
- Empty state with CalendarX icon, "No events match your filters" message, and clear action button

### Events listing page (`src/app/events/page.tsx`)
- Client component with `useState` for filter state (audiences, types, formats)
- `useMemo` for filtered events with OR-within/AND-across dimension logic
- Results count: "Showing X of Y events"
- Page header with "What's On" overline, "Events Calendar" h1, descriptive subtitle
- Composes EventFilters and EventGrid components

### Event detail page (`src/app/events/[slug]/page.tsx`)
- Server component with `generateStaticParams` for all 10 event slugs
- `generateMetadata` for unique SEO title/description per event
- Next.js 15 async params pattern (`await params`)
- `notFound()` for unknown slugs
- Back navigation at top and bottom
- Metadata grid: date (formatted with `toLocaleDateString`), time, location, format with icons
- Audience badges with "Who it's for:" label
- Full event description
- "Register Your Interest" CTA linking to /contact

## Files created/modified
- `src/components/events/EventFilters.tsx` (created)
- `src/components/events/EventGrid.tsx` (created)
- `src/app/events/page.tsx` (created)
- `src/app/events/[slug]/page.tsx` (created)
