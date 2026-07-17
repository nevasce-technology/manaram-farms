(() => {
  const root = document.querySelector(".index-shell");
  if (!root) return;

  const header = root.querySelector(".site-header");
  const menuButton = root.querySelector(".menu-button");
  const nav = root.querySelector(".nav-links");

  let ticking = false;
  const updateScene = () => {
    ticking = false;
    const y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 40);
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateScene);
    },
    { passive: true }
  );

  if (menuButton && nav) {
    const closeMenu = () => {
      nav.classList.remove("open");
      menuButton.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      document.body.classList.remove("nav-open");
    };

    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.classList.toggle("is-open", open);
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute(
        "aria-label",
        open ? "Close navigation" : "Open navigation"
      );
      document.body.classList.toggle("nav-open", open);
    });
    nav.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", closeMenu)
    );
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  updateScene();
})();
