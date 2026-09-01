import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import type { CatalogProduct } from "../../data/catalog";
import { SplitProductCardShell, SplitProductCardVisual } from "./SplitProductCardShell";

type ProductCardProps = {
  product: CatalogProduct;
  priority?: boolean;
  layout?: "grid" | "list";
};

export default function ProductCard({ product, priority, layout = "grid" }: ProductCardProps) {
  if (layout === "list") {
    return (
      <Link
        to={`/products/${product.slug}`}
        id={product.slug}
        className="product-card group scroll-mt-36 flex gap-4 rounded-[var(--radius-soft)] bg-white p-3 ring-1 ring-ink/6 transition-colors duration-200 hover:ring-steel/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel sm:p-4"
      >
        <div className="relative flex size-[4.5rem] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#eef3f8] ring-1 ring-ink/6 sm:size-20">
          <img
            src={product.img}
            alt={product.name}
            className="category-cutout max-h-[88%] w-auto max-w-[88%] object-contain transition-transform duration-300 group-hover:scale-[1.04]"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-steel">{product.category}</p>
          <h3 className="mt-1 font-display text-base font-semibold leading-snug tracking-[-0.02em] text-ink">
            {product.name}
          </h3>
          {product.note ? (
            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-soft">{product.note}</p>
          ) : null}
        </div>
        <ArrowUpRight
          size={16}
          weight="bold"
          className="mt-1 shrink-0 text-ink/25 transition-colors group-hover:text-steel"
          aria-hidden="true"
        />
      </Link>
    );
  }

  return (
    <Link
      to={`/products/${product.slug}`}
      id={product.slug}
      className="product-card group scroll-mt-36 block overflow-hidden rounded-[1.75rem] outline-none ring-1 ring-ink/6 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
    >
      <SplitProductCardShell
        shadow="default"
        title={product.name}
        subtitle={product.category}
        visual={
          <SplitProductCardVisual src={product.img} alt={product.name} priority={priority} />
        }
      />
    </Link>
  );
}
