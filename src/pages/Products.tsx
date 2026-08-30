import { useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { CATALOG_CATEGORIES, CATALOG_PRODUCTS } from "../data/catalog";
import { usePageReveal } from "../hooks/usePageReveal";

export default function Products() {
  const root = useRef<HTMLElement>(null);
  usePageReveal(root);
  const [params, setParams] = useSearchParams();
  const activeParam = params.get("cat");
  const active =
    activeParam && CATALOG_CATEGORIES.some((c) => c.id === activeParam) ? activeParam : "all";

  const setActive = (id: string) => {
    if (id === "all") {
      setParams({}, { replace: true });
      return;
    }
    setParams({ cat: id }, { replace: true });
  };

  const filtered = useMemo(() => {
    if (active === "all") return CATALOG_PRODUCTS;
    const cat = CATALOG_CATEGORIES.find((c) => c.id === active)?.name;
    return CATALOG_PRODUCTS.filter((p) => p.category === cat);
  }, [active]);

  return (
    <main ref={root} className="bg-canvas pt-28 pb-24 md:pt-32 md:pb-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
        <header className="max-w-2xl">
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-ink">
            Products
          </h1>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft md:text-lg">
            Dairy, dried meats, pickles, spices, and pantry staples from Manaram Farm.
          </p>
        </header>

        {/* Category covers */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:mt-14 md:grid-cols-4 lg:grid-cols-6 md:gap-4">
          <button
            type="button"
            onClick={() => setActive("all")}
            className={`group relative aspect-[4/5] overflow-hidden rounded-[var(--radius-panel)] text-left transition-transform active:scale-[0.99] ${
              active === "all" ? "ring-2 ring-steel ring-offset-2 ring-offset-canvas" : ""
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-steel to-steel-deep" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
            <span className="absolute inset-x-3 bottom-3 font-display text-base font-semibold text-white md:text-lg">
              All
            </span>
          </button>
          {CATALOG_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={`group relative aspect-[4/5] overflow-hidden rounded-[var(--radius-panel)] text-left transition-transform active:scale-[0.99] ${
                active === cat.id ? "ring-2 ring-steel ring-offset-2 ring-offset-canvas" : ""
              }`}
            >
              {cat.cover ? (
                <img
                  src={cat.cover}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="absolute inset-0 bg-mist" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-transparent" />
              <span className="absolute inset-x-3 bottom-3 font-display text-[0.95rem] font-semibold leading-tight text-white md:text-base">
                {cat.label}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-10 flex items-end justify-between gap-4 border-b border-ink/10 pb-4 md:mt-14">
          <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink md:text-2xl">
            {active === "all"
              ? "Full catalog"
              : CATALOG_CATEGORIES.find((c) => c.id === active)?.label}
          </h2>
          <p className="text-sm text-ink-soft">{filtered.length} products</p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filtered.map((product, index) => (
            <article
              key={product.slug}
              id={product.slug}
              className="scroll-mt-28 group overflow-hidden rounded-[var(--radius-panel)] bg-white shadow-[0_18px_40px_-28px_rgb(8_20_36_/_0.35)] ring-1 ring-ink/6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square bg-canvas/80 p-4">
                <img
                  src={product.img}
                  alt={product.name}
                  width={480}
                  height={480}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                  loading={index < 8 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={index < 4 ? "high" : "auto"}
                />
              </div>
              <div className="border-t border-ink/6 px-4 py-4 md:px-5">
                <p className="text-xs font-medium text-steel">{product.category}</p>
                <h3 className="mt-1 font-display text-[1.02rem] font-semibold leading-snug tracking-[-0.02em] text-ink md:text-[1.08rem]">
                  {product.name}
                </h3>
                {product.note ? (
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">{product.note}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
