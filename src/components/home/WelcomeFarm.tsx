import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import { prefersReducedMotion } from "../../lib/anim";
import { gsap, useGSAP } from "../../lib/gsap";
import { FoodSafetyCert } from "../ui/FoodSafetyCert";

export default function WelcomeFarm() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current) return;

      gsap.from(".welcome-photo-wrap", {
        clipPath: "inset(100% 0 0 0 round 1.5rem)",
        duration: 1.25,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".welcome-photo-wrap",
          start: "top 86%",
          once: true,
        },
      });

      gsap.to(".welcome-photo", {
        yPercent: -14,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".welcome-photo-wrap",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.1,
        },
      });

      const copyTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".welcome-copy",
          start: "top 82%",
          once: true,
        },
      });

      copyTl
        .from(".welcome-headline", {
          yPercent: 110,
          opacity: 0,
          duration: 0.95,
          ease: "power4.out",
        })
        .from(
          ".welcome-body > p",
          {
            y: 32,
            opacity: 0,
            filter: "blur(8px)",
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .from(
          ".welcome-cert",
          {
            x: -24,
            opacity: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .from(
          ".welcome-link",
          {
            y: 16,
            opacity: 0,
            duration: 0.55,
            ease: "power2.out",
          },
          "-=0.25",
        );

      gsap.from(".welcome-closer-head", {
        x: -40,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".welcome-closer",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".welcome-closer-body", {
        x: 40,
        opacity: 0,
        filter: "blur(6px)",
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".welcome-closer",
          start: "top 86%",
          once: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="farm-intro"
      className="relative z-[2] overflow-hidden bg-white pb-24 pt-20 md:pb-32 md:pt-24"
    >
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="welcome-photo-wrap overflow-hidden rounded-[var(--radius-panel)] lg:col-span-7">
            <img
              src="/landing/story-pasture.jpg"
              alt="Cows grazing on Manaram Farm pasture with Himalayan foothills beyond"
              className="welcome-photo aspect-[4/3] w-full object-cover lg:aspect-[16/11]"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="welcome-copy lg:col-span-5 lg:pt-4">
            <h2 className="welcome-headline overflow-hidden font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-steel">
              Welcome to Manaram Farm
            </h2>
            <div className="welcome-body mt-6">
              <p className="text-[1.1rem] leading-relaxed text-ink-soft md:text-lg">
                Healthy dairy produced at our farm by our farmers and cows. We combine traditional
                methods with modern care to keep every batch fresh, safe, and full of flavor.
              </p>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
                Since 2014 we have worked to utilize and promote local resources across Nepal. From
                milk and ghee to pickles, dried meats, and pantry staples, everything starts on our
                Jhapa farm and moves through a facility designed for care at every step.
              </p>
            </div>
            <FoodSafetyCert className="welcome-cert mt-8" layout="strip" />
            <Link
              to="/about"
              className="welcome-link group mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-steel transition-colors hover:text-steel-deep"
            >
              Read our full story
              <ArrowUpRight
                size={16}
                weight="bold"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="welcome-closer mt-16 border-t border-ink/10 pt-14 md:mt-20 md:pt-16">
          <div className="grid gap-6 md:grid-cols-2 md:gap-10">
            <p className="welcome-closer-head font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-snug tracking-[-0.02em] text-steel">
              Local resources. Modern methods. One farm you can trust.
            </p>
            <p className="welcome-closer-body max-w-md text-[1.05rem] leading-relaxed text-ink-soft md:justify-self-end md:pt-1">
              We grow and source across Nepal to support our community, then finish each batch with
              traditional craft and contemporary standards so flavor and freshness hold together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
