// "use client";

// import { useState } from "react";
// import { IProduct } from "@/types/product";
// import DropdownComponent from "./Dropdown";
// import ProductCard from "@/components/shared/ProductCard";

// export default function CategoryProductList({
//   categorizedProducts,
// }: {
//   categorizedProducts: IProduct[];
// }) {
//   const [sortOrder, setSortOrder] = useState("default");

//   const sortedProducts = categorizedProducts.toSorted((a, b) => {
//     if (sortOrder === "ascending") {
//       return a.today - b.today;
//     }

//     if (sortOrder === "descending") {
//       return b.today - a.today;
//     }

//     return 0;
//   });

//   return (
//     <>
//       <div className="flex justify-between">
//         <p className="text-[15px] text-gray-500">
//           মোট {categorizedProducts.length}টি পণ্য দেখানো হচ্ছে
//         </p>

//         <div className="flex items-center gap-4">
//           <span>সাজান</span>

//           <DropdownComponent
//             sortOrder={sortOrder}
//             setSortOrder={setSortOrder}
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-3 gap-5 py-6">
//         {sortedProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </>
//   );
// }

"use client";

import { useState } from "react";
import { IProduct } from "@/types/product";
import DropdownComponent from "./Dropdown";
import ProductCard from "@/components/shared/ProductCard";

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
    <section className="w-full">
      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
        <p className="text-[12px] text-gray-500 sm:text-[14px] lg:text-[15px]">
          মোট {categorizedProducts.length}টি পণ্য দেখানো হচ্ছে
        </p>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <span className="text-[12px] font-medium text-[#1D281F] sm:text-[14px]">
            সাজান
          </span>

          <DropdownComponent
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 py-5 sm:grid-cols-2 sm:gap-4 sm:py-6 lg:grid-cols-3 lg:gap-5">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
