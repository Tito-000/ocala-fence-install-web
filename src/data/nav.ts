import { BUSINESS } from './business';

export const PRIMARY_NAV = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: BUSINESS.services.map((s) => ({
      label: s.shortName,
      href: `/services/${s.slug}`,
    })),
  },
  {
    label: 'Areas',
    href: '/areas',
    children: BUSINESS.serviceAreas.map((c) => ({
      label: c.name,
      href: `/areas/${c.slug}`,
    })),
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Financing', href: '/financing' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'About', href: '/about' },
];

export const FOOTER_NAV = {
  services: BUSINESS.services.map((s) => ({
    label: s.name,
    href: `/services/${s.slug}`,
  })),
  areas: BUSINESS.serviceAreas.slice(0, 7).map((c) => ({
    label: `${c.name}, ${c.state}`,
    href: `/areas/${c.slug}`,
  })),
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Free Estimate', href: '/free-estimate' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms', href: '/terms' },
  ],
};
