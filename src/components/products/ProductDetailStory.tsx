"use client";

import { motion, useReducedMotion } from "motion/react";

type ProductDetailStoryProps = {
  text: string | null;
};

export default function ProductDetailStory({ text }: ProductDetailStoryProps) {
  const reduce = useReducedMotion();
  if (!text) return null;

  return (
    <motion.section
      className="pdp-story"
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 lg:px-10">
        <p className="max-w-[62ch] text-[1.0625rem] leading-[1.75] text-ink/80">{text}</p>
      </div>
    </motion.section>
  );
}
