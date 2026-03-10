# St Katharine Rural Connect — Website

## What This Is

A premium, accessible website for St Katharine Rural Connect (SKRC), a community-rooted initiative strengthening social, emotional, and practical support for rural people and places in Scotland. The site serves farmers, offshore workers, families, and community members — providing accessible pathways to wellness, resources, and belonging.

## Core Value

People in rural crisis can find and contact support within 2 clicks on any device, any connection speed.

## Current Milestone: v2.0 Visual Revamp

**Goal:** Full visual redesign of every page and component to match a modern, premium design language inspired by the Stratwell Consulting template — navy blue palette, light blue-grey backgrounds, white cards, italic-emphasis headings, circle-arrow CTAs, section label pills — while preserving SKRC's content, accessibility, and performance standards. Plus 4 new pages (FAQ, Links, 404, Thank You).

**Target features:**
- Complete color palette overhaul: navy blue primary + royal blue accent (drop gold entirely)
- Light blue-grey page backgrounds with white card surfaces
- Italic-emphasis heading pattern across all pages (selective words in italic for emotional weight)
- Blue dot + uppercase pill section labels throughout
- Text + circle-arrow CTA button pattern (replace current button styles)
- Inset rounded-corner hero banners (interior page hero pattern)
- Full-screen dark hero contact page with embedded form
- Team member cards with frosted glass overlay (replace initials avatars)
- White card FAQ accordion
- Link-in-bio page for social media
- Custom 404 page with friendly messaging
- Thank You confirmation page (post-form-submission)
- Dark navy footer variant
- Pre-footer CTA image card with curved clip

**Design reference:** `mockups/homepage-reference.md` — 9-page comprehensive design specification

## Requirements

### Validated

<!-- Shipped in v1.0 and confirmed working -->

- ✓ Next.js 15 + Tailwind v4 + TypeScript scaffold with design tokens — v1.0
- ✓ Shared layout: utility bar, navigation (desktop + mobile), footer — v1.0
- ✓ 10 content pages (Home, About, Services, Who We Serve, Events, Get Involved, Partnerships, Team, Testimonials, Contact) — v1.0
- ✓ Accessibility: WCAG AA, skip links, keyboard nav, reduced motion, 44px touch targets — v1.0
- ✓ SEO: metadata, sitemap, robots, schema markup — v1.0
- ✓ Performance: <500KB pages, lazy loading, 3G-friendly — v1.0
- ✓ Contact form with honeypot spam protection + Zod validation — v1.0
- ✓ Self-identification flow ("I am a..." cards routing to tailored content) — v1.0
- ✓ Filterable events calendar (by audience, type, format) — v1.0
- ✓ LazyMotion provider with domAnimation + m.* imports — v1.0
- ✓ JSON-LD structured data (NGO + CommunityEvent) — v1.0

### Active

<!-- v2.0 Visual Revamp requirements -->

- [ ] New color system: deep navy primary, royal blue accent, light blue-grey backgrounds, white card surfaces
- [ ] Italic-emphasis heading pattern: selective words in Cormorant Garamond italic for emotional weight
- [ ] Section label component: blue dot + uppercase pill badges for all section headers
- [ ] Circle-arrow CTA button: text + circular icon button pattern (replace current gold/outline buttons)
- [ ] Inset rounded-corner hero: full-width image heroes with ~20px border-radius, page-edge inset
- [ ] Interior page hero: shorter half-height banner with single centered heading (for all inner pages)
- [ ] Homepage redesign: two-column hero, who-we-are statement, 2x2 service grid + tall CTA card, full-width story cards, portrait testimonial cards with play buttons, numbered approach steps, partner logo grid, pre-footer CTA image card
- [ ] Services page redesign: image-left/content-right pillar cards with "Why It Matters" + "What's Included" structure, blue checkmark lists
- [ ] About page redesign: asymmetric two-column intro, mission card with image, large vision statement + image + stats, frosted glass team member cards
- [ ] Events page redesign: match new card patterns and visual language
- [ ] Contact page redesign: full-screen dark hero with embedded form, two-column layout (info left, form right), conversational heading
- [ ] Who We Serve page redesign: match new visual patterns
- [ ] Get Involved page redesign: match new card and CTA patterns
- [ ] Partnerships page redesign: match new visual language
- [ ] Team page redesign: frosted glass portrait cards (3x2 or 4+3 grid)
- [ ] Testimonials page redesign: portrait photo cards with dark gradient overlay, quotes, and play button icons
- [ ] New page: FAQ with white card accordion, narrow content column, serif questions, "+" toggles
- [ ] New page: Links (link-in-bio) — standalone dark page, no nav/footer, centered card with social icons + action buttons
- [ ] New page: Custom 404 — full-screen hero with friendly "Oops" messaging and homepage redirect
- [ ] New page: Thank You — full-screen hero confirmation after form submission
- [ ] Footer redesign: dark navy variant with 4-column grid (brand, menu, socials, contact)
- [ ] Pre-footer CTA: large image card with curved clip-path, inset from page edges
- [ ] White card pattern: rounded corners, minimal/no border, hover lift for interactive cards
- [ ] Stats cards: left border accent, animated counters, white cards on light bg
- [ ] Update all existing components to use new color tokens and visual patterns
- [ ] Maintain all v1.0 accessibility standards through the redesign
- [ ] Maintain all v1.0 SEO standards through the redesign
- [ ] Maintain all v1.0 performance standards through the redesign

### Out of Scope

- CMS integration (Sanity) — deferred to post-launch
- Analytics (Plausible) — add after deployment
- Service Worker / offline — deferred
- Quick Exit button — requires sensitive UX testing, add post-launch
- Dynamic OG images — add after redesign ships
- Google Business Profile — external to website build
- Real event data — continue using placeholder/sample data
- Video testimonial functionality — play buttons are visual only for now (no actual video playback)
- Case Studies / Impact Stories detail pages — Stratwell has these but SKRC doesn't have case study content yet

## Context

- v1.0 website fully built with 10 pages, gold accent design system, all quality passes complete
- Full visual revamp driven by Stratwell Consulting Framer template reference
- 9-page design specification created at `mockups/homepage-reference.md` covering Homepage, Services, About, Case Studies, FAQ, Contact, Thank You, Links, and 404
- Existing codebase is brownfield — all components exist but need visual overhaul
- Cormorant Garamond + DM Sans fonts stay (already configured, work well with italic-emphasis pattern)
- Target audience unchanged: farmers, offshore workers, families, rural communities in Scotland
- Warm charity tone must be preserved despite adopting a more corporate template — adapt language and imagery choices accordingly

## Constraints

- **Tech stack**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Motion — unchanged
- **Components**: shadcn/ui (Radix-based) for accessible primitives — unchanged
- **Fonts**: Cormorant Garamond + DM Sans via next/font — unchanged
- **Hosting**: Vercel free tier
- **Performance**: <500KB per page, functional on slow 3G
- **Accessibility**: WCAG AA minimum, crisis-aware design patterns
- **No Claude attribution**: Never include "Co-Authored-By: Claude" in git commits
- **Design reference**: `mockups/homepage-reference.md` is the source of truth for visual patterns

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js 15 App Router | RSC reduces client JS, SSG for speed | ✓ Good |
| Tailwind CSS v4 | Design token system, rapid development | ✓ Good |
| shadcn/ui (Radix) | Accessible, customizable, no bundle bloat | ✓ Good |
| Cormorant Garamond + DM Sans | Heritage serif + modern sans, distinctive | ✓ Good |
| TypeScript data files (not CMS) | Ship fast, migrate to Sanity later | ✓ Good |
| 18px base font | Premium readability for rural/older audience | ✓ Good |
| Drop gold accent for navy blue | Adopting Stratwell palette — cleaner, more modern, unified blue identity | — Pending |
| Italic-emphasis headings | Defining typographic feature — draws attention to emotional core words, works well for charity warmth | — Pending |
| Full-screen contact hero | Bold, modern, reduces friction — everything in one viewport | — Pending |
| Add FAQ + Links + 404 + Thank You | Completes the page set, improves UX for social media and error handling | — Pending |
| Dark navy footer | Strong visual anchor, modern feel, good contrast with light page backgrounds | — Pending |

---
*Last updated: 2026-03-08 after milestone v2.0 initialization*
