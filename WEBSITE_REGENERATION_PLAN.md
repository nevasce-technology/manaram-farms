# Manaram Farm Website Regeneration Plan

## 1. Project objective

Regenerate the Manaram Farm website into a modern, premium and approachable
commerce experience that:

- Establishes Manaram as a trusted Nepalese food producer.
- Explains its local roots, production standards and cultural relevance.
- Makes the broad product catalog easy to understand.
- Highlights signature products instead of treating all 108 products equally.
- Connects products to recipes, traditions and everyday use.
- Supports separate Nepal and USA shopping journeys.
- Uses authentic Manaram photography and verified company information.
- Avoids unverified health, certification and compliance claims.

The homepage should guide visitors through this sequence:

> Emotion → trust → discovery → products → provenance → proof → inspiration → purchase

---

## 2. Source inventory

The public website currently contains:

- 10 standard WordPress pages.
- 12 product categories.
- 108 published product pages.
- 9 recipe videos.
- One default WordPress blog post.
- Separate Nepal and USA shopping destinations.
- Company history, mission, vision and impact material.
- ISO 22000:2018 certification artwork.
- Authentic farm, production, laboratory and product photography.

### Standard pages

1. Home
2. About
3. Products
4. Shop
5. Recipes — currently spelled `Recepies`
6. Contact
7. Cart
8. Checkout
9. My Account
10. EverCompare

### Product categories

1. Dairy
2. Dried Meat
3. Mana Ko Achar
4. Mana Ko Beverages
5. Sattu
6. Sugar, Salt & Seeds
7. Dried & Other Items
8. Flours
9. Grains / Cereal
10. Masala / Spices
11. Titaura
12. Tea & Coffee

### Existing editorial content

- Nine recipe videos.
- No meaningful active news or blog archive.
- The only public blog post is the default “Hello world” entry.

Do not build a Latest News section until Manaram has a real publishing cadence.

---

## 3. Homepage information architecture

The regenerated homepage must include all nine sections below.

1. Hero
2. Why Manaram + ISO 22000:2018
3. Product worlds
4. Signature products
5. Our story and impact
6. From source to shelf
7. Recipes and inspiration
8. Shop Nepal / Shop USA
9. Trust, contact and footer

---

## 4. Global design direction

### Brand character

- Premium but approachable.
- Proudly Nepalese without relying on clichés.
- Editorial rather than corporate.
- Modern food brand rather than generic agriculture website.
- Authentic photography over decorative illustrations.
- Strong information hierarchy with restrained use of cards.

### Typography

- Use Outfit or an equivalent clean contemporary sans-serif for:
  - Navigation
  - Section headlines where clarity is important
  - Product titles
  - Certification and metrics
  - Body copy
- Use Fraunces only selectively for emotional or editorial moments.
- Do not use heavy condensed uppercase display typography.
- Avoid excessive italic headlines.
- Minimum body text: 16px.
- Minimum utility labels: 12–13px.

### Shape language

- Main navbar remains full-width and rectangular.
- Use square edges or subtle 2–4px corners.
- Avoid floating SaaS-style capsules.
- Pills are acceptable only for small controls when functionally appropriate.
- Product and information cards should remain relatively flat.

### Color

- Retain Manaram blue as the primary accent.
- Use navy or blue-black for main text.
- Use warm white, paper and milk tones for backgrounds.
- Use blue sparingly for hierarchy, actions and verified trust signals.
- Avoid large saturated blue overlays on photography.

### Motion

- Use subtle entrance transitions and image scaling only.
- Remove decorative parallax that distorts crops.
- Respect `prefers-reduced-motion`.
- Non-interactive cards should not lift dramatically on hover.

### Layout

- Maximum content width: approximately 1280–1420px.
- Use consistent horizontal gutters.
- Use 12-column editorial layouts on desktop.
- Avoid long stacks of unrelated cards.
- Every section should have one clear reading path.

---

## 5. Global navigation

### Desktop structure

- Logo and “Foods of Nepal” descriptor.
- Our Story.
- Products or Our Foods.
- Our Source or How It’s Made.
- Recipes.
- Contact may remain in the footer if the navigation becomes crowded.
- Unified Shop control containing:
  - Nepal
  - USA

### Navigation behavior

- Full-width rectangular white or warm-white bar.
- 72–76px default height.
- Approximately 64–68px after scrolling.
- Subtle bottom rule.
- Soft shadow only after scrolling.
- Clear hover and keyboard focus states.
- No floating rounded outer navbar.

### Mobile navigation

- Logo left.
- Minimum 44×44px menu button.
- Animated menu-to-close icon.
- Full-screen or below-header warm-paper menu.
- Include Nepal and USA shop actions.
- Lock body scroll when open.
- Escape closes the menu.
- Restore accurate `aria-expanded` and labels on every close path.
- Close on link selection and resize above the mobile breakpoint.
- Hidden menu must not remain focusable.

---

## 6. Section 1 — Hero

### Purpose

Create emotional connection and immediately communicate Nepalese origin and
everyday relevance.

### Required content

- Provenance statement:
  - Rooted in Nepal.
  - Established in 2014.
- Concise core message:
  - Nepal’s goodness, made for every day.
- Supporting statement covering:
  - Dairy
  - Pantry staples
  - Himalayan foods
  - Traditional taste
  - Modern care
- Primary CTA:
  - Explore our foods
- Secondary CTA:
  - Our story

### Visual requirements

- Keep the current mountain-and-cattle hero direction.
- Preserve the mountain as the dominant focal point.
- Text occupies the natural open space on the left.
- Use only a thin, localized readability haze.
- Do not add more statistics or certification details to the hero.

### Acceptance criteria

- Message is understandable in five seconds.
- No more than two headline lines on desktop.
- Original photography remains vivid.
- Text meets contrast requirements.
- Desktop and mobile crops retain the mountain and cattle context.

---

## 7. Section 2 — Why Manaram + ISO certification

### Purpose

Explain why visitors should trust Manaram before introducing the full product
range.

### Desktop layout

- Two-column top area:
  - Left: approximately 7–8 columns.
  - Right: approximately 4–5 columns.
- Promise row below the introduction.

### Introduction content

Eyebrow:

> Why Manaram

Headline:

> Made in Nepal. Made with care.

Supporting message:

> Since 2014, Manaram Farm has brought Nepal’s local ingredients and food
> traditions into thoughtfully made dairy, pantry and Himalayan foods for
> everyday life.

### Integrated proof points

- `2014` — Established in Nepal.
- `40,000+` — Farmers supported.

Before publication, clarify the exact scope of the 40,000+ figure:

- Is it Manaram Farm alone?
- Is it Manaram Group and its CSR programs?
- Does it represent training, market access, direct sourcing or all three?

Preferred verified wording:

> 40,000+ farmers reached through training and market access.

### ISO module

Place a rectangular certification module in the upper-right.

Required content:

- Food safety, verified.
- ISO 22000:2018.
- Certified food-safety management system.
- Genuine IAS Accredited and G-CERT artwork.

Asset:

`wireframes/assets/manaram-about/IAS-Accredfied.jpg`

Do not claim:

- That ISO directly endorses individual products.
- Certification scope beyond the visible ISO 22000:2018 material.
- “FDA approved” or “FDA compliant” without formal verification.

### Three promise panels

#### 1. Quality, without shortcuts

- Narrative stage: Made with care.
- Copy:
  - Considered production and attention at every step.
- Photo:
  - A Manaram team member sealing a packaged product.
- Asset:
  - `wireframes/assets/manaram-homepage/Premiumqualityproducts.jpg`

#### 2. Wellbeing comes first

- Narrative stage: Tested with purpose.
- Copy:
  - Foods made for everyday nourishment and enjoyment.
- Photo:
  - Laboratory technician testing a product sample.
- Asset:
  - `wireframes/assets/manaram-homepage/Healthwellnessfirst.jpg`

#### 3. Trust, built into the process

- Narrative stage: Rooted at source.
- Copy:
  - Traditional know-how supported by modern standards.
- Photo:
  - Hands planting a young seedling.
- Optimized asset:
  - `wireframes/assets/manaram-homepage/goodnessyoucantrust-1200.jpg`

### Responsive behavior

- Desktop: introduction and ISO card side by side.
- Tablet: retain a balanced 7/5 or 6/6 layout.
- Mobile:
  1. Introduction
  2. Proof points
  3. ISO card
  4. Promise panels

### Acceptance criteria

- Section uses clean sans-serif typography.
- ISO is visually prominent but not oversized.
- No duplicate ISO stat below the module.
- Section is approximately 30–40% shorter than its earlier card-heavy version.
- All image descriptions and dimensions are accurate.

---

## 8. Section 3 — Product worlds

### Purpose

Help visitors understand the catalog without exposing all 12 categories at
once.

### Consolidated customer-facing worlds

1. Dairy & Chhurpi
2. Achar & Fermented Foods
3. Himalayan Grains & Flours
4. Spices & Native Ingredients
5. Sattu, Snacks & Titaura
6. Sukuti & Dried Foods

Optional seventh world:

7. Tea, Coffee & Beverages

### Category mapping

#### Dairy & Chhurpi

- Dairy
- Chhurra Chhurpi products

#### Achar & Fermented Foods

- Mana Ko Achar
- Gundruk
- Maseura
- Brined products

#### Himalayan Grains & Flours

- Flours
- Grains / Cereal
- Kwati
- Chiura
- Traditional rice

#### Spices & Native Ingredients

- Masala / Spices
- Sugar, Salt & Seeds
- Jimbu
- Timur
- Silam
- Akabare

#### Sattu, Snacks & Titaura

- Sattu
- Titaura
- Wellness-oriented snacks

#### Sukuti & Dried Foods

- Dried Meat
- Dried Fish
- Dried & Other Items

#### Tea, Coffee & Beverages

- Tea & Coffee
- Mana Ko Beverages

### Design requirements

- Use six or seven large image-led navigation tiles.
- Avoid generic stock photography.
- Use product packaging, ingredient or production photography.
- Each world should contain:
  - Name
  - One-line description
  - Category count or example products, if useful
  - Clear category CTA

### Acceptance criteria

- Culturally distinctive categories are visible.
- Achar, fermented foods, sukuti and native ingredients are not buried.
- Visitors can reach all 12 underlying catalog categories.

---

## 9. Section 4 — Signature products

### Purpose

Show products that explain Manaram’s identity rather than a random bestseller
grid.

### Required six-product set

#### 1. Chhurra Chhurpi — The Original

Why it belongs:

- Strong Himalayan identity.
- Cow-milk hard cheese product.
- Traditional product in a contemporary snack format.
- Recognizable packaging.

Product page:

`https://manaram.farm/product/chhurra-chhurpi-the-original/`

Photography:

`Chhurpi-Original.jpg`

#### 2. Aji Ko Gundruk Achar

Why it belongs:

- Culturally distinctive fermented ingredient.
- Strong “Aji” or grandmother story.
- Connects food with memory and inherited recipes.

Product page:

`https://manaram.farm/product/mana-ko-gundruk-pickle/`

Photography:

`Achar-Gundruk.jpg`

#### 3. Mana Ko Ghee

Why it belongs:

- Familiar household dairy staple.
- Represents Manaram’s dairy foundation.
- Connects naturally to recipe content.

Product page:

`https://manaram.farm/product/mana-ko-ghee/`

Photography:

`Mana-Ko-Ghee.jpg`

#### 4. Poshilo Protein+ Sattu

Why it belongs:

- Combines traditional grains with modern wellness.
- Relevant to younger, active and health-focused audiences.
- Demonstrates innovation beyond dairy.

Product page:

`https://manaram.farm/product/protein-satu/`

Photography:

`Protein-Satu.jpg`

#### 5. Sahi Sukuti — The Original

Why it belongs:

- Strong Nepalese cultural identity.
- Represents traditional drying methods.
- Adds depth beyond dairy and pantry categories.

Product page:

`https://manaram.farm/product/sahi-sukuti-the-original/`

Photography:

`sukuti-original.jpg`

#### 6. Jimbu or Yomari Flour

Final selection should be decided during content direction.

##### Option A — Jimbu

Use if the goal is native Himalayan ingredients and mountain cuisine.

Product page:

`https://manaram.farm/product/jimbu/`

Photography:

`Jumbu.jpg`

##### Option B — Yomari Flour

Use if the goal is festival, culture and recipe storytelling.

Product page:

`https://manaram.farm/product/yomari-flour/`

Photography:

`Yamori-Flour.jpg`

### Optional rotation candidates

- Kwati Beans
- Jetho Budho Rice
- Chiura Granola
- Mana Ko Timur Chop Achar
- Mana Ko Lapsi Achar
- Maas and Pidalu Maseura
- Rayo Gundruk
- Mana Ko Perungo dried fish
- Nepali Momo Masala
- Sankhuwa Shakhar
- Spicy Hog Plum Titaura

### Product-card requirements

- Product image.
- Product name.
- Cultural or functional one-line explanation.
- Category.
- Region availability when known.
- Product CTA.
- Do not copy current raw product descriptions directly.

### Acceptance criteria

- At least four of six products are culturally distinctive to Nepal.
- Product photography is consistent and optimized.
- Cards explain why a product matters, not only what it costs.

---

## 10. Section 5 — Our story and impact

### Purpose

Explain who Manaram is, what it does and how its work connects to Nepal.

### Core narrative

> Local resources → traditional knowledge → careful production → modern food
> safety → homes in Nepal and beyond.

### Required facts

- Manaram Farm was established in 2014.
- It was created to utilize and promote local resources.
- It combines traditional methods with innovative production.
- Its vision includes promoting Himalayan foods locally and globally.
- More than 75% of its workforce is women.

### Recommended copy hierarchy

Eyebrow:

> Who we are

Headline:

> Rooted in Nepal. Made with care.

Lead:

> Manaram Farm turns Nepal’s native ingredients into thoughtfully made foods
> for everyday life.

Supporting copy:

> Since 2014, we have brought together quality raw materials, time-honoured
> knowledge and modern standards to make familiar Himalayan flavours ready for
> homes in Nepal and beyond.

### Impact proof

- `75%+` — Women across our workforce.
- `40,000+` — Farmers reached through training and market access, pending scope verification.
- `2014` — Manaram Farm established in Nepal.

### Layout

- Compact editorial split.
- One dominant authentic farm image.
- One supporting production or team image.
- Plain proof points instead of large promotional cards.
- One link to the full About page.

### Preferred assets

- `wireframes/assets/manaram-homepage/farm-cows.jpg`
- `wireframes/assets/manaram-about/abt_image_p3.jpg`
- `wireframes/assets/manaram-about/abt_what_we_do_bg.jpg`
- `wireframes/assets/manaram-about/about_manaram_farm.jpg`, only if its baked-in design is not visible or it is recropped.

### Avoid

- Decorative “10+ years” seals.
- Repeating the same 2014 fact in several cards.
- Generic claims about close farmer relationships without a verified source.

---

## 11. Section 6 — From source to shelf

### Purpose

Demonstrate how Manaram’s promise is delivered in practice.

### Three-stage sequence

#### 1. Rooted locally

Copy direction:

> Ingredients and agricultural resources from Nepal.

Visual options:

- Farm workers tending land beside cattle.
- Aerial production and agricultural site.
- Cattle and dairy-farm imagery.

Preferred asset:

`wireframes/assets/manaram-about/abt_what_we_do_bg.jpg`

#### 2. Made with care

Copy direction:

> Traditional knowledge supported by considered production.

Visual options:

- Team member packing products.
- Production-floor photography.

Preferred assets:

- `wireframes/assets/manaram-about/abt_image_p3.jpg`
- `wireframes/assets/manaram-homepage/Premiumqualityproducts.jpg`

#### 3. Verified for safety

Copy direction:

> Managed under ISO 22000:2018 food-safety standards.

Visual options:

- Laboratory testing.
- Certification artwork as a supporting detail.

Preferred assets:

- `wireframes/assets/manaram-homepage/Healthwellnessfirst.jpg`
- `wireframes/assets/manaram-about/IAS-Accredfied.jpg`

### Design requirements

- Use real photography rather than generic icons.
- Use a three-step sequence or horizontal editorial timeline.
- Keep copy brief.
- Certification artwork should support the process rather than dominate it.

### Acceptance criteria

- The sequence explains sourcing, production and verification.
- No unsupported “farm to doorstep” claims.
- No decorative stock icons.

---

## 12. Section 7 — Recipes and inspiration

### Purpose

Show how Manaram products fit into cooking, celebrations and everyday life.

### Existing recipe library

1. Chicken Ghee Momo with Mana Ko Ghee
2. Butter Cookie Recipe with Mana Ko Butter
3. Nepali-Style Sukuti with Sahi Sukuti
4. Mana Ko Ice Ade Juice
5. Easy Vanilla Muffins
6. Crispy Corn
7. Chicken Dum
8. Thicheko Aalu
9. Gajar Ko Halwa

### Homepage recipe set

Show three.

#### Required

- Chicken Ghee Momo with Mana Ko Ghee
- Nepali-Style Sukuti with Sahi Sukuti

#### Choose one

- Butter Cookies with Mana Ko Butter
- Gajar Ko Halwa

Butter Cookies provide accessible everyday appeal.

Gajar Ko Halwa provides stronger South Asian cultural relevance.

### Existing video links

- `https://www.youtube.com/watch?v=NSLtUJKyOaE`
- `https://www.youtube.com/watch?v=aA0u6ISd1ZA`
- `https://www.youtube.com/watch?v=UcT9NpgEglM`
- `https://www.youtube.com/watch?v=Fxwwih91zCE`
- `https://www.youtube.com/watch?v=JA4ZsD36Ub8`
- `https://www.youtube.com/watch?v=SKrJp8BWaLc`
- `https://www.youtube.com/watch?v=KdePnguxdbY`
- `https://www.youtube.com/watch?v=Nh0aT2ReCsI`
- `https://www.youtube.com/watch?v=7xKq41vD4X8`

Before implementation, map each of the final three recipe titles to the correct
video ID and confirm that the videos remain public.

### Card requirements

- Video thumbnail.
- Recipe name.
- Product used.
- Approximate preparation time, only if verified.
- Watch recipe CTA.

### Supporting actions

- View all recipes.
- Shop the featured ingredient.

### Acceptance criteria

- At least two recipes have a clear Nepalese identity.
- Recipe cards link to valid videos or dedicated recipe pages.
- Video embeds are lazy-loaded.
- No autoplay.

---

## 13. Section 8 — Shop Nepal / Shop USA

### Purpose

Make the dual-market commerce model obvious and reduce checkout confusion.

### Required regional destinations

#### Nepal

- Destination: Mana Ko Mart.
- Existing brand asset:
  - `wireframes/assets/manaram-homepage/manamart_logo_with-text.png`

#### USA

- Destination: Jibro Foods.
- Existing brand asset:
  - `wireframes/assets/manaram-homepage/logo_jibro_foods.png`

### Recommended title

> Himalayan foods, closer to home.

### Layout

- Two rectangular regional cards.
- Each card includes:
  - Region
  - Currency, if confirmed
  - Delivery scope, if confirmed
  - Store logo
  - Shop CTA
- Use authentic regional imagery only when it supports the shopping decision.

### Navigation relationship

- Keep the compact Nepal/USA selector in the navbar.
- Retain this full section because the two-store model is strategically important.

### Acceptance criteria

- Visitors clearly understand that Nepal and USA use separate storefronts.
- External destinations are accurate.
- Opening behavior is consistent and accessible.

---

## 14. Section 9 — Trust, contact and footer

### Required contact details

- Address:
  - Baluwatar 4, Kathmandu, Nepal
- Email:
  - `info@manaram.group`
- Phone:
  - `+977-01-5971547`

Before launch, reconcile the main address with the separate corporate address
shown on the Contact page:

> Suite 105, 529 Bansidhar Marg, Kathmandu, Nepal

### Required trust details

- ISO 22000:2018 reference.
- Nepal and USA shop links.
- Social media destinations.
- Full About link.
- Products link.
- Recipes link.
- Contact link.

### Footer structure

1. Brand statement.
2. Shop by region.
3. Explore:
   - Products
   - Our Story
   - Recipes
4. Contact.
5. Social links.
6. Legal:
   - Privacy
   - Terms
   - Shipping
   - Returns
7. Copyright.

### Avoid

- Placing the full contact form on the homepage.
- Repeating the entire ISO card.
- Unverified social links.

---

## 15. Supporting pages to regenerate

The homepage is the priority, but the following supporting pages must be aligned
with it.

### About

Include:

- Origin in 2014.
- Purpose and mission.
- Local-resource focus.
- Traditional and innovative production.
- Women workforce.
- Farmer impact after verification.
- Source-to-shelf process.
- ISO certification.
- Authentic team and farm photography.

Remove or redesign:

- Dense baked-in infographics.
- Repeated mission text.
- Heavy composited hero graphics.

### Products landing page

- Use the consolidated product worlds.
- Provide access to all 12 catalog categories.
- Explain category differences.
- Support search and filtering.

### Category pages

- Category story.
- Product grid.
- Relevant ingredients or cultural context.
- Filters appropriate to the category.
- Related recipe.

### Product pages

- Clean product photography.
- Verified description.
- Ingredients.
- Allergen information.
- Sizes.
- Nutrition information.
- Storage.
- Preparation or usage.
- Cultural context where relevant.
- Certification scope.
- Regional availability.
- Related recipe.
- Related products.

### Recipes page

- Correct spelling from `Recepies` to `Recipes`.
- Search and filtering.
- Product-based filters.
- Cuisine or meal filters.
- Proper recipe detail pages rather than only a video grid.

### Contact

- Primary and corporate address.
- Phone.
- Email.
- Map.
- Contact form.
- Wholesale/export enquiry option if applicable.

### Commerce pages

- Cart
- Checkout
- My Account
- Nepal/USA routing

These should use the same visual system and explain regional checkout clearly.

### Blog/news

Do not feature publicly until real content exists.

Remove or unpublish:

- “Hello world!”

Future editorial categories:

- Farm updates
- Product launches
- Farmer stories
- Seasonal recipes
- Certification updates
- Community impact

---

## 16. Photography plan

### Highest-priority authentic assets

#### Farm and source

- `wireframes/assets/manaram-about/abt_what_we_do_bg.jpg`
- `wireframes/assets/manaram-homepage/farm-cows.jpg`
- `wireframes/assets/manaram-about/abt_parallax.jpg`
- `wireframes/assets/manaram-about/parallax_about-scaled.jpg`

#### Production and team

- `wireframes/assets/manaram-about/abt_image_p3.jpg`
- `wireframes/assets/manaram-homepage/Premiumqualityproducts.jpg`
- `wireframes/assets/manaram-about/abt_image_p2.jpg`

#### Laboratory and verification

- `wireframes/assets/manaram-homepage/Healthwellnessfirst.jpg`
- `wireframes/assets/manaram-about/IAS-Accredfied.jpg`

#### Company and market activity

- `wireframes/assets/manaram-about/abt_image_p1.jpg`

Use only when the context of the event or market is confirmed.

### Optional wide banners

- `wireframes/assets/manaram-about/abt_parallax.jpg`
- `wireframes/assets/manaram-about/parallax_about-scaled.jpg`

### Avoid as primary homepage assets

- `hero_about.jpg`
  - Overly composited and visually dated.
- `about_manaram_farm.jpg`
  - Contains baked-in “Since 2014” graphics.
- `Group-313.png`
  - Useful information but should be rebuilt as accessible HTML.
- `Group-326.png`
  - Overcrowded infographic with embedded text.
- 80×80 process icons.
  - Too generic for a premium homepage.
- Category thumbnails as large editorial images.
  - Better used for navigation or catalog cards.

### Product photography to collect

Download and optimize the final signature-product images:

- `Chhurpi-Original.jpg`
- `Achar-Gundruk.jpg`
- `Mana-Ko-Ghee.jpg`
- `Protein-Satu.jpg`
- `sukuti-original.jpg`
- `Jumbu.jpg` or `Yamori-Flour.jpg`

### Image-processing requirements

- Preserve original source files.
- Generate responsive derivatives.
- Prefer AVIF and WebP with JPEG fallback.
- Create 480px, 800px, 1200px and 1600px widths where relevant.
- Do not serve multi-megabyte originals in small cards.
- Record meaningful alt text.
- Decorative images use empty alt attributes.
- Use explicit width and height.
- Lazy-load below-the-fold imagery.
- Do not lazy-load the main hero image.

---

## 17. Content and claim verification

### Claims currently considered credible

- Established in 2014.
- Mission to utilize and promote local resources.
- Use of traditional and innovative techniques.
- Vision to promote Himalayan foods locally and globally.
- More than 75% of workforce is women.
- ISO 22000:2018 certification artwork is publicly displayed.
- 40,000+ farmer reach is reported in official Manaram material.

### Claims requiring confirmation

- Exact scope of 40,000+ farmers.
- Whether ingredients are directly sourced from local farmers for every product.
- “No preservatives” statements by product.
- “No artificial additives” statements by product.
- FDA compliance and the precise certified entity/products.
- Health claims involving:
  - Immunity
  - Metabolism
  - Blood-sugar control
  - Digestion
  - Disease prevention
- Nutrition claims such as protein percentages.
- Regional delivery and currency details.
- Bestseller status.

### Known content-quality issues

The current product catalog contains mismatched or questionable descriptions:

- CTC Tea appears to contain rice-flour copy.
- Mana Ko Dahi contains ghee-related copy.
- Mana Ko Nauni contains ghee-related copy.
- Timur appears to contain mustard-seed copy.
- Some product pages make strong medical or nutrition claims.
- Some pages mention FDA compliance without explaining scope.
- Product naming includes inconsistent spellings such as Satu/Sattu and Mascia/Masala.

### Required action

Do not copy current descriptions directly.

Create a verified product-content sheet containing:

- Final product name.
- Category.
- Brand.
- Ingredients.
- Allergens.
- Sizes.
- Nutrition.
- Storage.
- Usage.
- Cultural background.
- Certification and compliance.
- Nepal availability.
- USA availability.
- Approved health or nutrition claims.

---

## 18. Accessibility requirements

- Semantic section headings.
- Logical heading order.
- Keyboard-accessible navigation.
- Visible focus states.
- Accurate button and link labels.
- Menu state communicated with ARIA.
- Proper figure and figcaption use.
- Alt text accurately reflects images.
- Certification marks receive meaningful alt text or adjacent equivalent copy.
- No text embedded in images when it can be HTML.
- Color contrast meets WCAG AA.
- Body text remains at least 16px.
- Touch targets are at least 44×44px.
- Reduced-motion support.
- Video does not autoplay.
- External links are clearly handled.
- Hash targets account for the fixed header.

---

## 19. Performance requirements

- Responsive images and modern formats.
- No unnecessary WordPress thumbnail duplication.
- Optimize product imagery.
- Lazy-load below-the-fold media.
- Defer recipe video embeds until interaction or viewport proximity.
- Remove unused CSS from abandoned concepts.
- Remove duplicate story sections.
- Avoid scroll handlers that write styles continuously.
- Use IntersectionObserver only where animation adds value.
- Ensure content remains visible if JavaScript fails.
- Preload only the hero image and critical fonts.
- Target strong Core Web Vitals.

---

## 20. SEO and structured data

### Homepage

- Organization schema.
- WebSite schema.
- SearchAction if product search is available.

### Products

- Product schema.
- Offer schema per region where applicable.
- Nutrition and availability only when verified.

### Recipes

- Recipe schema.
- VideoObject schema.

### About and contact

- Organization and LocalBusiness details.
- Consistent address and contact information.

### Content requirements

- Unique page titles.
- Accurate meta descriptions.
- Canonical URLs.
- Open Graph imagery.
- Descriptive internal links.
- Correct `Recipes` spelling in URLs and navigation where feasible.
- Redirect the old `/recepies/` route if it changes.

---

## 21. Implementation phases

### Phase 0 — Verification and content preparation

1. Confirm company facts with Manaram.
2. Confirm ISO certificate scope and validity.
3. Clarify the 40,000+ farmer figure.
4. Confirm women-workforce figure and entity scope.
5. Confirm Nepal and USA shopping URLs.
6. Confirm regional currencies and delivery areas.
7. Audit all 108 product descriptions.
8. Correct product naming and taxonomy.
9. Map recipe titles to the correct video IDs.
10. Confirm contact addresses and phone numbers.
11. Confirm active social accounts.

Deliverables:

- Approved facts sheet.
- Product master spreadsheet.
- Recipe mapping sheet.
- Asset manifest.
- Redirect plan.

### Phase 1 — Design system and global shell

1. Finalize color, typography, spacing and shape tokens.
2. Build navbar.
3. Build mobile navigation.
4. Build footer.
5. Build global buttons, text links and form controls.
6. Define responsive breakpoints.
7. Define image component behavior.

Deliverables:

- Design tokens.
- Global CSS/components.
- Responsive navigation.
- Footer.

### Phase 2 — Homepage core

Build in this order:

1. Hero.
2. Why Manaram + ISO.
3. Product worlds.
4. Signature products.
5. Story and impact.
6. Source-to-shelf process.
7. Recipe section.
8. Regional shops.
9. Trust and footer.

Deliverables:

- Complete responsive homepage.
- Homepage content model.
- Homepage asset set.

### Phase 3 — Catalog

1. Products landing page.
2. Consolidated product-world navigation.
3. All 12 category pages.
4. Product-card system.
5. Filtering and search.
6. Product detail template.
7. Related products.
8. Regional availability.

### Phase 4 — Story, recipes and contact

1. About page.
2. Process/source page or section.
3. Recipes landing page.
4. Recipe detail template.
5. Contact page.
6. Wholesale/export enquiry flow if required.

### Phase 5 — Commerce and regional routing

1. Nepal shop integration.
2. USA shop integration.
3. Cart and checkout.
4. Account pages.
5. Currency and market communication.
6. External-store transition messaging.

### Phase 6 — QA and launch

1. Content QA.
2. Claim and compliance review.
3. Responsive QA.
4. Accessibility audit.
5. Performance audit.
6. SEO and structured-data validation.
7. Analytics.
8. Redirects.
9. Browser and device testing.
10. Production launch.

---

## 22. Homepage acceptance checklist

### Brand

- [ ] Nepalese provenance is clear.
- [ ] Tone feels premium, contemporary and human.
- [ ] Photography is authentic.

### Trust

- [ ] ISO 22000:2018 is accurately represented.
- [ ] Farmer and workforce facts are verified.
- [ ] No unsupported health or FDA claims appear.

### Products

- [ ] Six or seven product worlds are understandable.
- [ ] All 12 categories remain reachable.
- [ ] Six signature products explain Manaram’s distinctiveness.
- [ ] Product descriptions are rewritten and verified.

### Story

- [ ] The story appears only once as a primary narrative.
- [ ] Source, production and verification are clearly connected.
- [ ] Impact proof is concise and non-repetitive.

### Recipes

- [ ] Three homepage recipes are selected.
- [ ] Video mappings are correct.
- [ ] Videos are lazy-loaded and do not autoplay.

### Commerce

- [ ] Nepal and USA stores are clearly differentiated.
- [ ] Navigation and regional section point to correct destinations.

### UX

- [ ] Mobile menu is accessible.
- [ ] All layouts work on desktop, tablet and mobile.
- [ ] Touch targets meet minimum size.
- [ ] Focus states are visible.
- [ ] Reduced motion works.

### Performance

- [ ] Hero loads quickly.
- [ ] Product images have responsive variants.
- [ ] No oversized images are served in small cards.
- [ ] JavaScript failure does not hide content.

### SEO

- [ ] Page metadata is complete.
- [ ] Structured data validates.
- [ ] Redirects are configured.
- [ ] Contact information is consistent.

---

## 23. Decisions required before regeneration

1. Choose Jimbu or Yomari Flour as the sixth signature product.
2. Choose Butter Cookies or Gajar Ko Halwa as the third homepage recipe.
3. Decide whether beverages receive their own product world.
4. Confirm whether Contact remains in the primary navigation.
5. Confirm the wording and scope of the 40,000+ farmer figure.
6. Confirm the wording and scope of the 75%+ women-workforce figure.
7. Confirm ISO certificate scope and whether a certificate-detail page exists.
8. Confirm Nepal and USA currency, delivery and store destinations.
9. Confirm which address is primary.
10. Decide whether to create a dedicated Source / How It’s Made page.
11. Decide whether the homepage will transact directly or route to external stores.
12. Decide whether a news/blog program will be launched later.

---

## 24. Recommended next action

Complete Phase 0 before regenerating the full website.

The immediate working session should produce:

1. An approved homepage content outline.
2. Final answers to the 12 decisions above.
3. A verified claims sheet.
4. The six signature-product selections.
5. The three recipe selections and video mapping.
6. A complete image shortlist with responsive derivatives.
7. A reusable design-system specification.

Once those are approved, regenerate the homepage first and use its design system
to rebuild the supporting pages.
