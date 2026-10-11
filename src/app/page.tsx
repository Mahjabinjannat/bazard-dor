import AllProducts from "@/components/homePage/AllProducts";
import Banner from "@/components/homePage/Banner";
import PriceUpdate from "@/components/homePage/PriceUpdate";

export default function Home() {
  return (
    <div>
      <Banner />
      <PriceUpdate />
      <AllProducts />
    </div>
  );
}
