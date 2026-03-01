# St Katharine Rural Connect — Website

## What This Is

A premium, accessible website for St Katharine Rural Connect (SKRC), a community-rooted initiative strengthening social, emotional, and practical support for rural people and places in Scotland. The site serves farmers, offshore workers, families, and community members — providing accessible pathways to wellness, resources, and belonging.

## Core Value

People in rural crisis can find and contact support within 2 clicks on any device, any connection speed.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Next.js 15 + Tailwind v4 + TypeScript scaffold with design tokens
- [ ] Shared layout: utility bar, navigation (desktop + mobile), footer
- [ ] 10 content pages (Home, About, Services, Who We Serve, Events, Get Involved, Partnerships, Team, Testimonials, Contact)
- [ ] Premium design: gold accent lines, hover effects, alternating section backgrounds
- [ ] Accessibility: WCAG AA, skip links, keyboard nav, reduced motion, 44px touch targets
- [ ] SEO: metadata, sitemap, robots, schema markup, OG images
- [ ] Performance: <500KB pages, lazy loading, optimized images, 3G-friendly
- [ ] Contact form with honeypot spam protection
- [ ] Self-identification flow ("I am a..." cards routing to tailored content)
- [ ] Filterable events calendar (by audience, type, format)

### Out of Scope

- CMS integration (Sanity) — deferred to post-launch
- Analytics (Plausible) — add after deployment
- Service Worker / offline — deferred to v2
- Quick Exit button — requires sensitive UX testing, add post-launch
- Dynamic OG images — nice-to-have, add after core pages ship
- Google Business Profile — external to website build
- Real event data — use placeholder/sample data for MVP

## Context

- Organization is in startup phase; no existing digital presence
- Target audience includes older rural demographics — readability and simplicity critical
- Rural Scotland = poor connectivity — performance is a hard requirement
- Comprehensive research completed (RESEARCH.md) covering competitive analysis, design system, UX flows, content strategy, accessibility, animation patterns, and SEO
- Design system fully specified: Slate Navy + Heather Moor + Antique Gold palette, Cormorant Garamond + DM Sans typography
- Content (testimonials, team bios, events) will use TypeScript data files for MVP

## Constraints

- **Tech stack**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Motion (Framer Motion) — per research decisions
- **Components**: shadcn/ui (Radix-based) for accessible primitives
- **Fonts**: Cormorant Garamond + DM Sans via next/font (self-hosted, no external requests)
- **Hosting**: Vercel free tier
- **Performance**: <500KB per page, functional on slow 3G
- **Accessibility**: WCAG AA minimum, crisis-aware design patterns
- **No Claude attribution**: Never include "Co-Authored-By: Claude" in git commits

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js 15 App Router | RSC reduces client JS, SSG for speed | — Pending |
| Tailwind CSS v4 | Design token system, rapid development | — Pending |
| shadcn/ui (Radix) | Accessible, customizable, no bundle bloat | — Pending |
| Cormorant Garamond + DM Sans | Heritage serif + modern sans, distinctive | — Pending |
| TypeScript data files (not CMS) | Ship fast, migrate to Sanity later | — Pending |
| 18px base font | Premium readability for rural/older audience | — Pending |
| Gold accent = scarce | Thin lines and hovers only = luxury feel | — Pending |
| Help-first CTA hierarchy | Matches Samaritans/RSABI best practice | — Pending |

---
*Last updated: 2026-02-28 after project initialization*
