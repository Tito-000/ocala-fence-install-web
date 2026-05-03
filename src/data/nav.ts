import { BUSINESS } from './business';

export const PRIMARY_NAV = [
  { label: 'Home', href: '/' },
  {
    label: 'Fence Types',
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
  { label: 'Blog', href: '/blog' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Process', href: '/about/our-process' },
      { label: 'Our Mission', href: '/about/our-mission' },
      { label: 'FAQs', href: '/about/faqs' },
    ],
  },
  { label: 'Contact', href: '/contact' },
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
