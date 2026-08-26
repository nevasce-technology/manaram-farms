import { useRef } from "react";
import { prefersReducedMotion } from "../../lib/anim";
import { gsap, useGSAP } from "../../lib/gsap";

/**
 * Welcome story: title wipe, photo float scrub, split prose, quote swing-in.
 */
export default function WelcomeFarm() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      const title = section.querySelector<HTMLElement>(".welcome-title");
      const photo = section.querySelector<HTMLElement>(".welcome-photo");
      const photoImg = section.querySelector<HTMLElement>(".welcome-photo-img");
      const ghost = section.querySelector<HTMLElement>(".welcome-shape-ghost");
      const intros = gsap.utils.toArray<HTMLElement>(".welcome-intro p");
      const craft = section.querySelector<HTMLElement>(".welcome-craft");
      const quote = section.querySelector<HTMLElement>(".welcome-quote");
      const marks = gsap.utils.toArray<HTMLElement>(".welcome-mark");

      if (prefersReducedMotion()) {
        gsap.set(
          [title, photo, photoImg, ghost, intros, craft, quote, marks],
          { clearProps: "all" },
        );
        return;
      }

      // Title: horizontal mask wipe into place
      if (title) {
        gsap.fromTo(
          title,
          { clipPath: "inset(0 100% 0 0)", x: -28 },
          {
            clipPath: "inset(0 0% 0 0)",
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: title,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Photo: lift + soft rotate on enter, then scrubbed float while in view
      if (photo) {
        gsap.from(photo, {
          y: 56,
          rotate: -4,
          scale: 0.92,
          autoAlpha: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: photo,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.to(photo, {
          y: -18,
          ease: "none",
          scrollTrigger: {
            trigger: photo,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
          },
        });
      }

      if (photoImg) {
        gsap.fromTo(
          photoImg,
          { scale: 1.18 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: photo,
              start: "top 90%",
              end: "bottom 30%",
              scrub: true,
            },
          },
        );
      }

      if (ghost) {
        gsap.to(ghost, {
          x: 14,
          y: 10,
          ease: "none",
          scrollTrigger: {
            trigger: photo,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
          },
        });
      }

      // Intro lines: stagger from the right
      if (intros.length) {
        gsap.from(intros, {
          x: 40,
          autoAlpha: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: intros[0],
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Craft copy + belief quote: opposing entrances
      if (craft) {
        gsap.from(craft, {
          x: -36,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: craft,
            start: "top 86%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (quote) {
        gsap.from(quote, {
          x: 48,
          rotate: 2.5,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: quote,
            start: "top 86%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (marks.length) {
        gsap.from(marks, {
          scale: 0.4,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: quote,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
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
          className="welcome-title font-display mb-14 whitespace-nowrap text-center text-[clamp(1.65rem,5.4vw,4.5rem)] leading-[1.05] font-extrabold tracking-[-0.035em] text-steel md:mb-16"
        >
          Welcome To Manaram Farm
        </h2>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-16 lg:gap-20 xl:gap-24">
          <figure className="welcome-photo relative mx-auto w-full max-w-[22rem] md:mx-0 md:max-w-none will-change-transform">
            <div
              className="welcome-shape-ghost absolute -inset-[6%] translate-x-2 translate-y-3 bg-mist/60"
              aria-hidden
            />
            <div className="welcome-shape relative aspect-square overflow-hidden bg-mist shadow-[0_24px_48px_-24px_rgb(4_40_63_/_0.3)]">
              <img
                src="/welcome-cows.jpg"
                alt="Dairy cows at Manaram Farm"
                className="welcome-photo-img absolute inset-0 h-full w-full object-cover object-[center_32%] will-change-transform"
                width={800}
                height={800}
              />
            </div>
          </figure>

          <div className="welcome-intro flex flex-col justify-center gap-5 md:gap-6">
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

        <div className="mt-12 grid grid-cols-1 items-stretch gap-8 border-t border-steel/10 pt-12 md:mt-14 md:grid-cols-2 md:gap-10 md:pt-14 lg:gap-12">
          <p className="welcome-craft font-sans self-center text-[clamp(1.05rem,1.8vw,1.35rem)] leading-[1.55] text-ink md:pr-2">
            We carefully select the finest raw materials and blend traditional knowledge with modern,
            innovative production techniques to create products that are delicious, nutritious, and
            made with care. Our commitment to quality and responsible production drives us to
            continuously improve and bring products that our customers can trust to their everyday
            lives.
          </p>

          <blockquote className="welcome-quote relative overflow-hidden rounded-[1.35rem] bg-mist px-7 py-8 shadow-[0_18px_40px_-22px_rgb(4_40_63_/_0.22)] md:px-8 md:py-9 will-change-transform">
            <span
              className="welcome-mark font-display pointer-events-none absolute top-2 left-4 select-none text-[clamp(5.5rem,12vw,8.5rem)] leading-none font-extrabold text-steel/15"
              aria-hidden
            >
              “
            </span>
            <p className="font-display relative z-[1] pt-8 text-[clamp(1.2rem,2.2vw,1.55rem)] leading-[1.3] font-extrabold tracking-[-0.03em] text-pine">
              At Manaram Farm, we believe that the best products begin with the best resources,
              thoughtful processes, and a commitment to quality.
            </p>
            <span
              className="welcome-mark font-display pointer-events-none absolute right-5 bottom-0 select-none text-[clamp(4rem,9vw,6.5rem)] leading-none font-extrabold text-steel/12"
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
