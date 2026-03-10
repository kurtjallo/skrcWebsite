# Phase 9: Design System & Layout - Research

**Researched:** 2026-03-09
**Domain:** CSS design tokens, Tailwind v4 theming, component architecture, clip-path techniques
**Confidence:** HIGH

## Summary

Phase 9 is a BROWNFIELD redesign of the visual foundation. The v1.0 codebase has a complete design system built around gold/antique-gold accent colors (#C9A227 family), warm stone backgrounds (#FAFAF7, #F5F2EC), and decorative gold elements (GoldAccentLine, DiamondDivider, CornerBrackets). The v2.0 target replaces this entirely with deep navy primary (#1a1a5e), royal blue accent (#3b3bff), light blue-grey backgrounds (#f0f1f8), and white card surfaces.

The design reference at `mockups/homepage-reference.md` defines 13 key design patterns to adopt. Phase 9 specifically handles the foundation: color tokens, typography patterns (italic-emphasis headings), shared components (section labels, buttons, cards, heroes, footer, pre-footer CTA). Page-level redesigns happen in Phases 10-13.

**Primary recommendation:** Rewrite `globals.css` @theme tokens in-place, then build new shared components alongside existing ones (do not delete v1 components yet -- downstream phases will swap them page by page).

## Standard Stack

### Core (Already in Place)
| Library | Version | Purpose | Notes |
|---------|---------|---------|-------|
| Next.js | 16.1.6 | Framework | React 19, App Router, RSC |
| Tailwind CSS | v4 | Styling | CSS-first config via `@theme` in `globals.css` |
| Motion (framer-motion) | 12.34.3 | Animation | LazyMotion + domAnimation already set up |
| shadcn/ui | new-york style | UI primitives | Button, Card -- both need variant updates |
| Lucide React | 0.575.0 | Icons | ArrowUpRight for circle-arrow CTAs |
| class-variance-authority | 0.7.1 | Variant management | Used by Button, will use for new components |

### Supporting (No New Dependencies Needed)
| Library | Purpose | Notes |
|---------|---------|-------|
| clsx + tailwind-merge | Class merging | Already in `cn()` utility |
| Cormorant Garamond | Heading font | Already loaded; italic weights available at 300/400/600 |
| DM Sans | Body font | Already loaded |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| CSS clip-path for curved edge | SVG mask/clip | SVG is more flexible for complex curves but clip-path with `ellipse()` is simpler and sufficient for this single-curve use case |
| New component library | Rebuild from scratch | Unnecessary -- shadcn/ui Card and Button just need variant updates, not replacement |
| next/font italic subsets | Separate italic import | Not needed -- Cormorant_Garamond already supports italic via `font-style: italic` CSS; Google Fonts delivers italic variants automatically when used via next/font |

**No new npm dependencies required for Phase 9.**

## Architecture Patterns

### Current Token Architecture (v1.0 -- What Exists)
```
src/app/globals.css
  @theme {
    --color-primary-950: #0F1A2E    (Slate Navy -- already close to target)
    --color-primary-900: #1B2A4A
    --color-accent-600: #A8871E     (Antique Gold -- MUST BE REPLACED)
    --color-accent-500: #C9A227     (Gold -- MUST BE REPLACED)
    --color-accent-400: #D4B545     (Gold light -- MUST BE REPLACED)
    --color-stone-50: #FAFAF7       (Warm off-white -- needs shift to blue-grey)
    --color-stone-100: #F5F2EC      (Warm beige -- needs shift to blue-grey)
    ...
  }

  :root {
    --ring: #C9A227                 (Gold ring -- MUST CHANGE)
    --accent: #FAF3D8               (Gold tint -- MUST CHANGE)
    --accent-foreground: #A8871E    (Gold text -- MUST CHANGE)
    ...
  }
```

### Target Token Architecture (v2.0 -- What to Build)
```
src/app/globals.css
  @theme {
    --color-primary-950: #121240    (Deepest navy)
    --color-primary-900: #1a1a5e    (Deep navy -- brand primary)
    --color-primary-800: #252580    (Navy)
    --color-primary-700: #2e2ea0    (Navy lighter)
    --color-primary-600: #3535c0    (Navy lightest)

    --color-accent-600: #3030e0     (Royal blue dark)
    --color-accent-500: #3b3bff     (Royal blue -- primary accent)
    --color-accent-400: #5c5cff     (Royal blue light)
    --color-accent-300: #8080ff     (Royal blue lighter)
    --color-accent-200: #b0b0ff     (Royal blue lightest)
    --color-accent-100: #e8e8ff     (Royal blue tint)

    --color-surface-page: #f0f1f8   (Light blue-grey -- page bg)
    --color-surface-card: #ffffff   (White -- card bg)
    --color-surface-dark: #121240   (Deep navy -- dark sections)

    --color-text-primary: #1a1a5e   (Navy -- headings)
    --color-text-body: #4a4a5a      (Charcoal -- body text)
    --color-text-muted: #6a6a7a     (Grey -- secondary text)
    --color-text-on-dark: #ffffff   (White -- on dark bg)

    --color-divider: #e0e2ea        (Light grey -- section dividers)

    /* Remove all stone-* tokens (or repurpose for surface) */
    /* Remove all secondary-* tokens (heather moor) */
  }
```

### Recommended Component Structure
```
src/
  components/
    shared/
      SectionLabel.tsx       # NEW: Blue dot + uppercase pill (DS-03)
      EmphasisHeading.tsx    # NEW: Italic-emphasis heading pattern (DS-02)
      CircleArrowCTA.tsx     # NEW: Text + circle-arrow button (DS-04)
      PreFooterCTA.tsx       # NEW: Curved clip-path image CTA (LAYOUT-04)
      AnimatedSection.tsx    # KEEP: No changes needed
      LazyMotionProvider.tsx # KEEP: No changes needed
      JsonLd.tsx             # KEEP: No changes needed
      GoldAccentLine.tsx     # DEPRECATE: Keep until all pages migrated
      DiamondDivider.tsx     # DEPRECATE: Keep until all pages migrated
      CornerBrackets.tsx     # DEPRECATE: Keep until all pages migrated
    layout/
      Footer.tsx             # REWRITE: Dark navy 4-column (LAYOUT-03)
      Header.tsx             # UPDATE: Accent color changes only
      UtilityBar.tsx         # UPDATE: Accent color changes only
      MobileNav.tsx          # UPDATE: Accent color changes only
      SectionWrapper.tsx     # UPDATE: New background colors
      SkipLink.tsx           # UPDATE: Focus ring color
      InsetHero.tsx          # NEW: Full-width inset rounded-corner hero (LAYOUT-01)
      InteriorHero.tsx       # NEW: Short banner with centered heading (LAYOUT-02)
    ui/
      button.tsx             # UPDATE: Replace gold/gold-outline with circle-arrow
      card.tsx               # UPDATE: Remove gold top border, add white pattern
```

### Pattern 1: Italic-Emphasis Heading (DS-02)
**What:** A component or utility that renders headings with selective words in italic Cormorant Garamond italic style. This is the DEFINING typographic feature of v2.0.
**When to use:** Every h1, h2, h3 that contains emphasis words.
**Implementation approach:** Use a component that accepts a string with markdown-style `*italic*` markers and renders `<em>` tags with the italic styling.

```tsx
// EmphasisHeading.tsx
interface EmphasisHeadingProps {
  text: string;  // "Strategy That Powers *Your Next* Level of Growth."
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
}

export function EmphasisHeading({ text, as: Tag = 'h2', className }: EmphasisHeadingProps) {
  // Parse *italic* markers into <em> elements
  const parts = text.split(/(\*[^*]+\*)/g);

  return (
    <Tag className={cn('font-heading', className)}>
      {parts.map((part, i) =>
        part.startsWith('*') && part.endsWith('*')
          ? <em key={i} className="italic text-accent-500">{part.slice(1, -1)}</em>
          : part
      )}
    </Tag>
  );
}
```

**Key details from reference:**
- Italic words use the SAME serif font (Cormorant Garamond) in italic style
- Some italic words ALSO get accent color (blue) -- notably in mission/vision headings
- Most italic words stay navy (same color as rest of heading)
- The `text-accent-500` color on `<em>` should be optional via prop (default: inherit)

### Pattern 2: Section Label (DS-03)
**What:** A pill-shaped badge with a solid blue circle dot on the left and uppercase text.
**When to use:** At the top of every section, before the heading.

```tsx
// SectionLabel.tsx
interface SectionLabelProps {
  text: string;       // "WHO WE ARE", "OUR SERVICES"
  align?: 'left' | 'center';
  className?: string;
}

export function SectionLabel({ text, align = 'left', className }: SectionLabelProps) {
  return (
    <div className={cn(
      'inline-flex items-center gap-2 rounded-full border border-divider px-4 py-1.5',
      align === 'center' && 'mx-auto',
      className
    )}>
      <span className="h-2 w-2 rounded-full bg-accent-500" aria-hidden="true" />
      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-900">
        {text}
      </span>
    </div>
  );
}
```

**From reference:** ~6-8px blue dot, ~11-12px text, ~2-3px letter spacing, subtle 1px border, pill-shaped.

### Pattern 3: Circle-Arrow CTA (DS-04)
**What:** Text label + circular icon button to the right, as one unit. Not a traditional filled rectangle button.
**When to use:** Replaces ALL current gold/outline button styles across the site.

```tsx
// CircleArrowCTA.tsx
interface CircleArrowCTAProps {
  label: string;
  href?: string;
  variant?: 'dark' | 'light';  // dark = navy circle, light = white circle (for on-image)
  className?: string;
  onClick?: () => void;
}

export function CircleArrowCTA({ label, href, variant = 'dark', className }: CircleArrowCTAProps) {
  const content = (
    <span className={cn(
      'inline-flex items-center gap-3 group',
      variant === 'dark' ? 'text-primary-900' : 'text-white',
      className
    )}>
      <span className="text-base font-medium">{label}</span>
      <span className={cn(
        'flex h-10 w-10 items-center justify-center rounded-full transition-transform group-hover:scale-105',
        variant === 'dark' ? 'bg-primary-900 text-white' : 'bg-white text-primary-900'
      )}>
        <ArrowUpRight className="h-5 w-5" />
      </span>
    </span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return <button type="button">{content}</button>;
}
```

**From reference:** Arrow is northeast-pointing (~45deg), circle is filled (primary: navy with white arrow, secondary: white with navy arrow).

### Pattern 4: Inset Hero (LAYOUT-01)
**What:** Full-viewport-width image with ~20px border-radius, inset from page edges, creating a "card" feel. Dark overlay for text contrast.
**When to use:** Homepage hero, and can be adapted for interior page hero.

```tsx
// InsetHero.tsx
interface InsetHeroProps {
  backgroundImage: string;
  children: React.ReactNode;
  height?: string;          // "70vh" | "50vh" etc
  className?: string;
}

export function InsetHero({ backgroundImage, children, height = '70vh', className }: InsetHeroProps) {
  return (
    <section className={cn('px-4 pt-4', className)}>
      <div
        className="relative overflow-hidden rounded-[20px]"
        style={{ minHeight: height }}
      >
        {/* Background image */}
        <Image src={backgroundImage} alt="" fill className="object-cover" priority />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/40 to-primary-950/20" />
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
          {children}
        </div>
      </div>
    </section>
  );
}
```

**Critical detail:** The hero is INSET from page edges (~16-20px padding), not full-bleed. The rounded corners create a card-like appearance. The nav overlays on top of it (transparent).

### Pattern 5: Pre-Footer CTA with Curved Clip (LAYOUT-04)
**What:** Large image card with a curved white shape at the top transitioning from the page background into the image. Inset from page edges. Text + CTA overlaid on image.
**Implementation:** Use CSS `clip-path: ellipse()` or an SVG-based approach on a pseudo-element.

```tsx
// PreFooterCTA.tsx
export function PreFooterCTA({
  heading,    // "Ready to *Transform* Your Community?"
  body,
  ctaLabel,
  ctaHref,
  backgroundImage,
}: PreFooterCTAProps) {
  return (
    <section className="px-4 pb-4">
      <div className="relative overflow-hidden rounded-[20px]" style={{ minHeight: '500px' }}>
        <Image src={backgroundImage} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/40 to-transparent" />

        {/* Curved white shape at top */}
        <div
          className="absolute top-0 left-0 right-0 h-[80px] bg-surface-page"
          style={{
            clipPath: 'ellipse(60% 100% at 50% 0%)',
          }}
        />

        {/* Content positioned bottom-left */}
        <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-12">
          <EmphasisHeading text={heading} as="h2" className="text-4xl text-white max-w-xl mb-4" />
          <p className="text-white/90 max-w-lg mb-6">{body}</p>
          <CircleArrowCTA label={ctaLabel} href={ctaHref} variant="light" />
        </div>
      </div>
    </section>
  );
}
```

**Clip-path approach:** `ellipse(60% 100% at 50% 0%)` creates a wide ellipse anchored at the top center, giving a gentle arch/wave effect. Alternative: use `clip-path: path('M 0,0 Q 50%,80px 100%,0 L 100%,100% L 0,100% Z')` for a more precise quadratic curve. The `ellipse()` approach is simpler and has better browser support.

### Anti-Patterns to Avoid
- **Do not delete v1 components during Phase 9.** The GoldAccentLine, DiamondDivider, CornerBrackets, and current button variants are still referenced by existing pages. Downstream phases (10-13) will swap them out page by page. Phase 9 adds new components alongside existing ones.
- **Do not try to make both gold and blue tokens active simultaneously.** Change the @theme tokens once at the start of Phase 9. Some pages will temporarily look wrong with blue tokens until they are redesigned in later phases. This is expected and acceptable.
- **Do not build the italic-emphasis pattern as a utility class.** It requires parsing text content and rendering `<em>` tags -- this is component-level logic, not CSS-level. A React component is the correct abstraction.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Variant management for buttons | Manual className conditionals | CVA (class-variance-authority) | Already used by shadcn Button; add new variants to existing CVA config |
| Icon library for arrow icons | Custom SVG arrow | Lucide `ArrowUpRight` | Already in project, consistent sizing/stroke |
| Responsive font sizing | Custom media queries | Tailwind responsive utilities + theme text scale | Already have --text-display through --text-xs scale defined |
| Animated counters for stats | Custom animation code | Existing AnimatedCounter in ImpactStats.tsx | Already built and tested with reduced-motion support |
| Scroll-triggered animations | Custom IntersectionObserver | Motion `whileInView` + existing AnimatedSection | Already abstracted and working |
| Focus ring styling | Per-component focus styles | Global `*:focus-visible` rule in globals.css | Already exists, just update color from gold to blue |

## Common Pitfalls

### Pitfall 1: Incomplete Gold-to-Blue Token Migration
**What goes wrong:** Changing @theme tokens but missing hardcoded hex values or shadcn :root variables. Components render with mixed gold/blue accents.
**Why it happens:** Gold references exist in 3 places: (1) @theme block, (2) :root block for shadcn, (3) hardcoded in CornerBrackets.tsx (`#C9A227`).
**How to avoid:** The token change must update ALL THREE locations in globals.css. Run a grep for `#C9A227`, `#A8871E`, `#D4B545`, `#E2CB6E`, `#F0E1A0`, `#FAF3D8`, `gold`, `Gold`, and `GOLD` across the entire `src/` directory after the change.
**Warning signs:** Any remaining warm gold tones visible anywhere on the site.

**Files requiring token updates:**
- `src/app/globals.css` -- @theme block (6 accent tokens) + :root block (4 shadcn tokens) + focus-visible rule
- `src/components/shared/CornerBrackets.tsx` -- hardcoded `const GOLD_COLOR = "#C9A227"`
- `src/components/layout/SkipLink.tsx` -- `focus:bg-accent-500` (this will auto-update when token changes)

### Pitfall 2: Font Italic Not Loading
**What goes wrong:** Italic-emphasis headings render in "faux italic" (browser-slanted) rather than true italic Cormorant Garamond.
**Why it happens:** The current `fonts.ts` loads Cormorant Garamond with `weight: ["300", "400", "600"]` but does not explicitly include `style: ["normal", "italic"]`. By default, next/font for Google Fonts DOES include italic if the font supports it, but this should be verified.
**How to avoid:** Add `style: ["normal", "italic"]` to the Cormorant_Garamond configuration in `src/lib/fonts.ts` to make the italic loading explicit.
**Warning signs:** Italic text looks thin/slanted rather than having true calligraphic italic letterforms.

### Pitfall 3: SectionWrapper Background Mismatch
**What goes wrong:** The current SectionWrapper uses stone-50/stone-100/primary-900 alternating backgrounds. After token changes, the visual rhythm changes (stone tokens become blue-grey tones) but the auto-background pattern may not match v2.0 design (which uses a single blue-grey page background with white cards).
**Why it happens:** v2.0 design uses a FLAT page background (`#f0f1f8`) with white cards providing contrast, rather than alternating section backgrounds.
**How to avoid:** Update SectionWrapper's AUTO_BACKGROUNDS array to reflect v2.0 pattern: primarily the single page background color, with explicit dark variant for specific sections only.
**Warning signs:** Visible alternating band pattern that doesn't match the reference design.

### Pitfall 4: Clip-Path Browser Support
**What goes wrong:** The pre-footer CTA's curved clip-path doesn't render in older browsers or Safari.
**Why it happens:** While `clip-path: ellipse()` has excellent support (97%+ global), `clip-path: path()` with SVG syntax has slightly less support. The `shape()` function is very new (2025) and not widely supported.
**How to avoid:** Use `clip-path: ellipse()` which has the broadest support. Avoid the new `shape()` function. Test in Safari specifically.
**Warning signs:** Hard edge where curved transition should be.

### Pitfall 5: shadcn/ui Theme Variables Out of Sync
**What goes wrong:** shadcn/ui components (Button, Card, etc.) use their own CSS variables from `:root` (--accent, --ring, --primary, etc.) which are separate from the @theme custom color tokens. Changing @theme without updating :root leaves shadcn components using old gold colors.
**Why it happens:** Two parallel token systems: Tailwind @theme tokens for utility classes AND shadcn :root CSS variables for component internals.
**How to avoid:** Update BOTH systems together. The :root block in globals.css maps shadcn variables to SKRC theme values -- these must be updated to match the new palette.
**Warning signs:** Form inputs, focus rings, or shadcn-derived components still showing gold tones.

### Pitfall 6: Header Transparency for Overlaid Hero
**What goes wrong:** The v2.0 design has the header overlaying the hero image with transparent background. The current header is sticky with solid bg-stone-50 background. This conflict causes either the header to hide the hero image or the hero text to be unreadable.
**Why it happens:** The v1.0 header was designed for solid backgrounds. The v2.0 hero pattern requires a transparent header.
**How to avoid:** Phase 9 scope should handle the header transparency ONLY for the hero component (using a layout prop or conditional class). The header needs a "transparent" variant for pages with inset heroes, and a "solid" variant for scroll state. This is a Phase 9 concern because the hero component (LAYOUT-01) depends on it.
**Warning signs:** Header obscuring hero content, or hero content hidden behind a solid header bar.

## Code Examples

### Color Token Migration (globals.css @theme block)
```css
/* Source: Derived from mockups/homepage-reference.md color spec */
@theme {
  /* Primary (Deep Navy) */
  --color-primary-950: #121240;
  --color-primary-900: #1a1a5e;
  --color-primary-800: #252580;
  --color-primary-700: #2e2ea0;
  --color-primary-600: #3535c0;

  /* Accent (Royal Blue) */
  --color-accent-600: #3030e0;
  --color-accent-500: #3b3bff;
  --color-accent-400: #5c5cff;
  --color-accent-300: #8080ff;
  --color-accent-200: #b0b0ff;
  --color-accent-100: #e8e8ff;

  /* Surface / Backgrounds */
  --color-surface-page: #f0f1f8;
  --color-surface-card: #ffffff;
  --color-surface-dark: #121240;

  /* Text */
  --color-text-primary: #1a1a5e;
  --color-text-body: #4a4a5a;
  --color-text-muted: #6a6a7a;
  --color-text-on-dark: #ffffff;

  /* Dividers */
  --color-divider: #e0e2ea;

  /* Semantic (keep existing) */
  --color-success: #3A7D5C;
  --color-error: #A63D3D;
}
```

### shadcn/ui :root Variable Updates
```css
:root {
  --radius: 0.75rem;            /* Slightly larger for v2.0 card radius */
  --background: #f0f1f8;        /* Light blue-grey page bg */
  --foreground: #1a1a5e;        /* Navy text */
  --card: #ffffff;              /* White cards */
  --card-foreground: #1a1a5e;
  --primary: #1a1a5e;           /* Navy */
  --primary-foreground: #ffffff;
  --accent: #e8e8ff;            /* Light blue tint */
  --accent-foreground: #3b3bff; /* Royal blue */
  --ring: #3b3bff;              /* Royal blue focus ring */
  --border: #e0e2ea;            /* Light grey */
  --input: #e0e2ea;
  --muted: #e8e8ff;
  --muted-foreground: #6a6a7a;
}
```

### Font Loading with Explicit Italic (src/lib/fonts.ts)
```ts
export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],     // ADD THIS LINE
  variable: "--font-cormorant-garamond",
  display: "swap",
});
```

### Updated Button Variants (button.tsx)
```tsx
// Remove 'gold' and 'gold-outline' variants
// Add 'circle-arrow' and 'circle-arrow-light' variants
// Or better: extract CircleArrowCTA as separate component (it's not a button variant,
// it's a fundamentally different visual pattern)
```

### Updated Card (card.tsx)
```tsx
// Change hoverable prop behavior:
// - Remove gold top border (before:bg-accent-500)
// - Change to white bg with rounded-xl and shadow hover
// - Radius: rounded-xl (~12px) or rounded-2xl (~16px)
// - No visible border (remove border from base)
// - Hover: translate-y-[-2px] + shadow-lg
```

## State of the Art

| Old Approach (v1.0) | New Approach (v2.0) | Impact |
|---------------------|---------------------|--------|
| Gold accent palette (#C9A227) | Royal blue accent (#3b3bff) | All accent-* tokens change |
| Warm stone backgrounds (#FAFAF7) | Cool blue-grey background (#f0f1f8) | Page bg and section rhythm change |
| Alternating section backgrounds | Single page bg + white cards | SectionWrapper pattern simplifies |
| Gold accent line on hover | No accent line on hover (clean lift + shadow) | GoldAccentLine component deprecated |
| Diamond dividers between sections | Thin 1px grey dividers | DiamondDivider deprecated |
| Corner bracket decorations | No corner brackets | CornerBrackets deprecated |
| "OVERLINE" text in accent-600 | Blue dot + uppercase pill badge | New SectionLabel component |
| Filled rectangle CTA buttons | Text + circle-arrow CTA | New CircleArrowCTA component |
| Centered gradient hero | Inset rounded-corner image hero | New InsetHero component |
| Solid header on bg-stone-50 | Transparent header overlaying hero | Header needs transparent variant |
| Dark footer on primary-950 | Dark footer on primary-950 (similar) | Footer content layout changes |

**Deprecated/outdated (phase-out in Phases 10-13):**
- `GoldAccentLine` -- no gold in v2.0
- `DiamondDivider` -- no diamond/gold dividers in v2.0
- `CornerBrackets` -- no gold corner brackets in v2.0
- Button `gold` and `gold-outline` variants -- replaced by CircleArrowCTA
- `bg-stone-50` / `bg-stone-100` alternating rhythm -- replaced by flat blue-grey

## Impact Analysis: Gold/Accent Token Change

**Scope of change when accent tokens shift from gold to blue:**

| Category | Count | Files |
|----------|-------|-------|
| Files using `accent-*` classes | 40 | All component and page files |
| Total `accent-*` occurrences | 123 | Across all files |
| Files using `bg-stone-*` background | 30 | Components + SectionWrapper |
| Hardcoded gold hex values | 1 | CornerBrackets.tsx only |
| Button `gold` variant usages | 5 | services, audience, who-we-serve pages |
| GoldAccentLine imports | 3 | SelfIdCards, ServicePillars, GetInvolved |
| DiamondDivider imports | 1 | contact page |
| CornerBrackets imports | 1 | contact page |

**When tokens change, 40 files auto-update** (accent-500 now means blue instead of gold). This is correct behavior -- the classes stay the same, the token values change. No code changes needed for the 123 occurrences. However, the VISUAL result will be blue where gold was, which may not always be desired (some gold elements like DiamondDivider should be removed, not turned blue).

## Dependency Analysis: What Phase 9 Builds That Later Phases Consume

| Component Built in Phase 9 | Consumed By |
|---------------------------|-------------|
| Color tokens (globals.css) | ALL phases 10-14 |
| EmphasisHeading | Phases 10-13 (every page heading) |
| SectionLabel | Phases 10-13 (every section header) |
| CircleArrowCTA | Phases 10-13 (every CTA) |
| InsetHero (LAYOUT-01) | Phase 10 (homepage hero) |
| InteriorHero (LAYOUT-02) | Phases 11-13 (all inner pages) |
| Footer (LAYOUT-03) | Immediate -- appears on every page |
| PreFooterCTA (LAYOUT-04) | Phases 10-12 (homepage, services, about) |
| Card (updated) | Phases 10-13 (all card-based layouts) |
| Stats card pattern (DS-06) | Phase 10 (homepage stats), Phase 11 (about stats) |

## Open Questions

1. **Exact color hex values for the navy palette**
   - What we know: Reference says `~#1a1a5e or #1c1c6e` for primary, `~#3b3bff or #4040ff` for accent
   - What's unclear: The exact values depend on the actual Framer template screenshots. The "~" prefix indicates approximation.
   - Recommendation: Start with `#1a1a5e` for primary and `#3b3bff` for accent. These can be fine-tuned visually during implementation. Define clear token names so values can be adjusted in one place.

2. **Header transparency behavior**
   - What we know: v2.0 hero has transparent nav overlaying the image. Current header is sticky solid.
   - What's unclear: Does the header become solid on scroll? Is it only transparent on the homepage? What about interior pages with shorter heroes?
   - Recommendation: Build the header with two modes: "transparent" (used when an InsetHero is present) and "solid" (default). Add scroll-based transition to solid background. The InsetHero component or page layout should signal which mode the header uses.

3. **Stone token removal vs repurposing**
   - What we know: v2.0 doesn't use warm stone colors. Page bg becomes blue-grey.
   - What's unclear: Whether to keep stone-* token names (mapped to new blue-grey values) or rename to surface-* tokens. Renaming breaks all 75 existing references.
   - Recommendation: Repurpose stone-50 and stone-100 to blue-grey values rather than renaming. This minimizes code changes across existing pages. Add new surface-page/surface-card tokens alongside.

4. **Secondary color palette**
   - What we know: v1.0 has heather moor secondary colors. v2.0 reference doesn't mention a secondary palette.
   - What's unclear: Whether any secondary colors are needed in v2.0.
   - Recommendation: Remove secondary-* tokens. The v2.0 palette is simpler: navy primary, blue accent, grey neutrals, white surfaces. If a secondary is needed later, it can be added.

5. **UtilityBar fate in v2.0**
   - What we know: The design reference doesn't show a utility bar above the navigation.
   - What's unclear: Whether to remove it in Phase 9 or later.
   - Recommendation: Keep the UtilityBar for now but update its colors. If the v2.0 design explicitly removes it, handle in Phase 10 or 11 when the header/nav is fully redesigned.

## Sources

### Primary (HIGH confidence)
- `mockups/homepage-reference.md` -- Full design specification with color values, typography patterns, component specs, and section-by-section breakdowns for homepage, services, about, case studies, and FAQ pages
- `src/app/globals.css` -- Current token architecture (directly inspected)
- `src/components/ui/button.tsx` -- Current button variants (directly inspected)
- `src/components/ui/card.tsx` -- Current card implementation (directly inspected)
- `src/components/layout/Footer.tsx` -- Current footer structure (directly inspected)
- `src/lib/fonts.ts` -- Current font loading configuration (directly inspected)
- `package.json` -- Current dependency versions (directly inspected)

### Secondary (MEDIUM confidence)
- [Tailwind CSS v4 theme documentation](https://tailwindcss.com/docs/theme) -- @theme directive and CSS-first configuration
- [Cormorant Garamond Google Fonts](https://fonts.google.com/specimen/Cormorant+Garamond) -- Available italic weights confirmed (Light through Bold italic)
- [MDN clip-path reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/clip-path) -- Browser support and syntax for ellipse(), path()

### Tertiary (LOW confidence)
- Color hex value approximations from design reference -- prefixed with "~" in the source document, indicating they are estimates from screenshots, not exact design tokens

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- Directly inspected package.json and all source files. No new dependencies needed.
- Architecture: HIGH -- Analyzed all existing components, mapped migration path for every token and component.
- Pitfalls: HIGH -- Identified through direct code analysis of token references, font loading, and component dependencies.
- Color values: MEDIUM -- Approximate hex values from design reference screenshots, may need visual fine-tuning.
- Clip-path approach: MEDIUM -- Standard CSS technique with excellent browser support, but exact curve parameters will need visual tuning.

**Research date:** 2026-03-09
**Valid until:** 2026-04-09 (stable -- no library upgrades expected, codebase-specific research)
