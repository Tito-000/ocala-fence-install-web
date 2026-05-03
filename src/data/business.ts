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
    { slug: 'ocala-fl', name: 'Ocala', state: 'FL', county: 'Marion County', primaryZip: '34471', image: '/images/cities/ocala.webp', imageAlt: 'Aerial view of Ocala FL horse country — fence installation service area in Marion County', allZips: ['34471', '34472', '34473', '34474', '34476', '34480'] },
    { slug: 'belleview-fl', name: 'Belleview', state: 'FL', county: 'Marion County', primaryZip: '34420', image: '/images/cities/belleview.webp', imageAlt: 'Belleview FL small town with church steeple — fence installation in Marion County 34420' },
    { slug: 'summerfield-fl', name: 'Summerfield', state: 'FL', county: 'Marion County', primaryZip: '34491', image: '/images/cities/summerfield.webp', imageAlt: 'Aerial of Summerfield FL residential community with lake — fence installation Marion County 34491' },
    { slug: 'silver-springs-fl', name: 'Silver Springs', state: 'FL', county: 'Marion County', primaryZip: '34488', image: '/images/cities/silver-springs.webp', imageAlt: 'Silver Springs FL turquoise spring water with cypress trees — fence installation Marion County 34488' },
    { slug: 'dunnellon-fl', name: 'Dunnellon', state: 'FL', county: 'Marion County', primaryZip: '34431', image: '/images/cities/dunnellon.webp', imageAlt: 'Dunnellon FL Rainbow River with kayaks — fence installation service area Marion County 34431' },
    { slug: 'the-villages-fl', name: 'The Villages', state: 'FL', county: 'Sumter County', primaryZip: '32162', image: '/images/cities/the-villages.webp', imageAlt: 'Aerial of The Villages FL 55+ golf community — fence installation Sumter County 32162' },
    { slug: 'lady-lake-fl', name: 'Lady Lake', state: 'FL', county: 'Lake County', primaryZip: '32159', image: '/images/cities/lady-lake.webp', imageAlt: 'Lady Lake FL residential community surrounding circular lake — fence installation Lake County 32159' },
    { slug: 'marion-county-fl', name: 'Marion County', state: 'FL', county: 'Marion County', primaryZip: '34470', image: '/images/cities/marion-county.webp', imageAlt: 'Marion County FL horse country with white wooden horse fences — Ocala Fence Install service area' },
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
      pricePerFoot: { min: 30, max: 55 },
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
      pricePerFoot: { min: 25, max: 45 },
      priceFromMonthly: 79,
      colors: ['White', 'Cream'],
      heights: ['3ft', '4ft', '5ft'],
      windRated: '130 MPH',
      lifespan: '25+ years',
    },
    {
      slug: 'composite-fence',
      name: 'Composite Fence',
      shortName: 'Composite',
      tagline: 'Premium wood-look, hurricane-rated, zero rot',
      image: '/images/services/composite-fence.jpg',
      priceRange: { min: 4000, max: 12000 },
      pricePerFoot: { min: 28, max: 50 },
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
      pricePerFoot: { min: 32, max: 55 },
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
      pricePerFoot: { min: 28, max: 45 },
      priceFromMonthly: 69,
      colors: ['Black', 'White'],
      heights: ['4ft minimum'],
      compliant: 'FL §515 + HOA',
      lifespan: '25+ years',
    },
  ] as const,

  // Financing partners (6)
  financingPartners: [
    { name: 'Aqua Finance', type: 'Home improvement loans', logo: '/images/lenders/aqua-finance.svg' },
    { name: 'Synchrony', type: 'Home design credit', logo: '/images/lenders/synchrony.svg' },
    { name: 'Affirm', type: 'Buy now, pay later', logo: '/images/lenders/affirm.svg' },
    { name: 'Klarna', type: 'Buy now, pay later', logo: '/images/lenders/klarna.svg' },
    { name: 'Launch', type: 'Contractor financing', logo: '/images/lenders/launch.svg' },
    { name: 'United Financial', type: 'Traditional loan', logo: '/images/lenders/united-financial.svg' },
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
    { title: 'Lifetime materials warranty', body: 'Vinyl and composite fences carry a lifetime materials warranty — transferable to the next homeowner.' },
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
