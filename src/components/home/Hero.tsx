import { Link } from "react-router-dom";
import { ArrowUpRight, Heart, SealCheck, ShieldCheck } from "@phosphor-icons/react";
import CloudBand from "../CloudBand";
import { useHeroAutoAdvance } from "../../hooks/useHeroAutoAdvance";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { lerp, phase } from "../../lib/anim";
import { gsap, useGSAP } from "../../lib/gsap";

const USPS = [
  {
    Icon: SealCheck,
    title: "Premium quality",
    line: "Made in our own kitchens.",
  },
  {
    Icon: Heart,
    title: "Health first",
    line: "Chosen for what it does at home.",
  },
  {
    Icon: ShieldCheck,
    title: "Goodness you can trust",
    line: "Twelve kitchens, one standard.",
  },
] as const;

/**
 * Brand-first hero: Mana Ko right, big type left, USP rail + CTAs below.
 * Subtle brand gradient wash. Samaya cloud wipe kept.
 */
export default function Hero() {
  const { ref, progress, reduced } = useScrollProgress();
  useHeroAutoAdvance(ref, reduced);

  const cloud = phase(progress, 0, 0.88);
  const copyOut = phase(progress, 0.12, 0.45);

  useGSAP(
    () => {
      const stageEl = ref.current?.querySelector<HTMLElement>(".hero-stage");
      const photoEl = ref.current?.querySelector<HTMLImageElement>(".hero-photo");
      if (!stageEl || !photoEl) return;

      const ui = ".hero-logo, .hero-line, .hero-rise, .hero-usp, .hero-usp-icon";

      const revealStatic = () => {
        stageEl.classList.add("is-revealed");
        gsap.set(stageEl, { clearProps: "clipPath,scale,transform" });
        gsap.set(photoEl, { clearProps: "scale,transform" });
        gsap.set(ui, { autoAlpha: 1, clearProps: "transform,filter" });
      };

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        revealStatic();
        return;
      }

      gsap.set(stageEl, {
        clipPath: "circle(0% at 50% 42%)",
        scale: 0.9,
        transformOrigin: "50% 42%",
      });
      gsap.set(photoEl, { scale: 1.14, transformOrigin: "50% 40%" });
      gsap.set(ui, { autoAlpha: 0 });

      const failsafe = window.setTimeout(revealStatic, 3200);

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        onComplete: () => {
          window.clearTimeout(failsafe);
          // Soft icon life — transform only, pauses under reduced motion (already gated)
          gsap.to(".hero-usp-icon", {
            y: -3,
            duration: 1.8,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            stagger: { each: 0.22, from: "start" },
          });
        },
      });

      tl.to(stageEl, { clipPath: "circle(72% at 50% 42%)", scale: 1, duration: 1.35 }, 0)
        .to(
          photoEl,
          {
            scale: 1,
            duration: 1.75,
            ease: "power2.out",
            onComplete: () => gsap.set(photoEl, { clearProps: "scale,transform" }),
          },
          0.05,
        )
        .to(
          stageEl,
          {
            clipPath: "circle(155% at 50% 42%)",
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
              stageEl.classList.add("is-revealed");
              gsap.set(stageEl, { clearProps: "clipPath,scale,transform" });
            },
          },
          0.9,
        )
        .fromTo(
          ".hero-logo",
          { autoAlpha: 0, y: 18, x: 12, filter: "blur(6px)" },
          { autoAlpha: 1, y: 0, x: 0, filter: "blur(0px)", duration: 0.75, ease: "power3.out" },
          0.4,
        )
        .fromTo(
          ".hero-line",
          { autoAlpha: 0, y: 32 },
          { autoAlpha: 1, y: 0, duration: 0.75, stagger: 0.1, ease: "power4.out" },
          0.5,
        )
        .fromTo(
          ".hero-usp",
          { autoAlpha: 0, y: 18, scale: 0.94 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            stagger: 0.08,
            ease: "back.out(1.35)",
          },
          0.85,
        )
        .fromTo(
          ".hero-usp-icon",
          { autoAlpha: 0, scale: 0.7, rotate: -8 },
          {
            autoAlpha: 1,
            scale: 1,
            rotate: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.6)",
          },
          0.9,
        )
        .fromTo(
          ".hero-rise",
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.06, ease: "power3.out" },
          1.05,
        );

      return () => {
        window.clearTimeout(failsafe);
        tl.kill();
        gsap.killTweensOf(".hero-usp-icon");
      };
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref as never}
      className="home-hero relative isolate bg-paper"
      style={{ height: reduced ? "auto" : "210vh" }}
      aria-label="Manaram Farm"
    >
      <div
        className={`relative bg-paper ${reduced ? "min-h-[100dvh]" : "sticky top-0 h-[100svh]"}`}
      >
        <div className="relative h-full px-3 pt-3 md:px-5 md:pt-5">
          <div className="hero-stage relative h-[calc(100%-0.75rem)] overflow-hidden rounded-[1.5rem] will-change-transform md:h-[calc(100%-1.25rem)] md:rounded-[2.25rem]">
            <img
              src="/hero.jpg"
              alt="Cows grazing on a flowered hillside at Manaram Farm"
              className="hero-photo absolute inset-0 h-full w-full object-cover object-[center_38%] will-change-transform"
              style={
                reduced
                  ? undefined
                  : {
                      transform: `scale(${lerp(1, 1.08, progress)})`,
                    }
              }
            />

            {/* Subtle unique brand wash — steel / mist / paper, not flat overlay */}
            <div className="hero-grad pointer-events-none absolute inset-0 z-[1]" aria-hidden />

            <div
              className="absolute inset-0 z-10 px-4 pt-16 pb-10 sm:px-6 sm:pt-20 sm:pb-12 md:px-8 md:pb-14 lg:px-10 lg:pb-16"
              style={{
                opacity: reduced ? 1 : 1 - copyOut,
                transform: reduced ? undefined : `translateY(${copyOut * -24}px)`,
                pointerEvents: copyOut > 0.55 ? "none" : undefined,
              }}
            >
              {/* Mana Ko — top right, out of the left stack flow */}
              <img
                src="/mana-ko.png"
                alt="Mana Ko, taste of the Himalayas. Traditional taste, innovative make."
                className="hero-logo absolute top-14 right-4 z-20 h-auto w-[min(62vw,17.5rem)] drop-shadow-[0_16px_36px_rgb(4_40_63_/_0.35)] sm:top-16 sm:right-6 sm:w-[min(48vw,20rem)] md:top-20 md:right-8 md:w-[22rem] lg:top-24 lg:right-10 lg:w-[24rem]"
              />

              {/* Heading → USP → CTAs, stacked tight with room between */}
              <div className="relative z-10 flex max-w-4xl flex-col items-start gap-6 pt-16 sm:gap-7 sm:pt-20 md:pt-24 lg:pt-28">
                <h1 className="font-display">
                  <span className="hero-line block text-[clamp(1.5rem,2.8vw,2.15rem)] leading-snug font-semibold tracking-[-0.02em] text-[#0071bc] drop-shadow-[0_2px_18px_rgb(255_255_255_/_0.35)]">
                    From the pasture
                  </span>
                  <span className="hero-line mt-2 block whitespace-nowrap text-[clamp(3rem,7vw,6rem)] leading-[0.92] font-extrabold tracking-[-0.05em] text-white drop-shadow-[0_2px_24px_rgb(4_40_63_/_0.35)]">
                    Milk from
                  </span>
                  <span className="hero-line block whitespace-nowrap text-[clamp(3rem,7vw,6rem)] leading-[0.92] font-extrabold tracking-[-0.05em] text-white drop-shadow-[0_2px_24px_rgb(4_40_63_/_0.35)]">
                    this valley.
                  </span>
                </h1>

                <ul
                  aria-label="What we stand for"
                  className="hero-usp-rail grid w-full grid-cols-1 divide-y divide-white/15 overflow-hidden rounded-[1.35rem] sm:grid-cols-3 sm:divide-x sm:divide-y-0"
                >
                  {USPS.map(({ Icon, title, line }) => (
                    <li
                      key={title}
                      className="hero-usp flex items-start gap-3.5 px-5 py-4 sm:px-6 sm:py-5"
                    >
                      <span className="hero-usp-icon flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-steel shadow-[0_4px_12px_-4px_rgb(4_40_63_/_0.35)] will-change-transform">
                        <Icon size={20} weight="duotone" aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <p className="font-display text-[0.95rem] leading-tight font-extrabold tracking-tight text-ink">
                          {title}
                        </p>
                        <p className="font-sans mt-0.5 text-[12.5px] leading-[1.45] text-ink/75">
                          {line}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="hero-rise -mt-2 flex flex-wrap items-center gap-3 sm:-mt-3">
                  <Link
                    to="/products"
                    className="font-display inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-steel px-7 text-[15px] font-extrabold whitespace-nowrap text-white transition-colors duration-200 hover:bg-steel-deep active:scale-[0.98]"
                  >
                    See products
                    <ArrowUpRight size={16} weight="bold" />
                  </Link>
                  <Link
                    to="/about"
                    className="font-display inline-flex h-12 cursor-pointer items-center justify-center rounded-full bg-white px-6 text-[15px] font-extrabold whitespace-nowrap text-ink shadow-[0_4px_16px_-6px_rgb(4_40_63_/_0.35)] transition-colors duration-200 hover:bg-mist hover:text-steel active:scale-[0.98]"
                  >
                    Our story
                  </Link>
                </div>
              </div>
            </div>

            {!reduced && <CloudBand t={cloud} />}
          </div>
        </div>
      </div>
    </section>
  );
}
