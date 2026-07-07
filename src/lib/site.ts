export const SITE = {
  name: 'HoundStack',
  url: 'https://houndstack.com',
  appUrl: 'https://app.houndstack.com',
  // Temporary form backend. Swap both endpoints to the real signup
  // pipeline when it exists; the forms post plain FormData.
  contactFormEndpoint: 'https://formspree.io/f/REPLACE_CONTACT_FORM_ID',
  requestAccessFormEndpoint: 'https://formspree.io/f/REPLACE_ACCESS_FORM_ID',
} as const;

export interface PlanBand {
  name: string;
  min: number;
  max: number | null;
  /** Flat monthly price in dollars, or null for per-client plans */
  flat: number | null;
  /** Per-client monthly rate in dollars, or null for flat plans */
  perClient: number | null;
  blurb: string;
}

// Live product pricing. The calculator and the pricing table both read
// from this single source so the band boundaries cannot drift apart.
export const PLANS: PlanBand[] = [
  {
    name: 'Free',
    min: 0,
    max: 3,
    flat: 0,
    perClient: null,
    blurb: 'Free while you have 3 or fewer active clients. No credit card required.',
  },
  {
    name: 'Fetch',
    min: 4,
    max: 25,
    flat: 59,
    perClient: null,
    blurb: 'For solo operators building past their first few yards.',
  },
  {
    name: 'Scoop',
    min: 26,
    max: 75,
    flat: 99,
    perClient: null,
    blurb: 'For a full route and your first hire.',
  },
  {
    name: 'Haul',
    min: 76,
    max: 125,
    flat: 149,
    perClient: null,
    blurb: 'For multi-tech operations running several routes a day.',
  },
  {
    name: 'Pack Leader',
    min: 126,
    max: 200,
    flat: null,
    perClient: 2,
    blurb: '$2.00 per active client per month. Scales with your book, not your headcount.',
  },
  {
    name: 'Kennel',
    min: 201,
    max: null,
    flat: null,
    perClient: 1.5,
    blurb: '$1.50 per active client per month. The rate drops as you grow.',
  },
];

export function planForClients(clients: number): PlanBand {
  return (
    PLANS.find((p) => clients >= p.min && (p.max === null || clients <= p.max)) ?? PLANS[PLANS.length - 1]
  );
}

export function priceForClients(clients: number): number {
  const plan = planForClients(clients);
  return plan.flat !== null ? plan.flat : plan.perClient! * clients;
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
