import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import { gsap, useGSAP } from "../../lib/gsap";

const groups = [
  {
    heading: "From the dairy",
    items: ["Dairy", "Tea and Coffee"],
  },
  {
    heading: "Dried and cured",
    items: ["Dried Meat", "Dried Goods", "Titaura", "Achar"],
  },
  {
    heading: "Milled and ground",
    items: ["Flours", "Grains", "Sattu", "Seeds", "Masala"],
  },
];

export default function KitchenIndex() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".kitchen-group", {
        y: 24,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h2 className="font-display text-[clamp(2.1rem,4.4vw,3.5rem)] leading-[1.02] font-extrabold tracking-[-0.035em] text-pine">
              Twelve kitchens.
            </h2>
            <p className="font-sans mt-4 max-w-[30ch] text-base leading-[1.7] text-pine/60">
              Each one runs its own line, from milk on the pasture to timur in the grinder.
            </p>
            <Link
              to="/products"
              className="font-display mt-7 inline-flex cursor-pointer items-center gap-2 text-[15px] font-extrabold text-steel hover:text-steel-deep"
            >
              Browse all 108
              <ArrowUpRight size={16} weight="bold" />
            </Link>
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-3 lg:col-span-8">
            {groups.map((g) => (
              <div key={g.heading} className="kitchen-group">
                <p className="font-sans border-b border-pine/15 pb-3 text-[13px] font-semibold text-pine/50">
                  {g.heading}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((name) => (
                    <li key={name}>
                      <Link
                        to="/products"
                        className="font-display inline-block cursor-pointer text-[clamp(1.25rem,1.9vw,1.7rem)] leading-tight font-extrabold tracking-[-0.02em] text-pine transition-colors hover:text-steel"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
