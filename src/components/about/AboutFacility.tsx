import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import { gsap, useGSAP } from "../../lib/gsap";
import { facilityCheckpoints, facilityMeta } from "../../data/about-data";
import { useSectionReveal } from "../../hooks/useSectionReveal";
import { IconCopyBlock } from "../ui/IconTitle";
import { SplitMediaImage, SplitMediaLayout } from "../ui/SplitMediaLayout";

function CheckpointRow({
  title,
  body,
  icon,
}: (typeof facilityCheckpoints)[number]) {
  const rowRef = useRef<HTMLLIElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const row = rowRef.current;
      if (!row || !contextSafe) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(row, { x: 0 });
        const enter = contextSafe(() => {
          gsap.to(row, { x: 6, duration: 0.28, ease: "power2.out", overwrite: "auto" });
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
    <li ref={rowRef} className="border-b border-ink/8 py-6 last:border-b-0">
      <IconCopyBlock
        body={body}
        icon={icon}
        title={title}
        bodyClassName="mt-2 text-[0.98rem] leading-relaxed text-ink-soft"
        titleClassName="font-display text-lg font-semibold tracking-[-0.02em] text-ink"
      />
    </li>
  );
}

export default function AboutFacility() {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="about-ground-canvas relative border-y border-ink/8 bg-canvas py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
        <SplitMediaLayout
          media={
            <SplitMediaImage
              alt="Bright daylight over stainless steel dairy tanks at Manaram Farm"
              src="/landing/about-facility.jpg"
              loading="lazy"
            />
          }
          contentAlign="start"
        >
          <div data-reveal-header>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-steel">
              Baluwatar facility
            </p>
            <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.75rem,3.2vw,2.35rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
              Built in Baluwatar for clean, consistent dairy
            </h2>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
              Since 2014 we have worked to utilize and promote local resources across Nepal. From milk
              and ghee to pickles, dried meats, and pantry staples, everything starts on our farm and
              moves through a facility designed for care at every step.
            </p>
          </div>

          <ul className="mt-10">
            {facilityCheckpoints.map((item) => (
              <CheckpointRow key={item.title} {...item} />
            ))}
          </ul>
        </SplitMediaLayout>

        <div
          data-reveal="fade"
          className="mt-14 flex flex-col gap-8 border-t border-ink/10 pt-10 md:flex-row md:items-end md:justify-between"
        >
          <dl className="grid w-full max-w-2xl gap-6 sm:grid-cols-3">
            {facilityMeta.map(([label, value]) => (
              <div key={label}>
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  {label}
                </dt>
                <dd className="mt-1.5 text-[15px] font-medium leading-snug text-ink">{value}</dd>
              </div>
            ))}
          </dl>
          <Link
            to="/products"
            className="group inline-flex min-h-11 shrink-0 items-center gap-2 text-[15px] font-semibold text-steel transition-colors hover:text-steel-deep"
          >
            See what we make
            <ArrowUpRight
              size={16}
              weight="bold"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
