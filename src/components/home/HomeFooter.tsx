import { useRef } from "react";
import { Link } from "react-router-dom";
import { InstagramLogo, FacebookLogo, YoutubeLogo } from "@phosphor-icons/react";
import { prefersReducedMotion } from "../../lib/anim";
import { gsap, useGSAP } from "../../lib/gsap";

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

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".foot-col", {
        y: 48,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
      })
        .from(
          ".foot-link",
          {
            y: 14,
            opacity: 0,
            duration: 0.45,
            stagger: 0.05,
            ease: "power2.out",
          },
          "-=0.45",
        )
        .from(
          ".foot-social",
          {
            scale: 0.6,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "back.out(1.7)",
          },
          "-=0.35",
        )
        .from(
          ".foot-rule",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.7,
            ease: "power3.inOut",
          },
          "-=0.35",
        )
        .from(
          ".foot-copy",
          {
            y: 12,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.35",
        );
    },
    { scope: root },
  );

  return (
    <footer ref={root} className="steel-panel relative overflow-hidden">
      <div className="grain-overlay absolute inset-0 opacity-[0.08]" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20 xl:px-14">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:gap-10">
          <div className="foot-col">
            <img
              src="/logo.png"
              alt="Manaram Farm"
              className="h-10 w-auto brightness-0 invert"
              width={160}
              height={40}
            />
            <p className="mt-6 max-w-sm text-[1.05rem] leading-relaxed text-white/78">
              Premium dairy and pantry products from Kathmandu. Established 2014, rooted in local
              resources and honest craft.
            </p>
          </div>

          <div className="foot-col">
            <h3 className="font-display text-sm font-semibold text-white">Explore</h3>
            <ul className="mt-5 space-y-3">
              {explore.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="foot-link text-[15px] text-white/72 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot-col">
            <h3 className="font-display text-sm font-semibold text-white">Contact</h3>
            <address className="mt-5 space-y-3 not-italic text-[15px] leading-relaxed text-white/72">
              <p className="foot-link">Baluwatar 4, Kathmandu, Nepal</p>
              <p>
                <a
                  href="tel:+977015971547"
                  className="foot-link transition-colors hover:text-white"
                >
                  +977-01-5971547
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@manaram.group"
                  className="foot-link transition-colors hover:text-white"
                >
                  info@manaram.group
                </a>
              </p>
            </address>

            <div className="mt-8 flex gap-3">
              {social.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="foot-social flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/50 hover:bg-white/10 hover:text-white"
                >
                  <Icon size={18} weight="fill" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="foot-rule mt-14 origin-left border-t border-white/15" />
        <p className="foot-copy pt-8 text-sm text-white/60">
          © {new Date().getFullYear()} Manaram Farm. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
