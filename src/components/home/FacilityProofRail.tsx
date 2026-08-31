import { useRef } from "react";
import { foodSafetyCert } from "../../data/about-data";
import { prefersReducedMotion } from "../../lib/anim";
import { gsap, useGSAP } from "../../lib/gsap";

const credentials = [
  {
    id: "established",
    label: "Established",
    value: "2014",
    note: "Farm and facility in Jhapa",
  },
  {
    id: "iso",
    label: "Food safety",
    value: foodSafetyCert.standard,
    note: "Certified food safety system",
  },
  {
    id: "accreditation",
    label: "Accreditation",
    value: "IAS Accredited",
    note: "MSCB-113",
  },
  {
    id: "registration",
    label: "Registration",
    value: "G-CERT2",
    note: "GINE-0068-FC registered",
  },
] as const;

export default function FacilityProofRail() {
  const root = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current || !panel.current) return;

      const enter = gsap.timeline({ delay: 0.95 });

      enter
        .from(panel.current, {
          y: 80,
          opacity: 0,
          duration: 1.1,
          ease: "power4.out",
        })
        .from(
          ".facility-rail__label",
          {
            y: 16,
            opacity: 0,
            letterSpacing: "0.32em",
            duration: 0.55,
            stagger: 0.07,
            ease: "power2.out",
          },
          "-=0.72",
        )
        .from(
          ".facility-rail__value",
          {
            y: 24,
            opacity: 0,
            scale: 0.9,
            duration: 0.65,
            stagger: 0.08,
            ease: "back.out(1.5)",
          },
          "-=0.48",
        )
        .from(
          ".facility-rail__note",
          {
            y: 12,
            opacity: 0,
            duration: 0.45,
            stagger: 0.06,
            ease: "power2.out",
          },
          "-=0.42",
        );
    },
    { scope: root },
  );

  return (
    <div ref={root} className="facility-rail" aria-label="Facility credentials">
      <div ref={panel} className="facility-rail__panel">
        <dl className="facility-rail__grid">
          {credentials.map((item) => (
            <div key={item.id} className="facility-rail__item">
              <dt className="facility-rail__label">{item.label}</dt>
              <dd className="facility-rail__value">{item.value}</dd>
              <p className="facility-rail__note">{item.note}</p>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
