# Requirements: St Katharine Rural Connect Website

**Defined:** 2026-02-28
**Core Value:** People in rural crisis can find and contact support within 2 clicks on any device, any connection speed.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Foundation

- [ ] **FOUND-01**: Next.js 15 project scaffolded with App Router, TypeScript, and Tailwind CSS v4
- [ ] **FOUND-02**: Design tokens configured (full color palette, typography scale, spacing, transitions)
- [ ] **FOUND-03**: Cormorant Garamond + DM Sans loaded via next/font with zero layout shift
- [ ] **FOUND-04**: shadcn/ui initialized with custom theme matching design system
- [ ] **FOUND-05**: Project structure follows defined architecture (app/, components/, lib/, data/, types/)

### Layout

- [ ] **LAYOUT-01**: Utility bar with persistent phone number and "Need Support?" link
- [ ] **LAYOUT-02**: Desktop navigation with logo, page links, and gold underline hover effects
- [ ] **LAYOUT-03**: Mobile navigation with hamburger menu and slide-out drawer
- [ ] **LAYOUT-04**: Footer with contact info, nav links, charity registration number, and social links
- [ ] **LAYOUT-05**: Skip-to-main-content link as first focusable element
- [ ] **LAYOUT-06**: Page transition animations via template.tsx (fade-up)
- [ ] **LAYOUT-07**: SectionWrapper component with alternating background rhythm

### Homepage

- [ ] **HOME-01**: Hero section with mission statement, landscape imagery, and dual CTAs
- [ ] **HOME-02**: Self-identification cards ("I am a..." — Farmer, Offshore Worker, Family, Community)
- [ ] **HOME-03**: Four service pillars displayed as cards (2x2 grid)
- [ ] **HOME-04**: Impact statistics section with animated counters
- [ ] **HOME-05**: Featured testimonial in dark section with gold accents
- [ ] **HOME-06**: Upcoming events preview (next 2-3 events) with "View All" link
- [ ] **HOME-07**: Get Involved section (Volunteer, Partner, Donate)
- [ ] **HOME-08**: Newsletter signup form
- [ ] **HOME-09**: Partner logos strip ("Supported by")

### About

- [ ] **ABOUT-01**: Founding intention / origin story section
- [ ] **ABOUT-02**: Mission, Vision, Values display
- [ ] **ABOUT-03**: "Why the Name Matters" section explaining St Katharine + Rural Connect

### Services

- [ ] **SERV-01**: Services overview page with all four pillars
- [ ] **SERV-02**: Individual pillar detail page for Community Wellness & Mental Health
- [ ] **SERV-03**: Individual pillar detail page for Agricultural Support & Resources
- [ ] **SERV-04**: Individual pillar detail page for Offshore Worker Engagement & Support
- [ ] **SERV-05**: Individual pillar detail page for Community Connection & Development
- [ ] **SERV-06**: User-centered plain language naming (e.g., "Supporting Farm Life" not "Agricultural Resources")
- [ ] **SERV-07**: "What Happens When You Call" reassurance section on each pillar page

### Audience

- [ ] **AUD-01**: Who We Serve overview page with all audience segments
- [ ] **AUD-02**: Audience-specific content sections (relevant services, testimonials, contact options)
- [ ] **AUD-03**: Access points listed per audience (phone, email, forms, workshops)

### Events

- [ ] **EVENT-01**: Events calendar page with list/grid view
- [ ] **EVENT-02**: Filter by audience (farmers, offshore workers, families, all community)
- [ ] **EVENT-03**: Filter by type (workshop, social, volunteer, support)
- [ ] **EVENT-04**: Filter by format (in-person, virtual, hybrid)
- [ ] **EVENT-05**: Individual event detail page with date, time, location, description

### Get Involved

- [ ] **INVOLVE-01**: Get Involved page with sections for Volunteer, Attend Events, Donate, Partner, Share
- [ ] **INVOLVE-02**: Clear CTAs routing to appropriate actions/pages

### Partnerships

- [ ] **PART-01**: Partnership approach description
- [ ] **PART-02**: Partner logos display
- [ ] **PART-03**: "Become a Partner" CTA

### Team

- [ ] **TEAM-01**: Board of Directors section with name, role, bio, rural connection
- [ ] **TEAM-02**: Staff team section with name, position, bio, area of responsibility
- [ ] **TEAM-03**: Card-based layout with consistent presentation

### Testimonials

- [ ] **TESTI-01**: Testimonials page with quotes from all audience segments
- [ ] **TESTI-02**: Each testimonial shows first name, identifier (e.g., "dairy farmer near Huntly")
- [ ] **TESTI-03**: Visual distinction between audience segment testimonials

### Contact

- [ ] **CONTACT-01**: Contact form with name, email, message, and audience selector
- [ ] **CONTACT-02**: Honeypot field for spam prevention (no CAPTCHA)
- [ ] **CONTACT-03**: Empathetic validation messages and "Your information is confidential" reassurance
- [ ] **CONTACT-04**: Phone number, email, office hours, and location displayed
- [ ] **CONTACT-05**: Form submission via Server Action

### Accessibility

- [ ] **A11Y-01**: `<html lang="en-GB">` on every page
- [ ] **A11Y-02**: Unique descriptive `<title>` per page (pattern: "Page | St Katharine Rural Connect")
- [ ] **A11Y-03**: Semantic landmarks: header, nav, main, footer
- [ ] **A11Y-04**: Strict heading hierarchy (no skipped levels)
- [ ] **A11Y-05**: All images have meaningful alt text or `alt=""` for decorative
- [ ] **A11Y-06**: Visible focus indicators (gold rings, never outline: none)
- [ ] **A11Y-07**: Content reflows at 320px with no horizontal scroll
- [ ] **A11Y-08**: Touch targets minimum 44x44px
- [ ] **A11Y-09**: `prefers-reduced-motion` respected (disable transforms, zero durations)
- [ ] **A11Y-10**: `tel:` links on all phone numbers

### SEO

- [ ] **SEO-01**: `generateMetadata` per page with unique title and description
- [ ] **SEO-02**: `sitemap.ts` auto-generated
- [ ] **SEO-03**: `robots.ts` configured
- [ ] **SEO-04**: JSON-LD structured data (NGO type + CommunityEvent)
- [ ] **SEO-05**: Charity registration number in footer

### Performance

- [ ] **PERF-01**: Total page weight under 500KB
- [ ] **PERF-02**: Images optimized via next/image (WebP/AVIF, responsive srcset, lazy loading)
- [ ] **PERF-03**: LazyMotion with domAnimation for tree-shaking (~15KB saving)
- [ ] **PERF-04**: Under 100KB JS gzipped

### Design

- [ ] **DESIGN-01**: Gold accent lines (2px) on hover states and section dividers
- [ ] **DESIGN-02**: Card hover effects (4px lift, shadow increase, gold top-border grows)
- [ ] **DESIGN-03**: Button hover with gold sweep animation
- [ ] **DESIGN-04**: Staggered section reveal animations (fade up 30px, whileInView, once)
- [ ] **DESIGN-05**: Diamond divider and corner bracket architectural line graphics
- [ ] **DESIGN-06**: Two-column layouts for problem/solution sections
- [ ] **DESIGN-07**: Alternating section backgrounds (stone-50, stone-100, primary-900 for dramatic breaks)

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### CMS Integration

- **CMS-01**: Sanity CMS for non-technical staff content editing
- **CMS-02**: Live preview of CMS content changes
- **CMS-03**: ISR for events calendar when connected to CMS

### Advanced Features

- **ADV-01**: Service Worker caching contact page for offline access
- **ADV-02**: Quick Exit button (navigates to neutral site, clears history)
- **ADV-03**: Dynamic OG images per page using ImageResponse
- **ADV-04**: Floating "Need Help?" button (persistent bottom-right)
- **ADV-05**: Mobile sticky bottom bar with "Call" and "Message"

### Analytics

- **ANAL-01**: Plausible analytics integration (privacy-friendly)
- **ANAL-02**: Event tracking for CTA clicks and form submissions

## Out of Scope

| Feature | Reason |
|---------|--------|
| Real-time chat | High complexity, not core to support model |
| User accounts / login | Not needed — organization-facing, not user-facing |
| E-commerce / payments | Donation will link externally |
| Multi-language (Gaelic) | Complexity; add if requested later |
| Blog / news section | Defer until CMS integrated |
| Google Maps embed | Performance cost; static location info sufficient |
| Video hosting | Link to YouTube/Vimeo externally |
| reCAPTCHA | Accessibility barrier per research; use honeypot |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 | Phase 1 | Pending |
| FOUND-02 | Phase 1 | Pending |
| FOUND-03 | Phase 1 | Pending |
| FOUND-04 | Phase 1 | Pending |
| FOUND-05 | Phase 1 | Pending |
| LAYOUT-01 | Phase 2 | Pending |
| LAYOUT-02 | Phase 2 | Pending |
| LAYOUT-03 | Phase 2 | Pending |
| LAYOUT-04 | Phase 2 | Pending |
| LAYOUT-05 | Phase 2 | Pending |
| LAYOUT-06 | Phase 2 | Pending |
| LAYOUT-07 | Phase 2 | Pending |
| DESIGN-01 | Phase 2 | Pending |
| DESIGN-02 | Phase 2 | Pending |
| DESIGN-03 | Phase 2 | Pending |
| DESIGN-04 | Phase 2 | Pending |
| DESIGN-05 | Phase 2 | Pending |
| DESIGN-06 | Phase 2 | Pending |
| DESIGN-07 | Phase 2 | Pending |
| HOME-01 | Phase 3 | Pending |
| HOME-02 | Phase 3 | Pending |
| HOME-03 | Phase 3 | Pending |
| HOME-04 | Phase 3 | Pending |
| HOME-05 | Phase 3 | Pending |
| HOME-06 | Phase 3 | Pending |
| HOME-07 | Phase 3 | Pending |
| HOME-08 | Phase 3 | Pending |
| HOME-09 | Phase 3 | Pending |
| SERV-01 | Phase 4 | Pending |
| SERV-02 | Phase 4 | Pending |
| SERV-03 | Phase 4 | Pending |
| SERV-04 | Phase 4 | Pending |
| SERV-05 | Phase 4 | Pending |
| SERV-06 | Phase 4 | Pending |
| SERV-07 | Phase 4 | Pending |
| AUD-01 | Phase 4 | Pending |
| AUD-02 | Phase 4 | Pending |
| AUD-03 | Phase 4 | Pending |
| EVENT-01 | Phase 5 | Pending |
| EVENT-02 | Phase 5 | Pending |
| EVENT-03 | Phase 5 | Pending |
| EVENT-04 | Phase 5 | Pending |
| EVENT-05 | Phase 5 | Pending |
| ABOUT-01 | Phase 6 | Pending |
| ABOUT-02 | Phase 6 | Pending |
| ABOUT-03 | Phase 6 | Pending |
| TEAM-01 | Phase 6 | Pending |
| TEAM-02 | Phase 6 | Pending |
| TEAM-03 | Phase 6 | Pending |
| TESTI-01 | Phase 6 | Pending |
| TESTI-02 | Phase 6 | Pending |
| TESTI-03 | Phase 6 | Pending |
| INVOLVE-01 | Phase 6 | Pending |
| INVOLVE-02 | Phase 6 | Pending |
| PART-01 | Phase 6 | Pending |
| PART-02 | Phase 6 | Pending |
| PART-03 | Phase 6 | Pending |
| CONTACT-01 | Phase 7 | Pending |
| CONTACT-02 | Phase 7 | Pending |
| CONTACT-03 | Phase 7 | Pending |
| CONTACT-04 | Phase 7 | Pending |
| CONTACT-05 | Phase 7 | Pending |
| A11Y-01 | Phase 8 | Pending |
| A11Y-02 | Phase 8 | Pending |
| A11Y-03 | Phase 8 | Pending |
| A11Y-04 | Phase 8 | Pending |
| A11Y-05 | Phase 8 | Pending |
| A11Y-06 | Phase 8 | Pending |
| A11Y-07 | Phase 8 | Pending |
| A11Y-08 | Phase 8 | Pending |
| A11Y-09 | Phase 8 | Pending |
| A11Y-10 | Phase 8 | Pending |
| SEO-01 | Phase 8 | Pending |
| SEO-02 | Phase 8 | Pending |
| SEO-03 | Phase 8 | Pending |
| SEO-04 | Phase 8 | Pending |
| SEO-05 | Phase 8 | Pending |
| PERF-01 | Phase 8 | Pending |
| PERF-02 | Phase 8 | Pending |
| PERF-03 | Phase 8 | Pending |
| PERF-04 | Phase 8 | Pending |

**Coverage:**
- v1 requirements: 81 total
- Mapped to phases: 81
- Unmapped: 0

---
*Requirements defined: 2026-02-28*
*Last updated: 2026-02-28 after roadmap creation*
