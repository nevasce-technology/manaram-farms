import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";
import { missions } from "../../data/about-data";
import { useSectionReveal } from "../../hooks/useSectionReveal";
import { IconCopyBlock } from "../ui/IconTitle";

function MissionRow({
  index,
  title,
  body,
  icon,
}: (typeof missions)[number] & { index: number }) {
  const rowRef = useRef<HTMLLIElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const row = rowRef.current;
      if (!row || !contextSafe) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(row, { x: 0 });
        const enter = contextSafe(() => {
          gsap.to(row, { x: 4, duration: 0.28, ease: "power2.out", overwrite: "auto" });
        });
        const leave = contextSafe(() => {
          gsap.to(row, { x: 0, duration: 0.28, ease: "power2.inOut", overwrite: "auto" });
        });
        row.addEventListener("pointerenter", enter);
        row.addEventListener("pointerleave", leave);
        return () => {
          row.removeEventListener("pointerenter", enter);
          row.removeEventListener("pointerleave", leave);
        };
      });
      return () => mm.revert();
    },
    { scope: rowRef },
  );

  return (
    <li
      ref={rowRef}
      className="grid gap-4 border-b border-ink/8 py-8 md:grid-cols-[3rem_1fr] md:gap-8 md:py-10"
    >
      <span className="font-mono text-sm font-medium text-steel">
        {String(index + 1).padStart(2, "0")}
      </span>
      <IconCopyBlock
        body={body}
        icon={icon}
        title={title}
        bodyClassName="mt-2 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft"
        titleClassName="font-display text-xl font-semibold tracking-[-0.02em] text-ink"
      />
    </li>
  );
}

export default function AboutMission() {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section ref={sectionRef} className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[900px] px-5 md:px-10">
        <div data-reveal-header className="max-w-xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-steel">
            Our mission
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.85rem,3.4vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-steel">
            Five commitments behind every batch
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
            How we farm, cook, hire, and ship — the work behind Mana Ko and every sister brand on the
            shelf.
          </p>
        </div>

        <ol className="mt-12 border-t border-ink/10">
          {missions.map((mission, i) => (
            <MissionRow key={mission.title} index={i} {...mission} />
          ))}
        </ol>
      </div>
    </section>
  );
}
