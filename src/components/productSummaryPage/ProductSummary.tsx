import { IProduct } from "@/types/product";
import React from "react";

const ProductSummary = ({ productDetails }: { productDetails: IProduct }) => {
  console.log("pd: ", productDetails);

  const markets = productDetails.markets;
  const minPrice = Math.min(...markets.map((market) => market.min));
  const maxPrice = Math.max(...markets.map((market) => market.max));
  const averagePrice = Math.round(
    markets.reduce((sum, market) => sum + market.min + market.max, 0) /
      (markets.length * 2),
  );

  return (
    <div className=" ">
      <h1 className="text-[20px] font-semibold my-8">দামের সারসংক্ষেপ</h1>
      <div className="grid grid-cols-3 gap-5 ">
        <div className="border-[0.5px] border-gray-300 rounded-[10px] py-5 px-7 bg-[#FAF9F6] space-y-1">
          <p className="text-[10px] text-gray-500">সর্বনিম্ন দাম</p>
          <div className="text-green-600 flex items-center gap-2">
            <span className="text-[20px] font-bold">{minPrice}</span>
            <span>টাকা</span>
          </div>
          <p className="text-[10px] text-gray-500">সবচেয়ে কম দামের বাজার</p>
        </div>
        <div className="border-[0.5px] border-gray-300 rounded-[10px] py-5 px-7 bg-[#FAF9F6] space-y-1">
          <p className="text-[10px] text-gray-500">সর্বাধিক দাম</p>
          <div className="text-red-600 flex items-center gap-2">
            <span className="text-[20px] font-bold">{maxPrice}</span>
            <span>টাকা</span>
          </div>
          <p className="text-[10px] text-gray-500">সবচেয়ে বেশি দামের বাজার</p>
        </div>
        <div className="border-[0.5px] border-gray-300 rounded-[10px] py-5 px-7 bg-[#FAF9F6] space-y-1">
          <p className="text-[10px] text-gray-500">গড় দাম</p>
          <div className="text-green-600 flex items-center gap-2">
            <span className="text-[20px] font-bold">{averagePrice}</span>
            <span>টাকা</span>
          </div>
          <p className="text-[10px] text-gray-500">{`প্রতি ${productDetails.unit}-এর হিসাবে`}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
