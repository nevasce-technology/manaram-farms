import { useCallback, useState } from "react";
import FeaturedProducts from "../components/home/FeaturedProducts";
import FacilityProofRail from "../components/home/FacilityProofRail";
import Hero from "../components/home/Hero";
import HomeFooter from "../components/home/HomeFooter";
import HomeIntro from "../components/home/HomeIntro";
import ShopDestinations from "../components/home/ShopDestinations";
import WelcomeFarm from "../components/home/WelcomeFarm";
import { prefersReducedMotion } from "../lib/anim";
import { shouldPlayHomeIntro } from "../lib/home-intro-navigation";

export default function Home() {
  const reduceMotion = prefersReducedMotion();
  const [skipIntro] = useState(() => reduceMotion || !shouldPlayHomeIntro());
  const [introVisible, setIntroVisible] = useState(() => !skipIntro);
  const [revealStarted, setRevealStarted] = useState(() => skipIntro);
  const [heroLayoutReady, setHeroLayoutReady] = useState(() => skipIntro);

  const handleLiftStart = useCallback(() => {
    setRevealStarted(true);
  }, []);

  const handleIntroComplete = useCallback(() => {
    setIntroVisible(false);
  }, []);

  const handleZoomComplete = useCallback(() => {
    setHeroLayoutReady(true);
  }, []);

  return (
    <>
      {introVisible && (
        <HomeIntro onLiftStart={handleLiftStart} onComplete={handleIntroComplete} />
      )}
      <Hero
        skipIntro={skipIntro}
        revealStarted={revealStarted}
        mediaReady={heroLayoutReady}
        onZoomComplete={handleZoomComplete}
      />
      <FacilityProofRail skipIntro={skipIntro} revealStarted={revealStarted} />
      <WelcomeFarm />
      <FeaturedProducts />
      <ShopDestinations />
      <HomeFooter />
    </>
  );
}
