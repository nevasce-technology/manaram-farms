import { useRef } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { prefersReducedMotion } from "../../lib/anim";
import { gsap, useGSAP } from "../../lib/gsap";

const shops = [
  {
    country: "Nepal",
    partner: "Mana Mart",
    site: "manakomart.com",
    href: "https://manakomart.com/",
    line: "Order Mana Ko across Nepal.",
    logo: "/partners/mana-mart.png",
    logoAlt: "Mana Mart",
    cta: "Shop Nepal",
    logoClass: "h-14 w-auto max-w-[min(100%,14rem)] object-contain object-left md:h-16",
  },
  {
    country: "United States",
    partner: "Pandam Foods",
    site: "jibrofoods.com",
    href: "https://jibrofoods.com/",
    line: "Find us on Pandam Foods in the US.",
    logo: "/partners/pandam-foods-light.png",
    logoAlt: "Pandam Foods",
    cta: "Shop US",
    logoClass: "h-11 w-auto max-w-[min(100%,16rem)] object-contain object-left md:h-12",
  },
] as const;

export default function ShopDestinations() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current) return;

      const headTl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      headTl
        .from(".shop-title-word", {
          yPercent: 115,
          rotate: 5,
          duration: 0.95,
          stagger: 0.1,
          ease: "power4.out",
        })
        .from(
          ".shop-sub",
          {
            y: 28,
            opacity: 0,
            filter: "blur(8px)",
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5",
        );

      const panels = gsap.utils.toArray<HTMLElement>(".shop-panel");
      panels.forEach((panel, i) => {
        const fromLeft = i % 2 === 0;
        gsap.from(panel, {
          xPercent: fromLeft ? -18 : 18,
          y: 40,
          opacity: 0,
          rotate: fromLeft ? -2.5 : 2.5,
          scale: 0.94,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });

        const logo = panel.querySelector(".shop-logo");
        const cta = panel.querySelector(".shop-cta-chip");
        if (logo) {
          gsap.from(logo, {
            scale: 0.82,
            opacity: 0,
            duration: 0.7,
            delay: 0.15,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: panel,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          });
        }
        if (cta) {
          gsap.from(cta, {
            y: 16,
            opacity: 0,
            duration: 0.55,
            delay: 0.28,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 84%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden border-t border-ink/6 bg-white py-20 md:py-28">
      <div className="grain-overlay absolute inset-0 opacity-[0.035]" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
          <span className="block overflow-hidden pb-1">
            <span className="shop-title-word inline-block will-change-transform">Where to</span>
          </span>
          <span className="block overflow-hidden pb-1">
            <span className="shop-title-word inline-block will-change-transform">buy</span>
          </span>
        </h2>
        <p className="shop-sub mt-3 max-w-lg text-[1.05rem] leading-relaxed text-ink-soft">
          Order through our retail partners in Nepal and the United States.
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {shops.map((shop) => (
            <a
              key={shop.href}
              href={shop.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shop-panel group relative flex min-h-[17rem] flex-col overflow-hidden rounded-[var(--radius-panel)] border border-ink/8 bg-canvas p-8 shadow-[0_20px_50px_-36px_rgb(8_20_36_/_0.45)] transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-steel/35 hover:shadow-[0_28px_60px_-32px_rgb(0_113_188_/_0.35)] focus-visible:border-steel active:translate-y-0 active:scale-[0.985] md:min-h-[18.5rem] md:p-10"
            >
              <span
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_100%_0%,rgb(0_113_188_/_0.1),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative flex flex-1 flex-col">
                <p className="text-sm font-medium text-ink-soft">{shop.country}</p>

                <div className="mt-8 flex min-h-[4.5rem] items-center">
                  <img
                    src={shop.logo}
                    alt={shop.logoAlt}
                    className={`shop-logo ${shop.logoClass}`}
                    width={280}
                    height={80}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <p className="mt-6 max-w-sm text-[1.05rem] leading-relaxed text-ink-soft">
                  {shop.line}
                </p>

                <span className="shop-cta-chip mt-auto inline-flex w-fit items-center gap-2.5 pt-8">
                  <span className="inline-flex items-center gap-2 rounded-full bg-steel px-5 py-2.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_-12px_rgb(0_113_188_/_0.7)] transition-[background-color,transform] duration-300 group-hover:bg-steel-deep group-active:scale-[0.98]">
                    {shop.cta}
                    <ArrowUpRight
                      size={16}
                      weight="bold"
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                  <span className="text-sm text-ink-soft transition-colors group-hover:text-steel">
                    {shop.site}
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
