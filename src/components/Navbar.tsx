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

const itemClass = ({ isActive }: { isActive: boolean }) =>
  [
    "relative z-10 rounded-full px-5 py-2.5 text-[14px] leading-none transition-colors duration-300",
    isActive ? "font-semibold text-white" : "font-medium text-ink/75 hover:text-ink",
  ].join(" ");

export default function Navbar() {
  const location = useLocation();
  const key = activeKey(location.pathname);
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
        duration: 0.52,
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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[40] px-4 pt-5 md:px-8">
      <div className="pointer-events-auto mx-auto flex max-w-[1400px] justify-center">
        <nav
          ref={navRef}
          className="liquid-glass-web-approx relative hidden rounded-full px-2 py-2 lg:flex"
          aria-label="Primary"
        >
          <span
            ref={pillRef}
            className="pointer-events-none absolute top-0 left-0 z-[1] h-0 w-0 rounded-full will-change-transform"
            style={{ backgroundColor: "#006eb5" }}
            aria-hidden="true"
          />
          <ul ref={listRef} className="relative z-[2] flex items-center gap-0.5">
            <li>
              <NavLink to="/" end data-nav="home" className={itemClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" data-nav="about" className={itemClass}>
                Our Story
              </NavLink>
            </li>
            <li className="relative" ref={panelRef}>
              <button
                type="button"
                data-nav="products"
                className={`${itemClass({ isActive: key === "products" })} inline-flex items-center gap-1`}
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
                  className="liquid-glass-web-approx absolute top-[calc(100%+10px)] left-1/2 w-44 -translate-x-1/2 rounded-2xl p-1.5"
                >
                  {productLinks.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className="relative z-10 block rounded-full px-4 py-2 text-[14px] font-medium text-ink/80 transition-colors hover:bg-white/35 hover:text-ink"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              ) : null}
            </li>
            <li>
              <NavLink to="/recipes" data-nav="recipes" className={itemClass}>
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" data-nav="contact" className={itemClass}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="liquid-glass-web-approx relative flex h-12 w-12 items-center justify-center rounded-full text-ink lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative z-10">
            {open ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
          </span>
        </button>
      </div>

      {open ? (
        <nav
          className="liquid-glass-web-approx pointer-events-auto relative mx-auto mt-2 max-w-xs rounded-2xl p-1.5 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="relative z-10 flex flex-col gap-0.5">
            <li>
              <NavLink to="/" end className={itemClass} onClick={() => setOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={itemClass} onClick={() => setOpen(false)}>
                Our Story
              </NavLink>
            </li>
            <li className="px-4 pt-2 pb-1 text-[11px] font-medium tracking-wide text-ink/45">
              Products
            </li>
            {productLinks.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className="block rounded-full px-4 py-2 text-[14px] font-medium text-ink/80 hover:bg-white/35 hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/recipes" className={itemClass} onClick={() => setOpen(false)}>
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={itemClass} onClick={() => setOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
