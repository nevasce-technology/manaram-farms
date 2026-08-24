(() => {
  const root = document.querySelector(".story-index");
  if (!root || !("IntersectionObserver" in window)) return;

  root.classList.add("js-ready");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  root.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
})();
