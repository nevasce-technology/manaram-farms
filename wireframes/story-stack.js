(() => {
  const scroller = document.querySelector("[data-story-stack]");
  if (!scroller) return;

  const root = scroller.closest(".story-stack") || scroller;
  const lock = scroller.querySelector(".story-stack__lock");
  const stage = scroller.querySelector(".story-stack__stage");
  const slides = Array.from(scroller.querySelectorAll("[data-story-slide]"));
  const firstSlide = slides.find((s) => s.dataset.storySlide === "0");
  const storySlide = slides.find((s) => s.dataset.storySlide === "1");

  if (!lock || !stage || !firstSlide || !storySlide) return;

  const reduceMotionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
  const compactMq = window.matchMedia("(max-width: 900px)");

  let ticking = false;
  let unlocked = false;

  const clamp01 = (value) => Math.min(1, Math.max(0, value));

  const smoothstep = (edge0, edge1, x) => {
    const t = clamp01((x - edge0) / (edge1 - edge0));
    return t * t * (3 - 2 * t);
  };

  const setSlideProgress = (amount) => {
    const showSecond = amount >= 0.5;
    storySlide.style.opacity = String(amount);
    firstSlide.style.opacity = "1";
    firstSlide.classList.toggle("is-active", !showSecond);
    storySlide.classList.toggle("is-active", showSecond);
    storySlide.style.pointerEvents = showSecond ? "auto" : "none";
  };

  const unlockStatic = () => {
    unlocked = true;
    root.classList.add("is-static");
    storySlide.style.opacity = "1";
    storySlide.style.transform = "none";
    storySlide.style.pointerEvents = "auto";
    firstSlide.style.opacity = "1";
    slides.forEach((slide) => slide.classList.add("is-active"));
  };

  const lockScroll = () => {
    unlocked = false;
    root.classList.remove("is-static");
    storySlide.style.transform = "";
    setSlideProgress(0);
  };

  const update = () => {
    ticking = false;
    if (unlocked) return;

    const rect = scroller.getBoundingClientRect();
    const total = scroller.offsetHeight - lock.offsetHeight;
    if (total <= 0) {
      setSlideProgress(0);
      return;
    }

    const raw = clamp01(-rect.top / total);
    const amount = smoothstep(0.34, 0.66, raw);
    setSlideProgress(amount);
  };

  const onScroll = () => {
    if (ticking || unlocked) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  const syncMode = () => {
    if (reduceMotionMq.matches || compactMq.matches) {
      unlockStatic();
      return;
    }
    lockScroll();
    update();
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", syncMode, { passive: true });
  if (reduceMotionMq.addEventListener) reduceMotionMq.addEventListener("change", syncMode);
  if (compactMq.addEventListener) compactMq.addEventListener("change", syncMode);
  syncMode();
})();
