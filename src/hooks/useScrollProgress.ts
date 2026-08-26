import { useEffect, useRef, useState } from "react";

/**
 * Scroll progress 0-1 through a tall runway element.
 * Progress is lerp-smoothed so scrubbed animations feel soft, not stepped.
 */
export function useScrollProgress() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMq = () => setReduced(mq.matches);
    syncMq();
    mq.addEventListener("change", syncMq);
    return () => mq.removeEventListener("change", syncMq);
  }, []);

  useEffect(() => {
    if (reduced) {
      setProgress(0);
      return;
    }

    let raf = 0;
    let target = 0;
    let current = 0;
    const SMOOTH = 0.18;

    const readTarget = () => {
      const el = ref.current;
      if (!el) return 0;
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return 0;
      const scrolled = -el.getBoundingClientRect().top;
      return Math.min(1, Math.max(0, scrolled / total));
    };

    const tick = () => {
      target = readTarget();
      current += (target - current) * SMOOTH;
      if (Math.abs(target - current) < 0.0004) {
        current = target;
        setProgress(current);
        raf = 0;
        return;
      }
      setProgress(current);
      raf = requestAnimationFrame(tick);
    };

    const kick = () => {
      target = readTarget();
      if (!raf) raf = requestAnimationFrame(tick);
    };

    kick();
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
    };
  }, [reduced]);

  return { ref, progress, reduced };
}
