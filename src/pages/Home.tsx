import FeaturedProducts from "../components/home/FeaturedProducts";
import FacilityProofRail from "../components/home/FacilityProofRail";
import Hero from "../components/home/Hero";
import HomeFooter from "../components/home/HomeFooter";
import ShopDestinations from "../components/home/ShopDestinations";
import WelcomeFarm from "../components/home/WelcomeFarm";

export default function Home() {
  return (
    <>
      <Hero />
      <FacilityProofRail />
      <WelcomeFarm />
      <FeaturedProducts />
      <ShopDestinations />
      <HomeFooter />
    </>
  );
}
