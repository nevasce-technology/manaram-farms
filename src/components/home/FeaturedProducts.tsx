import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CaretLeft, CaretRight } from "@phosphor-icons/react";
import {
  CATALOG_CATEGORIES,
  CATALOG_PRODUCTS,
  type CatalogCategory,
} from "../../data/catalog";
import { prefersReducedMotion } from "../../lib/anim";
import { gsap, ScrollTrigger, useGSAP } from "../../lib/gsap";

const PER_PAGE = 3;
const CYCLE_MS = 5500;
const PAGE_COUNT = Math.ceil(CATALOG_CATEGORIES.length / PER_PAGE);

function countInCategory(name: string) {
  return CATALOG_PRODUCTS.filter((p) => p.category === name).length;
}

function preloadImage(src: string) {
  if (!src || typeof window === "undefined") return;
  const img = new Image();
  img.decoding = "async";
  img.src = src;
}

function preloadCategorySlice(start: number) {
  CATALOG_CATEGORIES.slice(start, start + PER_PAGE).forEach((cat) => {
    const src = cat.cutout ?? cat.cover;
    if (src) preloadImage(src);
  });
}

export default function FeaturedProducts() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = prefersReducedMotion();

  const slice = CATALOG_CATEGORIES.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  // Warm the full category set so rotation never waits on network
  useEffect(() => {
    CATALOG_CATEGORIES.forEach((cat) => {
      const src = cat.cutout ?? cat.cover;
      if (src) preloadImage(src);
    });
  }, []);

  useEffect(() => {
    preloadCategorySlice(((page + 1) % PAGE_COUNT) * PER_PAGE);
  }, [page]);

  // Recalc ScrollTrigger after images settle
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const imgs = Array.from(el.querySelectorAll("img"));
    if (!imgs.length) {
      ScrollTrigger.refresh();
      return;
    }
    let pending = imgs.length;
    const tick = () => {
      pending -= 1;
      if (pending <= 0) ScrollTrigger.refresh();
    };
    imgs.forEach((img) => {
      if (img.complete) tick();
      else {
        img.addEventListener("load", tick, { once: true });
        img.addEventListener("error", tick, { once: true });
      }
    });
  }, [page]);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current) return;

      const headTl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      headTl
        .from(".cat-head h2", {
          yPercent: 80,
          opacity: 0,
          rotateX: 55,
          transformOrigin: "50% 100%",
          duration: 0.95,
          ease: "power4.out",
        })
        .from(
          ".cat-head p",
          {
            y: 24,
            opacity: 0,
            filter: "blur(6px)",
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .from(
          ".cat-head a",
          {
            scale: 0.86,
            opacity: 0,
            duration: 0.55,
            ease: "back.out(1.6)",
          },
          "-=0.4",
        );

      gsap.from(".cat-stage", {
        y: 64,
        opacity: 0,
        scale: 0.92,
        filter: "blur(12px)",
        duration: 1.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".cat-nav", {
        scaleX: 0.4,
        opacity: 0,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 62%",
          toggleActions: "play none none reverse",
        },
      });

      // Soft scrubbed light wash across the stage
      gsap.fromTo(
        ".cat-scrub-light",
        { opacity: 0.15, xPercent: -12 },
        {
          opacity: 0.45,
          xPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".cat-card").forEach((card, i) => {
        gsap.to(card, {
          y: (i - 1) * -16,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
          },
        });
      });
    },
    { scope: root },
  );

  // Page-change card choreography
  useGSAP(
    () => {
      if (!track.current) return;
      const cards = track.current.querySelectorAll(".cat-card");
      if (prefersReducedMotion()) {
        gsap.set(cards, { clearProps: "all", opacity: 1, y: 0, scale: 1, rotateY: 0 });
        return;
      }
      gsap.fromTo(
        cards,
        {
          y: 48,
          opacity: 0,
          scale: 0.88,
          rotateY: (i: number) => (i - 1) * 12,
          transformPerspective: 900,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 0.7,
          stagger: 0.11,
          ease: "power3.out",
          overwrite: true,
        },
      );
    },
    { scope: root, dependencies: [page], revertOnUpdate: true },
  );

  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setTimeout(() => {
      setPage((p) => (p + 1) % PAGE_COUNT);
    }, CYCLE_MS);
    return () => window.clearTimeout(id);
  }, [page, paused, reduce]);

  const goToPage = (next: number) => setPage((next + PAGE_COUNT) % PAGE_COUNT);
  const goPrev = () => goToPage(page - 1);
  const goNext = () => goToPage(page + 1);

  return (
    <section
      ref={root}
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background:
          "radial-gradient(ellipse 80% 55% at 50% 0%, rgb(70 155 215 / 0.35), transparent 55%), linear-gradient(160deg, #0d78b6 0%, #005a96 48%, #00375f 100%)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grain-overlay absolute inset-0 opacity-[0.09] mix-blend-soft-light" aria-hidden="true" />
      <div
        className="cat-scrub-light pointer-events-none absolute -left-1/4 top-1/3 h-72 w-1/2 rounded-full bg-white/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
        <div className="cat-head flex flex-col gap-6 [perspective:900px] sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-lg">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.1rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white will-change-transform">
              What we make
            </h2>
            <p className="mt-3 text-[1.05rem] leading-relaxed text-white/72">
              Dairy, pantry, and kitchen staples across eleven categories.
            </p>
          </div>
          <Link
            to="/products"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-semibold text-[#00375f] transition-colors hover:bg-[#eef5fa] active:scale-[0.98]"
          >
            Full catalog
            <ArrowUpRight
              size={14}
              weight="bold"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="cat-stage relative mt-12 md:mt-16">
          <div
            ref={track}
            className="flex gap-4 overflow-x-auto pb-2 [perspective:1100px] sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:pb-0"
          >
            {slice.map((cat, i) => (
              <CategoryCard key={`${page}-${cat.id}`} category={cat} priority={i === 0 && page === 0} />
            ))}
          </div>
        </div>

        <div className="cat-nav mt-10 flex items-center justify-center gap-4 md:mt-12 md:gap-6">
          <button
            type="button"
            aria-label="Previous categories"
            onClick={goPrev}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors hover:border-white/50 hover:bg-white/20 active:scale-[0.96] md:size-12"
          >
            <CaretLeft size={22} weight="bold" aria-hidden="true" />
          </button>

          <div className="cat-pills flex items-center gap-2.5 md:gap-3">
            {Array.from({ length: PAGE_COUNT }, (_, i) => {
              const active = i === page;
              return (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show categories ${i * PER_PAGE + 1} to ${Math.min((i + 1) * PER_PAGE, CATALOG_CATEGORIES.length)}`}
                  aria-current={active ? "true" : undefined}
                  onClick={() => setPage(i)}
                  className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                    active
                      ? "h-3 w-16 bg-white/25 md:h-3.5 md:w-20"
                      : "size-3 bg-white/35 hover:bg-white/55 md:size-3.5"
                  }`}
                >
                  {active && !reduce ? (
                    <span
                      key={`${page}-${paused}`}
                      className="category-pill-fill absolute inset-y-0 left-0 w-full rounded-full bg-white"
                      style={{
                        animationPlayState: paused ? "paused" : "running",
                        animationDuration: `${CYCLE_MS}ms`,
                      }}
                    />
                  ) : active ? (
                    <span className="absolute inset-0 rounded-full bg-white" />
                  ) : null}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            aria-label="Next categories"
            onClick={goNext}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors hover:border-white/50 hover:bg-white/20 active:scale-[0.96] md:size-12"
          >
            <CaretRight size={22} weight="bold" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  category,
  priority,
}: {
  category: CatalogCategory;
  priority?: boolean;
}) {
  const count = countInCategory(category.name);
  const img = category.cutout ?? category.cover;

  return (
    <div className="cat-card w-[min(78vw,20rem)] shrink-0 sm:w-auto sm:shrink will-change-transform">
      <Link
        to={`/products?cat=${category.id}`}
        className="group relative flex aspect-[4/5] flex-col overflow-hidden rounded-[1.5rem] outline-none transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 focus-visible:ring-2 focus-visible:ring-white/70 active:scale-[0.99] md:rounded-[1.75rem]"
        style={{
          background:
            "linear-gradient(165deg, rgb(255 255 255 / 0.2) 0%, rgb(255 255 255 / 0.06) 42%, rgb(255 255 255 / 0.92) 42%, rgb(248 251 253) 100%)",
          boxShadow:
            "0 28px 56px -28px rgb(0 20 50 / 0.55), inset 0 1px 0 rgb(255 255 255 / 0.35)",
          border: "1px solid rgb(255 255 255 / 0.28)",
        }}
      >
        <div className="relative flex min-h-0 flex-[1.15] items-center justify-center px-5 pt-8 pb-2">
          <span
            className="pointer-events-none absolute bottom-[12%] left-1/2 h-24 w-[70%] -translate-x-1/2 rounded-[100%] bg-white/35 blur-2xl transition-opacity duration-500 group-hover:opacity-90"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute bottom-[18%] left-1/2 h-2.5 w-[40%] -translate-x-1/2 rounded-full bg-ink/20 blur-md"
            aria-hidden="true"
          />
          {img ? (
            <img
              src={img}
              alt={category.label}
              width={420}
              height={420}
              className="product-cutout relative z-[1] h-[78%] w-auto max-w-[88%] object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] group-hover:-translate-y-1"
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={priority ? "high" : "auto"}
            />
          ) : null}
        </div>

        <div className="relative flex shrink-0 flex-col justify-end px-6 pb-6 pt-4 md:px-7 md:pb-7">
          <h3 className="font-display text-[1.25rem] font-semibold leading-snug tracking-[-0.03em] text-ink md:text-[1.4rem]">
            {category.label}
          </h3>
          <div className="mt-3 flex items-center justify-between gap-3">
            <p className="text-[0.88rem] text-ink-soft">
              {count} {count === 1 ? "product" : "products"}
            </p>
            <span className="inline-flex size-9 items-center justify-center rounded-full bg-steel text-white transition-transform duration-300 group-hover:scale-105 group-hover:bg-steel-deep">
              <ArrowUpRight size={15} weight="bold" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
