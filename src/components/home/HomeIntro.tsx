import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../../lib/anim";
import { gsap, useGSAP } from "../../lib/gsap";
import {
  COL_DURATION,
  COL_STAGGER,
  COLUMN_COUNT,
  LIFT_TOTAL_DURATION,
} from "./home-intro-timing";

const WELCOME = "Welcome to Manaram Farms. Dairy rooted in Jhapa, Nepal.";

type HomeIntroProps = {
  onLiftStart: () => void;
  onComplete: () => void;
};

export default function HomeIntro({ onLiftStart, onComplete }: HomeIntroProps) {
  const root = useRef<HTMLDivElement>(null);
  const brand = useRef<HTMLDivElement>(null);
  const onLiftStartRef = useRef(onLiftStart);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onLiftStartRef.current = onLiftStart;
    onCompleteRef.current = onComplete;
  }, [onLiftStart, onComplete]);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useGSAP(
    () => {
      const el = root.current;
      if (!el || !brand.current) return;

      if (prefersReducedMotion()) {
        onCompleteRef.current();
        return;
      }

      const cols = gsap.utils.toArray<HTMLElement>(".home-intro__col");

      gsap.set(brand.current, { autoAlpha: 0, y: 20 });
      gsap.set(cols, { yPercent: 0, force3D: true });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.to(brand.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.85,
        ease: "power2.out",
      })
        .to({}, { duration: 1 })
        .addLabel("lift")
        .add(() => onLiftStartRef.current(), "lift")
        .to(
          cols,
          {
            yPercent: -100,
            duration: COL_DURATION,
            stagger: {
              each: COL_STAGGER,
              ease: "power2.inOut",
            },
            ease: "power4.inOut",
            force3D: true,
          },
          "lift",
        )
        .to(
          brand.current,
          {
            yPercent: -100,
            duration: COL_DURATION,
            ease: "power4.inOut",
            force3D: true,
          },
          "lift",
        )
        .add(() => onCompleteRef.current(), `lift+=${LIFT_TOTAL_DURATION}`);
    },
    { scope: root },
  );

  return (
    <div ref={root} className="home-intro" aria-hidden="true">
      <div className="home-intro__columns">
        {Array.from({ length: COLUMN_COUNT }, (_, index) => (
          <div key={index} className="home-intro__col" />
        ))}
      </div>
      <div ref={brand} className="home-intro__brand">
        <img
          src="/logo.png"
          alt="Manaram Farms"
          className="home-intro__logo"
          width={480}
          height={105}
        />
        <p className="home-intro__welcome font-display">{WELCOME}</p>
      </div>
    </div>
  );
}
