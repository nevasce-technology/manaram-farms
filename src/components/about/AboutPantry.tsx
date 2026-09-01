import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { CATALOG_CATEGORIES } from "../../data/catalog";
import { useSectionReveal } from "../../hooks/useSectionReveal";

const pantryStrip = CATALOG_CATEGORIES.filter((c) => c.cover).slice(0, 8);

export default function AboutPantry() {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section ref={sectionRef} className="relative bg-white py-20 pb-24 md:py-24 md:pb-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
        <div
          data-reveal-header
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-xl">
            <h2 className="font-display text-[clamp(1.7rem,3.2vw,2.35rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-steel">
              What leaves our shelves
            </h2>
            <p className="mt-3 text-[1.05rem] leading-relaxed text-ink-soft">
              Dairy, achar, dried meats, flours, grains, spices, and more under Mana Ko and our
              sister lines.
            </p>
          </div>
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-steel transition-colors hover:text-steel-deep"
          >
            Browse products
            <ArrowRight
              size={16}
              weight="bold"
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <ul
          data-reveal-stagger
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:mt-12 md:grid-cols-4 md:gap-4"
        >
          {pantryStrip.map(({ id, label, cover }) => (
            <li key={id} className="group overflow-hidden rounded-[var(--radius-soft)] bg-white">
              <Link to={`/products?cat=${id}`} className="relative block aspect-[4/5] overflow-hidden bg-mist">
                <img
                  src={cover!}
                  alt={label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/90 to-transparent pt-16"
                  aria-hidden="true"
                />
                <span className="absolute inset-x-0 bottom-0 p-3 font-display text-sm font-semibold tracking-[-0.02em] text-ink md:p-4 md:text-base">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
