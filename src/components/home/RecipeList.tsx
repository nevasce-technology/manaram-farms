import { Link } from "react-router-dom";
import { useRef } from "react";
import { RECIPES } from "../../data/recipes-data";
import { gsap, useGSAP } from "../../lib/gsap";

export default function RecipeList() {
  const root = useRef<HTMLElement>(null);
  const preview = RECIPES.slice(0, 6);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".recipe-row", {
        y: 12,
        autoAlpha: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: { trigger: root.current, start: "top 82%", once: true },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="border-t border-pine/10 bg-paper py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-pine md:text-4xl">
            Recipes
          </h2>
          <Link
            to="/recipes"
            className="font-display cursor-pointer text-sm font-extrabold text-steel hover:text-steel-deep"
          >
            Watch all videos
          </Link>
        </div>

        <ol className="mt-8 divide-y divide-pine/10 border-y border-pine/10">
          {preview.map((recipe, i) => (
            <li key={recipe.id}>
              <Link
                to="/recipes"
                className="recipe-row group flex cursor-pointer items-baseline gap-6 py-5 md:py-6"
              >
                <span className="font-sans w-8 shrink-0 text-xs tabular-nums text-ink/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-sans flex-1 text-base text-ink/80 transition-colors group-hover:text-steel md:text-lg">
                  {recipe.title}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
