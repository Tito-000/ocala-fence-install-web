import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    shortName: z.string(),
    tagline: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    priceMin: z.number(),
    priceMax: z.number(),
    priceFromMonthly: z.number(),
    colors: z.array(z.string()),
    heights: z.array(z.string()),
    windRated: z.string().optional(),
    lifespan: z.string(),
    popular: z.boolean().default(false),
    heroImage: z.string().optional(),
    benefits: z.array(z.object({
      title: z.string(),
      body: z.string(),
    })),
    styles: z.array(z.object({
      name: z.string(),
      body: z.string(),
      image: z.string().optional(),
    })).optional(),
    faqs: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })),
  }),
});

const cities = defineCollection({
  type: 'content',
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    state: z.string(),
    county: z.string(),
    primaryZip: z.string(),
    allZips: z.array(z.string()).optional(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    heroSubtitle: z.string(),
    intro: z.string(),
    neighborhoods: z.array(z.object({
      name: z.string(),
      zip: z.string().optional(),
    })).optional(),
    localAngles: z.array(z.object({
      title: z.string(),
      body: z.string(),
    })),
    faqs: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })),
  }),
});

const reviews = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    city: z.string(),
    rating: z.number().min(1).max(5),
    body: z.string(),
    date: z.string().optional(),
    source: z.enum(['google', 'facebook', 'yelp', 'manual']).default('manual'),
    serviceType: z.string().optional(),
    lang: z.enum(['en', 'es']).default('en'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { services, cities, reviews };
