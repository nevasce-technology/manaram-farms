export type GalleryImageKind = "product" | "benefits" | "ingredients";

function isCutout(src: string) {
  return src.includes("/cutouts/") || src.endsWith(".png");
}

export function classifyGalleryImage(src: string): GalleryImageKind {
  const lower = src.toLowerCase();
  if (/benefit/i.test(lower)) return "benefits";
  if (/ingredient/i.test(lower)) return "ingredients";
  return "product";
}

export function getProductGalleryImages(product: { gallery: string[]; img: string }) {
  const all = product.gallery.length > 0 ? product.gallery : product.img ? [product.img] : [];
  const cutout = product.img && isCutout(product.img) ? product.img : null;

  const productImages = all.filter((src) => {
    if (classifyGalleryImage(src) !== "product") return false;
    if (cutout && !isCutout(src)) return false;
    return true;
  });

  const images =
    cutout != null
      ? [cutout, ...productImages.filter((src) => src !== cutout)]
      : productImages.length > 0
        ? productImages
        : all.slice(0, 1);

  return {
    all,
    images,
    benefits: all.filter((src) => classifyGalleryImage(src) === "benefits"),
    ingredients: all.filter((src) => classifyGalleryImage(src) === "ingredients"),
  };
}
