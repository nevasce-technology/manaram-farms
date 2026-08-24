const recipes = [
  {
    title: "Warm milk with crushed cardamom",
    steps: "Heat milk until it steams. Crush two pods, stir, rest one minute. Drink from a cup you like.",
  },
  {
    title: "Yogurt on steamed rice",
    steps: "Salt the yogurt lightly. Spoon over hot rice. Add a spoon of ghee if the plate needs it.",
  },
  {
    title: "Paneer with black pepper",
    steps: "Cube the paneer. Sear in ghee until the edges brown. Finish with coarse pepper.",
  },
];

export default function Recipes() {
  return (
    <main className="bg-paper pt-28 pb-24 md:pt-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-pine md:text-6xl">
          Three things to cook tonight
        </h1>
        <p className="font-sans mt-5 max-w-[65ch] text-lg leading-[1.65] text-ink/75">
          Short methods. No shopping list longer than what you already bought from us.
        </p>

        <ol className="mt-16 max-w-3xl divide-y divide-pine/10">
          {recipes.map((recipe, index) => (
            <li key={recipe.title} className="grid gap-3 py-10 md:grid-cols-[3rem_1fr]">
              <p className="text-sm font-semibold text-steel">{index + 1}</p>
              <div>
                <h2 className="font-display text-2xl font-extrabold text-pine">{recipe.title}</h2>
                <p className="font-sans mt-3 max-w-[65ch] leading-[1.65] text-ink/75">{recipe.steps}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
