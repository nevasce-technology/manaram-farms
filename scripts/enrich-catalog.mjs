import fs from "node:fs";
import path from "node:path";

const root = path.resolve(".");

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
    .replace(/\s+/g, " ")
    .replace(/^"+|"+$/g, "")
    .trim();
}

function esc(s = "") {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function firstSentence(text) {
  const t = clean(text);
  if (!t) return "";
  const match = t.match(/^(.+?[.!?])(?:\s|$)/);
  const sentence = match ? match[1] : t;
  if (sentence.length <= 140) return sentence;
  const trimmed = sentence.slice(0, 137).replace(/\s+\S*$/, "");
  return `${trimmed}…`;
}

function sanitizeProductDescription(description = "") {
  return clean(
    description
      .replace(/\s*###\s+.+?\s+Archive:\s*https?:\/\/[^\s"]+/gi, "")
      .replace(/\s*Archive:\s*https?:\/\/[^\s"]+/gi, ""),
  );
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

function parseInventory(md) {
  const bySlug = new Map();
  const sections = md.split(/\n#### /);
  for (const section of sections.slice(1)) {
    const urlMatch = section.match(/- URL: https:\/\/manaram\.farm\/product\/([^/\s]+)\//);
    if (!urlMatch) continue;
    const slug = urlMatch[1];
    const copyMatch = section.match(/- Copy:\s*\n+([\s\S]*?)(?=\n#### |\n## |$)/);
    const copy = copyMatch ? clean(copyMatch[1]) : "";
    if (copy) bySlug.set(slug, copy);
  }
  return bySlug;
}

function minimalDescription(product) {
  return `${product.name} from Manaram Farm's ${product.category} range.`;
}

const KNOWN_BAD_SLUGS = new Set(["ctc-tea"]);

const raw = JSON.parse(
  fs.readFileSync(path.join(root, "scripts/catalog-raw.json"), "utf8").replace(/^\uFEFF/, ""),
);
const inventory = parseInventory(
  fs.readFileSync(path.join(root, "CONTENT_INVENTORY.md"), "utf8").replace(/^\uFEFF/, ""),
);
const manifest = JSON.parse(
  fs.readFileSync(path.join(root, "public/products/manifest.json"), "utf8").replace(/^\uFEFF/, ""),
);

const categoryMeta = [
  {
    id: "dairy",
    name: "Dairy",
    label: "Dairy Products",
    cover: "/products/category-covers/Cat_dairy_churrpi.jpg",
    cutout: "/products/category-cutouts/Cat_dairy_churrpi.png",
  },
  {
    id: "dried-meat",
    name: "Dried Meat",
    label: "Dried Meat",
    cover: "/products/category-covers/Cat_sai_sukuti.jpg",
    cutout: "/products/category-cutouts/Cat_sai_sukuti.png",
  },
  {
    id: "mana-ko-achar",
    name: "Mana Ko Achar",
    label: "Mana Ko Achar",
    cover: "/products/category-covers/Cat_mana_ko_achar.jpg",
    cutout: "/products/category-cutouts/Cat_mana_ko_achar.png",
  },
  {
    id: "sattu",
    name: "Sattu",
    label: "Poshilo Sattu",
    cover: "/products/category-covers/Cat_Sattu.jpg",
    cutout: "/products/category-cutouts/Cat_Sattu.png",
  },
  {
    id: "sugar-salt-seeds",
    name: "Sugar, Salt & Seeds",
    label: "Sugar, Salt & Seeds",
    cover: "/products/category-covers/Cat_Salt_Sugar_Seed.jpg",
    cutout: "/products/category-cutouts/Cat_Salt_Sugar_Seed.png",
  },
  {
    id: "dried-other-items",
    name: "Dried & Other Items",
    label: "Dried & Others",
    cover: "/products/category-covers/cat_dried_others.jpg",
    cutout: "/products/category-cutouts/cat_dried_others.png",
  },
  {
    id: "flours",
    name: "Flours",
    label: "Flours / Atta",
    cover: "/products/category-covers/cat_flour.jpg",
    cutout: "/products/category-cutouts/cat_flour.png",
  },
  {
    id: "grains-cereal",
    name: "Grains / Cereal",
    label: "Grains / Cereals",
    cover: "/products/category-covers/cat_grains_cereal.jpg",
    cutout: "/products/category-cutouts/cat_grains_cereal.png",
  },
  {
    id: "masala-spices",
    name: "Masala / Spices",
    label: "Masala / Spices",
    cover: "/products/category-covers/Cat_masale1.jpg",
    cutout: "/products/category-cutouts/Cat_masale1.png",
  },
  {
    id: "titaura",
    name: "Titaura",
    label: "Titaura",
    cover: "/products/category-covers/cat_titaura.jpg",
    cutout: "/products/category-cutouts/cat_titaura.png",
  },
  {
    id: "tea-coffee",
    name: "Tea & Coffee",
    label: "Tea & Coffee",
    cover: "/products/category-covers/cat_tea_coffee.jpg",
    cutout: "/products/category-cutouts/cat_tea_coffee.png",
  },
];

const categoryByName = Object.fromEntries(categoryMeta.map((c) => [c.name, c]));

const products = raw
  .map((p) => {
    const category = clean(p.category);
    const cat = categoryByName[category];
    const slug = p.slug;
    const img = pickImg(p);
    if (!img) return null;

    let description = sanitizeProductDescription(inventory.get(slug) || "");
    if (KNOWN_BAD_SLUGS.has(slug) || !description) {
      description = minimalDescription({ name: clean(p.name), category });
    }

    const galleryEntry = manifest[slug];
    const gallery = (galleryEntry?.images || []).map((rel) => `/products/${rel.replace(/\\/g, "/")}`);

    let note = firstSentence(description);
    if (slug === "mana-ko-dahi") {
      note = "Set yogurt made from fresh cow milk in our dairy.";
    }
    if (slug === "ctc-tea") {
      description = "Nepali CTC black tea from Manaram Farm.";
      note = description;
    }

    return {
      slug,
      name: clean(p.name),
      category,
      categoryId: cat?.id ?? category.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      note,
      description,
      img,
      gallery,
    };
  })
  .filter(Boolean)
  .sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));

const bySlug = Object.fromEntries(products.map((p) => [p.slug, p]));

const featuredSpec = [
  {
    slug: "mana-ko-milk",
    note: "Pure cow milk from our Jhapa dairy.",
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
  categoryId: string;
  note: string;
  description: string;
  img: string;
  gallery: string[];
};

export type CatalogCategory = {
  id: string;
  name: string;
  label: string;
  cover: string | null;
  cutout: string | null;
};

export type FeaturedProduct = CatalogProduct & { glow: string };

/** Home showcase order matches manaram.farm/products category tiles. */
export const CATALOG_CATEGORIES: CatalogCategory[] = [
${categoryMeta
  .map(
    (c) =>
      `  { id: "${c.id}", name: "${esc(c.name)}", label: "${esc(c.label)}", cover: ${c.cover ? `"${c.cover}"` : "null"}, cutout: ${c.cutout ? `"${c.cutout}"` : "null"} },`,
  )
  .join("\n")}
];

export const CATALOG_PRODUCTS: CatalogProduct[] = [
${products
  .map(
    (p) =>
      `  { slug: "${p.slug}", name: "${esc(p.name)}", category: "${esc(p.category)}", categoryId: "${p.categoryId}", note: "${esc(p.note)}", description: "${esc(p.description)}", img: "${p.img}", gallery: [${p.gallery.map((g) => `"${g}"`).join(", ")}] },`,
  )
  .join("\n")}
];

export const FEATURED_PRODUCTS: FeaturedProduct[] = [
${featured
  .map(
    (p) =>
      `  { slug: "${p.slug}", name: "${esc(p.name)}", category: "${esc(p.category)}", categoryId: "${p.categoryId}", note: "${esc(p.note)}", description: "${esc(p.description)}", img: "${p.img}", gallery: [${p.gallery.map((g) => `"${g}"`).join(", ")}], glow: "${p.glow}" },`,
  )
  .join("\n")}
];

const categoryById = Object.fromEntries(CATALOG_CATEGORIES.map((c) => [c.id, c]));

export function getCategoryById(id: string): CatalogCategory | undefined {
  return categoryById[id];
}

export function getCategoryByName(name: string): CatalogCategory | undefined {
  return CATALOG_CATEGORIES.find((c) => c.name === name);
}

export function getProductBySlug(slug: string): CatalogProduct | undefined {
  return CATALOG_PRODUCTS.find((p) => p.slug === slug);
}

export function productsByCategoryId(categoryId: string): CatalogProduct[] {
  return CATALOG_PRODUCTS.filter((p) => p.categoryId === categoryId);
}

export function relatedProducts(slug: string, limit = 4): CatalogProduct[] {
  const product = getProductBySlug(slug);
  if (!product) return [];
  return CATALOG_PRODUCTS.filter((p) => p.categoryId === product.categoryId && p.slug !== slug).slice(
    0,
    limit,
  );
}
`;

fs.writeFileSync(path.join(root, "src/data/catalog.ts"), out, "utf8");
console.log(`Enriched catalog: ${products.length} products, ${categoryMeta.length} categories`);
