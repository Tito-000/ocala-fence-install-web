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
        'We install in 4ft, 5ft, and 6ft heights, in three colors (white, white with gray, cream). Most jobs are finished in less than 7 days from signed contract.',
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
    heroSubtitle: 'Classic curb appeal that lasts a lifetime. Decorative vinyl picket fences in 3ft, 4ft, and 5ft heights. $0 down financing, lifetime warranty.',
    intro: {
      heading: 'Curb appeal that lasts a lifetime',
      paragraphs: [
        'A vinyl picket fence adds instant character and curb appeal to any Ocala home — without the maintenance headaches of wood. Our premium vinyl pickets give you the classic look you want, with the durability you need in Florida.',
        'Available in 3ft, 4ft, and 5ft heights, with white or cream finishes. Perfect for front yards, garden borders, pool decoration, and pet containment without blocking views.',
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
      { q: 'How tall do vinyl picket fences come?', a: 'We install <strong>3ft, 4ft, and 5ft</strong> heights. 3ft is most common for front yards. 4-5ft is better if you have small pets to contain.' },
      { q: 'Will vinyl picket keep my dog in?', a: 'For small to medium dogs, yes — pickets are spaced narrow enough. For larger or jumpy dogs, we recommend 4-5ft height with closer picket spacing or a privacy fence.' },
      { q: 'Can I install a picket fence in HOA neighborhoods?', a: 'Most Ocala HOAs allow white or cream vinyl picket. We handle the HOA approval paperwork as part of your project.' },
      { q: 'How does vinyl compare to wood picket?', a: 'Vinyl costs slightly more upfront but lasts <strong>3-4x longer</strong>, never needs paint or stain, and won\'t rot, warp, or attract termites. Total cost over 20 years is much lower.' },
      { q: 'How long does picket fence installation take?', a: 'Most picket projects finish in <strong>3-5 days</strong>. Smaller jobs can be done in 1-2 days.' },
    ],
  },
  'composite-fence': {
    metaTitle: 'Composite Fence Installation Ocala FL | Hurricane-Rated · Lifetime Warranty',
    metaDescription: 'Composite fence installation in Ocala and Marion County. Wood-look beauty, zero rot, hurricane-rated 160 MPH, lifetime warranty. $0 down financing. Less than 7 days install. Call (863) 377-0928.',
    heroTitle: 'Composite Fence Installation in <span class="text-highlight">Ocala, FL</span>',
    heroSubtitle: 'Premium composite fence with the warm look of wood — and the strength of steel-core engineering. 160 MPH wind-rated, lifetime warranty, $0 down financing.',
    intro: {
      heading: 'The ultimate Florida fence',
      paragraphs: [
        'Composite fence is the smartest upgrade from wood: it gives you the warm wood-look you want, without the rotting, splinters, and re-staining every 2-3 years that real wood demands in Florida\'s humidity.',
        'Engineered with a steel-reinforced core wrapped in weather-tough composite, our composite fence is hurricane-rated to 160 MPH. It won\'t crack, fade, warp, or attract termites — and it carries a lifetime warranty.',
        'Available in multiple wood-tone colors and modern styles, in 5ft and 6ft heights. Perfect for high-end homes, front-of-property statement fences, sound barriers, and HOAs that want the look of wood with zero maintenance.',
      ],
    },
    whyCards: [
      { title: 'Wood Look, Zero Rot', body: 'The warm appearance of natural wood with none of the maintenance. No splinters, no rot, no termites, no re-staining every 2 years.' },
      { title: '160 MPH Wind-Rated', body: 'Steel-reinforced core makes this our toughest fence. Hurricane-rated to 160 MPH — exceeds Florida building code for every wind zone.' },
      { title: 'Lifetime Warranty', body: 'Manufacturer\'s lifetime warranty against cracking, fading, warping, and material failure. Transferable to next homeowner — adds value if you sell.' },
      { title: 'Sound Barrier', body: 'Solid composite panels block road noise and neighbor noise far better than vinyl or wood. Great for homes near busy streets.' },
    ],
    faqs: [
      { q: 'How much does composite fence cost in Ocala?', a: 'Most composite fence projects in Marion County run between <strong>$4,000 and $12,000</strong>, or $28-50 per linear foot installed. With $0 down financing, monthly payments typically fall between $79 and $200.' },
      { q: 'Is composite fence better than wood?', a: 'For Florida\'s climate, yes. Composite gives you the warm wood look <strong>without the rot, splinters, termites, or staining</strong> that wood requires every 2-3 years. It also lasts 3-4x longer with zero maintenance.' },
      { q: 'Composite fence vs vinyl — which is better?', a: 'Composite has a more upscale, real-wood appearance and is hurricane-rated 30 MPH higher than vinyl (160 vs 130). Vinyl is cheaper. If you want the look of wood and maximum durability, composite wins. If you want lowest cost, vinyl wins.' },
      { q: 'Can composite fence be installed on a slope?', a: 'Yes. We rack the panels to follow ground contour. Most Marion County properties have some slope and composite handles it well — better than wood or chain link.' },
      { q: 'Does composite fence require maintenance?', a: 'No painting, no staining, no sealing — ever. Hose it down once or twice a year if you want. The material doesn\'t fade like wood or yellow like cheap vinyl.' },
      { q: 'How long does composite fence installation take?', a: 'Most projects finish in <strong>5-7 days</strong> from signed contract. The panels are heavier than vinyl so installation is slightly slower, but well within our standard 7-day promise.' },
      { q: 'Will composite fence handle Florida hurricanes?', a: 'Yes — better than wood or vinyl. Steel-reinforced composite panels are <strong>160 MPH wind-rated</strong> when installed with our concrete-set posts. Exceeds Florida building code for the highest wind zones.' },
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
        'Available in 4ft, 5ft, and 6ft heights. The matte black powder-coat finish never rusts, never peels, and never needs painting.',
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
      { q: 'Can aluminum block my view?', a: 'No — aluminum keeps your view. If you want privacy, choose vinyl privacy or composite fence. Aluminum is for security, pool code, and decorative perimeters where you want to see through.' },
      { q: 'How long does aluminum fence installation take?', a: 'Most projects finish in <strong>3-5 days</strong>. Pool perimeters can sometimes be done in 1-2 days if there are no permit delays.' },
    ],
  },
  'pool-fence': {
    metaTitle: 'Pool Fence Installation Ocala FL | Florida §515 Code Compliant',
    metaDescription: 'Pool fence installation in Ocala and Marion County. Florida §515 code compliant, self-closing magnetic gates, $0 down financing. Same-day estimates. Call (863) 377-0928.',
    heroTitle: 'Pool Fence Installation in <span class="text-highlight">Ocala, FL</span>',
    heroSubtitle: 'Florida §515 code-compliant pool fences. Self-closing magnetic gates, 4ft minimum, no climbable rails. Pass your inspection on the first try.',
    intro: {
      heading: 'Pass your pool inspection — guaranteed',
      paragraphs: [
        'Florida §515 requires every residential pool to have a code-compliant fence. We specialize in pool fences that pass inspection on the first try — no rework, no delays.',
        'Our pool fences meet all four §515 requirements: minimum 4ft height, no climbable horizontal rails between pickets, self-closing and self-latching gates with magnets, and openings less than 4 inches wide.',
        'Available in black aluminum or white vinyl, with same-day on-site estimates. Most pool fences install in 2-3 days.',
      ],
    },
    whyCards: [
      { title: 'FL §515 Compliant', body: 'Designed and installed to meet every Florida pool code requirement. We guarantee your fence passes inspection.' },
      { title: 'Self-Closing Gates', body: 'Magnetic self-latching gates with adjustable closers. Tested in front of you at handover so you see it works.' },
      { title: 'Permits Handled', body: 'We pull the Marion County pool fence permit and coordinate the inspection. You don\'t lift a finger.' },
      { title: 'Same-Day Quotes', body: 'Pool inspection deadline coming up? Call us — we come measure within 24 hours and quote on the spot.' },
    ],
    faqs: [
      { q: 'What does Florida §515 pool code require?', a: '<strong>Four things:</strong> (1) minimum 48-inch height, (2) no climbable horizontal rails between pickets, (3) self-closing self-latching gates with latches at least 54 inches above ground, (4) openings under 4 inches.' },
      { q: 'How much does a pool fence cost in Ocala?', a: 'Pool fence projects typically run <strong>$3,500 to $9,000</strong> depending on perimeter length. Average in-ground pool fence runs $5,000-$6,500.' },
      { q: 'How fast can you install a pool fence?', a: 'For urgent inspection deadlines, we can install in <strong>2-3 days</strong> from contract. Standard projects finish in 5-7 days.' },
      { q: 'Aluminum vs vinyl for pool fences?', a: 'Most Ocala homeowners choose <strong>black aluminum</strong> — it disappears visually around the pool, never rusts, and meets §515 perfectly. White vinyl pool fences work too if you prefer that look.' },
      { q: 'Do you handle the pool fence permit?', a: 'Yes. We pull the Marion County permit, schedule the inspection, and walk you through the gate self-close test at handover.' },
    ],
  },
};
