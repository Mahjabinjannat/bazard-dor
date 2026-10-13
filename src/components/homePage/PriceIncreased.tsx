// import { IProduct } from "@/types/product";

// import ProductCard from "../shared/ProductCard";
// import { IoCaretUp } from "react-icons/io5";

// const PriceIncreased = ({ products }: { products: IProduct[] }) => {
//   return (
//     <div className="container mx-auto">
//       <h1 className="flex items-center font-bold text-[20px] mt-16 mb-7 gap-3">
//         <IoCaretUp className="text-red-600 text-[24px]" />
//         আজ দাম বেড়েছে
//       </h1>
//       <div className="grid grid-cols-3 gap-5">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PriceIncreased;

import { IProduct } from "@/types/product";
import ProductCard from "../shared/ProductCard";
import { IoCaretUp } from "react-icons/io5";

const PriceIncreased = ({ products }: { products: IProduct[] }) => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="mb-5 mt-8 flex items-center gap-2 text-[18px] font-bold text-[#1D281F] sm:mb-6 sm:mt-12 sm:gap-3 sm:text-[20px] lg:mb-7 lg:mt-16">
        <IoCaretUp className="shrink-0 text-[22px] text-red-600 sm:text-[24px]" />
        আজ দাম বেড়েছে
      </h2>

      <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PriceIncreased;
