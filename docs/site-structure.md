# Site structure

One page. A single scroll, built to be read in a truck cab in ninety seconds.

Additional pages are a later decision. Do not build a blog, a services index, or an
about page until the single page is finished and converting.

---

## Page order

| # | Section | Padding | Purpose |
|---|---|---|---|
| 00 | Nav | — | Wordmark, three links, one CTA |
| 01 | Hero | `--space-4xl` | The claim + the exploded assembly |
| 02 | Proof band | `--space-2xl` | Three real numbers |
| 03 | The system | `--space-3xl` | One machine, three parts — front door, engine, mouth |
| 04 | Case study 01 | `--space-3xl` | Screenshot + real result |
| 05 | Case study 02 | `--space-3xl` | Screenshot + real result |
| 06 | How it works | `--space-2xl` | Four steps |
| 07 | Pricing | `--space-3xl` | Three tiers + a custom block |
| 08 | Material band | `0` | Full-bleed texture |
| 09 | Final CTA | `--space-4xl` | Only centered element on the site |
| 10 | Footer | `--space-2xl` | Contact, location, revision stamp |

Note the padding column: three distinct values, assigned by weight. Uniform section
spacing is a tell — this is the fix, and it must survive review.

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

**02 · Proof band** — Three metrics from real client work, monospace numerals at display
scale, hairline-separated. This section replaces the missing team photography and it is
load-bearing. **Numbers must be real and verifiable.** If a number doesn't exist yet,
the section waits — it does not get a placeholder.

**03 · The system** — No longer three parallel services. One system in three named
parts. Section intro paragraph, then three stacked rows: monospace index, display-scale
part name ("The front door" / "The engine" / "The mouth"), one paragraph, one short
closing line. Full-width hairline between rows. Explicitly not three cards in a row.

**04-05 · Case studies** — Asymmetric: screenshot at columns 1-6, text at 8-12 for the
first, mirrored for the second. Screenshot inset in a `--steel-800` frame with a
`--steel-600` hairline, `brightness(0.88) saturate(0.92)` at rest, lifting to full on
hover. This hover is one of the two budgeted motion moments. Each case study ends with
one number.

**06 · How it works** — Four steps, monospace-numbered. Numbering is justified here
because the content genuinely is a sequence; do not use numbered markers anywhere the
order doesn't carry information.

**07 · Pricing** — Three tier blocks plus a fourth, price-less "Bigger operation?"
block. Hairline-bordered, zero radius, no shadow, no fill. The Growth tier is marked as
recommended using a `--steel-800` raised surface and a `--signal-500` hairline top
border — never a colored background fill. Tier names in JetBrains Mono, prices in
Archivo at `--size-h2`, feature lists in Instrument Sans. Build-fee line sits above the
tiers. Ads footnote below, in `--steel-400`. Stacks vertically below 700px in the same
order.

**Accent budget for section 07** — this is the constraint most likely to be violated.
Exactly two appearances: the `--signal-500` hairline on the Growth tier, and one CTA
button at the bottom of the section. There is no CTA button inside individual tier
cards — one button for the whole section. If you find yourself wanting a third orange
element, that's the signal to stop.

**08 · Material band** — Full-bleed, 21:9, zero padding, no text over it. Under 800KB.
Poster frame under reduced motion. Its only job is to give the page one moment of
physical warmth.

**09 · Final CTA** — The single centered element on the site. Display headline,
`--signal-500` button, monospace qualifier. This is the second and last appearance of
the accent in this viewport.

**10 · Footer** — Contact, McKinney TX, monospace revision stamp. Hairline above.

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
7. `ServiceRow` — index, name, description
8. `ScreenshotFrame` — chrome, filter, hover
9. `CaseStudy` — frame + copy + result, mirrorable
10. `StepRow` — number, title, description
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
11. Full review at 1440 / 768 / 375. Lighthouse. Keyboard pass. Reduced-motion pass.

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
