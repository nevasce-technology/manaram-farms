import { Link } from "react-router-dom";
import type { CatalogCategory } from "../../data/catalog";
import { SplitProductCardShell, SplitProductCardVisual } from "./SplitProductCardShell";

type CategoryShowcaseCardProps = {
  category: CatalogCategory;
  productCount?: number;
  priority?: boolean;
  variant?: "hero" | "catalog";
  active?: boolean;
  className?: string;
} & (
  | { as: "link"; to: string }
  | { as: "button"; onClick: () => void }
);

export function CategoryShowcaseCard({
  category,
  productCount,
  priority,
  variant = "hero",
  active = false,
  className = "",
  ...action
}: CategoryShowcaseCardProps) {
  const cutout = category.cutout;
  const isHero = variant === "hero";

  const subtitle =
    productCount !== undefined
      ? `${productCount} ${productCount === 1 ? "product" : "products"}`
      : undefined;

  const shell = (
    <SplitProductCardShell
      shadow={isHero ? "hero" : "default"}
      title={category.label}
      subtitle={subtitle}
      visual={
        <SplitProductCardVisual
          src={cutout}
          alt={category.label}
          priority={priority}
          fallbackLabel={category.id === "all" ? "All" : undefined}
        />
      }
    />
  );

  const sharedClass = [
    "overflow-hidden rounded-[1.75rem] outline-none transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:ring-2 active:scale-[0.995]",
    isHero ? "focus-visible:ring-white/70" : "focus-visible:ring-steel/40",
    active ? "ring-2 ring-steel ring-offset-2 ring-offset-canvas" : "",
    isHero ? "ring-1 ring-white/20" : "ring-1 ring-ink/6",
    className,
  ].join(" ");

  if (action.as === "link") {
    return (
      <Link to={action.to} className={sharedClass}>
        {shell}
      </Link>
    );
  }

  return (
    <button type="button" onClick={action.onClick} className={sharedClass} aria-pressed={active}>
      {shell}
    </button>
  );
}

export function countInCategory(categoryName: string, products: { category: string }[]) {
  return products.filter((p) => p.category === categoryName).length;
}
