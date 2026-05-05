// Blog posts — long-form SEO content targeting Marion County fence searches.
// Each post is self-contained markdown-style content rendered by /blog/[slug].astro.

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  date: string; // YYYY-MM-DD
  dateDisplay: string; // "April 28, 2026"
  readTime: string; // "6 min read"
  category: string;
  image: string;
  imageAlt: string;
  author: { name: string; role: string };
  body: string; // HTML
};

const ANDRY = { name: 'Andry Ramírez', role: 'Founder, Ocala Fence Install' };

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'vinyl-vs-composite-fence-florida',
    title: 'Vinyl vs Composite Fence: Which Is Better for Florida Heat?',
    excerpt: 'Both vinyl and composite handle Florida\'s sun and humidity better than wood — but which one wins long-term? A side-by-side comparison from a Marion County fence installer.',
    metaDescription: 'Vinyl vs composite fence comparison for Florida homes. Wind ratings, cost, lifespan, maintenance, and which one is best for Marion County heat and humidity.',
    date: '2026-05-01',
    dateDisplay: 'May 1, 2026',
    readTime: '7 min read',
    category: 'Material Comparison',
    image: '/images/blog/vinyl-vs-composite-fence-florida.webp',
    imageAlt: 'White vinyl privacy fence vs cedar-tone composite fence side-by-side comparison in Ocala FL',
    author: ANDRY,
    body: `
<p class="text-lg text-gray-700 leading-relaxed mb-6">If you're shopping for a new fence in Marion County, two materials keep showing up at the top of every recommendation list: <strong>vinyl</strong> and <strong>composite</strong>. Both look great, both outlast wood, and both are sold as "Florida-tough." So which one is actually better for our heat, humidity, and hurricane zones?</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6">After installing both materials across Ocala, Belleview, Summerfield, and The Villages for years, here's the honest breakdown.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">The 60-second answer</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6">If you want the <strong>cheapest fence that lasts 25+ years with no maintenance</strong>, choose vinyl. If you want the <strong>warm look of real wood with hurricane-grade strength</strong>, choose composite. Both are excellent. The choice comes down to aesthetics and budget.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">Side-by-side comparison</h2>

<div class="overflow-x-auto my-8">
  <table class="w-full bg-white border border-gray-200">
    <thead class="bg-primary text-white">
      <tr>
        <th class="text-left p-4 font-extrabold text-sm uppercase tracking-wider">Feature</th>
        <th class="text-left p-4 font-extrabold text-sm uppercase tracking-wider">Vinyl</th>
        <th class="text-left p-4 font-extrabold text-sm uppercase tracking-wider">Composite</th>
      </tr>
    </thead>
    <tbody class="text-gray-800">
      <tr class="border-b border-gray-200">
        <td class="p-4 font-bold">Cost (per linear foot)</td>
        <td class="p-4">$30–55</td>
        <td class="p-4">$28–50</td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50">
        <td class="p-4 font-bold">Wind rating</td>
        <td class="p-4">130 MPH</td>
        <td class="p-4"><strong class="text-primary">160 MPH</strong></td>
      </tr>
      <tr class="border-b border-gray-200">
        <td class="p-4 font-bold">Lifespan</td>
        <td class="p-4">25–35 years</td>
        <td class="p-4"><strong class="text-primary">Lifetime warranty</strong></td>
      </tr>
      <tr class="border-b border-gray-200 bg-gray-50">
        <td class="p-4 font-bold">Look</td>
        <td class="p-4">Smooth plastic</td>
        <td class="p-4"><strong class="text-primary">Real wood grain</strong></td>
      </tr>
      <tr class="border-b border-gray-200">
        <td class="p-4 font-bold">Maintenance</td>
        <td class="p-4">Hose only</td>
        <td class="p-4">Hose only</td>
      </tr>
      <tr>
        <td class="p-4 font-bold">UV resistance</td>
        <td class="p-4">Excellent</td>
        <td class="p-4">Excellent</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">When vinyl wins</h2>

<ul class="space-y-3 mb-8 text-lg text-gray-700">
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>You want the lowest upfront cost.</strong> Vinyl is typically 5-10% cheaper than composite for the same project.</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>You want a clean, modern look.</strong> Vinyl comes in white, cream, and tan with smooth surfaces — perfect if your home is contemporary.</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>You're in an HOA that approves vinyl.</strong> Most Marion County HOAs have a list of pre-approved vinyl manufacturers.</span></li>
</ul>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">When composite wins</h2>

<ul class="space-y-3 mb-8 text-lg text-gray-700">
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>You love the wood look but hate the maintenance.</strong> Composite gives you the warm wood grain without re-staining every 2 years.</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>You're in a high-wind area.</strong> 160 MPH wind rating beats vinyl's 130 MPH — important if you're closer to the Gulf or in an open lot.</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>You want a sound barrier.</strong> Composite blocks road and neighbor noise far better than vinyl thanks to the denser, heavier panels.</span></li>
</ul>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">What about Florida heat specifically?</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Both materials are <strong>UV-stabilized</strong> for Florida sun. Cheap big-box vinyl will yellow within 5 years — premium vinyl from manufacturers we trust carries a lifetime warranty against fading. Composite is engineered with the same UV protection.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6">In humidity, both shine: <strong>no rotting, no termites, no rust.</strong> Wood, by comparison, can develop mildew and rot in as little as 3-5 years in Marion County's wet seasons.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">My honest take as an Ocala installer</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6">For 80% of Marion County homeowners, <strong>vinyl is the right call</strong> — it's the best value for money in this market. The other 20% are people who specifically want the warm wood look, are in high-wind locations, or want maximum noise blocking — and for them, composite is worth the small upgrade.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Either way, both will outlast wood by 2-3x with virtually zero maintenance. That alone makes either choice a smart upgrade.</p>

<div class="bg-highlight/30 border-l-4 border-primary p-6 my-10">
  <p class="text-lg text-gray-800 leading-relaxed"><strong class="text-primary-900">Want a real comparison for your specific yard?</strong> Get a free written quote with sketch and dimensions for both vinyl and composite — we'll show you the actual price difference and help you choose based on your goals. <a href="/free-estimate" class="text-primary hover:text-primary-700 font-extrabold underline">Request your free quote →</a></p>
</div>
    `,
  },

  {
    slug: 'fence-cost-ocala-fl',
    title: 'How Much Does a Fence Cost in Ocala, FL? (2026 Pricing Guide)',
    excerpt: 'Real numbers from real Marion County installs. Vinyl, aluminum, composite, chain link — what each material actually costs per linear foot in 2026.',
    metaDescription: 'Fence cost in Ocala FL 2026: vinyl $30-55/lf, aluminum $32-55/lf, composite $28-50/lf, chain link $15-25/lf. Marion County pricing breakdown by material.',
    date: '2026-04-28',
    dateDisplay: 'April 28, 2026',
    readTime: '8 min read',
    category: 'Pricing',
    image: '/images/blog/fence-cost-ocala-fl.webp',
    imageAlt: 'Tan vinyl privacy fence with calculator and pricing notes — Ocala FL fence cost guide 2026',
    author: ANDRY,
    body: `
<p class="text-lg text-gray-700 leading-relaxed mb-6">"How much does a fence cost in Ocala?" is the #1 question we get every week. The honest answer is: <strong>it depends on the material, length, and a few other factors</strong> — but there's no reason for it to be a mystery.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Here's exactly what fence projects cost in Marion County in 2026, broken down by material. These are real numbers from real recent installs across Ocala, Belleview, Summerfield, and The Villages.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">Quick reference: average cost by material</h2>

<div class="overflow-x-auto my-8">
  <table class="w-full bg-white border border-gray-200">
    <thead class="bg-primary text-white">
      <tr>
        <th class="text-left p-4 font-extrabold text-sm uppercase tracking-wider">Material</th>
        <th class="text-left p-4 font-extrabold text-sm uppercase tracking-wider">Per linear foot</th>
        <th class="text-left p-4 font-extrabold text-sm uppercase tracking-wider">Typical project total</th>
      </tr>
    </thead>
    <tbody class="text-gray-800">
      <tr class="border-b border-gray-200"><td class="p-4 font-bold">Chain Link</td><td class="p-4">$15–25</td><td class="p-4">$2,000–4,500</td></tr>
      <tr class="border-b border-gray-200 bg-gray-50"><td class="p-4 font-bold">Vinyl Picket</td><td class="p-4">$25–45</td><td class="p-4">$4,000–11,000</td></tr>
      <tr class="border-b border-gray-200"><td class="p-4 font-bold">Composite</td><td class="p-4">$28–50</td><td class="p-4">$4,000–12,000</td></tr>
      <tr class="border-b border-gray-200 bg-gray-50"><td class="p-4 font-bold">Pool Fence</td><td class="p-4">$28–45</td><td class="p-4">$3,500–9,000</td></tr>
      <tr class="border-b border-gray-200"><td class="p-4 font-bold">Vinyl Privacy</td><td class="p-4">$30–55</td><td class="p-4">$4,500–13,000</td></tr>
      <tr><td class="p-4 font-bold">Aluminum</td><td class="p-4">$32–55</td><td class="p-4">$4,500–12,000</td></tr>
    </tbody>
  </table>
</div>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">What's actually included in those prices</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Every quote we provide is "all-in." That means the per-foot price includes:</p>

<ul class="space-y-2 mb-8 text-lg text-gray-700">
  <li class="flex gap-3"><span class="text-primary font-extrabold">✓</span><span>All materials (panels, posts, gates, hardware, fasteners)</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">✓</span><span>Concrete-set posts (every post, not just corners)</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">✓</span><span>Removal &amp; haul-off of any existing fence</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">✓</span><span>Marion County permits</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">✓</span><span>Sunshine 811 utility marking</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">✓</span><span>Labor and final cleanup</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">✓</span><span>Workmanship warranty</span></li>
</ul>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">What changes the price</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6"><strong>Length</strong> is the biggest driver. A 100-foot vinyl privacy fence is going to cost less than a 300-foot one no matter what.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6"><strong>Gates</strong> add cost — a single pedestrian gate runs $300-600, a double driveway gate runs $1,200-2,500.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6"><strong>Height</strong> matters. A 6-foot vinyl privacy fence is more expensive than a 4-foot. Premium height for residential is typically 5-6 feet for privacy, 4 feet for picket and pool code.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6"><strong>Terrain</strong> can affect price. If your yard has rocky soil (common in some parts of Marion County with limestone bedrock), or if there's a slope that needs racking, expect a 10-15% premium.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6"><strong>Special features</strong> like decorative post caps, lattice tops, or custom colors add 5-15%.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">Financing makes the math easier</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Most homeowners don't pay cash. With <strong>$0 down financing</strong> through our lender partners, a $7,500 vinyl privacy fence becomes about <strong>$148/month over 60 months</strong>. That's less than most cell phone bills.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Pre-qualify in 60 seconds with a soft credit check that doesn't affect your score — see our <a href="/financing" class="text-primary font-bold underline">financing page</a> for the calculator.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">How to get an exact number</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Our quotes are <strong>not internet-based</strong>. A real person from our team comes out, measures, walks the yard with you, and provides a written quote within 24 hours. No high-pressure sales, no surprise charges.</p>

<div class="bg-highlight/30 border-l-4 border-primary p-6 my-10">
  <p class="text-lg text-gray-800 leading-relaxed"><strong class="text-primary-900">Ready for an exact number?</strong> <a href="/free-estimate" class="text-primary hover:text-primary-700 font-extrabold underline">Get a free written quote</a> for your Ocala property — same-day or next-day visit.</p>
</div>
    `,
  },

  {
    slug: 'cover-chain-link-fence-privacy',
    title: '8 Creative Ways to Cover a Chain Link Fence for Privacy',
    excerpt: 'Stuck with a chain link fence but want privacy? Here are 8 affordable upgrades — from bamboo screens and ivy to slat inserts and full vinyl wraps.',
    metaDescription: 'How to cover a chain link fence for privacy: 8 creative ideas including bamboo screens, climbing plants, slat inserts, and vinyl wraps. Costs and pros/cons.',
    date: '2026-04-25',
    dateDisplay: 'April 25, 2026',
    readTime: '6 min read',
    category: 'DIY & Tips',
    image: '/images/blog/cover-chain-link-fence-privacy.webp',
    imageAlt: 'Chain link fence covered with green ivy and bamboo screen panels for added privacy in Ocala FL',
    author: ANDRY,
    body: `
<p class="text-lg text-gray-700 leading-relaxed mb-6">Chain link fences are everywhere in Marion County — they're affordable, durable, and pet-safe. But they offer <strong>zero privacy</strong>. If you've inherited one (or installed one to save money) and want more privacy without tearing it down, here are 8 ways to upgrade it.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">1. Bamboo screening rolls</h2>
<p class="text-lg text-gray-700 leading-relaxed mb-6"><strong>Cost:</strong> $40-80 per 6ft x 16ft roll. Attaches with zip ties. Tropical look that fits Florida perfectly. Lasts 3-5 years before needing replacement.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">2. PVC slat inserts</h2>
<p class="text-lg text-gray-700 leading-relaxed mb-6"><strong>Cost:</strong> $4-8 per linear foot of fence. Plastic strips weave vertically through the chain link. Available in white, beige, green, and black. Lifespan 10-15 years.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">3. Climbing vines (slow and beautiful)</h2>
<p class="text-lg text-gray-700 leading-relaxed mb-6">Confederate jasmine and Florida-native passionflower love our climate. Free if you have starter plants — but takes 1-2 years for full coverage.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">4. Reed fencing</h2>
<p class="text-lg text-gray-700 leading-relaxed mb-6"><strong>Cost:</strong> $30-60 per 6ft x 16ft roll. Similar to bamboo but more textured. Great for cottage-style yards.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">5. Wind/sun screen mesh</h2>
<p class="text-lg text-gray-700 leading-relaxed mb-6"><strong>Cost:</strong> $1-2 per linear foot. UV-resistant fabric that ties on. Provides 70-90% privacy. Doesn't last long in Florida sun (2-3 years), but it's the cheapest option.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">6. Replace with vinyl privacy panels (the upgrade)</h2>
<p class="text-lg text-gray-700 leading-relaxed mb-6"><strong>Cost:</strong> $30-55 per linear foot installed. The permanent solution. Lifetime warranty, zero maintenance, full privacy. If you're going to spend on covering it, replacing makes more sense long-term.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">7. Outdoor canvas curtains</h2>
<p class="text-lg text-gray-700 leading-relaxed mb-6"><strong>Cost:</strong> $40-100 per panel. Decorative and great for patios near the fence. Not full coverage but adds style.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">8. Tall potted plants along the fence line</h2>
<p class="text-lg text-gray-700 leading-relaxed mb-6">Areca palms, viburnum, podocarpus — all thrive in Marion County and grow 6-8 feet tall in a year or two. Free privacy that adds property value.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">When does it make sense to replace instead of cover?</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6">If you're going to spend $1,500+ on covering a chain link fence, you're 60% of the way to a brand-new vinyl privacy fence that gives you <strong>permanent</strong> privacy with a lifetime warranty.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6">For most Marion County homeowners with 100-200 linear feet of chain link, the math works out: <strong>$1,500-3,000 in covers vs. $4,500-8,000 for full vinyl replacement</strong>. The replacement pays itself back in property value alone.</p>

<div class="bg-highlight/30 border-l-4 border-primary p-6 my-10">
  <p class="text-lg text-gray-800 leading-relaxed"><strong class="text-primary-900">Want a quote on replacing your chain link with vinyl privacy?</strong> <a href="/free-estimate" class="text-primary hover:text-primary-700 font-extrabold underline">Get a free written estimate →</a></p>
</div>
    `,
  },

  {
    slug: 'pool-fence-code-florida-515',
    title: 'Pool Fence Code Florida: §515 Requirements Explained (2026)',
    excerpt: 'Florida law requires every residential pool to have a code-compliant fence. Here\'s exactly what §515 says — height, gates, picket spacing — in plain English.',
    metaDescription: 'Florida pool fence code §515 explained: 4ft minimum height, self-closing gates, picket spacing, and what Marion County inspectors actually check. Avoid fines.',
    date: '2026-04-22',
    dateDisplay: 'April 22, 2026',
    readTime: '5 min read',
    category: 'Code & Permits',
    image: '/images/blog/pool-fence-code-florida-515.webp',
    imageAlt: 'Pool-code-compliant black aluminum fence around residential swimming pool in Ocala FL',
    author: ANDRY,
    body: `
<p class="text-lg text-gray-700 leading-relaxed mb-6">If you have a residential pool in Florida — in-ground or above-ground over 24 inches deep — you're legally required to have a <strong>code-compliant safety barrier</strong>. The law is <strong>Florida Statute §515</strong> (the Residential Swimming Pool Safety Act).</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Marion County inspectors take this seriously. We've seen homeowners get fined or denied final pool inspection for fences that look fine but miss a small detail. Here's exactly what the code requires.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">The 5 mandatory requirements</h2>

<h3 class="text-2xl font-extrabold text-primary-900 mt-8 mb-3">1. Minimum height: 4 feet</h3>
<p class="text-lg text-gray-700 leading-relaxed mb-6">Measured from the ground to the top of the fence. The 4-foot height must be maintained on the <strong>exterior side</strong> of the fence — meaning ground-level features like landscaping rocks or planters can't be used to shorten the effective barrier.</p>

<h3 class="text-2xl font-extrabold text-primary-900 mt-8 mb-3">2. Picket spacing: less than 4 inches</h3>
<p class="text-lg text-gray-700 leading-relaxed mb-6">Spacing between vertical pickets must not exceed <strong>3.99 inches (less than 4)</strong>. This prevents children from passing through. Aluminum and vinyl picket fences sold as "pool code" already meet this — wood picket fences usually don't.</p>

<h3 class="text-2xl font-extrabold text-primary-900 mt-8 mb-3">3. Bottom gap: less than 2 inches</h3>
<p class="text-lg text-gray-700 leading-relaxed mb-6">The space between the ground and the bottom of the fence must be <strong>less than 2 inches</strong>. On uneven yards, we typically install with a kickboard or trench the fence to maintain the gap requirement everywhere.</p>

<h3 class="text-2xl font-extrabold text-primary-900 mt-8 mb-3">4. Self-closing, self-latching gates</h3>
<p class="text-lg text-gray-700 leading-relaxed mb-6">All gates must:</p>
<ul class="space-y-2 mb-6 text-lg text-gray-700">
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>Open outward</strong> away from the pool</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>Self-close</strong> automatically (spring hinges)</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>Self-latch</strong> at minimum 54 inches above the ground</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span>Have a <strong>magnetic latch</strong> that's child-resistant</span></li>
</ul>

<h3 class="text-2xl font-extrabold text-primary-900 mt-8 mb-3">5. No climbable features within 45 inches</h3>
<p class="text-lg text-gray-700 leading-relaxed mb-6">No horizontal rails, decorative scrolls, or pool equipment that a child could use as a foothold within 45 inches of ground level on the exterior side of the fence. This is why aluminum 3-rail fences with the rails near top and bottom are pool-code-friendly — but 4-rail "estate" styles are not.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">What materials qualify</h2>

<ul class="space-y-3 mb-8 text-lg text-gray-700">
  <li class="flex gap-3"><span class="text-primary font-extrabold">✓</span><span><strong>Aluminum ornamental</strong> (most popular — black, see-through, durable)</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">✓</span><span><strong>Vinyl picket</strong> with proper picket spacing</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">✓</span><span><strong>Mesh pool fence</strong> (removable, less permanent)</span></li>
  <li class="flex gap-3"><span class="text-red-600 font-extrabold">✗</span><span>Standard chain link (gaps too large unless modified)</span></li>
  <li class="flex gap-3"><span class="text-red-600 font-extrabold">✗</span><span>Wood split-rail (gaps too large)</span></li>
</ul>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">The most common code violation</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6">In Marion County, the #1 violation we see is the <strong>self-latching gate at proper height</strong>. Homeowners install code-compliant fence panels but use a regular gate latch at 36 inches — and fail inspection.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6">The latch must be at <strong>54 inches minimum</strong> measured from the bottom of the gate or the ground (whichever is higher).</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">Don't risk a failed inspection</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6">A failed pool fence inspection delays your final Certificate of Occupancy if you're building, or your pool inspection if you're remodeling. We've seen homeowners lose 2-4 weeks of pool season fixing fence issues that should have been done right the first time.</p>

<div class="bg-highlight/30 border-l-4 border-primary p-6 my-10">
  <p class="text-lg text-gray-800 leading-relaxed"><strong class="text-primary-900">Need a §515-compliant pool fence?</strong> Every pool fence we install passes Marion County inspection — guaranteed. <a href="/services/pool-fence" class="text-primary hover:text-primary-700 font-extrabold underline">See our pool fence options →</a></p>
</div>
    `,
  },

  {
    slug: 'wood-fence-lifespan-florida',
    title: 'How Long Does a Wood Fence Last in Florida? (Honest Answer)',
    excerpt: 'Wood fences in Florida have a much shorter lifespan than the rest of the country. Here\'s why — and what you can do to make yours last 20+ years.',
    metaDescription: 'How long does a wood fence last in Florida? Average 7-12 years untreated, 15-20 years with proper care. Why humidity shortens fence life and how to extend it.',
    date: '2026-04-19',
    dateDisplay: 'April 19, 2026',
    readTime: '5 min read',
    category: 'Maintenance',
    image: '/images/blog/wood-fence-lifespan-florida.webp',
    imageAlt: 'Weathered cedar wood privacy fence next to new wood fence section showing aging in Florida',
    author: ANDRY,
    body: `
<p class="text-lg text-gray-700 leading-relaxed mb-6">If you're considering a wood fence in Marion County, here's the honest truth: <strong>wood doesn't last as long in Florida as it does in the rest of the country.</strong> Our heat, humidity, and rain wear wood down faster than almost anywhere else.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6">That doesn't mean you shouldn't choose wood — it means you need to know what you're getting into.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">The honest numbers</h2>

<div class="overflow-x-auto my-8">
  <table class="w-full bg-white border border-gray-200">
    <thead class="bg-primary text-white">
      <tr>
        <th class="text-left p-4 font-extrabold text-sm uppercase tracking-wider">Wood type</th>
        <th class="text-left p-4 font-extrabold text-sm uppercase tracking-wider">Untreated</th>
        <th class="text-left p-4 font-extrabold text-sm uppercase tracking-wider">With proper care</th>
      </tr>
    </thead>
    <tbody class="text-gray-800">
      <tr class="border-b border-gray-200"><td class="p-4 font-bold">Pine (pressure-treated)</td><td class="p-4">7-10 years</td><td class="p-4">12-15 years</td></tr>
      <tr class="border-b border-gray-200 bg-gray-50"><td class="p-4 font-bold">Cedar</td><td class="p-4">10-12 years</td><td class="p-4">15-20 years</td></tr>
      <tr class="border-b border-gray-200"><td class="p-4 font-bold">Cypress</td><td class="p-4">12-15 years</td><td class="p-4">20-25 years</td></tr>
      <tr><td class="p-4 font-bold">Tropical hardwood (ipe)</td><td class="p-4">25-40 years</td><td class="p-4">40+ years</td></tr>
    </tbody>
  </table>
</div>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">Why Florida is brutal on wood</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6"><strong>Humidity.</strong> Wood absorbs moisture from the air, expands, then contracts when it dries. This cycle splits boards and warps panels.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6"><strong>Rain.</strong> Marion County gets 50+ inches of rain per year. Standing water at the base of posts is the #1 cause of fence failure.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6"><strong>Termites and carpenter ants.</strong> Florida has both. Pine without pressure treatment can be infested in 2-3 years.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6"><strong>UV intensity.</strong> Our sun fades and dries out wood fast. Untreated wood goes silver in 6-12 months.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6"><strong>Hurricanes.</strong> 130-160 MPH winds blow over fences with rotted posts. Even healthy wood fences struggle in a Cat 3+ storm.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">How to make your wood fence last longer</h2>

<ul class="space-y-3 mb-8 text-lg text-gray-700">
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>Concrete-set every post.</strong> Not just corners. Every single post in concrete keeps water away from the wood.</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>Use galvanized fasteners.</strong> Regular nails rust and stain the wood. Galvanized or stainless steel only.</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>Stain or seal every 2-3 years.</strong> This is non-negotiable in Florida. Skipping a sealing cycle cuts the fence's life by years.</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>Trim back vegetation.</strong> Vines holding moisture against the wood accelerate rot.</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>Keep sprinklers off the fence.</strong> A sprinkler hitting wood every day is the fastest way to rot it from outside.</span></li>
</ul>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">When wood is still the right choice</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Wood is still the right choice if you:</p>
<ul class="space-y-2 mb-6 text-lg text-gray-700">
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span>Want a natural look that ages with character</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span>Are committed to maintaining it (sealing every 2-3 years)</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span>Have a smaller budget upfront</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span>Plan to sell within 10 years (fresh wood looks great)</span></li>
</ul>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">The honest alternative</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6">If you want the warm wood look but don't want to maintain it for the rest of your life, <strong>composite fence</strong> gives you the wood appearance with zero maintenance and a lifetime warranty. It costs about 30-40% more upfront but lasts 3-4x longer in Florida.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6"><a href="/blog/vinyl-vs-composite-fence-florida" class="text-primary font-bold underline">Read our vinyl vs composite comparison →</a></p>

<div class="bg-highlight/30 border-l-4 border-primary p-6 my-10">
  <p class="text-lg text-gray-800 leading-relaxed"><strong class="text-primary-900">Considering a fence upgrade?</strong> We'll compare wood, vinyl, and composite for your specific yard with real numbers. <a href="/free-estimate" class="text-primary hover:text-primary-700 font-extrabold underline">Get your free quote →</a></p>
</div>
    `,
  },

  {
    slug: 'prepare-yard-fence-install',
    title: 'How to Prepare Your Yard for a Fence Install (7-Step Checklist)',
    excerpt: 'A little prep makes a big difference. Here\'s exactly what to do before our crew arrives — to keep the install fast, clean, and on schedule.',
    metaDescription: 'How to prepare your yard for fence installation: 7-step checklist covering survey, utilities, vegetation, pets, HOA, and what to expect on install day.',
    date: '2026-04-15',
    dateDisplay: 'April 15, 2026',
    readTime: '5 min read',
    category: 'Install Day',
    image: '/images/blog/prepare-yard-fence-install.webp',
    imageAlt: 'Backyard with utility flags and stakes marking fence line before installation in Marion County FL',
    author: ANDRY,
    body: `
<p class="text-lg text-gray-700 leading-relaxed mb-6">A successful fence install starts with a prepared yard. We handle most of the heavy lifting (permits, utility marking, materials), but there are <strong>seven things you can do</strong> that will make your install faster, cleaner, and stress-free.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">1. Confirm your property line (1-2 weeks before)</h2>
<p class="text-lg text-gray-700 leading-relaxed mb-6">If you have a survey from when you bought the home, dig it out. If not, talk to your neighbors and confirm where the line is. Florida law requires fences to be on <strong>your side of the property line</strong> — even an inch over can cause legal headaches later.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6">If there's any doubt, hire a licensed surveyor ($300-500) for peace of mind.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">2. Get HOA approval submitted (3-4 weeks before)</h2>
<p class="text-lg text-gray-700 leading-relaxed mb-6">Most Marion County HOAs require ARC (Architectural Review Committee) approval before any fence install. We provide all the paperwork, drawings, and product specs you need to submit.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Approvals typically take 2-4 weeks. Don't wait until the install date to start this.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">3. Trim back vegetation (1 week before)</h2>
<p class="text-lg text-gray-700 leading-relaxed mb-6">Cut back any tree branches, vines, or shrubs along the fence line. Our crew can do it, but it adds time. If you trim 3-4 feet of clearance on both sides, install goes 30% faster.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">4. Sunshine 811 utility marking (we handle this)</h2>
<p class="text-lg text-gray-700 leading-relaxed mb-6">Florida law requires utility lines to be marked before any digging. <strong>We schedule Sunshine 811 on your behalf</strong> 3-5 business days before install. You'll see colored flags appear in your yard:</p>

<ul class="space-y-2 mb-6 text-lg text-gray-700">
  <li class="flex gap-3"><span class="text-red-600 font-extrabold">●</span><span><strong>Red:</strong> Electric</span></li>
  <li class="flex gap-3"><span class="text-yellow-500 font-extrabold">●</span><span><strong>Yellow:</strong> Gas</span></li>
  <li class="flex gap-3"><span class="text-orange-500 font-extrabold">●</span><span><strong>Orange:</strong> Communications</span></li>
  <li class="flex gap-3"><span class="text-blue-500 font-extrabold">●</span><span><strong>Blue:</strong> Water</span></li>
  <li class="flex gap-3"><span class="text-green-600 font-extrabold">●</span><span><strong>Green:</strong> Sewer</span></li>
</ul>

<p class="text-lg text-gray-700 leading-relaxed mb-6"><strong>Don't pull these flags.</strong> Leave them in until install is complete.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">5. Plan for pets (the day of)</h2>
<p class="text-lg text-gray-700 leading-relaxed mb-6">Dogs and cats are stressed by jobsite noise. Plan to keep them inside or at a friend's house on install day. If your existing fence is being removed, your pets won't have a contained yard until the new fence goes up — usually within hours, but plan for it.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">6. Clear the fence line (the day before)</h2>
<p class="text-lg text-gray-700 leading-relaxed mb-6">Move anything within 5 feet of the fence line — patio furniture, planters, hose reels, kids' toys. The crew needs space to work and store materials without dragging things across your yard.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">7. Make sure we can access the yard</h2>
<p class="text-lg text-gray-700 leading-relaxed mb-6">If we need to drive equipment or carry materials through a gate, make sure the gate is at least 36 inches wide and unlocked. If access is limited, mention it in your initial consultation so we plan accordingly.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">What to expect on install day</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Our lead installer will arrive between 7-9am with the crew and trailer. We'll do a brief walkthrough with you to confirm the fence line, gate placement, and any obstacles. Then the crew gets to work.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Most residential installs in Marion County finish in <strong>1-3 days</strong>. The first day is post-setting (lots of digging, concrete pouring). Days 2-3 are panel installation, gates, and cleanup.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6">We don't leave until your yard is clean and you've done the final walkthrough.</p>

<div class="bg-highlight/30 border-l-4 border-primary p-6 my-10">
  <p class="text-lg text-gray-800 leading-relaxed"><strong class="text-primary-900">Ready to schedule?</strong> Get your free quote and we'll walk you through the prep timeline for your specific install. <a href="/free-estimate" class="text-primary hover:text-primary-700 font-extrabold underline">Request your free estimate →</a></p>
</div>
    `,
  },

  {
    slug: 'hoa-fence-approval-guide',
    title: 'HOA Fence Approval in Florida: Step-by-Step Guide',
    excerpt: 'Most Marion County subdivisions require HOA approval before installing a fence. Here\'s how to get approved fast — and what gets denied most often.',
    metaDescription: 'HOA fence approval guide for Marion County FL: ARC paperwork, what HOAs typically approve, common denials, and how to speed up the process.',
    date: '2026-04-12',
    dateDisplay: 'April 12, 2026',
    readTime: '6 min read',
    category: 'Code & Permits',
    image: '/images/blog/hoa-fence-approval-guide.webp',
    imageAlt: 'HOA-approved white vinyl fence in planned community in Ocala FL',
    author: ANDRY,
    body: `
<p class="text-lg text-gray-700 leading-relaxed mb-6">If you live in a planned community in Marion County — Stone Creek, On Top of the World, Heath Brook, Marion Oaks, The Villages — you almost certainly need <strong>HOA approval</strong> before installing a fence. Skipping this step can result in fines, forced removal, and legal action.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Here's how to get approved fast and avoid the most common denials.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">Step 1: Get your HOA's CC&Rs and ARC application</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Every HOA has two key documents:</p>
<ul class="space-y-2 mb-6 text-lg text-gray-700">
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>CC&Rs</strong> (Covenants, Conditions, and Restrictions) — the rules</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>ARC application</strong> (Architectural Review Committee) — the form to submit</span></li>
</ul>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Get both from your HOA office or community website. Read the fence section carefully — it'll specify approved materials, max heights, allowed colors, and setback requirements.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">Step 2: Choose a fence the HOA pre-approves</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Most Marion County HOAs pre-approve specific materials and styles. The most common approved options:</p>

<ul class="space-y-2 mb-6 text-lg text-gray-700">
  <li class="flex gap-3"><span class="text-primary font-extrabold">✓</span><span><strong>White vinyl picket</strong> (3-4 ft) — universally approved for front yards</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">✓</span><span><strong>Vinyl privacy</strong> (6 ft, white or tan) — approved in 90% of HOAs</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">✓</span><span><strong>Black aluminum ornamental</strong> (4-5 ft) — popular for golf-course-adjacent homes</span></li>
  <li class="flex gap-3"><span class="text-red-600 font-extrabold">✗</span><span>Chain link in front yard (denied in 95% of HOAs)</span></li>
  <li class="flex gap-3"><span class="text-red-600 font-extrabold">✗</span><span>Wood (rare to approve due to maintenance concerns)</span></li>
</ul>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">Step 3: Submit the ARC application</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Most ARC applications require:</p>
<ul class="space-y-2 mb-6 text-lg text-gray-700">
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>Survey or property plat</strong> showing exact fence line</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>Drawing/sketch</strong> of the proposed fence (we provide this)</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>Product specs</strong> (manufacturer, model, color, height — we provide this)</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>Photos</strong> of similar approved fences in the neighborhood (helpful)</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>Application fee</strong> ($25-100, varies by HOA)</span></li>
</ul>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">Step 4: Wait for approval (2-4 weeks typically)</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Most ARCs meet monthly to review applications. Submission timing matters — get yours in early in the month so you don't wait for the next meeting.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6">You'll get an approval letter (or denial with reasons) by email or mail. <strong>Don't start install before you have written approval.</strong> Verbal "yeses" don't hold up if a neighbor complains.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">The 5 most common denial reasons</h2>

<ol class="space-y-4 mb-8 text-lg text-gray-700 list-decimal pl-6">
  <li><strong>Wrong color.</strong> Picking a color the HOA doesn't pre-approve (e.g., bronze when only white is allowed).</li>
  <li><strong>Wrong height.</strong> 6-foot privacy fences in HOAs that cap at 5 feet for backyards.</li>
  <li><strong>Material not allowed.</strong> Wood in vinyl-only communities, or chain link in any visible-from-street location.</li>
  <li><strong>Setback violations.</strong> Building closer to the property line than allowed.</li>
  <li><strong>Front yard fences.</strong> Most HOAs heavily restrict or prohibit fences in front yards.</li>
</ol>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">How we speed up the process for you</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6">When you book us for an install, we provide everything you need for the ARC application:</p>

<ul class="space-y-2 mb-6 text-lg text-gray-700">
  <li class="flex gap-3"><span class="text-primary font-extrabold">✓</span><span>Sketch with dimensions and gate placement</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">✓</span><span>Manufacturer product cut sheets</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">✓</span><span>Color samples</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">✓</span><span>Photos of similar installs we've done in approved communities</span></li>
</ul>

<p class="text-lg text-gray-700 leading-relaxed mb-6">We've worked with Stone Creek, On Top of the World, Marion Oaks, Heath Brook, Spruce Creek, and dozens of other Marion County HOAs. We know which fences each one approves on first submission.</p>

<div class="bg-highlight/30 border-l-4 border-primary p-6 my-10">
  <p class="text-lg text-gray-800 leading-relaxed"><strong class="text-primary-900">Need help with your HOA application?</strong> Get a free quote and we'll provide everything you need to submit. <a href="/free-estimate" class="text-primary hover:text-primary-700 font-extrabold underline">Request your free estimate →</a></p>
</div>
    `,
  },

  {
    slug: 'fence-permits-marion-county',
    title: 'Fence Permits in Marion County, FL: What You Need to Know',
    excerpt: 'Most fence installs in Marion County require a permit. Here\'s when one is needed, how much it costs, and what happens if you skip it.',
    metaDescription: 'Marion County FL fence permits: when required, cost ($75-200), application process, inspection requirements, and penalties for skipping permits.',
    date: '2026-04-08',
    dateDisplay: 'April 8, 2026',
    readTime: '4 min read',
    category: 'Code & Permits',
    image: '/images/blog/fence-permits-marion-county.webp',
    imageAlt: 'Marion County FL fence permit document and tablet with fence plans on wood worktable',
    author: ANDRY,
    body: `
<p class="text-lg text-gray-700 leading-relaxed mb-6">Many Marion County homeowners assume fence installs don't need permits. Wrong. <strong>Most do</strong> — and skipping the permit can result in fines, forced removal, or problems when you sell the home.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Here's exactly when you need one, what it costs, and how the process works.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">When you need a permit</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6">In <strong>unincorporated Marion County</strong> (most of the county outside Ocala city limits), a permit is required if:</p>

<ul class="space-y-2 mb-6 text-lg text-gray-700">
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span>Fence height is <strong>6 feet or taller</strong> (any zone)</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span>Fence is around a <strong>swimming pool</strong> (always required)</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span>Fence is on a <strong>commercial property</strong></span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span>Fence requires <strong>variance</strong> from setback rules</span></li>
</ul>

<p class="text-lg text-gray-700 leading-relaxed mb-6">In <strong>City of Ocala</strong>, the rules are stricter — most fence installs require a permit regardless of height. Always check with City of Ocala Building Services if your property is inside city limits.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">Permit cost and timeline</h2>

<div class="overflow-x-auto my-8">
  <table class="w-full bg-white border border-gray-200">
    <thead class="bg-primary text-white">
      <tr>
        <th class="text-left p-4 font-extrabold text-sm uppercase tracking-wider">Jurisdiction</th>
        <th class="text-left p-4 font-extrabold text-sm uppercase tracking-wider">Cost</th>
        <th class="text-left p-4 font-extrabold text-sm uppercase tracking-wider">Approval time</th>
      </tr>
    </thead>
    <tbody class="text-gray-800">
      <tr class="border-b border-gray-200"><td class="p-4 font-bold">Marion County (unincorporated)</td><td class="p-4">$75-150</td><td class="p-4">3-7 business days</td></tr>
      <tr class="border-b border-gray-200 bg-gray-50"><td class="p-4 font-bold">City of Ocala</td><td class="p-4">$100-200</td><td class="p-4">5-10 business days</td></tr>
      <tr><td class="p-4 font-bold">Pool fence (special)</td><td class="p-4">$125-250</td><td class="p-4">7-14 business days</td></tr>
    </tbody>
  </table>
</div>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">What you need to apply</h2>

<ul class="space-y-2 mb-6 text-lg text-gray-700">
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>Property survey or plat</strong> showing fence line</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>Sketch of fence layout</strong> (length, height, gates)</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>Product specs</strong> (material, manufacturer)</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>Application form</strong> (Marion County or City of Ocala)</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">→</span><span><strong>Permit fee</strong> (paid upfront)</span></li>
</ul>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">Inspections</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6">For permitted fences, an inspector usually visits twice:</p>

<ul class="space-y-2 mb-6 text-lg text-gray-700">
  <li class="flex gap-3"><span class="text-primary font-extrabold">1.</span><span><strong>Post-set inspection</strong> — checks post depth and concrete</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">2.</span><span><strong>Final inspection</strong> — checks completed fence against approved plans</span></li>
</ul>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Pool fences also get a separate <strong>§515 compliance check</strong>.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">What happens if you skip the permit?</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6"><strong>Best case:</strong> Nothing — until you sell the home. Then the buyer's inspector flags the unpermitted work and you have to retroactively pull the permit (which may require fence modifications to bring it up to current code).</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6"><strong>Worst case:</strong> A neighbor complains, the county sends a code enforcement officer, you get fined ($250-1,000 typically), and you may be ordered to remove or modify the fence.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Either way, the $75-200 permit fee is cheap insurance.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">We handle this for you</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6">For every install, we:</p>
<ul class="space-y-2 mb-6 text-lg text-gray-700">
  <li class="flex gap-3"><span class="text-primary font-extrabold">✓</span><span>Determine if a permit is required for your specific job</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">✓</span><span>Submit the application on your behalf</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">✓</span><span>Coordinate inspections with the county</span></li>
  <li class="flex gap-3"><span class="text-primary font-extrabold">✓</span><span>Make sure your fence passes inspection the first time</span></li>
</ul>

<p class="text-lg text-gray-700 leading-relaxed mb-6">The permit fee is included in your written quote — no surprise charges.</p>

<div class="bg-highlight/30 border-l-4 border-primary p-6 my-10">
  <p class="text-lg text-gray-800 leading-relaxed"><strong class="text-primary-900">Want a fence install with permits handled?</strong> <a href="/free-estimate" class="text-primary hover:text-primary-700 font-extrabold underline">Get your free quote →</a> — we'll tell you exactly what permits are needed for your project.</p>
</div>
    `,
  },
];
