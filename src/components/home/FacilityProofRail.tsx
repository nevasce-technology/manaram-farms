import { useRef } from "react";
import { foodSafetyCert } from "../../data/about-data";
import { prefersReducedMotion } from "../../lib/anim";
import { gsap, useGSAP } from "../../lib/gsap";
import {
  LIFT_TOTAL_DURATION,
  RAIL_CONTENT_REVEAL_DELAY,
  REVEAL_SCALE_START,
} from "./home-intro-timing";

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

type FacilityProofRailProps = {
  skipIntro: boolean;
  revealStarted: boolean;
};

export default function FacilityProofRail({
  skipIntro,
  revealStarted,
}: FacilityProofRailProps) {
  const root = useRef<HTMLDivElement>(null);
  const zoom = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const eyebrows = useRef<(HTMLSpanElement | null)[]>([]);
  const labels = useRef<(HTMLElement | null)[]>([]);
  const values = useRef<(HTMLElement | null)[]>([]);
  const notes = useRef<(HTMLElement | null)[]>([]);
  const reduceMotion = prefersReducedMotion();

  useGSAP(
    () => {
      if (reduceMotion || skipIntro || !zoom.current || !panel.current) {
        if (skipIntro && zoom.current) {
          zoom.current.classList.add("facility-rail__zoom--ready");
        }
        return;
      }

      const eyebrowEls = eyebrows.current.filter(Boolean) as HTMLSpanElement[];
      const labelEls = labels.current.filter(Boolean) as HTMLElement[];
      const valueEls = values.current.filter(Boolean) as HTMLElement[];
      const noteEls = notes.current.filter(Boolean) as HTMLElement[];

      gsap.set(zoom.current, {
        scale: REVEAL_SCALE_START,
        transformOrigin: "50% 0%",
        force3D: true,
      });
      gsap.set(eyebrowEls, { scaleX: 0, force3D: true, transformOrigin: "left center" });
      gsap.set(labelEls, { y: 18, autoAlpha: 0 });
      gsap.set(valueEls, { y: 24, autoAlpha: 0, scale: 0.94 });
      gsap.set(noteEls, { y: 14, autoAlpha: 0 });
    },
    { scope: root },
  );

  useGSAP(
    () => {
      if (reduceMotion || skipIntro || !revealStarted || !zoom.current) return;

      gsap.killTweensOf(zoom.current);

      gsap.fromTo(
        zoom.current,
        {
          scale: REVEAL_SCALE_START,
          transformOrigin: "50% 0%",
          force3D: true,
        },
        {
          scale: 1,
          duration: LIFT_TOTAL_DURATION,
          ease: "power4.inOut",
          force3D: true,
          transformOrigin: "50% 0%",
          onComplete: () => {
            if (zoom.current) {
              zoom.current.classList.add("facility-rail__zoom--ready");
              gsap.set(zoom.current, { clearProps: "transform" });
            }
          },
        },
      );
    },
    { scope: root, dependencies: [revealStarted] },
  );

  useGSAP(
    () => {
      if (reduceMotion || skipIntro || !revealStarted || !panel.current) return;

      const eyebrowEls = eyebrows.current.filter(Boolean) as HTMLSpanElement[];
      const labelEls = labels.current.filter(Boolean) as HTMLElement[];
      const valueEls = values.current.filter(Boolean) as HTMLElement[];
      const noteEls = notes.current.filter(Boolean) as HTMLElement[];

      if (!eyebrowEls.length) return;

      const enter = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: RAIL_CONTENT_REVEAL_DELAY,
        onComplete: () => {
          gsap.set([...eyebrowEls, ...labelEls, ...valueEls, ...noteEls], {
            clearProps: "transform,opacity,visibility",
          });
        },
      });

      enter
        .to(eyebrowEls, {
          scaleX: 1,
          duration: 0.5,
          stagger: 0.09,
          ease: "power2.out",
          force3D: true,
        })
        .to(
          labelEls,
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.55,
            stagger: 0.08,
          },
          "-=0.35",
        )
        .to(
          valueEls,
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.65,
            stagger: 0.08,
            ease: "back.out(1.45)",
          },
          "-=0.42",
        )
        .to(
          noteEls,
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.07,
          },
          "-=0.38",
        );
    },
    { scope: root, dependencies: [revealStarted] },
  );

  return (
    <div ref={root} className="facility-rail" aria-label="Facility credentials">
      <div ref={zoom} className="facility-rail__zoom">
        <div ref={panel} className="facility-rail__panel">
          <dl className="facility-rail__grid">
            {credentials.map((item, index) => (
              <div key={item.id} className="facility-rail__item">
                <span
                  ref={(el) => {
                    eyebrows.current[index] = el;
                  }}
                  className="facility-rail__eyebrow"
                  aria-hidden="true"
                />
                <dt
                  ref={(el) => {
                    labels.current[index] = el;
                  }}
                  className="facility-rail__label"
                >
                  {item.label}
                </dt>
                <dd
                  ref={(el) => {
                    values.current[index] = el;
                  }}
                  className="facility-rail__value"
                >
                  {item.value}
                </dd>
                <p
                  ref={(el) => {
                    notes.current[index] = el;
                  }}
                  className="facility-rail__note"
                >
                  {item.note}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
