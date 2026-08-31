import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { CATALOG_CATEGORIES } from "../../data/catalog";
import { foodSafetyCert } from "../../data/about-data";
import { CertLogos } from "../ui/FoodSafetyCert";
import { cutoutObjectPosition } from "../../data/cutout-positions";
import { prefersReducedMotion } from "../../lib/anim";
import { gsap, useGSAP } from "../../lib/gsap";

const HERO_CATEGORIES = CATALOG_CATEGORIES.slice(0, 3);

const CLUSTER_SLOTS = [
  { slot: "products-hero-cluster__slot--left", width: "w-[38%] sm:w-[36%]" },
  { slot: "products-hero-cluster__slot--center", width: "w-[44%] sm:w-[42%]" },
  { slot: "products-hero-cluster__slot--right", width: "w-[38%] sm:w-[36%]" },
] as const;

export default function ProductsHero() {
  const root = useRef<HTMLElement>(null);
  const clusterRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current) return;

      gsap.from(".products-hero-copy > *", {
        y: 24,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.from(".products-hero-showcase", {
        y: 32,
        autoAlpha: 0,
        scale: 0.98,
        duration: 0.85,
        delay: 0.1,
        ease: "power3.out",
      });

      gsap.from(".products-hero-cluster__slot", {
        y: 24,
        autoAlpha: 0,
        duration: 0.65,
        stagger: 0.09,
        delay: 0.2,
        ease: "power3.out",
      });
    },
    { scope: root },
  );

  useEffect(() => {
    const node = clusterRef.current;
    if (!node || prefersReducedMotion()) return;

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(".products-hero-cluster__slot", {
        x: x * 8,
        y: y * 5,
        duration: 1.05,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    node.addEventListener("pointermove", onMove);
    return () => node.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      ref={root}
      className="products-hero relative overflow-hidden pt-24"
      style={{
        background:
          "radial-gradient(ellipse 88% 62% at 14% -6%, rgb(70 155 215 / 0.45), transparent 58%), radial-gradient(ellipse 60% 48% at 100% 100%, rgb(0 90 150 / 0.32), transparent 54%), linear-gradient(158deg, #0d78b6 0%, #005a96 44%, #00375f 100%)",
      }}
    >
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-soft-light" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-20 top-12 h-72 w-72 rounded-full bg-white/14 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-14 md:px-10 md:py-20 lg:py-20 xl:px-14">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20">
          <div className="products-hero-copy flex max-w-xl flex-col gap-8 lg:gap-10">
            <div className="space-y-5">
              <h1 className="font-display text-[clamp(2.35rem,5vw,3.75rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-white">
                Everything we make
              </h1>
              <p className="max-w-[36ch] text-lg leading-relaxed text-white/76 md:text-xl">
                Dairy, pickles, dried meats, and pantry staples from our Jhapa facility.
              </p>
            </div>

            <a
              href="#product-grid"
              className="inline-flex w-fit items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-[#00375f] transition-colors hover:bg-[#eef5fa] active:scale-[0.98]"
            >
              Browse catalog
              <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </a>

            <div className="rounded-[1.25rem] bg-white p-5 shadow-[0_24px_56px_-28px_rgb(0_20_40_/_0.45)] ring-1 ring-white/40">
              <CertLogos logoHeight="h-12 md:h-14" />
              <p className="mt-3 font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                {foodSafetyCert.standard}
              </p>
              <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-ink-soft">
                {foodSafetyCert.body}
              </p>
            </div>
          </div>

          <div className="products-hero-showcase relative flex w-full items-center justify-center">
            <div className="products-hero-showcase__halo" aria-hidden="true" />
            <div
              ref={clusterRef}
              className="products-hero-cluster relative flex w-full max-w-[40rem] items-center justify-center px-2 sm:px-4"
            >
              {HERO_CATEGORIES.map((cat, index) => {
                const cutout = cat.cutout;
                if (!cutout) return null;
                const layout = CLUSTER_SLOTS[index];

                return (
                  <Link
                    key={cat.id}
                    to={`/products?cat=${cat.id}`}
                    className={`products-hero-cluster__slot group relative shrink-0 ${layout.width} ${layout.slot}`}
                    aria-label={`Browse ${cat.label}`}
                  >
                    <img
                      src={cutout}
                      alt=""
                      width={420}
                      height={420}
                      className="category-cutout products-hero-cluster__cutout mx-auto w-full object-contain"
                      style={{ objectPosition: cutoutObjectPosition(cutout) }}
                      loading={index === 1 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </Link>
                );
              })}
            </div>
            <div className="products-hero-showcase__pedestal" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
