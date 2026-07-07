# HoundStack marketing site

Astro static site for houndstack.com. Built July 2026 against `houndstack-marketing-site-brief.md`.

## Commands

- `npm run dev` - dev server at localhost:4321
- `npm run build` - generates `public/og.png` if missing, then builds to `dist/`
- `npm run preview` - serve the production build locally

## Deploying to Vercel

Zero config: import the repo in Vercel, framework preset "Astro". Build command `npm run build`, output `dist`. Set the production domain to `houndstack.com`.

## Before launch, in order

1. **Swap the form endpoints.** `src/lib/site.ts` has two placeholder Formspree IDs (`REPLACE_CONTACT_FORM_ID`, `REPLACE_ACCESS_FORM_ID`). Create two Formspree forms (one per page so conversion events stay separate) and paste the real endpoints. Later, point these at the real signup pipeline; the forms post plain FormData and expect a 2xx.
2. **Add houndstack.com to Plausible.** The tracking script is already on every page (`data-domain="houndstack.com"`, outbound links extension). Register the site in Plausible and add `Contact Submitted` and `Request Access Submitted` as goals.
3. **Google Search Console.** Verify the domain, then submit `https://houndstack.com/sitemap-index.xml`.
4. **Validate structured data** with Google's Rich Results Test on `/`, `/pricing`, one feature page, one switch page, and one blog post.
5. **Legal review.** `/privacy` and `/terms` are drafts and say so in the page copy ("Draft pending legal review"). Remove that line once counsel signs off.

## Swapping in real product screenshots

Feature pages use stylized HTML/CSS recreations of product UI (the `MockFrame` component) because the live app is not rebranded yet. To replace one, swap the `<MockFrame>` block for an `<img>` with explicit width/height, `loading="lazy"`, and descriptive alt text (already written on each MockFrame's `label` prop).

## Content that is intentionally absent

Per the launch decisions on July 6, 2026: no testimonials, no stat counters, and `/customers` is a stub, because no real customer quotes or verified metrics exist yet. Do not add `Review`/`AggregateRating` schema until real reviews exist. QuickBooks is marked "coming soon" on `/integrations`; flip it to live only when the sync ships. Native iOS/Android apps are marked "coming soon" on `/features/field-app`; swap the placeholder badges for real store links when the apps are live. Multi-language (English/Spanish) support is deliberately not mentioned anywhere: it was raised in the feature reconciliation but never confirmed live in the product. If confirmed, it belongs on `/features/field-app` as a crew-facing feature.

## Pricing model (rebuilt July 2026)

The original active-client bands (Free/Fetch/Scoop/Haul/Pack Leader/Kennel) were replaced by complexity tiers: Launch $79 (3 active employees included), Growth $199 (10), Scale $449 (30), Enterprise by contract for franchise/multi-brand parent-child structures. Overage is $10 per additional active employee per month; annual billing is 15% off; every account starts with a 60-day time-based free trial (no permanent free tier anymore). "Never charged per seat, ever" was retired sitewide in favor of the precise claim: first 3 teammates included, $10 flat after. All numbers live in `src/lib/site.ts`; the estimator, plan comparison, and Offer schema read from it.

Pricing-page add-on marketplace lists only verified-shipped SKUs (AI Receptionist, AI Business Advisor, Referral Programs, Franchise Management/Regional Dashboards). Known pending items, do not add without verification: AI Dispatcher and AI Marketing Assistant were broken at last direct test (also still described on `/features/ai-tools`, retest and reconcile); API access/webhooks/SSO/white-label/audit logs/multi-brand were never confirmed built, so the pricing page marks API "coming soon" and the Enterprise section leads with franchise rollup only.

## Structure

- `src/lib/site.ts` - site constants, nav, plans, overage rate, trial length (single source for the estimator and pricing page)
- `src/lib/competitors.ts` - all copy for the five `/switch/*` pages
- `src/content/blog/` - blog posts (markdown, see `src/content.config.ts` for frontmatter)
- `src/layouts/BaseLayout.astro` - head/SEO/schema/analytics on every page
- `src/layouts/FeatureLayout.astro` - shared shell for feature deep dives
- `scripts/generate-og.mjs` - builds the social share image from the logo lockup
- `src/assets/*-trim.svg` - logo copies with corrected viewBoxes (originals have a square canvas with heavy whitespace); the site uses the trimmed ones
