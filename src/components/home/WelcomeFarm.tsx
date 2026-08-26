import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";

/**
 * Spatial thesis
 * Path: title → (photo | intro) → craft | belief quote
 * Groups: photo+intro; craft+quote
 * Lead: title + photo; support: prose
 */
export default function WelcomeFarm() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const els = gsap.utils.toArray<HTMLElement>(".welcome-rise");
      if (!els.length) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(els, { autoAlpha: 1, clearProps: "transform" });
        return;
      }

      gsap.set(els, { autoAlpha: 1 });

      gsap.from(els, {
        y: 16,
        autoAlpha: 0,
        duration: 0.48,
        stagger: 0.05,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: root.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="farm-intro"
      className="welcome-section relative overflow-hidden bg-white px-5 pt-24 pb-24 sm:px-8 md:px-10 md:pt-28 md:pb-28 lg:px-12"
      aria-labelledby="welcome-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 15% 45%, color-mix(in srgb, var(--color-mist) 45%, transparent), transparent 72%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1100px]">
        <h2
          id="welcome-heading"
          className="welcome-rise font-display mb-14 whitespace-nowrap text-center text-[clamp(1.65rem,5.4vw,4.5rem)] leading-[1.05] font-extrabold tracking-[-0.035em] text-steel md:mb-16"
        >
          Welcome To Manaram Farm
        </h2>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-16 lg:gap-20 xl:gap-24">
          <figure className="welcome-rise relative mx-auto w-full max-w-[22rem] md:mx-0 md:max-w-none">
            <div
              className="welcome-shape-ghost absolute -inset-[6%] translate-x-2 translate-y-3 bg-mist/60"
              aria-hidden
            />
            <div className="welcome-shape relative aspect-square overflow-hidden bg-mist shadow-[0_24px_48px_-24px_rgb(4_40_63_/_0.3)]">
              <img
                src="/welcome-cows.jpg"
                alt="Dairy cows at Manaram Farm"
                className="absolute inset-0 h-full w-full object-cover object-[center_32%]"
                width={800}
                height={800}
              />
            </div>
          </figure>

          <div className="welcome-rise flex flex-col justify-center gap-5 md:gap-6">
            <p className="font-sans text-[clamp(1.05rem,1.8vw,1.35rem)] leading-[1.55] text-ink">
              Manaram Farm was established with a clear vision: to harness the richness of local
              resources and transform them into high-quality, wholesome products for everyday life.
            </p>
            <p className="font-sans text-[clamp(1.05rem,1.8vw,1.35rem)] leading-[1.55] text-ink">
              Through our diverse range of brands, we develop and deliver FMCG products that combine
              quality, taste, and convenience, meeting the evolving needs of modern consumers.
            </p>
          </div>
        </div>

        <div className="welcome-rise mt-12 grid grid-cols-1 items-stretch gap-8 border-t border-steel/10 pt-12 md:mt-14 md:grid-cols-2 md:gap-10 md:pt-14 lg:gap-12">
          <p className="font-sans self-center text-[clamp(1.05rem,1.8vw,1.35rem)] leading-[1.55] text-ink md:pr-2">
            We carefully select the finest raw materials and blend traditional knowledge with modern,
            innovative production techniques to create products that are delicious, nutritious, and
            made with care. Our commitment to quality and responsible production drives us to
            continuously improve and bring products that our customers can trust to their everyday
            lives.
          </p>

          <blockquote className="relative overflow-hidden rounded-[1.35rem] bg-mist px-7 py-8 shadow-[0_18px_40px_-22px_rgb(4_40_63_/_0.22)] md:px-8 md:py-9">
            <span
              className="font-display pointer-events-none absolute top-2 left-4 select-none text-[clamp(5.5rem,12vw,8.5rem)] leading-none font-extrabold text-steel/15"
              aria-hidden
            >
              “
            </span>
            <p className="font-display relative z-[1] pt-8 text-[clamp(1.2rem,2.2vw,1.55rem)] leading-[1.3] font-extrabold tracking-[-0.03em] text-pine">
              At Manaram Farm, we believe that the best products begin with the best resources,
              thoughtful processes, and a commitment to quality.
            </p>
            <span
              className="font-display pointer-events-none absolute right-5 bottom-0 select-none text-[clamp(4rem,9vw,6.5rem)] leading-none font-extrabold text-steel/12"
              aria-hidden
            >
              ”
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
