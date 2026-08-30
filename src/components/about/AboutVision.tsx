import { useRef } from "react";
import { visionNotes } from "../../data/about-data";
import { useSectionReveal } from "../../hooks/useSectionReveal";

export default function AboutVision() {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section ref={sectionRef} className="about-ground-canvas relative bg-canvas py-24 md:py-32">
      <div className="mx-auto max-w-[900px] px-5 md:px-10">
        <blockquote data-reveal="blur-up" className="text-center">
          <p className="font-display text-[clamp(1.85rem,4.2vw,2.85rem)] font-semibold leading-[1.14] tracking-[-0.035em] text-ink">
            High-quality Himalayan foods, made with{" "}
            <span className="text-steel">innovative methods</span>, shared locally and globally to
            help reduce Nepal&apos;s trade deficit.
          </p>
        </blockquote>

        <div className="mt-12 space-y-4 text-center md:mt-14">
          <p className="text-[1.05rem] leading-relaxed text-ink-soft">
            We grow and source across Nepal to support our community, then finish each batch with
            traditional craft and contemporary standards.
          </p>
          <p className="text-[1.05rem] leading-relaxed text-ink-soft">
            Local resources. Modern methods. One farm you can trust when you open the pack.
          </p>
        </div>

        <div
          data-reveal-stagger
          className="mt-16 grid gap-8 border-t border-ink/10 pt-12 sm:grid-cols-3"
        >
          {visionNotes.map(({ num, label, body }) => (
            <div key={label} className="text-left sm:text-center">
              <span className="font-mono text-xs font-medium text-steel">{num}</span>
              <p className="mt-2 font-display text-xl font-semibold text-ink">{label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
