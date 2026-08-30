import { useRef } from "react";
import { useSectionReveal } from "../../hooks/useSectionReveal";

export default function AboutOrigin() {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  const stack = [
    {
      src: "/landing/about-facility.jpg",
      alt: "Stainless steel dairy tanks at Manaram Farm in Jhapa",
    },
    {
      src: "/landing/about-craft.jpg",
      alt: "Thick yogurt pour into a bowl on a steel-blue cloth",
    },
  ] as const;

  return (
    <section
      ref={sectionRef}
      id="about-origin"
      className="about-ground-white relative scroll-mt-24 overflow-hidden bg-white pb-20 pt-16 md:pb-28 md:pt-24"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-mist/60 to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div data-reveal-header className="lg:col-span-5">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-steel">
              Since 2014
            </p>
            <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-steel">
              A Himalayan dairy house since 2014
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Through Mana Ko and our sister brands, we develop FMCG products that meet daily needs
              with care. Fine raw materials. Traditional craft. Modern methods. Every batch stays
              delicious and healthy.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Healthy dairy is produced at our farm by our farmers and cows. We combine traditional
              methods with modern care so freshness, safety, and flavor hold together from pasture to
              pack.
            </p>
          </div>

          <div className="grid gap-4 lg:col-span-7 lg:grid-cols-2 lg:grid-rows-2">
            <div
              data-reveal="clip"
              className="overflow-hidden rounded-[1.35rem] lg:row-span-2"
            >
              <img
                src="/landing/about-origin.jpg"
                alt="Vibrant dairy herd on bright Manaram Farm pasture with Himalayan peaks"
                className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto lg:min-h-[28rem]"
                loading="lazy"
                decoding="async"
              />
            </div>
            {stack.map((image) => (
              <div key={image.src} data-reveal="clip" className="overflow-hidden rounded-[1.25rem]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[4/3] h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
