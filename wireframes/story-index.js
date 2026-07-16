(() => {
  const root = document.querySelector(".story-index");
  if (!root) return;

  const collageImage = root.querySelector(".collage-main img");

  const updateScene = () => {
    if (!collageImage) return;
    const top = root.getBoundingClientRect().top + window.scrollY;
    const localY = Math.max(0, window.scrollY - top);
    collageImage.style.transform = `translateY(${Math.max(-40, (localY - 200) * -0.035)}px) scale(1.08)`;
  };

  window.addEventListener("scroll", updateScene, { passive: true });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.14 }
  );

  root.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
  updateScene();
})();
