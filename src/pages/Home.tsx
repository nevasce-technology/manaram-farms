import FeaturedProducts from "../components/home/FeaturedProducts";
import Hero from "../components/home/Hero";
import HomeFooter from "../components/home/HomeFooter";
import ShopDestinations from "../components/home/ShopDestinations";
import WelcomeFarm from "../components/home/WelcomeFarm";
import CloudRiser from "../components/CloudRiser";

export default function Home() {
  return (
    <>
      <Hero />
      <CloudRiser>
        <WelcomeFarm />
      </CloudRiser>
      <FeaturedProducts />
      <ShopDestinations />
      <HomeFooter />
    </>
  );
}
