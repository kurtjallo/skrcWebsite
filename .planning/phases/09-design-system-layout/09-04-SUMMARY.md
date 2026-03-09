---
phase: 09-design-system-layout
plan: 04
subsystem: layout-heroes
tags: [hero, inset, interior, header, transparent-mode, next-image, emphasis-heading]

dependency_graph:
  requires: ["09-01", "09-02"]
  provides: ["InsetHero component", "InteriorHero component", "EmphasisHeading component", "Header transparent/solid variant", "surface-page/divider CSS tokens"]
  affects: ["10-homepage-redesign", "11-interior-pages", "12-about-services", "13-contact-events"]

tech_stack:
  added: []
  patterns:
    - "Inset hero with rounded corners (px-4 pt-4 + rounded-[20px]) for premium card feel"
    - "next/image fill + priority for LCP hero images"
    - "Scroll-based header mode transition via passive scroll listener"
    - "EmphasisHeading regex-based *italic* parsing for serif emphasis typography"
    - "Semantic surface/divider CSS token aliases for progressive token migration"

file_tracking:
  created:
    - src/components/layout/InsetHero.tsx
    - src/components/layout/InteriorHero.tsx
    - src/components/shared/EmphasisHeading.tsx
  modified:
    - src/components/layout/Header.tsx
    - src/app/globals.css

decisions:
  - id: "09-04-D1"
    decision: "Added surface-page, surface-card, surface-dark, divider tokens to globals.css aliased to current v1 values"
    rationale: "09-01 (token migration) not yet executed; Header needs these tokens now. Values alias to existing stone-50/stone-200 so no visual change. 09-01 will update values to v2.0 colors."
  - id: "09-04-D2"
    decision: "Active link underline changed from accent-500 to accent-400"
    rationale: "Per plan spec -- brighter color visible on both light (solid) and dark (transparent) header backgrounds"
  - id: "09-04-D3"
    decision: "Header uses fixed positioning in transparent mode, sticky in solid mode"
    rationale: "Fixed allows header to overlay the InsetHero image; sticky is better for non-hero pages where header should push content down"

metrics:
  duration: "7 minutes"
  completed: "2026-03-09"
---

# Phase 9 Plan 04: Hero Components & Header Mode Summary

**Built InsetHero (rounded-corner full-width image hero), InteriorHero (shorter centered heading banner reusing InsetHero), and EmphasisHeading (italic-emphasis parsing) -- plus Header transparent/solid dual-mode with scroll transition and surface/divider token migration.**

## Tasks Completed

### Task 1: Create InsetHero component
- **Commit:** 43c8dec
- **File:** `src/components/layout/InsetHero.tsx` (53 lines)
- Full-width hero section with `px-4 pt-4` inset and `rounded-[20px]` card-like corners
- Uses `next/image` with `fill` and configurable `priority` (default true for LCP)
- Dark overlay gradient (left-to-right) with `overlayClassName` override
- Content positioned at bottom via absolute-positioned flex container with `items-end`
- Configurable height (default "70vh"), server component
- Decorative `alt=""` on background image since text is overlaid

### Task 2: Create InteriorHero and EmphasisHeading components
- **Commit:** 406e6d1
- **Files:** `src/components/layout/InteriorHero.tsx` (31 lines), `src/components/shared/EmphasisHeading.tsx` (49 lines)
- InteriorHero: shorter 45vh banner with centered heading, uniform overlay (`bg-primary-950/60`)
- Composes InsetHero internally -- does not duplicate hero logic
- EmphasisHeading: regex split on `(\*[^*]+\*)` to parse italic markers
- Renders `<em>` tags with `italic font-heading` for serif italic emphasis
- Supports `as` prop (h1-h4), `accentItalic` boolean for accent-colored italics
- Both are server components

### Task 3: Update Header with transparent/solid mode
- **Commit:** 5d7e489
- **Files:** `src/components/layout/Header.tsx`, `src/app/globals.css`
- Added `variant` prop: `"solid"` (default, backwards-compatible) and `"transparent"` (for hero pages)
- Scroll detection via `useEffect` + passive scroll listener, triggers at 100px
- Transparent mode: `fixed`, `bg-transparent`, white text/logo/hamburger
- Solid mode: `sticky`, `bg-surface-page/95`, `backdrop-blur-sm`, `border-divider`
- Replaced all `stone-50` / `stone-200` references with `surface-page` / `divider` tokens
- Added 4 new CSS tokens to globals.css: `surface-page`, `surface-card`, `surface-dark`, `divider`

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Added surface/divider tokens to globals.css**
- **Found during:** Task 3
- **Issue:** Plan depends on 09-01 and 09-02 which define `surface-page` and `divider` tokens, but those plans have not been executed yet. Header references to `bg-surface-page` and `border-divider` would produce invalid Tailwind classes.
- **Fix:** Added `--color-surface-page`, `--color-surface-card`, `--color-surface-dark`, and `--color-divider` tokens to the `@theme` block in globals.css, aliased to current v1 values (stone-50, white, primary-950, stone-200). When 09-01 runs, it will update these values to v2.0 colors.
- **Files modified:** `src/app/globals.css`
- **Commit:** 5d7e489

**2. [Rule 2 - Missing Critical] Created EmphasisHeading component**
- **Found during:** Task 2
- **Issue:** InteriorHero requires EmphasisHeading, which did not exist. Plan noted this was expected.
- **Fix:** Created `src/components/shared/EmphasisHeading.tsx` with regex-based italic parsing, `as` prop (h1-h4), and `accentItalic` boolean.
- **Files created:** `src/components/shared/EmphasisHeading.tsx`
- **Commit:** 406e6d1

## Decisions Made

| ID | Decision | Rationale |
|----|----------|-----------|
| 09-04-D1 | Surface/divider tokens aliased to v1 values | 09-01 not yet run; provides valid classes now, updated later |
| 09-04-D2 | Active link underline accent-500 -> accent-400 | Brighter color visible on both light and dark header backgrounds |
| 09-04-D3 | Fixed positioning in transparent mode, sticky in solid | Fixed allows hero overlay; sticky better for non-hero pages |

## Next Phase Readiness

- InsetHero and InteriorHero are ready for homepage redesign (Phase 10) and interior page updates (Phase 11-13)
- Header `variant="transparent"` prop is ready but not wired to any page yet -- Phase 10 will pass this for the homepage
- EmphasisHeading is available for all heading usage across the site
- Surface/divider tokens will get their final v2.0 color values when 09-01 executes
