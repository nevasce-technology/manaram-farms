import { useEffect, useRef } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact";
import { markRoutedToHome } from "./lib/home-intro-navigation";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function HomeIntroNavigationGuard() {
  const { pathname } = useLocation();
  const isInitialNavigation = useRef(true);

  useEffect(() => {
    if (isInitialNavigation.current) {
      isInitialNavigation.current = false;
      return;
    }

    if (pathname === "/") {
      markRoutedToHome();
    }
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-canvas">
      <ScrollToHash />
      <HomeIntroNavigationGuard />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recepies" element={<Navigate to="/recipes" replace />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
