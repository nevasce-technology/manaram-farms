"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ProductHighlight } from "../../utils/parseProductDescription";
import { pickBenefitIcon } from "./ProductTraitGrid";

type ProductDetailHighlightsProps = {
  items: ProductHighlight[];
};

function gridClass(count: number) {
  if (count <= 1) return "pdp-highlight-grid pdp-highlight-grid--one";
  if (count === 2) return "pdp-highlight-grid pdp-highlight-grid--two";
  if (count === 3) return "pdp-highlight-grid pdp-highlight-grid--three";
  return "pdp-highlight-grid pdp-highlight-grid--four";
}

export default function ProductDetailHighlights({ items }: ProductDetailHighlightsProps) {
  const reduce = useReducedMotion();
  if (!items.length) return null;

  return (
    <motion.section
      className="pdp-highlights"
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="pdp-highlights__inner mx-auto max-w-[1240px] px-5 md:px-8 lg:px-10">
        <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.03em] text-white">
          What makes it special
        </h2>

        <ul className={`${gridClass(items.length)} pdp-highlight-grid`}>
          {items.map((item) => {
            const Icon = pickBenefitIcon(item.title, item.body);

            return (
              <li key={item.title} className="pdp-highlight-card">
                <span className="pdp-highlight-card__icon">
                  <Icon size={22} weight="duotone" aria-hidden="true" />
                </span>
                <p className="mt-4 font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-ink">
                  {item.title}
                </p>
                {item.body ? (
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.section>
  );
}
