import { useRef } from "react";
import { Play } from "@phosphor-icons/react";
import type { Recipe } from "../../data/recipes-data";
import { RECIPES, youtubeThumbUrl } from "../../data/recipes-data";
import { prefersReducedMotion } from "../../lib/anim";
import { gsap, useGSAP } from "../../lib/gsap";

type RecipeGridProps = {
  recipes: Recipe[];
  activeId: string;
  onSelect: (id: string) => void;
};

export default function RecipeGrid({ recipes, activeId, onSelect }: RecipeGridProps) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current) return;

      gsap.from(".recipe-grid-item", {
        y: 16,
        autoAlpha: 0,
        duration: 0.45,
        stagger: 0.04,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 93%",
          once: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      aria-label="All recipe videos"
      className="recipe-grid-section border-t border-ink/8 bg-canvas"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20 xl:px-14">
        <h2 className="font-display text-lg font-semibold tracking-[-0.02em] text-ink md:text-xl">
          All recipes
        </h2>

        <div className="recipe-grid mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => {
            const active = recipe.id === activeId;
            return (
              <button
                key={recipe.id}
                type="button"
                onClick={() => onSelect(recipe.id)}
                aria-current={active ? "true" : undefined}
                aria-label={active ? `Now playing: ${recipe.title}` : `Play ${recipe.title}`}
                className={`recipe-grid-item group text-left ${active ? "recipe-grid-item--active" : ""}`}
              >
                <span className="recipe-grid-item__media relative block overflow-hidden">
                  <img
                    src={youtubeThumbUrl(recipe.youtubeId)}
                    alt={recipe.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {!active ? (
                    <span className="recipe-grid-item__play absolute inset-0 flex items-center justify-center">
                      <span className="recipe-grid-item__play-btn">
                        <Play size={20} weight="fill" aria-hidden="true" />
                      </span>
                    </span>
                  ) : null}
                </span>
                <span className="recipe-grid-item__copy">
                  {active ? <span className="recipe-grid-item__status">Now playing</span> : null}
                  <span className="recipe-grid-item__title font-display">{recipe.title}</span>
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-10 text-sm leading-relaxed text-ink-soft md:mt-12">
          {RECIPES.length} videos from the Mana Ko Kitchen channel.
        </p>
      </div>
    </section>
  );
}
