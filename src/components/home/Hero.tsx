import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import CloudBand from "../CloudBand";
import { lerp, phase, prefersReducedMotion } from "../../lib/anim";
import { gsap, useGSAP } from "../../lib/gsap";
import { useHeroAutoAdvance } from "../../hooks/useHeroAutoAdvance";
import { useScrollProgress } from "../../hooks/useScrollProgress";

export default function Hero() {
  const { ref, progress, reduced } = useScrollProgress();
  useHeroAutoAdvance(ref, reduced);

  const stage = useRef<HTMLDivElement>(null);
  const photo = useRef<HTMLDivElement>(null);
  const sticky = useRef<HTMLDivElement>(null);
  const primaryCta = useRef<HTMLAnchorElement>(null);
  const secondaryCta = useRef<HTMLAnchorElement>(null);

  const cloud = phase(progress, 0, 0.88);
  const copyOut = phase(progress, 0.12, 0.45);

  useEffect(() => {
    if (reduced || progress < 0.02 || !stage.current) return;
    gsap.set(stage.current, { clipPath: "none" });
  }, [progress, reduced]);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set(stage.current, { clipPath: "none", clearProps: "clipPath" });
        gsap.set(sticky.current?.querySelectorAll(".hero-word, .hero-fade, .hero-cta") ?? [], {
          clearProps: "all",
          opacity: 1,
          y: 0,
          filter: "none",
        });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set(stage.current, { clipPath: "circle(0% at 50% 48%)" });
      gsap.set(photo.current, { scale: 1.22 });

      tl.to(
        stage.current,
        {
          clipPath: "circle(160% at 50% 48%)",
          duration: 1.55,
          ease: "power4.inOut",
        },
        0,
      )
        .to(photo.current, { scale: 1.06, duration: 2.2, ease: "power2.out" }, 0.15)
        .from(
          sticky.current?.querySelectorAll(".hero-fade") ?? [],
          { y: 24, opacity: 0, duration: 0.7, stagger: 0.08 },
          0.55,
        )
        .from(
          sticky.current?.querySelectorAll(".hero-word") ?? [],
          {
            yPercent: 120,
            rotate: 3,
            filter: "blur(10px)",
            duration: 1.05,
            stagger: 0.1,
            ease: "power4.out",
          },
          0.65,
        )
        .from(
          sticky.current?.querySelectorAll(".hero-cta") ?? [],
          { y: 28, opacity: 0, duration: 0.7, stagger: 0.1 },
          1.05,
        );
    },
    { scope: sticky },
  );

  useEffect(() => {
    const node = sticky.current;
    const photoNode = photo.current;
    if (!node || !photoNode || prefersReducedMotion()) return;

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(photoNode, {
        x: x * -36,
        y: y * -22,
        duration: 1.15,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    node.addEventListener("pointermove", onMove);
    return () => node.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const magnets = [primaryCta.current, secondaryCta.current].filter(Boolean) as HTMLAnchorElement[];
    const cleanups: Array<() => void> = [];

    magnets.forEach((btn) => {
      const onMove = (event: PointerEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        gsap.to(btn, {
          x: x * 0.28,
          y: y * 0.32,
          duration: 0.35,
          ease: "power3.out",
          overwrite: "auto",
        });
      };
      const onLeave = () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.55, ease: "elastic.out(1, 0.45)" });
      };
      btn.addEventListener("pointermove", onMove);
      btn.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        btn.removeEventListener("pointermove", onMove);
        btn.removeEventListener("pointerleave", onLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section
      ref={ref as never}
      className="relative isolate"
      style={{ height: reduced ? "auto" : "210vh" }}
      aria-label="Introduction"
    >
      <div
        ref={sticky}
        className={`relative overflow-hidden bg-white ${reduced ? "min-h-[100dvh]" : "sticky top-0 h-[100dvh]"}`}
      >
        <div ref={stage} className="absolute inset-0 will-change-[clip-path]">
          <div
            className="absolute inset-[-6%] will-change-transform"
            style={
              reduced
                ? undefined
                : { transform: `scale(${lerp(1.04, 1.12, progress)})` }
            }
          >
            <div ref={photo} className="absolute inset-0 will-change-transform">
              <img
                src="/landing/hero-farm-cows.jpg?v=2"
                alt="Cows at Manaram Farm in a modern dairy facility"
                className="h-full w-full object-cover object-[72%_42%]"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
          <div className="hero-scrim absolute inset-0" aria-hidden="true" />
          <div className="hero-vignette-edge absolute inset-0" aria-hidden="true" />
          <div className="grain-overlay absolute inset-0 opacity-[0.09]" aria-hidden="true" />
        </div>

        <div
          className="relative z-20 mx-auto flex h-full max-w-[1400px] flex-col justify-center px-5 py-24 md:px-10 md:py-28 xl:px-14"
          style={
            reduced
              ? undefined
              : {
                  opacity: 1 - copyOut,
                  transform: `translateY(${copyOut * -36}px)`,
                }
          }
        >
          <div className="hero-copy max-w-[48rem]">
            <div className="hero-fade mb-8 flex flex-wrap items-center gap-6 md:mb-10 md:gap-8">
              <img
                src="/logo-white.png"
                alt="Manaram Farm"
                className="h-14 w-auto md:h-[4.5rem]"
                width={280}
                height={72}
              />
              <span
                className="hidden h-11 w-px bg-white/30 sm:block md:h-14"
                aria-hidden="true"
              />
              <img
                src="/mana-ko-white.png"
                alt="Mana Ko"
                className="h-16 w-auto md:h-[5.25rem]"
                width={300}
                height={84}
              />
            </div>

            <h1 className="font-display text-[clamp(2.85rem,8vw,6.25rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-white">
              <span className="block overflow-hidden pb-2">
                <span className="hero-word inline-block will-change-transform">Modern farm.</span>
              </span>
              <span className="block overflow-hidden pb-2">
                <span className="hero-word inline-block will-change-transform leading-[1.12] text-steel-soft italic">
                  Honest dairy.
                </span>
              </span>
            </h1>

            <p className="hero-fade mt-6 max-w-[28rem] text-[1.05rem] leading-relaxed text-white/85 md:mt-8 md:text-lg">
              Fresh milk, ghee, and pantry staples from our Jhapa farm since 2014.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3 md:mt-11">
              <Link
                ref={primaryCta}
                to="/products"
                className="hero-cta group inline-flex items-center gap-2 rounded-full bg-steel px-7 py-3.5 text-[15px] font-semibold text-white will-change-transform transition-colors hover:bg-steel-deep active:scale-[0.98]"
              >
                Explore products
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                ref={secondaryCta}
                to="/about"
                className="hero-cta inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/12 px-7 py-3.5 text-[15px] font-semibold text-white will-change-transform backdrop-blur-md transition-colors hover:border-white/55 hover:bg-white/20 active:scale-[0.98]"
              >
                Our story
              </Link>
            </div>
          </div>
        </div>

        {!reduced && <CloudBand t={cloud} />}
      </div>
    </section>
  );
}
