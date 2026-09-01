"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { CatalogProduct } from "../../data/catalog";
import { cutoutObjectPosition } from "../../data/cutout-positions";
import { getProductGalleryImages } from "../../utils/productGallery";

type ProductGalleryProps = {
  product: CatalogProduct;
};

export default function ProductGallery({ product }: ProductGalleryProps) {
  const reduce = useReducedMotion();
  const { images } = getProductGalleryImages(product);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSrc = images[activeIndex] ?? product.img;
  const isCutout = activeSrc.includes("/cutouts/") || activeSrc.endsWith(".png");

  return (
    <div className="pdp-gallery">
      <div className="pdp-showcase" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSrc}
            className="pdp-showcase__visual"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={activeSrc}
              alt={product.name}
              width={800}
              height={800}
              className={`pdp-showcase__image ${isCutout ? "product-cutout" : "pdp-showcase__photo"}`}
              style={isCutout ? { objectPosition: cutoutObjectPosition(activeSrc, "center") } : undefined}
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 ? (
        <div className="pdp-gallery__thumbs" role="tablist" aria-label="Product images">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              role="tab"
              onClick={() => setActiveIndex(index)}
              className={`pdp-gallery__thumb ${index === activeIndex ? "pdp-gallery__thumb--active" : ""}`}
              aria-label={`Image ${index + 1} of ${images.length}`}
              aria-selected={index === activeIndex}
            >
              <img src={src} alt="" className="h-full w-full object-contain p-1.5" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
