import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import { prefersReducedMotion } from "../../lib/anim";
import { gsap, useGSAP } from "../../lib/gsap";

export default function WelcomeFarm() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current) return;

      // Headline: clip-rise through overflow masks
      const titleWords = gsap.utils.toArray<HTMLElement>(".story-title-word");
      gsap.from(titleWords, {
        yPercent: 110,
        rotate: 4,
        duration: 1.05,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".story-hero-block",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".story-lead > *:not(h2)", {
        y: 32,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".story-hero-block",
          start: "top 76%",
          toggleActions: "play none none reverse",
        },
      });

      // Hero pasture: curtain wipe + scale settle
      const pasture = root.current.querySelector(".story-pasture");
      const pastureImg = root.current.querySelector(".story-pasture img");
      if (pasture && pastureImg) {
        gsap.set(pasture, { clipPath: "inset(18% 12% 18% 12% round 1.5rem)" });
        gsap.set(pastureImg, { scale: 1.18 });

        const pastureTl = gsap.timeline({
          scrollTrigger: {
            trigger: pasture,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
        pastureTl
          .to(pasture, {
            clipPath: "inset(0% 0% 0% 0% round 1.5rem)",
            duration: 1.25,
            ease: "power4.inOut",
          })
          .to(pastureImg, { scale: 1, duration: 1.45, ease: "power2.out" }, 0);

        gsap.to(pastureImg, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: pasture,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // Facility split: opposing slides
      gsap.from(".story-facility-photo", {
        xPercent: -14,
        opacity: 0,
        rotate: -1.5,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".story-split",
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".story-facility-copy > :not(.story-stats)", {
        x: 40,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".story-split",
          start: "top 74%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".story-stat", {
        y: 24,
        opacity: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".story-stats",
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".story-close > *", {
        y: 36,
        opacity: 0,
        filter: "blur(10px)",
        duration: 0.9,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".story-close",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="farm-intro"
      className="relative overflow-hidden bg-white pb-24 pt-8 md:pb-36 md:pt-14"
    >
      <div className="grain-overlay absolute inset-0 opacity-[0.035]" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
        <div className="story-hero-block story-lead max-w-3xl">
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-steel">
            <span className="block overflow-hidden pb-1">
              <span className="story-title-word inline-block will-change-transform">Welcome to</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="story-title-word inline-block will-change-transform">Manaram Farm</span>
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-[1.1rem] leading-relaxed text-ink-soft md:text-lg">
            Healthy dairy produced at our farm by our farmers and cows. We combine traditional
            methods with modern care to keep every batch fresh, safe, and full of flavor.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-steel transition-colors hover:text-steel-deep"
          >
            Read our full story
            <ArrowUpRight
              size={16}
              weight="bold"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <figure className="story-pasture mt-14 overflow-hidden rounded-[var(--radius-panel)] will-change-[clip-path] md:mt-20">
          <img
            src="/landing/story-pasture.jpg"
            alt="Cows grazing on Manaram Farm pasture with Himalayan foothills beyond"
            className="aspect-[16/9] w-full object-cover will-change-transform md:aspect-[21/9]"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className="story-split mt-16 grid items-center gap-10 md:mt-24 lg:grid-cols-12 lg:gap-14">
          <figure className="story-facility-photo overflow-hidden rounded-[var(--radius-panel)] will-change-transform lg:col-span-7">
            <img
              src="/landing/story-facility.jpg"
              alt="Modern dairy facility at Manaram Farm in Baluwatar, Kathmandu"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="story-facility-copy lg:col-span-5">
            <h3 className="font-display text-[clamp(1.6rem,3vw,2.25rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-steel">
              Built in Baluwatar for clean, consistent dairy
            </h3>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
              Since 2014 we have worked to utilize and promote local resources across Nepal. From
              milk and ghee to pickles, dried meats, and pantry staples, everything starts on our
              farm and moves through a facility designed for care at every step.
            </p>

            <dl className="story-stats mt-10 space-y-5 border-t border-ink/10 pt-8">
              <div className="story-stat flex items-baseline justify-between gap-6">
                <dt className="text-sm text-ink-soft">Established</dt>
                <dd className="font-display text-xl font-semibold text-ink">2014</dd>
              </div>
              <div className="story-stat flex items-baseline justify-between gap-6 border-t border-ink/8 pt-5">
                <dt className="text-sm text-ink-soft">Facility</dt>
                <dd className="text-right font-semibold text-ink">Baluwatar, Kathmandu</dd>
              </div>
              <div className="story-stat flex items-baseline justify-between gap-6 border-t border-ink/8 pt-5">
                <dt className="text-sm text-ink-soft">Focus</dt>
                <dd className="text-right font-semibold text-ink">Dairy &amp; pantry</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="story-close mt-16 grid gap-6 border-t border-ink/10 pt-14 md:mt-24 md:grid-cols-2 md:gap-10 md:pt-16">
          <p className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-snug tracking-[-0.02em] text-steel">
            Local resources. Modern methods. One farm you can trust.
          </p>
          <p className="max-w-md text-[1.05rem] leading-relaxed text-ink-soft md:justify-self-end md:pt-1">
            We grow and source across Nepal to support our community, then finish each batch with
            traditional craft and contemporary standards so flavor and freshness hold together.
          </p>
        </div>
      </div>
    </section>
  );
}
