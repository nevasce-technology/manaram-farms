import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import { prefersReducedMotion } from "../../lib/anim";
import { gsap, useGSAP } from "../../lib/gsap";

const explore = [
  { label: "Products", to: "/products" },
  { label: "About", to: "/about" },
  { label: "Recipes", to: "/recipes" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Manaram-Farm-Pvt-Ltd/61551033322466/",
  },
  { label: "Instagram", href: "https://www.instagram.com/manaram.farm/" },
  { label: "YouTube", href: "https://www.youtube.com/@ManaKoKitchen" },
];

/**
 * Footer close: logo bloom, staggered columns, scrubbed wash drift.
 */
export default function HomeFooter() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const wash = root.current?.querySelector<HTMLElement>(".footer-wash");
      const brand = root.current?.querySelector<HTMLElement>(".footer-brand");
      const cols = gsap.utils.toArray<HTMLElement>(".footer-col");
      const legal = root.current?.querySelector<HTMLElement>(".footer-legal");

      if (wash) {
        gsap.fromTo(
          wash,
          { xPercent: -8, opacity: 0.6 },
          {
            xPercent: 6,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }

      if (brand) {
        gsap.from(brand.children, {
          y: 32,
          autoAlpha: 0,
          scale: (i) => (i === 0 ? 0.9 : 1),
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: brand,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (cols.length) {
        gsap.from(cols, {
          y: 40,
          autoAlpha: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cols[0],
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (legal) {
        gsap.from(legal, {
          autoAlpha: 0,
          y: 16,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: legal,
            start: "top 98%",
            toggleActions: "play none none reverse",
          },
        });
      }
    },
    { scope: root },
  );

  return (
    <footer
      ref={root}
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: "#0071bc" }}
    >
      <div
        className="footer-wash pointer-events-none absolute inset-0 will-change-transform"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 0% 0%, rgb(255 255 255 / 0.12), transparent 55%), radial-gradient(ellipse 45% 40% at 100% 100%, rgb(4 40 63 / 0.28), transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 pt-14 pb-8 sm:px-8 md:px-10 md:pt-16 md:pb-10">
        <div className="footer-brand flex flex-col gap-8 border-b border-white/15 pb-10 md:flex-row md:items-center md:justify-between md:pb-12">
          <Link to="/" className="inline-flex w-fit cursor-pointer">
            <img
              src="/logo.png"
              alt="Manaram Farm"
              className="h-11 w-auto object-contain brightness-0 invert md:h-14"
            />
          </Link>

          <Link
            to="/contact"
            className="font-display inline-flex h-12 w-fit shrink-0 cursor-pointer items-center gap-2 rounded-full bg-white px-7 text-[15px] font-extrabold text-[#0071bc] transition-colors duration-200 hover:bg-mist active:scale-[0.98]"
          >
            Write to us
            <ArrowUpRight size={16} weight="bold" aria-hidden />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-12 lg:gap-8">
          <div className="footer-col lg:col-span-3">
            <p className="font-display mb-4 text-[13px] font-extrabold text-white">
              Explore
            </p>
            <ul className="font-sans flex flex-col gap-2.5 text-[15px] text-white/70">
              {explore.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="cursor-pointer transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col font-sans space-y-2 text-[15px] leading-[1.55] text-white/70 lg:col-span-5">
            <p className="font-display mb-4 text-[13px] font-extrabold text-white">
              Visit and call
            </p>
            <p>Baluwatar 4, Kathmandu, Nepal</p>
            <p>Suite 105, 529 Bansidhar Marg</p>
            <a
              href="tel:+977015971547"
              className="mt-3 block cursor-pointer text-white transition-colors hover:text-white/85"
            >
              +977-01-5971547
            </a>
            <a
              href="mailto:info@manaram.group"
              className="block cursor-pointer text-white transition-colors hover:text-white/85"
            >
              info@manaram.group
            </a>
          </div>

          <div className="footer-col lg:col-span-4 lg:text-right">
            <p className="font-display mb-4 text-[13px] font-extrabold text-white">
              Follow along
            </p>
            <div className="font-sans flex flex-col gap-2.5 text-[15px] text-white/70 lg:items-end">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  rel="noreferrer"
                  target="_blank"
                  className="inline-flex cursor-pointer items-center gap-1.5 transition-colors hover:text-white"
                >
                  {s.label}
                  <ArrowUpRight size={14} weight="bold" aria-hidden className="opacity-50" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-legal mt-12 flex flex-col gap-3 border-t border-white/15 pt-7 md:mt-14 md:flex-row md:items-center md:justify-between">
          <p className="font-sans max-w-[42ch] text-[12.5px] leading-[1.55] text-white/45">
            ISO Certified: A mark of our promise for healthier, safer, better food.
          </p>
          <p className="font-sans text-[12.5px] text-white/40">
            2025 Manaram Farm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
