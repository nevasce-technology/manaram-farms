import { useRef, type RefObject } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { prefersReducedMotion } from "../../lib/anim";
import { gsap, useGSAP } from "../../lib/gsap";

const HERO_POSTER = "/landing/hero-farm-cows.jpg?v=3";
const HERO_VIDEO = "/landing/hero-cows-hay.mp4";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const parallax = useRef<HTMLDivElement>(null);
  const photo = useRef<HTMLVideoElement | HTMLImageElement>(null);
  const scrim = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const reduceMotion = prefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current || !parallax.current || !photo.current) return;

      const loadTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      loadTl
        .from(parallax.current, {
          clipPath: "inset(100% 0 0 0)",
          duration: 1.35,
          ease: "power4.inOut",
        })
        .from(
          photo.current,
          { scale: 1.12, duration: 1.85, ease: "power2.out", transformOrigin: "50% 50%" },
          0,
        )
        .from(scrim.current, { opacity: 0, duration: 1.15 }, 0.18)
        .from(
          ".hero-band__brand > *",
          {
            y: 24,
            opacity: 0,
            filter: "blur(8px)",
            duration: 0.9,
            stagger: 0.12,
            clearProps: "filter",
          },
          0.52,
        )
        .from(
          ".hero-band__line",
          {
            yPercent: 108,
            duration: 1,
            stagger: 0.14,
            ease: "power4.out",
          },
          0.64,
        )
        .from(
          ".hero-band__sub",
          {
            y: 22,
            opacity: 0,
            filter: "blur(10px)",
            duration: 0.8,
            clearProps: "filter",
          },
          0.9,
        )
        .from(
          ".hero-band__cta",
          {
            y: 20,
            opacity: 0,
            scale: 0.93,
            duration: 0.65,
            stagger: 0.1,
            ease: "back.out(1.55)",
          },
          1.02,
        );

      gsap.to(photo.current, {
        yPercent: 8,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.75,
          invalidateOnRefresh: true,
        },
      });

      if (copy.current) {
        gsap.to(copy.current, {
          y: 28,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    },
    { scope: root },
  );

  return (
    <section ref={root} className="hero-band" aria-label="Introduction">
      <div className="hero-band__media" aria-hidden="true">
        <div ref={parallax} className="hero-band__parallax">
          {reduceMotion ? (
            <img
              ref={photo as RefObject<HTMLImageElement>}
              src={HERO_POSTER}
              alt=""
              width={1920}
              height={1080}
              className="hero-band__photo"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          ) : (
            <video
              ref={photo as RefObject<HTMLVideoElement>}
              className="hero-band__photo"
              autoPlay
              muted
              loop
              playsInline
              poster={HERO_POSTER}
              preload="auto"
              width={1920}
              height={1080}
            >
              <source src={HERO_VIDEO} type="video/mp4" />
            </video>
          )}
        </div>
        <div ref={scrim} className="hero-band__scrim" />
      </div>

      <div className="hero-band__content mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
        <div ref={copy} className="hero-band__copy">
          <div className="hero-band__brand flex flex-wrap items-center gap-5 md:gap-7">
            <img
              src="/logo.png"
              alt="Manaram Farm"
              className="h-14 w-auto md:h-16"
              width={240}
              height={52}
            />
            <span className="hidden h-11 w-px bg-white/22 sm:block" aria-hidden="true" />
            <img
              src="/mana-ko.png"
              alt="Mana Ko"
              className="h-16 w-auto md:h-[4.75rem]"
              width={260}
              height={62}
            />
          </div>

          <h1 className="hero-band__title font-display text-[clamp(2.75rem,6.2vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
            <span className="block overflow-hidden pb-1">
              <span className="hero-band__line inline-block will-change-transform">Modern farm.</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="hero-band__line inline-block will-change-transform text-steel-soft">
                Living herd.
              </span>
            </span>
          </h1>

          <p className="hero-band__sub max-w-[30rem] text-lg leading-relaxed text-white/80 md:max-w-[32rem] md:text-xl">
            Fresh milk, ghee, and pantry staples from our Jhapa farm since 2014.
          </p>

          <div className="hero-band__actions flex flex-wrap items-center gap-3">
            <Link
              to="/products"
              className="hero-band__cta group inline-flex items-center gap-2 rounded-full bg-steel px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-steel-deep active:scale-[0.98]"
            >
              Explore products
              <ArrowRight
                size={16}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/about"
              className="hero-band__cta inline-flex items-center gap-2 rounded-full border border-white/28 bg-white/6 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white/45 hover:bg-white/12 active:scale-[0.98]"
            >
              Our story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
