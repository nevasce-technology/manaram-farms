import { useEffect, type RefObject } from "react";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function docTop(el: HTMLElement) {
  return el.getBoundingClientRect().top + window.scrollY;
}

/** Smoothly scroll the window to `y` over `ms` milliseconds. */
function animateScrollTo(y: number, ms: number) {
  const start = window.scrollY;
  const dist = y - start;
  if (Math.abs(dist) < 2) return Promise.resolve();

  const t0 = performance.now();
  return new Promise<void>((resolve) => {
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / ms);
      window.scrollTo(0, start + dist * easeOutCubic(t));
      if (t < 1) requestAnimationFrame(step);
      else resolve();
    };
    requestAnimationFrame(step);
  });
}

/**
 * One scroll-down while the hero is active advances through the cloud wipe and
 * lands on #farm-intro. Scroll-up near the intro snaps back to the hero top.
 * Respects prefers-reduced-motion (caller passes reduced=true to disable).
 */
export function useHeroAutoAdvance(
  heroRef: RefObject<HTMLElement | null>,
  reduced: boolean,
) {
  useEffect(() => {
    if (reduced) return;

    let locked = false;
    let touchY = 0;

    const headerH = () => {
      const h = document.querySelector("header");
      return h?.getBoundingClientRect().height ?? 76;
    };

    /** Sticky hero still owns the viewport. */
    const inHeroRunway = () => {
      const hero = heroRef.current;
      if (!hero) return false;
      const rect = hero.getBoundingClientRect();
      return rect.top <= 1 && rect.bottom > window.innerHeight + 4;
    };

    /**
     * Cloud handoff trap: intro has started peeking but the headline isn't
     * fully framed yet — finish the snap on the next scroll-down.
     */
    const inPartialReveal = () => {
      const section = document.getElementById("farm-intro");
      if (!section || inHeroRunway()) return false;
      const lead = section.querySelector(".story-hero-block");
      const anchor = (lead ?? section) as HTMLElement;
      const rect = anchor.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.55 && rect.bottom > headerH() + 48;
    };

    const nearIntroTop = () => {
      const section = document.getElementById("farm-intro");
      if (!section) return false;
      const lead = section.querySelector(".story-hero-block") as HTMLElement | null;
      const top = (lead ?? section).getBoundingClientRect().top;
      return top > headerH() - 8 && top < window.innerHeight * 0.62;
    };

    /** Frame WelcomeFarm headline below the nav, past cloud fringe. */
    const nextY = () => {
      const section = document.getElementById("farm-intro");
      if (!section) {
        const hero = heroRef.current;
        return hero
          ? docTop(hero) + hero.offsetHeight - window.innerHeight
          : window.scrollY;
      }

      const lead = section.querySelector(".story-hero-block") as HTMLElement | null;
      const anchor = lead ?? section;
      return Math.max(0, docTop(anchor) - headerH() - 20);
    };

    const heroTopY = () => {
      const hero = heroRef.current;
      return hero ? docTop(hero) : 0;
    };

    const canSnapDown = () => {
      const target = nextY();
      if (target <= window.scrollY + 12) return false;
      return inHeroRunway() || inPartialReveal();
    };

    const goNext = async () => {
      if (locked) return;
      if (!canSnapDown()) return;

      const target = nextY();
      locked = true;
      try {
        await animateScrollTo(target, 1400);
      } finally {
        locked = false;
      }
    };

    const goBack = async () => {
      if (locked) return;
      locked = true;
      try {
        await animateScrollTo(heroTopY(), 900);
      } finally {
        locked = false;
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (locked) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 8 && canSnapDown()) {
        e.preventDefault();
        void goNext();
        return;
      }

      if (e.deltaY < -8 && nearIntroTop()) {
        e.preventDefault();
        void goBack();
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (locked) {
        e.preventDefault();
        return;
      }

      const y = e.touches[0]?.clientY ?? touchY;
      const dy = touchY - y;

      if (dy > 24 && canSnapDown()) {
        e.preventDefault();
        void goNext();
        return;
      }

      if (dy < -24 && nearIntroTop()) {
        e.preventDefault();
        void goBack();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [heroRef, reduced]);
}
