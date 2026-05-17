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

const ANDRY = { name: 'Andri Ramírez', role: 'Founder, Ocala Fence Install' };

export const BLOG_POSTS: BlogPost[] = [
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
  <p class="text-lg text-gray-800 leading-relaxed"><strong class="text-primary-900">Need a §515-compliant pool fence?</strong> Every pool fence we install passes Marion County inspection — guaranteed. <a href="/services/aluminum-fence" class="text-primary hover:text-primary-700 font-extrabold underline">See our aluminum pool fence options →</a></p>
</div>
    `,
  },

  {
    slug: 'prepare-yard-fence-install',
    title: 'How to Prepare Your Yard for a Fence Install (6-Step Checklist)',
    excerpt: 'A little prep makes a big difference. Here\'s exactly what to do before our crew arrives — to keep the install fast, clean, and on schedule.',
    metaDescription: 'How to prepare your yard for fence installation: 6-step checklist covering survey, utilities, pets, HOA, and what to expect on install day.',
    date: '2026-04-15',
    dateDisplay: 'April 15, 2026',
    readTime: '5 min read',
    category: 'Install Day',
    image: '/images/blog/prepare-yard-fence-install.webp',
    imageAlt: 'Backyard with utility flags and stakes marking fence line before installation in Marion County FL',
    author: ANDRY,
    body: `
<p class="text-lg text-gray-700 leading-relaxed mb-6">A successful fence install starts with a prepared yard. We handle most of the heavy lifting (permits, utility marking, materials), but there are <strong>six things you can do</strong> that will make your install faster, cleaner, and stress-free.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">1. Confirm your property line (1-2 weeks before)</h2>
<p class="text-lg text-gray-700 leading-relaxed mb-6">If you have a survey from when you bought the home, dig it out. If not, talk to your neighbors and confirm where the line is. Florida law requires fences to be on <strong>your side of the property line</strong> — even an inch over can cause legal headaches later.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6">If there's any doubt, hire a licensed surveyor ($300-500) for peace of mind.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">2. Get HOA approval submitted (3-4 weeks before)</h2>
<p class="text-lg text-gray-700 leading-relaxed mb-6">Most Marion County HOAs require ARC (Architectural Review Committee) approval before any fence install. We provide all the paperwork, drawings, and product specs you need to submit.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Approvals typically take 2-4 weeks. Don't wait until the install date to start this.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">3. Sunshine 811 utility marking (we handle this)</h2>
<p class="text-lg text-gray-700 leading-relaxed mb-6">Florida law requires utility lines to be marked before any digging. <strong>We schedule Sunshine 811 on your behalf</strong> 3-5 business days before install. You'll see colored flags appear in your yard:</p>

<ul class="space-y-2 mb-6 text-lg text-gray-700">
  <li class="flex gap-3"><span class="text-red-600 font-extrabold">●</span><span><strong>Red:</strong> Electric</span></li>
  <li class="flex gap-3"><span class="text-yellow-500 font-extrabold">●</span><span><strong>Yellow:</strong> Gas</span></li>
  <li class="flex gap-3"><span class="text-orange-500 font-extrabold">●</span><span><strong>Orange:</strong> Communications</span></li>
  <li class="flex gap-3"><span class="text-blue-500 font-extrabold">●</span><span><strong>Blue:</strong> Water</span></li>
  <li class="flex gap-3"><span class="text-green-600 font-extrabold">●</span><span><strong>Green:</strong> Sewer</span></li>
</ul>

<p class="text-lg text-gray-700 leading-relaxed mb-6"><strong>Don't pull these flags.</strong> Leave them in until install is complete.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">4. Plan for pets (the day of)</h2>
<p class="text-lg text-gray-700 leading-relaxed mb-6">Dogs and cats are stressed by jobsite noise. Plan to keep them inside or at a friend's house on install day. If your existing fence is being removed, your pets won't have a contained yard until the new fence goes up — usually within hours, but plan for it.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">5. Clear the fence line (the day before)</h2>
<p class="text-lg text-gray-700 leading-relaxed mb-6">Move anything within 5 feet of the fence line — patio furniture, planters, hose reels, kids' toys. The crew needs space to work and store materials without dragging things across your yard.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">6. Make sure we can access the yard</h2>
<p class="text-lg text-gray-700 leading-relaxed mb-6">If we need to drive equipment or carry materials through a gate, make sure the gate is at least 36 inches wide and unlocked. If access is limited, mention it in your initial consultation so we plan accordingly.</p>

<h2 class="text-3xl font-extrabold text-primary-900 mt-12 mb-5">What to expect on install day</h2>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Our lead installer will arrive between 7-9am with the crew and trailer. We'll do a brief walkthrough with you to confirm the fence line, gate placement, and any obstacles. Then the crew gets to work.</p>

<p class="text-lg text-gray-700 leading-relaxed mb-6">Most residential installs in Marion County finish in <strong>1–3 days</strong>, depending on project size. Small jobs are often completed in a single day. Larger properties may take 2–3 days. We'll give you a specific timeline when we quote your project.</p>

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
