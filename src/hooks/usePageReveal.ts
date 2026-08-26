import { type RefObject } from "react";
import { prefersReducedMotion } from "../lib/anim";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";

/**
 * Soft clip-up for inner pages, plus batched list / section reveals.
 */
export function usePageReveal(root: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const title = el.querySelector("h1");
      const lead = el.querySelector("h1 + p");
      const items = el.querySelectorAll("li, form > label, form > button, section");

      if (prefersReducedMotion()) {
        gsap.set([title, lead, items], { clearProps: "all" });
        return;
      }

      if (title) {
        gsap.from(title, {
          y: 40,
          autoAlpha: 0,
          duration: 0.75,
          ease: "power3.out",
        });
      }

      if (lead) {
        gsap.from(lead, {
          y: 24,
          autoAlpha: 0,
          duration: 0.6,
          delay: 0.1,
          ease: "power2.out",
        });
      }

      if (items.length) {
        gsap.set(items, { autoAlpha: 0, y: 28 });

        ScrollTrigger.batch(items, {
          start: "top 90%",
          once: true,
          interval: 0.12,
          batchMax: 4,
          onEnter: (batch) => {
            gsap.to(batch, {
              y: 0,
              autoAlpha: 1,
              duration: 0.55,
              stagger: 0.06,
              ease: "power2.out",
              overwrite: true,
            });
          },
        });
      }
    },
    { scope: root },
  );
}
