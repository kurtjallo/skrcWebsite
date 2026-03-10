# St Katharine Rural Connect — Website

## What This Is

A premium, accessible website for St Katharine Rural Connect (SKRC), a community-rooted initiative strengthening social, emotional, and practical support for rural people and places in Scotland. The site serves farmers, offshore workers, families, and community members — providing accessible pathways to wellness, resources, and belonging.

## Core Value

People in rural crisis can find and contact support within 2 clicks on any device, any connection speed.

## Current Milestone: v2.2 CI Pipeline

**Goal:** Add continuous integration via GitHub Actions and Vercel auto-checks — lint, typecheck, and build verification on every PR, with proper ESLint config and .gitignore hygiene.

**Target features:**
- GitHub Actions CI workflow: lint, typecheck (`tsc --noEmit`), build (`next build`) on PR/push
- ESLint configuration file (formalize Next.js defaults)
- Comprehensive .gitignore (ignore .next/, build artifacts, env files)
- Vercel preview deploy auto-checks on PRs

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

<!-- v2.2 CI Pipeline requirements -->

- [ ] CI-01: GitHub Actions workflow running lint, typecheck, build on PR and push to main
- [ ] CI-02: ESLint config file formalizing Next.js defaults for CI reproducibility
- [ ] CI-03: Comprehensive .gitignore covering .next/, node_modules/, env files, OS files, build artifacts
- [ ] CI-04: Vercel preview deploy auto-checks on pull requests

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
- Unit/E2E testing — no test infrastructure exists yet, separate future milestone

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
*Last updated: 2026-03-10 after milestone v2.2 CI Pipeline initialization*
