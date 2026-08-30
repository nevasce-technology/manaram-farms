import fs from "node:fs";
import path from "node:path";

const root = path.resolve(".");
const raw = JSON.parse(
  fs.readFileSync(path.join(root, "scripts/catalog-raw.json"), "utf8").replace(/^\uFEFF/, ""),
);

function decodeHtml(s = "") {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "-")
    .replace(/&#8212;/g, "-")
    .replace(/&#038;/g, "&")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function clean(s = "") {
  return decodeHtml(s)
    .replace(/[\u2014\u2013]/g, "-")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/â€"|â€“|â€”/g, "-")
    .replace(/â€™|â€˜/g, "'")
    .replace(/â€œ|â€/g, '"')
    .replace(/\s+/g, " ")
    .replace(/^"+|"+$/g, "")
    .trim();
}

function esc(s = "") {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function pickImg(item) {
  const imgs = (item.images || []).filter(
    (u) => u && !/benefit|ingredient|Benefits|Ingredients/i.test(u),
  );
  const raw = imgs[0] || item.img || null;
  if (!raw) return null;

  const cutoutUrl = raw
    .replace("/products/gallery/", "/products/cutouts/")
    .replace(/\.(jpe?g|webp)$/i, ".png");
  const cutoutAbs = path.join(root, "public", cutoutUrl.replace(/^\//, ""));
  if (fs.existsSync(cutoutAbs)) return cutoutUrl;
  return raw;
}

const products = raw
  .map((p) => ({
    slug: p.slug,
    name: clean(p.name),
    category: clean(p.category),
    note: clean(p.note),
    img: pickImg(p),
  }))
  .map((p) =>
    p.slug === "mana-ko-dahi"
      ? {
          ...p,
          note: "Set yogurt made from fresh cow milk in our dairy.",
        }
      : p,
  )
  .filter((p) => p.img)
  .sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));

const coverMap = {
  Dairy: "/products/category-covers/Cat_dairy_churrpi.jpg",
  "Dried Meat": "/products/category-covers/Cat_sai_sukuti.jpg",
  "Dried & Other Items": "/products/category-covers/cat_dried_others.jpg",
  Flours: "/products/category-covers/cat_flour.jpg",
  "Grains / Cereal": "/products/category-covers/cat_grains_cereal.jpg",
  "Mana Ko Achar": "/products/category-covers/Cat_mana_ko_achar.jpg",
  "Mana Ko Beverages": "/products/category-covers/Cat_Beverages.jpg",
  "Masala / Spices": "/products/category-covers/Cat_masale.jpg",
  Sattu: "/products/category-covers/Cat_Sattu.jpg",
  "Sugar, Salt & Seeds": "/products/category-covers/Cat_Salt_Sugar_Seed.jpg",
  "Tea & Coffee": "/products/category-covers/cat_tea_coffee.jpg",
  Titaura: "/products/category-covers/cat_titaura.jpg",
};

const categories = [...new Set(products.map((p) => p.category))]
  .sort()
  .map((name) => ({
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    name,
    cover: coverMap[name] || null,
  }));

const bySlug = Object.fromEntries(products.map((p) => [p.slug, p]));

const featuredSpec = [
  {
    slug: "mana-ko-milk",
    note: "Pure cow milk from open pasture.",
    glow: "radial-gradient(circle, rgb(255 255 255 / 0.85) 0%, transparent 70%)",
  },
  {
    slug: "mana-ko-ghee",
    note: "Clarified butter from our dairy.",
    glow: "radial-gradient(circle, rgb(255 228 180 / 0.7) 0%, transparent 70%)",
  },
  {
    slug: "mana-ko-dahi",
    note: "Set yogurt from our dairy.",
    glow: "radial-gradient(circle, rgb(210 235 255 / 0.75) 0%, transparent 70%)",
  },
  {
    slug: "sahi-sukuti-the-original",
    note: "Buffalo dried meat, the original.",
    glow: "radial-gradient(circle, rgb(255 205 175 / 0.65) 0%, transparent 70%)",
    img: "/products/cutouts/sahi-sukuti-the-original/sukuti-original.png",
  },
  {
    slug: "mana-ko-mango-achar",
    note: "Nepali pickle from our kitchens.",
    glow: "radial-gradient(circle, rgb(255 235 170 / 0.7) 0%, transparent 70%)",
  },
  {
    slug: "hot-sour-hog-plum-candy",
    note: "Tangy fruit candy, traditional make.",
    glow: "radial-gradient(circle, rgb(255 200 210 / 0.65) 0%, transparent 70%)",
  },
];

const featured = featuredSpec
  .map((f) => {
    const p = bySlug[f.slug];
    if (!p) return null;
    const imgPath = f.img ? path.join(root, "public", f.img.replace(/^\//, "")) : null;
    const img = imgPath && fs.existsSync(imgPath) ? f.img : p.img;
    return { ...p, note: f.note, glow: f.glow, img };
  })
  .filter(Boolean);

const out = `export type CatalogProduct = {
  slug: string;
  name: string;
  category: string;
  note: string;
  img: string;
};

export type CatalogCategory = {
  id: string;
  name: string;
  cover: string | null;
};

export type FeaturedProduct = CatalogProduct & { glow: string };

export const CATALOG_CATEGORIES: CatalogCategory[] = [
${categories
  .map(
    (c) =>
      `  { id: "${c.id}", name: "${esc(c.name)}", cover: ${c.cover ? `"${c.cover}"` : "null"} },`,
  )
  .join("\n")}
];

export const CATALOG_PRODUCTS: CatalogProduct[] = [
${products
  .map(
    (p) =>
      `  { slug: "${p.slug}", name: "${esc(p.name)}", category: "${esc(p.category)}", note: "${esc(p.note)}", img: "${p.img}" },`,
  )
  .join("\n")}
];

export const FEATURED_PRODUCTS: FeaturedProduct[] = [
${featured
  .map(
    (p) =>
      `  { slug: "${p.slug}", name: "${esc(p.name)}", category: "${esc(p.category)}", note: "${esc(p.note)}", img: "${p.img}", glow: "${p.glow}" },`,
  )
  .join("\n")}
];

export function productsByCategory(category: string): CatalogProduct[] {
  return CATALOG_PRODUCTS.filter((p) => p.category === category);
}
`;

fs.mkdirSync(path.join(root, "src/data"), { recursive: true });
fs.writeFileSync(path.join(root, "src/data/catalog.ts"), out, "utf8");
console.log(`Wrote catalog: ${products.length} products, ${categories.length} categories, ${featured.length} featured`);
