import { useEffect, useEffectEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import { prefersReducedMotion } from "../../lib/anim";
import { gsap, useGSAP } from "../../lib/gsap";

const PRODUCTS = [
  {
    name: "Mana Ko Milk",
    note: "Pure cow milk from open pasture.",
    img: "/cutouts/milk.png",
    alt: "Glass bottle of Mana Ko Milk",
  },
  {
    name: "Mana Ko Ghee",
    note: "Clarified butter, 500 ml.",
    img: "/cutouts/ghee.png",
    alt: "Jar of Mana Ko Ghee",
  },
  {
    name: "Mana Ko Dahi",
    note: "Set yogurt from our dairy.",
    img: "/cutouts/dahi.png",
    alt: "Cup of Mana Ko Dahi",
  },
  {
    name: "Sahi Sukuti",
    note: "Chicken and buffalo dried meat.",
    img: "/cutouts/sukuti.png",
    alt: "Pack of Sahi Sukuti",
  },
  {
    name: "Mana Ko Achar",
    note: "Nepali pickles from our kitchens.",
    img: "/cutouts/achar.png",
    alt: "Jar of Mana Ko Achar",
  },
  {
    name: "Titaura",
    note: "Tangy fruit candy, traditional make.",
    img: "/cutouts/titaura.png",
    alt: "Pack of Titaura",
  },
] as const;

type Product = (typeof PRODUCTS)[number];

const SLOTS = [
  {
    key: "side-a",
    shell:
      "bg-white/12 backdrop-blur-md border border-white/25 md:rotate-[-3deg] md:translate-y-8",
    figure: "h-[12rem] sm:h-[13.5rem] md:h-[15.5rem] -mt-14 md:-mt-16",
    role: "side" as const,
  },
  {
    key: "center",
    shell:
      "bg-white shadow-[0_32px_64px_-24px_rgb(4_40_63_/_0.45)] md:scale-[1.08] md:-translate-y-3 border border-white/80",
    figure: "h-[14.5rem] sm:h-[17rem] md:h-[19.5rem] -mt-16 md:-mt-20",
    role: "center" as const,
  },
  {
    key: "side-b",
    shell:
      "bg-white/12 backdrop-blur-md border border-white/25 md:rotate-[3deg] md:translate-y-8",
    figure: "h-[12rem] sm:h-[13.5rem] md:h-[15.5rem] -mt-14 md:-mt-16",
    role: "side" as const,
  },
] as const;

function pickThree(start: number): Product[] {
  const n = PRODUCTS.length;
  return [0, 1, 2].map((i) => PRODUCTS[(start + i) % n]!);
}

/**
 * Steel-field product turntable: cutouts break the card frame on floating pedestals.
 */
export default function FeaturedProducts() {
  const root = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const visible = pickThree(index);

  const swapCards = useEffectEvent((next: number) => {
    const stage = stageRef.current;
    if (!stage) {
      setIndex(next);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIndex(next);
      return;
    }

    const cards = stage.querySelectorAll<HTMLElement>(".showcase-card");
    gsap.to(cards, {
      autoAlpha: 0,
      y: 18,
      scale: 0.96,
      duration: 0.32,
      stagger: 0.04,
      ease: "power2.in",
      onComplete: () => {
        setIndex(next);
        requestAnimationFrame(() => {
          const fresh = stage.querySelectorAll<HTMLElement>(".showcase-card");
          gsap.fromTo(
            fresh,
            { autoAlpha: 0, y: 22, scale: 0.94 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              stagger: 0.07,
              ease: "power3.out",
            },
          );
        });
      },
    });
  });

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      swapCards((index + 1) % PRODUCTS.length);
    }, 3800);

    return () => window.clearInterval(id);
  }, [index, paused]);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const header = root.current?.querySelector<HTMLElement>(".showcase-header");
      const stage = stageRef.current;
      const dots = root.current?.querySelector<HTMLElement>(".showcase-dots");
      const cards = gsap.utils.toArray<HTMLElement>(".showcase-card");
      const wash = root.current?.querySelector<HTMLElement>(".showcase-wash");

      if (wash) {
        gsap.fromTo(
          wash,
          { opacity: 0.7 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top bottom",
              end: "center center",
              scrub: 0.8,
            },
          },
        );
      }

      // Soft header rise — once, no reverse thrash
      if (header) {
        gsap.from(header.children, {
          y: 20,
          autoAlpha: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: header,
            start: "top 84%",
            once: true,
          },
        });
      }

      // Pedestals: only opacity + y so CSS tilt/offset stay intact
      if (cards.length && stage) {
        gsap.set(cards, { autoAlpha: 0, y: 40 });

        gsap.to(cards, {
          autoAlpha: 1,
          y: 0,
          duration: 1.15,
          stagger: { each: 0.16, from: "center" },
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: stage,
            start: "top 80%",
            once: true,
          },
        });

        // Gentle float after cards have settled — scrub lag for smoothness
        cards.forEach((card, i) => {
          const cutout = card.querySelector<HTMLElement>(".cutout");
          if (!cutout) return;
          gsap.to(cutout, {
            y: i === 1 ? -12 : -8,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              end: "bottom top",
              scrub: 1.6,
            },
          });
        });
      }

      if (dots) {
        gsap.from(dots.children, {
          autoAlpha: 0,
          y: 8,
          duration: 0.55,
          stagger: 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: dots,
            start: "top 94%",
            once: true,
          },
        });
      }
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-steel pt-20 pb-20 md:pt-28 md:pb-28"
      aria-label="Product showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div
        className="showcase-wash pointer-events-none absolute inset-0 will-change-transform"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgb(255 255 255 / 0.14), transparent 55%), radial-gradient(ellipse 50% 40% at 85% 80%, rgb(4 40 63 / 0.22), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 md:px-10">
        <div className="showcase-header flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[28rem]">
            <h2 className="font-display text-[clamp(2rem,4.2vw,3.35rem)] leading-[1.02] font-extrabold tracking-[-0.035em] text-white">
              What we bottle, churn and dry
            </h2>
            <p className="font-sans mt-3 text-[15px] leading-[1.65] text-white/75 md:text-base">
              Six kitchen staples on a turning stage. Pause on hover to look closer.
            </p>
          </div>
          <Link
            to="/products"
            className="font-display inline-flex h-12 w-fit cursor-pointer items-center gap-2 rounded-full bg-white px-6 text-[15px] font-extrabold text-steel transition-colors duration-200 hover:bg-mist active:scale-[0.98]"
          >
            See all products
            <ArrowUpRight size={16} weight="bold" />
          </Link>
        </div>

        <div
          ref={stageRef}
          className="mt-16 grid grid-cols-1 items-end gap-10 sm:mt-20 sm:grid-cols-3 sm:gap-5 md:gap-7 lg:mt-24"
          aria-live="polite"
        >
          {SLOTS.map((slot, i) => {
            const product = visible[i]!;
            const isCenter = slot.role === "center";
            return (
              <article
                key={slot.key}
                className={`showcase-card group relative flex flex-col overflow-visible rounded-[1.6rem] px-5 pt-2 pb-6 transition-transform duration-300 ${slot.shell}`}
              >
                {/* Soft shelf under the cutout */}
                <div
                  className={`pointer-events-none absolute inset-x-8 top-[42%] h-10 rounded-[100%] blur-xl ${
                    isCenter ? "bg-steel/20" : "bg-ink/25"
                  }`}
                  aria-hidden
                />

                <figure
                  className={`relative z-[1] mx-auto flex w-full items-end justify-center ${slot.figure}`}
                >
                  <img
                    src={product.img}
                    alt={product.alt}
                    className="cutout max-h-full w-auto max-w-[90%] object-contain drop-shadow-[0_22px_36px_rgb(4_40_63_/_0.4)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.05]"
                  />
                </figure>

                <div className="relative z-[1] mt-3 text-center">
                  <h3
                    className={`font-display font-extrabold tracking-[-0.03em] ${
                      isCenter
                        ? "text-[1.35rem] text-pine md:text-[1.55rem]"
                        : "text-[1.15rem] text-white md:text-[1.25rem]"
                    }`}
                  >
                    {product.name}
                  </h3>
                  <p
                    className={`font-sans mt-1.5 text-[13.5px] leading-[1.5] ${
                      isCenter ? "text-ink/55" : "text-white/70"
                    }`}
                  >
                    {product.note}
                  </p>
                </div>

                {isCenter && (
                  <div
                    className="mx-auto mt-4 h-1 w-10 rounded-full bg-steel/35"
                    aria-hidden
                  />
                )}
              </article>
            );
          })}
        </div>

        <div
          className="showcase-dots mt-12 flex flex-wrap items-center justify-center gap-2.5"
          role="tablist"
          aria-label="Showcase position"
        >
          {PRODUCTS.map((p, i) => {
            const active = i === index;
            return (
              <button
                key={p.name}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Show ${p.name}`}
                onClick={() => swapCards(i)}
                className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                  active ? "w-8 bg-white" : "w-2 bg-white/35 hover:bg-white/55"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
