import { useRef } from "react";
import { usePageReveal } from "../hooks/usePageReveal";

export default function About() {
  const root = useRef<HTMLElement>(null);
  usePageReveal(root);

  return (
    <main ref={root} className="bg-paper pt-28 pb-24 md:pt-32">
      <article className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-pine md:text-6xl">
            The herd comes first.
          </h1>
          <p className="font-sans mt-6 max-w-[65ch] text-lg leading-[1.65] text-ink/80">
            Manaram Farms is a family dairy. Cattle graze the valley you saw on the home page.
            We keep the operation small enough that every bottle can be traced to a morning.
          </p>
        </div>

        <div className="mt-20 grid gap-16 md:grid-cols-2">
          <section>
            <h2 className="font-display text-2xl font-extrabold text-pine">How we work</h2>
            <p className="font-sans mt-4 max-w-[65ch] leading-[1.65] text-ink/75">
              Pasture in daylight. Milking on a fixed schedule. Cooling before the sun gets high.
              Nothing here is dressed up as a lifestyle brand. It is a farm with a shop window.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-extrabold text-pine">What we will not invent</h2>
            <p className="font-sans mt-4 max-w-[65ch] leading-[1.65] text-ink/75">
              No fake awards, no borrowed testimonials. When we publish hours, prices, or
              certifications, they will come from the farm, not from placeholder copy.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
