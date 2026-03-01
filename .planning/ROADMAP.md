# Roadmap: St Katharine Rural Connect Website

## Overview

Build a premium, accessible website for SKRC from scaffold to launch-ready. Foundation and layout ship sequentially, then 5 content page phases execute in parallel, followed by a final quality pass across accessibility, SEO, and performance.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

- [ ] **Phase 1: Foundation** - Next.js 15 scaffold with design tokens, fonts, and shadcn/ui
- [ ] **Phase 2: Layout & Design System** - Shared layout shell and reusable design components
- [ ] **Phase 3: Homepage** - Hero, self-ID cards, pillars, testimonial, events preview, newsletter
- [ ] **Phase 4: Services & Audience** - Services overview, pillar detail pages, Who We Serve
- [ ] **Phase 5: Events Calendar** - Filterable calendar and event detail pages
- [ ] **Phase 6: Community Pages** - About, Team, Testimonials, Get Involved, Partnerships
- [ ] **Phase 7: Contact** - Contact form with honeypot, server action, and contact info
- [ ] **Phase 8: Cross-Cutting Quality** - Accessibility audit, SEO metadata, performance optimization

## Parallel Execution

```
Phase 1 (Foundation) ──► Phase 2 (Layout & Design) ──┬──► Phase 3 (Homepage)        ──┐
                                                      ├──► Phase 4 (Services)         ──┤
                                                      ├──► Phase 5 (Events)           ──┼──► Phase 8 (Quality)
                                                      ├──► Phase 6 (Community)        ──┤
                                                      └──► Phase 7 (Contact)          ──┘
```

Phases 3-7 have zero cross-dependencies and can execute in parallel.

## Phase Details

### Phase 1: Foundation
**Goal**: Project scaffolded with all tooling, design tokens, and component library configured
**Depends on**: Nothing (first phase)
**Requirements**: FOUND-01, FOUND-02, FOUND-03, FOUND-04, FOUND-05
**Research**: Unlikely (standard Next.js + Tailwind setup)
**Success Criteria** (what must be TRUE):
  1. `npm run dev` starts without errors and renders a page
  2. Design tokens (full color palette, typography scale, spacing, transitions) configured in Tailwind
  3. Cormorant Garamond + DM Sans render correctly with zero layout shift
  4. shadcn/ui components render with custom SKRC theme colors
  5. Project structure matches defined architecture (app/, components/, lib/, data/, types/)
**Plans**: TBD

### Phase 2: Layout & Design System
**Goal**: Shared layout shell (utility bar, nav, footer) and reusable design components ready for all pages
**Depends on**: Phase 1
**Requirements**: LAYOUT-01, LAYOUT-02, LAYOUT-03, LAYOUT-04, LAYOUT-05, LAYOUT-06, LAYOUT-07, DESIGN-01, DESIGN-02, DESIGN-03, DESIGN-04, DESIGN-05, DESIGN-06, DESIGN-07
**Research**: Unlikely (standard component patterns)
**Success Criteria** (what must be TRUE):
  1. Every page shows utility bar with phone number and "Need Support?" link
  2. Desktop navigation displays logo, page links, and gold underline hover effects
  3. Mobile hamburger menu opens/closes with slide-out drawer
  4. Footer displays contact info, nav links, charity registration, and social links
  5. Skip-to-main-content link is first focusable element on every page
  6. SectionWrapper alternates backgrounds (stone-50, stone-100, primary-900)
  7. Gold accent lines, card hover effects, button hover animations, and staggered reveals work
  8. Diamond divider and corner bracket architectural graphics render
**Plans**: TBD

### Phase 3: Homepage
**Goal**: Complete homepage with all sections from hero through partner logos
**Depends on**: Phase 2
**Requirements**: HOME-01, HOME-02, HOME-03, HOME-04, HOME-05, HOME-06, HOME-07, HOME-08, HOME-09
**Research**: Unlikely
**Success Criteria** (what must be TRUE):
  1. Hero displays mission statement, landscape imagery, and dual CTAs ("Get in Touch", "See What's On")
  2. Self-identification cards ("I am a..." — Farmer, Offshore Worker, Family, Community) route to relevant content
  3. Four service pillars render as interactive cards with hover effects
  4. Impact statistics display with animated counters
  5. Featured testimonial renders in dark section with gold accents
  6. Upcoming events preview shows next 2-3 events with "View All" link
  7. Newsletter signup form captures email
**Plans**: TBD

### Phase 4: Services & Audience
**Goal**: Services overview, 4 individual pillar pages, and Who We Serve page with audience routing
**Depends on**: Phase 2
**Requirements**: SERV-01, SERV-02, SERV-03, SERV-04, SERV-05, SERV-06, SERV-07, AUD-01, AUD-02, AUD-03
**Research**: Unlikely
**Success Criteria** (what must be TRUE):
  1. Services overview page displays all four pillars with links to detail pages
  2. Each pillar has its own detail page with user-centered plain language naming
  3. "What Happens When You Call" reassurance section appears on each pillar page
  4. Who We Serve page shows all 4 audience segments with relevant services and contact options
  5. Access points listed per audience (phone, email, forms, workshops)
**Plans**: TBD

### Phase 5: Events Calendar
**Goal**: Filterable events calendar and individual event detail pages
**Depends on**: Phase 2
**Requirements**: EVENT-01, EVENT-02, EVENT-03, EVENT-04, EVENT-05
**Research**: Unlikely (filter logic is straightforward with sample data)
**Success Criteria** (what must be TRUE):
  1. Events page displays list/grid of sample events
  2. Events filterable by audience (farmers, offshore workers, families, all community)
  3. Events filterable by type (workshop, social, volunteer, support)
  4. Events filterable by format (in-person, virtual, hybrid)
  5. Individual event detail pages display date, time, location, and description
**Plans**: TBD

### Phase 6: Community Pages
**Goal**: About, Team, Testimonials, Get Involved, and Partnerships pages complete
**Depends on**: Phase 2
**Requirements**: ABOUT-01, ABOUT-02, ABOUT-03, TEAM-01, TEAM-02, TEAM-03, TESTI-01, TESTI-02, TESTI-03, INVOLVE-01, INVOLVE-02, PART-01, PART-02, PART-03
**Research**: Unlikely
**Success Criteria** (what must be TRUE):
  1. About page displays founding intention, mission/vision/values, and "Why the Name Matters"
  2. Team page shows Board of Directors and Staff with card-based layout (name, role, bio, connection)
  3. Testimonials page shows quotes from all 4 audience segments with first name and identifier
  4. Get Involved page presents Volunteer, Attend Events, Donate, Partner, Share sections with CTAs
  5. Partnerships page shows partner logos, approach description, and "Become a Partner" CTA
**Plans**: TBD

### Phase 7: Contact
**Goal**: Contact page with accessible form, server action submission, and contact information
**Depends on**: Phase 2
**Requirements**: CONTACT-01, CONTACT-02, CONTACT-03, CONTACT-04, CONTACT-05
**Research**: Unlikely (standard Next.js server action pattern)
**Success Criteria** (what must be TRUE):
  1. Contact form with name, email, message, and audience selector submits via Server Action
  2. Honeypot field prevents spam without CAPTCHA
  3. Empathetic validation messages and "Your information is confidential" reassurance displayed
  4. Phone number, email, office hours, and location displayed alongside form
**Plans**: TBD

### Phase 8: Cross-Cutting Quality
**Goal**: All pages meet accessibility, SEO, and performance standards
**Depends on**: Phases 3, 4, 5, 6, 7
**Requirements**: A11Y-01, A11Y-02, A11Y-03, A11Y-04, A11Y-05, A11Y-06, A11Y-07, A11Y-08, A11Y-09, A11Y-10, SEO-01, SEO-02, SEO-03, SEO-04, SEO-05, PERF-01, PERF-02, PERF-03, PERF-04
**Research**: Unlikely
**Success Criteria** (what must be TRUE):
  1. `<html lang="en-GB">` and unique descriptive `<title>` on every page
  2. Semantic landmarks (header, nav, main, footer) and strict heading hierarchy throughout
  3. All images have meaningful alt text or `alt=""` for decorative
  4. Visible focus indicators (gold rings) on all interactive elements
  5. Content reflows at 320px with no horizontal scroll, touch targets minimum 44x44px
  6. `prefers-reduced-motion` disables transforms and zeroes durations
  7. `tel:` links on all phone numbers
  8. Every page has unique metadata via `generateMetadata` (title, description, OG)
  9. `sitemap.ts` and `robots.ts` auto-generated
  10. JSON-LD structured data (NGO + CommunityEvent) present
  11. Total page weight under 500KB, under 100KB JS gzipped
  12. Images optimized via next/image, LazyMotion with domAnimation enabled
**Plans**: TBD

## Progress

**Execution Order:**
Phases 1-2 sequential, then 3-7 in parallel, then 8.

| Phase | Plans Complete | Status | Completed |
|-------|---------------|--------|-----------|
| 1. Foundation | 0/TBD | Not started | - |
| 2. Layout & Design System | 0/TBD | Not started | - |
| 3. Homepage | 0/TBD | Not started | - |
| 4. Services & Audience | 0/TBD | Not started | - |
| 5. Events Calendar | 0/TBD | Not started | - |
| 6. Community Pages | 0/TBD | Not started | - |
| 7. Contact | 0/TBD | Not started | - |
| 8. Cross-Cutting Quality | 0/TBD | Not started | - |
