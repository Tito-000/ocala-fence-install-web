// Long-form content per service page (intro, why, FAQs)
// Keeping it separate from business.ts so the Hero/Cards can stay lightweight.

export const SERVICES_CONTENT: Record<string, {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: { heading: string; paragraphs: string[] };
  whyCards: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
}> = {
  'vinyl-privacy-fence': {
    metaTitle: 'Vinyl Privacy Fence Installation Ocala FL | $0 Down · 25-Year Lifespan',
    metaDescription: 'Premium vinyl privacy fence installation in Ocala and Marion County. 130 MPH wind-rated, 25-year lifespan, lifetime materials warranty. $0 down financing. Less than 7 days install. Call (863) 377-0928.',
    heroTitle: 'Vinyl Privacy Fence Installation in <span class="text-highlight">Ocala, FL</span>',
    heroSubtitle: 'Premium 6ft vinyl privacy fences built to outlast Florida weather. 130 MPH wind-rated, 25-year manufacturer warranty, $0 down financing.',
    intro: {
      heading: 'The most popular fence in Marion County',
      paragraphs: [
        'Vinyl privacy fences are the #1 choice for Ocala homeowners — and for good reason. They give you full visual privacy from neighbors, block noise, keep pets and kids contained, and look new for 25+ years without painting, staining, or repairs.',
        'Our premium vinyl is engineered for Florida: UV-stabilized so it won\'t yellow under the sun, hurricane-rated to 130 MPH, and backed by a manufacturer\'s lifetime warranty that transfers to the next homeowner if you sell.',
        'We install our standard 6ft tall privacy panels in two colors (white and cream), with gates available in 5ft or 6ft widths. Most jobs are finished in less than 7 days from signed contract.',
      ],
    },
    whyCards: [
      { title: 'Lifetime Warranty', body: 'Manufacturer\'s lifetime materials warranty covers cracking, splitting, fading, and discoloration. Transferable to the next homeowner.' },
      { title: 'Zero Maintenance', body: 'Never paint, stain, or seal again. A garden hose is the only tool you need to keep it looking new for 25+ years.' },
      { title: 'Florida-Tough', body: 'UV-stabilized polymer formula stops yellowing under Ocala\'s harsh sun. Wind-rated to 130 MPH for hurricane resistance.' },
      { title: 'True Privacy', body: 'Solid 6ft panels with no gaps between boards. Full visual privacy from neighbors. Blocks noise. Keeps kids and pets in.' },
    ],
    faqs: [
      { q: 'How much does a vinyl privacy fence cost in Ocala?', a: 'Most projects run between <strong>$4,500 and $13,000</strong> depending on length, height, and gates. Average yard runs $7,500. With $0 down financing, monthly payments typically fall between $89 and $200.' },
      { q: 'Will vinyl yellow or fade in Florida sun?', a: 'No. Premium UV-stabilized vinyl is engineered specifically to resist yellowing and fading. The lifetime warranty covers fading and discoloration — if it ever yellows, the manufacturer replaces it.' },
      { q: 'Can vinyl handle hurricanes?', a: 'Yes. Our vinyl privacy panels are <strong>130 MPH wind-rated</strong> when installed properly with our concrete-set posts. We meet or exceed Florida building code for fence wind resistance.' },
      { q: 'How long does vinyl privacy fence installation take?', a: 'Most jobs finish in <strong>less than 7 days</strong> from signed contract. Urgent timelines (2-3 days) are possible for smaller projects. We handle Marion County permits.' },
      { q: 'Does vinyl require painting or maintenance?', a: 'No painting, no staining, no sealing — ever. The only maintenance is rinsing with a garden hose 1-2 times a year if you want.' },
    ],
  },
  'vinyl-picket-fence': {
    metaTitle: 'Vinyl Picket Fence Installation Ocala FL | $0 Down · Lifetime Warranty',
    metaDescription: 'Classic vinyl picket fence installation in Ocala and Marion County. 25-year lifespan, lifetime materials warranty, $0 down financing. Less than 7 days install. Call (863) 377-0928.',
    heroTitle: 'Vinyl Picket Fence Installation in <span class="text-highlight">Ocala, FL</span>',
    heroSubtitle: 'Classic curb appeal that lasts a lifetime. Decorative 6ft tall vinyl picket fences with 5ft or 6ft wide gates. $0 down financing, lifetime warranty.',
    intro: {
      heading: 'Curb appeal that lasts a lifetime',
      paragraphs: [
        'A vinyl picket fence adds instant character and curb appeal to any Ocala home — without the maintenance headaches of wood. Our premium vinyl pickets give you the classic look you want, with the durability you need in Florida.',
        'Standard 6ft tall panels in white or cream finishes, with gates available in 5ft or 6ft widths. Perfect for front yards, garden borders, pool decoration, and pet containment without blocking views.',
        'Like all our vinyl, it carries a lifetime materials warranty and never needs painting. Most installations finish in less than 7 days.',
      ],
    },
    whyCards: [
      { title: 'Classic Look, Modern Materials', body: 'Get the timeless look of a white picket fence — without the rotting, painting, and replacing every 10 years.' },
      { title: 'Lifetime Warranty', body: 'Manufacturer\'s lifetime materials warranty. Transferable to next homeowner — adds value if you sell.' },
      { title: 'Wind-Rated 130 MPH', body: 'Hurricane-resistant when installed with our concrete-set posts. Meets Florida building code.' },
      { title: 'Pet & Garden Friendly', body: 'Spacing keeps small dogs in without blocking views. Great for front yards and decorative borders.' },
    ],
    faqs: [
      { q: 'How tall do vinyl picket fences come?', a: 'We install <strong>6ft tall</strong> picket fences as standard, with gates in <strong>5ft or 6ft widths</strong>. The full height gives you reliable pet containment plus the classic decorative look.' },
      { q: 'Will vinyl picket keep my dog in?', a: 'Yes. Our 6ft tall pickets are spaced narrow enough to keep small to medium dogs in. For larger dogs that jump, we recommend a vinyl privacy fence instead.' },
      { q: 'Can I install a picket fence in HOA neighborhoods?', a: 'Most Ocala HOAs allow white or cream vinyl picket. We handle the HOA approval paperwork as part of your project.' },
      { q: 'How does vinyl compare to wood picket?', a: 'Vinyl costs slightly more upfront but lasts <strong>3-4x longer</strong>, never needs paint or stain, and won\'t rot, warp, or attract termites. Total cost over 20 years is much lower.' },
      { q: 'How long does picket fence installation take?', a: 'Most picket projects finish in <strong>3-5 days</strong>. Smaller jobs can be done in 1-2 days.' },
    ],
  },
  'aluminum-fence': {
    metaTitle: 'Aluminum Fence Installation Ocala FL | Pool-Code Ready · Hurricane-Rated',
    metaDescription: 'Modern black aluminum fence installation in Ocala and Marion County. Pool-code ready, 160 MPH wind-rated, 50+ year lifespan, $0 down financing. Call (863) 377-0928.',
    heroTitle: 'Aluminum Fence Installation in <span class="text-highlight">Ocala, FL</span>',
    heroSubtitle: 'Sleek black aluminum fences with hurricane-grade strength and zero rust. 160 MPH wind-rated, 50+ year lifespan, pool-code ready.',
    intro: {
      heading: 'Modern, low-maintenance, hurricane-tough',
      paragraphs: [
        'Aluminum is the modern choice for Ocala homeowners who want sleek black fence lines without sacrificing strength. Pool-code compliant, hurricane-rated, and rust-proof for 50+ years.',
        'Standard 6ft tall panels with gates in 5ft or 6ft widths. The matte black powder-coat finish never rusts, never peels, and never needs painting.',
        'Perfect for pool perimeters (meets Florida §515 code), front-yard accents, side yards, and any property where you want the fence to disappear into the landscape.',
      ],
    },
    whyCards: [
      { title: 'Never Rusts', body: 'Aluminum doesn\'t rust like wrought iron. Powder-coated for color durability — looks new for 50+ years.' },
      { title: 'Pool-Code Ready', body: 'Meets Florida §515 pool code: 4ft min height, no horizontal climbable rails, self-closing magnetic gates available.' },
      { title: '160 MPH Wind-Rated', body: 'Hurricane-grade aluminum tubing with concrete-set posts. Exceeds Florida building code.' },
      { title: 'See-Through Security', body: 'Maintains your view of the landscape, lake, or property — unlike vinyl privacy. Adds security without blocking sight lines.' },
    ],
    faqs: [
      { q: 'How much does aluminum fencing cost in Ocala?', a: 'Aluminum runs <strong>$4,500 to $12,000</strong> for most projects. Average pool perimeter (around an in-ground pool) runs $5,000-$7,000.' },
      { q: 'Does aluminum meet pool code?', a: 'Yes — our aluminum fences meet Florida <strong>§515 pool code</strong> when configured to 4ft minimum height with no horizontal climbable rails. We install self-closing magnetic gates rated for pool safety.' },
      { q: 'Will aluminum rust like wrought iron?', a: 'No. Aluminum is rust-proof by nature, and the powder-coat finish protects against scratches and color fading. Wrought iron rusts within 5-10 years in Florida humidity — aluminum lasts 50+.' },
      { q: 'Can aluminum block my view?', a: 'No — aluminum keeps your view. If you want full privacy, choose a vinyl privacy fence. Aluminum is for security, pool code, and decorative perimeters where you want to see through.' },
      { q: 'How long does aluminum fence installation take?', a: 'Most projects finish in <strong>3-5 days</strong>. Pool perimeters can sometimes be done in 1-2 days if there are no permit delays.' },
    ],
  },
  'durafence': {
    metaTitle: 'Dura Fence Installation Ocala FL | Most Requested · Lifetime Warranty',
    metaDescription: 'Dura Fence installation in Ocala and Marion County. The most requested fence in our lineup. Available in White, Bronze, and Black. 160 MPH wind-rated, lifetime warranty. $0 down financing. Call (863) 377-0928.',
    heroTitle: 'Dura Fence Installation in <span class="text-highlight">Ocala, FL</span>',
    heroSubtitle: 'Our most requested fence — premium look, hurricane-grade strength, lifetime warranty. Available in White, Bronze, and Black. 160 MPH wind-rated.',
    intro: {
      heading: 'Marion County\'s most requested fence',
      paragraphs: [
        'Dura Fence is the fence Ocala homeowners ask for the most. It combines the premium look of a high-end residential fence with the engineering toughness to outlast Florida hurricanes — all backed by a lifetime warranty.',
        'Available in three colors: <strong>White</strong> for classic curb appeal, <strong>Bronze</strong> for a warm modern look, and <strong>Black</strong> for sleek contemporary homes. Standard 6ft tall panels with gates in 5ft or 6ft widths, perfect for backyard privacy and front-yard statements.',
        'Hurricane-rated to 160 MPH and engineered to never warp, rot, fade, or attract termites. Most installs finish in 5-7 days from signed contract.',
      ],
    },
    whyCards: [
      { title: 'Most Requested', body: 'Marion County\'s #1 fence — homeowners pick Dura Fence for its premium appearance and lifetime durability.' },
      { title: '3 Premium Colors', body: 'White for classic curb appeal, Bronze for warm modern look, Black for sleek contemporary homes.' },
      { title: '160 MPH Hurricane-Rated', body: 'Built for Florida storms. Concrete-set posts and engineered panels meet or exceed wind code.' },
      { title: 'Lifetime Warranty', body: 'Manufacturer\'s lifetime warranty against cracking, fading, warping, and material failure. Transferable to next homeowner.' },
    ],
    faqs: [
      { q: 'How much does Dura Fence cost in Ocala?', a: 'Most Dura Fence projects in Marion County run between <strong>$5,000 and $14,000</strong>, or $32-58 per linear foot installed. With $0 down financing, monthly payments typically fall between $99 and $250.' },
      { q: 'What colors does Dura Fence come in?', a: 'Three premium colors: <strong>White, Bronze, and Black</strong>. White is the most popular for traditional homes, Bronze for warm/Mediterranean styles, Black for modern homes.' },
      { q: 'Why is Dura Fence so popular?', a: 'It looks premium, lasts a lifetime, and never needs maintenance. No painting, no staining, no rotting. Plus the 160 MPH wind rating makes it one of the toughest residential fences for Florida storms.' },
      { q: 'How does Dura Fence compare to vinyl?', a: 'Dura Fence has a more premium look and 30 MPH higher wind rating (160 vs 130). Vinyl is cheaper. If you want the highest-end residential fence, Dura Fence wins.' },
      { q: 'Does Dura Fence require maintenance?', a: 'No painting, no staining, no sealing — ever. Hose it down once or twice a year if you want. The factory finish doesn\'t fade, chip, or yellow.' },
      { q: 'How long does Dura Fence installation take?', a: 'Most Dura Fence projects finish in <strong>5-7 days</strong> from signed contract. Larger lots can take a few days more.' },
      { q: 'Will Dura Fence handle Florida hurricanes?', a: 'Yes — better than wood or vinyl. Engineered panels and concrete-set posts are <strong>160 MPH wind-rated</strong>, exceeding Florida building code for the highest wind zones.' },
    ],
  },
};
