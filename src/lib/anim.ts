export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function phase(t: number, from: number, to: number) {
  return clamp01((t - from) / (to - from));
}

export function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}
