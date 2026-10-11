"use client";

import { useState } from "react";
import { IProduct } from "@/types/product";
import DropdownComponent from "./Dropdown";
import ProductCard from "@/components/homePage/ProductCard";

export default function CategoryProductList({
  categorizedProducts,
}: {
  categorizedProducts: IProduct[];
}) {
  const [sortOrder, setSortOrder] = useState("default");

  const sortedProducts = categorizedProducts.toSorted((a, b) => {
    if (sortOrder === "ascending") {
      return a.today - b.today;
    }

    if (sortOrder === "descending") {
      return b.today - a.today;
    }

    return 0;
  });

  return (
    <>
      <div className="flex justify-between">
        <p className="text-[15px] text-gray-500">
          মোট {categorizedProducts.length}টি পণ্য দেখানো হচ্ছে
        </p>

        <div className="flex items-center gap-4">
          <span>সাজান</span>

          <DropdownComponent
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 py-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}