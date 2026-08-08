# A2P compliance scanner fixes

Three changes. The scanner reads raw HTML at each URL — anything inside the
cross-origin GHL iframe is invisible to it, which is why the opt-in form checks
fail despite the text being visibly on the page.

---

## 1 · /contact — add a consent block OUTSIDE the iframe

Goes **above** the form embed, in your own Astro markup, so the scanner reads it.
This is the fix for all five Opt-in Form failures at once.

### Heading
Before you submit

### Body

> Giddens Systems will only text you if you check one of the consent boxes below.
> Checking them is optional — the form submits either way, and consent to receive
> text messages is never a condition of purchase.
>
> **Transactional messages** — updates about your inquiry, appointment
> confirmations and reminders, and service updates.
>
> **Promotional messages** — occasional offers and news about our services, only
> if you check the second box.
>
> Message frequency varies. Message and data rates may apply. Reply STOP at any
> time to opt out, or HELP for help. You must be 18 or older to consent. Carriers
> are not liable for delayed or undelivered messages.
>
> See our Privacy Policy and Terms of Service.

Style it as ordinary prose at `--text-muted`, `--size-small`, capped at
`--measure`. Both policy links go to `/privacy` and `/terms`.

**Every phrase the scanner looks for is in that block:** business name, opt-out
instructions, message frequency, message type, and data rates.

---

## 2 · /privacy — add a Data Security section

Insert after "How we share information" and before "Data retention."

### Data security

We take reasonable and appropriate measures to protect your personal information
from unauthorized access, disclosure, alteration, and destruction. These include
encryption of data in transit using industry-standard TLS, access controls
limiting who within our organization can view your information, and vetting the
third-party service providers who process data on our behalf.

No method of transmission or storage is completely secure, so we cannot guarantee
absolute security. If we become aware of a data breach affecting your personal
information, we will notify you and any relevant authorities as required by
applicable law.

You can request deletion of your information at any time by emailing
grant@giddens.systems.

---

## 3 · /terms — add an SMS Program section

Insert after "Services" and before "Fees and payment." This one section clears
four of the Terms failures.

### SMS messaging program

**Program description.** Giddens Systems operates an SMS messaging program for
customers and prospective customers who have given express written consent. We
send two categories of message:

- **Transactional and informational** — appointment confirmations and reminders,
  follow-ups on quotes and proposals, project updates, and responses to inquiries
- **Promotional** — occasional offers and announcements about our services, sent
  only to contacts who separately consented to marketing messages

**How to join.** You opt in by submitting the contact form at
giddens.systems/contact and checking one or both of the optional consent
checkboxes. Consent is not a condition of purchase, and the form can be submitted
without consenting.

**Message frequency.** Message frequency varies based on your activity and
inquiries. Most contacts receive fewer than ten messages per month.

**Cost.** Message and data rates may apply. Giddens Systems does not charge for
text messages; your mobile carrier's standard rates apply.

**How to opt out.** Reply **STOP** to any message to stop receiving texts from us.
You will receive one confirmation message and no further messages. You may rejoin
at any time by opting in again through our contact form.

**How to get help.** Reply **HELP** to any message for assistance, or contact us
at grant@giddens.systems.

**Supported carriers.** Our program is supported by major U.S. wireless carriers
including AT&T, Verizon Wireless, T-Mobile, and Sprint. Carriers are not liable
for delayed or undelivered messages.

**Age requirement.** You must be at least 18 years old to consent to receive text
messages from Giddens Systems. We do not knowingly send messages to anyone under 18.

**Privacy.** No mobile information will be sold, rented, or shared with third
parties or affiliates for marketing or promotional purposes. See our Privacy
Policy for full details.

---

## 4 · Opt-in Form URL — the field itself

If the scanner still fails the opt-in form checks after change 1, change the
**Opt-in Form URL** in the campaign to the direct GHL form URL instead of
`/contact`. That page is publicly accessible and its consent text is in the raw
HTML, so the scanner can read it.

Prefer `/contact` if it passes — it's your own domain and reads as a real
business page.

---

## After deploying

Re-run the compliance check. Expected result: Opt-in Form 8/8, Privacy Policy 7/7,
Terms of Service 7/7.

If any single item still fails, hover its info icon — the tooltip names the exact
phrase it's looking for, and it's usually a wording match rather than a missing
concept.
