---
phase: 09-design-system-layout
plan: 05
subsystem: ui
tags: [clip-path, next-image, emphasis-heading, circle-arrow-cta, pre-footer, react, server-component]

# Dependency graph
requires:
  - phase: 09-design-system-layout (plans 01-02)
    provides: color tokens (surface-page, primary-950, accent-500)
provides:
  - PreFooterCTA component with curved clip-path image card
  - EmphasisHeading component with *italic* marker parsing
  - CircleArrowCTA component with text + circle-arrow button pattern
affects: [10-homepage-redesign, 11-services-audience-redesign, 12-community-pages-redesign]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "EmphasisHeading: parse *italic* markers via regex split, render <em> with font-heading italic"
    - "CircleArrowCTA: text + filled circle with ArrowUpRight, Link/button polymorphism, dark/light variants"
    - "PreFooterCTA: clip-path ellipse(55% 100% at 50% 0%) for curved arch transition from page bg into image"

key-files:
  created:
    - src/components/shared/EmphasisHeading.tsx
    - src/components/shared/CircleArrowCTA.tsx
    - src/components/shared/PreFooterCTA.tsx
  modified: []

key-decisions:
  - "Used bg-background instead of bg-surface-page for curved shape since surface-page token not yet defined (depends on plan 09-01). bg-background maps to shadcn --background variable which serves the same purpose and will auto-update when tokens migrate."
  - "EmphasisHeading uses font-heading class on <em> to ensure true italic Cormorant Garamond, not faux italic"
  - "CircleArrowCTA uses group-hover:scale-110 on circle (plan spec said scale-110, research said scale-105; used plan spec)"
  - "ArrowUpRight icon marked aria-hidden='true' for accessibility (decorative, label text provides meaning)"

patterns-established:
  - "EmphasisHeading *italic* pattern: split on /(\\*[^*]+\\*)/g, render <em> for matched segments"
  - "CircleArrowCTA: polymorphic Link/button based on href presence"
  - "PreFooterCTA: inset image card with clip-path curve at top, dark gradient overlay, content at bottom"

# Metrics
duration: 5min
completed: 2026-03-09
---

# Phase 9 Plan 05: PreFooterCTA Component Summary

**PreFooterCTA with curved clip-path ellipse arch, plus EmphasisHeading (*italic* parser) and CircleArrowCTA (text + circle-arrow button) dependency components**

## Performance

- **Duration:** 5 min
- **Started:** 2026-03-09T14:29:57Z
- **Completed:** 2026-03-09T14:35:50Z
- **Tasks:** 1 (checkpoint task skipped per user instruction)
- **Files created:** 3

## Accomplishments
- Created PreFooterCTA: large image card with CSS clip-path ellipse creating organic arch transition from page background into the image, dark gradient overlay, heading + body + CTA overlaid at bottom, inset from page edges with rounded corners
- Created EmphasisHeading: parses *italic* markers in heading text via regex, renders `<em>` tags with italic font-heading style, supports h1-h4 via `as` prop and optional `accentItalic` prop for accent-colored italic words
- Created CircleArrowCTA: text label + filled circle with ArrowUpRight icon, dark/light variants for use on light/dark backgrounds, renders as Link (when href) or button (when onClick), group-hover scale effect on circle

## Task Commits

Each task was committed atomically:

1. **Task 1: Create PreFooterCTA component with curved clip-path** - `ef5d65d` (feat)

## Files Created/Modified
- `src/components/shared/EmphasisHeading.tsx` - Italic-emphasis heading component, parses *markers* into `<em>` tags
- `src/components/shared/CircleArrowCTA.tsx` - Text + circle-arrow CTA button, dark/light variants, Link/button polymorphism
- `src/components/shared/PreFooterCTA.tsx` - Pre-footer CTA with curved clip-path, background image, dark overlay, overlaid content

## Decisions Made
- **bg-background over bg-surface-page:** The `surface-page` token doesn't exist yet (depends on plan 09-01 token migration). Used `bg-background` which maps to shadcn's `--background` CSS variable, serving the identical purpose of matching the page background color. Will auto-update when tokens migrate.
- **scale-110 over scale-105:** Plan spec said `group-hover:scale-110` for the CircleArrowCTA circle; research said `scale-105`. Used the plan spec value since the user instruction takes precedence.
- **aria-hidden on ArrowUpRight icon:** Added `aria-hidden="true"` to the decorative arrow icon in CircleArrowCTA, consistent with the Phase 8 accessibility audit approach for decorative Lucide icons.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] Created EmphasisHeading and CircleArrowCTA dependency components**
- **Found during:** Task 1 (PreFooterCTA creation)
- **Issue:** PreFooterCTA imports EmphasisHeading and CircleArrowCTA, but neither existed yet (planned for 09-02 which hasn't executed)
- **Fix:** Created both components following the research spec in 09-RESEARCH.md patterns 1 and 3
- **Files created:** src/components/shared/EmphasisHeading.tsx, src/components/shared/CircleArrowCTA.tsx
- **Verification:** npm run build passes, all imports resolve
- **Committed in:** ef5d65d (Task 1 commit)

---

**Total deviations:** 1 auto-fixed (1 missing critical dependency)
**Impact on plan:** EmphasisHeading and CircleArrowCTA were required for PreFooterCTA to build. Created them following the established research spec. No scope creep -- these components were already planned for Phase 9.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Three new shared components ready for use in Phases 10-13 page redesigns
- PreFooterCTA ready for homepage, services, and about pages
- EmphasisHeading ready for all page headings across the site
- CircleArrowCTA ready to replace gold/gold-outline button patterns
- Note: `bg-background` used instead of `bg-surface-page` -- will auto-update when plan 09-01 migrates tokens

---
*Phase: 09-design-system-layout*
*Completed: 2026-03-09*
