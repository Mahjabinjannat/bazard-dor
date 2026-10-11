import { IProduct } from "@/types/product";
import React from "react";

import ProductCard from "./ProductCard";
import { IoCaretUp } from "react-icons/io5";

const PriceIncreased = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="container mx-auto">
      <h1 className="flex items-center font-bold text-[20px] mt-16 mb-7 gap-3">
        <IoCaretUp className="text-red-600 text-[24px]" />
        আজ দাম বেড়েছে
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PriceIncreased;
