import HomeFooter from "../components/home/HomeFooter";
import AboutFacility from "../components/about/AboutFacility";
import AboutHero from "../components/about/AboutHero";
import AboutMission from "../components/about/AboutMission";
import AboutOrigin from "../components/about/AboutOrigin";
import AboutPantry from "../components/about/AboutPantry";
import AboutPillars from "../components/about/AboutPillars";
import AboutProcess from "../components/about/AboutProcess";
import AboutVision from "../components/about/AboutVision";
import AboutWhy from "../components/about/AboutWhy";

export default function About() {
  return (
    <>
      <main className="about-page bg-white">
        <AboutHero />
        <AboutOrigin />
        <AboutFacility />
        <AboutProcess />
        <AboutPillars />
        <AboutVision />
        <AboutMission />
        <AboutWhy />
        <AboutPantry />
      </main>
      <HomeFooter />
    </>
  );
}
