import { useRef, type RefObject } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { prefersReducedMotion } from "../../lib/anim";
import { gsap, ScrollTrigger, useGSAP } from "../../lib/gsap";
import {
  LIFT_TOTAL_DURATION,
  REVEAL_SCALE_START,
} from "./home-intro-timing";

const HERO_POSTER = "/landing/hero-farm-cows.jpg?v=3";
const HERO_VIDEO = "/landing/hero-cows-hay.mp4";

type HeroProps = {
  skipIntro: boolean;
  revealStarted: boolean;
  mediaReady: boolean;
  onZoomComplete?: () => void;
};

export default function Hero({
  skipIntro,
  revealStarted,
  mediaReady,
  onZoomComplete,
}: HeroProps) {
  const root = useRef<HTMLElement>(null);
  const zoom = useRef<HTMLDivElement>(null);
  const photo = useRef<HTMLVideoElement | HTMLImageElement>(null);
  const scrim = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const reduceMotion = prefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || !zoom.current || !photo.current || !scrim.current) return;

      if (reduceMotion || skipIntro) {
        if (photo.current instanceof HTMLVideoElement) {
          photo.current.play().catch(() => {});
        }
        if (zoom.current) {
          zoom.current.classList.add("hero-band__zoom--ready");
        }
        return;
      }

      if (photo.current instanceof HTMLVideoElement) {
        photo.current.play().catch(() => {});
      }

      gsap.set(zoom.current, {
        scale: REVEAL_SCALE_START,
        transformOrigin: "50% 50%",
        force3D: true,
      });
      gsap.set(scrim.current, { autoAlpha: 0 });
      gsap.set(".hero-band__brand > *", { autoAlpha: 0, y: 24 });
      gsap.set(".hero-band__line", { yPercent: 108 });
      gsap.set(".hero-band__sub", { autoAlpha: 0, y: 22 });
      gsap.set(".hero-band__cta", { autoAlpha: 0, scale: 0.93, y: 20 });
    },
    { scope: root },
  );

  useGSAP(
    () => {
      if (reduceMotion || skipIntro || !revealStarted || !zoom.current) return;

      gsap.killTweensOf(zoom.current);

      gsap.fromTo(
        zoom.current,
        {
          scale: REVEAL_SCALE_START,
          transformOrigin: "50% 50%",
          force3D: true,
        },
        {
          scale: 1,
          duration: LIFT_TOTAL_DURATION,
          ease: "power4.inOut",
          force3D: true,
          transformOrigin: "50% 50%",
          onComplete: () => {
            if (zoom.current) {
              zoom.current.classList.add("hero-band__zoom--ready");
              gsap.set(zoom.current, { clearProps: "transform" });
            }
            ScrollTrigger.refresh();
            onZoomComplete?.();
          },
        },
      );
    },
    { scope: root, dependencies: [revealStarted] },
  );

  useGSAP(
    () => {
      if (!root.current || !photo.current || !mediaReady || reduceMotion) return;

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
    { scope: root, dependencies: [mediaReady] },
  );

  useGSAP(
    () => {
      if (reduceMotion || skipIntro || !revealStarted || !scrim.current) return;

      const revealTl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: LIFT_TOTAL_DURATION * 0.55,
        onComplete: () => {
          gsap.set(
            [".hero-band__brand > *", ".hero-band__line", ".hero-band__sub", ".hero-band__cta"],
            { clearProps: "transform,opacity,visibility,filter" },
          );
        },
      });

      revealTl
        .to(scrim.current, { autoAlpha: 1, duration: 1.05, ease: "power2.out" }, 0)
        .to(
          ".hero-band__brand > *",
          {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.9,
            stagger: 0.12,
          },
          0.15,
        )
        .to(
          ".hero-band__line",
          {
            yPercent: 0,
            duration: 1,
            stagger: 0.14,
            ease: "power4.out",
          },
          0.28,
        )
        .to(
          ".hero-band__sub",
          {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.8,
          },
          0.45,
        )
        .to(
          ".hero-band__cta",
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.65,
            stagger: 0.1,
            ease: "back.out(1.55)",
          },
          0.58,
        );
    },
    { scope: root, dependencies: [revealStarted] },
  );

  return (
    <section ref={root} className="hero-band" aria-label="Introduction">
      <div className="hero-band__media" aria-hidden="true">
        <div className="hero-band__parallax">
          <div ref={zoom} className="hero-band__zoom">
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
