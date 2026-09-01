import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { relatedProducts, type CatalogProduct } from "../../data/catalog";
import ProductCard from "./ProductCard";

type RelatedProductsProps = {
  product: CatalogProduct;
};

export default function RelatedProducts({ product }: RelatedProductsProps) {
  const related = relatedProducts(product.slug, 4);
  if (!related.length) return null;

  return (
    <section className="border-t border-ink/10 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink md:text-2xl">
              More in {product.category}
            </h2>
            <p className="mt-1 text-sm text-ink-soft">Related products from the same range</p>
          </div>
          <Link
            to={`/products?cat=${product.categoryId}`}
            className="group hidden items-center gap-1.5 text-sm font-semibold text-steel transition-colors hover:text-steel-deep sm:inline-flex"
          >
            View category
            <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
