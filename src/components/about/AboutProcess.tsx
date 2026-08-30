import { useRef } from "react";
import { processSteps } from "../../data/about-data";
import { useSectionReveal } from "../../hooks/useSectionReveal";
import { IconCopyBlock } from "../ui/IconTitle";

export default function AboutProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section ref={sectionRef} className="about-ground-canvas relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
        <div data-reveal-header className="max-w-2xl">
          <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-steel">
            From farm to table
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
            A clear path behind every bottle, tin, and pouch: raise and source, make with care, finish
            and pack, then reach the table.
          </p>
        </div>

        <ol className="relative mt-14 md:mt-16">
          <div
            className="absolute left-[1.35rem] top-4 hidden h-[calc(100%-2rem)] w-px bg-steel/20 md:left-0 md:block md:h-0.5 md:w-full md:translate-y-8"
            aria-hidden="true"
          />
          <div
            data-reveal-stagger
            className="grid gap-10 md:grid-cols-4 md:gap-6"
          >
            {processSteps.map(({ title, body, icon }, i) => (
              <li key={title} className="relative md:pt-10">
                <span className="font-display text-4xl font-semibold tracking-[-0.04em] text-steel/25 md:absolute md:left-0 md:top-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-3 border-l-2 border-steel/25 pl-6 md:mt-8 md:border-l-0 md:pl-0">
                  <IconCopyBlock
                    body={body}
                    icon={icon}
                    title={title}
                    bodyClassName="mt-2 text-[0.98rem] leading-relaxed text-ink-soft"
                    titleClassName="font-display text-lg font-semibold tracking-[-0.02em] text-ink"
                  />
                </div>
              </li>
            ))}
          </div>
        </ol>
      </div>
    </section>
  );
}
