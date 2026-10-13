// import Image from "next/image";
// import BanglaDate from "../shared/BanglaDate";
// import hero from "@/assests/bazar-hero.png";
// import { Suspense } from "react";

// const Banner = () => {
//   return (
//     <div className="flex justify-between container mx-auto my-[30px] border border-gray-300 rounded-[30px] p-14 bg-[#FAF9F6]">
//       <div className="space-y-4">
//         <Suspense fallback={<p>তারিখ লোড হচ্ছে...</p>}>
//           <div className="text-green-900 bg-green-200 py-1 px-3 rounded-[15px] max-w-[220px]">
//             <BanglaDate />
//           </div>
//         </Suspense>
//         <h1 className="text-[20px] font-bold">আজকের বাজারের দাম এক নজরে</h1>
//         <p>
//           চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
//           বিস্তারিত, গড়,
//           <br /> সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
//         </p>
//         <a
//           href="#all-products"
//           className="inline-block bg-green-700 text-white py-2 px-4 rounded-[10px] cursor-pointer hover:bg-green-800 transition-colors"
//         >
//           সব পণ্য দেখুন
//         </a>
//       </div>
//       <div>
//         <Image src={hero} alt="Hero Image" height="200" width="300" />
//       </div>
//     </div>
//   );
// };

// export default Banner;

import Image from "next/image";
import BanglaDate from "../shared/BanglaDate";
import hero from "@/assests/bazar-hero.png";
import { Suspense } from "react";

const Banner = () => {
  return (
    <section className="container mx-auto my-5 rounded-[20px] border border-gray-300 bg-[#FAF9F6] px-5 py-8 sm:my-7 sm:rounded-[25px] sm:px-8 sm:py-10 lg:my-[30px] lg:rounded-[30px] lg:p-14">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-10">
        {/* Left: Banner content */}
        <div className="w-full space-y-4 text-center md:flex-1 md:text-left">
          {/* Bengali date */}
          <Suspense fallback={<p>তারিখ লোড হচ্ছে...</p>}>
            <div className="mx-auto w-fit rounded-[15px] bg-green-200 px-3 py-1 text-[12px] text-green-900 sm:text-[14px] md:mx-0">
              <BanglaDate />
            </div>
          </Suspense>

          {/* Heading */}
          <h1 className="text-[24px] font-bold leading-tight text-[#1D281F] sm:text-[30px] lg:text-[36px]">
            আজকের বাজারের দাম এক নজরে
          </h1>

          {/* Description */}
          <p className="mx-auto max-w-[520px] text-[13px] leading-6 text-gray-600 sm:text-[15px] sm:leading-7 md:mx-0 lg:text-[16px]">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          {/* Scroll to products */}
          <a
            href="#all-products"
            className="inline-flex items-center justify-center rounded-[10px] bg-green-700 px-5 py-2.5 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-green-800 sm:text-[15px]"
          >
            সব পণ্য দেখুন
          </a>
        </div>

        {/* Right: Banner image */}
        <div className="flex w-full justify-center md:w-[40%] md:shrink-0 lg:w-[38%]">
          <Image
            src={hero}
            alt="বাংলাদেশের নিত্যপ্রয়োজনীয় বাজার পণ্য"
            priority
            className="h-auto w-full max-w-[260px] object-contain sm:max-w-[320px] md:max-w-full lg:max-w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
