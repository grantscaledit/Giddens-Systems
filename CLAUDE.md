# Giddens Systems — build constraints

Read `docs/creative-direction.md` before writing any component. It is the governing
document; this file is its enforcement.

The purpose of this site is to make a skeptical service-business owner trust two
brothers with the machinery that runs his revenue. Every decision serves that.

---

## Read first, every session

1. `docs/creative-direction.md` — the direction, locked
2. `src/styles/tokens.css` — every color, size, and duration you are allowed to use
3. `docs/site-structure.md` — what exists and what it's for

Do not begin a component before reading all three. Do not infer a value that isn't
in the tokens file — if you think one is missing, stop and ask.

---

## Stack

Astro, no UI framework. Zero client JS is the default and it is a feature, not an
accident — this site's performance is part of its sales argument. Any `client:*`
directive requires a written justification in the PR.

Fonts self-hosted via `@fontsource-variable`. No Google Fonts CDN request.
Deploy target: Cloudflare Pages.

---

## BANNED — non-negotiable

Every item here is either an AI-generation signature or a direct violation of the
direction. If you catch yourself writing one, stop and re-read the direction doc.

### Color
- `#000000`, `#FFFFFF`, or any near-black/near-white not in `tokens.css`
- Any Tailwind default palette color (`slate-*`, `gray-*`, `zinc-*`, `indigo-*`, `violet-*`)
- Any hex literal anywhere outside `tokens.css`
- Gradients of any kind — linear, radial, conic, mesh, text
- More than **two** appearances of `--signal-500` in a single viewport
- `--signal-700` used as a fill (pressed/active states only)
- Opacity used to fake a color that should be a token

### Layout and form
- `border-radius` above `2px`
- `box-shadow` of any kind. Depth comes from surface value, never from shadow
- `backdrop-filter`, glassmorphism, frosted panels, glow, neon
- Centered hero. Content is asymmetric — columns 1-7 or 4-12
- Three-column feature grid with icons in rounded squares
- Uniform section padding across the page. Use all three of `--space-2xl/3xl/4xl`
- Full-bleed client screenshots, or screenshots exceeding 60% of section width

### Type
- **Inter.** Anywhere. For any reason
- Display type at default width — always set `'wdth'` from `--display-width`
- Monospace for headlines, body copy, or decoration
- ALL CAPS outside the single primary CTA
- Any font size not in `tokens.css`
- More than three typefaces

### Motion
- More than the two budgeted moments (hero assembly, case study hover)
- Scroll-triggered fade-up or stagger reveals on sections
- Parallax, marquee, cursor followers, counting-up numbers
- Looping hero animation. The assembly plays **once**
- Any animation that doesn't disable under `prefers-reduced-motion`

### Content
- Lorem ipsum. If copy doesn't exist, stop and ask — do not invent placeholder claims
- Fake client logos, fake testimonials, invented metrics, "Trusted by" strips
- Icons standing in where proof should be
- Banned words: seamless, unlock, empower, leverage, transform, revolutionize,
  cutting-edge, next-generation, game-changing, robust, elevate, supercharge, effortless
- Exclamation points
- Emoji, anywhere, including in comments

### Assets
- Generated video for the hero or any diagram. Diagrams are inline SVG, always
- Material band over 800KB, grain overlay over 400KB
- Any video without `preload="none"`, a poster frame, and a reduced-motion fallback
- Stock photography

---

## REQUIRED

- Every color, size, spacing, and duration references a token
- Diagrams are inline SVG with `role="img"`, `<title>`, and `<desc>`
- Visible `:focus-visible` on every interactive element
- Responsive to 375px, tested — not assumed
- Meaningful `alt` on content images, `alt=""` on decorative
- Explicit `width`/`height` on every image (no layout shift)
- Semantic HTML. `<button>` for actions, `<a>` for navigation, real `<h1>`-`<h3>` order
- Text contrast ≥ 4.5:1. `--steel-400` on `--steel-900` is the tightest pair — verify it
- All copy comes from docs/copy.md. Never invent or draft copy."

---

## Working method

**Plan before building.** For any new section, write the structure and name the tokens
you'll use before writing markup. Post it. Wait.

**Build one section at a time.** Never scaffold the whole page in one pass. Sections
built in bulk converge toward the template average — which is exactly the failure mode
this document exists to prevent.

**Screenshot and look.** After each section, take a screenshot and actually examine it.
Code that reads correctly frequently looks wrong. If you cannot see the page, say so
rather than asserting it looks good.

**Run the review.** After each section, run the `design-review` skill against it and fix
what it finds before moving on. Build → review → fix. Not build → build → build.

**Watch CSS specificity.** Section and element selectors cancel each other out,
especially on padding and margin. Keep specificity flat; prefer a single class per
element over nested selectors.

---

## When you're unsure

Ask. Do not fill a gap with a reasonable-looking default — the reasonable-looking
default is the thing that makes a site look AI-generated. A question costs a minute.
A wrong assumption baked into six sections costs an afternoon.
