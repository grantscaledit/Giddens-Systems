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
| 02 | Proof band | `--space-2xl` | Three real numbers. Carries the credibility |
| 03 | What we build | `--space-3xl` | Three services, editorial list — NOT an icon grid |
| 04 | Case study 01 | `--space-3xl` | Screenshot + real result |
| 05 | Case study 02 | `--space-3xl` | Screenshot + real result |
| 06 | How it works | `--space-2xl` | Four steps. Numbered because it IS a sequence |
| 07 | Material band | `0` | Full-bleed texture. The one warm moment |
| 08 | Final CTA | `--space-4xl` | The only centered element on the site |
| 09 | Footer | `--space-2xl` | Contact, location, revision stamp |

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

**02 · Proof band** — Three metrics from real client work, monospace numerals at display
scale, hairline-separated. This section replaces the missing team photography and it is
load-bearing. **Numbers must be real and verifiable.** If a number doesn't exist yet,
the section waits — it does not get a placeholder.

**03 · What we build** — Three services as a stacked editorial list, not a grid. Each
row: large monospace index, display-scale service name, one paragraph. Full-width
hairline between rows. Explicitly not three cards in a row with icons.

**04-05 · Case studies** — Asymmetric: screenshot at columns 1-6, text at 8-12 for the
first, mirrored for the second. Screenshot inset in a `--steel-800` frame with a
`--steel-600` hairline, `brightness(0.88) saturate(0.92)` at rest, lifting to full on
hover. This hover is one of the two budgeted motion moments. Each case study ends with
one number.

**06 · How it works** — Four steps, monospace-numbered. Numbering is justified here
because the content genuinely is a sequence; do not use numbered markers anywhere the
order doesn't carry information.

**07 · Material band** — Full-bleed, 21:9, zero padding, no text over it. Under 800KB.
Poster frame under reduced motion. Its only job is to give the page one moment of
physical warmth.

**08 · Final CTA** — The single centered element on the site. Display headline,
`--signal-500` button, monospace qualifier. This is the second and last appearance of
the accent in this viewport.

**09 · Footer** — Contact, McKinney TX, monospace revision stamp. Hairline above.

---

## Component inventory

Twelve. Build these and nothing else. A thirteenth component is a conversation, not a
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
8. Material band.
9. Final CTA.
10. Full review at 1440 / 768 / 375. Lighthouse. Keyboard pass. Reduced-motion pass.

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
