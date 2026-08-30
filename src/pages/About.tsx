import { useRef, type ComponentType } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Leaf,
  Lightning,
  Heart,
  SealCheck,
  HandHeart,
  ThumbsUp,
  UsersThree,
  Crown,
  Package,
  Drop,
  Factory,
  Plant,
  Truck,
} from "@phosphor-icons/react";
import HomeFooter from "../components/home/HomeFooter";
import { CATALOG_CATEGORIES } from "../data/catalog";
import { prefersReducedMotion } from "../lib/anim";
import { gsap, useGSAP } from "../lib/gsap";

/**
 * THESIS: Full Himalayan dairy story. Clean frame, dense chapters.
 * OWN-WORLD: Canvas / white / steel; Outfit + Figtree; one steel signal.
 * STORY: Photo hook → facts → origin → process → pillars → vision → mission → why → pantry → CTA.
 * FIRST VIEWPORT: Full-bleed pasture, soft scrim, left type, one CTA.
 */

type IconComp = ComponentType<{ size?: number | string; weight?: "duotone" | "bold" | "fill" | "regular" }>;

const stats = [
  {
    label: "Established",
    value: "2014",
    note: "Farming and finishing in Kathmandu for over a decade.",
  },
  {
    label: "Facility",
    value: "Baluwatar",
    note: "Our dairy house sits in Baluwatar 4, Kathmandu.",
  },
  {
    label: "Workforce",
    value: "75%+ women",
    note: "Women lead a majority of the work across our teams.",
  },
  {
    label: "Focus",
    value: "Dairy & pantry",
    note: "Milk, ghee, pickles, dried meats, flours, and more.",
  },
] as const;

const processSteps = [
  {
    title: "Raise and source",
    body: "Healthy cows on our farm, plus carefully chosen local ingredients from across Nepal.",
    icon: Plant,
  },
  {
    title: "Make with care",
    body: "Traditional craft meets a modern Baluwatar facility built for clean, consistent dairy.",
    icon: Factory,
  },
  {
    title: "Finish and pack",
    body: "Every batch is finished for freshness, safety, and the taste people expect from Mana Ko.",
    icon: Drop,
  },
  {
    title: "Reach the table",
    body: "From farm to doorstep through shops and partners so households can cook with confidence.",
    icon: Truck,
  },
] as const;

const pillars = [
  {
    title: "Rooted in tradition",
    body: "Time-honored dairy craft and Nepali pantry methods stay intact in every batch. We keep the flavors families already know, then protect them with careful process.",
    points: ["Nepali pantry methods", "Familiar daily flavors", "Craft kept intact"],
    icon: Leaf,
  },
  {
    title: "Powered by innovation",
    body: "Modern facilities and careful process keep freshness, safety, and flavor holding together. Innovation here means better control, not shortcuts.",
    points: ["Modern dairy facility", "Consistent batches", "Safety with flavor"],
    icon: Lightning,
  },
  {
    title: "Crafted for nutrition",
    body: "Foods made for daily tables: wholesome, honest, and ready for real kitchens. From milk and ghee to pickles and staples, the aim is nourishment you can taste.",
    points: ["Daily-table foods", "Wholesome ingredients", "Ready for real kitchens"],
    icon: Heart,
  },
] as const;

const missions = [
  {
    title: "Quality first",
    body: "Produce quality products to the highest standards we can uphold, from farm care to finished packs.",
  },
  {
    title: "Taste that advances",
    body: "Keep traditional taste while advancing how we make each product, without losing what makes it Nepali.",
  },
  {
    title: "Local innovation",
    body: "Innovate new foods from native raw materials across Nepal, turning local resources into daily pantry staples.",
  },
  {
    title: "Women at the center",
    body: "Promote women empowerment, with women making up over 75% of our workforce across the farm and facility.",
  },
  {
    title: "Share the Himalaya",
    body: "Share Himalayan beauty by celebrating the places and resources behind our work, locally and beyond.",
  },
] as const;

const reasons = [
  {
    title: "Health and wellness first",
    body: "Your health sits at the center of every batch. We make products to nourish and energize your family, with care from farm through packing.",
    icon: HandHeart,
  },
  {
    title: "Goodness you can trust",
    body: "Pure, natural goodness: free from harmful chemicals, additives, or shortcuts. What goes in is chosen for honesty as much as flavor.",
    icon: ThumbsUp,
  },
  {
    title: "Customer-centric approach",
    body: "Every decision keeps your needs in mind. Products that meet expectations for taste, freshness, and everyday usefulness, then go further.",
    icon: UsersThree,
  },
  {
    title: "Premium quality products",
    body: "From careful cultivation to final packaging, every step is handled with excellence so the finished food feels worth bringing home.",
    icon: Crown,
  },
  {
    title: "Delivering the finest, always",
    body: "From farm to doorstep, every product that reaches you is fresh, safe, and held high. That promise is the point of the whole chain.",
    icon: Package,
  },
] as const;

const pantryStrip = CATALOG_CATEGORIES.filter((c) => c.cover).slice(0, 8);

function Mark({
  icon: Icon,
  tone = "soft",
  size = 22,
}: {
  icon: IconComp;
  tone?: "soft" | "steel" | "light";
  size?: number;
}) {
  const shell =
    tone === "steel"
      ? "bg-steel text-white"
      : tone === "light"
        ? "bg-white/15 text-white"
        : "bg-steel/10 text-steel";

  return (
    <span className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full ${shell}`}>
      <Icon size={size} weight="duotone" />
    </span>
  );
}

export default function About() {
  const root = useRef<HTMLElement>(null);
  const progress = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current) return;

      if (progress.current) {
        gsap.to(progress.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.35,
          },
        });
      }

      gsap.from(".about-hero-word", {
        yPercent: 110,
        duration: 1,
        stagger: 0.08,
        ease: "power4.out",
        delay: 0.06,
      });
      gsap.from(".about-hero-sub", {
        y: 18,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        delay: 0.28,
      });
      gsap.fromTo(
        ".about-hero-photo",
        { scale: 1.06 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        },
      );

      gsap.from(".about-stat", {
        y: 20,
        opacity: 0,
        duration: 0.55,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });

      const originFrame = root.current.querySelector(".about-origin-frame");
      const originImg = root.current.querySelector(".about-origin-frame img");
      if (originFrame && originImg) {
        gsap.set(originFrame, { clipPath: "inset(12% 10% 12% 10% round 1.5rem)" });
        gsap.set(originImg, { scale: 1.12 });
        gsap
          .timeline({
            scrollTrigger: {
              trigger: originFrame,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          })
          .to(originFrame, {
            clipPath: "inset(0% 0% 0% 0% round 1.5rem)",
            duration: 1.15,
            ease: "power4.inOut",
          })
          .to(originImg, { scale: 1, duration: 1.25, ease: "power2.out" }, 0);
      }

      [
        [".about-reveal", ".about-origin-copy"],
        [".about-collage-piece", ".about-collage"],
        [".about-step", ".about-process"],
        [".about-pillar", ".about-pillars"],
        [".about-vision-block", ".about-vision"],
        [".about-mission-item", ".about-mission-list"],
        [".about-reason", ".about-reason-grid"],
        [".about-pantry-item", ".about-pantry"],
        [".about-close > *", ".about-close"],
      ].forEach(([target, trigger]) => {
        gsap.from(target, {
          y: 28,
          opacity: 0,
          duration: 0.65,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <>
      <div
        ref={progress}
        className="pointer-events-none fixed left-0 top-0 z-[60] h-[2px] w-full origin-left scale-x-0 bg-steel"
        aria-hidden="true"
      />

      <main ref={root} className="bg-canvas">
        <section className="about-hero relative isolate min-h-[min(100dvh,56rem)] overflow-hidden bg-ink">
          <img
            src="/landing/about-hero.jpg"
            alt="Sunny Himalayan pasture with dairy cows grazing under a clear blue sky"
            className="about-hero-photo absolute inset-0 h-full w-full object-cover object-[48%_38%] will-change-transform"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgb(8 20 36 / 0.58) 0%, rgb(8 20 36 / 0.28) 42%, rgb(8 20 36 / 0.08) 68%, transparent 100%), linear-gradient(to top, rgb(8 20 36 / 0.45) 0%, transparent 42%)",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto flex min-h-[min(100dvh,56rem)] max-w-[1400px] flex-col justify-end px-5 pb-14 pt-24 md:px-10 md:pb-20 md:pt-24 xl:px-14">
            <div className="max-w-xl">
              <h1 className="font-display text-[clamp(2.85rem,7.5vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
                <span className="block overflow-hidden pb-1">
                  <span className="about-hero-word inline-block will-change-transform">Our</span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="about-hero-word inline-block will-change-transform">story</span>
                </span>
              </h1>
              <p className="about-hero-sub mt-5 max-w-md text-[1.05rem] leading-relaxed text-white/90 md:text-lg">
                Local resources. Modern dairy. High-quality foods for tables across Nepal.
              </p>
              <a
                href="#about-origin"
                className="about-hero-sub group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-steel transition-colors hover:bg-canvas active:scale-[0.98]"
              >
                Meet the farm
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Dense fact strip */}
        <section className="about-stats border-b border-ink/8 bg-white">
          <dl className="mx-auto grid max-w-[1400px] divide-y divide-ink/8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {stats.map(({ label, value, note }) => (
              <div key={label} className="about-stat px-5 py-8 md:px-8 md:py-10 xl:px-10">
                <dt className="text-sm text-ink-soft">{label}</dt>
                <dd className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-ink md:text-[1.85rem]">
                  {value}
                </dd>
                <p className="mt-3 max-w-[18rem] text-sm leading-relaxed text-ink-soft">{note}</p>
              </div>
            ))}
          </dl>
        </section>

        {/* Origin essay + photos */}
        <section
          id="about-origin"
          className="about-origin relative scroll-mt-24 bg-white pb-20 pt-16 md:pb-28 md:pt-24"
        >
          <div className="mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
            <div className="about-origin-copy max-w-3xl">
              <h2 className="about-reveal font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-steel">
                A Himalayan dairy house since 2014
              </h2>
              <p className="about-reveal mt-5 max-w-2xl text-[1.08rem] leading-relaxed text-ink-soft md:text-[1.12rem]">
                Through Mana Ko and our sister brands, we develop FMCG products that meet daily
                needs with care. Fine raw materials. Traditional craft. Modern methods. Every batch
                stays delicious and healthy.
              </p>
              <p className="about-reveal mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
                Healthy dairy is produced at our farm by our farmers and cows. We combine traditional
                methods with modern care so freshness, safety, and flavor hold together from pasture
                to pack.
              </p>
            </div>

            <figure className="about-origin-frame mt-12 overflow-hidden rounded-[var(--radius-panel)] will-change-[clip-path] md:mt-16">
              <img
                src="/landing/about-origin.jpg"
                alt="Vibrant dairy herd on bright Manaram Farm pasture with Himalayan peaks"
                className="aspect-[16/9] w-full object-cover md:aspect-[21/9]"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div className="about-collage mt-14 grid items-start gap-8 md:mt-20 md:grid-cols-12 md:gap-10">
              <figure className="about-collage-piece overflow-hidden rounded-[var(--radius-panel)] md:col-span-7">
                <img
                  src="/landing/about-facility.jpg"
                  alt="Bright daylight over stainless steel dairy tanks at Manaram Farm"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="about-collage-piece md:col-span-5">
                <figure className="overflow-hidden rounded-[var(--radius-panel)]">
                  <img
                    src="/landing/about-craft.jpg"
                    alt="Thick yogurt pour into a bowl on a steel-blue cloth"
                    className="aspect-[4/5] max-h-[22rem] w-full object-cover md:max-h-none"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <h3 className="mt-7 font-display text-[clamp(1.4rem,2.6vw,1.9rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-steel">
                  Built in Baluwatar for clean, consistent dairy
                </h3>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
                  Since 2014 we have worked to utilize and promote local resources across Nepal. From
                  milk and ghee to pickles, dried meats, and pantry staples, everything starts on our
                  farm and moves through a facility designed for care at every step.
                </p>
                <ul className="mt-6 space-y-3 border-t border-ink/10 pt-6 text-[0.98rem] text-ink">
                  <li className="flex justify-between gap-4 border-b border-ink/8 pb-3">
                    <span className="text-ink-soft">Location</span>
                    <span className="font-medium">Baluwatar 4, Kathmandu</span>
                  </li>
                  <li className="flex justify-between gap-4 border-b border-ink/8 pb-3">
                    <span className="text-ink-soft">Brands</span>
                    <span className="font-medium">Mana Ko and sister lines</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span className="text-ink-soft">Range</span>
                    <span className="font-medium">Dairy, pantry, achar, more</span>
                  </li>
                </ul>
                <Link
                  to="/products"
                  className="group mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-steel transition-colors hover:text-steel-deep"
                >
                  See what we make
                  <ArrowUpRight
                    size={16}
                    weight="bold"
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process: something always happening */}
        <section className="about-process relative border-y border-ink/8 bg-canvas py-16 md:py-20">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
            <div className="max-w-2xl">
              <h2 className="font-display text-[clamp(1.7rem,3.2vw,2.35rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-steel">
                From farm to table
              </h2>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
                A clear path behind every bottle, tin, and pouch: raise and source, make with care,
                finish and pack, then reach the table.
              </p>
            </div>
            <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {processSteps.map(({ title, body, icon }, i) => (
                <li
                  key={title}
                  className="about-step rounded-[var(--radius-panel)] border border-ink/8 bg-white p-6 shadow-[0_18px_40px_-34px_rgb(8_20_36_/_0.4)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <Mark icon={icon} />
                    <span className="font-mono text-xs font-medium text-steel">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                    {title}
                  </h3>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-soft">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pillars */}
        <section className="about-pillars relative overflow-hidden bg-ink py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
            <div className="max-w-2xl">
              <h2 className="font-display text-[clamp(1.85rem,3.6vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white">
                How we make food worth trusting
              </h2>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-white/70">
                Three commitments behind every product that leaves Baluwatar: tradition, innovation,
                and nutrition working as one.
              </p>
            </div>

            <ul className="mt-14 space-y-0 border-t border-white/12 md:mt-16">
              {pillars.map(({ title, body, points, icon }, i) => (
                <li
                  key={title}
                  className="about-pillar grid gap-6 border-b border-white/12 py-10 md:grid-cols-12 md:gap-10 md:py-12"
                >
                  <div className="md:col-span-5">
                    <div className="flex items-center gap-4">
                      <span className="font-display text-4xl font-semibold tracking-[-0.04em] text-white/25 md:text-5xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Mark icon={icon} tone="light" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.02em] text-white md:text-[1.75rem]">
                      {title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="max-w-xl text-[1.05rem] leading-relaxed text-white/72">{body}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {points.map((point) => (
                        <li
                          key={point}
                          className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-sm text-white/80"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Vision with supporting body */}
        <section className="about-vision relative overflow-hidden bg-canvas py-20 md:py-28">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-14 xl:px-14">
            <div className="about-vision-block lg:col-span-8">
              <h2 className="font-display text-[clamp(1.85rem,4.2vw,3.1rem)] font-semibold leading-[1.12] tracking-[-0.035em] text-ink">
                High-quality Himalayan foods, made with innovative methods, shared locally and
                globally to help reduce Nepal&apos;s trade deficit.
              </h2>
            </div>
            <div className="about-vision-block flex flex-col justify-end gap-6 lg:col-span-4">
              <p className="text-[1.05rem] leading-relaxed text-ink-soft">
                We grow and source across Nepal to support our community, then finish each batch with
                traditional craft and contemporary standards.
              </p>
              <p className="text-[1.05rem] leading-relaxed text-ink-soft">
                Local resources. Modern methods. One farm you can trust when you open the pack.
              </p>
              <div className="grid grid-cols-3 gap-3 border-t border-ink/10 pt-6">
                {[
                  ["Local", "Nepal-first sourcing"],
                  ["Modern", "Careful process"],
                  ["Shared", "Tables near and far"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <p className="font-display text-lg font-semibold text-steel">{k}</p>
                    <p className="mt-1 text-xs leading-snug text-ink-soft">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="about-mission relative bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
                <Mark icon={SealCheck} />
                <h2 className="mt-5 font-display text-[clamp(1.85rem,3.4vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-steel">
                  Our mission
                </h2>
                <p className="mt-4 max-w-sm text-[1.05rem] leading-relaxed text-ink-soft">
                  Five commitments that guide how we farm, cook, hire, and ship. This is the work
                  behind Mana Ko and every sister brand on the shelf.
                </p>
              </div>
              <ol className="about-mission-list space-y-0 border-t border-ink/10 lg:col-span-8">
                {missions.map(({ title, body }, i) => (
                  <li
                    key={title}
                    className="about-mission-item grid gap-3 border-b border-ink/8 py-7 md:grid-cols-[auto_1fr] md:gap-7 md:py-8"
                  >
                    <span className="font-mono text-sm font-medium text-steel">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                        {title}
                      </h3>
                      <p className="mt-2 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
                        {body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Why mosaic */}
        <section className="about-why relative bg-canvas py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
            <div className="max-w-2xl">
              <h2 className="font-display text-[clamp(1.85rem,3.6vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-steel">
                Why choose Manaram Farm products?
              </h2>
              <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
                We do more than grow. We care. Every product reflects our commitment to quality,
                health, and the people who cook with us.
              </p>
            </div>

            <ul className="about-reason-grid mt-12 grid gap-4 md:mt-16 md:grid-cols-6 md:gap-5">
              {reasons.map(({ title, body, icon }, i) => {
                const span =
                  i === 0 ? "md:col-span-4" : i === 1 ? "md:col-span-2" : "md:col-span-2";
                const solid = i === 0 || i === 4;
                return (
                  <li
                    key={title}
                    className={`about-reason rounded-[var(--radius-panel)] p-6 md:p-7 ${span} ${
                      solid
                        ? "steel-panel"
                        : "border border-ink/8 bg-white shadow-[0_18px_40px_-32px_rgb(8_20_36_/_0.4)]"
                    }`}
                  >
                    <Mark icon={icon} tone={solid ? "light" : "soft"} />
                    <h3
                      className={`mt-5 font-display text-xl font-semibold tracking-[-0.02em] md:text-[1.35rem] ${
                        solid ? "text-white" : "text-ink"
                      }`}
                    >
                      {title}
                    </h3>
                    <p
                      className={`mt-3 text-[1.02rem] leading-relaxed ${
                        solid ? "text-white/75" : "text-ink-soft"
                      }`}
                    >
                      {body}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Pantry families: visual activity */}
        <section className="about-pantry relative bg-white py-20 md:py-24">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <h2 className="font-display text-[clamp(1.7rem,3.2vw,2.35rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-steel">
                  What leaves our shelves
                </h2>
                <p className="mt-3 text-[1.05rem] leading-relaxed text-ink-soft">
                  Dairy, achar, dried meats, flours, grains, spices, and more under Mana Ko and our
                  sister lines.
                </p>
              </div>
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 text-[15px] font-semibold text-steel transition-colors hover:text-steel-deep"
              >
                Browse products
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:mt-12 md:grid-cols-4 md:gap-4">
              {pantryStrip.map(({ id, label, cover }) => (
                <li key={id} className="about-pantry-item group overflow-hidden rounded-[var(--radius-soft)]">
                  <Link to="/products" className="relative block aspect-[4/5] overflow-hidden bg-mist">
                    <img
                      src={cover!}
                      alt={label}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgb(8 20 36 / 0.72) 0%, rgb(8 20 36 / 0.1) 55%, transparent 100%)",
                      }}
                      aria-hidden="true"
                    />
                    <span className="absolute inset-x-0 bottom-0 p-3 font-display text-sm font-semibold tracking-[-0.02em] text-white md:p-4 md:text-base">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Close */}
        <section className="relative bg-canvas pb-20 md:pb-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
            <div className="about-close grid gap-8 rounded-[var(--radius-panel)] steel-panel p-8 md:grid-cols-[1.2fr_auto] md:items-center md:gap-12 md:p-12">
              <div>
                <div className="flex items-start gap-4">
                  <Mark icon={SealCheck} tone="light" />
                  <div>
                    <p className="font-display text-xl font-semibold tracking-[-0.02em] text-white md:text-2xl">
                      ISO certified
                    </p>
                    <p className="mt-2 max-w-lg text-[1.05rem] leading-relaxed text-white/75">
                      A mark of our promise for healthier, safer, better food. Taste the farm in
                      every batch from Baluwatar 4, Kathmandu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-steel transition-colors hover:bg-canvas active:scale-[0.98]"
                >
                  Explore products
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10 active:scale-[0.98]"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <HomeFooter />
    </>
  );
}
