export const SITE = {
  name: 'HoundStack',
  url: 'https://houndstack.com',
  appUrl: 'https://app.houndstack.com',
  // Temporary form backend. Swap both endpoints to the real signup
  // pipeline when it exists; the forms post plain FormData.
  contactFormEndpoint: 'https://formspree.io/f/REPLACE_CONTACT_FORM_ID',
  requestAccessFormEndpoint: 'https://formspree.io/f/REPLACE_ACCESS_FORM_ID',
} as const;

// Pricing model: complexity tiers with an included employee allowance.
// The estimator, the plan comparison, and the Offer schema all read from
// this single source so the numbers cannot drift apart.
export const TRIAL_DAYS = 60;
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
