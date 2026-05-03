// Long-form content per city page (intro, neighborhoods, local FAQs)

export const CITIES_CONTENT: Record<string, {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  zips: string[];
  neighborhoods: string[];
  intro: { heading: string; paragraphs: string[] };
  whyLocal: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
}> = {
  'ocala-fl': {
    metaTitle: 'Fence Installation Ocala FL | $0 Down · Done in Less Than 7 Days',
    metaDescription: 'Premium fence installation in Ocala, FL. Vinyl, composite, aluminum, pool fences. Marion County permits handled. $0 down financing. Same-day estimates. Call (863) 377-0928.',
    heroTitle: 'Fence Installation in <span class="text-primary">Ocala, FL</span>',
    heroSubtitle: 'Marion County\'s family-owned fence team. Vinyl, composite, aluminum, and pool fences installed in less than 7 days. $0 down financing.',
    zips: ['34470', '34471', '34472', '34473', '34474', '34475', '34476', '34479', '34480', '34481', '34482'],
    neighborhoods: ['Marion Oaks', 'Silver Springs Shores', 'On Top of the World', 'Stone Creek', 'Calesa Township', 'JB Ranch', 'Oak Run', 'Spruce Creek', 'Pine Run', 'Heath Brook', 'Magnolia'],
    intro: {
      heading: 'Ocala homeowners trust us with their fence installation',
      paragraphs: [
        'Ocala backs up to wild Florida. Bears, coyotes, gators — they don\'t stop at property lines. We build fences that do. Whether you\'re in Marion Oaks, Heath Brook, On Top of the World, or any other Ocala neighborhood, we install premium vinyl, composite, aluminum, and pool fences that pass inspection and outlast Florida weather.',
        'We\'re locally based in Ocala, we know Marion County permits inside and out, and we\'ve installed fences across every ZIP from 34470 to 34482. Same-day estimates Mon-Sun, $0 down financing, and most jobs finished in less than 7 days.',
      ],
    },
    whyLocal: [
      { title: 'Bear & Wildlife Protection', body: 'Ocala is in black bear territory. Our 6ft vinyl privacy and composite fence panels keep bears, coyotes, and gators out of your yard.' },
      { title: '130 MPH Hurricane-Rated', body: 'Florida storms are no joke. Our concrete-set posts and reinforced panels meet or exceed Florida building code for wind resistance.' },
      { title: 'Marion County Permits Handled', body: 'We pull every permit, schedule the inspection, and walk you through the final sign-off. You don\'t lift a finger.' },
    ],
    faqs: [
      { q: 'Do I need a fence permit in Marion County?', a: 'In <strong>unincorporated Marion County</strong>, no permit is needed for residential fences under 6 feet. In the <strong>City of Ocala limits</strong>, most fences require a permit. We handle the permit process either way — pull, schedule, and pass the inspection.' },
      { q: 'How much does a fence cost in Ocala?', a: 'Most projects run between <strong>$4,000 and $13,000</strong> depending on length, height, material, and gates. Average Ocala backyard runs $7,000-$8,500. With $0 down financing, monthly payments typically fall between $79 and $200.' },
      { q: 'What about black bears? Will a fence keep them out?', a: 'Yes. Our 6ft <strong>vinyl privacy</strong> and <strong>composite fence</strong> panels are solid and tall enough to keep bears out. We\'ve installed dozens of bear-proof fences in Ocala neighborhoods near wooded areas.' },
      { q: 'Do you serve all Ocala ZIP codes?', a: 'Yes. We cover every Ocala ZIP from <strong>34470 to 34482</strong>, including Marion Oaks, Silver Springs Shores, On Top of the World, Stone Creek, Calesa Township, Heath Brook, and all surrounding subdivisions.' },
      { q: 'How fast can you install a fence in Ocala?', a: 'Most installations finish in <strong>less than 7 days</strong> from signed contract. Urgent timelines (2-3 days) are possible for smaller projects.' },
      { q: 'Can you install a fence with HOA approval in Ocala?', a: 'Yes — we have experience with HOAs across <strong>On Top of the World, Stone Creek, Spruce Creek, Oak Run</strong>, and most Ocala master-planned communities. We help with HOA submission paperwork.' },
    ],
  },
  'belleview-fl': {
    metaTitle: 'Fence Installation Belleview FL | $0 Down · Marion County',
    metaDescription: 'Fence installation in Belleview, FL (34420). Vinyl, composite, aluminum, pool fences. $0 down financing. Less than 7 days install. Call (863) 377-0928.',
    heroTitle: 'Fence Installation in <span class="text-primary">Belleview, FL</span>',
    heroSubtitle: 'Premium fence installation in Belleview and South Marion County. Family-owned, $0 down financing, less than 7 days install.',
    zips: ['34420', '34421'],
    neighborhoods: ['Lake Lillian', 'Belleview Heights', 'Belleview Cove', 'Honey Lake', 'Sun Country'],
    intro: {
      heading: 'Belleview homeowners get fences installed fast',
      paragraphs: [
        'Belleview is one of our favorite ZIP codes to work in. Quiet streets, mature oak trees, friendly neighbors, and homeowners who want a fence that lasts decades — not five years.',
        'We\'ve installed fences across Belleview Heights, Lake Lillian, and the small subdivisions east of US-301. Same Marion County permits, same 7-day install, same lifetime warranty as everywhere else we work.',
      ],
    },
    whyLocal: [
      { title: 'South Marion Specialists', body: 'We\'re close — most Belleview installs we get to in 24 hours for the on-site estimate.' },
      { title: 'Marion County Permits', body: 'Same Marion County permit process as Ocala. We handle every step.' },
      { title: 'Bear & Wildlife Ready', body: 'Belleview borders the Ocala National Forest. Our 6ft privacy panels keep wildlife out of your yard.' },
    ],
    faqs: [
      { q: 'Do you serve all Belleview ZIP codes?', a: 'Yes — Belleview ZIPs <strong>34420 and 34421</strong>, plus all surrounding South Marion County areas like Sun Country and Lake Lillian.' },
      { q: 'How long does fence installation take in Belleview?', a: 'Most Belleview projects finish in <strong>less than 7 days</strong> from signed contract. Smaller backyards can be done in 3-5 days.' },
      { q: 'Do I need a permit for a fence in Belleview?', a: 'Belleview is in <strong>unincorporated Marion County</strong>, so most residential fences under 6ft don\'t require a permit. Inside city limits, permits may apply — we handle either way.' },
      { q: 'What\'s the cheapest fence option in Belleview?', a: '<strong>Vinyl picket fence</strong> typically starts around $4,000 for a small front yard. Vinyl privacy and composite fence start higher but include lifetime warranty.' },
    ],
  },
  'summerfield-fl': {
    metaTitle: 'Fence Installation Summerfield FL | Stonecrest · Del Webb · 34491',
    metaDescription: 'Fence installation in Summerfield, FL (34491). Stonecrest, Del Webb Spruce Creek, Spruce Creek Country Club. $0 down financing. Call (863) 377-0928.',
    heroTitle: 'Fence Installation in <span class="text-primary">Summerfield, FL</span>',
    heroSubtitle: 'Premium fence installation in Summerfield, including Stonecrest, Del Webb, and Spruce Creek communities. Marion County permits handled.',
    zips: ['34491', '34492'],
    neighborhoods: ['Stonecrest', 'Del Webb Spruce Creek', 'Spruce Creek Country Club', 'Spruce Creek South', 'Spruce Creek Preserve'],
    intro: {
      heading: 'Summerfield 55+ communities trust us with their fences',
      paragraphs: [
        'Summerfield is home to some of Marion County\'s most active 55+ communities — Stonecrest, Del Webb Spruce Creek, Spruce Creek Country Club. We know every HOA in this ZIP and what they\'ll approve.',
        'Premium aluminum fences for pool perimeters, decorative vinyl picket for front yards, and full vinyl privacy for back yards. Same-day estimates, $0 down financing, less than 7 days install.',
      ],
    },
    whyLocal: [
      { title: 'HOA Specialists', body: 'We work with Stonecrest, Del Webb, and Spruce Creek HOAs every week. We know exactly what they approve.' },
      { title: 'Pool-Code Pros', body: 'Most Summerfield homes have pools. Our aluminum fences meet Florida §515 code on the first inspection.' },
      { title: 'Family-Owned Local', body: 'No call center, no out-of-state bosses. Andry direct.' },
    ],
    faqs: [
      { q: 'Do you work with Stonecrest HOA?', a: 'Yes. We\'ve installed fences across Stonecrest for years. We know their approved colors, heights, and material specs. We handle the HOA submission paperwork.' },
      { q: 'Can you install a pool fence in Del Webb Spruce Creek?', a: 'Yes — our <strong>black aluminum pool fence</strong> is the most popular choice in Del Webb. Meets Florida §515 code, passes HOA approval, and we handle the Marion County permit.' },
      { q: 'How much for a typical Summerfield backyard fence?', a: 'Most Summerfield 55+ homes have smaller lots, so projects run <strong>$4,000-$7,500</strong> depending on material and length. With $0 down financing, monthly payments are typically $79-$120.' },
      { q: 'Do you serve all Summerfield ZIP codes?', a: 'Yes — Summerfield ZIPs <strong>34491 and 34492</strong>, covering Stonecrest, Del Webb Spruce Creek, Spruce Creek Country Club, and surrounding areas.' },
    ],
  },
  'silver-springs-fl': {
    metaTitle: 'Fence Installation Silver Springs FL | Marion County · 34488',
    metaDescription: 'Fence installation in Silver Springs, FL (34488). East Marion County. Vinyl, composite, aluminum, pool fences. $0 down financing. Call (863) 377-0928.',
    heroTitle: 'Fence Installation in <span class="text-primary">Silver Springs, FL</span>',
    heroSubtitle: 'Premium fence installation in Silver Springs and East Marion County. Family-owned, $0 down financing, less than 7 days install.',
    zips: ['34488', '34489'],
    neighborhoods: ['Silver Springs Shores', 'Lake Weir', 'Silver River', 'Ocala Forest', 'Sportsman\'s Cove'],
    intro: {
      heading: 'Silver Springs homeowners need fences that handle wildlife',
      paragraphs: [
        'Silver Springs sits next to Silver Springs State Park and the Ocala National Forest. That means wildlife — bears, coyotes, deer, gators near the river. Our 6ft privacy fences are built for it.',
        'We\'ve installed fences across Silver Springs Shores, near Lake Weir, and the rural lots east of CR-35. Marion County permits handled, same 7-day install promise.',
      ],
    },
    whyLocal: [
      { title: 'Bear & Wildlife Tough', body: 'Silver Springs is in active bear territory. We install fences that actually keep them out — solid 6ft panels, no gaps.' },
      { title: 'Riverfront-Ready', body: 'Lots near Silver River and Lake Weir need extra-durable materials. We use marine-grade hardware on all waterfront installs.' },
      { title: 'Marion County Permits', body: 'We pull every permit through Marion County and handle the inspection.' },
    ],
    faqs: [
      { q: 'Will a fence keep bears out of my Silver Springs yard?', a: 'Yes — our 6ft <strong>vinyl privacy</strong> and <strong>Composite Fence</strong> panels are solid and tall enough to deter bears. We install with concrete-set posts so they can\'t be pushed through.' },
      { q: 'Do you install fences on lots near Silver River?', a: 'Yes. We use marine-grade hardware (stainless steel) for any install within 100ft of waterfront to handle Florida humidity.' },
      { q: 'How fast can you install in Silver Springs?', a: 'Most Silver Springs projects finish in <strong>less than 7 days</strong>. Urgent timelines available for smaller jobs.' },
    ],
  },
  'dunnellon-fl': {
    metaTitle: 'Fence Installation Dunnellon FL | Rainbow River · 34431',
    metaDescription: 'Fence installation in Dunnellon, FL (34431). Rainbow River area, Rainbow Springs, Marion Oaks West. $0 down financing. Call (863) 377-0928.',
    heroTitle: 'Fence Installation in <span class="text-primary">Dunnellon, FL</span>',
    heroSubtitle: 'Premium fence installation in Dunnellon and Rainbow River area. Family-owned, $0 down financing, less than 7 days install.',
    zips: ['34431', '34432', '34433', '34434'],
    neighborhoods: ['Rainbow Springs', 'Rainbow Lakes Estates', 'Spring Run', 'Romeo', 'Pine Ridge'],
    intro: {
      heading: 'Dunnellon homeowners get premium fences without the city prices',
      paragraphs: [
        'Dunnellon is one of Florida\'s most beautiful corners — Rainbow River, crystal springs, mature oaks. We install fences that match the natural beauty: clean vinyl, hurricane-rated composite fence, sleek black aluminum.',
        'Same Marion County permits, same lifetime warranty, same $0 down financing as everywhere else we work. We cover all Dunnellon ZIPs from 34431 to 34434.',
      ],
    },
    whyLocal: [
      { title: 'Rainbow River Area Specialists', body: 'We know the soil, the wind patterns, and the wildlife in Dunnellon. Our installs hold up.' },
      { title: 'Marine-Grade Hardware', body: 'Lots near the river get extra protection — stainless steel hardware to handle humidity.' },
      { title: 'Marion County Permits', body: 'We handle every permit and inspection through Marion County.' },
    ],
    faqs: [
      { q: 'Do you serve Rainbow Springs and Rainbow Lakes Estates?', a: 'Yes — both are inside Dunnellon ZIP <strong>34432</strong>. We\'ve installed dozens of fences in both communities.' },
      { q: 'Can you install a fence near the Rainbow River?', a: 'Yes. We use marine-grade stainless steel hardware on any install within 100ft of waterfront for long-term durability.' },
      { q: 'How much for a typical Dunnellon fence?', a: 'Most Dunnellon projects run <strong>$4,500-$10,000</strong> depending on material and length. With $0 down financing, monthly payments typically fall between $89 and $160.' },
      { q: 'Do you handle Citrus County permits?', a: 'For Dunnellon ZIPs in <strong>Marion County</strong>, yes. The 34433 and 34434 ZIPs partially extend into Citrus County — we work with both.' },
    ],
  },
  'the-villages-fl': {
    metaTitle: 'Fence Installation The Villages FL | 32162 · 32163 · 32159',
    metaDescription: 'Fence installation in The Villages, FL. 55+ community pool fences, aluminum, vinyl picket. HOA approved. $0 down financing. Call (863) 377-0928.',
    heroTitle: 'Fence Installation in <span class="text-primary">The Villages, FL</span>',
    heroSubtitle: 'Premium fence installation in The Villages 55+ community. HOA-approved, pool-code ready, $0 down financing.',
    zips: ['32162', '32163', '32159', '32195', '32702'],
    neighborhoods: ['Spanish Springs', 'Sumter Landing', 'Brownwood', 'Lake Sumter Landing', 'Bonita', 'Buttonwood', 'Pine Ridge', 'Hadley'],
    intro: {
      heading: 'The Villages residents trust us with their fence projects',
      paragraphs: [
        'The Villages is the largest 55+ master-planned community in America. Every village has its own HOA rules, but we\'ve worked with most of them — Bonita, Buttonwood, Pine Ridge, Hadley, and the Spanish Springs / Sumter Landing / Brownwood town squares.',
        'Most Villages homes have pools, so our most popular install here is the black aluminum pool fence — meets Florida §515 code, passes HOA approval. We also do vinyl picket for front yards (white only — that\'s what most HOAs allow).',
      ],
    },
    whyLocal: [
      { title: 'Villages HOA Pros', body: 'We know what each Villages HOA approves — colors, heights, materials. We submit the paperwork for you.' },
      { title: 'Pool-Code Specialists', body: 'Florida §515 compliant aluminum pool fences with self-closing magnetic gates. Pass inspection on the first try.' },
      { title: 'No Out-of-State Bosses', body: 'Andry lives in Florida, knows Florida code, and runs every Villages job personally.' },
    ],
    faqs: [
      { q: 'Do you work with The Villages HOA approvals?', a: 'Yes. Every Villages district has its own HOA (ARC). We\'ve submitted approvals across <strong>Bonita, Buttonwood, Pine Ridge, Hadley</strong>, and most other villages. We handle the paperwork.' },
      { q: 'What kind of fence is allowed in The Villages?', a: 'Most Villages HOAs allow <strong>black aluminum pool fences</strong> (4ft, §515 compliant) and <strong>white vinyl picket</strong> (3-4ft, decorative). Privacy fences are usually not allowed in front yards.' },
      { q: 'How much for a Villages pool fence?', a: 'Most Villages pool fence projects run <strong>$3,500-$6,500</strong> depending on pool size. With $0 down financing, monthly payments typically fall between $69 and $110.' },
      { q: 'Do you serve all Villages ZIP codes?', a: 'Yes — Villages ZIPs <strong>32162, 32163, 32159, 32195, and 32702</strong>, covering Sumter County, Lake County, and the small Marion County corner.' },
      { q: 'How long does The Villages installation take?', a: 'Most Villages pool fences install in <strong>2-4 days</strong>. HOA approval can add 2-4 weeks before we start — but we manage the entire process.' },
    ],
  },
  'lady-lake-fl': {
    metaTitle: 'Fence Installation Lady Lake FL | Lake County · 32159',
    metaDescription: 'Fence installation in Lady Lake, FL (32159). Lake County. Pool fences, aluminum, vinyl. $0 down financing. Call (863) 377-0928.',
    heroTitle: 'Fence Installation in <span class="text-primary">Lady Lake, FL</span>',
    heroSubtitle: 'Premium fence installation in Lady Lake and Lake County. Pool-code ready, $0 down financing, less than 7 days install.',
    zips: ['32159', '32158'],
    neighborhoods: ['Orange Blossom Gardens', 'Water Oak Country Club', 'Picciola Bridge', 'Lake Ella Estates'],
    intro: {
      heading: 'Lady Lake homeowners need fences for waterfront living',
      paragraphs: [
        'Lady Lake sits between Lake Griffin and Lake Weir. Lots of waterfront homes, lots of pools, and a town that\'s grown fast in the last decade. We install premium fences across Lake County with the same Marion-County-grade quality.',
        'Most popular here: black aluminum pool fences (Florida §515 code) and 6ft vinyl privacy for the wooded backyards near Lake Griffin.',
      ],
    },
    whyLocal: [
      { title: 'Lake County Permits', body: 'We pull permits through Lake County (different from Marion). We know the process.' },
      { title: 'Waterfront Specialists', body: 'Lots near Lake Griffin or Lake Weir get marine-grade stainless hardware to handle humidity.' },
      { title: 'Pool-Code Pros', body: 'Black aluminum pool fences §515 compliant, self-closing magnetic gates. Pass on first inspection.' },
    ],
    faqs: [
      { q: 'Do you serve Lady Lake ZIPs?', a: 'Yes — Lady Lake ZIPs <strong>32159 and 32158</strong>, covering Orange Blossom Gardens, Water Oak Country Club, and surrounding Lake County areas.' },
      { q: 'Can you install a fence by the lake?', a: 'Yes. For lots within 100ft of Lake Griffin or Lake Weir, we use marine-grade stainless steel hardware to handle waterfront humidity.' },
      { q: 'Do you handle Lake County permits?', a: 'Yes. Lake County has its own permit process (different from Marion). We pull, schedule the inspection, and handle the final sign-off.' },
      { q: 'How much for a Lady Lake pool fence?', a: 'Most Lady Lake pool fence projects run <strong>$3,500-$6,500</strong> depending on pool size and gate count. With $0 down financing, monthly payments typically $69-$110.' },
    ],
  },
  'marion-county-fl': {
    metaTitle: 'Fence Installation Marion County FL | All Cities · $0 Down',
    metaDescription: 'Fence installation across all Marion County, FL. Ocala, Belleview, Summerfield, Silver Springs, Dunnellon. $0 down financing. Call (863) 377-0928.',
    heroTitle: 'Fence Installation Across <span class="text-primary">Marion County, FL</span>',
    heroSubtitle: 'Family-owned fence installation across every city in Marion County. Vinyl, composite, aluminum, pool fences. $0 down financing.',
    zips: ['34470', '34471', '34472', '34473', '34474', '34475', '34476', '34479', '34480', '34481', '34482', '34420', '34421', '34488', '34489', '34491', '34492', '34431', '34432', '34433', '34434', '34470'],
    neighborhoods: ['Ocala', 'Belleview', 'Summerfield', 'Silver Springs', 'Dunnellon', 'Anthony', 'Citra', 'Reddick', 'McIntosh', 'Fellowship'],
    intro: {
      heading: 'Marion County\'s family-owned fence team',
      paragraphs: [
        'Marion County is home — we\'ve been installing fences here since 2021. Whether you\'re in the heart of Ocala, the rural areas near Anthony, the planned communities of Summerfield, or anywhere in between, we get to you within 24-48 hours for the on-site estimate.',
        'We pull every permit through Marion County, handle every inspection, and back every install with a lifetime materials warranty that transfers to the next homeowner if you sell.',
      ],
    },
    whyLocal: [
      { title: '5+ Years in Marion County', body: 'We know the soil, the permits, the HOAs, the wildlife. Local experience that shows up in every install.' },
      { title: 'Every Marion ZIP Covered', body: 'From 34420 (Belleview) to 34491 (Summerfield) to every Ocala ZIP — we serve them all.' },
      { title: 'Bear-Country Tough', body: 'Marion County borders Ocala National Forest. Our fences are built to keep wildlife out.' },
    ],
    faqs: [
      { q: 'Which Marion County cities do you serve?', a: 'All of them — <strong>Ocala, Belleview, Summerfield, Silver Springs, Dunnellon</strong>, plus rural areas like Anthony, Citra, Reddick, McIntosh, and Fellowship.' },
      { q: 'Do I need a permit for a fence in Marion County?', a: 'In <strong>unincorporated Marion County</strong>, residential fences under 6ft don\'t require a permit. Inside city limits (Ocala, Belleview), permits may apply. We handle either way.' },
      { q: 'How much does fence installation cost in Marion County?', a: 'Most Marion County projects run <strong>$4,000-$13,000</strong> depending on length, height, material. With $0 down financing, monthly payments typically $79-$200.' },
      { q: 'Do you install bear-proof fences in Marion County?', a: 'Yes. Our 6ft <strong>vinyl privacy</strong> and <strong>composite fence</strong> panels are solid enough to keep bears out. Especially recommended near the Ocala National Forest border.' },
    ],
  },
};
