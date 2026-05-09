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
    { slug: 'marion-oaks-fl', name: 'Marion Oaks', state: 'FL', county: 'Marion County', primaryZip: '34473', image: '/images/cities/marion-oaks.webp', imageAlt: 'Marion Oaks FL residential community with palm trees and family homes — Ocala Fence Install primary service area', allZips: ['34473', '34476'], primary: true },
    { slug: 'ocala-fl', name: 'Ocala', state: 'FL', county: 'Marion County', primaryZip: '34471', image: '/images/cities/ocala.webp', imageAlt: 'Aerial view of Ocala FL horse country — fence installation service area in Marion County', allZips: ['34471', '34472', '34474', '34480'] },
    { slug: 'belleview-fl', name: 'Belleview', state: 'FL', county: 'Marion County', primaryZip: '34420', image: '/images/cities/belleview.webp', imageAlt: 'Belleview FL small town with church steeple — fence installation in Marion County 34420' },
    { slug: 'summerfield-fl', name: 'Summerfield', state: 'FL', county: 'Marion County', primaryZip: '34491', image: '/images/cities/summerfield.webp', imageAlt: 'Aerial of Summerfield FL residential community with lake — fence installation Marion County 34491' },
    { slug: 'silver-springs-fl', name: 'Silver Springs', state: 'FL', county: 'Marion County', primaryZip: '34488', image: '/images/cities/silver-springs.webp', imageAlt: 'Silver Springs FL turquoise spring water with cypress trees — fence installation Marion County 34488' },
    { slug: 'dunnellon-fl', name: 'Dunnellon', state: 'FL', county: 'Marion County', primaryZip: '34431', image: '/images/cities/dunnellon.webp', imageAlt: 'Dunnellon FL Rainbow River with kayaks — fence installation service area Marion County 34431' },
    { slug: 'the-villages-fl', name: 'The Villages', state: 'FL', county: 'Sumter County', primaryZip: '32162', image: '/images/cities/the-villages.webp', imageAlt: 'Aerial of The Villages FL 55+ golf community — fence installation Sumter County 32162' },
    { slug: 'lady-lake-fl', name: 'Lady Lake', state: 'FL', county: 'Lake County', primaryZip: '32159', image: '/images/cities/lady-lake.webp', imageAlt: 'Lady Lake FL residential community surrounding circular lake — fence installation Lake County 32159' },
    { slug: 'marion-county-fl', name: 'Marion County', state: 'FL', county: 'Marion County', primaryZip: '34470', image: '/images/cities/marion-county.webp', imageAlt: 'Marion County FL horse country with white wooden horse fences — Ocala Fence Install service area' },
  ],

  // Extended coverage — additional cities within 50 miles of Marion Oaks/Ocala
  // (no dedicated page, but listed for SEO + transparency)
  extendedCoverage: {
    radiusMiles: 50,
    counties: [
      { name: 'Marion County', primary: true },
      { name: 'Sumter County' },
      { name: 'Lake County' },
      { name: 'Citrus County' },
      { name: 'Alachua County' },
      { name: 'Levy County' },
    ],
    additionalCities: [
      { name: 'Crystal River', state: 'FL', county: 'Citrus County', zip: '34428' },
      { name: 'Inverness', state: 'FL', county: 'Citrus County', zip: '34450' },
      { name: 'Homosassa', state: 'FL', county: 'Citrus County', zip: '34446' },
      { name: 'Gainesville', state: 'FL', county: 'Alachua County', zip: '32601' },
      { name: 'Williston', state: 'FL', county: 'Levy County', zip: '32696' },
      { name: 'Leesburg', state: 'FL', county: 'Lake County', zip: '34748' },
      { name: 'Eustis', state: 'FL', county: 'Lake County', zip: '32726' },
      { name: 'Tavares', state: 'FL', county: 'Lake County', zip: '32778' },
      { name: 'Mount Dora', state: 'FL', county: 'Lake County', zip: '32757' },
      { name: 'Wildwood', state: 'FL', county: 'Sumter County', zip: '34785' },
      { name: 'Bushnell', state: 'FL', county: 'Sumter County', zip: '33513' },
      { name: 'Anthony', state: 'FL', county: 'Marion County', zip: '32617' },
      { name: 'Reddick', state: 'FL', county: 'Marion County', zip: '32686' },
      { name: 'Citra', state: 'FL', county: 'Marion County', zip: '32113' },
      { name: 'Sparr', state: 'FL', county: 'Marion County', zip: '32192' },
      { name: 'Fort McCoy', state: 'FL', county: 'Marion County', zip: '32134' },
      { name: 'Ocklawaha', state: 'FL', county: 'Marion County', zip: '32179' },
      { name: 'Weirsdale', state: 'FL', county: 'Marion County', zip: '32195' },
    ],
  },

  // Services (4 fence types) — Dura Fence first as Most Popular
  services: [
    {
      slug: 'durafence',
      name: 'Dura Fence',
      shortName: 'Dura Fence',
      tagline: 'Most requested · Premium look + lifetime warranty',
      image: '/images/services/durafence.webp',
      image2: '/images/services/durafence-intro.webp',
      priceRange: { min: 5000, max: 14000 },
      pricePerFoot: { min: 32, max: 58 },
      priceFromMonthly: 99,
      colors: ['White', 'Bronze', 'Black'],
      heights: ['6ft'],
      gateWidths: ['5ft', '6ft'],
      windRated: '160 MPH',
      lifespan: 'Lifetime warranty',
      popular: true,
    },
    {
      slug: 'vinyl-privacy-fence',
      name: 'Vinyl Privacy Fence',
      shortName: 'Vinyl Privacy',
      tagline: 'Premium privacy with 25-year lifespan',
      image: '/images/services/vinyl-privacy.webp',
      image2: '/images/services/vinyl-privacy-intro.webp',
      priceRange: { min: 4500, max: 13000 },
      pricePerFoot: { min: 30, max: 55 },
      priceFromMonthly: 89,
      colors: ['White', 'Cream'],
      heights: ['6ft'],
      gateWidths: ['5ft', '6ft'],
      windRated: '130 MPH',
      lifespan: '25+ years',
    },
    {
      slug: 'vinyl-picket-fence',
      name: 'Vinyl Picket Fence',
      shortName: 'Vinyl Picket',
      tagline: 'Decorative + curb appeal',
      image: '/images/services/vinyl-picket.webp',
      priceRange: { min: 4000, max: 11000 },
      pricePerFoot: { min: 25, max: 45 },
      priceFromMonthly: 79,
      colors: ['White', 'Cream'],
      heights: ['6ft'],
      gateWidths: ['5ft', '6ft'],
      windRated: '130 MPH',
      lifespan: '25+ years',
    },
    {
      slug: 'aluminum-fence',
      name: 'Aluminum Fence',
      shortName: 'Aluminum',
      tagline: 'Modern, low-maintenance, pool-code ready',
      image: '/images/services/aluminum.webp',
      priceRange: { min: 4500, max: 12000 },
      pricePerFoot: { min: 32, max: 55 },
      priceFromMonthly: 89,
      colors: ['Black'],
      heights: ['6ft'],
      gateWidths: ['5ft', '6ft'],
      windRated: '160 MPH',
      lifespan: '50+ years',
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
