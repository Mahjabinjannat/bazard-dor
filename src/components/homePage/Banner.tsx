import Image from "next/image";
import BanglaDate from "../shared/BanglaDate";
import hero from "@/assests/bazar-hero.png";
import { Suspense } from "react";

const Banner = () => {
  return (
    <div className="flex justify-between container mx-auto my-[30px] border border-gray-300 rounded-[30px] p-14 bg-[#FAF9F6]">
      <div className="space-y-4">
        <Suspense fallback={<p>তারিখ লোড হচ্ছে...</p>}>
        <div className="text-green-900 bg-green-200 py-1 px-3 rounded-[15px] max-w-[220px]">
          <BanglaDate />
        </div>
        </Suspense>
        <h1 className="text-[20px] font-bold">আজকের বাজারের দাম এক নজরে</h1>
        <p>
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়,
          <br /> সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <button className="bg-green-700 text-white py-2 px-4 rounded-[10px] cursor-pointer">
          সব পণ্য দেখুন
        </button>
      </div>
      <div>
        <Image src={hero} alt="Hero Image" height="200" width="300" />
      </div>
    </div>
  );
};

export default Banner;
