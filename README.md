# HoundStack marketing site

Astro static site for houndstack.com. Built July 2026 against `houndstack-marketing-site-brief.md`.

## Commands

- `npm run dev` - dev server at localhost:4321
- `npm run build` - generates `public/og.png` if missing, then builds to `dist/`
- `npm run preview` - serve the production build locally

## Deploying to Vercel

Zero config: import the repo in Vercel, framework preset "Astro". Build command `npm run build`, output `dist`. Set the production domain to `houndstack.com`.

## Before launch, in order

1. ~~**Swap the form endpoints.**~~ Done (MKT-4). Both forms post to one real Formspree endpoint; `LeadForm` sends `_subject` and a `form` field so contact and early-access submissions are still tellable apart in a shared inbox. Split them onto separate endpoints if contact volume ever warrants it.
2. **Add houndstack.com to Plausible.** *(Still outstanding — needs the owner's account.)* The tracking script is already on every page (`data-domain="houndstack.com"`, outbound links extension) and the custom events already fire from the code: `Contact Submitted` and `Request Access Submitted` (`LeadForm`), `Popup Shown` (`GetStartedPopup`), `Roadmap Vote` (`/roadmap`). Register the site in Plausible and add those as goals; until then the events are sent and dropped. Note the `data-domain` is the apex while `SITE.url` — and therefore every canonical — is `www`; make the Plausible site name match whichever host actually serves the site.
3. **Google Search Console.** Verify the domain, then submit `https://houndstack.com/sitemap-index.xml`.
4. **Validate structured data** with Google's Rich Results Test on `/`, `/pricing`, one feature page, one switch page, and one blog post.
5. **Legal review.** `/privacy` and `/terms` are drafts and say so in the page copy ("Draft pending legal review"). Remove that line once counsel signs off.

## Swapping in real product screenshots

Feature pages use stylized HTML/CSS recreations of product UI (the `MockFrame` component) because the live app is not rebranded yet. To replace one, swap the `<MockFrame>` block for an `<img>` with explicit width/height, `loading="lazy"`, and descriptive alt text (already written on each MockFrame's `label` prop).

## Content that is intentionally absent

Per the launch decisions on July 6, 2026: no testimonials, no stat counters, and `/customers` is a stub, because no real customer quotes or verified metrics exist yet. Do not add `Review`/`AggregateRating` schema until real reviews exist. QuickBooks is marked "coming soon" on `/integrations`; flip it to live only when the sync ships. Native iOS/Android apps are marked "coming soon" on `/features/field-app`; swap the placeholder badges for real store links when the apps are live. Multi-language (English/Spanish) support is deliberately not mentioned anywhere: it was raised in the feature reconciliation but never confirmed live in the product. If confirmed, it belongs on `/features/field-app` as a crew-facing feature.

## Pricing model (rebuilt July 2026)

The original active-client bands (Free/Fetch/Scoop/Haul/Pack Leader/Kennel) were replaced by complexity tiers: Launch $79 (3 active employees included), Growth $199 (10), Scale $449 (30), Enterprise by contract for franchise/multi-brand parent-child structures. Overage is $10 per additional active employee per month; annual billing is 15% off; every account starts with a 14-day time-based free trial (no permanent free tier anymore; `TRIAL_DAYS` in `src/lib/site.ts` is the one source). "Never charged per seat, ever" was retired sitewide in favor of the precise claim: first 3 teammates included, $10 flat after. All numbers live in `src/lib/site.ts`; the estimator, plan comparison, and Offer schema read from it.

Pricing-page add-on marketplace mirrors the app's `platform_addons` catalog (MKT-1): AI Receptionist, Managed texting, White-label client portal, White-label emails, Priority support, Done-for-you setup — each carrying its own availability badge, because three of them are not built yet. The three SKUs this paragraph used to name (AI Business Advisor, Referral Programs, Franchise Management/Regional Dashboards) do not exist in the app catalog and were removed; do not put them back. Known pending items, do not add without verification: AI Dispatcher and AI Marketing Assistant were broken at last direct test. On `/features/ai-tools` they appear as "Suggested dispatch reassignment" and "AI marketing content" (the product names never appear in the copy, which is why a name search misses them) and are now badged **Coming soon** rather than described as shipping. Retest them in the app and, only once confirmed working, drop the `status: 'coming soon'` flag on those two entries and the matching checklist badge; API access/webhooks/SSO/white-label/audit logs/multi-brand were never confirmed built, so the pricing page marks API "coming soon" and the Enterprise section leads with franchise rollup only.

## Structure

- `src/lib/site.ts` - site constants, nav, plans, overage rate, trial length (single source for the estimator and pricing page)
- `src/lib/competitors.ts` - all copy for the five `/switch/*` pages
- `src/content/blog/` - blog posts (markdown, see `src/content.config.ts` for frontmatter)
- `src/layouts/BaseLayout.astro` - head/SEO/schema/analytics on every page
- `src/layouts/FeatureLayout.astro` - shared shell for feature deep dives
- `scripts/generate-og.mjs` - builds the social share image from the logo lockup
- `src/assets/*-trim.svg` - logo copies with corrected viewBoxes (originals have a square canvas with heavy whitespace); the site uses the trimmed ones
