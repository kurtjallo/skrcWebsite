# Roadmap: St Katharine Rural Connect Website

## Milestones

- ✅ **v1.0 MVP** - Phases 1-8 (shipped 2026-03-07)
- ✅ **v2.0 Visual Revamp** - Phases 9-14 (shipped 2026-03-09)
- ✅ **v2.1 Polish** - Phase 15 (shipped 2026-03-10)
- **v2.2 CI Pipeline** - Phase 16

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

<details>
<summary>✅ v1.0 MVP (Phases 1-8) — SHIPPED</summary>

- [x] **Phase 1: Foundation** - Next.js 15 scaffold with design tokens, fonts, and shadcn/ui
- [x] **Phase 2: Layout & Design System** - Shared layout shell and reusable design components
- [x] **Phase 3: Homepage** - Hero, self-ID cards, pillars, testimonial, events preview, newsletter
- [x] **Phase 4: Services & Audience** - Services overview, pillar detail pages, Who We Serve
- [x] **Phase 5: Events Calendar** - Filterable calendar and event detail pages
- [x] **Phase 6: Community Pages** - About, Team, Testimonials, Get Involved, Partnerships
- [x] **Phase 7: Contact** - Contact form with honeypot, server action, and contact info
- [x] **Phase 8: Cross-Cutting Quality** - Accessibility audit, SEO metadata, performance optimization

</details>

### ✅ v2.0 Visual Revamp (Shipped)

**Milestone Goal:** Full visual redesign to match modern navy blue design language — new color palette, italic-emphasis headings, circle-arrow CTAs, white card surfaces — plus 4 new pages (FAQ, Links, 404, Thank You).

- [x] **Phase 9: Design System & Layout** - New color tokens, typography, shared components (heroes, footer, CTAs, cards)
- [x] **Phase 10: Homepage Redesign** - Complete homepage in new visual language
- [x] **Phase 11: Core Page Redesigns** - Services, About, and Contact pages
- [x] **Phase 12: Community Page Redesigns** - Events, Who We Serve, Get Involved, Partnerships, Team, Testimonials
- [x] **Phase 13: New Pages** - FAQ, Links, 404, Thank You
- [x] **Phase 14: Quality Verification** - Accessibility, SEO, performance preservation audit

### ✅ v2.1 Polish (Shipped)

**Milestone Goal:** Fix web interface guideline violations and integrate logo asset across the site.

- [x] **Phase 15: Web Interface Guidelines Compliance** - Fix transition-all anti-patterns, add logo hover states, correct image dimensions, address hydration risk

### v2.2 CI Pipeline

**Milestone Goal:** Add continuous integration via GitHub Actions and Vercel auto-checks — lint, typecheck, and build verification on every PR.

- [ ] **Phase 16: CI Pipeline** - GitHub Actions workflow, ESLint config, .gitignore cleanup, Vercel auto-checks

## Parallel Execution

```
Phase 9 → Phase 10 ──┬──► Phase 11 (Services, About, Contact)  ──┐
                      ├──► Phase 12 (6 Community Pages)           ──┼──► Phase 14 (Quality)
                      └──► Phase 13 (4 New Pages)                 ──┘
```

Phases 11-13 have zero cross-dependencies and can execute in parallel.

## Phase Details

### Phase 9: Design System & Layout
**Goal**: New visual foundation — color tokens, typography patterns, shared components (heroes, footer, pre-footer CTA, cards, buttons)
**Depends on**: Nothing (v2.0 start, builds on v1.0 codebase)
**Requirements**: DS-01, DS-02, DS-03, DS-04, DS-05, DS-06, LAYOUT-01, LAYOUT-02, LAYOUT-03, LAYOUT-04
**Research**: Likely — Tailwind v4 token restructuring (replace gold palette entirely), clip-path techniques for pre-footer CTA
**Success Criteria** (what must be TRUE):
  1. Deep navy primary + royal blue accent palette applied globally; no gold tokens remain
  2. Italic-emphasis heading pattern renders with selective Cormorant Garamond italic words
  3. Blue dot + uppercase pill section labels component available and rendering
  4. Circle-arrow CTA button pattern replaces all gold/outline button styles
  5. White card pattern (rounded corners, hover lift) and stats cards (left border accent) render correctly
  6. Inset rounded-corner hero and interior page hero components ready for page use
  7. Dark navy footer with 4-column grid replaces current footer
  8. Pre-footer CTA image card with curved clip-path renders
**Plans**: TBD

### Phase 10: Homepage Redesign
**Goal**: Complete homepage in new visual language, establishing the design standard for all other pages
**Depends on**: Phase 9
**Requirements**: HOME-01, HOME-02, HOME-03, HOME-04, HOME-05, HOME-06, HOME-07
**Research**: Unlikely
**Success Criteria** (what must be TRUE):
  1. Two-column hero renders with large serif heading, italic emphasis, circle-arrow CTA, inset rounded corners
  2. Who-we-are statement displays as large serif text (~36-44px) with italic-emphasis words
  3. Services grid shows 2x2 white cards + tall CTA card with background image
  4. Full-width story/impact cards render with dark gradient overlay and category tags
  5. Portrait testimonial cards display with photo, dark gradient, quote, name, and decorative play button
  6. Numbered approach steps show large italic statement + 4 numbered step cards (01-04)
  7. Partner logo grid displays in white rounded cards with monochrome navy treatment
**Plans**: TBD

### Phase 11: Core Page Redesigns
**Goal**: Redesign the three most distinctive inner pages — Services, About, Contact
**Depends on**: Phase 10
**Requirements**: SERV-01, SERV-02, SERV-03, SERV-04, ABOUT-01, ABOUT-02, ABOUT-03, ABOUT-04, ABOUT-05, CONTACT-01, CONTACT-02, CONTACT-03
**Research**: Unlikely
**Success Criteria** (what must be TRUE):
  1. Services page has interior hero and 4 pillar detail sections with image-left/content-right layout
  2. Each pillar has "Why It Matters" + "What's Included" structure with blue checkmark lists
  3. About page has asymmetric two-column intro, mission card, large vision statement + stats, updated values
  4. Contact page renders as full-screen dark hero with embedded two-column form
  5. Contact info (phone, email, hours, location) displays alongside form in updated styling
**Plans**: TBD

### Phase 12: Community Page Redesigns
**Goal**: Apply new visual language to all remaining existing pages (6 pages)
**Depends on**: Phase 10
**Requirements**: EVENT-01, EVENT-02, EVENT-03, SERVE-01, SERVE-02, SERVE-03, INVOLVE-01, INVOLVE-02, INVOLVE-03, PARTNER-01, PARTNER-02, PARTNER-03, TEAM-01, TEAM-02, TEAM-03, TESTI-01, TESTI-02, TESTI-03
**Research**: Unlikely
**Success Criteria** (what must be TRUE):
  1. Events page has interior hero, white card events, and blue-styled filter controls
  2. Who We Serve page displays audience segments with updated cards and circle-arrow CTAs
  3. Get Involved page shows involvement cards in white card pattern with circle-arrow CTAs
  4. Partnerships page has updated partner grid and typography matching new visual language
  5. Team page displays frosted glass portrait cards in board (4-col) and staff (3-col) grids
  6. Testimonials page shows portrait photo cards with dark gradient overlay and play button icons
**Plans**: TBD

### Phase 13: New Pages
**Goal**: Build four new pages completing the site
**Depends on**: Phase 10
**Requirements**: FAQ-01, FAQ-02, FAQ-03, FAQ-04, LINKS-01, LINKS-02, LINKS-03, LINKS-04, 404-01, 404-02, 404-03, THANKS-01, THANKS-02, THANKS-03
**Research**: Unlikely
**Success Criteria** (what must be TRUE):
  1. FAQ page has interior hero, white card accordion with "+" toggles, narrow content column, 8+ questions
  2. Links page is standalone dark page (no nav/footer) with centered card, social icons, and action buttons
  3. 404 page displays full-screen hero with friendly messaging and circle-arrow CTA to homepage
  4. Thank You page shows branded confirmation with warm acknowledgment and next-step links
**Plans**: TBD

### Phase 14: Quality Verification
**Goal**: End-to-end verification that accessibility, SEO, and performance standards are preserved
**Depends on**: Phases 11, 12, 13
**Requirements**: QUALITY-01, QUALITY-02, QUALITY-03
**Research**: Unlikely
**Success Criteria** (what must be TRUE):
  1. All v1.0 accessibility standards pass — WCAG AA, skip links, keyboard nav, reduced motion, 44px touch targets, semantic landmarks, heading hierarchy, focus indicators, tel: links
  2. All v1.0 SEO standards pass — unique metadata per page, sitemap updated with new pages, robots, JSON-LD structured data, charity number in footer
  3. All v1.0 performance standards pass — <500KB per page, lazy loading, LazyMotion with domAnimation
**Plans**: 5 (all complete)

### Phase 15: Web Interface Guidelines Compliance
**Goal**: Fix web interface guideline violations found in code review — transition-all anti-patterns, missing logo hover states, image dimension mismatch, hydration risk
**Depends on**: Phase 14
**Requirements**: WIG-01, WIG-02, WIG-03, WIG-04
**Research**: Unlikely
**Success Criteria** (what must be TRUE):
  1. Zero `transition-all` usage — all transitions list properties explicitly
  2. Logo links in Header and Footer have visible hover feedback
  3. Links page logo Image dimensions match actual aspect ratio
  4. Footer year rendering is hydration-safe
**Plans**: 1 (all complete)

### Phase 16: CI Pipeline
**Goal**: GitHub Actions CI workflow (lint + typecheck + build), ESLint config file, comprehensive .gitignore, Vercel auto-checks
**Depends on**: Nothing (standalone DevOps work)
**Requirements**: CI-01, CI-02, CI-03, CI-04
**Research**: Unlikely
**Success Criteria** (what must be TRUE):
  1. GitHub Actions workflow runs lint, typecheck (`tsc --noEmit`), and build (`next build`) on every PR and push to main
  2. ESLint config file exists and `next lint` passes cleanly in CI
  3. .gitignore covers .next/, node_modules/, env files, OS files, editor files, build artifacts
  4. Vercel auto-deploys preview builds on PRs with status checks
**Plans**: TBD

## Progress

**Execution Order:**
Phases 9-10 sequential, then 11-13 in parallel, then 14.

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 1. Foundation | v1.0 | Complete | Complete | ✅ |
| 2. Layout & Design System | v1.0 | Complete | Complete | ✅ |
| 3. Homepage | v1.0 | Complete | Complete | ✅ |
| 4. Services & Audience | v1.0 | Complete | Complete | ✅ |
| 5. Events Calendar | v1.0 | Complete | Complete | ✅ |
| 6. Community Pages | v1.0 | Complete | Complete | ✅ |
| 7. Contact | v1.0 | Complete | Complete | ✅ |
| 8. Cross-Cutting Quality | v1.0 | Complete | Complete | ✅ |
| 9. Design System & Layout | v2.0 | 5/5 | Complete | ✅ |
| 10. Homepage Redesign | v2.0 | 1/1 | Complete | ✅ |
| 11. Core Page Redesigns | v2.0 | 1/1 | Complete | ✅ |
| 12. Community Page Redesigns | v2.0 | 1/1 | Complete | ✅ |
| 13. New Pages | v2.0 | 1/1 | Complete | ✅ |
| 14. Quality Verification | v2.0 | 1/1 | Complete | ✅ |
| 15. Web Interface Guidelines Compliance | v2.1 | 1/1 | Complete | ✅ |
| 16. CI Pipeline | v2.2 | 0/? | Planning | |
