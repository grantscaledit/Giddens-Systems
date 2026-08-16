# Site structure

One page. A single scroll, built to be read in a truck cab in ninety seconds.

Additional pages are a later decision. Do not build a blog, a services index, or an
about page until the single page is finished and converting.

---

## Page order

| # | Section | Padding | Surface | Purpose |
|---|---|---|---|---|
| 00 | Nav | — | `--bg-page` | Wordmark, three links, one CTA |
| 01 | Hero | `--space-4xl` | `--bg-page` | The claim + the exploded assembly |
| 02 | We go first | `--space-3xl` | `--bg-section` | The offer — one campaign before you pay for the build |
| 03 | Proof band | `--space-2xl` | `--bg-page` | Three real numbers |
| 04 | The system | `--space-3xl` | `--bg-page` | One machine, three parts — front door, engine, mouth |
| 05 | Case study 01 | `--space-3xl` | `--bg-page` | Screenshot + real result |
| 06 | Case study 02 | `--space-3xl` | `--bg-page` | Screenshot + real result |
| 07 | How it works | `--space-2xl` | `--bg-page` | Four steps |
| 08 | Pricing | `--space-3xl` | `--bg-page` | Three tiers + a custom block |
| 09 | Material band | `0` | — | Full-bleed texture |
| 10 | Final CTA | `--space-4xl` | `--bg-section` | Only centered element on the site |
| 11 | Footer | `--space-2xl` | `--bg-page` | Contact, location, revision stamp |

Note the padding column: three distinct values, assigned by weight. Uniform section
spacing is a tell — this is the fix, and it must survive review.

**Figure numbers match section numbers.** `fig. 02` is the offer, `fig. 04` is the
system, `fig. 07` is the process. The visible page therefore skips numbers wherever a
blocked section sits, which is honest and means nothing renumbers when those sections
land.

**Surface is the second structural device.** Two sections sit on `--bg-section` rather
than `--bg-page` — the offer and the final CTA, the two places the page is asking for
something. Depth comes from surface value, per the direction. Pricing deliberately
stays on `--bg-page` so the Growth tier's `--bg-raised` still reads as raised.

---

## Accent map

The complete inventory of `--signal-500` on the page. The two-appearance rule is counted
per *viewport while scrolling*, not per section, so this is planned as one budget across
the whole page rather than section by section. Adding an accent anywhere means checking
it against its neighbours above and below, not just its own section.

| Section | Accent | Position in section |
|---|---|---|
| 01 Hero | Assembly component 02 marking | middle |
| 01 Hero | Primary CTA fill | bottom |
| 02 We go first | Guarantee block left border | bottom |
| 04 The system | none | — |
| 07 How it works | none | — |
| 08 Pricing | Growth tier top border | upper |
| 08 Pricing | Section CTA fill — *outlined until the material band lands* | lower |
| 10 Final CTA | Primary CTA fill | middle |
| 00 Nav, 11 Footer | none | — |

Nav's CTA is outlined, and Nav does not stick, so it never contributes to a scrolled
count. Focus rings are transient interaction state and do not count.

Two sections carry no accent at all. That is deliberate: the accent is equipment
marking, and the system and the process have nothing load-bearing to mark. The long
orange-free stretch through the middle of the page is what makes pricing land.

**The pairing to watch** is section 08's CTA against section 10's button. Measured at
1440×900 with the material band absent: both are on screen together. Resolved by
outlining section 08's CTA — see the section 08 accent note. Re-measure when the band
lands.

---

## Section specs

**00 · Nav** — Wordmark left. Three monospace links (`work`, `services`, `contact`)
right. One outlined CTA. Sticky is optional; if used it must not shift layout. No
mobile hamburger animation beyond a simple toggle.

**01 · Hero** — Monospace eyebrow (`giddens.systems` / `fig. 01 rev 2026.08`) above a
hairline rule. Display headline at columns 1-7, max 560px. Body subhead at max 430px.
The exploded assembly below, full content width. CTA + a monospace qualifier line.
The assembly is the signature — see the direction doc. This section takes as long as it
takes; it is 60% of the site's impression.
**Assembly responsive behavior.** The assembly has two distinct compositions, not one
that scales. Above 700px: horizontal, five parts on a horizontal axis, labels beneath.
Below 700px: vertical, five parts stacked on a vertical axis, leader lines running
horizontally, labels beside each part. The viewBox aspect changes with the composition
(roughly 1200×240 vs 400×900) so annotation text stays proportionally legible without
any scaling compensation. Labels must measure at least 11px at 375px — verify with
`getBoundingClientRect()`, not by eye.

Diagram linework uses `--diagram-stroke` (1px), not `--rule-weight` — 0.5px renders
sub-pixel and inconsistent inside a scaled viewBox.

**02 · We go first** — The offer, and the most persuasive section on the page. Eyebrow,
rule, headline and two body paragraphs at columns 1-7. Four steps as a stacked list with
monospace indices at columns 1-9 — no rules between them, because rules are section 04's
device and reusing them here makes the two sections rhyme. The guarantee closes the
section and carries its weight: its own `--bg-raised` block with a single `--signal-500`
left border, text at `--size-h3` in `--text-display`. The monospace qualifier sits below
and outside that block, on the section surface — `--steel-400` measures 4.66:1 on
`--steel-900` but only 3.76:1 on `--bg-raised`, so it cannot go inside.

**Accent budget for section 02** — exactly one: the guarantee's left border. No CTA in
this section. It has to be one, because the hero's CTA sits directly above it and a
viewport spanning that boundary would otherwise carry two before the section has said
anything.

**03 · Proof band** — Three metrics from real client work, monospace numerals at display
scale, hairline-separated. This section replaces the missing team photography and it is
load-bearing. **Numbers must be real and verifiable.** If a number doesn't exist yet,
the section waits — it does not get a placeholder.

**04 · The system** — No longer three parallel services. One system in three named
parts. Section intro paragraph, then three stacked rows: monospace index, display-scale
part name ("The front door" / "The engine" / "The mouth"), one paragraph, one short
closing line. Full-width hairline between rows. Explicitly not three cards in a row.

**05-06 · Case studies** — Asymmetric: screenshot at columns 1-6, text at 8-12 for the
first, mirrored for the second. Screenshot inset in a `--steel-800` frame with a
`--steel-600` hairline, `brightness(0.88) saturate(0.92)` at rest, lifting to full on
hover. This hover is one of the two budgeted motion moments. Each case study ends with
one number.

**07 · How it works** — Four steps, monospace-numbered. Numbering is justified here
because the content genuinely is a sequence; do not use numbered markers anywhere the
order doesn't carry information.

A dense ledger at full content width, heading on top at columns 1-8 like every other
section. Each step is one row — index at column 1, title at 2-4, description at 5-11,
hairline above, titles aligning down the page. Rows are contiguous, with no gap between
them, so the block reads as one table.

**Density is what separates 02, 04 and 07,** not layout tricks. Three enumerated lists
sit in a row on this page and each is set at a different pressure: 02 airy and narrow,
04 airy and large, 07 tight and small. That is the difference to preserve.

Two earlier versions failed and are worth recording:

- **Four columns across.** Read as a grid of cards. Four equal boxes of text side by
  side is a card grid whether or not the boxes have borders — removing the borders, the
  fills and the icons did not remove the shape.
- **A left-rail heading at columns 1-4 with the ledger at 6-13.** Crowded the heading
  against the steps, and the rail was too narrow for a headline this long. The page has
  a section-opening grammar and this section had no reason to break it.

The ledger's columns are pinned to explicit page grid spans, not sized with `auto` and
`1fr`. Sized tracks collapsed the description to about seven characters a line, because
`1fr` carries an automatic min-content floor and surrenders width to whatever sits
beside it.

**08 · Pricing** — Three tier blocks plus a fourth, price-less "Bigger operation?"
block. Hairline-bordered, zero radius, no shadow, no fill. The Growth tier is marked as
recommended using a `--steel-800` raised surface and a `--signal-500` hairline top
border — never a colored background fill. Tier names in JetBrains Mono, prices in
Archivo at `--size-h2`, feature lists in Instrument Sans. Build-fee line sits above the
tiers. Ads footnote below, in `--steel-400`. Stacks vertically below 700px in the same
order.

**Accent budget for section 08** — this is the constraint most likely to be violated.
Two appearances by design: the `--signal-500` hairline on the Growth tier, and one CTA
button at the bottom of the section. There is no CTA button inside individual tier
cards — one button for the whole section. If you find yourself wanting a third orange
element, that's the signal to stop.

**Currently one, not two.** The section CTA is outlined rather than filled, because
section 09's material band is blocked. That band is what this budget assumes: full-bleed
21:9 is roughly 600px tall at 1440px and makes it impossible for section 08's CTA and
section 10's to share a viewport. Without it they do share one, and two identical filled
buttons for the same action reads as a repeat rather than as a close — even at exactly
two accents, which is within budget. Outlined here and filled at the close ranks the two
instead of duplicating one. **Revert `Pricing.astro`'s CTA to `variant="primary"` when
the band lands.**

**09 · Material band** — Full-bleed, 21:9, zero padding, no text over it. Under 800KB.
Poster frame under reduced motion. Its only job is to give the page one moment of
physical warmth.

**10 · Final CTA** — The single centered element on the site. Display headline,
`--signal-500` button, monospace qualifier. No eyebrow — its absence is what marks this
section as terminal. This is the second and last appearance of the accent in this
viewport.

**11 · Footer** — Contact, McKinney TX, monospace revision stamp. Hairline above.

---

## Component inventory

Fourteen. Build these and nothing else. A fifteenth component is a conversation, not a
decision made mid-build.

1. `Nav`
2. `Eyebrow` — monospace label + optional right-aligned stamp
3. `Rule` — hairline, full-bleed or contained
4. `DisplayHeading` — h1/h2 with width axis applied
5. `ExplodedAssembly` — the hero SVG, animated
6. `MetricBlock` — one number + label
7. `ServiceRow` — index, name, description; the stacked editorial rows in section 04
8. `ScreenshotFrame` — chrome, filter, hover
9. `CaseStudy` — frame + copy + result, mirrorable
10. `StepRow` — number, title, description. Serves both numbered lists on the page via
    a `variant` prop: `stacked` for section 02, `column` for section 07. One component,
    two forms, so the difference between those sections is a deliberate decision rather
    than an accident
11. `Button` — primary (filled) and secondary (outlined)
12. `Footer`
13. `PriceTier` — tier block, recommended state via raised surface + hairline
14. `PriceFeatureList` — feature list inside a tier
### Shell and development pages

The fourteen above are page *sections*. These are separate and permanent:

- `src/layouts/Base.astro` — the shell. Holds `<head>`, meta, the three
  `@fontsource-variable` imports, and the `tokens.css` import. Every page wraps
  in it. Fonts and tokens are never imported per-page.
- `src/pages/dev/typecheck.astro` — renders Archivo at `wdth` 62/100/118/125 plus
  samples of all three faces, to prove variable fonts are loading and not silently
  falling back to static.
- `src/pages/dev/assembly.astro` — isolated preview of `ExplodedAssembly` with a
  replay control and three states: default, reduced-motion, static final frame.

**`dev/` is routable locally, stripped at build time.** Files under `src/pages/dev/`
are real Astro routes on purpose, so they can actually be opened in a browser during
development — `npm run dev` serves them at `/dev/typecheck` and `/dev/assembly`. The
production build (`package.json`'s `build` script) deletes `dist/dev` after `astro
build` runs, so neither route reaches Cloudflare Pages. Both pages also carry
`<meta name="robots" content="noindex, nofollow">` as a second layer of protection.

**Do not underscore-prefix these files.** Astro excludes any `_`-prefixed file in
`src/pages/` from routing entirely, which would make them impossible to open in a
dev-server browser tab — the opposite of what they're for.

**These are permanent, not scratch.** Do not delete them once components are placed.
They are regression checks.
---

## Build sequence

Strictly in order. Each step is reviewed with the `design-review` skill and fixed
before the next begins.

1. `tokens.css` + font loading + a blank page. Verify fonts render and the width axis
   works before anything else — everything downstream depends on it.
2. `ExplodedAssembly` in isolation. This is the hardest and most important thing on the
   site. Build it alone, get it right, then place it.
3. Hero around the assembly.
4. Nav + Footer — bookends make the page feel real early.
5. Proof band.
6. Case studies (both).
7. Services + How it works.
8. Pricing.
9. Material band.
10. Final CTA.
## Step 11 — Launch review

Run once, after every section is built and individually reviewed. This pass exists
to catch what per-section review structurally **cannot**: violations that only
appear when sections sit next to each other, and behavior that only appears in a
production build.

Nothing ships until every blocker here clears.

### A · Viewport-level constraints

Per-section review checked sections in isolation. These are cross-section.

- [ ] **Accent budget, scrolled.** Scroll the full page slowly at 1440px, pausing
      every half viewport. Count `--signal-500` appearances *on screen* at each
      stop. Max two. A viewport spanning two sections can carry one accent from
      each and pass both section reviews while failing here. Repeat at 375px,
      where sections stack and pairings differ.
- [ ] **Section padding variety.** Confirm all three of `--space-2xl / 3xl / 4xl`
      are actually in use and assigned by weight. Uniform rhythm is a tell.
- [ ] **Heading order.** Exactly one `<h1>`. No skipped levels top to bottom.
- [ ] **Centered elements.** Exactly one — the final CTA. Everything else asymmetric.
- [ ] **Rules.** Every hairline separates something. Delete any that separate nothing.

### B · Responsive

Test at 375, 768, 1024, 1440, and 1920.

- [ ] No horizontal scroll at any width
- [ ] No clipped or overlapping text
- [ ] Tap targets ≥ 44px at 375px
- [ ] ExplodedAssembly flips composition at its 700px container breakpoint, in the
      real hero column — not just on `/dev/assembly`
- [ ] Assembly annotation text measures ≥ 11px at 375px (`getBoundingClientRect()`)
- [ ] Screenshot frames never exceed 60% of section width
- [ ] Pricing tiers stack in the correct order below 700px

### C · Accessibility

- [ ] Tab the entire page. Every interactive element has a **visible** focus ring
      against its actual background — verify the primary button specifically
- [ ] Skip link is first in tab order and appears on focus
- [ ] Focus order matches visual order
- [ ] `prefers-reduced-motion` verified at OS level, not by code reading or media
      query emulation. Windows Settings → Accessibility → Visual effects →
      Animation effects off. Assembly must render settled; no motion anywhere
- [ ] Contrast measured, not estimated. `--steel-400` on `--steel-900` is the
      tightest pair. Minimum 4.5:1
- [ ] Every content image has meaningful `alt`; decorative images `alt=""`
- [ ] Assembly SVG has `role="img"`, `<title>`, `<desc>`
- [ ] Page is usable at 200% browser zoom

### D · Performance

Run against `npm run build && npm run preview`, never the dev server.

- [ ] Lighthouse 100 on performance, mobile and desktop
- [ ] Zero unnecessary `client:*` directives — each surviving one justified in writing
- [ ] Material band under 800KB. Poster frame present. `preload="none"`
- [ ] **Grain scroll paint.** DevTools → Performance → record a scroll over a
      `.grain-surface` section. Check for layout/paint spikes. `mix-blend-mode`
      forces backdrop reads and can't cheaply promote to a GPU layer. If jank
      appears: drop to `soft-light`, then remove the blend mode entirely and
      tune `--grain-opacity`. Either fallback is visually near-identical
- [ ] No layout shift. Fonts self-hosted, images have explicit dimensions
- [ ] **Confirm zero third-party font requests** in the Network tab. If
      `fonts.googleapis.com` appears, self-hosting isn't working
- [ ] Archivo width axis renders correctly in the **production build**, not just dev

### E · Content and copy

- [ ] `npm run check:copy` passes — no `[[PH:` markers anywhere in `src/`
- [ ] Every number on the page is verifiable by a phone call to a client
- [ ] Both case study clients have seen and approved their section
- [ ] No banned words. No exclamation points. Sentence case throughout
- [ ] Offer is described as one system, never as a menu of services
- [ ] All copy matches `docs/copy.md` verbatim

### F · Build hygiene

- [ ] `dist/dev` is absent from the production build — verify, don't assume
- [ ] `[data-ph]` outline rule absent from production CSS
- [ ] Real `<title>` and meta description
- [ ] OG image present and rendering correctly in a link preview
- [ ] Favicon renders at 16px and is legible
- [ ] No console errors or warnings

### G · Cross-browser

- [ ] Chrome, Firefox, Safari — desktop
- [ ] Safari iOS, Chrome Android — real devices, not emulation
- [ ] Safari specifically: container queries on the assembly, `mix-blend-mode`
      on grain, and variable font axis support

### H · The final question

Screenshot the full page. Look at it cold, as if you'd never seen it.

**Would this pass as the work of a professional web designer, or does it read as
generated?** If any section reads as generated, name which and why, and fix it
before launch. This is the question the entire project exists to answer.

---

## Blocked on content

The build cannot finish without these. Get them moving in parallel, starting now.

- **Two case studies with real numbers.** Donovan (epoxy) and Marie (Crafty Cakery) are
  the obvious candidates. Needs: what was broken, what got built, what changed, one
  number. A short call with each gets you both.
- **Three proof-band metrics.** Real and verifiable.
- **Client site screenshots** at 2x, cropped consistently.
- **Final headline and all body copy.** Copy is written before layout, not fitted into
  it afterward.
- **Material band footage**, graded and under budget.
- **Photography of the two of you.** Still not on the list and still the single highest
  impact asset available. Two hours with a local photographer. Book it.
