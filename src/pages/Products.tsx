import { useRef } from "react";
import { usePageReveal } from "../hooks/usePageReveal";

const products = [
  {
    id: "milk",
    name: "Whole milk",
    copy: "Full-fat milk, bottled cold. Best within three days of the stamp on the cap.",
  },
  {
    id: "yogurt",
    name: "Set yogurt",
    copy: "Cultured in small batches. Eat it plain, or with fruit from your own kitchen.",
  },
  {
    id: "ghee",
    name: "Cultured ghee",
    copy: "Butter slowly clarified until it smells like toasted milk solids, then jarred.",
  },
  {
    id: "paneer",
    name: "Fresh paneer",
    copy: "Pressed the morning you buy it. Soft enough to crumble, firm enough to fry.",
  },
];

export default function Products() {
  const root = useRef<HTMLElement>(null);
  usePageReveal(root);

  return (
    <main ref={root} className="bg-paper pt-28 pb-24 md:pt-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <h1 className="font-display max-w-2xl text-4xl font-extrabold tracking-tight text-pine md:text-6xl">
          Dairy we actually make
        </h1>
        <p className="font-sans mt-5 max-w-[65ch] text-lg leading-[1.65] text-ink/75">
          Stock moves with the herd. If a tray is empty, it did not make the morning run.
        </p>

        <ul className="mt-16 divide-y divide-pine/10">
          {products.map((item) => (
            <li id={item.id} key={item.id} className="scroll-mt-28 py-10 md:grid md:grid-cols-12 md:gap-8">
              <h2 className="font-display text-2xl font-extrabold text-pine md:col-span-4">{item.name}</h2>
              <p className="font-sans mt-3 max-w-[65ch] leading-[1.65] text-ink/75 md:col-span-7 md:mt-0">
                {item.copy}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
