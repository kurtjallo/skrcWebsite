---
phase: 09-design-system-layout
plan: 03
subsystem: ui-components
tags: [card, button, footer, design-system, v2.0]

dependency-graph:
  requires: [09-01]
  provides: [v2.0-card, v2.0-button, v2.0-footer]
  affects: [09-04, 09-05, 10, 11, 12, 13]

tech-stack:
  added: []
  patterns:
    - "White surface cards with shadow-on-hover (no colored borders)"
    - "Dark navy footer with white/opacity text hierarchy"

file-tracking:
  key-files:
    modified:
      - src/components/ui/card.tsx
      - src/components/ui/button.tsx
      - src/components/layout/Footer.tsx
      - src/components/services/WhatHappensWhenYouCall.tsx
      - src/components/services/PillarDetail.tsx
      - src/components/services/AudienceCard.tsx
      - src/app/services/page.tsx
      - src/app/who-we-serve/page.tsx

decisions:
  - id: DS-05
    decision: "Card hover is lift + shadow only -- no colored top border animation"
    rationale: "v2.0 design is cleaner and simpler; gold accent lines are removed from design language"
  - id: BUTTON-01
    decision: "Gold/gold-outline button variants deleted entirely, consumers switched to default"
    rationale: "v2.0 replaces filled gold buttons with CircleArrowCTA pattern; existing variants (default, outline, secondary, ghost, link) remain for forms and utility"
  - id: LAYOUT-03
    decision: "Footer uses text-white/70 and hover:text-white instead of stone or accent colors"
    rationale: "White with opacity creates cleaner hierarchy on dark navy; aligns with v2.0 reference design"

metrics:
  duration: "8 minutes"
  completed: "2026-03-09"
---

# Phase 9 Plan 03: Card, Button & Footer Updates Summary

**Updated Card, Button, and Footer components to v2.0 design patterns -- white surface cards with clean hover, removed gold button variants, and rewrote footer to dark navy 4-column layout with white text opacity hierarchy.**

## Tasks Completed

### Task 1: Update Card component to v2.0 white card pattern
**Commit:** `8cd7c01`

- Removed `border` and `shadow-sm` from base Card classes
- Removed gold top-border scaleX animation (all `before:` pseudo-element classes) from hoverable variant
- Kept clean hover: `-translate-y-1` lift + `shadow-lg`
- Card is now a clean white surface (`bg-card`, `rounded-xl`, no border, no default shadow)
- All sub-components (CardHeader, CardTitle, CardDescription, CardContent, CardFooter) unchanged

### Task 2: Remove gold button variants and clean up Button
**Commit:** `52f756c`

- Deleted `gold` variant (bg-primary-900 + sweep animation)
- Deleted `gold-outline` variant (border-accent-500 + sweep animation)
- Removed `isGoldVariant` boolean check
- Removed conditional `<span>` wrapper (now always renders `{children}` directly)
- Updated 5 consumers from `variant="gold"` to `variant="default"`:
  - `WhatHappensWhenYouCall.tsx`
  - `PillarDetail.tsx`
  - `AudienceCard.tsx`
  - `src/app/services/page.tsx`
  - `src/app/who-we-serve/page.tsx`
- Remaining variants (default, destructive, outline, secondary, ghost, link) unchanged

### Task 3: Rewrite Footer to dark navy 4-column design
**Commit:** `6f6f6b7`

- Background: `bg-primary-950 text-white` (pure white, not stone-100)
- 4-column grid (brand, menu, socials, contact)
- Brand column: org name (serif font), tagline (white/70), "Contact Us" outlined button
- Menu column: NAV_ITEMS first 5, white/70 links with hover:text-white
- Socials column: SOCIAL_LINKS rendered as text links (platform names)
- Contact column: phone (tel:), email (mailto:), office hours, location with Lucide icons
- Column headers: white, font-semibold, uppercase, tracking-wider (no accent colors)
- Bottom bar: border-white/10, copyright + charity number (white/50), social icon links
- All decorative icons have `aria-hidden="true"`
- 143 lines (exceeds 80-line minimum)

## Deviations from Plan

None -- plan executed exactly as written.

## Verification Results

1. `npm run build` passes with no errors
2. Zero gold-related classes in card.tsx, button.tsx, and Footer.tsx
3. Card hoverable variant has clean lift + shadow (no colored border)
4. Button has no gold/gold-outline variants, no isGoldVariant logic
5. Footer renders dark navy with white text, 4-column layout, charity number in bottom bar
6. All tel: and mailto: links preserved for accessibility

## Next Phase Readiness

- Card component is ready to be used across all page redesigns (Phases 10-13)
- Button component is clean; CircleArrowCTA (from Plan 02) replaces gold buttons in page redesigns
- Footer is complete and renders on every page immediately
- No blockers for downstream plans
