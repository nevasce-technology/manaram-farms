import { useMemo, useState } from "react";
import HomeFooter from "../components/home/HomeFooter";
import RecipeGrid from "../components/recipes/RecipeGrid";
import RecipeStudio from "../components/recipes/RecipeStudio";
import { CATALOG_PRODUCTS } from "../data/catalog";
import { RECIPES, recipeById } from "../data/recipes-data";

export default function Recipes() {
  const [selectedId, setSelectedId] = useState(RECIPES[0]?.id ?? "");

  const activeRecipe = useMemo(
    () => recipeById(selectedId) ?? RECIPES[0],
    [selectedId],
  );

  const productName = useMemo(() => {
    if (!activeRecipe?.productSlug) return undefined;
    return CATALOG_PRODUCTS.find((product) => product.slug === activeRecipe.productSlug)?.name;
  }, [activeRecipe]);

  function handleSelect(id: string) {
    setSelectedId(id);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (window.matchMedia("(max-width: 767px)").matches) {
      document.getElementById("recipe-player")?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  }

  return (
    <>
      <main className="bg-canvas">
        <RecipeStudio recipe={activeRecipe} productName={productName} />
        <RecipeGrid recipes={RECIPES} activeId={activeRecipe.id} onSelect={handleSelect} />
      </main>
      <HomeFooter />
    </>
  );
}
