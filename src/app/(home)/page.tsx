import AuthSuccessToast from "@/components/auth/AuthSuccessToast";
import AllProducts from "@/components/homePage/AllProducts";
import Banner from "@/components/homePage/Banner";
import PriceUpdate from "@/components/homePage/PriceUpdate";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <AuthSuccessToast />
      </Suspense>
      <div>
        <Banner />
        <PriceUpdate />
        <AllProducts />
      </div>
    </>
  );
}
