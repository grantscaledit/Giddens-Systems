# Site copy — offer section + build order

Two things in this file:

1. **New section copy** — the Dormant Revenue Audit. This is now the offer and the
   site doesn't mention it anywhere.
2. **The build order** — which sections can be built today and which are blocked.

---

## First: unblock the build

`docs/copy.md` § 07 still contains `[[PH: $1,997 ]]` and `[[PH: $2,000 ]]`. The copy
guard fails the build while those exist.

**Decide and replace both.** Recommended: build fee `$1,997`, guarantee threshold
`$2,000`. Once those are real numbers the build passes.

---

## New section — insert as 02 · We go first

Sits directly after the hero, before everything else. This is the offer, and it's
the single most persuasive thing on the page.

**Section eyebrow:** fig. 02 / the offer

**Section headline**
We go first.

**Body**
Most shops ask for two thousand dollars up front and hand you a website. We don't.

Before we build anything, we run one campaign against the customers you already
have — past jobs, old quotes, anyone who ever called. Booked jobs land on your
calendar in the first two weeks. What that brings in pays for the system we build
next.

**The four steps** — monospace index, title, one line each

**01 — You hand us the list**
Past customers, old quotes, anyone who ever called for a price. However it's stored.

**02 — We build the campaign**
Loaded into a CRM we configure for you, cleaned, and written in your voice — not ours.

**03 — We run it**
Booked jobs on your calendar in the first two weeks. Not leads in an inbox.

**04 — It pays for the build**
Whatever the campaign produces covers the system we build next.

**The guarantee** — set apart, this is the closing line of the section
If that first campaign doesn't book at least $2,000 in work within 30 days, you
don't pay for the build. We finish it anyway.

**Qualifier, monospace, below the guarantee**
requires 150+ past customers · list delivered within 3 business days · leads
answered within 24 hours

---

## Hero subhead — replace

The hero currently describes the system. It should set up the offer.

**Headline** — unchanged:
Every missed call is a five thousand dollar job.

**Subhead** — replace with:
We book jobs from customers you already have, before you pay us to build anything.
What that brings in pays for the system we build next.

---

## Build order

### Buildable today

| # | Section | Status |
|---|---|---|
| 02 | We go first | Copy above, new |
| 03 | The system | Copy exists in copy.md § 03 |
| 06 | How it works | Copy exists in copy.md § 06 |
| 07 | Pricing | Copy in copy-pricing-update.md, three tiers |
| 09 | Final CTA | Copy exists in copy.md § 09 |

Five sections. Page goes from 2 to 7.

### Blocked

| # | Section | Blocked on |
|---|---|---|
| 02b | Proof band | Real numbers from Marie and AG Home Services |
| 04 | Case study — Marie | Testimonial collection |
| 05 | Case study — AG | Numbers, and honest "our own company" framing |
| 08 | Material band | Photograph never shot |

Leave gaps where these go. Do not build them with placeholder content — the guard
will block the deploy and the site would ship invented client results.

---

## Final section order once everything lands

```
00  Nav
01  Hero
02  We go first          ← the offer
03  Proof band           ← blocked
04  The system
05  Case study — Marie   ← blocked
06  Case study — AG      ← blocked
07  How it works
08  Pricing
09  Material band        ← blocked
10  Final CTA
11  Footer
```

Update `docs/site-structure.md` to match, including the padding column — three
distinct values assigned by section weight, never uniform.
