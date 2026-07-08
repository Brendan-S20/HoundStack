export interface CostLine {
  label: string;
  amount: string;
}

export interface Competitor {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  /** Fair paragraph on what they do well */
  strengths: string;
  /** Where they fall short for this trade, drawn from real gaps only */
  gaps: string;
  /** Feature pages that address this competitor's weak spots */
  weakSpotLinks: { href: string; label: string; why: string }[];
  importerName: string;
  /**
   * Quantified cost comparison for a fixed scenario. Every competitor
   * figure comes from the vendor's own published pricing page and the
   * source line says exactly where and when it was read. Update the
   * numbers and the date together or not at all.
   */
  cost: {
    scenario: string;
    lines: CostLine[];
    total: string;
    hsLines: CostLine[];
    hsTotal: string;
    /** A concession or caveat that keeps the comparison honest */
    fairNote?: string;
    growthNote: string;
    source: string;
  };
  /** Honest capability rows: concede where they are strong */
  featureRows: { feature: string; them: string; us: string }[];
}

export const COMPETITORS: Competitor[] = [
  {
    slug: 'from-sweep-and-go',
    name: 'Sweep&Go',
    metaTitle: 'Sweep and Go alternative built for scooper businesses | HoundStack',
    metaDescription:
      'Comparing HoundStack and Sweep&Go for pet waste removal: where Sweep&Go is solid, where it stops, and how the dedicated Sweep&Go importer moves your data with a dry run first.',
    h1: 'A Sweep and Go alternative with an AI layer and a modern interface',
    intro:
      'Sweep&Go is the incumbent in this trade, and plenty of good businesses run on it. If you are here, you are probably weighing what a decade newer product buys you. Here is the honest comparison.',
    strengths:
      'Sweep&Go was built specifically for pet waste removal, and it shows. It handles per dog pricing, recurring scoop schedules, and client notifications the way this trade expects, and it has years of operator feedback baked in. It is a legitimate, purpose built tool, not a generic system wearing a costume.',
    gaps:
      'Where it falls short is age and ambition. There is no AI layer at all: no receptionist answering texts, no churn scoring, no suggested pricing, no weekly digest. The interface has not kept pace, and operators feel that most in the office, where the daily clicks add up. HoundStack ships the same trade specific foundation plus the layer Sweep&Go has not built.',
    weakSpotLinks: [
      {
        href: '/features/ai-tools',
        label: 'AI tools',
        why: 'the receptionist, churn scoring, and pricing suggestions Sweep&Go does not have',
      },
      {
        href: '/features/commercial-and-hoa',
        label: 'Commercial and HOA',
        why: 'DNA compliance with chain of custody, built in rather than tracked in spreadsheets',
      },
    ],
    importerName: 'the Sweep&Go importer',
    cost: {
      scenario: 'An owner and two techs: 3 active staff, monthly billing.',
      lines: [
        { label: 'Scoop&Go tier (their most popular), 1–3 staff band: $69 per active staff × 3', amount: '$207' },
      ],
      total: '$207/mo',
      hsLines: [{ label: 'Launch plan, all 3 active employees included', amount: '$79' }],
      hsTotal: '$79/mo',
      fairNote:
        'To be fair: their EntreMANURE tier would be $29 × 3 = $87 a month, but it caps every tech at 15 jobs a day, which a dense route passes before lunch.',
      growthNote:
        'The gap widens as you hire. At 10 active staff, Scoop&Go is $39 × 10 = $390 a month. HoundStack is $149 on Launch ($79 + 7 extra teammates at $10) or $199 on Growth with 10 included.',
      source:
        'Sweep&Go prices as published on sweepandgo.com/pooper-scooper-app/pricing, July 2026, monthly billing. Their promos and bands change; check their page for current numbers.',
    },
    featureRows: [
      { feature: 'Per dog pricing and scoop schedules', them: 'Yes, genuinely built for this trade', us: 'Yes' },
      { feature: 'Pricing model', them: 'Per active staff member, every month', us: 'Flat tier with an employee allowance' },
      { feature: 'AI receptionist that books by text', them: 'No', us: 'Yes, as an add-on on any plan' },
      { feature: 'Churn risk scoring and suggested zone pricing', them: 'No', us: 'Yes' },
      { feature: 'DNA compliance with chain of custody', them: 'No, tracked outside the app', us: 'Built in' },
      { feature: 'Interface', them: 'Functional, showing its age', us: 'Built a decade later, and it shows too' },
    ],
  },
  {
    slug: 'from-jobber',
    name: 'Jobber',
    metaTitle: 'Jobber alternative for pet waste removal | HoundStack',
    metaDescription:
      'Why scooper businesses outgrow Jobber: per user pricing and no per dog billing. How HoundStack compares and how the Jobber importer migrates your clients with a dry run.',
    h1: 'A Jobber alternative for pet waste removal, priced by clients instead of users',
    intro:
      'Jobber is excellent general purpose field service software. The question is not whether Jobber is good, it is whether a tool built for every trade can fit the specific way a scooping business bills, routes, and grows.',
    strengths:
      'Jobber is polished, reliable, and broad. Quoting, invoicing, scheduling, and payments all work well, the mobile app is solid, and their support has a good reputation. For a general contractor or a lawn care company with varied job types, it is a strong choice.',
    gaps:
      'For this trade specifically, two things bite. There is no per dog pricing, so the billing model at the center of a scooping business has to be faked with line items. And Jobber charges per user starting from the very first one. HoundStack includes your first 3 teammates on every plan and adds one for $10 a month flat after that, and per dog billing is native, not improvised.',
    weakSpotLinks: [
      {
        href: '/features/billing',
        label: 'Billing and payments',
        why: 'native per dog pricing and skip reason billing rules',
      },
      {
        href: '/pricing',
        label: 'Pricing',
        why: 'your first 3 teammates included, $10 flat after, versus per user from user one',
      },
    ],
    importerName: 'the Jobber importer',
    cost: {
      scenario: 'An owner and two techs: 3 users, month-to-month billing.',
      lines: [
        { label: 'Connect plan, 1 user included', amount: '$139' },
        { label: '2 additional users × $29', amount: '$58' },
      ],
      total: '$197/mo',
      hsLines: [{ label: 'Launch plan, all 3 active employees included', amount: '$79' }],
      hsTotal: '$79/mo',
      fairNote:
        'Their Core plan is $49 a month, but it is a single user with the lighter feature set, and users are still $29 each on top of any plan. Annual prepay brings Connect down to $99.',
      growthNote:
        'On Jobber, every hire is another $29 a month on every plan, forever. On HoundStack your first 3 teammates are included and each one after is $10 flat.',
      source:
        'Jobber prices as published on getjobber.com/pricing, July 2026, month-to-month rates (1-year commitment and annual prepay are lower). Check their page for current numbers.',
    },
    featureRows: [
      { feature: 'General field service polish', them: 'Excellent: quoting, invoicing, payments all mature', us: 'Focused on one trade instead' },
      { feature: 'Per dog pricing', them: 'No, faked with line items', us: 'Native' },
      { feature: 'Skip reason billing (rain days, locked gates)', them: 'No', us: 'Yes, rules per reason' },
      { feature: 'Dense recurring route optimization', them: 'General scheduling', us: 'Built for 20 stops before lunch' },
      { feature: 'HOA waste stations and DNA compliance', them: 'No', us: 'Built in' },
      { feature: 'Pricing model', them: 'Per user from the very first one', us: 'Flat tier with an employee allowance' },
    ],
  },
  {
    slug: 'from-housecall-pro',
    name: 'Housecall Pro',
    metaTitle: 'Housecall Pro alternative for scooper businesses | HoundStack',
    metaDescription:
      'Housecall Pro versus HoundStack for pet waste removal: what Housecall Pro does well for home services broadly, where it was never designed for this trade, and the migration path.',
    h1: 'A Housecall Pro alternative actually designed for this trade',
    intro:
      'Housecall Pro serves plumbers, electricians, and HVAC crews well. Pet waste removal asks different questions of software, and this page is about that difference.',
    strengths:
      'Housecall Pro is a mature platform for appointment based home services. Booking, dispatch, invoicing, and card payments are all solid, and it is particularly strong for trades with one off jobs, estimates, and technician assignments that change day to day.',
    gaps:
      'It was never built for recurring route work. There is no concept of per dog pricing, no skip reason billing, no zone based routing for dense weekly stops, and no waste station or DNA compliance tooling for commercial accounts. A scooping business on Housecall Pro spends its time working around the model. HoundStack starts from the route, so the model matches the work.',
    weakSpotLinks: [
      {
        href: '/features/scheduling-and-routes',
        label: 'Scheduling and routes',
        why: 'recurring route scheduling and zone pricing built for weekly stops',
      },
      {
        href: '/features/commercial-and-hoa',
        label: 'Commercial and HOA',
        why: 'per unit billing, waste stations, and DNA compliance',
      },
    ],
    importerName: 'the Housecall Pro importer',
    cost: {
      scenario: 'An owner and two techs: 3 users, monthly billing.',
      lines: [
        { label: 'Essentials plan, up to 5 users (Basic is single user, so 3 users start here)', amount: '$189' },
      ],
      total: '$189/mo',
      hsLines: [{ label: 'Launch plan, all 3 active employees included', amount: '$79' }],
      hsTotal: '$79/mo',
      fairNote:
        'Annual billing brings Essentials down to $149 a month. Either way you are paying for a plan sized in users, plus the add-ons most operators end up needing.',
      growthNote:
        'Past 5 users, the next stop is MAX at $329 a month plus $35 per user beyond its allowance. On HoundStack, teammate number four is $10.',
      source:
        'Housecall Pro prices as published on housecallpro.com/pricing, July 2026, monthly billing ($149 Essentials on annual). Check their page for current numbers.',
    },
    featureRows: [
      { feature: 'Appointment based home services', them: 'Very strong: booking, dispatch, payments', us: 'Built for routes instead of appointments' },
      { feature: 'Per dog pricing', them: 'No', us: 'Native' },
      { feature: 'Skip reason billing', them: 'No', us: 'Yes, rules per reason' },
      { feature: 'Zone based recurring routes', them: 'No, day-to-day job model', us: 'The core of the product' },
      { feature: 'HOA waste stations and DNA compliance', them: 'No', us: 'Built in' },
      { feature: 'Pricing model', them: 'User-count plan tiers', us: 'Flat tier with an employee allowance' },
    ],
  },
  {
    slug: 'from-time-to-pet',
    name: 'Time To Pet',
    metaTitle: 'Time To Pet alternative for pet waste removal | HoundStack',
    metaDescription:
      'Time To Pet is built for pet sitting and dog walking. Here is how HoundStack differs for waste removal routes, and how the Time To Pet importer moves your client list safely.',
    h1: 'A Time To Pet alternative for waste removal instead of pet sitting',
    intro:
      'Time To Pet is well loved software, but it is pet sitting software. If your trucks run scooping routes, you are borrowing a tool from an adjacent business, and the fit shows in the daily details.',
    strengths:
      'For pet sitting and dog walking companies, Time To Pet earns its reputation: strong client communication, visit report cards owners genuinely like, GPS tracked walks, and scheduling shaped around sitters visiting homes. In its own category it is a very good product.',
    gaps:
      'Waste removal is route work, not visit work. Time To Pet has no route optimization for dense daily stop lists, no per dog waste pricing, no skip reason billing for rain days, and nothing for HOA waste stations or DNA compliance. HoundStack keeps the client friendly communication and builds the rest around the route.',
    weakSpotLinks: [
      {
        href: '/features/scheduling-and-routes',
        label: 'Scheduling and routes',
        why: 'one click route optimization with real drive time math',
      },
      {
        href: '/features/field-app',
        label: 'The field app',
        why: 'a My Day view built for a truck running 20 stops, offline included',
      },
    ],
    importerName: 'the Time To Pet importer',
    cost: {
      scenario: 'An owner and two techs: 3 active staff, monthly billing.',
      lines: [
        { label: 'Team plan base', amount: '$40' },
        { label: '3 active staff × $16', amount: '$48' },
      ],
      total: '$88/mo',
      hsLines: [{ label: 'Launch plan, all 3 active employees included', amount: '$79' }],
      hsTotal: '$79/mo',
      fairNote:
        'At this size the bills are honestly close. The difference is what the money buys: Time To Pet is pet sitting software, so none of it goes toward route optimization, per dog waste pricing, or skip reason billing.',
      growthNote:
        'The gap opens as you hire: at 10 active staff, Time To Pet is $40 + 10 × $16 = $200 a month. HoundStack is $149 on Launch ($79 + 7 teammates at $10), with the route tooling included.',
      source:
        'Time To Pet prices as published on timetopet.com/pricing, July 2026 (In-Home plans; their Lite and Solo tiers serve smaller sitters). Check their page for current numbers.',
    },
    featureRows: [
      { feature: 'Client communication and visit report cards', them: 'Excellent, genuinely loved', us: 'Also strong: two way SMS, photos, review prompts' },
      { feature: 'Route optimization for dense stop lists', them: 'No, visit model', us: 'One click, real drive time math' },
      { feature: 'Per dog waste pricing', them: 'No', us: 'Native' },
      { feature: 'Skip reason billing for rain days', them: 'No', us: 'Yes, rules per reason' },
      { feature: 'HOA waste stations and DNA compliance', them: 'No', us: 'Built in' },
      { feature: 'Pricing model', them: '$16 per active staff on Team', us: 'Flat tier with an employee allowance' },
    ],
  },
  {
    slug: 'from-gorilladesk',
    name: 'GorillaDesk',
    metaTitle: 'GorillaDesk alternative for scooper businesses | HoundStack',
    metaDescription:
      'GorillaDesk versus HoundStack for pet waste removal: what GorillaDesk does well for pest control, where the fit ends for scooping routes, and the dedicated migration path.',
    h1: 'A GorillaDesk alternative built around scooping routes',
    intro:
      'GorillaDesk grew up in pest control and does that job well. Scooping shares the trucks and the recurring visits, but not much else about how the business actually bills and grows.',
    strengths:
      'GorillaDesk is straightforward, affordable, and quick to learn. Scheduling, invoicing, and route views cover the basics of recurring service work, and pest control operators in particular get a tool shaped around their treatments and compliance needs.',
    gaps:
      'It was not built for this trade. Per dog pricing does not exist, skip reason billing does not exist, and there is nothing for the commercial side of scooping: no per unit HOA billing, no waste station routes, no DNA compliance. The growth tools stop at basic marketing, with no canvassing pipeline or AI layer. HoundStack covers the same basics and then keeps going where scooping actually needs it.',
    weakSpotLinks: [
      {
        href: '/features/billing',
        label: 'Billing and payments',
        why: 'per dog pricing and skip reason rules as first class features',
      },
      {
        href: '/features/neighbor-referrals',
        label: 'Neighbors and referrals',
        why: 'the canvassing map and referral engine for density led growth',
      },
    ],
    importerName: 'the GorillaDesk importer',
    cost: {
      scenario: 'An owner and two solo techs: 2 paid routes, monthly billing.',
      lines: [
        { label: 'Pro plan (subscription billing and the portal live here): $99 per route × 2 solo techs', amount: '$198' },
      ],
      total: '$198/mo',
      hsLines: [{ label: 'Launch plan, all 3 active employees included', amount: '$79' }],
      hsTotal: '$79/mo',
      fairNote:
        'Credit where due: GorillaDesk gives you unlimited free office users, and only techs with schedules need a paid route. Their Basic tier is $49 a route, but it caps routing at 25 stops and drops the customer portal.',
      growthNote:
        'Every new solo tech is another $99 route each month. On HoundStack a new teammate is $10 flat once you are past your included 3.',
      source:
        'GorillaDesk prices as published on gorilladesk.com/pricing, July 2026, monthly billing (annual is lower). Check their page for current numbers.',
    },
    featureRows: [
      { feature: 'Simple, affordable recurring service basics', them: 'Yes, quick to learn', us: 'Yes, plus the trade specific layer' },
      { feature: 'Free office users', them: 'Unlimited, genuinely good', us: 'First 3 teammates of any role included' },
      { feature: 'Per dog pricing', them: 'No', us: 'Native' },
      { feature: 'Skip reason billing', them: 'No', us: 'Yes, rules per reason' },
      { feature: 'HOA per unit billing, stations, DNA compliance', them: 'No', us: 'Built in' },
      { feature: 'Growth tools', them: 'Basic marketing', us: 'Canvassing map, referrals, AI layer' },
    ],
  },
];
