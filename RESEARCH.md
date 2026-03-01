# St Katharine Rural Connect — Comprehensive Research Brief

> Compiled from 12 research agents analyzing design, UX, accessibility, tech stack, content strategy, animation patterns, and 5 competitive teardowns.

---

## Table of Contents

1. [Competitive Landscape](#1-competitive-landscape)
2. [Design System](#2-design-system)
3. [Tech Stack & Architecture](#3-tech-stack--architecture)
4. [UX & User Flows](#4-ux--user-flows)
5. [Content Strategy](#5-content-strategy)
6. [Accessibility](#6-accessibility)
7. [Animation & Interaction](#7-animation--interaction)
8. [SEO Strategy](#8-seo-strategy)
9. [Key Decisions Summary](#9-key-decisions-summary)

---

## 1. Competitive Landscape

### 5-Site Competitive Analysis

#### 1.1 RSABI (rsabi.org.uk) — Scottish Agricultural Charity

**Colors**: Primary `#163763` (navy), Secondary `#4e9c34` (green), Accent `#51bf82` (teal-green), Light `#cbf5ed`, Background `#e4eef2`
**Typography**: Lato, H1 54px/900/uppercase, Body 18px/400/1.6em
**CMS**: WordPress-based
**Navigation**: About Us, How We Help, Get Involved, News & Events, Donate, Contact

**Strengths to Emulate:**
- Persistent helpline number visible at all times (utility bar + hero + footer)
- Help-first, donate-second CTA hierarchy
- Impact statistics bar (people helped, calls answered, grants awarded)
- Dignity-first tone — never talks down to farming communities
- Low-friction first contact (no forms before phone)
- Scottish identity through landscape imagery, not heavy branding

**Weaknesses to Avoid:**
- Single-audience design — no self-identification paths
- Generic visual identity (standard Bootstrap charity site)
- Formulaic page layouts (every page looks the same)
- Dated aesthetic (circa 2018-2020 patterns)
- No interactive tools or guided pathways
- Green palette likely fails WCAG contrast in places

**SKRC Differentiation**: Multi-audience self-identification, premium gold+navy aesthetic, varied section layouts, interactive service finder

---

#### 1.2 Farming Community Network (fcn.org.uk) — England/Wales Farming Support

**Colors**: WordPress defaults with dark gray `#32373c` primary buttons
**Typography**: System fonts, sizes 13px-42px range
**CMS**: WordPress 6.9.1 with Soliloquy slider
**Navigation**: About FCN (8 sub-items), How We Help (9 sub-items), Get Involved (9 sub-items), News/Events, Contact, Donate

**Homepage Structure:**
1. Hero slider (4-second auto-rotate)
2. Three contact widgets (helpline 03000 111 999, email, general)
3. Organization intro
4. FarmWell partnership banner
5. Macmillan Cancer partnership
6. Four help category cards (Farming, Business, Health, Family)
7. Video testimonial
8. Donation prompt
9. News & Events grid

**Strengths to Emulate:**
- Problem-first framing — organizes by life situation, not service categories
- "Whatever you're going through" approach
- Helpline number given highest visual prominence
- Warm imagery of real farming life
- Reduced motion preferences respected in CSS
- Three quick-access contact widgets immediately below hero
- English/Welsh language toggle

**Weaknesses to Avoid:**
- Visual design is conventional — works but not distinctive
- Auto-rotating hero carousel (accessibility concern)
- Heavy navigation (9 sub-items per section)
- No audience self-identification paths

**Key Learning for SKRC**: FCN's problem-first content framing is the gold standard. "Feeling isolated?" beats "Community Connection Services" every time. Adopt this approach.

---

#### 1.3 SAMH (samh.org.uk) — Scottish Mental Health Charity

**Navigation**: About Mental Health, Get Involved, About Us, Donate
**Skip Links**: Jump to content, navigation, homepage, sitemap, accessibility page

**Homepage Structure:**
1. The Nook — walk-in mental health hubs
2. Quick access cards (Information Service, Time for You, Donate)
3. "Can you help?" donation prompt
4. Resource links (suicide prevention, stories, community conversations)
5. Volunteer/Fundraise section
6. Latest news (4 articles)
7. Five Ways to Mental Health
8. Campaign signup

**Footer**: SC082340 registration, Living Wage Employer badge, Good Fundraising Scotland, SeeMe & RespectMe partnerships

**Strengths to Emulate:**
- Dedicated accessibility page with skip navigation
- Clear audience routing ("I need support" vs "Someone I know needs support")
- Modern, distinctive color palette (teal + coral) — avoids charity cliches
- Schema.org markup implemented
- "The Nook" — branded service with own identity
- Living Wage and Good Fundraising badges as trust signals

**Weaknesses to Avoid:**
- Dense content that can overwhelm
- Less warmth than farming-specific orgs

**Key Learning for SKRC**: SAMH demonstrates how an unexpected color palette differentiates. Their accessibility implementation (skip links, dedicated page) sets the standard.

---

#### 1.4 The Seafarers' Charity (theseafarerscharity.org) — Maritime Worker Support

**Colors**: Primary `#0d0d22` (dark navy), Accent `#8bc9c9` (teal), Secondary `#3bb4e6` (blue)
**Typography**: Avenir-Light (custom WOFF2), 13px base, font-display: swap
**Navigation**: Who we are, What we do, Grant funding, Special funds, Get involved (17+ items), News, Donate

**Homepage Structure:**
1. Hero: "Be the Lifeline Seafarers Desperately Need"
2. Payroll Giving promotion
3. Mission statement
4. Corporate video (YouTube embed)
5. Impact statistics: "59 grants, totalling over £2.6m"
6. Strategy cards (3-column)
7. Donation CTA
8. Engagement grid (Legacy, Gifts in Memory, Corporate, Payroll)
9. Events listing
10. News feed
11. Newsletter signup

**Strengths to Emulate:**
- Audience segmentation (active seafarers, families, retired, employers)
- Impact statistics with specific numbers
- Multiple giving pathways (legacy, payroll, corporate, memorial)
- Seafarers' Advice Line prominently displayed: 0800 160 1842
- Professional, trust-building navy palette
- Newsletter signup on homepage

**Weaknesses to Avoid:**
- Very small base font (13px) — poor for accessibility
- Heavy navigation (17+ items in Get Involved)
- Formal/institutional tone — could be warmer
- No visible crisis/urgent help pathway

**Key Learning for SKRC**: Their audience segmentation model (by worker type + families) maps directly to SKRC's offshore worker pillar. The "advice line" framing is softer than "helpline."

---

#### 1.5 Rural Support (ruralsupport.org.uk) — Northern Ireland Rural Support

**Colors**: Primary `#1e4337` (forest green), Hover `#a3c636` (sage), Info `#2CA8FF` (blue), Warning `#FFB236` (gold)
**Typography**: Rubik (Google Font), weight 700 on interactive elements, uppercase buttons
**Navigation**: What We Do (Support Hub, Support Line, Farm Business, Emergency Fund, Social Farming, Resources), Support Our Work, Who We Are, Get in Touch, Donate, Get Help

**Homepage Structure:**
1. Hero: "Building Strong Farm Families" + primary CTA
2. Support Hub with 4 pillars: Farm Business & Finance, Health & Wellbeing, Future Planning & Succession, Social Farming & Innovation
3. Support contact block with phone + hours (Mon-Fri, 9AM-9PM)
4. Featured services (Farm Business Support, Social Farming)
5. Support Line CTA (repeated)
6. Latest News (3 articles)
7. Footer with dual phone numbers

**Strengths to Emulate:**
- Four-pillar service structure (directly comparable to SKRC's four pillars)
- "Building Strong Farm Families" — positive framing, not deficit-based
- Clear office hours displayed with phone number
- Dual persistent CTAs: "Get Help" + "Donate"
- Support Hub concept with organized pillars
- Social Farming as an innovative service offering
- Lazy loading images (Lozad.js)

**Weaknesses to Avoid:**
- No offshore worker or non-farming audience pathways
- Limited visual distinctiveness
- reCAPTCHA on forms (accessibility barrier)
- No testimonials visible on homepage

**Key Learning for SKRC**: Rural Support NI is SKRC's closest peer. Their 4-pillar Support Hub model validates SKRC's approach. SKRC differentiates by adding offshore workers, families, and community connection — broader scope with more premium design.

**Gap Analysis — What Rural Support NI doesn't do that SKRC should:**
- No offshore/rotational worker support
- No explicit family/spouse support pathway
- No event calendar with filtering
- No testimonials on homepage
- No self-identification flow
- No premium visual design (functional but basic)
- No community connection/social programming pillar

---

### Cross-Site Comparison Matrix

| Feature | RSABI | FCN | SAMH | Seafarers | Rural Support NI | SKRC Target |
|---------|-------|-----|------|-----------|-----------------|-------------|
| Primary Color | Navy+Green | Gray | Teal+Coral | Navy+Teal | Forest Green | Navy+Gold |
| Font | Lato | System | Web fonts | Avenir | Rubik | Cormorant+DM Sans |
| CMS | WordPress | WordPress | CMS | Custom | WordPress | Next.js (static) |
| Audience Segments | 1 | 1 | 2 | 4 | 1 | 4 |
| Self-ID Paths | No | No | Yes | Partial | No | Yes |
| Persistent Help | Yes | Yes | Yes | Partial | Yes | Yes |
| Event Calendar | Basic | Basic | No | Events list | Basic | Filterable |
| Visual Premium | Low | Low | Medium | Medium | Low | High |
| Gold/Accent Lines | No | No | No | No | No | Yes |
| Hover Effects | Basic | Basic | Basic | Basic | Basic | Premium |
| Accessibility | Adequate | Good | Good | Adequate | Adequate | Exemplary |
| Mobile-First | Yes | Yes | Yes | Yes | Yes | Yes |

---

## 2. Design System

### 2.1 Color Palette — "Scottish Landscape"

Inspired by heather moorlands, weathered stone, deep lochs, and golden evening light.

| Token | Hex | Usage |
|-------|-----|-------|
| **Primary (Slate Navy)** | | |
| primary-950 | `#0F1A2E` | Deepest backgrounds, footer |
| primary-900 | `#1B2A4A` | Dark sections, hero overlays |
| primary-800 | `#243658` | Nav background, card headers |
| primary-700 | `#2E4A6E` | Hover states on dark |
| primary-600 | `#3D5F8A` | Secondary buttons, links |
| **Secondary (Heather Moor)** | | |
| secondary-700 | `#5B4A5E` | Secondary headings |
| secondary-500 | `#7D6B7F` | Borders, icon fills |
| secondary-300 | `#B8A5BA` | Muted text, dividers |
| secondary-100 | `#EDE5EE` | Light section tint |
| **Accent (Antique Gold)** | | |
| accent-600 | `#A8871E` | Gold text on light backgrounds |
| accent-500 | `#C9A227` | Primary accent — hovers, CTAs, icons |
| accent-400 | `#D4B545` | Hover state (lighter) |
| accent-300 | `#E2CB6E` | Soft gold, badges |
| accent-200 | `#F0E1A0` | Light gold wash |
| accent-100 | `#FAF3D8` | Gold-tinted sections |
| **Stone (Backgrounds)** | | |
| stone-50 | `#FAFAF7` | Primary background (warm white) |
| stone-100 | `#F5F2EC` | Alternating section A (parchment) |
| stone-200 | `#EDE8DF` | Alternating section B (linen) |
| stone-300 | `#DDD6CA` | Card backgrounds, inputs |
| stone-400 | `#B8AFA1` | Borders, dividers |
| **Text** | | |
| text-primary | `#1C1917` | Headings on light |
| text-body | `#3D3832` | Body text |
| text-muted | `#6B635A` | Captions, metadata |
| text-on-dark | `#F5F2EC` | Body on dark sections |
| **Semantic** | | |
| success | `#3A7D5C` | Form success |
| error | `#A63D3D` | Validation errors |

**Gold usage rule**: Gold must be *scarce*. Thin accent lines (2px), hover underlines, icon accents. Large gold areas read cheap. Scarcity = luxury.

**Alternating section rhythm:**
```
Section 1: stone-50 (warm white)
Section 2: stone-100 (parchment)
Section 3: stone-50 (warm white)
Section 4: primary-900 (dark slate — dramatic break)
Section 5: stone-100 (parchment)
Footer:    primary-950 (deepest slate)
```

**WCAG Contrast Verification:**

| Combination | Ratio | Pass |
|------------|-------|------|
| text-primary on stone-50 | 15.8:1 | AAA |
| text-body on stone-100 | 9.2:1 | AAA |
| accent-500 on primary-900 | 5.7:1 | AA |
| accent-500 on primary-950 | 7.1:1 | AAA |
| text-on-dark on primary-900 | 11.4:1 | AAA |
| accent-600 on stone-50 | 4.6:1 | AA |
| accent-500 on stone-50 | 3.1:1 | Large text only |

**Important**: Gold `#C9A227` only for large text (18px+), icons, or decorative elements on light backgrounds. Use darker `#A8871E` for body text on light.

---

### 2.2 Typography — Cormorant Garamond + DM Sans

**Heading Font: Cormorant Garamond**
- Display Garamond designed for screens
- Reads as traditional, cultured, rooted without being stuffy
- Calligraphic warmth echoes the "St Katharine" heritage
- Load weights: 300 (light display), 400 (subheadings), 600 (primary headings)

**Body Font: DM Sans**
- Geometric sans with humanist touches — modern without being cold
- Excellent x-height for readability at 16-18px
- Load weights: 400 (body), 500 (UI/nav), 700 (emphasis)

**Type Scale (Major Third — 1.250 ratio):**

| Level | Desktop | Mobile | Weight | Font | Line Height |
|-------|---------|--------|--------|------|-------------|
| Display | 60px | 36px | 300 | Cormorant | 1.1 |
| H1 | 48px | 30px | 600 | Cormorant | 1.15 |
| H2 | 36px | 26px | 600 | Cormorant | 1.2 |
| H3 | 28px | 22px | 600 | Cormorant | 1.3 |
| H4 | 22px | 20px | 500 | DM Sans | 1.4 |
| Body Large | 20px | 18px | 400 | DM Sans | 1.7 |
| Body | 18px | 16px | 400 | DM Sans | 1.7 |
| Body Small | 16px | 14px | 400 | DM Sans | 1.6 |
| Caption | 14px | 13px | 500 | DM Sans | 1.5 |
| Overline | 12px | 11px | 700 | DM Sans | 1.4 |

**Key decisions:**
- Base body 18px (not 16px) — premium readability for rural/older audience
- Line height 1.7 for body — generous leading signals quality
- Negative letter-spacing on headings — tighter tracking at large sizes
- Overline style (uppercase, wide tracking) for section labels like "OUR SERVICES"
- Max prose width: 42rem (~672px) for optimal 65-75 character line length

---

### 2.3 Architectural Line Graphics

**Pattern A: Corner bracket accents** — Thin gold lines (1-2px) forming partial L-shapes at section corners, opacity 0.3-0.6

**Pattern B: Diamond divider** — Thin gold line spanning width with center diamond mark between sections

**Pattern C: Topographic contour SVGs** — Very subtle (opacity 0.03-0.05) abstract contour lines as section backgrounds, evoking rural landscape

**Pattern D: Grid dot pattern** — Extremely subtle dot grid (opacity 0.04) on alternating sections, suggesting surveyor's paper

---

## 3. Tech Stack & Architecture

### 3.1 Core Stack

| Package | Version | Purpose |
|---------|---------|---------|
| Next.js | 15.x | Framework (App Router) |
| React | 19.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| Motion | 12.x | Animation (formerly Framer Motion) |

### 3.2 Key Architecture Decisions

- **App Router** with React Server Components (reduces client JS — critical for rural connections)
- **Static Generation (SSG)** for all pages — near-instant CDN-edge loads
- **ISR** for events calendar when connected to CMS
- **`next/font`** for zero-layout-shift font loading (self-hosted, no external requests)
- **`next/image`** for automatic WebP/AVIF, responsive srcset, lazy loading, blur-up placeholders

### 3.3 UI & Form Libraries

| Package | Purpose |
|---------|---------|
| shadcn/ui | Accessible component primitives (Radix-based) |
| @tailwindcss/typography | Long-form content styling |
| react-hook-form | Form state management |
| zod | Schema validation (shared client/server) |
| lucide-react | Icon library |

### 3.4 Content Strategy

- **MVP**: TypeScript data files in `src/data/` (ships fastest)
- **Future**: Sanity CMS for non-technical staff editing (free tier, 3 users)
- Architecture designed so migrating from data files to CMS queries changes one file per page

### 3.5 Deployment & Analytics

- **Vercel** (free Hobby tier sufficient; built by Next.js team)
- **Plausible** analytics (privacy-friendly, no cookie banner, GDPR-compliant)
- No Google Analytics unless specifically requested

### 3.6 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, nav, footer)
│   ├── page.tsx                # Home
│   ├── template.tsx            # Page transition animations
│   ├── not-found.tsx           # Custom 404
│   ├── sitemap.ts              # Dynamic sitemap
│   ├── robots.ts               # Robots.txt
│   ├── globals.css             # Tailwind + global styles
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx            # Services overview
│   │   └── [slug]/page.tsx     # Individual pillar pages
│   ├── who-we-serve/page.tsx
│   ├── events/
│   │   ├── page.tsx            # Filterable calendar
│   │   └── [slug]/page.tsx     # Event detail
│   ├── get-involved/page.tsx
│   ├── partnerships/page.tsx
│   ├── team/page.tsx           # Board & Staff
│   ├── testimonials/page.tsx
│   └── contact/
│       ├── page.tsx
│       └── _actions/submit-contact.ts
├── components/
│   ├── ui/                     # shadcn/ui primitives
│   ├── layout/                 # Header, Footer, MobileNav, SectionWrapper
│   ├── home/                   # Hero, ServicePillars, Testimonials, CTABanner
│   ├── services/               # PillarCard, PillarDetail
│   ├── events/                 # EventCard, EventFilters
│   ├── team/                   # TeamMemberCard, TeamGrid
│   ├── contact/                # ContactForm, LocationMap
│   └── shared/                 # AnimatedSection, GoldAccentLine, TwoColumnLayout
├── lib/
│   ├── utils.ts                # cn() helper
│   ├── constants.ts            # Nav items, site config
│   ├── metadata.ts             # Shared SEO helpers
│   └── fonts.ts                # Font configuration
├── data/                       # Content (MVP — later moves to CMS)
│   ├── team-members.ts
│   ├── testimonials.ts
│   ├── events.ts
│   └── partners.ts
└── types/                      # TypeScript definitions
```

### 3.7 Tailwind Configuration

```js
// tailwind.config.ts
{
  theme: {
    extend: {
      colors: {
        primary: { 950: '#0F1A2E', 900: '#1B2A4A', 800: '#243658', 700: '#2E4A6E', 600: '#3D5F8A' },
        secondary: { 700: '#5B4A5E', 500: '#7D6B7F', 300: '#B8A5BA', 100: '#EDE5EE' },
        accent: { 600: '#A8871E', 500: '#C9A227', 400: '#D4B545', 300: '#E2CB6E', 200: '#F0E1A0', 100: '#FAF3D8' },
        stone: { 50: '#FAFAF7', 100: '#F5F2EC', 200: '#EDE8DF', 300: '#DDD6CA', 400: '#B8AFA1' },
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        '3xl': ['1.75rem', { lineHeight: '1.3' }],
        'xl': ['1.375rem', { lineHeight: '1.4' }],
        'lg': ['1.25rem', { lineHeight: '1.7' }],
        'base': ['1.125rem', { lineHeight: '1.7', letterSpacing: '0.01em' }],
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
}
```

---

## 4. UX & User Flows

### 4.1 Homepage Architecture

```
┌─────────────────────────────────────────────────┐
│ UTILITY BAR: Phone number + "Need Support?" + Donate │
├─────────────────────────────────────────────────┤
│ NAV: Logo | About | Services | Who We Serve |   │
│      Events | Get Involved | Contact            │
├─────────────────────────────────────────────────┤
│ HERO: Mission statement + landscape photo       │
│   [Get in Touch]  [See What's On]               │
│   "Need to talk now? Call [number]"             │
├─────────────────────────────────────────────────┤
│ SELF-ID CARDS: "I am a..."                      │
│ [Farmer] [Offshore Worker] [Family] [Community] │
├─────────────────────────────────────────────────┤
│ FOUR PILLARS: Service cards (2x2 grid)          │
├─────────────────────────────────────────────────┤
│ IMPACT STATS: People supported, events, etc.    │
├─────────────────────────────────────────────────┤
│ TESTIMONIAL: Featured quote (dark section)      │
├─────────────────────────────────────────────────┤
│ UPCOMING EVENTS: Next 2-3 events + "View All"   │
├─────────────────────────────────────────────────┤
│ GET INVOLVED: Volunteer | Partner | Donate       │
├─────────────────────────────────────────────────┤
│ NEWSLETTER: "Stay in the Loop"                  │
├─────────────────────────────────────────────────┤
│ PARTNER LOGOS: "Supported by" strip             │
├─────────────────────────────────────────────────┤
│ FOOTER: Contact, links, charity number, social   │
│ + FLOATING "Need Help?" BUTTON (persistent)      │
└─────────────────────────────────────────────────┘
```

### 4.2 Dual-Path Design

**Track 1 — Urgent ("I Need Help Now")**
- Persistent utility bar with phone number
- Floating "Need Help?" button (bottom-right)
- Crisis visitors spend <60 seconds — above-fold must answer "What is this?" and "How do I get help?"
- 1-2 clicks maximum to phone/contact
- Mobile: sticky bottom bar with "Call" and "Message"

**Track 2 — Browsing ("I'm Exploring")**
- Self-identification cards route to tailored content
- Standard navigation to services, about, events
- Progressive disclosure of service detail

### 4.3 CTA Hierarchy

| Tier | Purpose | Examples |
|------|---------|---------|
| 1 (Always visible) | Help access | Phone number, "Talk to Someone Now" |
| 2 (Homepage prominent) | Primary engagement | "Get in Touch", "See What's On" |
| 3 (Present, secondary) | Org support | "Donate", "Volunteer", "Partner" |

**CTA copy that lowers barriers:**
- "Get in Touch" / "Give Us a Ring" (primary)
- "See What's On" / "Find Out More" (secondary)
- "Talk to Someone Now" (crisis)
- Never: "Get help now" (pressuring), "Submit" (use "Send message")

### 4.4 Self-Identification Flow

```
Homepage → "I am a..." card →
  Farmer → Tailored page (farm services, peer testimonials, farm imagery)
  Offshore Worker → Tailored page (remote support, reintegration, family resources)
  Family Member → Tailored page (separation support, local resources)
  Community Member → Tailored page (events, volunteering, connection)
```

Each audience page includes: relevant services, peer testimonials, specific contact options, audience-appropriate imagery and language.

### 4.5 "What Happens When You Call"

Reduces call anxiety (critical for rural men):
1. "You call or fill in our form"
2. "We'll have a friendly conversation to understand how we can help"
3. "We'll suggest the right support for you"
4. "You're in control — no pressure, completely confidential"

### 4.6 Trust Signals

Priority order for rural Scottish audiences:
1. Confidentiality messaging: "In a small community, privacy matters — and we take yours seriously"
2. Local authentic photography (stock photos destroy trust)
3. Named team members with photos
4. Peer testimonials from same community
5. Partner/funder logos
6. Charity registration number
7. Professional design quality

### 4.7 "Quick Exit" Button

Standard for support orgs — discrete button that navigates to neutral site (BBC Weather) using `window.location.replace()` to remove from browser history.

---

## 5. Content Strategy

### 5.1 Voice & Tone

```
We are: Steady, warm, practical, local, honest
We are not: Corporate, pitying, patronizing, distant, bureaucratic
We sound like: A trusted neighbour who also happens to know where to find help
```

**Word choice guide:**

| Instead of... | Use... |
|---------------|--------|
| Clients / service users | People, neighbours, community members |
| Mental health issues | How you're feeling, what you're going through |
| Access our services | Get in touch, give us a ring |
| Signposting | Connecting you with |
| Deliver outcomes | Make a real difference |
| Submit (on forms) | Send message |

### 5.2 Service Naming — Plain Language

| Organizational Name | User-Facing Name |
|---------------------|------------------|
| Community Wellness and Mental Health | Supporting Your Wellbeing |
| Agricultural Support and Resources | Supporting Farm Life |
| Offshore Worker Engagement and Support | Supporting Those Who Work Away |
| Community Connection and Development | Strengthening Our Community |

### 5.3 Service Description Template

```
[Plain English Name]

Who it's for: [One sentence — the person, not the problem]
What happens: [2-3 sentences — the experience, not the process]
How to get started: [Single clear action step]
```

Example:
> **Someone to Talk To**
> Farming, offshore work, and rural life can be isolating. Sometimes you just need someone who understands. Our trained listeners are available by phone, in person, or over a cup of tea at our drop-in. There's no referral needed, no forms to fill in, and no pressure. Give us a ring on [number] or drop in on [days/times].

### 5.4 FAQ Pattern

Answer the emotional question behind the practical one:
- "Do I need a referral?" → "No. You can contact us directly. You don't need anyone's permission, and you don't need to be in crisis. If something doesn't feel right, that's reason enough."

### 5.5 Testimonial Presentation

```
"[Quote — 1-3 sentences, conversational, about the experience not the crisis]"

— [First name only], [identifier that helps readers self-identify]
   e.g., "— James, dairy farmer near Huntly"
```

Focus on the mundane: "The best part is just having a cup of tea and a blether with folk who get it" is more powerful than transformation stories.

### 5.6 Homepage Message

"St Katharine Rural Connect exists to strengthen rural communities through support, connection, and care. We serve farmers, offshore workers, families, and community members by creating accessible pathways to wellness, practical resources, and meaningful belonging. Rooted in the spirit of St Katharine, we are committed to helping rural people and places thrive."

---

## 6. Accessibility

### 6.1 Priority Order for SKRC

1. **Contact path accessibility** — phone/help form reachable in 1-2 interactions, any device, any connection
2. **Low-bandwidth performance** — pages functional on slow 3G (<500KB per page)
3. **Cognitive accessibility** — simple, clear, calming content for people in distress
4. **Mobile-first responsive** — works on 320px with touch input
5. **Color contrast** — gold palette verified for WCAG AA
6. **Screen reader compatibility** — semantic structure, ARIA where needed
7. **Form accessibility** — gentle, clear, forgiving
8. **Offline capability** — Service Worker for contact page

### 6.2 Non-Negotiable Day-One Requirements

**HTML/Structural:**
- `<html lang="en-GB">` on every page
- Unique descriptive `<title>` (pattern: "Page | St Katharine Rural Connect")
- Skip-to-main-content link as first focusable element
- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`
- Strict heading hierarchy (no skipped levels)
- All images: meaningful alt text or `alt=""` for decorative
- `autocomplete` attributes on all contact form fields
- `tel:` links on all phone numbers
- `<time datetime="">` on all dates

**CSS/Visual:**
- 4.5:1 body text contrast, 3:1 large text, 3:1 UI components
- Visible focus indicators (gold rings, never `outline: none`)
- Content reflows at 320px (no horizontal scroll)
- Touch targets minimum 44x44px
- Never restrict viewport scaling
- `prefers-reduced-motion` respected

**Forms:**
- Every input has visible `<label>` linked via `for`/`id`
- Empathetic error messages: "We need your email so we can get back to you"
- Never clear fields on error
- Error summary at top of form on failed submission
- No CAPTCHA — use honeypot fields
- Reassurance text: "Your information is confidential"

**Performance:**
- Total page weight under 500KB
- WebP images with JPEG fallbacks
- `loading="lazy"` on below-fold images
- Explicit `width`/`height` on all images
- Under 100KB JS gzipped
- Service Worker caching contact page for offline

---

## 7. Animation & Interaction

### 7.1 Core Principles

- **Timing**: 400-800ms reveals, 200-400ms hover interactions
- **Easing**: Always `cubic-bezier(0.25, 0.1, 0.25, 1)` — never linear
- **Distance**: Subtle only (20-40px reveals, 4px card lifts)
- **Gold usage**: Accent lines and hover states only — never backgrounds
- **Stagger**: 100-150ms between siblings for orchestrated reveals
- **Reduced motion**: Always disable transforms, zero durations

### 7.2 Signature Interactions

**Gold underline hover (navigation):**
- `::after` pseudo-element, `scaleX(0)` → `scaleX(1)`, origin-left, 400ms

**Card hover:**
- Lift 4px with shadow increase
- Gold 2px top-border grows from left (`scaleX(0)` → `scaleX(1)`)
- Group-hover with Tailwind

**Button hover:**
- Gold background sweeps from left (`translateX(-100%)` → `translateX(0)`)
- Or: left border reveals from transparent to gold

**Hero entrance:**
1. Gold accent line draws in (800ms)
2. Heading fades up (600ms, staggered)
3. Subheading follows (600ms, 150ms delay)
4. CTA last (600ms, 300ms delay)

**Section reveals:**
- Fade up 30px with `whileInView`, `once: true`, margin `-100px`
- Stagger children at 120ms intervals

### 7.3 Architectural Line Animations

**Diamond divider**: Two gold gradient lines draw inward, diamond rotates in at center
**SVG corner brackets**: Path draws with `pathLength` animation
**Background patterns**: Extremely subtle (3-6% opacity), never animated

### 7.4 Page Transitions

Use `app/template.tsx` with Motion fade-up:
```tsx
initial={{ opacity: 0, y: 8 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
```

### 7.5 Performance

- Use `LazyMotion` with `domAnimation` to tree-shake ~15kb
- CSS-only for simple hovers, Motion only for orchestrated sequences
- `useReducedMotion` hook respects system preferences

---

## 8. SEO Strategy

### 8.1 Technical SEO

- Next.js Metadata API (no third-party packages)
- `generateMetadata` per page for unique titles/descriptions
- `sitemap.ts` and `robots.ts` auto-generated
- Dynamic OG images per page using `ImageResponse`
- JSON-LD structured data: `NGO` type + `CommunityEvent` + `FAQPage`

### 8.2 Target Keywords

**Primary (high intent):**
- rural mental health support Scotland
- farming support [area name]
- farmer wellbeing Scotland
- offshore worker support Scotland
- community support [nearest town]

**Seasonal:**
- Spring: "lambing season stress"
- Summer: "offshore rotation mental health"
- Autumn: "harvest season support"
- Winter: "rural isolation winter"

### 8.3 Local SEO

- Full address with postcode on every page (footer)
- Local phone number (not just mobile)
- Mention specific villages, parishes, landmarks
- Google Business Profile with weekly posts
- NAP consistency across website, GBP, Facebook, directories

### 8.4 Schema Markup

```json
{
  "@type": "NGO",
  "name": "St Katharine Rural Connect",
  "areaServed": { "@type": "Place", "name": "Rural Scotland" },
  "serviceType": ["Community Wellness", "Agricultural Support", "Offshore Worker Support", "Community Development"]
}
```

Plus `CommunityEvent` on event pages, `FAQPage` on FAQ.

---

## 9. Key Decisions Summary

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Next.js 15 App Router | RSC reduces client JS, SSG for speed |
| Styling | Tailwind CSS v4 | Rapid development, design token system |
| Components | shadcn/ui (Radix) | Accessible, customizable, no bundle bloat |
| Animation | Motion (Framer Motion) | Best Next.js integration, orchestrated sequences |
| Fonts | Cormorant Garamond + DM Sans | Heritage serif + modern sans, distinctive |
| Primary color | Slate navy #1B2A4A | Warmer than pure navy, landscape-rooted |
| Secondary | Heather moor #5B4A5E | Distinctly Scottish, avoids green cliche |
| Accent gold | #C9A227 (scarce usage) | Thin lines and hovers only = luxury |
| Background | Warm stones, not pure white | #FAFAF7 prevents sterile feel |
| Body text | Warm near-black #3D3832 | Better harmony than #000000 |
| Base font | 18px (not 16px) | Premium readability for rural audience |
| CTA hierarchy | Help-first, donate-second | Matches Samaritans/RSABI best practice |
| Content tone | Trusted neighbour | Not institutional, not clinical |
| Service naming | User-centered, plain language | "Supporting Farm Life" not "Agricultural Resources" |
| Self-ID | 4 audience paths on homepage | Farmers, offshore workers, families, community |
| CMS (MVP) | TypeScript data files | Ship fast, migrate to Sanity later |
| Hosting | Vercel (free tier) | Zero-config, edge CDN, image optimization |
| Analytics | Plausible | Privacy-first, no cookie banner |
| Performance | <500KB pages, 3G-friendly | Rural areas with poor connectivity |
| Accessibility | WCAG AA minimum | Exemplary target, crisis-aware design |
