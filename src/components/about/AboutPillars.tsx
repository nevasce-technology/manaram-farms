import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";
import { pillars } from "../../data/about-data";
import { useSectionReveal } from "../../hooks/useSectionReveal";
import { HoverIcon } from "../ui/HoverIcon";

function PillarCard({
  title,
  body,
  points,
  icon,
  image,
  imageAlt,
}: (typeof pillars)[number]) {
  const rootRef = useRef<HTMLLIElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const root = rootRef.current;
      const image = imageRef.current;
      if (!root || !image || !contextSafe) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(image, { scale: 1 });
        const enter = contextSafe(() => {
          gsap.to(image, { scale: 1.06, duration: 0.55, ease: "power3.out", overwrite: "auto" });
        });
        const leave = contextSafe(() => {
          gsap.to(image, { scale: 1, duration: 0.45, ease: "power3.inOut", overwrite: "auto" });
        });
        root.addEventListener("pointerenter", enter);
        root.addEventListener("pointerleave", leave);
        return () => {
          root.removeEventListener("pointerenter", enter);
          root.removeEventListener("pointerleave", leave);
        };
      });
      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <li ref={rootRef} className="group [perspective:1000px]">
      <div
        data-reveal="clip"
        className="overflow-hidden rounded-[1.35rem] bg-mist will-change-transform"
      >
        <img
          ref={imageRef}
          src={image}
          alt={imageAlt}
          className="aspect-[4/3] w-full origin-center object-cover will-change-transform"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="px-1 pt-6">
        <HoverIcon
          className="flex cursor-default items-center gap-3"
          icon={icon}
          iconClassName="shrink-0 text-steel transition-colors duration-300 group-hover:text-steel-soft"
          size={22}
        >
          <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-steel">
            {title}
          </h3>
        </HoverIcon>
        <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-soft">{body}</p>
        <p className="mt-3 text-sm text-ink-soft/80">{points}</p>
      </div>
    </li>
  );
}

export default function AboutPillars() {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section ref={sectionRef} className="about-ground-white relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
        <div data-reveal-header className="max-w-2xl">
          <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-steel">
            How we make food worth trusting
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
            Three commitments behind every product that leaves Baluwatar: tradition, innovation, and
            nutrition working as one.
          </p>
        </div>

        <ul data-reveal-stagger className="mt-14 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} {...pillar} />
          ))}
        </ul>
      </div>
    </section>
  );
}
