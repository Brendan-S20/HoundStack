# HoundStack Marketing Site: Full Rebuild Brief
Prepared for Fable 5. This replaces the current marketing site entirely (the pages currently live at pal-primer.lovable.app under Scoop CRM branding: home, services, pricing, about, contact). Nothing from that build carries over as-is. Verified against the live product on July 6, 2026, so every feature listed below is confirmed real, not assumed from an old spec.

---

## 0. Non-negotiable writing rules

Follow these on every page, every heading, every line of body copy, every button label.

- **No em dashes, anywhere.** Use a period, a comma, or a parenthetical instead. If a sentence needs an em dash to work, rewrite the sentence.
- No "it's not just X, it's Y" constructions.
- No "unlock," "elevate," "streamline," "seamless," "revolutionize," "game changing," "supercharge," or "leverage" used as a verb.
- No "whether you're a... or a..." openers.
- No "in today's fast paced world" or any variant of that framing.
- No rule of three lists in every single paragraph. Vary sentence length and structure. Real writing has some short sentences and some long ones, not a uniform ad cadence.
- No title case headlines. Sentence case only: "Run every visit from one clean app," not "Run Every Visit From One Clean App."
- No emoji anywhere, including as feature icons. The current site uses emoji (calendar, map, phone icons) as section markers. Replace with a proper line icon set that matches the logo's geometric style.
- Write like an operator who has actually run a route talking to another operator. Specific numbers over vague superlatives. "Cut office time from 3 hours a day to 45 minutes" beats "save time and boost efficiency."
- Every claim on the site needs to be a real, currently shipped feature (see the inventory in section 2) unless explicitly marked as a roadmap item in a clearly labeled "coming soon" context. Do not imply something works if it doesn't yet.

---

## 1. Brand assets to use

- Logo files: `HoundStackMain.svg` (icon only, use for favicon and app icon), `HoundStackText.svg` (compact horizontal lockup, use in the site header and footer), `HoundStackTextwLogo.svg` (full stacked lockup, use for the hero and social share image).
- Colors: navy `#142937` (primary text, primary buttons, nav), sage green `#5e845e` (accent, secondary CTA, the "Stack" half of the wordmark, used sparingly as a highlight color, not a background flood color).
- Pick one licensed or Google Fonts webfont with a geometric, humanist character that pairs with the wordmark's letterforms (something in the family of Inter, General Sans, or Söhne). Do not use a default system font stack for headings.
- The mark is abstract (a faceted geometric shape reading as a stylized H), not a literal dog illustration. Keep all supporting iconography abstract and geometric to match, not cartoon or clip art style.

---

## 2. Complete feature inventory (do not omit any of these)

This is the full, verified feature set. The current site only mentions a subset (Operations, Field crew, Billing, Growth). Everything below needs a home on the new site somewhere, either on a dedicated feature page or a clearly organized section.

**Scheduling and dispatch**
Recurring visits (weekly, biweekly, custom cadence, preferred weekdays), blackout dates with automatic bump forward, zone based pricing and routing by postal prefix, multi tech dispatch board with drag and drop assignment, one click route optimization with real drive time and ETA math, turn by turn handoff to Google Maps, weather aware automatic rescheduling.

**Field crew and the mobile app**
Mobile "My Day" view built for the truck, full offline visit completion with a photo upload queue that syncs when back online, required photo capture at completion with categories (before, after, issue), structured safety hazard fields shown before a tech opens a gate (aggressive dog, escape risk, invisible fence, dog in yard during service, bees or wasps, sharp objects, slippery surfaces), gate codes, tap to call, tap to navigate, in field upsell add ons.

**Billing and payments**
Free while an account has 3 or fewer active clients, no credit card required. Paid tiers priced by active client count only, never by seat, with unlimited staff on every plan including Free. Prepaid credit ledgers or postpaid invoicing. Stripe checkout, bring your own key, no markup taken on payment processing. Automatic overdue reminders. Skip reason billing rules (bill full, prorate, or waive depending on why a visit was skipped). Client portal for viewing and paying invoices.

**Commercial and HOA accounts**
Per unit monthly billing for apartment complexes, HOAs, and communities, distinct from residential per dog pricing. Pet waste station servicing routes (restock bags, empty bins, log service for the property manager). DNA compliance tooling: sample logging (pile sample or cheek swab), full chain of custody tracking, per dog registration with a registry ID, tied to named, breed tagged dog records.

**Growth and marketing**
Two way SMS built on Twilio. Transactional email sent from the business's own domain. Automatic Google review prompts after a completed visit. Referral codes with credit for both the referrer and the new client. Neighbor canvassing: a map based tool that seeds a list of nearby doors from an existing client's address, tracks each one through a status pipeline (to visit, contacted, interested, signed up, passed), and supports a walking mode for door to door canvassing.

**AI tools**
An in house AI receptionist built on Twilio and Claude, not a third party bolt on, that answers texts (and eventually calls) about pricing and availability and can book directly into the calendar. AI assisted marketing content generation for social posts, email blasts, and review responses. AI churn risk scoring across the active client base. AI suggested zone pricing based on drive time density, shown with the reasoning behind each suggestion. AI suggested dispatch reassignment. A weekly AI generated business digest summarizing revenue, completed visits, at risk clients, and one recommended action.

**Reporting**
Revenue and outstanding balance dashboards, accounts receivable aging, skip reason breakdowns, tech productivity, zone level activity and profitability, top clients by revenue, client cohort retention, lifetime value, and churn driver analysis.

**Operations**
Inventory tracking with low stock alerts and per tech assignment.

**Switching in**
Named, dedicated import tools for Sweep&Go, Jobber, Housecall Pro, Time To Pet, and GorillaDesk, plus a generic CSV importer for anything else, each with a field mapping preview and a dry run summary before anything is written.

**Scale**
Multi location and franchise rollup with automatic royalty billing and a franchisor level dashboard across every location.

**Roles**
Separate, properly scoped experiences for Owner, Office Manager, Dispatcher, and Tech, each seeing only what their job needs.

---

## 3. Full sitemap

| Path | Purpose | Primary target keyword |
|---|---|---|
| `/` | Home, full positioning and overview | pet waste removal software |
| `/features` | Hub page linking to every feature deep dive below | pooper scooper software features |
| `/features/scheduling-and-routes` | Recurring visits, zones, dispatch, route optimization, weather rescheduling | route optimization software for pet waste removal |
| `/features/field-app` | Mobile tech app, offline mode, photo capture, safety hazard fields | field service mobile app for technicians |
| `/features/billing` | Pricing model, Stripe, prepaid or postpaid, skip reason billing | pet waste removal invoicing software |
| `/features/commercial-and-hoa` | Per unit billing, waste stations, DNA compliance | HOA pet waste compliance software |
| `/features/neighbor-referrals` | Neighbor canvassing and referral tools | pooper scooper referral marketing |
| `/features/ai-tools` | AI receptionist, AI dispatch, AI marketing, weekly digest | AI receptionist for service businesses |
| `/features/reporting` | Analytics and reporting suite | field service business reporting software |
| `/integrations` | Stripe, Twilio, Google Maps, QuickBooks, sync details | pet waste removal software integrations |
| `/pricing` | Full plan breakdown with an interactive calculator | pooper scooper software pricing |
| `/switch` | Hub page for migration, links to each competitor page below | switch from pet waste removal software |
| `/switch/from-sweep-and-go` | Direct comparison and migration path | Sweep and Go alternative |
| `/switch/from-jobber` | Direct comparison and migration path | Jobber alternative for pet waste removal |
| `/switch/from-housecall-pro` | Direct comparison and migration path | Housecall Pro alternative |
| `/switch/from-time-to-pet` | Direct comparison and migration path | Time To Pet alternative |
| `/switch/from-gorilladesk` | Direct comparison and migration path | GorillaDesk alternative |
| `/for/pooper-scooper-companies` | Primary buyer persona landing page | pooper scooper business software |
| `/for/hoa-and-property-managers` | Secondary buyer persona, DNA compliance and waste stations angle | dog waste DNA testing for HOAs |
| `/for/franchise-owners` | Multi location and royalty billing angle | franchise pet waste removal software |
| `/customers` | Testimonials and case studies as they accumulate | pet waste removal software reviews |
| `/about` | Company story and positioning | (brand term, not keyword driven) |
| `/blog` | Content hub, see section 7 for the topic list | pet waste removal business tips |
| `/security` | Trust and data handling page | is [product] secure |
| `/contact` | Demo booking form | book a demo |
| `/request-access` | Self serve signup starting point, different intent than contact, see note below | start a free account |
| `/privacy` | Privacy policy | (legal, not keyword driven) |
| `/terms` | Terms of service | (legal, not keyword driven) |

Note on `/contact` versus `/request-access`: keep both, but make the difference obvious in the copy. `/contact` is "talk to a person before you commit," aimed at teams above the free tier who want a walkthrough. `/request-access` is "start now, no call needed," aimed at solo operators signing up for the free tier. Do not let them read as the same form twice.

---

## 4. SEO technical requirements

- Unique, hand written title tag and meta description on every single page in the sitemap above. No template stamping the same description everywhere.
- Exactly one H1 per page, matching that page's primary target keyword naturally, not stuffed.
- Structured data: `Organization` schema sitewide, `SoftwareApplication` schema on the home and pricing pages, `Offer` schema for each pricing tier on `/pricing`, `FAQPage` schema anywhere there is a visible FAQ block (pricing page, and any feature page that has one), `BreadcrumbList` schema on every feature and switch page, `Article` schema on every blog post.
- Do not add `Review` or `AggregateRating` schema until there are real, verifiable customer reviews to back it. Fabricated or placeholder ratings are a real risk here, not a shortcut.
- Auto generated `sitemap.xml` covering every page above, submitted through Google Search Console after launch.
- `robots.txt` allowing full crawl of the marketing site. The actual product lives on a separate subdomain (`app.houndstack.com`) and is naturally excluded since it sits behind authentication, so there is nothing to disallow here.
- Canonical tag on every page, pointing at itself unless there is a genuine duplicate content reason not to.
- Open Graph and Twitter Card tags on every page, with a real social preview image built from `HoundStackTextwLogo.svg`, not a generic placeholder.
- Core Web Vitals: images served as WebP or AVIF with explicit width and height attributes and lazy loading below the fold, minimal render blocking JavaScript, fonts preloaded.
- Semantic HTML5 throughout: real `header`, `nav`, `main`, `footer`, `article`, and `section` elements, not `div` soup.
- Descriptive alt text on every image, especially real product screenshots. "Dispatch board showing five technician routes with drive time estimates," not "screenshot."
- Internal linking: every feature page links to `/pricing` and to the most relevant `/switch` page. Every `/switch` page links back to the specific feature pages that address that competitor's weak spot. Every blog post links to at least one relevant feature page.
- Mobile first, fully responsive, with a real navigation drawer on small screens. The prior version of this site had no mobile navigation at all (the header dropped every link below desktop width). This must not happen again. Test at 390px width before calling any page done.

---

## 5. Motion and interactivity

The brief is for a site that feels alive, not a static brochure. Specifics:

- Hero section: the "today's route" preview should feel like a live product, not a screenshot. Stops check off with a small animated transition, one stop shows a pulsing "now" state, and the whole widget should feel like it is quietly running in real time.
- Animated stat counters: numbers like "10,000+ visits routed weekly" count up from zero the first time they scroll into view, once only, not on every scroll pass.
- Scroll triggered reveals on every major section: a subtle fade and slight upward slide as each section enters the viewport. Keep it fast (under 400ms) and consistent. This should feel tasteful and quick, not like a slideshow.
- Interactive pricing calculator on `/pricing`: a slider or stepper for "how many active clients do you have," with the plan name and price updating live as it moves, landing exactly on the real band boundaries (3, 25, 75, 125, 200). This is the single most important interactive element on the site since the pricing model itself is a genuine differentiator.
- A real, interactive mini map or route visualization on `/features/scheduling-and-routes`, showing a handful of stops connecting in sequence with an animated line, echoing what the actual dispatch board looks like.
- Micro interactions on every button and card: a subtle lift or shadow change on hover, never a jarring jump.
- Respect `prefers-reduced-motion`. Every animation above needs a reduced or instant fallback for users who have that setting on.
- Sticky header that shifts to a solid background once the page scrolls past the hero, so navigation stays usable without looking heavy at the top of the page.

---

## 6. Page by page content brief

### Home
Hero headline should lead with the core promise (running the whole business from one app) and the free tier hook (free while you have 3 or fewer active clients) needs to be visible without scrolling. Follow with the animated route preview, then the stat row, then a feature overview grid that covers all six categories from section 2 at a glance (not the full depth, just enough to make someone click through to `/features`), then a real testimonial, then a closing call to action section with both "book a demo" and "see pricing" as options.

### Features hub and deep dive pages
The hub page is a short overview with a card per category linking out. Each deep dive page follows the same shape: a short intro paragraph, a real product screenshot or the interactive element described in section 5, a detailed feature list, and a closing line linking to pricing and the most relevant switch page. The AI tools page and the commercial and HOA page deserve extra attention since neither exists on the current site at all and both are genuine differentiators nobody else in this category has built.

### Pricing
Full breakdown of every tier (Free, Fetch, Scoop, Haul, Pack Leader, Kennel) with the exact prices and client bands from the live product, the interactive calculator from section 5, and the FAQ block already proven to work on the current site (what counts as an active client, no per seat charges ever, no cut taken from payments, prorated plan changes, one click data export). Lead with the headline that nobody else in this category can say: never charged per seat, ever, on any plan.

### Switch pages
Each one names the competitor directly in the H1 and follows the same structure: a short, fair paragraph on what that competitor does well, a specific paragraph on where they fall short for this specific trade (draw from the real gaps, not invented ones: Jobber has no per dog pricing and charges per user, Sweep&Go has no AI layer and a dated interface, Housecall Pro and GorillaDesk are not built for this trade at all, Time To Pet is built for pet sitting, not waste removal), then a clear explanation of the named import tool and what a migration actually looks like (upload or connect, preview the mapping, dry run, confirm). Keep the competitor descriptions accurate and fair. Do not disparage a competitor for something they do not actually do.

### Persona pages (`/for/...`)
Same feature set, different framing per audience. The pooper scooper companies page leads with the core product. The HOA and property managers page leads with DNA compliance and waste station servicing, written for someone who has never operated field service software before and needs the compliance angle explained plainly. The franchise owners page leads with royalty billing and the multi location dashboard.

### About
Real company story, why this exists, why it is built specifically for this trade instead of adapted from a generic tool. Keep it short. This page converts less than any other page on the site and does not need feature depth.

### Blog
Launch with a real content calendar, not a placeholder. Suggested first ten posts, mixing evergreen SEO targets with genuine expertise:
1. How to start a pooper scooper business (state licensing, insurance, waste disposal rules by state)
2. What to charge per dog and per visit, with real regional pricing ranges
3. How to write a route so techs are not driving in circles
4. What HOAs actually require for pet waste compliance and how DNA testing programs work
5. The real cost of per seat pricing as your team grows, with the math worked out
6. How to handle a client who calls to complain their yard was missed
7. Weather delays and how to communicate them without losing trust
8. What separates a good tech from a great one in this trade
9. How referral programs actually perform in a hyper local service business
10. A first look inside the AI receptionist and what it can and cannot do yet

### Security and trust
What data is collected, how gate codes and hazard notes are protected, how payment data is handled given Stripe is bring your own key, and a plain answer to "can my competitor see my data" (no, this is fully multi tenant with row level isolation). This page matters more than it looks like it should, particularly for the HOA and commercial audience, who will ask a version of this question before signing anything.

### Contact and request access
See the note in section 3 on keeping these distinct. Both should be short forms. Neither needs more than name, business name, email, and one open text field.

---

## 7. Analytics and tracking

- Set up Google Search Console on day one, before the first page is even indexed.
- Use a privacy respecting analytics tool (Plausible or Fathom) rather than a heavy tracking suite, and say so plainly on the security or privacy page. This is a real trust signal for a product that already handles gate codes and payment data.
- Track two conversion events specifically: a `/contact` submission and a `/request-access` submission, kept separate so the funnel from each can be measured on its own.
- Tag every outbound link to `app.houndstack.com` (sign in, start free, etc.) so the handoff from marketing site to product can be measured even though they are on separate subdomains with no shared session.

---

## 8. Final checklist before this is called done

- [ ] Every feature in section 2 has a real home somewhere on the site
- [ ] No em dashes anywhere in any page's copy
- [ ] No emoji used as icons anywhere
- [ ] Mobile navigation works and was tested at 390px width, not assumed
- [ ] Pricing page numbers match the live product exactly (Free, Fetch $59, Scoop $99, Haul $149, Pack Leader $2 per client, Kennel $1.50 per client, with the correct client bands for each)
- [ ] Every page has unique title, meta description, and one H1
- [ ] Structured data is in place and validated (Google's Rich Results Test, not just eyeballed)
- [ ] Sitemap submitted to Search Console
- [ ] All five switch pages are live, fair, and accurate about each competitor
- [ ] Interactive pricing calculator lands exactly on the real band boundaries
- [ ] Reduced motion setting is respected across every animation
- [ ] Security and trust page is live before any HOA or commercial persona traffic is driven to the site
