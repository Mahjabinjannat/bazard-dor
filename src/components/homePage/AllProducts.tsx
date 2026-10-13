// import { getProducts } from "@/lib/products";
// import { IProduct } from "@/types/product";
// import React from "react";
// import ProductCard from "../shared/ProductCard";

// const AllProducts = async () => {
//   const products: IProduct[] = await getProducts();
//   return (
//     <section id="all-products">
//       <div className="container mx-auto my-16 space-y-7">
//         <h1 className="font-bold text-[20px] leading-none">সব পণ্য</h1>
//         <p className="text-[14px] text-gray-500">{`মোট ${products.length}টি পণ্য দেখানো হচ্ছে`}</p>
//         <div className="grid grid-cols-3 gap-5">
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AllProducts;

import { getProducts } from "@/lib/products";
import { IProduct } from "@/types/product";
import ProductCard from "../shared/ProductCard";

const AllProducts = async () => {
  const products: IProduct[] = await getProducts();

  return (
    <section id="all-products" className="scroll-mt-24 sm:scroll-mt-28">
      <div className="container mx-auto my-8 space-y-5 px-4 sm:my-12 sm:space-y-6 sm:px-6 lg:my-16 lg:space-y-7 lg:px-8">
      
        <div className="space-y-2">
          <h2 className="text-[18px] font-bold leading-tight text-[#1D281F] sm:text-[20px]">
            সব পণ্য
          </h2>

          <p className="text-[12px] text-gray-500 sm:text-[14px]">
            মোট {products.length}টি পণ্য দেখানো হচ্ছে
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
