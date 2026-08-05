# Giddens Systems — Creative direction

The governing document. Every visual decision on this site traces back to something
written here. If a decision cannot be justified against this doc, it does not ship.

Locked 2026-08-04. Changes to this doc require a deliberate decision, not a drift.

---

## Brief

A two-brother systems shop in North Texas building CRM, automation, and AI intake
infrastructure for service businesses where one customer is worth $5,000-$10,000.

**The site's single job:** make a skeptical owner of a $500k-$3M service business
believe these two can be trusted with the machinery that runs their revenue.

Not: win a design award. Not: explain AI. Not: rank for "DFW marketing agency."

**Audience reality check.** The reader is a 35-55 year old owner-operator. Epoxy
flooring, hauling, HVAC, personal training. They are on a phone, in a truck, between
jobs. They are not design-literate but they are extremely good at spotting bullshit,
because they get pitched constantly. They respond to specificity, numbers, and things
that look built rather than styled.

---

## Direction: Industrial signage

The reference class is **equipment marking and wayfinding** — machine labeling, safety
signage, parts catalogs, control panels, service manuals.

It is NOT dark-mode dev-tool. That distinction is the entire brief.

### We are

- Precise, engineered, legible at a glance
- Confident enough to be quiet
- Built by people who understand how things actually connect
- Closer to a Stihl parts diagram or a Braun control panel than to a SaaS landing page

### We are not

- Playful, rounded, friendly, approachable
- Gradient, glow, glassmorphic, neon, particle, mesh
- A Linear clone, a Vercel clone, a Stripe clone
- "Cutting-edge," "seamless," "transformative," "next-generation"

### The rejection that matters most

**We are not dark-mode-startup.** Near-black plus one bright accent is the most
generated aesthetic on the internet. Every color and type decision below exists
specifically to sit outside that cluster while keeping the technical register.

---

## Palette

Cool steel ground, warm orange marking. The warm/cool tension is the point — the
identical orange reads significantly hotter against cool slate than against warm black,
which is why the ground is cool even though the print palette is warm.

| Token | Hex | Role |
|---|---|---|
| `steel-950` | `#10171C` | Page ground |
| `steel-900` | `#172128` | Section surface |
| `steel-800` | `#24323A` | Raised surface, inputs, code blocks |
| `steel-600` | `#3D4E58` | Hairline rules, borders, diagram strokes |
| `steel-400` | `#7D8B93` | Secondary text, annotations, captions |
| `chalk-200` | `#D9D4CC` | Body text |
| `chalk-050` | `#FAF8F5` | Headlines, maximum contrast |
| `signal-500` | `#E2542C` | Accent — equipment orange |
| `signal-700` | `#B33D1C` | Accent pressed/active state only |

**Print and physical materials use the warm Ember palette instead:** `#141312`,
`#38352F`, `#E2542C`, `#D9D4CC`, `#FAF8F5`. The orange is the constant across both.

### The two-appearance rule

`signal-500` appears a **maximum of two times per viewport.** One primary CTA and one
marking. That is the entire budget. Three appearances turns an accent into a theme and
the whole system collapses. This is not a guideline.

`signal-700` exists only for pressed/active states. It is never a fill color.

### Never

- `#000000` or `#FFFFFF` anywhere in the codebase
- Any Tailwind default color (`slate-*`, `gray-*`, `zinc-*`, `indigo-*`)
- Any color not in the table above
- Opacity used to fake a color that should be a token

---

## Typography

Three roles, three faces, all free from Google Fonts. Self-host them via
`@fontsource` so there is no third-party request and no layout shift.

| Role | Face | Usage |
|---|---|---|
| Display | **Archivo** (variable, `wdth` 115-125) | Headlines only |
| Body | **Instrument Sans** | All running text |
| Utility | **JetBrains Mono** | Eyebrows, labels, data, annotations, nav |

**Inter is banned.** Not because it is bad — it is excellent. Because it is the default
body face of every AI-generated site, and using it means the first thing a designer
notices is that this looks like everything else.

**Archivo's width axis is the signature typographic move.** Display type sets at
`font-variation-settings: 'wdth' 118` and weight 700, tracking -0.025em. Expanded
grotesk headlines are a deliberate choice most sites cannot make because most sites use
static fonts. It costs nothing and it is immediately visible as intent.

**Monospace does real work, never decoration.** In a parts diagram, annotations are
monospace because they are machine-set data. Use JetBrains Mono only where the content
genuinely is data: metrics, step numbers, figure labels, revision stamps, nav items,
form labels. Never a headline. Never body copy. Never for flavor.

**Case.** Sentence case for all headlines and body. Lowercase for monospace utility
text — `fig. 01 / rev 2026.08`, not `FIG. 01`. All-caps is reserved for exactly one
element: the primary CTA label, and only if it earns it in review.

---

## Signature element

**An exploded assembly drawing of a revenue system, in the hero.**

Five components laid along a horizontal axis like a figure from a service manual:
missed call, ai intake, qualify, crm record, booked job. Hairline `steel-600` strokes,
dashed axis, leader lines up to monospace part numbers, labels below. Component 02
marked in `signal-500` — it is the differentiator and the only orange in the diagram.

**Built as inline SVG animated with CSS. Never as generated video.** Generative video
cannot hold a straight line or legible small text, and a wobbling diagram on a site
selling system reliability contradicts the sales argument.

Animation: components slide apart along the axis from a collapsed center, staggered
100ms apart, 900ms each, `cubic-bezier(.2,.7,.3,1)`. Axis draws via `stroke-dashoffset`.
Annotations fade in last. **Plays once on load. Does not loop, does not respond to
scroll, does not re-trigger.**

This is where the entire boldness budget is spent. Everything else stays disciplined.
If the assembly is not built well, the site fails — it is not a nice-to-have.

---

## Motion budget

**Two moments on the entire site.**

1. The hero assembly draw on load
2. A single hover treatment on case study cards

That is the whole budget. No scroll-triggered fade-ups. No stagger reveals on headings.
No parallax. No counting-up numbers. No marquee. No cursor followers.

`prefers-reduced-motion: reduce` disables both; the assembly renders in final state.

---

## Layout

- **Asymmetric by default.** Content sits at columns 1-7 or 4-12. Centered layout is
  reserved for exactly one element on the site: the final CTA band.
- **Hairline rules are structural.** Full-bleed `steel-600` rules separate zones the way
  they do on a drawing. They replace whitespace-only separation.
- **Vertical rhythm varies.** Three distinct section paddings (`space-2xl`, `space-3xl`,
  `space-4xl`), assigned by section weight. Uniform section spacing is a tell.
- **Radius is near-zero.** `2px` maximum on interactive elements, `0` everywhere else.
  Rounded cards are the single most recognizable AI signature.
- **Margin annotations.** Monospace figure labels in the left margin of major sections,
  encoding section number and content type. Structural, not decorative.
- **Max content width 1200px.** Full-bleed elements: rules, material band, footer.

---

## The client screenshot problem

Proof assets are **screenshots of client websites** — bright, light rectangles. Dropped
onto a `steel-950` page they become glowing panels that hijack every section, making
someone else's design the most dominant thing on the page.

**Resolution:** screenshots are inset into a `steel-800` browser-chrome frame with a
`steel-600` hairline border, and carry a `brightness(0.88) saturate(0.92)` filter at
rest. On hover the filter lifts to full. That is the one hover treatment in the motion
budget. Frames are never full-bleed and never exceed 60% of section width.

---

## Material band

One full-bleed strip, 21:9, between case studies and the final CTA. Macro of burnt
orange industrial enamel on brushed steel, raking light, chipped paint edge.

Sourced photographically, graded to `signal-500`. Hard budget: **under 800KB.** WebP
poster, WebM motion with MP4 fallback, `preload="none"`, `autoplay muted playsinline
loop`. Renders as static poster under `prefers-reduced-motion`.

An ambient grain overlay may sit over dark sections at 5-7% opacity, under 400KB,
disabled entirely under reduced motion.

---

## Copy voice

Plain, specific, blunt. The way a good contractor talks: names the thing, says what it
costs, does not oversell.

**Write:** "Every missed call is a five thousand dollar job."
**Write:** "Usually live in under three weeks."

**Never write:** "Leverage cutting-edge AI to seamlessly transform your customer
engagement."

Numbers wherever numbers exist. Sentence case. No exclamation points. Contractions are
fine. Every claim on the site must be one a client would confirm if a prospect called
them to check.

Banned words: seamless, unlock, empower, leverage, transform, revolutionize,
cutting-edge, next-generation, game-changing, robust, elevate, supercharge, effortless.

---

## Quality floor

Non-negotiable, and never announced on the page:

- Responsive to 375px
- Visible keyboard focus on every interactive element: `signal-500`, 2px, 2px offset
- `prefers-reduced-motion` respected throughout
- Lighthouse 100 on performance — Astro ships zero JS by default, do not undo that
- Real `<title>`, meta description, and OG image per page
- Text contrast minimum 4.5:1 against its surface; verify `steel-400` on `steel-900`
- Every image has meaningful `alt`; decorative images have `alt=""`
- No layout shift: fonts self-hosted with `font-display: swap`, images have dimensions
