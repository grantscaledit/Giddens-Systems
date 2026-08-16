# Copy

Single source of truth for every word on the site. Components never invent copy —
they pull from here. If a section needs words that don't exist in this file, stop
and ask.

---

## ⚠ Placeholder protocol — read before using this file

Anything wrapped in `[[PH: ... ]]` is **invented** and must not ship.

Placeholders exist so the site can be built and judged as a whole before real
numbers land. They are not drafts to be polished — they are stand-ins to be
replaced.

**Build guard.** Add to `package.json`:

```json
"scripts": {
  "check:copy": "! grep -rn '\\[\\[PH:' src/ docs/copy.md --include='*.astro' --include='*.md' || (echo '\\n✗ PLACEHOLDER COPY FOUND — cannot ship\\n' && exit 1)",
  "build": "npm run check:copy && astro build && rm -rf dist/dev"
}
```

The production build **fails** while any placeholder remains, so Cloudflare Pages
rejects the deploy rather than publishing invented client results.

**Dev visibility.** In `Base.astro`, dev only:

```css
[data-ph] { outline: 1px dashed var(--signal-500); outline-offset: 2px; }
```

**Status:** 🔴 Placeholders present. Not deployable.

---

## Global

**Business name:** Giddens Systems
**Domain:** giddens.systems
**Location:** McKinney, Texas
**Service area:** DFW metroplex and North Texas

**Positioning.** One system, sold whole — not a menu of services. The website is
the front door, GoHighLevel is the engine, AI intake is the mouth. Never describe
these as three separate products. They are three parts of one machine, and the
machine is what's for sale.

**Voice.** Plain, specific, blunt. The way a good contractor talks — names the
thing, says what it costs, doesn't oversell. Numbers wherever numbers exist.
Sentence case. No exclamation points.

**Banned:** seamless, unlock, empower, leverage, transform, revolutionize,
cutting-edge, next-generation, game-changing, robust, elevate, supercharge,
effortless, solutions, synergy, holistic, bespoke, curated.

---

## Meta

**Title**
`Giddens Systems | Websites, CRM, and AI call intake — McKinney TX`

**Meta description**
One system that catches every lead: an SEO-built website, a CRM that holds the
whole pipeline, and AI intake that answers the calls you miss. For service
businesses across North Texas.

**OG title**
Every missed call is a five thousand dollar job.

**OG description**
Giddens Systems builds the machinery behind your revenue — website, CRM, and call
intake, as one system. McKinney, Texas.

---

## 00 · Nav

**Wordmark:** Giddens Systems

**Links** (monospace, lowercase)
- the system
- work
- pricing

**CTA:** Book an audit

---

## 01 · Hero

**Eyebrow left:** giddens.systems
**Eyebrow right:** fig. 01 / rev 2026.08

**Headline**
Every missed call is a five thousand dollar job.

**Subhead**
We book jobs from customers you already have, before you pay us to build anything.
What that brings in pays for the system we build next.

**CTA:** Book a systems audit
**Qualifier:** no charge / 30 min / mckinney tx

**Assembly labels** (in ExplodedAssembly component)
01 missed call · 02 ai intake · 03 qualify · 04 crm record · 05 booked job

---

## 02 · We go first

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

## 03 · Proof band

**Section eyebrow:** fig. 03 / proof

| Value | Label |
|---|---|
| `[[PH: 1,400+ ]]` | calls answered outside business hours |
| `[[PH: 90 sec ]]` | average response to a new lead |
| `[[PH: 19 days ]]` | average build, kickoff to live |

**Replacement rule:** every number must be one a client would confirm on a phone
call. If you can only verify two, ship two. Do not round up.

---

## 04 · The system

**Section eyebrow:** fig. 04 / the system

**Section headline**
Three parts. One machine.

**Section intro**
Most shops sell you a website, or a CRM, or an answering service, and leave you to
connect them. Nothing connects. The lead comes in one door and dies in another.
We build the whole thing as one system, wired together, or we don't build it.
We don't start by selling you a website. We start with the customers you already
have.

### 01 — The front door

A website built to be found. Real local SEO structure, service-area pages for
every town you work in, fast enough to load on a job site with two bars.

Not a brochure. The thing that puts you in front of someone searching at 9pm.

### 02 — The engine

Every lead lands in one place with the whole history attached — where they came
from, what they asked for, what you quoted, what happened. Pipelines, automatic
follow-up on quotes that went quiet, review requests that go out when the job is
done instead of three weeks later.

Built in GoHighLevel, configured around your jobs and your pricing. You own it.

### 03 — The mouth

An answering service takes a message. Ours asks what the job is, whether it's in
your area, and when you can come look at it — then puts it on your calendar and
drops the record in the pipeline.

Answers every call, including the one at 9pm on a Sunday.

---

## 05 · Case study — Donovan

**Eyebrow:** fig. 05 / case study
**Client:** `[[PH: Donovan Epoxy Works ]]` — epoxy flooring, `[[PH: Frisco TX ]]`

**Headline**
`[[PH: He was quoting from the top of a ladder. ]]`

**Body**
`[[PH: Donovan runs epoxy floors for garages and shops. Most of his leads came in
by phone while he was on a job — mask on, sprayer running, phone in the truck. He
was returning calls at 8pm and losing the ones who'd already booked someone else.

We rebuilt his site around the towns he actually works in, then put intake on his
main line. It answers, asks what kind of space and how many square feet, checks the
address against his service area, and books an estimate straight onto his calendar.
Everything lands in the pipeline with the photos the caller texted already attached.

He stopped returning calls at night. ]]`

**Result:** `[[PH: 3x more estimates booked per week, without adding a single lead source. ]]`
**Metric:** `[[PH: 41 → 6 ]]` — `[[PH: missed calls per month ]]`

**Screenshot alt:** `[[PH: Homepage of the Donovan Epoxy Works site, showing the estimate request form. ]]`

**Questions to get the real version:**
1. What was broken before — what specifically were you losing?
2. What did we build?
3. What changed — one number, even a rough one?
4. Would you say that on the phone to someone who called to check?

---

## 06 · Case study — Marie

**Eyebrow:** fig. 06 / case study
**Client:** `[[PH: Marie's Crafty Cakery ]]` — custom cakes, `[[PH: McKinney TX ]]`

**Headline**
`[[PH: Every order started as a DM and ended as a guess. ]]`

**Body**
`[[PH: Marie takes custom cake orders — weddings, birthdays, corporate. They came
in through Instagram DMs, Facebook messages, and texts from people who got her
number from a friend. Dates got double-booked. Deposits got forgotten. She was
answering the same three questions forty times a week.

We built an order intake form that asks them once: date, servings, design,
allergens, delivery. It checks her calendar before it lets anyone pick a date,
takes the deposit at submission, and drops the order into a pipeline she can see
from her phone while she's decorating.

She hasn't double-booked a Saturday since. ]]`

**Result:** `[[PH: Deposit collected on 94% of orders, up from roughly half. ]]`
**Metric:** `[[PH: 11 hrs ]]` — `[[PH: per week back from answering messages ]]`

**Screenshot alt:** `[[PH: Order intake form on the Marie's Crafty Cakery site, showing the date picker. ]]`

**Questions to get the real version:** same four as above.

---

## 07 · How it works

**Section eyebrow:** fig. 07 / process

**Section headline**
Four steps. Three weeks, usually.

**01 — Audit**
Thirty minutes on a call. We map where leads come in, where they stall, and where
they die. You get the map whether or not you hire us.

**02 — Build**
Site, pipeline, and intake, built against your actual jobs and your actual pricing.
You see it working before it touches a real customer.

**03 — Wire in**
We point your phone number, your forms, and your inbox at the system, and watch the
first week of live traffic with you.

**04 — Hand off**
A walkthrough, a written runbook, and a number to call. Monthly is month-to-month.
Nothing here is hostage.

---

## 08 · Pricing

**Section eyebrow:** fig. 08 / pricing

**Section headline**
Build it once. Keep it running.

**Section intro**
Every plan starts with the build: your website, your CRM, and your automations
configured around your actual jobs. The build is $1,997 — and it's the part we
put at risk. If the first reactivation campaign doesn't book at least $2,000 in
work within 30 days, you don't pay for it. Monthly is month-to-month after that.

### Foundation — $297/mo

You exist and you look legitimate.

For a newer or solo operator who still answers his own phone.

- SEO-built website, hosted and maintained
- CRM and pipeline configured to your jobs
- Google Business Profile setup and optimization
- Business email on your own domain
- Project photo gallery, organized by service
- Web chat widget with lead capture
- Automatic review requests
- Owner mobile app — run your pipeline from the truck
- SSL, backups, and uptime monitoring
- Monthly performance email
- Two site edit requests a month

### Growth — $497/mo

Nothing falls through the cracks. Most clients start here.

Everything in Foundation, plus everything that catches a lead the moment it comes in.

- AI call intake — answers, qualifies, books the estimate
- Missed-call text-back, instantly
- 60-second response on every form, message, and call
- Online booking against your real calendar
- Automatic appointment reminders
- Deposit collection by text
- Follow-up automation on quotes that go quiet
- One inbox for SMS, Facebook, Instagram, and Google

### Full System — $797/mo

You own your market.

Everything in Growth, plus the work that grows your share instead of holding it.

- Managed local SEO — Google Business Profile, citations, on-page
- Service-area pages for every town you work in, expanded quarterly
- Review response — we reply, you don't
- Quarterly reactivation campaigns against your customer list
- Call tracking and lead source reporting
- Monthly report and a 30-minute strategy call
- Priority support, same business day

### Bigger operation?

Multiple locations, custom integrations, higher call volume, or something that
isn't on this list — that's a conversation, not a plan. Tell us what you're running
and we'll scope it.

**CTA:** Book a systems audit

**Footnote**
Paid ads are handled separately and priced on their own. They need daily attention
and we'd rather quote that honestly than bury it in a plan.

---

## 09 · Material band

No copy over the band. Reserve if a caption is ever added, below the image, in
monospace: `fig. 09 / equipment marking`

---

## 10 · Final CTA

**Headline**
Let's find out what the phone is costing you.

**Body**
Thirty minutes, no charge, no pitch deck. We map your intake and show you where
leads are dying. If we're not the right fit, you keep the map.

**CTA:** Book a systems audit
**Qualifier:** no charge / 30 min / mckinney tx

---

## 11 · Footer

**Wordmark:** Giddens Systems

**Line 1:** Websites, CRM, and AI call intake for service businesses. One system.
**Line 2:** McKinney, Texas · Serving DFW and North Texas

**Contact**
- `[[PH: grant@giddens.systems ]]`
- `[[PH: 469-436-633]]`

**Links:** the system · work · pricing · contact · privacy

**Stamp:** giddens.systems / rev 2026.08
**Legal:** © 2026 Giddens Systems LLC

---

## Forms

**Heading:** Book a systems audit
**Sub:** Thirty minutes. We'll send a calendar link within one business day.

| Field | Label | Placeholder |
|---|---|---|
| name | Name | — |
| business | Business name | — |
| phone | Phone | — |
| email | Email | — |
| type | What kind of work do you do? | — |
| detail | Where do leads come in right now? | phone, website form, instagram, referrals… |

**Submit:** Send it
**Sending:** Sending…
**Success:** Got it. We'll be in touch within one business day.
**Failure:** That didn't go through. Call or text `[[PH: (469-436-6333) ]]` and we'll sort it out.

**Validation**
- Name: Need a name to put on the calendar.
- Phone: That doesn't look like a phone number.
- Email: That doesn't look like an email address.
- Required: This one's needed.

---

## System pages

**404**
Heading: `404 / no such part`
Body: That page isn't here. It may have moved, or the link may be wrong.
CTA: Back to the start

**500**
Heading: `500 / something broke on our end`
Body: Not your fault. Try again in a minute, or call us and we'll help directly.

---

## Accessibility strings

- Skip link: Skip to main content
- Nav landmark: Main navigation
- Assembly `<title>`: Lead capture system, exploded assembly
- Assembly `<desc>`: Five components on an axis — missed call, AI intake, qualify, CRM record, booked job.
- Replay control: Replay animation
- Logo link: Giddens Systems — home
- External link suffix: (opens in a new tab)

---

## Replacement checklist

- [ ] 03 — three proof numbers, verified
- [ ] 05 — Donovan: real name, city, story, result, metric
- [ ] 05 — screenshot captured and alt written
- [ ] 06 — Marie: real name, city, story, result, metric
- [ ] 06 — screenshot captured and alt written
- [x] 08 — build fee confirmed and final
- [ ] 10/11 — real email and phone
- [ ] Forms — real failure-path phone number
- [ ] `npm run check:copy` passes
- [ ] Both clients have seen and approved their case study before it goes live