(() => {
  const rails = document.querySelectorAll("[data-collection-slider]");
  if (!rails.length) return;

  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

  rails.forEach((rail) => {
    rail.setAttribute("tabindex", "0");

    rail.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      event.preventDefault();
      const step = Math.round(rail.clientWidth * 0.82);
      rail.scrollBy({
        left: event.key === "ArrowRight" ? step : -step,
        behavior: "smooth",
      });
    });

    const enableDrag = () => {
      let pointerId = null;
      let startX = 0;
      let startScroll = 0;
      let moved = false;

      rail.addEventListener("pointerdown", (event) => {
        if (event.pointerType !== "mouse" || event.button !== 0) return;
        pointerId = event.pointerId;
        startX = event.clientX;
        startScroll = rail.scrollLeft;
        moved = false;
        rail.classList.add("is-dragging");
        try {
          rail.setPointerCapture(pointerId);
        } catch {
          /* ignore */
        }
      });

      rail.addEventListener("pointermove", (event) => {
        if (pointerId !== event.pointerId) return;
        const dx = event.clientX - startX;
        if (Math.abs(dx) > 4) moved = true;
        rail.scrollLeft = startScroll - dx;
      });

      const endDrag = (event) => {
        if (pointerId !== event.pointerId) return;
        rail.classList.remove("is-dragging");
        try {
          rail.releasePointerCapture(pointerId);
        } catch {
          /* ignore */
        }
        pointerId = null;
      };

      rail.addEventListener("pointerup", endDrag);
      rail.addEventListener("pointercancel", endDrag);

      rail.addEventListener(
        "click",
        (event) => {
          if (!moved) return;
          event.preventDefault();
          event.stopPropagation();
          moved = false;
        },
        true
      );
    };

    if (finePointer.matches) enableDrag();
  });
})();
