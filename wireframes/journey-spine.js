(() => {
  /**
   * Standard sticky scrub (same pattern as Apple / scroll-driven demos):
   * 1) tall outer section = pin height + travel
   * 2) sticky pin stays put while the section scrolls
   * 3) map section progress → translateY on the list (never nested scrollTop)
   * On compact viewports, unlock into a natural stacked timeline.
   */
  const root = document.querySelector("[data-journey-spine]");
  if (!root) return;

  const pin = root.querySelector(".journey-spine__pin");
  const viewport = root.querySelector("[data-journey-viewport]");
  const list = root.querySelector(".journey-spine__list");
  const items = [...root.querySelectorAll(".journey-spine__item")];
  const yearLinks = [...root.querySelectorAll("[data-journey-year]")];
  const hint = root.querySelector(".journey-spine__hint");
  if (!pin || !viewport || !list || !items.length) return;

  const reduceMotionMq = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );
  const compactMq = window.matchMedia("(max-width: 800px)");

  let maxShift = 0;
  let travel = 0;
  let ticking = false;
  let measuring = false;
  let activeId = items[0].id;

  const clamp01 = (value) => Math.min(1, Math.max(0, value));
  const isStatic = () => reduceMotionMq.matches || compactMq.matches;

  const setActive = (id) => {
    if (id === activeId) return;
    activeId = id;
    let activeIndex = 0;

    items.forEach((item, index) => {
      const isActive = item.id === id;
      if (isActive) activeIndex = index;
      item.classList.toggle("is-active", isActive);
    });

    items.forEach((item, index) => {
      item.classList.toggle("is-passed", index < activeIndex);
    });

    yearLinks.forEach((link) => {
      const year = link.getAttribute("data-journey-year");
      link.classList.toggle("is-active", id === `journey-${year}`);
    });
  };

  const syncActiveFromOffset = (offsetY) => {
    const probe = offsetY + viewport.clientHeight * 0.22;
    let current = items[0];
    for (const item of items) {
      if (item.offsetTop <= probe) current = item;
      else break;
    }
    setActive(current.id);
  };

  const fitThreeYears = () => {
    const third = items[2] || items[items.length - 1];
    const top = items[0].offsetTop;
    const bottom = third.offsetTop + third.offsetHeight;
    viewport.style.maxHeight = `${Math.ceil(bottom - top + 8)}px`;
  };

  const applyProgress = (p) => {
    const offset = maxShift * p;
    list.style.transform = `translate3d(0, ${-offset}px, 0)`;
    syncActiveFromOffset(offset);
    if (hint) hint.style.opacity = p > 0.94 ? "0" : "1";
  };

  /**
   * Canonical progress while pinned:
   * progress = -section.top / (sectionHeight - pinHeight)
   * 0 when section top hits viewport top; 1 when pin is about to unstick.
   */
  const readProgress = () => {
    if (travel <= 0) return 0;
    const total = root.offsetHeight - pin.offsetHeight;
    if (total <= 0) return 0;
    return clamp01(-root.getBoundingClientRect().top / total);
  };

  const update = () => {
    ticking = false;
    if (isStatic() || maxShift <= 1) return;
    applyProgress(readProgress());
  };

  const onScroll = () => {
    if (ticking || measuring) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  const measure = () => {
    measuring = true;

    // Reset runway so natural pin height is measurable
    root.style.height = "";
    list.style.transform = "translate3d(0,0,0)";

    if (isStatic()) {
      root.classList.add("is-unlocked");
      root.classList.add("is-compact");
      viewport.style.maxHeight = "";
      maxShift = 0;
      travel = 0;
      list.style.transform = "";
      if (hint) {
        hint.hidden = true;
        hint.style.opacity = "1";
      }
      items.forEach((item) => {
        item.classList.add("is-active");
        item.classList.remove("is-passed");
      });
      measuring = false;
      return;
    }

    root.classList.remove("is-compact");
    fitThreeYears();

    maxShift = Math.max(0, list.scrollHeight - viewport.clientHeight);

    if (maxShift <= 1) {
      root.classList.add("is-unlocked");
      root.style.height = "";
      travel = 0;
      list.style.transform = "";
      if (hint) {
        hint.hidden = true;
        hint.style.opacity = "1";
      }
      measuring = false;
      return;
    }

    root.classList.remove("is-unlocked");

    // 1:1 travel with the leftover list distance — no dead zone after 2022
    travel = Math.round(maxShift);
    root.style.height = `${pin.offsetHeight + travel}px`;

    if (hint) {
      hint.hidden = false;
      hint.style.opacity = "1";
    }

    measuring = false;
    update();
  };

  const scrollToItem = (item) => {
    if (isStatic() || maxShift <= 1 || travel <= 0) {
      item.scrollIntoView({ behavior: "smooth", block: "nearest" });
      setActive(item.id);
      return;
    }

    const targetOffset = Math.min(
      maxShift,
      Math.max(0, item.offsetTop - list.offsetTop)
    );
    const p = maxShift === 0 ? 0 : targetOffset / maxShift;
    const absoluteTop =
      root.getBoundingClientRect().top + window.scrollY + p * travel;

    window.scrollTo({ top: absoluteTop, behavior: "smooth" });
    setActive(item.id);
  };

  yearLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const year = link.getAttribute("data-journey-year");
      const target = root.querySelector(`#journey-${year}`);
      if (!target) return;
      event.preventDefault();
      scrollToItem(target);
    });
  });

  const onViewportScroll = () => syncActiveFromOffset(viewport.scrollTop);

  const syncViewportListener = () => {
    viewport.removeEventListener("scroll", onViewportScroll);
    if (isStatic()) {
      viewport.addEventListener("scroll", onViewportScroll, { passive: true });
    }
  };

  let resizeTimer = 0;
  const onResize = () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      syncViewportListener();
      measure();
    }, 80);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize, { passive: true });
  if (compactMq.addEventListener) compactMq.addEventListener("change", onResize);
  if (reduceMotionMq.addEventListener) {
    reduceMotionMq.addEventListener("change", onResize);
  }

  if (document.fonts?.ready) {
    document.fonts.ready.then(measure).catch(() => {});
  }

  syncViewportListener();
  measure();
  setActive(items[0].id);
})();
