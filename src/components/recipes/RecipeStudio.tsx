import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, YoutubeLogo } from "@phosphor-icons/react";
import type { Recipe } from "../../data/recipes-data";
import { MANAKO_KITCHEN_URL, RECIPES } from "../../data/recipes-data";
import { prefersReducedMotion } from "../../lib/anim";
import { gsap, useGSAP } from "../../lib/gsap";
import RecipePlayer from "./RecipePlayer";

type RecipeStudioProps = {
  recipe: Recipe;
  productName?: string;
};

export default function RecipeStudio({ recipe, productName }: RecipeStudioProps) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current) return;

      gsap.from(".recipe-studio-intro > *", {
        y: 16,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: "power3.out",
      });

      gsap.from(".recipe-studio-stage", {
        y: 20,
        autoAlpha: 0,
        duration: 0.7,
        delay: 0.05,
        ease: "power3.out",
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="recipe-player"
      className="recipe-studio recipe-studio-hero relative flex min-h-[100dvh] max-h-[100dvh] flex-col overflow-hidden pt-24 scroll-mt-28"
    >
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-soft-light" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-16 top-8 h-64 w-64 rounded-full bg-white/12 blur-3xl"
        aria-hidden="true"
      />

      <div className="recipe-studio-shell relative mx-auto flex min-h-0 w-full max-w-[1400px] flex-1 flex-col px-5 pb-5 md:px-10 md:pb-6 xl:px-14">
        <div className="recipe-studio-intro flex shrink-0 flex-col gap-4 pt-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8 md:pt-5 md:gap-10">
          <div className="max-w-lg">
            <h1 className="font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-semibold leading-[1.06] tracking-[-0.04em] text-white">
              Farm kitchen videos
            </h1>
            <p className="mt-2 max-w-[36ch] text-sm leading-relaxed text-white/76 md:mt-2.5 md:text-base">
              {RECIPES.length} guides for cooking with Mana Ko products at home in Jhapa.
            </p>
          </div>
          <a
            href={MANAKO_KITCHEN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="recipe-studio-channel recipe-studio-channel--hero group inline-flex min-h-11 shrink-0 items-center gap-2 self-start sm:self-auto"
          >
            <YoutubeLogo size={18} weight="fill" aria-hidden="true" />
            <span>Mana Ko Kitchen</span>
            <ArrowUpRight
              size={15}
              weight="bold"
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <div className="recipe-studio-stage mt-4 flex min-h-0 flex-1 flex-col md:mt-5">
          <div className="recipe-studio-media">
            <div className="recipe-studio-frame overflow-hidden rounded-2xl bg-hero-night">
              <RecipePlayer recipe={recipe} />
            </div>
          </div>

          <div key={recipe.id} className="recipe-studio-meta mt-4 shrink-0 border-t border-ink/8 pt-4 md:mt-5 md:pt-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <h2 className="font-display text-[clamp(1rem,1.8vw,1.35rem)] font-semibold leading-snug tracking-[-0.03em] text-ink">
                {recipe.title}
              </h2>
              {recipe.productSlug && productName ? (
                <Link
                  to={`/products/${recipe.productSlug}`}
                  className="recipe-studio-shop inline-flex shrink-0 items-center gap-2 self-start sm:self-center"
                >
                  <span>Shop {productName}</span>
                  <ArrowRight size={16} weight="bold" aria-hidden="true" />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
