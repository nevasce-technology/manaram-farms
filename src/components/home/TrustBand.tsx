import { useRef } from "react";
import {
  CircleCheckIcon,
  HeartIcon,
  ShieldCheckIcon,
} from "@animateicons/react/lucide";
import { gsap, useGSAP } from "../../lib/gsap";
import { HoverIcon } from "../ui/HoverIcon";

const claims = [
  {
    icon: CircleCheckIcon,
    title: "Premium quality",
    line: "Made in our own kitchens, not bought in and relabelled.",
  },
  {
    icon: HeartIcon,
    title: "Health first",
    line: "Everyday food chosen for what it does at home.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Goodness you can trust",
    line: "Twelve kitchens working to one standard since 2014.",
  },
];

export default function TrustBand() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".claim", {
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 85%", once: true },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-mist pb-16 md:pb-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-x-10 gap-y-8 border-t border-pine/15 pt-10 sm:grid-cols-3 md:pt-12">
          {claims.map(({ icon, title, line }) => (
            <div key={title} className="claim group">
              <HoverIcon
                className="flex cursor-default items-center"
                icon={icon}
                iconClassName="text-steel transition-colors duration-300 group-hover:text-steel-soft"
                size={28}
              />
              <h2 className="font-display mt-4 text-[1.15rem] leading-tight font-extrabold tracking-tight text-pine md:text-[1.3rem]">
                {title}
              </h2>
              <p className="font-sans mt-2 max-w-[34ch] text-[14.5px] leading-[1.6] text-pine/60">
                {line}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
