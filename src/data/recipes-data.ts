export type Recipe = {
  id: string;
  title: string;
  youtubeId: string;
  productSlug?: string;
};

/** Sourced from https://manaram.farm/recepies/ Elementor YouTube embeds. */
export const RECIPES: Recipe[] = [
  {
    id: "chicken-ghee-momo",
    title: "Chicken Ghee Momo with Mana Ko Ghee",
    youtubeId: "NSLtUJKyOaE",
    productSlug: "mana-ko-ghee",
  },
  {
    id: "butter-cookie",
    title: "Butter Cookie Recipe with Mana Ko Butter",
    youtubeId: "aA0u6ISd1ZA",
    productSlug: "mana-ko-butter",
  },
  {
    id: "nepali-sukuti",
    title: "Nepali Style Sukuti with Sahi Sukuti",
    youtubeId: "UcT9NpgEglM",
    productSlug: "sahi-sukuti-the-original",
  },
  {
    id: "ice-ade-juice",
    title: "ManaKo Ice Ade Juice",
    youtubeId: "Fxwwih91zCE",
  },
  {
    id: "vanilla-muffins",
    title: "Easy Vanilla Muffins Recipe",
    youtubeId: "JA4ZsD36Ub8",
    productSlug: "mana-ko-butter",
  },
  {
    id: "crispy-corn",
    title: "Crispy Corn Recipe",
    youtubeId: "SKrJp8BWaLc",
  },
  {
    id: "chicken-dum",
    title: "Chicken Dum Recipe",
    youtubeId: "KdePnguxdbY",
  },
  {
    id: "thicheko-aalu",
    title: "Thicheko Aalu Recipe",
    youtubeId: "Nh0aT2ReCsI",
  },
  {
    id: "gajar-ko-halwa",
    title: "Gajar Ko Halwa",
    youtubeId: "7xKq41vD4X8",
    productSlug: "mana-ko-ghee",
  },
];

export const MANAKO_KITCHEN_URL = "https://www.youtube.com/@ManaKoKitchen";

export function recipeById(id: string): Recipe | undefined {
  return RECIPES.find((recipe) => recipe.id === id);
}

export function youtubeEmbedUrl(id: string): string {
  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
}

export function youtubeThumbUrl(id: string): string {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}
