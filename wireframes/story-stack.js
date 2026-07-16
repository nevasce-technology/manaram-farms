(() => {
  const scroller = document.querySelector("[data-story-stack]");
  if (!scroller) return;

  const stage = scroller.querySelector(".story-stack__stage");
  const slides = Array.from(
    scroller.querySelectorAll("[data-story-slide]")
  );
  const storySlide = slides.find((s) => s.dataset.storySlide === "1");

  if (!stage || !storySlide) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) {
    storySlide.style.transform = "none";
    slides.forEach((slide) => slide.classList.add("is-active"));
    return;
  }

  let ticking = false;

  const clamp01 = (value) => Math.min(1, Math.max(0, value));

  const update = () => {
    ticking = false;

    const rect = scroller.getBoundingClientRect();
    const total = scroller.offsetHeight - stage.offsetHeight;
    if (total <= 0) {
      storySlide.style.transform = "translate3d(0, 100%, 0)";
      return;
    }

    // Progress through the sticky scroll range
    const progress = clamp01(-rect.top / total);
    const y = (1 - progress) * 100;

    storySlide.style.transform = `translate3d(0, ${y}%, 0)`;

    slides[0]?.classList.toggle("is-active", progress < 0.55);
    storySlide.classList.toggle("is-active", progress >= 0.45);
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
