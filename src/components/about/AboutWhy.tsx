import { useRef } from "react";
import { reasons } from "../../data/about-data";
import { useSectionReveal } from "../../hooks/useSectionReveal";
import { HoverIcon } from "../ui/HoverIcon";

export default function AboutWhy() {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  const featured = reasons.find((r) => r.featured)!;
  const rest = reasons.filter((r) => !r.featured);

  return (
    <section ref={sectionRef} className="about-ground-canvas relative bg-canvas py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
        <div data-reveal-header className="max-w-2xl">
          <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-steel">
            Why choose Manaram Farm products?
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
            We do more than grow. We care. Every product reflects our commitment to quality, health,
            and the people who cook with us.
          </p>
        </div>

        <div
          data-reveal="fade"
          className="mt-12 rounded-[1.35rem] bg-steel px-8 py-10 md:mt-16 md:px-12 md:py-14"
        >
          <HoverIcon
            className="flex cursor-default items-center gap-3"
            icon={featured.icon}
            iconClassName="shrink-0 text-white/90"
            size={24}
          >
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/70">
              Featured
            </p>
          </HoverIcon>
          <blockquote className="mt-4 max-w-3xl font-display text-[clamp(1.5rem,3vw,2.15rem)] font-semibold leading-[1.18] tracking-[-0.03em] text-white">
            {featured.title}
          </blockquote>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-white/78">
            {featured.body}
          </p>
        </div>

        <ul
          data-reveal-stagger
          className="mt-10 grid gap-8 sm:grid-cols-2 md:mt-14 md:gap-x-12 md:gap-y-10"
        >
          {rest.map(({ title, body, icon }) => (
            <li key={title} className="group">
              <HoverIcon
                className="flex cursor-default items-start gap-3"
                icon={icon}
                iconClassName="mt-0.5 shrink-0 text-steel transition-colors duration-300 group-hover:text-steel-soft"
                size={22}
              >
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-steel">
                    {title}
                  </h3>
                  <p className="mt-2 text-[0.98rem] leading-relaxed text-ink-soft">{body}</p>
                </div>
              </HoverIcon>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
