import { useEffect, useId, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CaretDown, List, X } from "@phosphor-icons/react";

const productLinks = [
  { to: "/products#milk", label: "Milk" },
  { to: "/products#yogurt", label: "Yogurt" },
  { to: "/products#ghee", label: "Ghee" },
  { to: "/products#paneer", label: "Paneer" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "font-display whitespace-nowrap text-[12px] font-extrabold tracking-[0.2em] uppercase transition-colors",
    isActive ? "text-steel-deep" : "text-steel hover:text-steel-deep",
  ].join(" ");

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const menuId = useId();
  const panelRef = useRef<HTMLLIElement>(null);

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

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[40] px-4 pt-4 md:px-6">
      <div className="pointer-events-auto mx-auto flex max-w-[1400px] justify-center">
        <div className="flex items-center gap-2">
          <nav
            className="glass-nav relative hidden h-12 items-center rounded-full px-6 lg:flex"
            aria-label="Primary"
          >
            <ul className="flex items-center gap-7">
              <li>
                <NavLink
                  to="/"
                  className="font-display pr-2 text-[12px] font-extrabold tracking-[0.18em] text-pine uppercase"
                >
                  Manaram
                </NavLink>
              </li>
              <li>
                <NavLink to="/" end className={linkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={linkClass}>
                  About
                </NavLink>
              </li>
              <li className="relative" ref={panelRef}>
                <button
                  type="button"
                  className={`${linkClass({ isActive: location.pathname === "/products" })} inline-flex items-center gap-1`}
                  aria-expanded={productsOpen}
                  aria-controls={menuId}
                  onClick={() => setProductsOpen((value) => !value)}
                >
                  Products
                  <CaretDown size={12} weight="bold" className={productsOpen ? "rotate-180" : ""} />
                </button>
                {productsOpen ? (
                  <div
                    id={menuId}
                    className="glass-nav absolute top-[calc(100%+12px)] left-1/2 w-44 -translate-x-1/2 rounded-2xl p-2"
                  >
                    {productLinks.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        className="font-sans block rounded-xl px-3 py-2 text-[13px] font-medium text-pine hover:bg-white/50"
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                ) : null}
              </li>
              <li>
                <NavLink to="/recipes" className={linkClass}>
                  Recipes
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={linkClass}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <NavLink
            to="/"
            className="glass-nav font-display relative flex h-12 items-center rounded-full px-5 text-[12px] font-extrabold tracking-[0.18em] text-pine uppercase lg:hidden"
          >
            Manaram
          </NavLink>
          <button
            type="button"
            className="glass-nav relative flex h-12 w-12 items-center justify-center rounded-full text-steel lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="glass-nav pointer-events-auto relative mx-auto mt-3 max-w-sm rounded-3xl p-5 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4">
            <li>
              <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>
                About
              </NavLink>
            </li>
            <li className="flex flex-col gap-2">
              <span className="font-display text-[12px] font-extrabold tracking-[0.2em] text-steel uppercase">
                Products
              </span>
              {productLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="font-sans pl-1 text-sm font-medium text-pine"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </li>
            <li>
              <NavLink to="/recipes" className={linkClass} onClick={() => setOpen(false)}>
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
