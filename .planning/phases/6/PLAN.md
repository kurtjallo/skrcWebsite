---
phase: 06-community-pages
plans: 4
waves: 2
depends_on_phases: ["02-layout-design-system"]
requirements_covered:
  - ABOUT-01
  - ABOUT-02
  - ABOUT-03
  - TEAM-01
  - TEAM-02
  - TEAM-03
  - TESTI-01
  - TESTI-02
  - TESTI-03
  - INVOLVE-01
  - INVOLVE-02
  - PART-01
  - PART-02
  - PART-03
---

# Phase 6: Community Pages -- Plan Overview

## Goal

About, Team, Testimonials, Get Involved, and Partnerships pages complete -- all 14 requirements satisfied across 5 pages.

## Wave Structure

```
Wave 1 (parallel):
  Plan 01: Data layer (types + team/testimonial/partner data files)
  Plan 02: About page (no data dependency, fully independent)

Wave 2 (parallel, depends on Plan 01):
  Plan 03: Team page + Testimonials page (need team/testimonial data)
  Plan 04: Get Involved page + Partnerships page (need partner data)
```

## Plans

| Plan | Wave | Objective | Tasks | Files | Autonomous |
|------|------|-----------|-------|-------|------------|
| [06-01](../06-community-pages/06-01-PLAN.md) | 1 | Data layer: types + team members, testimonials, partners data | 2 | 4 | yes |
| [06-02](../06-community-pages/06-02-PLAN.md) | 1 | About page: founding, mission/values, name explanation | 1 | 1 | yes |
| [06-03](../06-community-pages/06-03-PLAN.md) | 2 | Team page (cards) + Testimonials page (segment distinction) | 2 | 4 | yes |
| [06-04](../06-community-pages/06-04-PLAN.md) | 2 | Get Involved (5 options + CTAs) + Partnerships (logos + CTA) | 2 | 2 | yes |

## Requirement Coverage

| Requirement | Plan | How Satisfied |
|-------------|------|---------------|
| ABOUT-01 | 06-02 | Founding intention narrative with two-column layout |
| ABOUT-02 | 06-02 | Mission/vision in bordered blocks, 7 values as hoverable card grid |
| ABOUT-03 | 06-02 | "Why the Name Matters" on dark section with St Katharine + Rural Connect explanation |
| TEAM-01 | 06-03 | Board of Directors via TeamMemberCard with name, role, bio, rural connection |
| TEAM-02 | 06-03 | Staff team via TeamMemberCard with name, position, bio, area of responsibility |
| TEAM-03 | 06-03 | Consistent card-based layout via shared TeamMemberCard + TeamGrid components |
| TESTI-01 | 06-03 | All 4 audience segment testimonials on single page |
| TESTI-02 | 06-03 | First name + identifier in blockquote cite element |
| TESTI-03 | 06-03 | Colored left borders, tinted backgrounds, segment badges per audience type |
| INVOLVE-01 | 06-04 | 5 sections: Volunteer, Attend Events, Donate, Partner, Share with icons |
| INVOLVE-02 | 06-04 | CTAs route to /contact, /events, /partnerships, /about respectively |
| PART-01 | 06-04 | Partnership approach narrative with diamond-bullet partner type list |
| PART-02 | 06-04 | Partner logo grid with name/initial fallback for missing images |
| PART-03 | 06-04 | "Become a Partner" CTA on dark section linking to /contact |

## Dependency Graph

```
                    Phase 2 (Layout & Design System)
                              |
                    +---------+---------+
                    |                   |
              Plan 06-01          Plan 06-02
            (Data Layer)         (About Page)
                    |
           +--------+--------+
           |                  |
     Plan 06-03          Plan 06-04
  (Team + Testimonials) (Get Involved + Partnerships)
```

## File Ownership (No Conflicts)

- Plan 01: `src/types/index.ts`, `src/data/team-members.ts`, `src/data/testimonials.ts`, `src/data/partners.ts`
- Plan 02: `src/app/about/page.tsx`
- Plan 03: `src/components/team/TeamMemberCard.tsx`, `src/components/team/TeamGrid.tsx`, `src/app/team/page.tsx`, `src/app/testimonials/page.tsx`
- Plan 04: `src/app/get-involved/page.tsx`, `src/app/partnerships/page.tsx`

Zero file overlap between plans. All Wave 1 plans can run in parallel. All Wave 2 plans can run in parallel.

## Execution

```
/gsd:execute-phase 06-community-pages
```

All 4 plans are fully autonomous (no checkpoints). Execute Wave 1 first, then Wave 2.
