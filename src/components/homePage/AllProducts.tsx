import { getProducts } from "@/lib/products";
import { IProduct } from "@/types/product";
import React from "react";
import ProductCard from "./ProductCard";

const AllProducts = async () => {
  const products: IProduct[] = await getProducts();
  return (
    <div className="container mx-auto my-16 space-y-7">
      <h1 className="font-bold text-[20px] leading-none">সব পণ্য</h1>
      <p className="text-[14px] text-gray-500">{`মোট ${products.length}টি পণ্য দেখানো হচ্ছে`}</p>
      <div className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
