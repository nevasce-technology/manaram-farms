(() => {
  const scroller = document.querySelector("[data-story-stack]");
  if (!scroller) return;

  const lock = scroller.querySelector(".story-stack__lock");
  const stage = scroller.querySelector(".story-stack__stage");
  const slides = Array.from(
    scroller.querySelectorAll("[data-story-slide]")
  );
  const firstSlide = slides.find((s) => s.dataset.storySlide === "0");
  const storySlide = slides.find((s) => s.dataset.storySlide === "1");

  if (!lock || !stage || !firstSlide || !storySlide) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) {
    storySlide.style.opacity = "1";
    storySlide.style.transform = "none";
    slides.forEach((slide) => slide.classList.add("is-active"));
    return;
  }

  let ticking = false;

  const clamp01 = (value) => Math.min(1, Math.max(0, value));

  const syncLockHeight = () => {
    scroller.style.setProperty("--ss-lock-h", `${lock.offsetHeight}px`);
  };

  const setSlide = (showSecond) => {
    storySlide.style.opacity = showSecond ? "1" : "0";
    storySlide.style.transform = "none";
    firstSlide.style.opacity = "1";
    firstSlide.classList.toggle("is-active", !showSecond);
    storySlide.classList.toggle("is-active", showSecond);
    storySlide.style.pointerEvents = showSecond ? "auto" : "none";
  };

  const update = () => {
    ticking = false;
    syncLockHeight();

    const rect = scroller.getBoundingClientRect();
    const total = scroller.offsetHeight - lock.offsetHeight;
    if (total <= 0) {
      setSlide(false);
      return;
    }

    const raw = clamp01(-rect.top / total);
    // Instant flip at midpoint — no fade / easing
    setSlide(raw >= 0.5);
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  update();
})();
