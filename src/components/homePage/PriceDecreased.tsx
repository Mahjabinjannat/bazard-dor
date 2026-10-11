import { IProduct } from "@/types/product";
import React from "react";
import { IoCaretDown } from "react-icons/io5";
import ProductCard from "./ProductCard";

const PriceDecreased = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="container mx-auto">
      <h1 className="flex items-center font-bold text-[20px] mt-16 mb-7 gap-3">
        <IoCaretDown className="text-green-600 text-[24px]"/>
        আজ দাম কমেছে
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PriceDecreased;
