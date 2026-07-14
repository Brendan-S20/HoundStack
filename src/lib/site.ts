export const SITE = {
  name: 'HoundStack',
  url: 'https://www.houndstack.com',
  appUrl: 'https://app.houndstack.com',
  signupUrl: 'https://app.houndstack.com/sign-up',
  // Temporary form backend. Swap both endpoints to the real signup
  // pipeline when it exists; the forms post plain FormData.
  contactFormEndpoint: 'https://formspree.io/f/REPLACE_CONTACT_FORM_ID',
  requestAccessFormEndpoint: 'https://formspree.io/f/REPLACE_ACCESS_FORM_ID',
} as const;

// Pricing model: complexity tiers with an included employee allowance.
// The estimator, the plan comparison, and the Offer schema all read from
// this single source so the numbers cannot drift apart.
export const TRIAL_DAYS = 14;
export const OVERAGE_RATE = 10; // per additional active employee per month
export const ANNUAL_DISCOUNT = 0.15;

export interface Plan {
  name: string;
  /** Monthly price in dollars, or null for the sales-assisted tier */
  price: number | null;
  /** Active employees included, or null for negotiated allowances */
  includedEmployees: number | null;
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
    category: 'Add-ons',
    features: [
      { label: 'AI Receptionist', tiers: ['add-on', 'add-on', 'add-on', 'add-on'] },
      { label: 'AI Business Advisor', tiers: ['add-on', 'add-on', 'add-on', 'add-on'] },
      { label: 'Referral Programs', tiers: ['add-on', 'add-on', 'add-on', 'add-on'] },
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
    q: 'What happens if I go over my included employee allowance?',
    a: `Each additional active employee is a flat $${OVERAGE_RATE} per month, shown live in your billing dashboard as it is incurred, never a surprise line on an invoice. In the app it reads the way it should: add a teammate for $${OVERAGE_RATE}.`,
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
    a: 'Yes, 15% off the plan price, applied automatically when you choose yearly billing.',
  },
  {
    q: 'What happens to my data if I downgrade?',
    a: 'Nothing is deleted. Downgrades follow the same grace period handling as any plan change, and your data stays exportable in one click on every plan, paused accounts included.',
  },
];

export const NAV = {
  features: [
    { href: '/features/scheduling-and-routes', label: 'Scheduling and routes' },
    { href: '/features/field-app', label: 'Field app' },
    { href: '/features/billing', label: 'Billing and payments' },
    { href: '/features/commercial-and-hoa', label: 'Commercial and HOA' },
    { href: '/features/neighbor-referrals', label: 'Neighbors and referrals' },
    { href: '/features/ai-tools', label: 'AI tools' },
    { href: '/features/reporting', label: 'Reporting' },
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
