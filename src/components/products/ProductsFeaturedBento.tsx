import { Link } from "react-router-dom";
import { FEATURED_PRODUCTS } from "../../data/catalog";
import { SplitProductCardShell, SplitProductCardVisual } from "./SplitProductCardShell";

export default function ProductsFeaturedBento() {
  const [lead, ...rest] = FEATURED_PRODUCTS;
  const side = rest.slice(0, 2);

  return (
    <section className="mb-10 md:mb-12" aria-label="Featured products">
      <h2 className="font-display text-lg font-semibold tracking-[-0.02em] text-ink md:text-xl">
        Featured
      </h2>

      <div className="mt-5 grid gap-5 sm:gap-6 md:grid-cols-12 md:grid-rows-2 md:gap-7">
        <Link
          to={`/products/${lead.slug}`}
          className="group block h-full overflow-hidden rounded-[1.75rem] ring-1 ring-ink/6 transition-transform duration-300 hover:-translate-y-1 md:col-span-7 md:row-span-2"
        >
          <SplitProductCardShell
            tall
            fill
            shadow="default"
            title={lead.name}
            subtitle={lead.category}
            visual={
              <SplitProductCardVisual
                src={lead.img}
                alt={lead.name}
                priority
                align="center"
                size="lead"
              />
            }
          />
        </Link>

        {side.map((product) => (
          <Link
            key={product.slug}
            to={`/products/${product.slug}`}
            className="group block h-full overflow-hidden rounded-[1.75rem] ring-1 ring-ink/6 transition-transform duration-300 hover:-translate-y-1 md:col-span-5"
          >
            <SplitProductCardShell
              fill
              shadow="default"
              title={product.name}
              subtitle={product.category}
              visual={
                <SplitProductCardVisual
                  src={product.img}
                  alt={product.name}
                  align="floor"
                  size="compact"
                />
              }
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
