import { type RefObject } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap";

function fromVars(kind: string) {
  switch (kind) {
    case "left":
      return { opacity: 0, x: -72, rotate: -1.5 };
    case "right":
      return { opacity: 0, x: 72, rotate: 1.5 };
    case "scale":
      return { opacity: 0, scale: 0.86 };
    case "fade":
      return { opacity: 0 };
    case "clip":
      return {
        opacity: 0,
        clipPath: "inset(18% 12% 18% 12% round 1.35rem)",
        scale: 1.12,
      };
    case "blur-up":
      return { opacity: 0, y: 48, filter: "blur(10px)" };
    default:
      return { opacity: 0, y: 64 };
  }
}

/** One-shot scroll reveals per section — no scrub or parallax. */
export function useSectionReveal(ref: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const headers = gsap.utils.toArray<HTMLElement>("[data-reveal-header]", root);
        headers.forEach((header) => {
          const parts = header.querySelectorAll(":scope > *");
          if (!parts.length) return;
          gsap.from(parts, {
            opacity: 0,
            y: 48,
            duration: 0.95,
            stagger: 0.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: header,
              start: "top 88%",
              once: true,
            },
          });
        });

        const items = gsap.utils.toArray<HTMLElement>("[data-reveal]", root);
        items.forEach((el) => {
          const kind = el.dataset.reveal || "up";
          gsap.from(el, {
            ...fromVars(kind),
            duration: kind === "clip" ? 1.2 : kind === "blur-up" ? 1.05 : 0.95,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
            },
          });
        });

        const groups = gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]", root);
        groups.forEach((group) => {
          const children = group.children;
          if (!children.length) return;
          gsap.from(children, {
            opacity: 0,
            y: 56,
            scale: 0.94,
            duration: 0.85,
            stagger: { each: 0.1, from: "start" },
            ease: "power4.out",
            scrollTrigger: {
              trigger: group,
              start: "top 88%",
              once: true,
            },
          });
        });

        requestAnimationFrame(() => ScrollTrigger.refresh());
      });

      return () => mm.revert();
    },
    { scope: ref, dependencies: [] },
  );
}
