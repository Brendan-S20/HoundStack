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
  },
];
