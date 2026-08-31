import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CaretDown, List, X } from "@phosphor-icons/react";
import gsap from "gsap";

const productLinks = [
  { to: "/products#milk", label: "Milk" },
  { to: "/products#yogurt", label: "Yogurt" },
  { to: "/products#ghee", label: "Ghee" },
  { to: "/products#paneer", label: "Paneer" },
];

function activeKey(pathname: string) {
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/products")) return "products";
  if (pathname.startsWith("/recipes")) return "recipes";
  if (pathname.startsWith("/contact")) return "contact";
  return "home";
}

function itemClass(isActive: boolean, onHero: boolean) {
  const base =
    "relative z-10 inline-flex items-center justify-center rounded-full px-5 py-2 text-[14px] leading-none whitespace-nowrap transition-colors duration-300";
  if (onHero) {
    return [
      base,
      isActive ? "font-semibold text-white" : "font-medium text-white/72 hover:text-white",
    ].join(" ");
  }
  return [
    base,
    isActive ? "font-semibold text-white" : "font-medium text-ink/70 hover:text-ink",
  ].join(" ");
}

export default function Navbar() {
  const location = useLocation();
  const key = activeKey(location.pathname);
  const onHero = location.pathname === "/";
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const menuId = useId();
  const panelRef = useRef<HTMLLIElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const placed = useRef(false);
  const keyRef = useRef(key);
  keyRef.current = key;

  const surfaceClass = onHero ? "nav-surface" : "nav-surface-light";

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!productsOpen) return;
    const onPointer = (event: MouseEvent) => {
      if (!panelRef.current?.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    window.addEventListener("pointerdown", onPointer);
    return () => window.removeEventListener("pointerdown", onPointer);
  }, [productsOpen]);

  useLayoutEffect(() => {
    const nav = navRef.current;
    const pill = pillRef.current;
    const list = listRef.current;
    if (!nav || !pill || !list) return;

    const move = (animate: boolean) => {
      const target = list.querySelector<HTMLElement>(`[data-nav="${keyRef.current}"]`);
      if (!target) return;

      const navBox = nav.getBoundingClientRect();
      const box = target.getBoundingClientRect();
      if (navBox.width < 8 || box.width < 8 || box.height < 8) return;

      const x = box.left - navBox.left;
      const y = box.top - navBox.top;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.killTweensOf(pill);

      if (!animate || reduced || !placed.current) {
        gsap.set(pill, {
          x,
          y,
          width: box.width,
          height: box.height,
          scaleX: 1,
          opacity: 1,
        });
        placed.current = true;
        return;
      }

      gsap.to(pill, {
        x,
        y,
        width: box.width,
        height: box.height,
        scaleX: 1,
        duration: 0.48,
        ease: "power2.inOut",
        overwrite: "auto",
      });
    };

    move(placed.current);

    const snap = () => move(false);
    window.addEventListener("resize", snap);
    const mq = window.matchMedia("(min-width: 1024px)");
    mq.addEventListener("change", snap);
    return () => {
      window.removeEventListener("resize", snap);
      mq.removeEventListener("change", snap);
    };
  }, [key]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[50] px-4 pt-4 md:px-8 md:pt-5">
      <div className="pointer-events-auto relative mx-auto flex max-w-[1400px] items-center justify-between lg:justify-center">
        <NavLink to="/" className="relative z-[2] shrink-0 lg:hidden" aria-label="Manaram Farm home">
          <img
            src="/logo.png"
            alt=""
            className={`h-8 w-auto ${onHero ? "brightness-0 invert" : ""}`}
            width={120}
            height={32}
          />
        </NavLink>

        <nav
          ref={navRef}
          className={`${surfaceClass} relative hidden rounded-full p-2 lg:flex`}
          aria-label="Primary"
        >
          <span
            ref={pillRef}
            className="pointer-events-none absolute top-0 left-0 z-[1] h-0 w-0 rounded-full bg-steel will-change-[transform,width,height]"
            aria-hidden="true"
          />
          <ul ref={listRef} className="relative z-[2] flex items-center gap-1">
            <li>
              <NavLink to="/" end data-nav="home" className={({ isActive }) => itemClass(isActive, onHero)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" data-nav="about" className={({ isActive }) => itemClass(isActive, onHero)}>
                Our Story
              </NavLink>
            </li>
            <li className="relative" ref={panelRef}>
              <button
                type="button"
                data-nav="products"
                className={`${itemClass(key === "products", onHero)} gap-1.5`}
                aria-expanded={productsOpen}
                aria-controls={menuId}
                onClick={() => setProductsOpen((value) => !value)}
              >
                Products
                <CaretDown
                  size={12}
                  weight="bold"
                  className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {productsOpen ? (
                <div
                  id={menuId}
                  className={`${surfaceClass} absolute top-[calc(100%+8px)] left-1/2 w-44 -translate-x-1/2 rounded-2xl p-1.5 shadow-[0_16px_40px_-20px_rgb(8_20_36_/_0.25)]`}
                >
                  {productLinks.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={`relative z-10 block rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                        onHero
                          ? "text-white/75 hover:bg-white/10 hover:text-white"
                          : "text-ink/75 hover:bg-ink/5 hover:text-ink"
                      }`}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              ) : null}
            </li>
            <li>
              <NavLink to="/recipes" data-nav="recipes" className={({ isActive }) => itemClass(isActive, onHero)}>
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" data-nav="contact" className={({ isActive }) => itemClass(isActive, onHero)}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className={`${surfaceClass} relative flex h-11 w-11 items-center justify-center rounded-full ${
            onHero ? "text-white" : "text-ink"
          } lg:hidden`}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
        </button>
      </div>

      {open ? (
        <nav
          className={`${surfaceClass} pointer-events-auto relative mx-auto mt-2 max-w-xs rounded-2xl p-2 lg:hidden`}
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-0.5">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => itemClass(isActive, onHero)}
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => itemClass(isActive, onHero)}
                onClick={() => setOpen(false)}
              >
                Our Story
              </NavLink>
            </li>
            <li
              className={`px-4 pt-2 pb-1 text-[11px] font-medium tracking-wide ${
                onHero ? "text-white/45" : "text-ink/45"
              }`}
            >
              Products
            </li>
            {productLinks.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={`block rounded-full px-4 py-2 text-[14px] font-medium ${
                    onHero
                      ? "text-white/75 hover:bg-white/10 hover:text-white"
                      : "text-ink/75 hover:bg-ink/5 hover:text-ink"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/recipes"
                className={({ isActive }) => itemClass(isActive, onHero)}
                onClick={() => setOpen(false)}
              >
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => itemClass(isActive, onHero)}
                onClick={() => setOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
