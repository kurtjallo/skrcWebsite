---
phase: 03-homepage
plans: 4
waves: 2
depends_on_phases: ["02-layout-design-system"]
---

# Phase 3: Homepage

## Overview

Build the complete SKRC homepage with all 9 sections from hero through partner logos. The homepage is the primary landing page and must communicate mission, route audiences, showcase services, provide social proof, and convert visitors to engaged community members.

## Wave Structure

| Wave | Plans | Parallel | Autonomous |
|------|-------|----------|------------|
| 1 | 03-01, 03-02, 03-03 | Yes (no file overlap) | Yes, Yes, Yes |
| 2 | 03-04 | N/A (single plan) | No (has visual checkpoint) |

## Plan Summary

| Plan | Objective | Tasks | Key Files | Requirements |
|------|-----------|-------|-----------|--------------|
| 03-01 | Data layer + top-of-page (Hero, SelfIdCards, ServicePillars) | 3 | 8 files | HOME-01, HOME-02, HOME-03 |
| 03-02 | Mid-page (ImpactStats, FeaturedTestimonial, EventsPreview) | 2 | 3 files | HOME-04, HOME-05, HOME-06 |
| 03-03 | Bottom-page (GetInvolved, Newsletter, PartnerLogos) | 2 | 3 files | HOME-07, HOME-08, HOME-09 |
| 03-04 | Page assembly + visual verification | 2 | 1 file | All (integration) |

## File Ownership (No Conflicts)

```
Plan 01: src/types/homepage.ts
         src/data/testimonials.ts, events.ts, partners.ts, homepage.ts
         src/components/home/Hero.tsx, SelfIdCards.tsx, ServicePillars.tsx

Plan 02: src/components/home/ImpactStats.tsx, FeaturedTestimonial.tsx, EventsPreview.tsx

Plan 03: src/components/home/GetInvolved.tsx, Newsletter.tsx, PartnerLogos.tsx

Plan 04: src/app/page.tsx
```

## Dependency Graph

```
03-01 (data + Hero + SelfId + Pillars) ──┐
03-02 (Stats + Testimonial + Events)  ───┼──► 03-04 (page assembly + checkpoint)
03-03 (GetInvolved + Newsletter + Partners) ─┘
```

## Execution

Execute Wave 1 plans (01, 02, 03) in parallel, then Wave 2 (04) to assemble and verify.
