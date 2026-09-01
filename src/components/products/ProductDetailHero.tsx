"use client";

import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, EnvelopeSimple, Mountains, SealCheck } from "@phosphor-icons/react";
import type { CatalogProduct } from "../../data/catalog";
import { formatNutritionAmount, parseProductDescription } from "../../utils/parseProductDescription";

type ProductDetailHeroProps = {
  product: CatalogProduct;
};

function formatNutrientLabel(name: string) {
  return name.replace(/^Total /, "");
}

export default function ProductDetailHero({ product }: ProductDetailHeroProps) {
  const reduce = useReducedMotion();
  const parsed = useMemo(() => parseProductDescription(product.description), [product.description]);

  const mentionsNepal =
    /made in nepal|proudly nepal|from nepal/i.test(product.description) ||
    parsed.highlights.some((item) => /nepal|himalayan/i.test(`${item.title} ${item.body}`));

  const quickFacts = [
    parsed.availableSize ? { label: "Size", value: parsed.availableSize } : null,
    ...parsed.nutrition
      .filter((row) => ["Protein", "Total Fat", "Sodium"].includes(row.nutrient))
      .slice(0, 2)
      .map((row) => {
        const amount = formatNutritionAmount(row.amount);
        return {
          label: formatNutrientLabel(row.nutrient),
          value: row.dailyValue ? `${amount} (${row.dailyValue} DV)` : amount,
        };
      }),
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <motion.div
      className="pdp-hero-copy"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
    >
      <Link
        to={`/products?cat=${product.categoryId}`}
        className="group inline-flex items-center gap-1.5 text-sm font-semibold text-steel transition-colors hover:text-steel-deep"
      >
        {product.category}
        <ArrowRight
          size={14}
          weight="bold"
          className="transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>

      <h1 className="mt-3 font-display text-[clamp(1.85rem,4.2vw,2.85rem)] font-semibold leading-[1.06] tracking-[-0.04em] text-ink">
        {product.name}
      </h1>

      <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-ink-soft">{product.note}</p>

      {mentionsNepal ? (
        <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-steel/15 bg-white/60 px-3.5 py-1.5 text-sm font-medium text-ink/85">
          <Mountains size={16} weight="duotone" className="text-steel" aria-hidden="true" />
          <SealCheck size={14} weight="fill" className="text-steel" aria-hidden="true" />
          Made in Nepal
        </p>
      ) : null}

      {quickFacts.length > 0 ? (
        <dl className="mt-7 grid grid-cols-3 gap-3">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="pdp-fact-pill">
              <dt className="text-[11px] font-medium text-ink-soft">{fact.label}</dt>
              <dd className="mt-1 font-display text-[15px] font-semibold leading-tight tracking-[-0.02em] text-ink">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}

      <div className="mt-8 hidden gap-3 sm:flex">
        <Link
          to="/contact"
          className="inline-flex min-h-[2.875rem] flex-1 items-center justify-center gap-2 rounded-full bg-steel px-6 text-sm font-semibold text-white transition-colors hover:bg-steel-deep active:scale-[0.98] sm:flex-none"
        >
          <EnvelopeSimple size={18} weight="bold" aria-hidden="true" />
          Enquire
        </Link>
        <Link
          to={`/products?cat=${product.categoryId}`}
          className="inline-flex min-h-[2.875rem] items-center justify-center rounded-full border border-ink/15 bg-white/60 px-6 text-sm font-semibold text-ink transition-colors hover:border-steel/35 hover:text-steel active:scale-[0.98]"
        >
          More in {product.category}
        </Link>
      </div>
    </motion.div>
  );
}
