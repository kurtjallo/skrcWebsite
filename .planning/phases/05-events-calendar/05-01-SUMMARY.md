---
phase: 05-events-calendar
plan: 01
status: complete
---

# 05-01 Summary: Event Types, Data, and EventCard

## What was built

### Event types (`src/types/event.ts`)
- `EventAudience` union type: `'farmers' | 'offshore' | 'families' | 'community'`
- `EventType` union type: `'workshop' | 'social' | 'volunteer' | 'support'`
- `EventFormat` union type: `'in-person' | 'virtual' | 'hybrid'`
- `Event` interface with all display and filter fields (slug, title, description, date, time, endTime, location, audience[], type, format, image?, featured?)
- `AUDIENCE_LABELS`, `TYPE_LABELS`, `FORMAT_LABELS` display-label maps

### Sample events (`src/data/events.ts`)
- 10 sample events covering April-June 2026
- All 4 audience types, all 4 event types, all 3 formats represented
- 3 events marked as `featured: true`
- Events sorted by date ascending
- Warm, inviting descriptions with practical information

### EventCard component (`src/components/events/EventCard.tsx`)
- Client component with premium hover effects
- Semantic `<article>` wrapping `<Link>` to detail page
- Date badge with `<time>` element (month abbreviation + day number)
- Title, time/location row with Clock/MapPin icons
- Color-coded type tags, format indicator with icon, audience pills
- Gold top-border hover animation (scaleX from left)
- `motion-safe:hover:-translate-y-1` lift with shadow
- Responsive: vertical stack on mobile, horizontal on desktop

## Files created/modified
- `src/types/event.ts` (created)
- `src/data/events.ts` (created)
- `src/components/events/EventCard.tsx` (created)
