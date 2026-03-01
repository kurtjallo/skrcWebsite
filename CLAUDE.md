# St Katharine Rural Connect - Website Project

## Design Guidelines

- Premium, elevated feel -- no clutter
- Hover effects with gold accent lines on interactive elements
- Two-column layouts for problem/solution sections
- Alternating section backgrounds for visual rhythm
- Subtle architectural line graphics throughout
- Clean, powerful, minimal aesthetic

## Rules

- For every front-end change, use the front-end skill
- Never include "Co-Authored-By: Claude" in any git commits, pushes, or PRs. No Claude attribution in the repo.
- After every git commit, update this CLAUDE.md file to reflect the current state of the project (new files, components, decisions, etc.).

## Plan Mode Rules

When entering plan mode, follow this protocol:

**Before starting:** Ask if I want one of two modes:

1. **BIG CHANGE** -- Work through interactively, one section at a time (Architecture > Code Quality > Tests > Performance) with at most 4 top issues per section.
2. **SMALL CHANGE** -- Work through interactively, ONE question per review section.

**My engineering preferences (use these to guide recommendations):**

- DRY is important -- flag repetition aggressively.
- Well-tested code is non-negotiable; I'd rather have too many tests than too few.
- Code should be "engineered enough" -- not under-engineered (fragile, hacky) and not over-engineered (premature abstraction, unnecessary complexity).
- Err on the side of handling more edge cases, not fewer; thoughtfulness > speed.
- Bias toward explicit over clever.

**Review sections (run in order):**

1. **Architecture review** -- Evaluate: system design and component boundaries, dependency graph and coupling, data flow patterns and bottlenecks, scaling characteristics and single points of failure, security architecture (auth, data access, API boundaries).

2. **Code quality review** -- Evaluate: code organization and module structure, DRY violations (be aggressive), error handling patterns and missing edge cases (call out explicitly), technical debt hotspots, areas that are over/under-engineered relative to my preferences.

3. **Test review** -- Evaluate: test coverage gaps (unit, integration, e2e), test quality and assertion strength, missing edge case coverage (be thorough), untested failure modes and error paths.

4. **Performance review** -- Evaluate: N+1 queries and database access patterns, memory-usage concerns, caching opportunities, slow or high-complexity code paths.

**For each issue found:**

- Describe the problem concretely, with file and line references.
- Present 2-3 options, including "do nothing" where reasonable.
- For each option: specify implementation effort, risk, impact on other code, and maintenance burden.
- Give an opinionated recommended option and why, mapped to my preferences above.
- Explicitly ask whether I agree or want a different direction before proceeding.

**Formatting rules for AskUserQuestion:**

- NUMBER issues (1, 2, 3...) and give LETTERS for options (A, B, C...).
- Each AskUserQuestion option must clearly label the issue NUMBER and option LETTER so I don't get confused.
- The recommended option is always the 1st option.

**Workflow:**

- Do not assume my priorities on timeline or scale.
- After each review section, pause and ask for feedback before moving on.

## Project Overview

St Katharine Rural Connect (SKRC) is a community-rooted initiative strengthening social, emotional, and practical support systems for rural people and places. The website serves as the primary digital presence for the organization.

## Organization Identity

- **Name**: St Katharine Rural Connect
- **Tagline concept**: Support, connection, and care for rural communities
- **Audience**: Farmers, offshore/rotational workers, rural families, community members
- **Tone**: Warm, compassionate, professional, welcoming, grounded, dignified
- **Heritage**: Carries forward the spirit and values of St Katharine — service, learning, dignity, community care

### Why the Name Matters
- "St Katharine" = foundation of service, care, values-based community work
- "Rural Connect" = mission of connecting people to services, neighbours, support, opportunities, and resources

## Mission & Vision

**Mission**: Support and strengthen rural communities by providing accessible, compassionate, and practical services that foster wellbeing, resilience, and connection.

**Vision**: Thriving rural communities where every person has access to support, relationships, and opportunities to flourish.

## Core Values
1. Compassion
2. Connection
3. Respect
4. Integrity
5. Accessibility
6. Collaboration
7. Resilience

## Four Service Pillars

### 1. Community Wellness and Mental Health
- Individual support and referrals
- Mental health and emotional wellness resources
- Peer support, workshops (stress, burnout, grief, resilience)
- Programs addressing rural isolation

### 2. Agricultural Support and Resources
- Farm wellbeing and sustainability sessions
- Financial, operational, and social support referrals
- Farm-focused mental wellness
- Access to grants, programs, assistance

### 3. Offshore Worker Engagement and Support
- Remote-access support and check-ins
- Peer connection for isolated workers
- Family support during separation
- Reintegration support

### 4. Community Connection and Development
- Local events and gatherings
- Volunteer engagement
- Workshops and skill-sharing
- Intergenerational programs
- Partnerships with local groups

## Who We Serve
- Farmers and agricultural workers
- Farm families and multigenerational rural households
- Offshore, rotational, and remote workers
- Spouses, children, and loved ones affected by work-related separation
- Rural residents seeking support, connection, or resources
- Community members wanting to engage through events, volunteering, partnerships

## Website Page Structure

1. **Home** - Mission-driven message, key CTAs
2. **About Us** - Founding Intention, Mission/Vision/Values, Why the Name Matters
3. **Services** - Four pillars (Wellness, Agricultural, Offshore, Community)
4. **Who We Serve** - Audience segments with access info
5. **Events Calendar** - Filterable by audience, type, format
6. **Get Involved** - Volunteer, Attend Events, Donate, Partner, Share
7. **Partnerships** - Approach, partner logos, "Become a Partner" CTA
8. **Board & Staff** - Board of Directors, Staff team bios
9. **Testimonials** - Farmer, Offshore Worker, Community Member, Family Member
10. **Contact** - Phone, Email, Office Hours, Location, Online Form

## CTAs (Calls to Action)
- Access Support
- View Our Services
- See Upcoming Events
- Get Involved
- Volunteer With Us
- Become a Partner
- Contact Our Team
- Donate Today

## Homepage Message
"St Katharine Rural Connect exists to strengthen rural communities through support, connection, and care. We serve farmers, offshore workers, families, and community members by creating accessible pathways to wellness, practical resources, and meaningful belonging. Rooted in the spirit of St Katharine, we are committed to helping rural people and places thrive."

## Sample Testimonials

**Farmer**: "Running a farm can be overwhelming, especially when everything feels like it depends on you. St Katharine Rural Connect gave us more than information — they gave us support we could actually use, and people who understood the pressures we were under. It made us feel less alone."

**Offshore Worker**: "When you work away for long periods, it can feel like you're disconnected from everything at home. Having access to support that understood our lifestyle made a real difference for me and my family. It reminded us that we still had a community behind us."

**Community Member**: "The events and programs have created a stronger sense of connection in our area. People are meeting, talking, and supporting one another in ways that weren't happening before. It feels like something positive and lasting is being built."

**Family Member**: "As the spouse of a rotational worker, I often felt like I was carrying things on my own. Through St Katharine Rural Connect, I found resources, encouragement, and people who truly understood the strain that comes with this kind of life."

## Governance

### Board of Directors
- Provides strategic leadership, governance, stewardship
- Listing format: Name, Role, Short bio, Rural/community connection

### Staff Team
- Executive Director, Program Manager, Community Outreach Coordinator
- Listing format: Name, Position, Short bio, Area of responsibility

## Access Points by Audience

**Farmers**: Phone/email, online forms, referrals from partners, farm-focused workshops
**Offshore Workers**: Remote/virtual contact, flexible scheduling, support before/during/after deployment
**Community Members**: Events, programs, direct contact, volunteer initiatives, partner organizations

## Events Calendar Features
- Filter by audience: farmers / offshore workers / families / all community
- Filter by type: workshop / social / volunteer / support
- Filter by format: in-person / virtual / hybrid

## Contact Information (Placeholders)
- Phone: [TBD]
- Email: [TBD]
- Office Hours: [TBD]
- Location: [TBD]
- Online Contact Form: [TBD]

## Partnership Approach
- Community organizations, agricultural networks, mental health providers
- Local service agencies, municipalities, faith communities
- Education/training partners, businesses committed to rural wellbeing
- Include partner logos, descriptions, "Become a Partner" CTA

## Completed Phases

### Phase 1: Foundation (01-01)
- Next.js 15 project scaffolded with Tailwind v4
- Custom fonts configured: Cormorant Garamond (heading) + DM Sans (body)
- shadcn/ui initialized with SKRC theme tokens
- Design tokens in globals.css: colors (primary, accent, stone, text), typography scale, ease-premium

### Phase 2: Layout & Design System (02-01, 02-02, 02-03)
- **Constants** (`src/lib/constants.ts`): NAV_ITEMS (10 pages), SITE_CONFIG (phone, email, charity), SOCIAL_LINKS
- **SkipLink** (`src/components/layout/SkipLink.tsx`): sr-only, visible on focus, links to #main-content
- **UtilityBar** (`src/components/layout/UtilityBar.tsx`): phone tel: link + "Need Support?" on primary-950 background
- **Header** (`src/components/layout/Header.tsx`): sticky nav, gold underline hover (scaleX, 400ms, ease-premium), mobile hamburger
- **Footer** (`src/components/layout/Footer.tsx`): 4-column grid (about, quick links, more links, contact), social icons, charity number
- **MobileNav** (`src/components/layout/MobileNav.tsx`): slide-out drawer, AnimatePresence, backdrop blur, staggered links, Escape/route close, body scroll lock, reduced-motion bypass
- **AnimatedSection** (`src/components/shared/AnimatedSection.tsx`): LazyMotion whileInView (fade-up 30px, 600ms, stagger 120ms), reduced-motion bypass
- **SectionWrapper** (`src/components/layout/SectionWrapper.tsx`): alternating backgrounds (stone-50, stone-100, stone-50, primary-900, stone-100), AnimatedSection wrapper
- **GoldAccentLine** (`src/components/shared/GoldAccentLine.tsx`): 2px gold line, horizontal/vertical, optional scaleX hover
- **DiamondDivider** (`src/components/shared/DiamondDivider.tsx`): gold gradient lines with centered diamond outline
- **CornerBrackets** (`src/components/shared/CornerBrackets.tsx`): L-shaped gold corner lines, configurable size/opacity
- **TwoColumnLayout** (`src/components/shared/TwoColumnLayout.tsx`): responsive 2-column grid, reversible order
- **Card** (`src/components/ui/card.tsx`): hoverable prop adds 4px lift + gold top-border scaleX animation
- **Button** (`src/components/ui/button.tsx`): gold and gold-outline variants with sweep-from-left hover
- **template.tsx** (`src/app/template.tsx`): page transition (fade-up 8px, 400ms, ease-premium)
- **layout.tsx** (`src/app/layout.tsx`): SkipLink -> UtilityBar -> Header -> main#main-content -> Footer

### Phase 3: Homepage (03-01, 03-02, 03-03, 03-04)
- **Hero** (`src/components/home/Hero.tsx`): full-width gradient bg (primary-950 to primary-800), subtle dot texture overlay, gold accent line, overline "ST KATHARINE RURAL CONNECT", h1 mission statement, subheading, dual CTAs (Get in Touch primary gold, See What's On secondary outline), crisis phone link (tel:), staggered entrance animation (gold line draws, then elements fade up 200ms apart), useReducedMotion bypass
- **SelfIdCards** (`src/components/home/SelfIdCards.tsx`): "I Am A..." overline + "Find Support For You" h2, 4-card responsive grid (1/2/4 cols), each card links to /who-we-serve#[segment], Lucide icons (Tractor, Ship, Home, HandHeart), hover: -translate-y-1 + gold top border via GoldAccentLine, "Learn more" with arrow shift, staggered whileInView reveal
- **ServicePillars** (`src/components/home/ServicePillars.tsx`): "OUR SERVICES" overline + "Four Pillars of Support" h2, 2x2 grid (1/2 cols), each card links to /services/[slug], icon in rounded bg-stone-100 circle, "Learn more" arrow, same hover pattern, staggered whileInView
- **ImpactStats** (`src/components/home/ImpactStats.tsx`): dark bg (primary-900), "OUR IMPACT" overline with thin gold line, 4-stat responsive grid (2/4 cols) with border-r dividers, AnimatedCounter sub-component using useMotionValue + useInView + animate for count-up effect (0 to target, 2s easeOut, once), role="figure" with aria-label, reduced motion shows final values immediately
- **FeaturedTestimonial** (`src/components/home/FeaturedTestimonial.tsx`): stone-100 bg, large decorative gold quote mark (8rem, opacity-30), blockquote with italic serif text (2xl/3xl), cite with em-dash attribution, thin gold line below, staggered fade-in (quote mark scales 0.8->1.0), accepts optional index prop
- **EventsPreview** (`src/components/home/EventsPreview.tsx`): stone-50 bg, "UPCOMING EVENTS" overline + "What's Coming Up" h2, sorts events by date ascending takes first 3, each card: date badge (primary-800 bg with day/month), format pill (in-person/virtual/hybrid with distinct colors), title, time+location with Clock/MapPin icons, hover lift, "View All Events" link with arrow, staggered whileInView
- **GetInvolved** (`src/components/home/GetInvolved.tsx`): stone-100 bg, "GET INVOLVED" overline + "Be Part of Something Meaningful" h2, 3-card grid (Volunteer/Partner/Donate), each with icon in circle, h3 title, description, CTA button; Donate has distinct gold bg-accent-500 style, others use secondary border style, hover lift + gold top border
- **Newsletter** (`src/components/home/Newsletter.tsx`): stone-50 bg, "Stay in the Loop" h2, email form (flex-col mobile / flex-row desktop with rounded-l/r), sr-only label, honeypot hidden field for spam, client-side validation (regex), success/error states with aria-live="polite", TODO placeholder for email service
- **PartnerLogos** (`src/components/home/PartnerLogos.tsx`): stone-100 bg, thin gold separator (1px, opacity-20), "Supported By" heading, flex-wrap row of partner names (text only for MVP), opacity-50 hover:opacity-100 transition, imports from @/data/partners
- **page.tsx** (`src/app/page.tsx`): Server Component, assembles all 9 sections in order with metadata export, uses fragment (not <main> since layout provides it), section background rhythm: gradient > stone-100 > stone-50 > primary-900 > stone-100 > stone-50 > stone-100 > stone-50 > stone-100

### Phase 4: Services & Audience (04-01, 04-02, 04-03)
- **PillarCard** (`src/components/services/PillarCard.tsx`): Service pillar card with gold accent line hover (scaleX), icon mapping (Heart/Wheat/Anchor/Users), 4px lift, links to /services/[slug]
- **WhatHappensWhenYouCall** (`src/components/services/WhatHappensWhenYouCall.tsx`): 4-step reassurance section, numbered circles with connecting lines (horizontal desktop/vertical mobile), "Get in Touch" CTA
- **Services overview** (`src/app/services/page.tsx`): Hero + 2x2 pillar grid + WhatHappensWhenYouCall + dark CTA section
- **PillarDetail** (`src/components/services/PillarDetail.tsx`): Full pillar detail layout -- hero (orgName overline), two-column who/what, services list with gold left borders, dark testimonial section, get-started CTA, WhatHappensWhenYouCall, back link
- **Service pillar pages** (`src/app/services/[slug]/page.tsx`): Dynamic route with generateStaticParams (4 slugs), generateMetadata, notFound() for invalid slugs, params awaited (Next.js 15)
- **AudienceCard** (`src/components/services/AudienceCard.tsx`): Full-width audience section with two-column layout (reversible), service pillar links, access points with CheckCircle icons, testimonial with gold left border
- **Who We Serve** (`src/app/who-we-serve/page.tsx`): Hero + 4 audience segments (alternating backgrounds/direction) + dark "Not sure where you fit?" CTA with dual actions

### Phase 5: Events Calendar (05-01, 05-02)
- **Event types** (`src/types/event.ts`): Event interface, EventAudience/EventType/EventFormat union types, AUDIENCE_LABELS/TYPE_LABELS/FORMAT_LABELS display maps
- **Event data** (`src/data/events.ts`): 10 sample events covering all audiences, types, and formats; sorted by date ascending (April-June 2026); 3 featured
- **EventCard** (`src/components/events/EventCard.tsx`): Client component, semantic `<article>` wrapping `<Link>`, date badge with `<time>` element, type/format/audience tag pills, premium hover (gold top-border scaleX, shadow-lg, motion-safe:-translate-y-1), responsive flex-col/flex-row
- **EventFilters** (`src/components/events/EventFilters.tsx`): Client component, 3 filter groups (audience, type, format) with toggle buttons, `aria-pressed` state, gold focus rings, "Clear all filters" with active count badge, generic FilterGroup helper for DRY
- **EventGrid** (`src/components/events/EventGrid.tsx`): Responsive 2-column grid of EventCards, empty state with CalendarX icon and "No events match your filters" message with clear action
- **Events page** (`src/app/events/page.tsx`): Client component with useState for 3 filter dimensions, useMemo filtering (OR within dimension, AND across), results count display, page header with overline
- **Event detail page** (`src/app/events/[slug]/page.tsx`): Server component, generateStaticParams for all 10 slugs, generateMetadata with async params (Next.js 15), metadata grid with icons (Calendar, Clock, MapPin, format), audience badges, description, "Register Your Interest" CTA linking to /contact, back navigation top and bottom, notFound() for unknown slugs

### Phase 6: Community Pages (06-01, 06-02, 06-03, 06-04)
- **Types** (`src/types/index.ts`): TeamMember (with board/staff group discriminator), Testimonial (reuses AudienceSegment), Partner, InvolvementOption interfaces
- **Team data** (`src/data/team-members.ts`): boardMembers (4: Campbell/Chair, Fraser/Vice Chair, MacLeod/Treasurer, Ross/Director) and staffMembers (3: Morrison/Executive Director, Henderson/Programme Manager, MacDonald/Community Outreach Coordinator)
- **Testimonials data** (`src/data/testimonials.ts`): 4 testimonials covering farmer (James), offshore-worker (Craig), community (Helen), family (Laura) segments
- **Partners data** (`src/data/partners.ts`): 6 placeholder partners (RSABI, FCN, NHS Grampian, Aberdeenshire Council, SAMH, Rural Support NI) + partnershipApproach (3 categories)
- **About page** (`src/app/about/page.tsx`): Founding Intention (two-column), Mission/Vision (gold left-border blocks), 7 Values (card grid with hover), "Why the Name Matters" (dark primary-900 bg, two-column gold-accented explanation)
- **TeamMemberCard** (`src/components/team/TeamMemberCard.tsx`): Server component, `<article>` semantics, initials avatar placeholder, gold top-border hover (scaleX), role in accent-600, connection/responsibility footer with conditional label
- **TeamGrid** (`src/components/team/TeamGrid.tsx`): Server component, responsive grid with configurable columns (2/3/4), maps TeamMemberCard
- **Team page** (`src/app/team/page.tsx`): Board of Directors (4-column grid) + Staff (3-column grid), overline + intro paragraph, createMetadata
- **Testimonials page** (`src/app/testimonials/page.tsx`): Segment-colored styles (green/farmer, blue/offshore, purple/community, gold/family), `<blockquote>` with decorative gold quote mark (aria-hidden), `<cite>` in `<footer>`, segment badges, dark CTA section
- **Get Involved page** (`src/app/get-involved/page.tsx`): 5 involvement options (Volunteer, Attend Events, Donate, Partner, Share) with Lucide icons (Heart, Calendar, Gift, Handshake, Share2), two-column card layout, CTAs routing to /contact, /events, /partnerships, /about, dark "Not Sure Where to Start?" banner
- **Partnerships page** (`src/app/partnerships/page.tsx`): Partnership approach narrative + gold diamond-bullet list, partner grid with initial placeholders and grayscale treatment, external links with target="_blank" rel="noopener noreferrer", "Become a Partner" CTA on dark bg with tel: link

### Phase 7: Contact (07-01, 07-02)
- **Zod schema** (`src/lib/schemas/contact.ts`): contactSchema with name (required), email (required), phone (optional), audience (5-option enum, optional), message (required), honeypot (max 0); empathetic error messages ("We'd like to know what to call you"); exports ContactFormData, ContactFormState, AUDIENCE_OPTIONS
- **Server action** (`src/app/contact/_actions/submit-contact.ts`): "use server" directive, honeypot check first (returns fake success to bots), zod server-side validation, field-level error mapping, console logging for MVP (email service deferred)
- **ContactInfo** (`src/components/contact/ContactInfo.tsx`): Server component, phone (tel: link), email (mailto: link), office hours, location with gold-tinted icon circles, "Your information is confidential" reassurance card with ShieldCheck icon
- **ContactForm** (`src/components/contact/ContactForm.tsx`): "use client", react-hook-form + zodResolver for client validation, useActionState for server action, honeypot field (absolute left-[-9999px], aria-hidden, tabIndex -1), error summary (role="alert", aria-live="polite"), success state with "Send another message" option, "Send Message" button (not "Submit"), "Sending..." pending state, autoComplete attributes on all inputs
- **Contact page** (`src/app/contact/page.tsx`): "Get in Touch" heading with overline, gold accent line divider (2px), two-column layout (form left, contact info right on desktop), stacks on mobile, createMetadata

### Phase 8: Cross-Cutting Quality (08-01, 08-02, 08-03)
- **Accessibility (A11Y-01 through A11Y-10)**:
  - `<html lang="en-GB">` verified on root layout
  - Unique descriptive titles on all 12 pages following "Page | St Katharine Rural Connect" pattern
  - Semantic landmarks: `<header>` with `<nav aria-label="Main navigation">`, `<main id="main-content">` (single instance via layout), `<footer>`
  - Strict heading hierarchy audited and fixed (sr-only h2 added to services page, duplicate `<main>` removed from about/events pages)
  - `aria-hidden="true"` added to all decorative Lucide icons (ContactInfo, ContactForm, event detail back arrows)
  - Global `*:focus-visible` gold ring rule (outline: 2px solid accent-500, offset 2px)
  - Touch target minimum 44x44px for coarse pointers via `@media (pointer: coarse)` in globals.css
  - `prefers-reduced-motion: reduce` media query zeroes all animation/transition durations; Motion components use useReducedMotion hook
  - All phone numbers are tel: links via SITE_CONFIG.phoneHref (UtilityBar, Footer, Hero, MobileNav, ContactInfo, Partnerships)
  - No viewport restrictions (no maximum-scale or user-scalable=no)
- **SEO (SEO-01 through SEO-05)**:
  - **sitemap.ts** (`src/app/sitemap.ts`): Auto-generated sitemap with 10 static pages + 4 service pillar pages + 10 event pages, dynamic imports from data files, base URL https://skrc.org.uk
  - **robots.ts** (`src/app/robots.ts`): Allows all user agents, references sitemap.xml
  - **JsonLd** (`src/components/shared/JsonLd.tsx`): Generic JSON-LD script injector, ngoSchema() for NGO structured data (on every page via layout), communityEventSchema() for event detail pages with attendance mode mapping
  - NGO JSON-LD added to root layout.tsx (renders on every page)
  - CommunityEvent JSON-LD added to event detail pages with ISO datetime and format-to-attendance-mode mapping
  - Charity registration number displayed in footer via SITE_CONFIG.charityNumber
- **Performance (PERF-01 through PERF-04)**:
  - **LazyMotionProvider** (`src/components/shared/LazyMotionProvider.tsx`): "use client", wraps LazyMotion with domAnimation feature set (~45KB savings vs full Motion bundle)
  - LazyMotionProvider added to root layout.tsx wrapping all content
  - 10 redundant LazyMotion wrappers removed from individual components (Hero, MobileNav, PartnerLogos, SelfIdCards, ServicePillars, GetInvolved, Newsletter, EventsPreview, ImpactStats, FeaturedTestimonial)
  - All Motion components migrated from `motion.*` to `m.*` for optimal tree-shaking
  - template.tsx and AnimatedSection.tsx updated to use `m` imports and removed local LazyMotion wrappers
  - No raw `<img>` tags in codebase (all icon/text-based, next/image ready for future images)
  - All pages under 500KB transferred (gzipped); largest HTML page is who-we-serve at 95KB raw
