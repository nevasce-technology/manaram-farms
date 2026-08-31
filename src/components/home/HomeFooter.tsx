import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, InstagramLogo, FacebookLogo, YoutubeLogo } from "@phosphor-icons/react";
import { foodSafetyCert } from "../../data/about-data";
import { prefersReducedMotion } from "../../lib/anim";
import { gsap, useGSAP } from "../../lib/gsap";
import { CertLogos } from "../ui/FoodSafetyCert";

const explore = [
  { to: "/about", label: "Our Story" },
  { to: "/products", label: "Products" },
  { to: "/recipes", label: "Recipes" },
  { to: "/contact", label: "Contact" },
] as const;

const social = [
  {
    href: "https://www.instagram.com/manaram.farm/",
    label: "Instagram",
    icon: InstagramLogo,
  },
  {
    href: "https://www.facebook.com/people/Manaram-Farm-Pvt-Ltd/61551033322466/",
    label: "Facebook",
    icon: FacebookLogo,
  },
  {
    href: "https://www.youtube.com/@ManaKoKitchen",
    label: "YouTube",
    icon: YoutubeLogo,
  },
] as const;

export default function HomeFooter() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current) return;

      gsap.from(".foot-reveal", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 92%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: root },
  );

  return (
    <footer ref={root} className="site-footer">
      <div className="site-footer__panel">
        <div className="site-footer__sheen pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.07]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1400px] px-5 pt-14 md:px-10 md:pt-16 xl:px-14 xl:pt-[4.5rem]">
          <div className="foot-reveal grid gap-12 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
            <div className="lg:col-span-5">
              <div className="inline-flex rounded-2xl bg-white/96 px-5 py-3.5 shadow-[0_12px_32px_rgb(0_20_40_/_0.18)]">
                <img
                  src="/logo.png"
                  alt="Manaram Farm"
                  className="h-14 w-auto md:h-16"
                  width={240}
                  height={52}
                />
              </div>
              <p className="mt-7 max-w-[22rem] text-[1.05rem] leading-[1.65] text-white/78">
                Premium dairy and pantry from our Jhapa farm. Established 2014, rooted in local
                resources and honest craft.
              </p>
              <Link to="/products" className="footer-cta group mt-8 inline-flex items-center gap-2.5">
                <span>Browse the pantry</span>
                <ArrowUpRight
                  size={17}
                  weight="bold"
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7 lg:gap-8">
              <div>
                <h3 className="font-display text-[0.95rem] font-semibold tracking-[-0.02em] text-white">
                  Explore
                </h3>
                <ul className="mt-5 space-y-3">
                  {explore.map((item) => (
                    <li key={item.to}>
                      <Link to={item.to} className="footer-link">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-[0.95rem] font-semibold tracking-[-0.02em] text-white">
                  Contact
                </h3>
                <address className="mt-5 space-y-3 not-italic text-sm leading-relaxed text-white/72">
                  <p>Head office: Baluwatar 4, Kathmandu</p>
                  <p>Farm and facility: Jhapa, eastern Nepal</p>
                  <p>
                    <a href="tel:+977015971547" className="footer-link footer-link--plain">
                      +977-01-5971547
                    </a>
                  </p>
                  <p>
                    <a href="mailto:info@manaram.group" className="footer-link footer-link--plain">
                      info@manaram.group
                    </a>
                  </p>
                </address>
              </div>

              <div className="flex flex-col">
                <h3 className="font-display text-[0.95rem] font-semibold tracking-[-0.02em] text-white">
                  Follow
                </h3>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {social.map(({ href, label, icon: Icon }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="footer-social"
                    >
                      <Icon size={19} weight="fill" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="foot-reveal site-footer__cert relative mx-auto mt-12 max-w-[1400px] px-5 pb-12 md:mt-14 md:px-10 md:pb-14 xl:px-14 xl:pb-16"
          aria-label={`${foodSafetyCert.standard} food safety certification`}
        >
          <div className="site-footer__cert-inner flex flex-col gap-7 md:flex-row md:items-center md:justify-between md:gap-10">
            <div className="min-w-0 max-w-xl">
              <h2 className="font-display text-[clamp(1.35rem,2.4vw,1.85rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-white">
                {foodSafetyCert.standard}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-white/74">{foodSafetyCert.body}</p>
              <p className="mt-3 text-xs leading-relaxed text-white/52">
                {foodSafetyCert.accreditation}
                <span className="mx-2 opacity-35" aria-hidden="true">
                  ·
                </span>
                {foodSafetyCert.certificate}
              </p>
            </div>
            <div className="site-footer__cert-badges shrink-0">
              <CertLogos
                logoHeight="h-[3.5rem] md:h-16"
                logoWidths={["max-w-[11.5rem]", "max-w-[9.5rem]"]}
                className="gap-4 md:gap-5"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="foot-reveal site-footer__legal">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-5 text-xs md:flex-row md:items-center md:justify-between md:px-10 xl:px-14">
          <p>Jhapa facility · Kathmandu head office · Nepal</p>
          <p>© {new Date().getFullYear()} Manaram Farm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
