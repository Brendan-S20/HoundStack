# HoundStack — Master Work Brief

**The brief lives in the app repo, not here:**
[`Brendan-S20/pal-primer` → `docs/MASTER_BRIEF.md`](https://github.com/Brendan-S20/pal-primer/blob/main/docs/MASTER_BRIEF.md)

It is a single ledger covering **both** repos — the app (`pal-primer`) and this
marketing site (`HoundStack`). The MKT-n series in it refers to work in this
repo.

This is a pointer rather than a copy on purpose. The brief is versioned and
round-trips owner → Claude Code → QA → owner, and two copies of a status ledger
in two repos would drift apart within one cycle. One file, one version number.

## Current MKT status (v1.7, 2026-07-31)

| ID | Status | Note |
|---|---|---|
| MKT-1 | 🟢 Fixed | Q-13 answered — every add-on ships at launch. The site lists the 6 real add-ons with real prices; the 3 phantom SKUs are gone. |
| MKT-2 | 🟢 Fixed | The two unverified AI features are badged "Coming soon" rather than described as shipping. |
| MKT-3 | 🟢 Fixed | The four tier cards did not line up — 117px of divider drift at 1280px, because each card sized itself and the price/allowance/blurb wrap to different line counts per tier. Cards are subgrids sharing the outer grid's row tracks now, so alignment holds by construction with no magic heights to go stale. |
| MKT-4 | 🟢 Fixed | Contact form wired to the real Formspree endpoint, with `_subject` and a `form` field so both forms are distinguishable in one inbox. |
| MKT-5 | 🔵 Open | `/privacy` and `/terms` say "Draft pending legal review". **Needs you** — resolve before taking payments. |
| MKT-6 | 🟠 Part-built | SEO gaps closed: a double-escaped title, TWO identical FAQPage blocks, four separate Organization nodes and two contradicting SoftwareApplication entities, all now single-`@id`. Offers say PreOrder, not InStock — nothing is buyable yet. **Analytics needs you:** Plausible is installed and firing events; registering the domain and creating the account is an owner action. |
| MKT-7 | 🔵 Open | Real product screenshots. **Needs you** — the placeholders are the last obviously-unfinished thing a visitor sees. |
| MKT-8 | ⚪ Deferred | `/customers` stub — fine for launch. |
| MKT-9 | 🟢 Fixed | Annual billing was already built on BOTH sides — the app has the interval toggle and switch confirmation, this site has the monthly/yearly switch. What no ledger entry caught is that they disagreed on the *number*: this site sold 15% off while the app charges ten months for twelve, which is 16.7%. Each was internally consistent, so neither side could reveal it alone. See BUG-45 in the full brief. |

**Also corrected here:** an earlier version of this note said `annual_plan_prices`
was applied live and that "the gap was only ever here". There is no
`annual_plan_prices` table — the annual columns live on `platform_plans` — and
the gap was on both sides.

**Open decision that affects this repo:** `SITE.url` is `www.houndstack.com`, so
every canonical URL published is the www form, while `robots.txt`, Plausible's
`data-domain` and the README's deploy note all say the apex `houndstack.com`.
Canonicals pointing at a host that redirects, and analytics keyed to a domain
that never loads, are both silent failures. One line to fix once you say which
hostname is authoritative.
