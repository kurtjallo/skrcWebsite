---
phase: 15-web-interface-guidelines
plan: 01
subsystem: ui
tags: [tailwind, transitions, performance, hydration, next-image, accessibility]

# Dependency graph
requires:
  - phase: 14-quality-verification
    provides: Baseline quality audit identifying WIG violations
provides:
  - Zero transition-all usage across entire src/ codebase
  - Logo hover feedback on Header and Footer
  - Correct 2:3 aspect ratio on all logo Image components
  - Hydration-safe footer year rendering
affects: []

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Explicit transition properties instead of transition-all (transition-colors, transition-[transform,box-shadow], etc.)"
    - "suppressHydrationWarning on dynamic date rendering"

key-files:
  created: []
  modified:
    - src/components/ui/button.tsx
    - src/components/ui/card.tsx
    - src/components/events/EventCard.tsx
    - src/components/events/EventFilters.tsx
    - src/components/team/TeamMemberCard.tsx
    - src/components/faq/FaqAccordion.tsx
    - src/components/contact/ContactForm.tsx
    - src/components/home/SelfIdCards.tsx
    - src/components/home/GetInvolved.tsx
    - src/components/home/EventsPreview.tsx
    - src/components/home/ServicePillars.tsx
    - src/app/about/page.tsx
    - src/app/partnerships/page.tsx
    - src/app/testimonials/page.tsx
    - src/app/gallery/page.tsx
    - src/app/links/page.tsx
    - src/app/thank-you/page.tsx
    - src/components/layout/Header.tsx
    - src/components/layout/Footer.tsx

key-decisions:
  - "Use transition-colors for elements that only animate color properties (buttons, filters, links)"
  - "Use transition-[transform,box-shadow] for cards with lift/shadow hover effects"
  - "Use transition-[transform,background-color,color,border-color] for FAQ icon that rotates and changes bg/color"
  - "Use transition-[background-color,opacity] for contact submit button"
  - "Use suppressHydrationWarning instead of hardcoded year to avoid annual code changes"

patterns-established:
  - "Explicit transitions: Never use transition-all; always specify the narrowest set of properties being animated"
  - "Logo hover: All logo Image links use transition-opacity hover:opacity-80"

# Metrics
duration: 3min
completed: 2026-03-10
---

# Phase 15 Plan 01: Web Interface Guidelines Summary

**Eliminated 18 transition-all instances across 17 files, added logo hover feedback, corrected image aspect ratios, and fixed hydration-safe year rendering**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-10T20:17:21Z
- **Completed:** 2026-03-10T20:20:01Z
- **Tasks:** 2
- **Files modified:** 19

## Accomplishments
- Replaced all 18 `transition-all` with explicit transition properties (transition-colors, transition-[transform,box-shadow], etc.) for better browser paint performance
- Added `hover:opacity-80` feedback to Header and Footer logo links so users know they are interactive
- Corrected logo Image width/height attributes to 2:3 aspect ratio across Header (80x120), Footer (35x53), and Links page (80x120)
- Added `suppressHydrationWarning` to Footer copyright paragraph to prevent year-boundary hydration mismatch

## Task Commits

Each task was committed atomically:

1. **Task 1: Replace all transition-all with explicit transition properties (WIG-01)** - `a02348d` (perf)
2. **Task 2: Fix logo hover states, image dimensions, and hydration year (WIG-02/03/04)** - `1da609b` (fix)

## Files Created/Modified
- `src/components/ui/button.tsx` - transition-all -> transition-colors
- `src/components/ui/card.tsx` - transition-all -> transition-[transform,box-shadow]
- `src/components/events/EventCard.tsx` - transition-all -> transition-[transform,box-shadow]
- `src/components/events/EventFilters.tsx` - transition-all -> transition-colors
- `src/components/team/TeamMemberCard.tsx` - transition-all -> transition-[transform,box-shadow]
- `src/components/faq/FaqAccordion.tsx` - transition-all -> transition-[transform,background-color,color,border-color]
- `src/components/contact/ContactForm.tsx` - transition-all -> transition-[background-color,opacity]
- `src/components/home/SelfIdCards.tsx` - transition-all -> transition-[transform,box-shadow]
- `src/components/home/GetInvolved.tsx` - transition-all -> transition-[transform,box-shadow]
- `src/components/home/EventsPreview.tsx` - transition-all -> transition-[transform,box-shadow]
- `src/components/home/ServicePillars.tsx` - transition-all -> transition-[transform,box-shadow]
- `src/app/about/page.tsx` - transition-all -> transition-[transform,box-shadow]
- `src/app/partnerships/page.tsx` - transition-all -> transition-[transform,box-shadow]
- `src/app/testimonials/page.tsx` - transition-all -> transition-[transform,box-shadow]
- `src/app/gallery/page.tsx` - transition-all -> transition-colors
- `src/app/links/page.tsx` - transition-all -> transition-colors (x2), logo dimensions 80x120
- `src/app/thank-you/page.tsx` - transition-all -> transition-colors
- `src/components/layout/Header.tsx` - Logo hover:opacity-80, dimensions 80x120
- `src/components/layout/Footer.tsx` - Logo hover:opacity-80, dimensions 35x53, suppressHydrationWarning

## Decisions Made
- Used `transition-colors` (Tailwind built-in) for elements that only animate color-based properties (buttons, filter pills, links)
- Used `transition-[transform,box-shadow]` (arbitrary value) for cards with lift + shadow hover effects
- Used `transition-[transform,background-color,color,border-color]` for the FAQ accordion icon which rotates and changes background/text/border color
- Used `transition-[background-color,opacity]` for contact form submit button
- Used `suppressHydrationWarning` instead of hardcoding year -- avoids annual code changes while preventing React hydration warnings

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All four WIG violations resolved (WIG-01 through WIG-04)
- Codebase has zero transition-all usage
- Pattern established for future development: always use explicit transition properties
- Build passes cleanly

---
*Phase: 15-web-interface-guidelines*
*Completed: 2026-03-10*
