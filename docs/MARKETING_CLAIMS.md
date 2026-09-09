# What HoundStack can say

A claim is usable in marketing when something in the product proves it, and the
proof is named here. Write ads, emails and pages from this file rather than from
memory or from an older document.

Checked 8 September 2026 against pal-primer `main` at `e5cc758` and this site at
`d2f1adb`.

## Why this file exists rather than a section in the brief

`houndstack-marketing-site-brief.md` says its feature inventory was "verified
against the live product on July 6, 2026, so every feature listed below is
confirmed real, not assumed from an old spec." That was true when it was
written. By September, seven claims on the live site were contradicted by the
application, including "HoundStack takes zero cut", "two way SMS" and "email
from your own domain". All seven are corrected now.

A one-time verification rots because the product moves and the copy does not.
So this file records the proof, not just the conclusion. When a claim's proof
moves or disappears, the claim is the thing to change.

Follow the writing rules in section 0 of the brief. They still apply here.

## Payments

**Say:** payments run on your own Stripe account. Cards are 2.9% + 30 cents,
bank payments 0.8% capped at $5, billed by Stripe straight to you.
*Proof:* `src/lib/processing-fee.ts` holds these as constants
(`STRIPE_CARD_BPS` 290, `STRIPE_CARD_FIXED_CENTS` 30, `STRIPE_ACH_BPS` 80,
`STRIPE_ACH_CAP_CENTS` 500) and both the app and the site render from them.

**Say, but the wording is time-limited:** HoundStack adds nothing on top of
Stripe's rate. True as of 8 September (`PLATFORM_FEE_BPS = 0` in
`src/lib/platform-fee.ts`), and deliberately temporary. The fee returns once
charges route through the platform, at which point the posted price stays
2.9% + 30 cents and the difference becomes margin. Quote the rate. Never write
"we take nothing, ever", because that sentence has to be rewritten the day the
volume deal lands, on every page carrying it.

**Say:** you can pass card costs to the client at checkout, within the law.
*Proof:* surcharging is capped at 3% (`SURCHARGE_CAP_BPS`), never applied to
debit or prepaid cards, and off entirely in Connecticut, Massachusetts and
Puerto Rico (`SURCHARGE_BANNED_REGIONS`). The tenant attests they notified the
card networks. HoundStack cannot file that for them, because on a direct charge
the merchant is the tenant.

## Routing

**Say:** routes are ordered against the real road network, not straight lines.
On 23 real stops from a working day, routed twice with the same solver and both
results scored by real road time:

| Optimised on | Driving | Distance |
| --- | --- | --- |
| Straight lines | 159.2 min | 60.7 mi |
| Real roads | 141.6 min | 50.7 mi |
| Saved per truck per day | 17.6 min | 10.0 mi |

*Proof:* the experiment is recorded in the header of
`src/lib/road-legs.server.ts` in the app. Individual legs measured 1.44x to
2.42x the straight line against a model assuming a flat 1.45x.

This is the strongest number we own and it was measured rather than estimated.
Say it as time and fuel, not as software.

**Do not say:** "every route is road-measured." When the routing service cannot
be reached the planner falls back to estimates so the day can still be planned,
and the app now says so on screen. Road-measured routing is the method, not a
guarantee for every day.

## Messaging and email

**Say:** automated texts, meaning visit reminders, on-my-way messages, review
requests and portal login codes. These send today.

**Do not say:** "two way SMS", or "clients text your business number".
Conversational texting on the tenant's own number is blocked pending US carrier
(10DLC) registration. This claim appeared in six places on the site and is
corrected in all of them.

**Do not say:** "email from your own domain". Transactional email sends from
HoundStack with the tenant's business name in the from line. A custom sending
domain is part of the White label add-on and is arranged by hand after
purchase, not self-serve. *Proof:* `FROM_DOMAIN` is hardcoded in
`src/lib/email/enqueue.server.ts` with no per-organisation override.
The safe version is "email that carries your business name".

## Getting started

**Say:** import clients, properties and dogs from any CSV, with a dry run
before anything is written. *Proof:* `IMPORT_ENTITIES` in
`src/lib/imports.functions.ts` is exactly those three.

**Do not say:** "schedules and balances arrive ready to route". The importer
carries neither. They are set up in HoundStack after the import. Claiming
otherwise sets up the failure on day one of a migration, which is the worst
moment for one.

## Plans

Launch $79, Growth $199, Scale $449, Enterprise custom, per month. Checked
against the plan catalogue rather than the pricing page.

Every plan runs the full core product: scheduling, routing, invoicing,
payments, the field app and the client portal. The difference between tiers is
complexity tooling, not core capability, which is a true and unusually strong
line in this category.

Cross-zone reporting and custom permission sets are marked coming soon on Scale
and must not be sold as available.

The trial is time-based. Nothing inside it triggers a charge and no card is
needed to start.

## Blocked, because each is currently false in production

**"Works offline", "install it on your phone", "progressive web app".** This one
is easy to say by accident, because the offline machinery is built and correct
in the application repository. It is not being served: `/sw.js` answers 404 on
the live app, so there is no install prompt and no offline tolerance for
anybody. The `deployment` job in the app's CI watches this and is red until it
is fixed. When the deploy serves the worker this becomes one of the better
claims available, for a product used in driveways with one bar of signal. Not
before.

**"Public API", "regional performance reports", "custom permission sets".**
None of the three exists. `src/lib/entitlements.ts` says so in as many words.

## Keeping this true

Two rows above are time-limited and will go stale in the ordinary course of
work rather than through anybody's mistake: the platform fee wording, and the
offline claim. Check both before publishing anything built from this file.

When a claim here is contradicted by a change in the product, the copy is what
changes. The seven corrected in September were all found by reading the code
rather than by anyone noticing on the site, which is the only reliable
direction to check in.
