import { useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import {
  CATALOG_CATEGORIES,
  CATALOG_PRODUCTS,
  productsByCategoryId,
} from "../data/catalog";
import HomeFooter from "../components/home/HomeFooter";
import ProductsHero from "../components/products/ProductsHero";
import ProductsFeaturedBento from "../components/products/ProductsFeaturedBento";
import ProductsSidebar, { ProductsCategoryHeader } from "../components/products/ProductsSidebar";
import ProductCard from "../components/products/ProductCard";
import { prefersReducedMotion } from "../lib/anim";
import { gsap, useGSAP } from "../lib/gsap";

export default function Products() {
  const gridRef = useRef<HTMLDivElement>(null);
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
    return productsByCategoryId(active);
  }, [active]);

  const gridLayout = active === "all" ? "grid" : "list";

  useGSAP(
    () => {
      if (!gridRef.current || prefersReducedMotion()) return;
      const cards = gridRef.current.querySelectorAll(".product-card");
      gsap.fromTo(
        cards,
        { y: 16, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.35,
          stagger: { each: 0.03, grid: "auto" },
          ease: "power2.out",
          overwrite: true,
        },
      );
    },
    { scope: gridRef, dependencies: [active] },
  );

  return (
    <main className="bg-canvas">
      <ProductsHero />

      <div className="mx-auto max-w-[1400px] px-5 py-10 md:px-10 md:py-14 xl:px-14">
        <div className="lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[16.5rem_minmax(0,1fr)] xl:gap-14">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <ProductsSidebar active={active} onSelect={setActive} />
          </aside>

          <div id="product-grid" className="mt-6 scroll-mt-28 lg:mt-0">
            {active === "all" ? <ProductsFeaturedBento /> : null}

            <ProductsCategoryHeader active={active} onClear={() => setActive("all")} />

            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-lg font-semibold tracking-[-0.02em] text-ink md:text-xl">
                  {active === "all" ? "Full catalog" : "In this range"}
                </h2>
                <p className="mt-1 text-sm text-ink-soft">
                  {filtered.length} {filtered.length === 1 ? "product" : "products"}
                </p>
              </div>
            </div>

            <div
              ref={gridRef}
              className={
                gridLayout === "grid"
                  ? "grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-7 xl:grid-cols-3"
                  : "flex flex-col gap-4"
              }
            >
              {filtered.map((product, index) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  priority={index < 6}
                  layout={gridLayout}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <HomeFooter />
    </main>
  );
}
