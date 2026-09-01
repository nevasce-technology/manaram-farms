import { useEffect, useState } from "react";
import { Play } from "@phosphor-icons/react";
import type { Recipe } from "../../data/recipes-data";
import { youtubeEmbedUrl, youtubeThumbUrl } from "../../data/recipes-data";

type RecipePlayerProps = {
  recipe: Recipe;
};

export default function RecipePlayer({ recipe }: RecipePlayerProps) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(false);
  }, [recipe.youtubeId]);

  if (!playing) {
    return (
      <button
        type="button"
        onClick={() => setPlaying(true)}
        className="recipe-player-poster group relative block h-full w-full"
        aria-label={`Play ${recipe.title}`}
      >
        <img
          src={youtubeThumbUrl(recipe.youtubeId)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="recipe-player-poster__scrim absolute inset-0" aria-hidden="true" />
        <span className="recipe-player-poster__play absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <Play size={28} weight="fill" aria-hidden="true" />
        </span>
      </button>
    );
  }

  return (
    <iframe
      key={recipe.youtubeId}
      src={`${youtubeEmbedUrl(recipe.youtubeId)}&autoplay=1`}
      title={recipe.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="absolute inset-0 h-full w-full border-0"
    />
  );
}
