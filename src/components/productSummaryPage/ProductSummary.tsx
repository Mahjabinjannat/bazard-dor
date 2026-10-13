// // import { IProduct } from "@/types/product";
// // import React from "react";

// // const ProductSummary = ({ productDetails }: { productDetails: IProduct }) => {
// //   console.log("pd: ", productDetails);

// //   const markets = productDetails.markets;
// //   const minPrice = Math.min(...markets.map((market) => market.min));
// //   const maxPrice = Math.max(...markets.map((market) => market.max));
// //   const averagePrice = Math.round(
// //     markets.reduce((sum, market) => sum + market.min + market.max, 0) /
// //       (markets.length * 2),
// //   );

// //   return (
// //     <div className=" ">
// //       <h1 className="text-[20px] font-semibold my-8">দামের সারসংক্ষেপ</h1>
// //       <div className="grid grid-cols-3 gap-5 ">
// //         <div className="border-[0.5px] border-gray-300 rounded-[10px] py-5 px-7 bg-[#FAF9F6] space-y-1">
// //           <p className="text-[10px] text-gray-500">সর্বনিম্ন দাম</p>
// //           <div className="text-green-600 flex items-center gap-2">
// //             <span className="text-[20px] font-bold">{minPrice}</span>
// //             <span>টাকা</span>
// //           </div>
// //           <p className="text-[10px] text-gray-500">সবচেয়ে কম দামের বাজার</p>
// //         </div>
// //         <div className="border-[0.5px] border-gray-300 rounded-[10px] py-5 px-7 bg-[#FAF9F6] space-y-1">
// //           <p className="text-[10px] text-gray-500">সর্বাধিক দাম</p>
// //           <div className="text-red-600 flex items-center gap-2">
// //             <span className="text-[20px] font-bold">{maxPrice}</span>
// //             <span>টাকা</span>
// //           </div>
// //           <p className="text-[10px] text-gray-500">সবচেয়ে বেশি দামের বাজার</p>
// //         </div>
// //         <div className="border-[0.5px] border-gray-300 rounded-[10px] py-5 px-7 bg-[#FAF9F6] space-y-1">
// //           <p className="text-[10px] text-gray-500">গড় দাম</p>
// //           <div className="text-green-600 flex items-center gap-2">
// //             <span className="text-[20px] font-bold">{averagePrice}</span>
// //             <span>টাকা</span>
// //           </div>
// //           <p className="text-[10px] text-gray-500">{`প্রতি ${productDetails.unit}-এর হিসাবে`}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductSummary;

import { formatBanglaNumber, formatBanglaText } from "@/lib/formatBangla";
import { IProduct } from "@/types/product";

const ProductSummary = ({ productDetails }: { productDetails: IProduct }) => {
  const markets = productDetails.markets;

  const minPrice =
    markets.length > 0 ? Math.min(...markets.map((market) => market.min)) : 0;

  const maxPrice =
    markets.length > 0 ? Math.max(...markets.map((market) => market.max)) : 0;

  const averagePrice =
    markets.length > 0
      ? Math.round(
          markets.reduce((sum, market) => sum + market.min + market.max, 0) /
            (markets.length * 2),
        )
      : 0;

  return (
    <section>
      <h2 className="my-5 text-[18px] font-semibold text-[#1D281F] sm:my-7 sm:text-[20px] lg:my-8">
        দামের সারসংক্ষেপ
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
        
        <div className="space-y-1 rounded-[10px] border border-gray-300 bg-[#FAF9F6] px-5 py-4 sm:px-6 sm:py-5 lg:px-7">
          <p className="text-[11px] text-gray-500 sm:text-[12px]">
            সর্বনিম্ন দাম
          </p>

          <div className="flex items-center gap-2 text-green-600">
            <span className="text-[20px] font-bold sm:text-[22px]">
              {formatBanglaNumber(minPrice)}
            </span>
            <span className="text-[13px]">টাকা</span>
          </div>

          <p className="text-[11px] text-gray-500">সবচেয়ে কম দামের বাজার</p>
        </div>

    
        <div className="space-y-1 rounded-[10px] border border-gray-300 bg-[#FAF9F6] px-5 py-4 sm:px-6 sm:py-5 lg:px-7">
          <p className="text-[11px] text-gray-500 sm:text-[12px]">
            সর্বাধিক দাম
          </p>

          <div className="flex items-center gap-2 text-red-600">
            <span className="text-[20px] font-bold sm:text-[22px]">
              {formatBanglaNumber(maxPrice)}
            </span>
            <span className="text-[13px]">টাকা</span>
          </div>

          <p className="text-[11px] text-gray-500">সবচেয়ে বেশি দামের বাজার</p>
        </div>

        <div className="space-y-1 rounded-[10px] border border-gray-300 bg-[#FAF9F6] px-5 py-4 sm:col-span-2 sm:px-6 sm:py-5 lg:col-span-1 lg:px-7">
          <p className="text-[11px] text-gray-500 sm:text-[12px]">গড় দাম</p>

          <div className="flex items-center gap-2 text-green-600">
            <span className="text-[20px] font-bold sm:text-[22px]">
              {formatBanglaNumber(averagePrice)}
            </span>
            <span className="text-[13px]">টাকা</span>
          </div>

          <p className="text-[11px] text-gray-500">
            প্রতি {formatBanglaText(productDetails.unit)}-এর হিসাবে
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductSummary;
