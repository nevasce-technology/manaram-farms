import { useRef } from "react";
import { contactFacilityHero } from "../../data/contact-data";
import { prefersReducedMotion } from "../../lib/anim";
import { gsap, useGSAP } from "../../lib/gsap";

export default function ContactHero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current) return;

      gsap.from(".contact-hero-copy > *", {
        y: 18,
        autoAlpha: 0,
        duration: 0.65,
        stagger: 0.07,
        ease: "power3.out",
      });

      gsap.from(".contact-hero-media", {
        y: 28,
        autoAlpha: 0,
        scale: 0.98,
        duration: 0.8,
        delay: 0.06,
        ease: "power3.out",
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="contact-hero relative overflow-hidden pt-24">
      <div
        className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-soft-light"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-12 top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-8 px-5 py-10 pb-12 md:grid-cols-12 md:gap-x-10 md:px-10 md:py-12 md:pb-14 xl:px-14">
        <div className="contact-hero-copy md:col-span-5 lg:col-span-5">
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.04em] text-white">
            Drop us a line
          </h1>
          <p className="mt-3 max-w-[38ch] text-base leading-relaxed text-white/76 md:text-lg">
            Orders, farm visits, and wholesale questions. We read mail after the morning rounds.
          </p>
        </div>

        <figure className="contact-hero-media md:col-span-7 lg:col-span-7">
          <img
            src={contactFacilityHero.src}
            alt={contactFacilityHero.alt}
            fetchPriority="high"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  );
}
