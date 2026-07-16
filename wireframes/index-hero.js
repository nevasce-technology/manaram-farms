(() => {
  const root = document.querySelector(".index-shell");
  if (!root) return;

  const header = root.querySelector(".site-header");
  const menuButton = root.querySelector(".menu-button");
  const nav = root.querySelector(".nav-links");

  const updateScene = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 40);
  };

  window.addEventListener("scroll", updateScene, { passive: true });

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => nav.classList.remove("open"))
    );
  }

  updateScene();
})();
