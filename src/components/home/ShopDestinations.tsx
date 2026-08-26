import { useRef } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { prefersReducedMotion } from "../../lib/anim";
import { gsap, useGSAP } from "../../lib/gsap";

const shops = [
  {
    country: "Nepal",
    partner: "Mana Ko Mart",
    site: "manakomart.com",
    href: "https://manakomart.com/",
    line: "Mana Ko Mart delivers across Nepal.",
    tone: "primary" as const,
  },
  {
    country: "United States",
    partner: "Jibro Foods",
    site: "jibrofoods.com",
    href: "https://jibrofoods.com/",
    line: "Jibro Foods carries us stateside.",
    tone: "secondary" as const,
  },
];

/**
 * Shop destinations: opposing panel fly-ins + scrubbed counter-tilt.
 */
export default function ShopDestinations() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const head = root.current?.querySelector<HTMLElement>(".shop-head");
      const primary = root.current?.querySelector<HTMLElement>(".shop-panel-primary");
      const secondary = root.current?.querySelector<HTMLElement>(".shop-panel-secondary");

      if (head) {
        gsap.from(head.children, {
          y: 28,
          autoAlpha: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: head,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Nepal swings in from the left; USA from the right and lower
      if (primary) {
        gsap.from(primary, {
          xPercent: -18,
          rotate: -5,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: primary,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.to(primary, {
          rotate: 1.5,
          ease: "none",
          scrollTrigger: {
            trigger: primary,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (secondary) {
        gsap.from(secondary, {
          xPercent: 18,
          rotate: 5,
          autoAlpha: 0,
          duration: 0.9,
          delay: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: secondary,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.to(secondary, {
          rotate: -1.5,
          ease: "none",
          scrollTrigger: {
            trigger: secondary,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 md:px-10">
        <div className="shop-head max-w-[36rem]">
          <h2 className="font-display text-[clamp(2rem,4vw,3.1rem)] leading-[1.02] font-extrabold tracking-[-0.035em] text-pine">
            Where to buy
          </h2>
          <p className="font-sans mt-3 text-[15px] leading-[1.65] text-ink/60 md:text-base">
            Checkout lives on our partner shops. Choose Nepal or the United States.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
          {shops.map((s) => {
            const isPrimary = s.tone === "primary";
            return (
              <a
                key={s.country}
                href={s.href}
                rel="noreferrer"
                target="_blank"
                className={`group relative flex min-h-[16.5rem] cursor-pointer flex-col justify-between overflow-hidden rounded-[1.6rem] p-7 transition-shadow duration-300 ease-out hover:shadow-[0_28px_56px_-24px_rgb(4_40_63_/_0.35)] active:scale-[0.99] md:min-h-[19rem] md:p-8 will-change-transform ${
                  isPrimary
                    ? "shop-panel-primary bg-pine text-paper shadow-[0_28px_56px_-28px_rgb(4_40_63_/_0.55)] md:translate-y-0"
                    : "shop-panel-secondary border border-steel/15 bg-white text-ink shadow-[0_20px_48px_-28px_rgb(0_110_181_/_0.28)] md:translate-y-6"
                }`}
              >
                <div
                  className={`pointer-events-none absolute -right-8 -top-10 size-44 rounded-full opacity-40 blur-2xl ${
                    isPrimary ? "bg-steel" : "bg-mist"
                  }`}
                  aria-hidden
                />

                <div className="relative flex items-start justify-between gap-4">
                  <p
                    className={`font-display text-[1.05rem] font-extrabold tracking-[-0.02em] md:text-[1.15rem] ${
                      isPrimary ? "text-paper" : "text-pine"
                    }`}
                  >
                    {s.partner}
                  </p>
                  <span
                    className={`shop-arrow inline-flex size-11 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                      isPrimary
                        ? "bg-white/10 text-paper group-hover:bg-white group-hover:text-pine"
                        : "bg-steel/10 text-steel group-hover:bg-steel group-hover:text-white"
                    }`}
                  >
                    <ArrowUpRight size={18} weight="bold" aria-hidden />
                  </span>
                </div>

                <div className="relative mt-10 md:mt-auto">
                  <p
                    className={`font-display text-[clamp(1.85rem,3.2vw,2.65rem)] leading-[1.02] font-extrabold tracking-[-0.03em] ${
                      isPrimary ? "text-paper" : "text-pine"
                    }`}
                  >
                    {s.country}
                  </p>
                  <p
                    className={`font-sans mt-2 max-w-[28ch] text-[15px] leading-[1.55] ${
                      isPrimary ? "text-paper/65" : "text-ink/55"
                    }`}
                  >
                    {s.line}
                  </p>
                  <p
                    className={`font-sans mt-4 text-[13px] font-semibold tracking-wide ${
                      isPrimary ? "text-steel-soft" : "text-steel"
                    }`}
                  >
                    {s.site}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
