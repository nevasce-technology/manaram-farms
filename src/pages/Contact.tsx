import { useRef } from "react";
import ContactChannels from "../components/contact/ContactChannels";
import ContactForm from "../components/contact/ContactForm";
import ContactHero from "../components/contact/ContactHero";
import ContactMap from "../components/contact/ContactMap";
import HomeFooter from "../components/home/HomeFooter";
import { prefersReducedMotion } from "../lib/anim";
import { gsap, useGSAP } from "../lib/gsap";

export default function Contact() {
  const main = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !main.current) return;

      gsap.from(".contact-main-form", {
        y: 28,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".contact-aside > *", {
        y: 22,
        autoAlpha: 0,
        duration: 0.65,
        stagger: 0.08,
        delay: 0.06,
        ease: "power3.out",
      });
    },
    { scope: main },
  );

  return (
    <>
      <ContactHero />
      <main ref={main} className="contact-page bg-canvas pb-16 md:pb-20">
        <div className="contact-main-panel mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
          <ContactChannels />
          <div className="contact-main-form">
            <ContactForm />
          </div>
        </div>
      </main>
      <ContactMap />
      <HomeFooter />
    </>
  );
}
