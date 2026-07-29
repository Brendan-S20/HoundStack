# HoundStack — Master Work Brief

**The brief lives in the app repo, not here:**
[`Brendan-S20/pal-primer` → `docs/MASTER_BRIEF.md`](https://github.com/Brendan-S20/pal-primer/blob/main/docs/MASTER_BRIEF.md)

It is a single ledger covering **both** repos — the app (`pal-primer`) and this
marketing site (`HoundStack`). The MKT-n series in it refers to work in this
repo.

This is a pointer rather than a copy on purpose. The brief is versioned and
round-trips owner → Claude Code → QA → owner, and two copies of a status ledger
in two repos would drift apart within one cycle. One file, one version number.

## Current MKT status (v1.1, 2026-07-29)

| ID | Status | Note |
|---|---|---|
| MKT-1 | ❓ Blocked | Needs Q-13 — the app has zero purchasable add-ons today while this site advertises four, three of which don't exist in the app catalog. "Site must match app" needs a launch-catalog decision first. |
| MKT-2 | 🟢 Fixed | The two unverified AI features are badged "Coming soon" rather than described as shipping. |
| MKT-3 | 🔵 Open | Pricing table rendering. |
| MKT-4 | 🟠 Half-done | `REPLACE_ACCESS_FORM_ID` no longer exists — early access is live. Only `contactFormEndpoint` is still a placeholder, and it needs the real Formspree ID. |
| MKT-5 | 🔵 Open | `/privacy` and `/terms` say "Draft pending legal review". Resolve before taking payments. |
| MKT-6 | 🔵 Open | Analytics + SEO setup. |
| MKT-7 | 🔵 Open | Real product screenshots. |
| MKT-8 | ⚪ Deferred | `/customers` stub — fine for launch. |
| MKT-9 | 🔵 Open | Annual billing on site. Unblocked: `annual_plan_prices` IS applied live, so annual billing exists in the app — the gap was only ever here. |
