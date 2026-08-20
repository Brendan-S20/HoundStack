export const SITE = {
  name: 'HoundStack',
  url: 'https://www.houndstack.com',
  // Signup is OPEN. Every launch CTA on the site points here.
  //
  // Absolute, and to app.houndstack.com specifically — that host is the one
  // the app actually answers on, and a relative path would 404 on the
  // marketing origin. Not www.app.houndstack.com: that redirect was retired.
  signupUrl: 'https://app.houndstack.com/auth',
  // Kept, and still live at /early-access. It is no longer a CTA — the
  // launch buttons go to signup — but the page and its form still work, and
  // the footer keeps a link for people who would rather be emailed than
  // sign up today.
  earlyAccessUrl: '/early-access',
  earlyAccessFormEndpoint: 'https://formspree.io/f/xaqrezpw',
  // MKT-4: deliberately the SAME Formspree endpoint as early access — one
  // inbox pre-launch. LeadForm posts a `_subject` and a `form` field so the two
  // are still tellable apart once they arrive; without those the submissions
  // are identical in shape. Split them onto separate endpoints if contact
  // volume ever warrants its own inbox.
  contactFormEndpoint: 'https://formspree.io/f/xaqrezpw',
} as const;

// MKT-6: the stable node id for the Organization block BaseLayout emits on
// every page. Per-page schema (the pricing SoftwareApplication, blog
// Articles) references this instead of restating the publisher, so search
// engines resolve one entity rather than forty look-alikes.
export const ORG_ID = `${SITE.url}/#organization`;

// Likewise for the product. The homepage and /pricing both publish a
// SoftwareApplication block; without a shared id they are two unrelated
// products that happen to share a name, and the two Offer sets read as
// contradicting each other.
export const PRODUCT_ID = `${SITE.url}/#software`;

// Pricing model: complexity tiers with an included employee allowance.
// The estimator, the plan comparison, and the Offer schema all read from
// this single source so the numbers cannot drift apart.
export const TRIAL_DAYS = 14;
export const OVERAGE_RATE = 10; // per additional active employee per month
/**
 * Dollars per AI action past the plan's monthly allowance.
 *
 * Named apart from OVERAGE_RATE, which is the SEAT rate, because two bare
 * "overage" constants in one file is how a page ends up quoting one where it
 * meant the other.
 *
 * Verified against `platform_plans.ai_overage_cents_per_action` on 2026-08-20:
 * 10 cents on Launch, Growth and Scale; null on Enterprise, which negotiates.
 * Update this and `includedAiActions` below together with the date, or not at
 * all — the same rule competitors.ts applies to competitor pricing. NOTHING
 * automated compares this file to the catalog, which is how the annual discount
 * came to say 15% while the app charged ~17%.
 */
export const AI_OVERAGE_RATE = 0.1;
/**
 * Annual billing is TWO MONTHS FREE — pay for ten, get twelve.
 *
 * This was 0.15, and the app disagreed. `platform_plans.annual_price_cents` is
 * exactly ten times the monthly price on every live tier (Launch 7900 → 79000,
 * Growth 19900 → 199000, Scale 44900 → 449000), and billing.functions.ts
 * describes it in as many words: "year for annual = two months free". That is
 * 16.7% off, not 15%.
 *
 * So the site quoted Launch at $67.15/mo when the customer is actually charged
 * $790/yr, or $65.83/mo. Under-promising rather than over-promising, which is
 * the harmless direction — but it is still a published price that is not the
 * price, and the FAQ stated a percentage the product does not use.
 *
 * Expressed as months-paid rather than a percentage on purpose: the app's
 * number is structural (10 × monthly), so deriving the same way means the two
 * cannot drift again, and "two months free" is a better offer than "15% off"
 * anyway.
 */
export const ANNUAL_MONTHS_PAID = 10;
export const ANNUAL_DISCOUNT = 1 - ANNUAL_MONTHS_PAID / 12; // 0.1666…

export interface Plan {
  name: string;
  /** Monthly price in dollars, or null for the sales-assisted tier */
  price: number | null;
  /** Active employees included, or null for negotiated allowances */
  includedEmployees: number | null;
  /** AI actions included each month, or null for negotiated allowances.
   *  Metered: anything past this is AI_OVERAGE_RATE per action. */
  includedAiActions: number | null;
  audience: string;
  /** The complexity ladder for this tier, not a feature checklist */
  ladder: string[];
  /** Visually highlighted as the recommended tier on pricing surfaces */
  popular?: boolean;
}

export const PLANS: Plan[] = [
  {
    name: 'Launch',
    price: 79,
    includedEmployees: 3,
    includedAiActions: 200,
    audience: 'A solo operator or a small crew running one business.',
    ladder: [
      'Standard reporting suite',
      'Standard roles: owner, office manager, dispatcher, tech',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: 199,
    includedEmployees: 10,
    includedAiActions: 750,
    popular: true,
    audience: 'Past "just me and a couple techs," still one business.',
    ladder: [
      'Advanced analytics: cohort retention, zone profitability, churn drivers',
      'More automation rules and workflow capacity',
      'Priority email and chat support',
    ],
  },
  {
    name: 'Scale',
    price: 449,
    includedEmployees: 30,
    includedAiActions: 2500,
    audience: 'A large operation spread across multiple cities or territories.',
    ladder: [
      'Cross-zone and regional performance reporting',
      'Custom permission sets beyond the standard four roles',
      'Phone support with a named account contact',
    ],
  },
  {
    name: 'Enterprise',
    price: null,
    includedEmployees: null,
    includedAiActions: null,
    audience: 'A franchise or multi-brand parent overseeing separate child businesses.',
    ladder: [
      'Parent and child organization structure with full rollup',
      'Franchise management, royalty billing, and regional dashboards',
      'Dedicated account manager, custom contract terms and SLA',
    ],
  },
];

/** Monthly total for a published plan at a given active employee count */
export function planTotal(plan: Plan, employees: number): number | null {
  if (plan.price === null || plan.includedEmployees === null) return null;
  return plan.price + Math.max(0, employees - plan.includedEmployees) * OVERAGE_RATE;
}

// The complete feature model, one structure for everything a tier gets:
// the per-tier deltas, the core-platform items, and the add-ons all
// live here so the pricing page can render each tier's full list without
// three disconnected sections a visitor has to mentally merge (and
// without any of them drifting apart).
//
// Availability is per tier in PLANS order (Launch, Growth, Scale,
// Enterprise): true = included, false = not offered, a string = a
// qualified availability shown next to the feature (e.g. 'add-on').
export type TierAvailability = boolean | string;

export interface TierFeature {
  label: string;
  tiers: [TierAvailability, TierAvailability, TierAvailability, TierAvailability];
}

export interface TierFeatureGroup {
  category: string;
  features: TierFeature[];
}

export const TIER_FEATURE_GROUPS: TierFeatureGroup[] = [
  {
    category: 'Core platform',
    features: [
      { label: 'Customers, dogs, jobs, and routes', tiers: [true, true, true, true] },
      { label: 'Zones, cities, and territories', tiers: [true, true, true, true] },
      { label: 'Scheduling, recurring services, and route optimization', tiers: [true, true, true, true] },
      { label: 'Estimates, invoicing, payments, and the client portal', tiers: [true, true, true, true] },
      { label: 'The mobile field app with offline support and photos', tiers: [true, true, true, true] },
      { label: 'Work orders, notifications, GPS navigation, and reporting', tiers: [true, true, true, true] },
      // MKT-1: referrals were listed as a purchasable add-on. They are not a
      // SKU — they are un-gated on every plan, so they belong here as included.
      { label: 'Referral program with automatic credit to both sides', tiers: [true, true, true, true] },
    ],
  },
  {
    category: 'Reporting and analytics',
    features: [
      { label: 'Standard reporting suite', tiers: [true, true, true, true] },
      {
        label: 'Advanced analytics: cohort retention, zone profitability, churn drivers',
        tiers: [false, true, true, true],
      },
      { label: 'Cross-zone and regional performance reporting', tiers: [false, false, true, true] },
    ],
  },
  {
    category: 'Team and permissions',
    features: [
      { label: 'Standard roles: owner, office manager, dispatcher, tech', tiers: [true, true, true, true] },
      { label: 'Custom permission sets beyond the standard four roles', tiers: [false, false, true, true] },
    ],
  },
  {
    category: 'Automation',
    features: [
      {
        label: 'Automation rules and workflows',
        tiers: ['standard capacity', 'expanded capacity', 'expanded capacity', 'expanded capacity'],
      },
    ],
  },
  {
    category: 'AI',
    features: [
      { label: 'AI actions included each month', tiers: ['200', '750', '2,500', 'by contract'] },
      {
        label: 'Additional AI actions',
        tiers: ['$0.10 each', '$0.10 each', '$0.10 each', 'by contract'],
      },
    ],
  },
  {
    // MKT-1: mirrors the app's platform_addons catalog. Previously listed two
    // SKUs the app has never had — AI Business Advisor (never built) and
    // Referral Programs (which is included on every plan, not purchasable) —
    // and omitted four that exist. Anything not yet built says so, in the same
    // "not before it ships" spirit as the API row that was already here.
    category: 'Add-ons',
    features: [
      {
        label: 'AI Receptionist ($49/mo, conversations use your AI actions)',
        tiers: ['add-on', 'add-on', 'add-on', 'add-on'],
      },
      { label: 'Priority support ($29/mo)', tiers: ['add-on', 'add-on', 'add-on', 'add-on'] },
      { label: 'Done-for-you setup ($499 one time)', tiers: ['add-on', 'add-on', 'add-on', 'add-on'] },
      {
        label: 'Managed texting (coming soon, pending carrier registration)',
        tiers: ['add-on', 'add-on', 'add-on', 'add-on'],
      },
      // One line, because it is one add-on: the portal domain and the sending
      // domain are the same conversation and the same DNS records, and they
      // were never going to be delivered separately. Sold together at $99/mo
      // from 2026-08-15; see the migration of the same date for why $19 each
      // was the wrong number.
      {
        label: 'White label: your domain on the portal and on client emails (setup arranged after purchase)',
        tiers: ['add-on', 'add-on', 'add-on', 'add-on'],
      },
      {
        label: 'API access (coming soon, marked live here when it ships, not before)',
        tiers: [false, 'add-on', true, true],
      },
    ],
  },
  {
    category: 'Franchise and multi-brand',
    features: [
      { label: 'Parent and child organization structure with full rollup', tiers: [false, false, false, true] },
      {
        label: 'Franchise management, royalty billing, and regional dashboards',
        tiers: [false, false, false, true],
      },
    ],
  },
  {
    category: 'Support',
    features: [
      { label: 'Email support', tiers: [true, true, true, true] },
      { label: 'Priority email and chat support', tiers: [false, true, true, true] },
      { label: 'Phone support with a named account contact', tiers: [false, false, true, true] },
      { label: 'Dedicated account manager, custom contract terms and SLA', tiers: [false, false, false, true] },
    ],
  },
];

// Pricing FAQ lives here so the /pricing page and the homepage excerpt
// share one source of truth.
export const PRICING_FAQS = [
  {
    q: 'How does pricing work?',
    a: 'Each tier is a flat monthly price with an employee allowance included: 3 active employees on Launch, 10 on Growth, 30 on Scale. Each additional active employee is a flat $10 per month, shown live in your billing dashboard. Moving up a tier also unlocks deeper tooling like advanced analytics, custom permissions, and franchise structure.',
  },
  {
    q: 'What counts as an active employee?',
    a: 'Anyone with a login used at least once in the billing period, in any role. Techs, dispatchers, and office staff all count the same way. Someone who never logs in that month does not count.',
  },
  {
    q: `What happens after my ${TRIAL_DAYS} day trial?`,
    a: `You either convert to Launch at $${PLANS[0].price} per month or the account pauses. Nothing is deleted either way; a paused account keeps its data and picks up where it left off when a payment method is added. The trial is purely time based, nothing you do inside it triggers a charge.`,
  },
  {
    // The app gates AI on a paid plan (BUILD-7, owner decision: every request
    // costs real money to run; metering shipped with BUILD-2, so the allowance and the per-action rate are now published rather than absent). The site sold "AI
    // tools" on the feature list and a free trial of "Launch" on the pricing
    // page, and said nothing anywhere about the one not including the other —
    // so the first a trialling customer would learn of it is a feature
    // declining to run. Saying it up front costs a sentence; not saying it
    // costs the trust of the person who found out the other way.
    q: `Does the ${TRIAL_DAYS} day trial include the AI features?`,
    a: 'No, and it is the only thing it leaves out. Everything else runs in full: scheduling, routing, invoicing, payments, the field app, the client portal. The AI features run on our own model accounts and every request costs us real money, so they switch on when a plan does, with a monthly allowance of AI actions included and anything past it billed per action. Nothing else about the trial is limited, and no card is needed to start it.',
  },
  {
    q: 'What happens if I go over my included employee allowance?',
    a: `Each additional active employee is a flat $${OVERAGE_RATE} per month, shown live in your billing dashboard as it is incurred, never a surprise line on an invoice. In the app it reads the way it should: add a teammate for $${OVERAGE_RATE}.`,
  },
  {
    q: 'What happens if I go over my AI action allowance?',
    a: `Each tier includes AI actions every month: 200 on Launch, 750 on Growth, 2,500 on Scale. Anything past that is $${AI_OVERAGE_RATE.toFixed(2)} an action, shown live in Settings, AI Tools as it is incurred, and billed as one line on your next invoice. One action is one AI request, so a receptionist conversation counts once however many replies it takes. You can also set a ceiling that stops AI rather than billing past it.`,
  },
  {
    q: 'Do I lose features on Launch that Enterprise gets?',
    a: 'No. Every plan runs the full core ERP: scheduling, routing, invoicing, payments, the field app, the client portal, all of it. The difference between tiers is complexity tooling like advanced analytics, custom permissions, and franchise structure, not core capability.',
  },
  {
    q: 'Can I buy add-ons without upgrading my whole plan?',
    a: 'Yes for the AI and growth add-ons, they install on any plan. The one exception is franchise management and regional dashboards, which are part of the Enterprise structure because they require the parent and child organization model.',
  },
  {
    q: 'Is there a discount for paying annually?',
    a: 'Yes. Pay for ten months and get twelve. You are billed once a year at ten times the monthly price, which works out about 17% cheaper, and it applies automatically when you choose yearly billing.',
  },
  {
    q: 'What happens to my data if I downgrade?',
    a: 'Nothing is deleted. Downgrades follow the same grace period handling as any plan change, and your data stays exportable in one click on every plan, paused accounts included.',
  },
];

export const NAV = {
  // Grouped for the features mega menu; the footer flattens the groups.
  featureGroups: [
    {
      label: 'Run the day',
      items: [
        { href: '/features/scheduling-and-routes', label: 'Scheduling and routes' },
        { href: '/features/field-app', label: 'Field app' },
        { href: '/features/weather', label: 'Weather' },
        { href: '/features/inventory', label: 'Inventory' },
      ],
    },
    {
      label: 'Get paid',
      items: [
        { href: '/features/billing', label: 'Billing and payments' },
        { href: '/features/client-portal', label: 'Client portal' },
        { href: '/features/promotions', label: 'Promotions' },
        { href: '/features/commercial-and-hoa', label: 'Commercial and HOA' },
      ],
    },
    {
      label: 'Grow',
      items: [
        { href: '/features/leads', label: 'Leads' },
        { href: '/features/neighbor-referrals', label: 'Neighbors and referrals' },
        { href: '/features/ai-tools', label: 'AI tools' },
      ],
    },
    {
      label: 'Understand',
      items: [
        { href: '/features/reporting', label: 'Reporting' },
        { href: '/features/concerns', label: 'Concerns' },
        { href: '/features/roles-and-permissions', label: 'Roles and permissions' },
      ],
    },
  ],
  features: [
    { href: '/features/scheduling-and-routes', label: 'Scheduling and routes' },
    { href: '/features/field-app', label: 'Field app' },
    { href: '/features/weather', label: 'Weather' },
    { href: '/features/inventory', label: 'Inventory' },
    { href: '/features/billing', label: 'Billing and payments' },
    { href: '/features/client-portal', label: 'Client portal' },
    { href: '/features/promotions', label: 'Promotions' },
    { href: '/features/commercial-and-hoa', label: 'Commercial and HOA' },
    { href: '/features/leads', label: 'Leads' },
    { href: '/features/neighbor-referrals', label: 'Neighbors and referrals' },
    { href: '/features/ai-tools', label: 'AI tools' },
    { href: '/features/reporting', label: 'Reporting' },
    { href: '/features/concerns', label: 'Concerns' },
    { href: '/features/roles-and-permissions', label: 'Roles and permissions' },
  ],
  switch: [
    { href: '/switch/from-sweep-and-go', label: 'From Sweep&Go' },
    { href: '/switch/from-jobber', label: 'From Jobber' },
    { href: '/switch/from-housecall-pro', label: 'From Housecall Pro' },
    { href: '/switch/from-time-to-pet', label: 'From Time To Pet' },
    { href: '/switch/from-gorilladesk', label: 'From GorillaDesk' },
  ],
  personas: [
    { href: '/for/pooper-scooper-companies', label: 'Pooper scooper companies' },
    { href: '/for/hoa-and-property-managers', label: 'HOAs and property managers' },
    { href: '/for/franchise-owners', label: 'Franchise owners' },
  ],
} as const;
