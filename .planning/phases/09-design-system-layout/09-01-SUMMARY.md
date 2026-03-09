---
phase: 09-design-system-layout
plan: 01
subsystem: ui
tags: [tailwind, css-tokens, design-system, color-palette, typography, navy-blue]

# Dependency graph
requires:
  - phase: 01-foundation
    provides: "Tailwind v4 @theme token architecture, Cormorant Garamond + DM Sans fonts"
  - phase: 02-layout-design-system
    provides: "SectionWrapper, CornerBrackets, layout.tsx body class"
provides:
  - "v2.0 color tokens: deep navy primary, royal blue accent, blue-grey backgrounds"
  - "Surface tokens: surface-page (#f0f1f8), surface-card (#ffffff), surface-dark (#121240)"
  - "Updated shadcn/ui :root variables matching v2.0 palette"
  - "Cormorant Garamond italic style loading for emphasis headings"
  - "SectionWrapper with flat surface-page background pattern"
affects: [10-homepage-redesign, 11-core-page-redesigns, 12-community-page-redesigns, 13-new-pages, 14-quality-verification]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Surface token pattern: surface-page/surface-card/surface-dark for background hierarchy"
    - "Flat page background with white card contrast (replaces alternating section bands)"

key-files:
  modified:
    - "src/app/globals.css"
    - "src/lib/fonts.ts"
    - "src/app/layout.tsx"
    - "src/components/layout/SectionWrapper.tsx"
    - "src/components/shared/CornerBrackets.tsx"

key-decisions:
  - "Repurposed stone-* token names with blue-grey values rather than renaming to minimize downstream breakage"
  - "Added surface-* tokens alongside stone-* for explicit semantic naming"
  - "Removed secondary (heather moor) palette entirely -- not used in v2.0"
  - "Increased border-radius from 0.5rem to 0.75rem for v2.0 card style"

patterns-established:
  - "Surface tokens: use surface-page for page bg, surface-card for cards, surface-dark for dark sections"
  - "All accent-* utilities now resolve to royal blue (#3b3bff family)"
  - "All primary-* utilities now resolve to deep navy (#1a1a5e family)"

# Metrics
duration: 6min
completed: 2026-03-09
---

# Phase 9 Plan 01: Color Token Foundation Summary

**Complete v1.0-to-v2.0 palette migration: deep navy primary + royal blue accent replacing gold/warm-stone across globals.css, fonts, layout, SectionWrapper, and CornerBrackets**

## Performance

- **Duration:** 6 min
- **Started:** 2026-03-09T14:24:36Z
- **Completed:** 2026-03-09T14:30:40Z
- **Tasks:** 2
- **Files modified:** 5

## Accomplishments
- Replaced entire v1.0 gold/warm-stone token system with v2.0 navy/blue tokens in globals.css
- Updated all shadcn/ui :root CSS variables to match new palette (focus rings, card backgrounds, borders)
- Enabled true Cormorant Garamond italic loading for upcoming emphasis heading pattern
- Eliminated every hardcoded gold hex value from the codebase (zero remain in src/)
- Updated SectionWrapper to flat surface-page background pattern (no more alternating bands)

## Task Commits

Each task was committed atomically:

1. **Task 1: Rewrite color tokens and shadcn variables in globals.css** - `27cea91` (feat)
2. **Task 2: Update fonts, layout, SectionWrapper, and CornerBrackets** - `78f5182` (feat)

## Files Created/Modified
- `src/app/globals.css` - Complete @theme color block rewrite + :root shadcn variable update + body bg reference
- `src/lib/fonts.ts` - Added style: ["normal", "italic"] to Cormorant Garamond config
- `src/app/layout.tsx` - Body class bg-stone-50 changed to bg-surface-page
- `src/components/layout/SectionWrapper.tsx` - AUTO_BACKGROUNDS and variants updated to surface-page/card/dark
- `src/components/shared/CornerBrackets.tsx` - GOLD_COLOR (#C9A227) replaced with ACCENT_COLOR (#3b3bff)

## Decisions Made
- **Stone token repurposing:** Kept stone-* token names but remapped to blue-grey values (#f0f1f8, #e8e9f2, etc.) to avoid breaking 75+ class references across existing pages. Added surface-* tokens alongside for semantic clarity.
- **Secondary palette removal:** Removed all secondary-* (heather moor) tokens from @theme. The v2.0 palette is simpler: navy + blue + grey neutrals.
- **Radius increase:** Changed --radius from 0.5rem to 0.75rem for the larger v2.0 card border-radius.
- **Destructive foreground:** Changed from warm cream (#F5F2EC) to white (#ffffff) to match new palette neutrals.

## Deviations from Plan
None - plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All color tokens are v2.0 navy/blue -- every component referencing accent-*, primary-*, stone-* auto-updates
- Cormorant Garamond italic glyphs are loaded and ready for EmphasisHeading component (Phase 9 Plan 02+)
- Surface tokens available for new component development
- Existing pages will show blue where gold was -- this is expected and correct; page-level redesigns in Phases 10-13 will complete the visual update
- Some pages may have visual mismatches (e.g. "gold accent line" component now renders blue) -- these will be replaced in downstream phases

---
*Phase: 09-design-system-layout*
*Completed: 2026-03-09*
