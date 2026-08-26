# Manaram Farm — live site content inventory

Crawled **2026-08-25** from [manaram.farm](https://manaram.farm/). WordPress (OceanWP + Elementor) + WooCommerce. Sitemaps (`/sitemap.xml`, `/wp-sitemap.xml`) returned HTTP 500; catalog came from the Store API (108 products) plus rendered HTML for Home, About, Contact, Products, Recipes.

## How to use

- This is **raw live copy**, not new writing. Keep typos, duplicated PDP text, and empty “why choose” lists as evidence of what to rewrite.
- Do **not** invent testimonials, prices, awards, or certifications beyond the claims ledger below.
- Live legal name is **Manaram Farm** (footer: “Manaram Farm Pvt Ltd” on Facebook). This repo’s working name is Manaram Farms — reconcile in writing, don’t treat them as two companies without the team.
- Recipe listing has **titles only**. No unique recipe permalinks and no methods on `/recepies/`.
- Product prices on the public Store API were `0` — omitted.

## Company and contact

| Field | Live value |
| --- | --- |
| Site name | Manaram Farm |
| Established | 2014 |
| Footer ISO line | “ISO Certified: A mark of our promise for healthier, safer, better food.” (standard/body not named) |
| Address (footer + contact) | Baluwatar 4, Kathmandu, Nepal |
| Corporate address | Suite 105, 529 Bansidhar Marg, Kathmandu Nepal |
| Phone | +977-01-5971547 |
| Email | info@manaram.group |
| Facebook | https://www.facebook.com/people/Manaram-Farm-Pvt-Ltd/61551033322466/ |
| Instagram | https://www.instagram.com/manaram.farm/ (live href has a trailing space) |
| YouTube | https://www.youtube.com/@ManaKoKitchen (live href has a trailing space) |
| Shop from Nepal | https://manakomart.com/ |
| Shop from USA | https://jibrofoods.com/ |
| Copyright | © 2025 Manaram Farm . All rights Reserved. |

Contact form fields: First Name, Last Name, Phone Number, Email Address*, Message, Submit.

## Information architecture

| Nav label (live) | URL |
| --- | --- |
| Home | https://manaram.farm/ |
| About | https://manaram.farm/about/ |
| Products | https://manaram.farm/products/ |
| — Dairy | https://manaram.farm/product-category/dairy/ |
| — Dried Meat | https://manaram.farm/product-category/dried-meat/ |
| — Mana Ko Achar | https://manaram.farm/product-category/mana-ko-achar/ |
| — Mana Ko Beverages | https://manaram.farm/product-category/mana-ko-beverages/ |
| — Sattu | https://manaram.farm/product-category/sattu/ |
| — Sugar, Salt & Seeds | https://manaram.farm/product-category/sugar-salt-seeds/ |
| — Dried & Other Items | https://manaram.farm/product-category/dried-other-items/ |
| — Flours | https://manaram.farm/product-category/flours/ |
| — Grains / Cereal | https://manaram.farm/product-category/grains-cereal/ |
| — Masala / Spices | https://manaram.farm/product-category/masala-spices/ |
| — Titaura | https://manaram.farm/product-category/titaura/ |
| — Tea & Coffee | https://manaram.farm/product-category/tea-coffee/ |
| Recepies (spelling) | https://manaram.farm/recepies/ |
| Contact | https://manaram.farm/contact/ |
| Shop (full catalog UI) | https://manaram.farm/shop/ |

WooCommerce also exposes Cart, Checkout, My account. Skip those for brand writing.

Mega-menu aliases on home: “Dairy Products”, “Poshilo Sattu”, “Dried & Others”, “Flours / Atta”, “Grains / Cereals”.

Other public pages not in primary nav: `/evercompare/` (EverCompare shortcode only).

## Home — https://manaram.farm/

**Hero chips**

- Premium Quality / Products
- Health & Wellness / First
- Goodness You / Can Trust

**Welcome**

- Heading: Welcome To Manaram Farm
- Body: Here you will find a wide range of healthy and fresh dairy products that were proudly produced at our farm by our farmers and cows.

**Our Story**

- Year: 2014
- Body: Manaram Farm was established with the mission to utilize and promote local resources, producing high-quality consumable products. Through various brands, we develop a range of FMCG products to meet our customers’ daily needs efficiently. Using the finest raw materials and traditional and innovative techniques, we ensure our products are both delicious and healthy.
- CTA: Explore More → About

**Product Categories** — 12 tiles (same as Products page).

**Shop Now**

- Shop from Nepal → manakomart.com
- Shop from USA → jibrofoods.com

**Footer** — ISO line, Baluwatar address, phone, email, social, copyright.

## About — https://manaram.farm/about/

**About Us** — same establishment paragraph as Home story (mission / local resources / FMCG / traditional and innovative techniques).

**Pillars**

- Rooted In / Tradition
- Powered By / Innovation
- Crafted For Your / Nutrition

**Since** — Providing the Highest Quality Products & Services Since 2014.

**Our Vision**

Our vision is to create high-quality Himalayan foods with innovative methods, promoting them locally and globally to help reduce Nepal's trade deficit.

**Our Mission**

- Produce quality products of the highest standards in the world.
- Maintain traditional taste of the product while innovating the state of art methodology.
- Innovate new products using native raw materials of the country.
- Promote women empowerment while employing over 75% of our work force.
- Promote Himalayan beauty by promoting its landmarks.

**What Do We Do?** — heading only on the live page (no body in the scrape).

**Why Choose Manaram Farm Products?**

At Manaram Farm, we do more than just grow — we care. Every product we offer reflects our commitment to quality, health, and the well-being of our customers. Here's what sets us apart:

(No numbered differentiators follow.)

At Manaram Farm, it's not just about farming — it's about fostering a better, healthier world, one product at a time.

## Products hub — https://manaram.farm/products/

Heading: Products. Twelve category cards only (images + names). No extra intro copy.

## Contact — https://manaram.farm/contact/

Heading: Contact / Drop us a line. Address, corporate address, email, phone, Facebook, form (see company table).

## Recipes — https://manaram.farm/recepies/

Live nav spelling: **Recepies**. Listing titles only (no ingredients, steps, or permalinks found):

1. Chicken Ghee Momo with Mana Ko Ghee
2. Butter Cookie Recipe with Mana Ko Butter
3. NEPALI STYLE SUKUTI With Sahi Sukuti
4. ManaKo Ice Ade Juice
5. Easy Vanilla Muffins Recipe
6. Crispy Corn Recipe
7. Chicken Dum Recipe
8. Thicheko Aalu Recipe
9. Gajar Ko Halwa

## Claims ledger (quote, do not inflate)

| Claim | Where |
| --- | --- |
| Established 2014 | Home, About |
| ISO certified (unnamed standard) | Footer every page |
| High-quality Himalayan foods; reduce Nepal’s trade deficit | About vision |
| Highest standards in the world | About mission |
| Traditional taste + “state of art” methods | About mission |
| Native raw materials of the country | About mission |
| Women empowerment; over 75% of workforce | About mission |
| Promote Himalayan beauty / landmarks | About mission |
| Dairy from farm / farmers and cows | Home welcome |
| FMCG via various brands | Home + About |
| Product-level “100% pure”, nutrition tables, sizes | Individual PDPs in catalog |

## Copy bugs (rewrite fodder)

- **Mana Ko Dahi** and **Mana Ko Nauni** use Mana Ko Pure Cow **Ghee** body copy.
- **Mana Ko Cream** calls itself cream then says “this **milk** is perfect for drinking…”.
- **Nine Titaura SKUs** share one generic assortment paragraph (Amala / Lapsi mix) regardless of candy name.
- **Nine masala SKUs** share “Mana Ko Mascia” (typo) collection copy.
- **CTC Tea** description is **Taichin Rice Flour**.
- **Timur** description is **Black Mustard Seeds**.
- Several achar SKUs share one “collection of Nepali pickles” blurb.
- Chicken Sahi Sukuti flavors share one chicken blurb; some buffalo sukuti sizes share another.
- Instagram and YouTube header links include a trailing `%20`.
- Home welcome is dairy-only; the live catalog is a full FMCG range.

## Catalog (108 products)

Source: WooCommerce Store API on 2026-08-25 (`/wp-json/wc/store/v1/products`, 2 pages). Prices on the API are `0` USD — not recorded. Size/ingredient/nutrition text is only included when it appears in the product description.

### Dairy

Archive: https://manaram.farm/product-category/dairy/

#### Mana Ko Cream

- URL: https://manaram.farm/product/mana-ko-cream/
- Type: simple
- Copy:

Mana Ko Cream is rich, creamy, and naturally wholesome, straight from healthy cows. Loaded with protein, calcium, and essential nutrients, it provides lasting energy and nourishment for the whole family. With its thick, smooth texture and pure taste, this milk is perfect for drinking, cooking, or making your favorite dairy delights-bringing you the richness of nature in every sip.

#### Mana Ko Dahi

- URL: https://manaram.farm/product/mana-ko-dahi/
- Type: simple
- Copy:

Mana Ko Pure Cow Ghee is a natural source of healthy fats that supports digestion, immunity, and overall well-being. Made from fresh cow's milk with no preservatives brings you rich aroma, smooth texture, and authentic homemade taste. Packed with goodness, it's perfect for everyday cooking and traditional recipes.

#### Mana Ko Milk

- URL: https://manaram.farm/product/mana-ko-milk/
- Type: simple
- Copy:

Our Pure Cow Milk comes straight from healthy, well-cared-for cows, ensuring natural freshness and rich nutrition in every drop. Packed with protein, calcium, and essential vitamins, it's the perfect choice for a strong and healthy family. Free from additives and preservatives, this wholesome milk delivers the true taste of nature, just the way it should be.

#### Mana Ko Nauni

- URL: https://manaram.farm/product/mana-ko-nauni/
- Type: simple
- Copy:

Mana Ko Pure Cow Ghee is a natural source of healthy fats that supports digestion, immunity, and overall well-being. Made from fresh cow's milk with no preservatives brings you rich aroma, smooth texture, and authentic homemade taste. Packed with goodness, it's perfect for everyday cooking and traditional recipes.

#### Mana Ko Paneer

- URL: https://manaram.farm/product/mana-ko-paneer/
- Type: simple
- Copy:

Produced from farm-fresh milk, Mana Ko Paneer is celebrated for its rich, creamy texture and natural goodness. Soft and protein-rich, it contains no added preservatives, ensuring a product of exceptional quality and purity—perfect for curries, snacks, or salads. Available Size: 200gm & 500gm Ingredients: Cow Milk Why Choose Mana Ko Paneer? 100% Pure & Natural – Made from farm-fresh milk with no preservatives. High in Protein – Supports strength and overall wellness. Versatile Use – Ideal for curries, snacks, or salads.

#### Mana Ko Butter

- URL: https://manaram.farm/product/mana-ko-butter/
- Type: simple
- Copy:

Produced from the freshest cream of high-quality milk, Mana Ko Butter is celebrated for its rich, creamy flavor and natural goodness. Perfect for spreading, baking, or cooking, this 100% natural butter contains no added preservatives, ensuring a product of exceptional quality, purity, and taste. Available Size: 100gm, 250gm & 500gm Ingredients: Milk fat, Salt Nutritional Facts : Nutrient Amount % Daily Value* Maximum Moisture 18% Minimum Fat 80% Why Choose Mana Ko Butter? Rich, Creamy Texture – Perfect for spreading, baking, or cooking. 100% Pure & Natural – Made from fresh cream without any additives or preservatives. Nutrient-Rich Goodness – Wholesome and nourishing for everyday consumption. Traditional Preparation – Crafted using time-honored methods for authentic flavor.

#### Mana Ko Ghee – 500ml

- URL: https://manaram.farm/product/mana-ko-ghee/
- Type: simple
- Copy:

Produced from pure cow milk, Mana Ko Pure Cow Ghee is renowned for its rich taste and nutritional benefits. This premium, all-natural ghee preserves essential nutrients and offers wholesome goodness. Carefully crafted using traditional methods, it ensures a product of exceptional quality, purity, and flavor for your cooking and daily diet. Available Size: 500ml Ingredients: Clarified Butter (Milk) Nutritional Facts : Nutrient Amount % Daily Value* Total Fat 17 g 22% Total Carbohydrate 0 g 0% Sugar — — Protein 0 g — Sodium 0 mg 0% Why Choose Mana Ko Pure Cow Ghee? 100% Pure & Natural – Made from the finest quality cow milk, free from additives and preservatives. Rich, Creamy Texture – Perfect for cooking, drizzling, and everyday use. Nutrient-Packed – Contains essential fatty acids and vitamins A, D, E, and K. Supports Digestion & Immunity – Natural goodness that promotes overall well-being. Available Size: 500ml

#### Chhurra Chhurpi Josh – 100g

- URL: https://manaram.farm/product/chhurra-chhurpi-josh/
- Type: simple
- Copy:

Josh Flavor Chhurra Chhurpi is a premium dry cheese snack made in Nepal from 100% pure cow milk. Rich in protein and nutrients, it blends authentic traditional taste with a modern twist, making it a healthy, guilt-free treat. Available Size: 100gm Ingredients: Hard dry cheese,starch,sugar,caffeine,salt,niacin,vitamin B12 Nutritional Facts : Nutrient Amount % Daily Value* Total Fat 3 g 4.6% Total Carbohydrate 5 g 1% Sugar — — Protein 4 g — Sodium 164 mg 6.8% Why Choose Josh Flavor Chhurra Chhurpi? 100% Natural Ingredients – No additives or preservatives. High in Protein – Supports strength, stamina, and energy. Enriched with Essential Vitamins – Boosts immunity and overall wellness. Healthy Candy Alternative – A fun, nutritious snack for all ages. Made in Nepal – Traditional goodness crafted with care.

#### Chhurra Chhurpi Peanut Butter – 100g

- URL: https://manaram.farm/product/chhurra-chhurpi-peanut-butter/
- Type: simple
- Copy:

Peanut Butter Flavor Chhurra Chhurpi is a premium, protein-rich dry cheese snack made in Nepal from 100% pure cow milk chhurpi. Blending authentic Himalayan chhurpi with the rich, nutty taste of peanut butter, it delivers a healthy, flavorful treat crafted with quality and purity. Available Size: 100gm Ingredients: Hard dry cheese, Starch, Peanut butter, Roasted peanut, Salt. Nutritional Facts : Nutrient Amount % Daily Value* Total Fat 3 g 4.6% Total Carbohydrate 5 g 1% Sugar — — Protein 4 g — Sodium 164 mg 6.8% Why Choose Peanut Butter Flavor Chhurra Chhurpi? Perfect for Peanut Lovers – Enjoy the rich, creamy, nutty peanut flavor in every bite. 100% Vegetarian – Wholesome and pure dairy delight. 100% Natural Ingredients – No additives or preservatives. High in Protein – Boosts energy, strength, and stamina. Calcium-Rich – Supports bone health and overall wellness.

#### Chhurra Chhurpi Meetho – 100g

- URL: https://manaram.farm/product/chhurra-chhurpi-meetho/
- Type: simple
- Copy:

Meetho Flavor Chhurra Chhurpi is produced in Nepal from premium dry cheese and celebrated for its fusion of tradition and sweetness. Combining the natural goodness of pure cow milk with the rich, caramel-like taste of jaggery, it delivers a satisfying treat of exceptional quality and purity. Available Size: 100gm Ingredients: Hard dry cheese, Starch, Sugarcane juice, Salt Nutritional Facts : Nutrient Amount % Daily Value* Total Fat 3 g 4.6% Total Carbohydrate 5 g 1% Sugar — — Protein 4 g — Sodium 164 mg 6.8% Why Choose Meetho Flavor Chhurra Chhurpi? Sweet Jaggery Flavor – Enhances the chewy, satisfying texture. Soft & Chewy Texture – Enjoy a delightful bite every time. Jaggery-Infused Sweetness – Natural caramel-like flavor for a tasty treat. Suitable for All Ages – A wholesome, nutritious snack for everyone.

#### Chhurra Chhurpi The Original – 100g

- URL: https://manaram.farm/product/chhurra-chhurpi-the-original/
- Type: simple
- Copy:

The Original Flavor Chhurra Chhurpi is a premium dry cheese snack made in Nepal from 100% pure cow milk. Rich in protein and nutrients, it preserves the authentic taste of Himalayan tradition with a chewy texture and natural, wholesome flavor. Available Size: 100gm Ingredients : Hard dry cheese, Salt Nutritional Facts : Nutrient Amount % Daily Value* Total Fat 3 g 4% Total Carbohydrate 0.3 g 1.6% Sugar 0 g 0% Protein 4 g — Sodium 164 mg 7% Why Choose The Original Flavor Chhurra Chhurpi? Pure & Authentic Flavor – Experience the true taste of Himalayan tradition. 100% Vegetarian – Wholesome and pure dairy delight. 100% Natural Ingredients – No additives or preservatives. High in Protein – Boosts energy, strength, and stamina. Calcium-Rich – Supports bone health and overall wellness.

### Dried Meat

Archive: https://manaram.farm/product-category/dried-meat/

#### Traditional Water Buffalo Dried Meat

- URL: https://manaram.farm/product/traditional-water-buffalo-dried-meat/
- Type: simple
- Copy:

Our Traditional Sukuti is smoky, tender, and bursting with bold flavor, made from premium water buffalo meat. Naturally dried and hygienically packed, it's the perfect protein-rich snack for lovers of authentic Nepali sukuti.

#### Sahi Sukuti Chicken – Timure

- URL: https://manaram.farm/product/sahi-sukuti-chicken-timure/
- Type: simple
- Copy:

Our Sahi Sukuti- Chicken is Smoky, tender, and full of bold flavor made from premium chicken meat that comes in different delicious flavors ( Naturally dried and hygienically packed, it's the perfect protein-rich snack for every sukuti lover.

#### Sahi Sukuti Chicken – Akabare Garlic

- URL: https://manaram.farm/product/sahi-sukuti-chicken-akabare-garlic/
- Type: simple
- Copy:

Our Sahi Sukuti- Chicken is Smoky, tender, and full of bold flavor made from premium chicken meat that comes in different delicious flavors ( Naturally dried and hygienically packed, it's the perfect protein-rich snack for every sukuti lover.

#### Sahi Sukuti Chicken – Sandheko

- URL: https://manaram.farm/product/sahi-sukuti-chicken-sandheko/
- Type: simple
- Copy:

Our Sahi Sukuti- Chicken is Smoky, tender, and full of bold flavor made from premium chicken meat that comes in different delicious flavors ( Naturally dried and hygienically packed, it's the perfect protein-rich snack for every sukuti lover.

#### Sahi Sukuti Chicken – Original

- URL: https://manaram.farm/product/sahi-sukuti-chicken-original/
- Type: simple
- Copy:

Our Sahi Sukuti- Chicken is Smoky, tender, and full of bold flavor made from premium chicken meat that comes in different delicious flavors ( Naturally dried and hygienically packed, it's the perfect protein-rich snack for every sukuti lover.

#### Sahi Sukuti Chicken – Shitaan

- URL: https://manaram.farm/product/sahi-sukuti-chicken-shitaan/
- Type: simple
- Copy:

Our Sahi Sukuti- Chicken is Smoky, tender, and full of bold flavor made from premium chicken meat that comes in different delicious flavors ( Naturally dried and hygienically packed, it's the perfect protein-rich snack for every sukuti lover.

#### Sahi Sukuti Akabare Garlic- 100g

- URL: https://manaram.farm/product/sahi-sukuti-akabare-garlic-100g/
- Type: simple
- Copy:

Our Sahi Sukuti is Smoky, tender, and full of bold flavor made from premium water buffalo meat. Naturally dried and hygienically packed, it's the perfect protein-rich snack for every sukuti lover.

#### Sahi Sukuti Timur – 100g

- URL: https://manaram.farm/product/sahi-sukuti-timur/
- Type: simple
- Copy:

Our Sahi Sukuti is Smoky, tender, and full of bold flavor made from premium water buffalo meat. Naturally dried and hygienically packed, it's the perfect protein-rich snack for every sukuti lover.

#### Mana Ko Perungo – 200g

- URL: https://manaram.farm/product/mana-ko-perungo/
- Type: simple
- Copy:

Mana Ko Perungo Dried Fish is sourced directly from our aqua farm in Birtamode, bringing the true taste of Nepali freshness to your kitchen. Naturally sun-dried and carefully prepared using traditional methods, it carries a rich, smoky aroma and soft texture ensuring a product of exceptional quality, purity, and flavor.

#### Sahi Sukuti Tikka Masala – 100g

- URL: https://manaram.farm/product/sahi-sukuti-tikka-masala/
- Type: simple
- Copy:

Sahi Sukuti – Tikka Masala Flavor is a premium dried buffalo meat snack, proudly made in Nepal. Soft, protein-rich, and infused with the flavorful Tikka Masala taste that every Nepali loves, it brings the perfect balance of spice and tradition to your snacks or favorite recipes. Available Size: 100gm Ingredients: Water buffalo meat, Yogurt, Mustard oil, Vegetable oil, Tomato, Onion, Ginger, Garlic, Cilantro, Chilli powder, Salt, Cumin, Garam masala, Turmeric, Coriander, Cardamom & Clove Nutritional Facts : Nutrient Amount % Daily Value* Total Fat 4.5 g 6.9% Total Carbohydrate 1 g 0.4% Sugar 0 g — Protein 16 g — Sodium 280 mg 12% Why Choose Sahi Sukuti – Tikka Masala Flavor? Authentic Tikka Masala Taste – Bursting with Nepali spices for a rich, aromatic flavor. 100% Natural Ingredients – No artificial additives, just pure, wholesome flavor. Made in Nepal – A true Nepali classic, celebrating local taste and quality.

#### Sahi Sukuti Momo – 100g

- URL: https://manaram.farm/product/sahi-sukuti-momo/
- Type: simple
- Copy:

Sahi Sukuti – Momo Flavor is a premium dried buffalo meat snack, proudly made in Nepal. Blended with authentic momo masala, it brings the true taste and aroma of Nepali momos—soft, protein-rich, and full of flavor in every bite. Available Size: 100gm Ingredients: Water buffalo meat, Mustard oil, ginger, garlic, momo masala & salt Nutritional Facts : Nutrient Amount % Daily Value* Total Fat 4.5 g 6.9% Total Carbohydrate 1 g 0.4% Sugar 0 g — Protein 16 g — Sodium 280 mg 12% Why Choose Sahi Sukuti – Momo Flavor? Convenient & Ready-to-Eat – Ideal for quick snacking or adding to your favorite recipes. Authentic Nepali Flavor – Blends traditional buffalo meat with momo spices for a unique, irresistible taste. Made in Nepal – A true Nepali classic, celebrating local taste and quality.

#### Sahi Sukuti Sadheko – 100g

- URL: https://manaram.farm/product/sahi-sukuti-sadheko/
- Type: simple
- Copy:

Produced from high-quality buffalo meat, Sahi Sukuti – Sandheko Flavor is celebrated for its authentic Nepali taste and rich nutritional value. Prepared using traditional techniques and 100% natural ingredients, it captures the tangy and mildly spiced flavors of Sandheko. Available Size: 100gm Ingredients: Water buffalo meat, Mustard oil, Tomato, Onion, Ginger, Garlic, Cilantro, Lime juice, Chilli powder, Cumin, Coriander, Dried mango powder, Black salt & Salt Nutritional Facts : Nutrient Amount % Daily Value* Total Fat 4.5 g 6.9% Total Carbohydrate 1 g 0.4% Sugar 0 g — Protein 16 g — Sodium 280 mg 12% Why Choose Sahi Sukuti – Sandheko Flavor? Authentic Sandheko Taste – Carefully prepared with traditional spices and lime for the true Nepali flavor. Convenient & Ready-to-Eat – Ideal for quick snacking or adding to your favorite recipes. Made in Nepal – A true Nepali classic, celebrating local taste and quality.

#### Sahi Sukuti The Original – 100g

- URL: https://manaram.farm/product/sahi-sukuti-the-original/
- Type: simple
- Copy:

Produced from high-quality buffalo meat, Sahi Sukuti – The Original Flavor is celebrated for its authentic Nepali taste and protein-rich goodness. Carefully prepared using traditional techniques and natural spices like salt and pepper, perfect for snacking or enhancing your favorite recipes. Available Size: 100gm Ingredients: Water buffalo meat, Mustard oil, Salt & Pepper Nutritional Facts : Nutrient Amount % Daily Value* Total Fat 4.5 g 6.9% Total Carbohydrate 1 g 0.4% Sugar 0 g — Protein 16 g — Sodium 280 mg 12% Why Choose Sahi Sukuti – The Original Flavor? Authentic Taste – Enjoy the true flavor of traditional Nepali Sukuti. Convenient & Ready-to-Eat – Perfect for quick snacking or adding to recipes. Made in Nepal – A true Nepali classic, celebrating local taste and quality.

### Mana Ko Achar

Archive: https://manaram.farm/product-category/mana-ko-achar/

#### Tama in Brine

- URL: https://manaram.farm/product/tama-in-brine/
- Type: simple
- Copy:

Our Bamboo Shoots in Brine, also known as Tama in Nepali, are tender young bamboo shoots preserved in saltwater to maintain their natural flavor and texture. Widely used in traditional dishes like Alu Tama, they bring a unique, tangy taste to soups, curries, and stir-fries. Tama holds cultural significance in Nepali cuisine, cherished for its distinctive flavor and role in festive and everyday meals.

#### Dalle in Brine

- URL: https://manaram.farm/product/dalle-in-brine/
- Type: simple
- Copy:

Our Spicy Chilli in Brine, also known as Daile Khursani ko Achor in Nepali society, features handpicked chillies preserved in saltwater to retain their bold heat and natural flavor. Commonly used as a condiment or ingredient in pickles, sauces, and traditional dishes. This fiery delicacy holds cultural importance in Nepali households, adding a spicy kick to daily meals and festive occasions.

#### Mana Ko Akabare Garlic Achar

- URL: https://manaram.farm/product/mana-ko-akabare-garlic-achar/
- Type: simple
- Copy:

Our Mana Ko Achar is a delightful collection of Nepali pickles and flavors, bringing the authentic taste of the Himalayas to your table. This assortment each crafted to deliver bold, tangy, and spicy notes. Perfect as a condiment or side, Mana Ko Achor adds a burst of flavor to every meal, celebrating the rich culinary heritage of Nepal.

#### Mana Ko Mango Achar

- URL: https://manaram.farm/product/mana-ko-mango-achar/
- Type: simple
- Copy:

Our Mana Ko Achar is a delightful collection of Nepali pickles and flavors, bringing the authentic taste of the Himalayas to your table. This assortment each crafted to deliver bold, tangy, and spicy notes. Perfect as a condiment or side, Mana Ko Achor adds a burst of flavor to every meal, celebrating the rich culinary heritage of Nepal.

#### Mana Ko Mix Achar

- URL: https://manaram.farm/product/mana-ko-mix-achar/
- Type: simple
- Copy:

Our Mana Ko Achar is a delightful collection of Nepali pickles and flavors, bringing the authentic taste of the Himalayas to your table. This assortment each crafted to deliver bold, tangy, and spicy notes. Perfect as a condiment or side, Mana Ko Achor adds a burst of flavor to every meal, celebrating the rich culinary heritage of Nepal.

#### Mana Ko Timur Chop Achar – 250g

- URL: https://manaram.farm/product/mana-ko-timur-chop-achar/
- Type: simple
- Copy:

In Newari culture, “Aji” means grandmother, a symbol of authentic, time-honored flavors. Achar, a traditional Nepali pickle or condiment, is cherished for its bold spices and rich taste that enhance any meal. With Aji Ko Achar, we honor this legacy by preserving the essence of traditional Nepali recipes, a tribute to the delicious feasts prepared by grandmothers for the family. Aji Ko Achar Timur Ko Chop is a uniquely Nepali delicacy made with Timur (Sichuan pepper), prized for its bold, citrusy, and tongue-tingling flavor. Blended with garlic, chili, and spices, this achar delivers a refreshing, zesty punch unlike any other condiment. A must-try for those who love adventurous flavors and authentic Himalayan taste. Ingredients Timur (Sichuan pepper), Garlic, Ginger, Oil, Red Chilli, Salt, Monosodium Glutamate (MSG). How to Enjoy Pair with momo (dumplings) for the ultimate Nepali experience Add to noodles, soups, or stir-fry for a zesty kick Serve with rice and curry to balance rich flavors Use as a dip or spread to elevate snacks and starters Packaging & Certification Premium food-grade jars to preserve freshness Made with authentic, locally sourced Nepali ingredients No artificial colors, flavors, or preservatives Certified food safety & FDA compliant Storage Store in a cool, dry place Refrigerate after opening Best enjoyed within 6 months of opening

#### Mana Ko Gundruk Pickle – 200g

- URL: https://manaram.farm/product/mana-ko-gundruk-pickle/
- Type: simple
- Copy:

In the Newari culture of Nepal, “Aji” lovingly refers to grandmother. With Aji Ko Achar , we aim to honor and extend her legacy of authentic flavors passed down through generations. Aji Ko Gundruk Pickle is a traditional Nepali delicacy made with Gundruk dried and fermented mustard greens blended with garlic, red chili, and aromatic spices. It delivers a bold, earthy, and tangy taste that instantly brings back the nostalgia of home-cooked meals. More than just a pickle, it’s a true taste of Nepal in every bite. Ingredients Gundruk (dried fermented mustard greens), Garlic, Red Chili, Oil, Vinegar, Salt, Cumin, Turmeric Allergen: Mustard How to Enjoy Pair with rice, dal, and curry for an authentic Nepali meal. Add a spoonful to noodles, pasta, or wraps for a tangy kick. Serve as a side dish with grilled meat or roasted vegetables. Enjoy straight from the jar as a zesty snack! Packaging & Certification Packed in food-grade, air-sealed jars for freshness. Made with premium, locally sourced ingredients. No artificial additives or preservatives. Certified for food safety and quality standards (FDA compliant). Storage Application Store in a cool, dry place. Refrigerate after opening. Best enjoyed within 6 months of opening for maximum flavor.

#### Mana Ko Mushroom Choila Achar – 300g

- URL: https://manaram.farm/product/mana-ko-mushroom-choila-achar/
- Type: simple
- Copy:

In Newari culture, “Aji” means grandmother , a symbol of authentic, time-honored flavors. Achar , a traditional Nepali pickle or condiment, is cherished for its bold spices and rich taste that enhance any meal. With Aji Ko Achar , we honor this legacy by preserving the essence of traditional Nepali recipes. Aji Ko Achar – Mushroom Choila Achar offers a modern twist on Choila , a smoky, spiced delicacy. Prepared with tender mushrooms infused with chili, garlic, and aromatic spices, it delivers a rich, earthy, and spicy profile that’s both vegetarian-friendly and deeply satisfying. Ingredients Mushroom, Chilly Flakes, Garlic, Sunflower Oil, Salt and Spices, Vinegar How to Enjoy Enjoy with rice, dal, or roti for a traditional Nepali meal Add as a side dish to grilled or roasted foods Mix into wraps, noodles, or salads for a spicy, umami kick Perfect as a vegetarian alternative to classic meat Choila Packaging & Certification Premium food-grade jars to ensure freshness Made with authentic, locally sourced Nepali ingredients No artificial additives or preservatives Certified food safety & FDA compliant Storage Store in a cool, dry place Refrigerate after opening Best enjoyed within 6 months of opening

#### Mana Ko Lapsi Achar – 380g

- URL: https://manaram.farm/product/mana-ko-lapsi-achar/
- Type: simple
- Copy:

In Newari culture, “Aji” means grandmother , a symbol of authentic, time-honored flavors. Achar , a traditional Nepali pickle or condiment, is cherished for its bold spices and rich taste that enhance any meal. With Aji Ko Achar , we honor this legacy by preserving the essence of traditional Nepali recipes. Aji Ko Achar – Sweet Lapsi Achar is a cherished Nepali specialty made from lapsi (hog plum), a tangy fruit valued for its unique flavor. Blended with aromatic spices, mustard oil, and a hint of natural sweetness, this achar strikes the perfect balance of sweet, sour, and spicy . A true Himalayan delight, it pairs beautifully with both traditional meals and modern snacks. Ingredients Lapsi (Hog Plum), Cumin Seeds, Chilli Powder, Turmeric Powder, Fenugreek Seed, Mustard Oil, Sugar, Salt, Raisins Allergen: Mustard How to Enjoy Pair with rice and dal for a traditional Nepali touch Enjoy as a sweet-and-spicy side with roti or paratha Add to wraps, sandwiches, or cheese platters for a tangy twist Snack on a spoonful when craving bold, fruity flavor Packaging & Certification Sealed in premium food-grade jars for freshness Made with authentic, locally sourced Nepali ingredients No artificial additives or preservatives Certified food safety & FDA compliant Storage Store in a cool, dry place Refrigerate after opening Best enjoyed within 6 months of opening

#### Mana Ko Jackfruit Pickle – 380g

- URL: https://manaram.farm/product/mana-ko-jackfruit-pickle/
- Type: simple
- Copy:

In Newari culture, “Aji” means grandmother , symbolizing tradition and authentic flavors. With Aji Ko Achar , we honor this legacy by bringing time-honored Nepali recipes to life. Achar , a classic Nepali pickle, is loved for its bold spices and rich flavors. Our Aji Ko Achar – Jackfruit Pickle combines tender young jackfruit with a vibrant spice blend. Its meaty texture soaks up tangy, spicy notes, creating a hearty, plant-based taste of Nepal. Ingredients Young Jackfruit, Akabare (Red Cherry Pepper Chilli), Salt, Oil, Turmeric Powder, Spices, Acetic Acid (E-260) How to Enjoy Pair with rice, lentils, and curries for a traditional Nepali meal Add to wraps, tacos, or sandwiches for a tangy, hearty twist Use as a side dish with grilled meats or plant-based dishes Enjoy as a flavorful snack right from the jar Packaging & Certification Packed in premium food-grade jars to ensure freshness Made with authentic, locally sourced Nepali ingredients No artificial colors, flavors, or preservatives Certified food safety & FDA compliant Storage Store in a cool, dry place Refrigerate after opening Best enjoyed within 6 months of opening

### Mana Ko Beverages

Archive: https://manaram.farm/product-category/mana-ko-beverages/

#### Mana Ko Mango Ice Ade – 200ml

- URL: https://manaram.farm/product/mana-ko-mango-ice-ade/
- Type: simple
- Copy:

Mana Ko Ice Ade – Mango Drink captures the sweet, juicy flavor of ripe mangoes in a low-calorie, refreshing beverage. Perfect for hot days or anytime you crave a revitalizing tropical sip. Available Size: 200ml Ingredients: Purified drinking water, White sugar, Concentrated mango pulp, Concentrated apple juice, Citrus extract, Permitted synthetic flavors, Gellan gum, Vitamin C, Sucralose, Natural carotene Nutritional Facts : Nutrient Amount % Daily Value* Total Fat 0 g 0% Total Carbohydrate 16 g 5% Sugar 14.9 g 15% Protein 0 g 0% Sodium 0 mg 0% Why Choose Mana Ko Ice Ade – Mango Drink? Low Calorie – Enjoy tropical mango flavor without excess calories. Real Mango Flavor – Bursting with the taste of ripe, juicy mangoes. Tropical Experience – Sweet, tangy, and energizing in every sip.

#### Mana Ko Peach Ice Ade – 200ml

- URL: https://manaram.farm/product/mana-ko-peach-ice-ade/
- Type: simple
- Copy:

Mana Ko Ice Ade Peach Drink- Zero Calorie is a refreshing, fruit-infused beverage designed to quench your thirst and revitalize your day. Made with real peach essence and natural ingredients, this drink is the perfect combination of sweetness and tang, offering a delightful, refreshing experience. Ingredients: Purified drinking water, erythritol, citric acid, peach juice concentrate, black tea powder, acesulfame potassium, sucralose, stevia glycoside Product Highlights: Zero calorie. Real Peach Flavor. Taste best when served with ice. Refreshing & Hydrating. Can be used for mocktails/cocktails. Perfect for on-the-go, picnics, or enjoying at home with friends and family.

#### Mana Ko Green Grapes Ice Ade – 200ml

- URL: https://manaram.farm/product/mana-ko-green-grapes-ice-ade/
- Type: simple
- Copy:

Mana Ko Ice Ade – Green Grapes Drink captures the natural sweetness and tang of green grapes in a refreshing, zero-calorie drink. Stay hydrated and energized while enjoying a burst of fresh, fruity flavor with every sip. Available Size: 200ml Ingredients: Purified drinking water, Erythritol, Citric acid, Green grape concentrate, Dextrin, Vitamin C, Acesulfame potassium, Sucralose, Stevia glycoside, Permitted synthetic flavor, Glacial acetic acid, Permitted synthetic food color. Nutritional Facts : Nutrient Amount % Daily Value* Total Fat 0 g 0% Total Carbohydrate 4 g 1% Sugar 0.3 g 0% Protein 0 g 0% Sodium 20 mg 1% Why Choose Mana Ko Ice Ade – Green Grapes Drink (Zero Calorie)? Zero Calorie – Enjoy a fruity, refreshing drink without added calories. Natural Green Grape Flavor – Bursting with the taste of fresh grapes. Convenient & On-the-Go – Perfect for picnics, outdoor activities, or home enjoyment.

#### Mana Ko Hazelnut Ice Ade – 200ml

- URL: https://manaram.farm/product/mana-ko-hazelnut-ice-ade/
- Type: simple
- Copy:

Mana Ko Ice Ade – Hazelnut Drink blends the rich, roasted flavor of hazelnuts into a smooth, refreshing, zero-calorie beverage. Perfect for nut lovers, it delivers guilt-free, flavorful refreshment with every sip. Ingredients: Purified drinking water, Coffee concentrate, Erythritol, Citrus extract, Permitted synthetic flavors, Acesulfame potassium, Sucralose, Stevia glycoside, Sodium bicarbonate Nutritional Facts : Nutrient Amount % Daily Value* Total Fat 0 g 0% Total Carbohydrate 2 g 1% Sugar 0 g 0% Protein 0 g 0% Sodium 20 mg 1% Why Choose Mana Ko Ice Ade – Hazelnut Drink (Zero Calorie)? Zero Calorie – Enjoy a rich, nutty beverage without added calories. Natural Hazelnut Flavor – Smooth, roasted taste for nut lovers. Crisp & Refreshing – Perfectly chilled for an energizing experience. Perfect for Nut Lovers – A flavorful, guilt-free refreshment anytime. Refreshing Anytime – Combines taste and calorie-conscious benefits in one drink. Available Size: 200ml

#### Mana Ko Red Ginseng Ice Ade – 200ml

- URL: https://manaram.farm/product/mana-ko-red-ginseng-ice-ade/
- Type: simple
- Copy:

Mana Ko Ice Ade – Red Ginseng Drink blends the natural goodness of red ginseng into a premium, refreshing beverage. Energizing and revitalizing, it supports focus, stamina, and overall wellness with every sip. Available Size: 200ml Ingredients: Purified drinking water, Erythritol, Citric acid, Red ginseng concentrate, Black tea powder, Acesulfame potassium, Sucralose, Stevia glycoside, Permitted synthetic flavor Nutritional Facts : Nutrient Amount % Daily Value* Total Fat 0 g 0% Total Carbohydrate 3 g 1% Sugar 0 g 0% Protein 0 g 0% Sodium 0 mg 0% Why Choose Mana Ko Ice Ade – Red Ginseng Drink (Zero Calorie)? Infused with Real Red Ginseng – Supports energy, focus, and wellness. Natural Energy Boost – A smarter alternative to sugary drinks. Perfectly Balanced Flavor – Earthy, smooth, and satisfying in every sip.

#### Mana Ko Americano Ice Ade – 200ml

- URL: https://manaram.farm/product/mana-ko-americano-ice-ade/
- Type: simple
- Copy:

Mana Ko Ice Ade – Americano Drink blends premium coffee essence for a bold, refreshing taste. Enjoy the rich Americano flavor without added calories—perfect at home, on-the-go, or with friends. Available Size: 200ml Ingredients: Purified drinking water, Coffee concentrate, Erythritol, Citrus extract, Permitted synthetic flavors, Sodium bicarbonate Nutritional Facts : Nutrient Amount % Daily Value* Total Fat — — Total Carbohydrate 1 g 0% Sugar 0 g 0% Protein 0 g 0% Sodium 20 mg 1% Why Choose Mana Ko Ice Ade – Americano Drink (Zero Calorie)? Zero Calorie – Enjoy the rich taste of coffee without added calories. Bold Coffee Flavor – Full-bodied Americano taste in every sip. Easy to Serve – Tastes best when served with ice.

### Sattu

Archive: https://manaram.farm/product-category/sattu/

#### Mango Madness Satu

- URL: https://manaram.farm/product/mango-madness-satu/
- Type: simple
- Copy:

Our Poshilo Nutri + Mango Madness Satu is a vibrant, hydrating drink blending real dehy­drated mango with dates, almonds, walnuts, and flax seeds. Perfect for hot days, it pro­vides natural energy, electrolytes, protein, and Omega-3s with zero added sugar. Ideal for cooling down post-activity or as a light summer meal.

#### Chana Masala Satu

- URL: https://manaram.farm/product/chana-masala-satu/
- Type: simple
- Copy:

Our Poshilo Chana Mascia Satu is a savory digestive drink spiced with zesty Jaljeera Masala. Made with roasted chickpeas, it's high in protein and iron, naturally cooling, and contains zero added sugar. Supports digestion, boosts metabolism, and provides hydration. Serving: Mix 2tbsp in 200ml cold water; opti onally add lemon juice or black salt. Ingredients: Chickpeas, Poshilo Jaljeera Masala.

#### Kids Lito Satu

- URL: https://manaram.farm/product/kids-lito-satu/
- Type: simple
- Copy:

Our Poshilo Kid's Lito Satu is a carefully formulated meal replacement for growing children aged 3+. It combines Himalayan brown rice, barley, millet, lentils, flax seeds, walnuts, and almonds to provide omega-3s, protein, calcium, and essential vitamins for brain development, strong bones, and immunity.

#### Moms Delight Satu

- URL: https://manaram.farm/product/moms-delight-satu/
- Type: simple
- Copy:

Our Poshilo Mom's Delight Satu is developed for postpartum nourishment, blending ancient Nepali Sutkeri wisdom with modern convenience. This comforting meal mix features 32 traditional Ayurvedic masalas-including fenugreek, fennel, cinnamon, and black pepper-combined with protein-rich mung dal, makhana, dates, nuts, and seeds. It supports hormone balance, boosts breast milk production, and replenishes iron, calcium, and energy levels.

#### Multigrain Satu

- URL: https://manaram.farm/product/multigrain-satu/
- Type: simple
- Copy:

Our Poshilo Multigrain Satu is specially designed for very young kids (months+) and older adults. No artificial colors, preservatives, or flavors. Can be enjoyed with milk, water, tea, yogurt, or seasonal fruits; perfect for smoothies, shakes, summer drinks, pancakes, or cus­tomized recipes. 50gm per serving, l serving per day. Made with Wheat, Maize, Chickpeas, Soybean, and Dates. Available in 400gm, 750gm, and 1.8kg.

#### Nutri + Satu

- URL: https://manaram.farm/product/nutri-satu/
- Type: simple
- Copy:

Our Poshilo Nutri+ Satu is your ultimate adventure fuel-crafted for endurance, strength, and long-lasting energy. Made with 25% protein from chickpeas, soybeans, skimmed milk powder, and a blend of seven superfoods including almonds, walnuts, flax, sesame, and pumpkin seeds, it supports bone health, muscle recovery, and immunity. Perfect for trekking, workouts, or busy workdays, it delivers complete nourishment in seconds.

#### Nutty Delight Satu

- URL: https://manaram.farm/product/nutty-delight-satu/
- Type: simple
- Copy:

Our Poshilo Nutty Delight Mix Satu is a delicious and healthy blend made from Wheat, Maize, Chickpeas, Soybean, Dates, Almonds, and Peanuts. No artificial colors, preservatives, or flavors. Can be enjoyed with milk, water, tea, yogurt, or with seasonal fruits; perfect for smoothies, shakes, summer drinks, pancakes, or customized recipes. Made with 4 whole grains, over 25% almonds, peanuts, and dates. Vegan, vegetarian, easy to enjoy, and suitable for all age groups.

#### Protein + Satu

- URL: https://manaram.farm/product/protein-satu/
- Type: simple
- Copy:

Our Poshilo Protein+ Satu is a powerhouse meal replacement crafted for active bodies and focused minds. Packed with 20% natural protein from chickpeas, soybeans, almonds, peanuts, flax, and pumpkin seeds, it supports muscle recovery, metabolic health, and all-day endurance. Enriched with dietary fiber and omega-3, it's perfect as a fitness shake or a complete mini-meal.

### Sugar, Salt & Seeds

Archive: https://manaram.farm/product-category/sugar-salt-seeds/

#### Timur

- URL: https://manaram.farm/product/timur/
- Type: simple
- Copy:

Black Mustard Seeds the cullinary gems from the Himalayas. These tiny seeds are primarily used for oil extraction, yielding a bold and sharp flavoured oil. When heated, the oil transforms,mellowing into a deliciously aromatic addition to cooked dishes, Discover the versatile and flavourful magic of Black mustard seeds straight from Himalayas.

#### Black Mustard Seed

- URL: https://manaram.farm/product/black-mustard-seed/
- Type: simple
- Copy:

Black Mustard Seeds the cullinary gems from the Himalayas. These tiny seeds are primarily used for oil extraction, yielding a bold and sharp flavoured oil. When heated, the oil transforms,mellowing into a deliciously aromatic addition to cooked dishes, Discover the versatile and flavourful magic of Black mustard seeds straight from Himalayas.

#### Lapsi Powder

- URL: https://manaram.farm/product/lapsi-powder/
- Type: simple
- Copy:

Our Hog Plum Powder, also known as Lapsi Powder in Nepali, is made from sun-dried hog plums, offering a tangy, fruity flavor rich in vitamin C and antioxidants. Commonly used in pickles, chutneys, and traditional spice blends, it adds a distinctive sour kick to various dishes.

#### Sankhuwa Shakhar

- URL: https://manaram.farm/product/sankhuwa-shakhar/
- Type: simple
- Copy:

Our Sankhuwa Sakhar is a traditional, unrefined sugar known for its rich taste and natural purity. Made using age-old methods, this wholesome sweetener retains essential minerals and a deep, caramel-like flavor. Perfect for tea, sweets, or everyday cooking, it adds a touch of authentic Nepali tradition to every dish.

#### Akabare Khursani Powder

- URL: https://manaram.farm/product/akabare-khursani-powder/
- Type: simple
- Copy:

Our Akabare Khursani Powder brings an intense fiery heat with a distinct fruity aroma, cherished in Nepali cuisine and beyond. Known as the &#8220;King of Chilies&#8221; in Nepal, this spice adds a bold kick and vibrant color to curries, chutneys, pickles, and marinades. More than just a seasoning, Akabare Khursani carries cultural significance-celebrated for elevating the taste of everyday meals and festive dishes with its unforgettable punch.

#### Amla Powder

- URL: https://manaram.farm/product/amla-powder/
- Type: simple
- Copy:

Our Amala Powder, also known as Dried Gooseberry Powder, is made from sun-dried gooseberries, rich in vitamin C and antioxidants. Traditionally used in Ayurveda, it supports immunity, aids digestion, and promotes wellness. Easily mixed with water, honey, or smoothies, Amala Powder is a natural addition to your daily health routine.

#### Khairo Til

- URL: https://manaram.farm/product/khairo-til/
- Type: simple
- Copy:

Our Brown Sesame Seeds (Khairo Til) are nutrient-rich treasures from the Himalayas, known for their nutty flavor and high oil content. A natural source of thiamine, niacin, and vitamin B6, they support energy and metabolism while adding wholesome taste to your dishes. Perfect for roasting, grinding, or making pastes-our brown sesame seeds bring both nutrition and flavor to every meal.

#### Seto Til

- URL: https://manaram.farm/product/seto-til/
- Type: simple
- Copy:

Our White Sesame Seeds {Seto Til) are prized Himalayan seeds, loved for their delicate flavor and high nutritional value. Rich in healthy fats, calcium, and protein, they support strong bones and overall wellness. Commonly used in sweets, bakery items, and traditional dishes, our white sesame seeds add a mild nutty taste and wholesome goodness to every recipe.

#### Kalo Til

- URL: https://manaram.farm/product/kalo-til/
- Type: simple
- Copy:

Our Black Sesame Seeds {Kalo Til) are tiny gems from the Himalayas, packed with rich flavor and nutrition. Known for their earthy taste and high calcium, iron, and antioxidant content, they bring both health and depth to your dishes. Perfect for roasting, grinding, or pressing into oil-our black sesame seeds add wholesome goodness to every meal.

#### Yellow Mustard Seeds

- URL: https://manaram.farm/product/yellow-mustard-seeds/
- Type: simple
- Copy:

Our Yellow Mustard Seeds {Sarysun) are tiny Himalayan seeds known for their bold flavor and natural health benefits. Derived from the white mustard plant, they are valued for their anti-inflammatory properties and rich nutritional content. Perfect for seasoning, pickling, or adding a sharp kick to your dishes-our yellow mustard seeds bring both taste and wellness to your kitchen.

#### Silam Seeds

- URL: https://manaram.farm/product/silam-seeds/
- Type: simple
- Copy:

Our Perilla Seeds, also known as Silam in Nepali, are tiny, nutrient-rich seeds valued for their nutty flavor and health benefits. Traditionally roasted and ground to make chutneys or added to curries, they are rich in omega-3 fatty acids and antioxidants.

#### Alaichi

- URL: https://manaram.farm/product/alaichi/
- Type: simple
- Copy:

Our Black Cardamom is prized for its bold, smoky aroma and earthy flavor, making it a key spice in many traditional Nepali and South Asian dishes. It's commonly used to enhance curries, stews, rice, and spice blends, adding depth and warmth. Black cardamom holds cultural importance in Nepali cooking, often featured in festive meals and special recipes.

#### Jimbu

- URL: https://manaram.farm/product/jimbu/
- Type: simple
- Copy:

Our Jimbu, a unique Himalayan herb, is cherished for its distinctive aroma and flavor, essential in traditional Nepali cuisine. Commonly used to season lentils, soups, and vegetable dishes, it adds a rich, earthy taste. Jim bu holds cultural significance, especially in mountain communities, where it enhances the flavor of festive and everyday meals. cuRRENrsKu

#### Moringa Powder

- URL: https://manaram.farm/product/moringa-powder/
- Type: simple
- Copy:

Our Moringa Powder is a pure and powerful superfood made from naturally dried moringa leaves, known as the &#8220;miracle tree&#8221; of the Himalayas. Packed with essential nutrients, antioxidants, and a mild earthy flavor, it supports overall wellness and vitality. This versatile powder enriches your smoothies, teas, or meals with a wholesome boost rooted in Nepali tradition.

#### Himalayan Black Salt Powder

- URL: https://manaram.farm/product/himalayan-black-salt-powder/
- Type: simple
- Copy:

Our Himalayan Black Salt Powder, known for its distinctive smoky flavor and mineral-rich content, is widely used in Nepali and South Asian cuisine. Ideal for seasoning snacks, chutneys, salads, and traditional dishes. This salt holds cultural importance, valued for its unique taste and health benefits in festive and everyday cooking.

#### Misri

- URL: https://manaram.farm/product/misri/
- Type: simple
- Copy:

Our Rock Candy, also known as Mishri in Nepali, is made from crystallized sugar, valued for its purity, natural sweetness, and cooling properties. Commonly used in traditional sweets, herbal teas, and religious offerings, it adds a delicate crunch and flavor. Mishri holds cultural importance in Nepali households, symbolizing auspiciousness and often used in rituals and festive occasions.

### Dried & Other Items

Archive: https://manaram.farm/product-category/dried-other-items/

#### Dried Akabare Khursani

- URL: https://manaram.farm/product/dried-akabare-khursani/
- Type: simple
- Copy:

Our Dried Red Cherry Pepper Chilli (Akabare Khursani) is Nepal's famous cherry pepper, celebrated for its fiery heat and fruity aroma. Grown in the high-altitude regions of eastern Nepal and sun-dried to preserve its bold flavor, it adds a vibrant kick to curries, sauces, pickles, and marinades. Bring the authentic taste of the Himalayas and a punch of spice to every dish with our Akabare Khursani.

#### Tori Gundruk

- URL: https://manaram.farm/product/tori-gundruk/
- Type: simple
- Copy:

Our Tori Gundruk is a traditional Nepali specialty made from fermented leafy greens, primarily from tori (ridge gourd) leaves. Packed with flavor and nutrition, it is perfect for making soups, pickles, and other authentic Nepali dishes, bringing the taste and heritage of Nepali cuisine straight to your kitchen.

#### Rayo Gundruk

- URL: https://manaram.farm/product/rayo-gundruk/
- Type: simple
- Copy:

Our Rayo Gundruk is a traditional Nepali delicacy made from fermented rayo (mustard) leaves. Rich in flavor and nutrients, it is perfect for preparing soups, pickles, and other authentic Nepali dishes, bringing the taste and cultural heritage of Nepal directly to your kitchen.

#### Maas and Pidalu Maseura

- URL: https://manaram.farm/product/maas-and-pidalu-maseura/
- Type: simple
- Copy:

Our Maas and Pidalu Maseura are traditional Nepali fermented, sun-dried vegetable balls made from minced taro, yam, colocasia leaves, and black lentils. Rich in flavor and nutrition, they are ideal for preparing authentic soups, stews, and other Nepali dishes, bringing the taste and cultural heritage of Nepal straight to your kitchen.

### Flours

Archive: https://manaram.farm/product-category/flours/

#### Taichin Rice Flour

- URL: https://manaram.farm/product/taichin-rice-flour/
- Type: simple
- Copy:

Our Taichin Rice Flour, made from finely milled premium Taichin rice, is soft, light, and naturally gluten-free. Known for its smooth texture, it is ideal for preparing traditional dishes like yomari, sel roti, and steamed rice cakes. In Nepali cuisine, Taichin rice flour holds cultural significance, often used in festive and ceremonial cooking for its purity and quality.

#### Yomari Flour

- URL: https://manaram.farm/product/yomari-flour/
- Type: simple
- Copy:

Our Yomari Flour, made from finely ground rice, is specially prepared for making soft, chewy traditional Yomari, a beloved Nepali steamed dumpling. Naturally gluten-free and smooth in texture, it ensures the perfect consistency for festive and ceremonial cooking. Yomari holds deep cultural significance in Newar and Nepali communities, symbolizing prosperity and celebrated during the Yomari Punhi festival.

#### Buckwheat Flour

- URL: https://manaram.farm/product/buckwheat-flour/
- Type: simple
- Copy:

Our Buckwheat Flour {Fapar ko Pitho) is a nutritious Himalayan ingredient with a naturally nutty flavor. Perfect for pancakes, bread, cookies, and other baked delights, it adds wholesome taste while supporting better blood sugar control. Packed with minerals and antioxidants, our buckwheat flour brings both health and flavor to your kitchen.

#### Finger Millet Flour

- URL: https://manaram.farm/product/finger-millet-flour/
- Type: simple
- Copy:

Our Finger Millet Flour, also known as Kodo ko Pitho in Nepali, is made from finely ground finger millet, a traditional Himalayan grain known for its high calcium, iron, and fiber content. Commonly used to make porridge, flatbreads, and steamed dishes, it offers a wholesome, gluten-free alternative. Available in l kg & 500 gm.

### Grains / Cereal

Archive: https://manaram.farm/product-category/grains-cereal/

#### Kacho Seto Bhatmas

- URL: https://manaram.farm/product/kacho-seto-bhatmas/
- Type: simple
- Copy:

Our Raw White Soybean (Bhatmas) is a nutritious Himalayan delight, are white variety of the more common soyabean. They are nutritional power house that contain, high fiber contents, a rich source of protein and minerals like potassium, calcium,magnesium and iron along with essential amino acids, Bringing you the taste of Himalayas.

#### Kacho Kalo Bhatmas

- URL: https://manaram.farm/product/kacho-kalo-bhatmas/
- Type: simple
- Copy:

Our Raw Black Soyabean (Bhatmas) is a nutritious Himalayan delight, are black variety of the more common soyabean. They are nutritional power house that contain, high fiber contents, a rich source of protein and minerals like potassium, calcium,magnesium and iron along with essential amino acids, Bringing you the taste of Himalayas.

#### Kacho Khairo Bhatmas

- URL: https://manaram.farm/product/kacho-khairo-bhatmas/
- Type: simple
- Copy:

Our Raw Brown Soyabean (Bhatmas) is a nutritious Himalayan delight, are brown variety of the more common soyabean. They are nutritional power house that contain, high fiber contents, a rich source of protein and minerals like potassium, calcium,magnesium and iron along with essential amino acids, Bringing you the taste of Himalayas.

#### Bhuteko Khairo Bhatmas

- URL: https://manaram.farm/product/bhuteko-khairo-bhatmas/
- Type: simple
- Copy:

Our Roasted Brown Soyabean (Bhatmas) is a nutritious Himalayan delight, are brown variety of the more common soyabean. They are nutritional power house that contain, high fiber contents, a rich source of protein and minerals like potassium, calcium,magnesium and iron along with essential amino acids, Bringing you the taste of Himalayas.

#### Bhuteko Seto Bhatmas

- URL: https://manaram.farm/product/bhuteko-seto-bhatmas/
- Type: simple
- Copy:

Our Roasted White Soyabean (Bhatmas) is a nutritious Himalayan delight, rich in protein, fiber, and essential nutrients. With its light, crunchy texture and mild nutty taste, it makes a perfect healthy snack or an addition to traditional recipes. Naturally filling and energizing, our roasted white soyabean adds both flavor and nourishment to your everyday diet.

#### Bhuteko Kalo Bhatmas

- URL: https://manaram.farm/product/bhuteko-kalo-bhatmas/
- Type: simple
- Copy:

Our Roasted Black Soyabean (Bhatmas) is a wholesome Himalayan snack packed with protein, fiber, and essential minerals. With its rich, nutty flavor and crunchy texture, it's perfect for healthy snacking or adding to traditional dishes. Naturally nutritious and satisfying, our roasted black soyabean brings both taste and strength to your everyday diet..

#### Kwati Beans

- URL: https://manaram.farm/product/kwati-beans/
- Type: simple
- Copy:

Our mixed beans, referred to as Kwati or Gedagudi in Nepali, are used to prepare nutritious soups and stews, often served with rice as a daily staple. They provide essential proteins, vitamins, and minerals, making them vital for vegetarian and vegan diets. Kwati also holds cultural importance, playing a key role in traditional festivals and family meals, supporting energy, digestion, and overall health in Nepali households.

#### Jetho Budho Rice

- URL: https://manaram.farm/product/jetho-budho-rice/
- Type: simple
- Copy:

Our Jetho Budho Rice, a traditional aged Himalayan rice, is prized for its rich aroma, distinct texture, and enhanced flavor. Known for its nutritional benefits and longer shelf life, it's ideal for special meals and festive occasions. Jetho Bucio Rice holds cultural significance in Nepali communities, symbolizing heritage and quality in everyday and celebratory cooking.

#### Chiura Taichin (Rato)

- URL: https://manaram.farm/product/chiura-taichin-rato/
- Type: simple
- Copy:

Our Red Taichin Beaten Rice (Rato Chiura) is a wholesome and flavorful staple of Nepali cuisine. Made from red rice, it carries a slightly nuttier taste and higher nutritional value, rich in fiber and minerals. Light yet filling, it's enjoyed as a snack or meal, offering both energy and nourishment. Rato Chiura holds deep cultural significance, often used in traditional feasts, festivals, and rituals, symbolizing health and prosperity in Nepali households.

#### Chiura Taichin (Seto)

- URL: https://manaram.farm/product/chiura-taichin-seto/
- Type: simple
- Copy:

Our White Taichin Beaten Rice, also known as Chuira, is light and crisp-a staple in Nepali cuisine known for its versatility and quick preparation. Commonly enjoyed as a snack it provides an energy-boosting, nutritious option. Chuira holds cultural importance, especially during festivals and rituals, symbolizing simplicity and nourishment in Nepali households.

#### Chiura Granola

- URL: https://manaram.farm/product/chiura-granola/
- Type: simple
- Copy:

Our Chiura Granola is a delicious fusion of tradition and nutrition, made by blending traditional Nepali chiura (beaten rice) with wholesome nuts, seeds, and dried fruits without any refined sugar or preservatives. Rich in fiber and energy, this granola is perfect for breakfast, a midday snack, or an on-the-go energy boost.

### Masala / Spices

Archive: https://manaram.farm/product-category/masala-spices/

#### Nepali Tea Masala

- URL: https://manaram.farm/product/nepali-tea-masala/
- Type: simple
- Copy:

Our Mana Ko Mascia is a premium collection of authentic Nepali spice blends, crafted to bring traditional flavors to your kitchen. Each masala is carefully prepared to enhance your dishes with the bold, aromatic taste of Nepal, making every meal a celebration of Himalayan culinary heritage.

#### Nepali Timur Masala

- URL: https://manaram.farm/product/nepali-timur-masala/
- Type: simple
- Copy:

Our Mana Ko Mascia is a premium collection of authentic Nepali spice blends, crafted to bring traditional flavors to your kitchen. Each masala is carefully prepared to enhance your dishes with the bold, aromatic taste of Nepal, making every meal a celebration of Himalayan culinary heritage.

#### Yomari Stuffing Masala

- URL: https://manaram.farm/product/yomari-stuffing-masala/
- Type: simple
- Copy:

Our Yomari Stuffing Mascia is a carefully crafted blend of spices designed to enhance traditional stuffed dishes. Inspired by Nepal's rich culinary heritage, it's perfect for stuffing yomari, vegetables, and other savory delights, adding a unique and aromatic flavor to every bite. Bring the authentic taste of the Himalayas into your kitchen with our Yomari Stuffing Masala.

#### Nepali Rice Pudding Masala

- URL: https://manaram.farm/product/nepali-rice-pudding-masala/
- Type: simple
- Copy:

Manako Rice Pudding Masala is an authentic Nepali spice blend made to capture the comforting and aromatic taste of traditional rice pudding ( khir ). In Nepali cooking, masala refers to a balanced mix of spices that enhances both flavor and fragrance, turning a simple dessert into a special treat. This seasoning combines warm, sweet, and aromatic spices that perfectly complement milk and rice, creating a rich and flavorful pudding. Whether prepared for festivals, celebrations, or everyday enjoyment, Manako Rice Pudding Masala makes it easy to bring the authentic taste of Nepali-style khir to your table. Made in Nepal and now available in the USA, it brings the sweetness of home right into your kitchen. Key Features Authentic Nepali Flavor enhances rice pudding with traditional warmth and aroma. Perfect Spice Blend balances sweetness, fragrance, and depth for a comforting dessert. Versatile Use ideal for khir, payasam, custards, or other milk-based desserts. Convenient Pack Size comes in a 100g pouch that’s easy to use and store. Made in Nepal to bring festive flavors of home to Nepali kitchens in the USA. How to Use Cook rice and milk together, then add Manako Rice Pudding Masala for authentic flavor. Sweeten with sugar or jaggery as desired. Use in custards or milk-based desserts for an aromatic twist. Sprinkle lightly as a garnish to enhance flavor. Ingredients Spices, dried herbs, aromatic flavoring agents. (Exact blend may vary – please check product packaging for the full ingredient list.) Storage Instructions Store in a cool, dry place. Keep the pack tightly sealed after opening. Product Details Brand: Manako Product Type: Dessert Spice Blend Net Weight: 100g Origin: Nepal Availability: Now in the USA

#### Nepali Sekuwa Masala

- URL: https://manaram.farm/product/nepali-sekuwa-masala/
- Type: simple
- Copy:

Our Mana Ko Mascia is a premium collection of authentic Nepali spice blends, crafted to bring traditional flavors to your kitchen. Each masala is carefully prepared to enhance your dishes with the bold, aromatic taste of Nepal, making every meal a celebration of Himalayan culinary heritage.

#### Nepali Momo Masala

- URL: https://manaram.farm/product/nepali-momo-masala/
- Type: simple
- Copy:

Our Mana Ko Mascia is a premium collection of authentic Nepali spice blends, crafted to bring traditional flavors to your kitchen. Each masala is carefully prepared to enhance your dishes with the bold, aromatic taste of Nepal, making every meal a celebration of Himalayan culinary heritage.

#### Nepali Hog Plum Masala

- URL: https://manaram.farm/product/nepali-hog-plum-masala/
- Type: simple
- Copy:

Our Mana Ko Mascia is a premium collection of authentic Nepali spice blends, crafted to bring traditional flavors to your kitchen. Each masala is carefully prepared to enhance your dishes with the bold, aromatic taste of Nepal, making every meal a celebration of Himalayan culinary heritage.

#### Nepali Chatpate Masala

- URL: https://manaram.farm/product/nepali-chatpate-masala/
- Type: simple
- Copy:

Manako Chatpate Masala is an authentic Nepali spice blend that captures the bold, tangy, and spicy taste of traditional street-style chatpate. In Nepali cooking, masala means a balanced mix of spices that enhances both flavor and aroma. This versatile seasoning is ideal for chatpate, pani puri, aloo sadeko, sekuwa, noodles, fried snacks, and roasted vegetables , instantly transforming simple ingredients into mouth-watering bites. Key Features Authentic Nepali Flavor brings you the bold, tangy, and spicy taste of traditional chatpate. Versatile Seasoning makes it perfect for chaat, fried snacks, noodles, roasted veggies, sekuwa, and more. Perfect Balance delivers a zesty mix of spice, salt, and tang for that irresistible kick. Convenient Pack Size comes in a 100g pouch that’s easy to use and store. Made in Nepal to bring the authentic taste of home to Nepali kitchens in the USA. How to Enjoy Sprinkle on puffed rice, noodles, or fried snacks for instant flavor. Mix with chopped onion, tomato, cucumber, chili, and lime for authentic chatpate . Use as a seasoning for aloo sadeko, pani puri water, or sekuwa marinade . Add to any snack or quick dish for that extra tangy twist. Ingredients Roasted Cumin, Coriander, Mango, Chilli, Citric Acid (INS 330), Black,Salt and Black Pepper. Storage Instructions Store in a cool, dry place . Keep the pack tightly sealed after opening.

#### Nepali Chowmein Masala

- URL: https://manaram.farm/product/nepali-chowmein-masala/
- Type: simple
- Copy:

Our Mana Ko Mascia is a premium collection of authentic Nepali spice blends, crafted to bring traditional flavors to your kitchen. Each masala is carefully prepared to enhance your dishes with the bold, aromatic taste of Nepal, making every meal a celebration of Himalayan culinary heritage.

#### Fish Masala

- URL: https://manaram.farm/product/fish-masala/
- Type: simple
- Copy:

Our Mana Ko Mascia is a premium collection of authentic Nepali spice blends, crafted to bring traditional flavors to your kitchen. Each masala is carefully prepared to enhance your dishes with the bold, aromatic taste of Nepal, making every meal a celebration of Himalayan culinary heritage.

#### Nepali Chicken Masala

- URL: https://manaram.farm/product/nepali-chicken-masala/
- Type: simple
- Copy:

Our Mana Ko Mascia is a premium collection of authentic Nepali spice blends, crafted to bring traditional flavors to your kitchen. Each masala is carefully prepared to enhance your dishes with the bold, aromatic taste of Nepal, making every meal a celebration of Himalayan culinary heritage.

#### Nepali Mutton Masala

- URL: https://manaram.farm/product/nepali-mutton-masala/
- Type: simple
- Copy:

Our Mana Ko Mascia is a premium collection of authentic Nepali spice blends, crafted to bring traditional flavors to your kitchen. Each masala is carefully prepared to enhance your dishes with the bold, aromatic taste of Nepal, making every meal a celebration of Himalayan culinary heritage.

### Titaura

Archive: https://manaram.farm/product-category/titaura/

#### Tamarind Spicy Candy

- URL: https://manaram.farm/product/tamarind-spicy-candy/
- Type: simple
- Copy:

Our Titaura is a traditional Nepali treat, offering a delightful mix of sweet, tangy, and spicy flavors. This assortment includes Amala Candy, Spicy Lapsi Titaura, Non-Spicy Lapsi Titaura, Sweet Lapsi Titaura, Bayer Ko Khattu, and lmili Piro Titaura. Perfect as a snack or a flavorful accompaniment, Titaura brings the authentic taste of Nepali heritage to every bite.

#### Sweet Hog Plum Lapsi Pop Candy

- URL: https://manaram.farm/product/sweet-hog-plum-lapsi-pop-candy/
- Type: simple
- Copy:

Our Titaura is a traditional Nepali treat, offering a delightful mix of sweet, tangy, and spicy flavors. This assortment includes Amala Candy, Spicy Lapsi Titaura, Non-Spicy Lapsi Titaura, Sweet Lapsi Titaura, Bayer Ko Khattu, and lmili Piro Titaura. Perfect as a snack or a flavorful accompaniment, Titaura brings the authentic taste of Nepali heritage to every bite.

#### Sweet Hog Plum Candy

- URL: https://manaram.farm/product/sweet-hog-plum-candy/
- Type: simple
- Copy:

Our Titaura is a traditional Nepali treat, offering a delightful mix of sweet, tangy, and spicy flavors. This assortment includes Amala Candy, Spicy Lapsi Titaura, Non-Spicy Lapsi Titaura, Sweet Lapsi Titaura, Bayer Ko Khattu, and lmili Piro Titaura. Perfect as a snack or a flavorful accompaniment, Titaura brings the authentic taste of Nepali heritage to every bite.

#### Spicy Hog Plum Candy

- URL: https://manaram.farm/product/spicy-hog-plum-candy/
- Type: simple
- Copy:

Our Titaura is a traditional Nepali treat, offering a delightful mix of sweet, tangy, and spicy flavors. This assortment includes Amala Candy, Spicy Lapsi Titaura, Non-Spicy Lapsi Titaura, Sweet Lapsi Titaura, Bayer Ko Khattu, and lmili Piro Titaura. Perfect as a snack or a flavorful accompaniment, Titaura brings the authentic taste of Nepali heritage to every bite.

#### Non Spicy Hog Plum Candy

- URL: https://manaram.farm/product/non-spicy-hog-plum-candy/
- Type: simple
- Copy:

Our Titaura is a traditional Nepali treat, offering a delightful mix of sweet, tangy, and spicy flavors. This assortment includes Amala Candy, Spicy Lapsi Titaura, Non-Spicy Lapsi Titaura, Sweet Lapsi Titaura, Bayer Ko Khattu, and lmili Piro Titaura. Perfect as a snack or a flavorful accompaniment, Titaura brings the authentic taste of Nepali heritage to every bite.

#### Jujube Candy

- URL: https://manaram.farm/product/jujube-candy/
- Type: simple
- Copy:

Our Titaura is a traditional Nepali treat, offering a delightful mix of sweet, tangy, and spicy flavors. This assortment includes Amala Candy, Spicy Lapsi Titaura, Non-Spicy Lapsi Titaura, Sweet Lapsi Titaura, Bayer Ko Khattu, and lmili Piro Titaura. Perfect as a snack or a flavorful accompaniment, Titaura brings the authentic taste of Nepali heritage to every bite.

#### Hot Plum Stick Candy

- URL: https://manaram.farm/product/hot-plum-stick-candy/
- Type: simple
- Copy:

Our Titaura is a traditional Nepali treat, offering a delightful mix of sweet, tangy, and spicy flavors. This assortment includes Amala Candy, Spicy Lapsi Titaura, Non-Spicy Lapsi Titaura, Sweet Lapsi Titaura, Bayer Ko Khattu, and lmili Piro Titaura. Perfect as a snack or a flavorful accompaniment, Titaura brings the authentic taste of Nepali heritage to every bite.

#### Dried Amla Candy

- URL: https://manaram.farm/product/dried-amla-candy/
- Type: simple
- Copy:

Our Titaura is a traditional Nepali treat, offering a delightful mix of sweet, tangy, and spicy flavors. This assortment includes Amala Candy, Spicy Lapsi Titaura, Non-Spicy Lapsi Titaura, Sweet Lapsi Titaura, Bayer Ko Khattu, and lmili Piro Titaura. Perfect as a snack or a flavorful accompaniment, Titaura brings the authentic taste of Nepali heritage to every bite.

#### Hot & Sour Hog Plum Candy

- URL: https://manaram.farm/product/hot-sour-hog-plum-candy/
- Type: simple
- Copy:

Our Titaura is a traditional Nepali treat, offering a delightful mix of sweet, tangy, and spicy flavors. This assortment includes Amala Candy, Spicy Lapsi Titaura, Non-Spicy Lapsi Titaura, Sweet Lapsi Titaura, Bayer Ko Khattu, and lmili Piro Titaura. Perfect as a snack or a flavorful accompaniment, Titaura brings the authentic taste of Nepali heritage to every bite.

### Tea & Coffee

Archive: https://manaram.farm/product-category/tea-coffee/

#### Mana Ko Coffee Beans

- URL: https://manaram.farm/product/mana-ko-coffee-beans/
- Type: simple
- Copy:

Our Himalayan Mountain Premium Medium Roast Grounded Beans are crafted from carefully selected Arabica beans grown above 1600 meters in Nepal's serene mid-hills. Expertly medium-roasted and finely ground, they deliver a smooth, balanced flavor with rich aroma, bringing the authentic taste of the Himalayas to every cup.

#### CTC Tea

- URL: https://manaram.farm/product/ctc-tea/
- Type: simple
- Copy:

Our Taichin Rice Flour, made from finely milled premium Taichin rice, is soft, light, and naturally gluten-free. Known for its smooth texture, it is ideal for preparing traditional dishes like yomari, sel roti, and steamed rice cakes. In Nepali cuisine, Taichin rice flour holds cultural significance, often used in festive and ceremonial cooking for its purity and quality.

#### Mana Ko Ground Coffee Hilly Premium

- URL: https://manaram.farm/product/mana-ko-ground-coffee-hilly-premium/
- Type: simple
- Copy:

Our Himalayan Hilly Premium Coffee features rich, bold Arabica beans grown sustainably by local farmers above 1600 meters in Nepal's serene mid-hills. Expertly roasted and perfectly ground, each cup delivers a smooth, aromatic experience that captures the authentic essence of the Himalayas.

#### Mana Ko Ground Coffee Mountain Premium

- URL: https://manaram.farm/product/mana-ko-ground-coffee-mountain-premium/
- Type: simple
- Copy:

Our Ground Coffee Mountain Premium is crafted from smooth, aromatic Arabica beans grown above 1600 meters in Nepal's serene mid-hills. Sustainably farmed by local growers, this premium coffee captures the authentic taste of the Himalayas-rich, elevated, and perfectly roasted for a satisfying brew.

