import { useRef } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { stats } from "../../data/about-data";
import { prefersReducedMotion } from "../../lib/anim";
import { gsap, useGSAP } from "../../lib/gsap";

export default function AboutHero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current) return;

      const ctx = gsap.context(() => {
        gsap.from(".about-hero-word", {
          yPercent: 110,
          duration: 1,
          stagger: 0.08,
          ease: "power4.out",
          delay: 0.06,
          clearProps: "transform",
        });
        gsap.from(".about-hero-sub", {
          y: 18,
          autoAlpha: 0,
          duration: 0.75,
          ease: "power3.out",
          delay: 0.28,
          clearProps: "all",
        });
        gsap.from(".about-stat", {
          y: 20,
          autoAlpha: 0,
          duration: 0.55,
          stagger: 0.07,
          ease: "power3.out",
          delay: 0.42,
          clearProps: "all",
        });
      }, root);

      return () => ctx.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="about-hero relative isolate flex min-h-[100dvh] flex-col overflow-hidden bg-ink"
    >
      <div className="relative min-h-0 flex-1">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-[-4%]">
            <img
              src="/landing/about-hero.jpg"
              alt="Sunny Himalayan pasture with dairy cows grazing under a clear blue sky"
              className="absolute inset-0 h-full w-full object-cover object-[66%_34%] sm:object-[70%_32%] lg:object-[74%_30%]"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
        <div className="about-hero-scrim absolute inset-0" aria-hidden="true" />
        <div className="about-hero-vignette absolute inset-0" aria-hidden="true" />
        <div className="about-hero-floor absolute inset-x-0 bottom-0 h-[18%]" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex h-full min-h-[52vh] max-w-[1400px] flex-col justify-end px-5 pb-11 pt-28 md:min-h-[58vh] md:px-10 md:pb-14 md:pt-32 xl:px-14">
          <div className="grid w-full items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5 xl:col-span-4">
              <p className="about-hero-sub text-sm font-semibold uppercase tracking-[0.16em] text-white/72">
                Manaram Farm · Kathmandu
              </p>
              <h1 className="mt-4 font-display text-[clamp(2.85rem,7.5vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
                <span className="block overflow-hidden pb-1">
                  <span className="about-hero-word inline-block whitespace-nowrap will-change-transform">
                    Our story
                  </span>
                </span>
              </h1>
              <p className="about-hero-sub mt-5 max-w-[22rem] text-[1.05rem] leading-relaxed text-white/88 md:max-w-md md:text-lg">
                Local resources. Modern dairy. High-quality foods for tables across Nepal.
              </p>
              <a
                href="#about-origin"
                className="about-hero-sub group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-steel transition-colors hover:bg-canvas active:scale-[0.98]"
              >
                Meet the farm
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="about-stats relative z-10 shrink-0 border-t border-ink/10 bg-white">
        <dl className="mx-auto flex max-w-[1400px] flex-col divide-y divide-ink/8 sm:flex-row sm:divide-x sm:divide-y-0">
          {stats.map(({ label, value, note }) => (
            <div key={label} className="about-stat flex-1 px-5 py-6 md:px-8 md:py-7 xl:px-10">
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ink-soft">
                {label}
              </dt>
              <dd className="mt-2 font-display text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-[-0.03em] text-steel">
                {value}
              </dd>
              <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-ink-soft">{note}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
