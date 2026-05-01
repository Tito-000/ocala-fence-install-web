/**
 * Business data — single source of truth for NAP, services, financing, etc.
 * Updated: 2026-04-30
 */

export const BUSINESS = {
  name: 'Ocala Fence Install',
  legalName: 'Crystalline Dynamics',
  tagline: 'Marion County\'s family-owned fence installation team',
  founded: 2021,
  yearsInBusiness: 5,
  teamSize: 6,
  installsPerWeek: 10,

  // Contact
  phone: '863-377-0928',
  phoneE164: '+18633770928',
  whatsappE164: '18633770928',
  email: 'crystallinedynamicsinc@gmail.com',

  // Address
  address: {
    streetAddress: '217 SE 1st Ave #200',
    addressLocality: 'Ocala',
    addressRegion: 'FL',
    postalCode: '34471',
    addressCountry: 'US',
  },

  // Geo (Ocala center)
  geo: {
    latitude: 29.1872,
    longitude: -82.1401,
  },

  // Hours
  hours: {
    phone: { open: '09:00', close: '21:00', days: 'Mon-Sun' },
    estimates: { open: '11:00', close: '19:00', days: 'Mon-Sun' },
  },

  // Social
  social: {
    instagram: 'https://www.instagram.com/crystallinedynamicsinc',
    facebook: '',
    googleBusinessProfile: '',
  },

  // Brand colors (matches tailwind.config.mjs)
  colors: {
    primary: '#136229',
    accent: '#62522E',
    highlight: '#D1B487',
    white: '#FFFFFF',
  },

  // Service areas (8 cities)
  serviceAreas: [
    { slug: 'ocala-fl', name: 'Ocala', state: 'FL', county: 'Marion County', primaryZip: '34471', allZips: ['34471', '34472', '34473', '34474', '34476', '34480'] },
    { slug: 'belleview-fl', name: 'Belleview', state: 'FL', county: 'Marion County', primaryZip: '34420' },
    { slug: 'summerfield-fl', name: 'Summerfield', state: 'FL', county: 'Marion County', primaryZip: '34491' },
    { slug: 'silver-springs-fl', name: 'Silver Springs', state: 'FL', county: 'Marion County', primaryZip: '34488' },
    { slug: 'dunnellon-fl', name: 'Dunnellon', state: 'FL', county: 'Marion County', primaryZip: '34431' },
    { slug: 'the-villages-fl', name: 'The Villages', state: 'FL', county: 'Sumter County', primaryZip: '32162' },
    { slug: 'lady-lake-fl', name: 'Lady Lake', state: 'FL', county: 'Lake County', primaryZip: '32159' },
    { slug: 'marion-county-fl', name: 'Marion County', state: 'FL', county: 'Marion County', primaryZip: '34470' },
  ],

  // Services (5 fence types)
  services: [
    {
      slug: 'vinyl-privacy-fence',
      name: 'Vinyl Privacy Fence',
      shortName: 'Vinyl Privacy',
      tagline: 'Premium privacy with 25-year lifespan',
      image: '/images/services/vinyl-privacy.jpg',
      priceRange: { min: 4500, max: 13000 },
      priceFromMonthly: 89,
      colors: ['White', 'White + Gray', 'Cream'],
      heights: ['4ft', '5ft', '6ft'],
      windRated: '130 MPH',
      lifespan: '25+ years',
      popular: true,
    },
    {
      slug: 'vinyl-picket-fence',
      name: 'Vinyl Picket Fence',
      shortName: 'Vinyl Picket',
      tagline: 'Decorative + curb appeal',
      image: '/images/services/vinyl-picket.jpg',
      priceRange: { min: 4000, max: 11000 },
      priceFromMonthly: 79,
      colors: ['White', 'Cream'],
      heights: ['3ft', '4ft', '5ft'],
      windRated: '130 MPH',
      lifespan: '25+ years',
    },
    {
      slug: 'durafence',
      name: 'DuraFence',
      shortName: 'DuraFence',
      tagline: 'Premium composite, hurricane-rated',
      image: '/images/services/durafence.jpg',
      priceRange: { min: 4000, max: 12000 },
      priceFromMonthly: 79,
      colors: ['White', 'Bronze'],
      heights: ['5ft', '6ft'],
      windRated: '160 MPH',
      lifespan: 'Lifetime warranty',
    },
    {
      slug: 'aluminum-fence',
      name: 'Aluminum Fence',
      shortName: 'Aluminum',
      tagline: 'Modern, low-maintenance, pool-code ready',
      image: '/images/services/aluminum.jpg',
      priceRange: { min: 4500, max: 12000 },
      priceFromMonthly: 89,
      colors: ['Black'],
      heights: ['4ft', '5ft', '6ft'],
      windRated: '160 MPH',
      lifespan: '50+ years',
    },
    {
      slug: 'pool-fence',
      name: 'Pool Fence',
      shortName: 'Pool Fence',
      tagline: 'Florida §515 code compliant',
      image: '/images/services/pool-fence.jpg',
      priceRange: { min: 3500, max: 9000 },
      priceFromMonthly: 69,
      colors: ['Black', 'White'],
      heights: ['4ft minimum'],
      compliant: 'FL §515 + HOA',
      lifespan: '25+ years',
    },
  ] as const,

  // Financing partners (6)
  financingPartners: [
    { name: 'Aqua Finance', type: 'Home improvement loans' },
    { name: 'Synchrony', type: 'Home design credit' },
    { name: 'Affirm', type: 'Buy now, pay later' },
    { name: 'Klarna', type: 'Buy now, pay later' },
    { name: 'Launch', type: 'Contractor financing' },
    { name: 'United Financial', type: 'Traditional loan' },
  ],

  financing: {
    minDown: 0,
    preQualifyTime: '60 seconds',
    creditImpact: 'No impact (soft pull)',
    typicalApr: 6.99,
    minMonths: 12,
    maxMonths: 160,
    defaultMonths: 60,
  },

  // USPs (in order of importance per briefing)
  usps: [
    { title: 'Less than 7 days install', body: 'From signed contract to fence in your yard. Urgent? 2-3 days possible.' },
    { title: '$0 down financing', body: 'Pre-qualify in 60 seconds with no credit impact. 6 lending partners.' },
    { title: 'Lifetime materials warranty', body: 'Vinyl and DuraFence carry a lifetime materials warranty — transferable to the next homeowner.' },
    { title: 'Family-owned, local', body: '5 years in Ocala. Same crew start to finish — no call centers, no out-of-state bosses.' },
  ],

  // Trust badges (for trust bar)
  trustBadges: [
    { label: 'Licensed & Insured', value: 'FL Contractor' },
    { label: 'Years in Ocala', value: '5+' },
    { label: 'Wind-rated', value: '160 MPH' },
    { label: 'Financing', value: '$0 Down' },
  ],

  // Webhook (will be set via env var)
  ghlWebhookUrl: import.meta.env.PUBLIC_GHL_WEBHOOK_URL || '',
  capiEndpoint: import.meta.env.PUBLIC_CAPI_ENDPOINT || '',
} as const;

export type Service = typeof BUSINESS.services[number];
export type ServiceArea = typeof BUSINESS.serviceAreas[number];
