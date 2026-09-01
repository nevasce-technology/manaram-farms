import { useEffect, useRef } from "react";
import { CATALOG_CATEGORIES, CATALOG_PRODUCTS } from "../../data/catalog";
import { countInCategory } from "./CategoryShowcaseCard";

type ProductsSidebarProps = {
  active: string;
  onSelect: (id: string) => void;
};

export default function ProductsSidebar({ active, onSelect }: ProductsSidebarProps) {
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active === "all") return;
    const btn = mobileRef.current?.querySelector(`[data-cat="${active}"]`);
    btn?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  return (
    <>
      <div
        ref={mobileRef}
        className="product-rail -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:hidden"
        role="tablist"
        aria-label="Filter by category"
      >
        <CategoryChip id="all" label="All" count={CATALOG_PRODUCTS.length} active={active} onSelect={onSelect} />
        {CATALOG_CATEGORIES.map((cat) => (
          <CategoryChip
            key={cat.id}
            id={cat.id}
            label={cat.label}
            count={countInCategory(cat.name, CATALOG_PRODUCTS)}
            active={active}
            onSelect={onSelect}
          />
        ))}
      </div>

      <nav
        className="hidden lg:block"
        aria-label="Filter by category"
      >
        <p className="text-sm font-semibold text-ink">Categories</p>
        <ul className="mt-4 space-y-0.5">
          <li>
            <SidebarItem
              id="all"
              label="All products"
              count={CATALOG_PRODUCTS.length}
              active={active === "all"}
              onSelect={onSelect}
            />
          </li>
          {CATALOG_CATEGORIES.map((cat) => (
            <li key={cat.id}>
              <SidebarItem
                id={cat.id}
                label={cat.label}
                count={countInCategory(cat.name, CATALOG_PRODUCTS)}
                active={active === cat.id}
                onSelect={onSelect}
              />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

function SidebarItem({
  id,
  label,
  count,
  active,
  onSelect,
}: {
  id: string;
  label: string;
  count: number;
  active: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <button
      type="button"
      data-cat={id}
      role="tab"
      aria-selected={active}
      onClick={() => onSelect(id)}
      className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-[14px] transition-colors duration-200 ${
        active
          ? "bg-steel/10 font-semibold text-steel"
          : "font-medium text-ink/70 hover:bg-ink/[0.04] hover:text-ink"
      }`}
    >
      <span className="min-w-0 truncate">{label}</span>
      <span
        className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
          active ? "bg-steel/15 text-steel" : "bg-mist text-ink-soft"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

function CategoryChip({
  id,
  label,
  count,
  active,
  onSelect,
}: {
  id: string;
  label: string;
  count: number;
  active: string;
  onSelect: (id: string) => void;
}) {
  const isActive = active === id;

  return (
    <button
      type="button"
      data-cat={id}
      role="tab"
      aria-selected={isActive}
      onClick={() => onSelect(id)}
      className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold transition-colors ${
        isActive
          ? "bg-steel text-white"
          : "bg-white text-ink/70 ring-1 ring-ink/8 hover:text-ink"
      }`}
    >
      {label}
      <span
        className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
          isActive ? "bg-white/20" : "bg-mist text-ink-soft"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

export function ProductsCategoryHeader({
  active,
  onClear,
}: {
  active: string;
  onClear: () => void;
}) {
  if (active === "all") return null;

  const category = CATALOG_CATEGORIES.find((c) => c.id === active);
  if (!category) return null;

  const count = countInCategory(category.name, CATALOG_PRODUCTS);
  const img = category.cutout ?? category.cover;

  return (
    <div className="mb-8 flex flex-col gap-5 overflow-hidden rounded-[var(--radius-panel)] bg-white ring-1 ring-ink/6 sm:flex-row sm:items-center">
      {img ? (
        <div
          className="relative flex h-36 w-full shrink-0 items-center justify-center sm:h-auto sm:w-44 md:w-52"
          style={{
            background:
              "linear-gradient(145deg, #eef4f9 0%, #f4f7fa 100%)",
          }}
        >
          <img
            src={img}
            alt=""
            className="category-cutout max-h-[80%] w-auto max-w-[75%] object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-3 px-5 py-5 sm:py-4 md:px-6">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink md:text-[1.75rem]">
            {category.label}
          </h2>
          <p className="mt-1 text-sm text-ink-soft">
            {count} {count === 1 ? "product" : "products"} in this range
          </p>
        </div>
        <button
          type="button"
          onClick={onClear}
          className="self-start text-sm font-semibold text-steel transition-colors hover:text-steel-deep"
        >
          View all products
        </button>
      </div>
    </div>
  );
}
