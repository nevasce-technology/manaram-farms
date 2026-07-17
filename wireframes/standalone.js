(() => {
  const roots = document.querySelectorAll(".standalone");
  if (!roots.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.14 }
  );

  roots.forEach((root) => {
    root.querySelectorAll(".reveal").forEach((node) => observer.observe(node));

    const header = root.querySelector(".site-header");
    const heroImage = root.querySelector(".hero-image");
    const sourceImage = root.querySelector(".source-image");
    const collageImage = root.querySelector(".collage-main img");
    const menuButton = root.querySelector(".menu-button");
    const nav = root.querySelector(".nav-links");
    const rail = root.querySelector(".product-rail");

    const standaloneTop = () => root.getBoundingClientRect().top + window.scrollY;

    let ticking = false;
    const updateScene = () => {
      ticking = false;
      const y = window.scrollY;
      const localY = Math.max(0, y - standaloneTop());
      if (header) header.classList.toggle("scrolled", localY > 40);
      // Only run parallax when those legacy nodes exist on the page
      if (heroImage) {
        heroImage.style.transform = `translate3d(0, ${localY * 0.18}px, 0) scale(1.06)`;
      }
      if (collageImage) {
        collageImage.style.transform = `translateY(${Math.max(-40, (localY - 400) * -0.035)}px) scale(1.08)`;
      }
      if (sourceImage) {
        sourceImage.style.backgroundPositionY = `${50 + Math.min(12, Math.max(-12, (localY - 1200) * 0.012))}%`;
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateScene);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    if (menuButton && nav) {
      menuButton.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(open));
      });
      nav.querySelectorAll("a").forEach((link) =>
        link.addEventListener("click", () => nav.classList.remove("open"))
      );
    }

    root.querySelectorAll(".rail-controls button").forEach((button) => {
      button.addEventListener("click", () => {
        if (!rail) return;
        rail.scrollBy({
          left: Number(button.dataset.dir) * 370,
          behavior: "smooth",
        });
      });
    });

    updateScene();
  });
})();
