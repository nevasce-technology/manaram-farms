"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  formatNutritionAmount,
  formatNutritionDailyValue,
  type NutritionRow,
} from "../../utils/parseProductDescription";

type ProductDetailSpecsProps = {
  ingredients: string[];
  nutrition: NutritionRow[];
};

function formatNutrientLabel(name: string) {
  return name.replace(/^Total /, "");
}

export default function ProductDetailSpecs({ ingredients, nutrition }: ProductDetailSpecsProps) {
  const reduce = useReducedMotion();
  if (!ingredients.length && !nutrition.length) return null;

  return (
    <motion.section
      className="pdp-specs"
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 lg:px-10">
        <div className="pdp-specs__card">
          {ingredients.length > 0 ? (
            <div className="pdp-specs__ingredients">
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink md:text-2xl">
                Ingredients
              </h2>
              <div className="pdp-specs__body">
                <ul className="pdp-ingredient-grid">
                  {ingredients.map((item, index) => {
                    const isLastOdd =
                      index === ingredients.length - 1 && ingredients.length % 2 !== 0;

                    return (
                      <li
                        key={item}
                        className={`pdp-ingredient-tile ${isLastOdd ? "pdp-ingredient-tile--wide" : ""}`}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : null}

          {nutrition.length > 0 ? (
            <div className={`pdp-specs__nutrition ${ingredients.length > 0 ? "pdp-specs__nutrition--split" : ""}`}>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink md:text-2xl">
                Nutrition
              </h2>
              <p className="mt-2 text-sm text-ink-soft">Per serving, from pack label.</p>
              <div className="pdp-specs__body">
                <dl className="pdp-nutrition-grid">
                  {nutrition.map((row, index) => {
                    const amount = formatNutritionAmount(row.amount);
                    const dailyValue = formatNutritionDailyValue(row.dailyValue);
                    const isLastOdd =
                      index === nutrition.length - 1 && nutrition.length % 2 !== 0;

                    return (
                      <div
                        key={row.nutrient}
                        className={`pdp-nutrition-tile ${isLastOdd ? "pdp-nutrition-tile--wide" : ""}`}
                      >
                        <dt className="text-sm text-ink-soft">{formatNutrientLabel(row.nutrient)}</dt>
                        <dd className="mt-1 font-display text-xl font-semibold tracking-[-0.03em] text-ink sm:text-2xl">
                          {amount}
                        </dd>
                        <p className="mt-0.5 min-h-4 text-xs text-ink-soft">
                          {dailyValue
                            ? `${dailyValue} daily value`
                            : amount === "Not listed"
                              ? "Amount not on label"
                              : "\u00a0"}
                        </p>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </motion.section>
  );
}
