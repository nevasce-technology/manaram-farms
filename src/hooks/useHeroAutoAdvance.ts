import { useEffect, type RefObject } from "react";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function docTop(el: HTMLElement) {
  return el.getBoundingClientRect().top + window.scrollY;
}

function animateScrollTo(y: number, ms: number) {
  const start = window.scrollY;
  const dist = y - start;
  if (Math.abs(dist) < 2) return Promise.resolve();

  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";

  const t0 = performance.now();
  return new Promise<void>((resolve) => {
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / ms);
      window.scrollTo(0, start + dist * easeOutCubic(t));
      if (t < 1) requestAnimationFrame(step);
      else {
        root.style.scrollBehavior = previous;
        resolve();
      }
    };
    requestAnimationFrame(step);
  });
}

/**
 * While the hero runway is pinned, one scroll-down auto-advances through the
 * cloud wipe to #farm-intro. Scroll-up only snaps back in a tight band at the
 * intro top — never while reading the welcome section.
 */
export function useHeroAutoAdvance(heroRef: RefObject<HTMLElement | null>, reduced: boolean) {
  useEffect(() => {
    if (reduced) return;

    let locked = false;
    let touchY = 0;
    let wheelAcc = 0;

    const headerH = () => {
      const h = document.querySelector("header");
      return h?.getBoundingClientRect().height ?? 76;
    };

    /** Tall hero still pinned: sticky stage fills the viewport. */
    const inHeroRunway = () => {
      const hero = heroRef.current;
      if (!hero) return false;
      const rect = hero.getBoundingClientRect();
      return rect.top <= 8 && rect.bottom > window.innerHeight + 4;
    };

    const intro = () => document.getElementById("farm-intro");

    const landY = () => {
      const section = intro();
      if (!section) {
        const hero = heroRef.current;
        return hero ? docTop(hero) + hero.offsetHeight - window.innerHeight : window.scrollY;
      }
      const padTop = parseFloat(getComputedStyle(section).paddingTop) || 0;
      return Math.max(0, docTop(section) + padTop - headerH() - 8);
    };

    /**
     * Cloud wipe mid-flight only: intro is on screen but has not reached its
     * land position yet. Once past that, native scroll must work.
     */
    const inCloudApproach = () => {
      if (inHeroRunway()) return false;
      const section = intro();
      if (!section) return false;
      const top = section.getBoundingClientRect().top;
      const target = headerH() + 8;
      return top > target + 12 && top < window.innerHeight * 0.92;
    };

    /** Snap-back only when parked at the intro landing band. */
    const atIntroLand = () => {
      const section = intro();
      if (!section) return false;
      const top = section.getBoundingClientRect().top;
      const target = headerH() + 8;
      return top > target - 16 && top < target + 96;
    };

    const heroTopY = () => {
      const hero = heroRef.current;
      return hero ? docTop(hero) : 0;
    };

    const goNext = async () => {
      if (locked) return;
      if (!inHeroRunway() && !inCloudApproach()) return;
      locked = true;
      wheelAcc = 0;
      try {
        await animateScrollTo(landY(), 1500);
      } finally {
        locked = false;
      }
    };

    const goBack = async () => {
      if (locked) return;
      locked = true;
      wheelAcc = 0;
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

      if (e.deltaY > 0 && (inHeroRunway() || inCloudApproach())) {
        e.preventDefault();
        wheelAcc += e.deltaY;
        if (wheelAcc > 12) void goNext();
        return;
      }

      if (e.deltaY < -8 && atIntroLand()) {
        e.preventDefault();
        void goBack();
        return;
      }

      wheelAcc = 0;
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
      if (dy > 16 && (inHeroRunway() || inCloudApproach())) {
        e.preventDefault();
        void goNext();
        return;
      }
      if (dy < -16 && atIntroLand()) {
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
