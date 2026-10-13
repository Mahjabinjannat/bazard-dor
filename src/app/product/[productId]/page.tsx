// import { MarketBasedPrice } from "@/components/productSummaryPage/MarketBasedPrice";
// import ProductSummary from "@/components/productSummaryPage/ProductSummary";
// import { getProductDetails } from "@/lib/productDetails";
// import { IProduct } from "@/types/product";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { GoDash } from "react-icons/go";
// import { IoCaretDown, IoCaretUp } from "react-icons/io5";

// const ProductPage = async ({
//   params,
// }: {
//   params: Promise<{ productId: string }>;
// }) => {
//   const { productId } = await params;
//   const productDetails: IProduct = await getProductDetails(productId);
//   console.log("p:", productDetails);
//   if (!productDetails) {
//     notFound();
//   }

//   return (
//     <div className="container mx-auto min-h-[600px] mb-16">
//       <div className="flex gap-2 mt-6 text-gray-500">
//         <Link href="/" className="hover:underline">
//           হোম
//         </Link>
//         <span>&gt;</span>
//         <Link
//           href={`/category/${productDetails.category}`}
//           className="hover:underline"
//         >
//           {productDetails.categoryNameBn}
//         </Link>
//         <span>&gt;</span>
//         <span>{productDetails.nameBn}</span>
//       </div>
//       <div className=" flex items-center justify-between border border-gray-300 rounded-[20px] bg-[#FAF9F6] px-8 py-5 my-10">
//         <div className="flex gap-3 items-center ">
//           <span className="h-[70px] w-[70px] text-[40px] bg-gray-200 flex justify-center items-center rounded-[10px]">
//             {productDetails.image}
//           </span>
//           <div>
//             <h1 className="text-[27px] font-bold">{productDetails.nameBn}</h1>
//             <div className=" flex gap-1">
//               <span className="text-gray-600 text-[15px]">প্রতি কেজি</span>
//               <span className="text-gray-600 text-[15px]">.</span>
//               <span className="text-gray-600 text-[15px]">
//                 {productDetails.category}
//               </span>
//             </div>
//             <span className="text-gray-600 text-[15px]">{`গতকালের তুলনায় আজ দাম ${productDetails?.change?.dir === "up" ? "বেড়েছে" : productDetails?.change?.dir === "down" ? " কমেছে" : "অপরিবর্তিত"} ${productDetails.change.pct === 0 ? "" : Math.abs(productDetails.change.pct).toFixed(1) + "%"}`}</span>
//           </div>
//         </div>
//         <div className=" bg-gray-200 rounded-[10px]  py-3 px-6 flex flex-col items-center justify-center space-y-1">
//           <h1 className="text-gray-600">আজকের দাম</h1>
//           <p className="font-bold text-[22px]">{productDetails.today}</p>
//           <div className="flex gap-1 text-gray-600">
//             <span>টাকা</span>
//             <span>/</span>
//             <span>{productDetails.unit}</span>
//           </div>
//           <span
//             className={`flex gap-2 text-[14px] items-center ${productDetails.change.dir === "up" ? "text-red-600" : productDetails.change.dir === "down" ? "text-green-600" : "text-gray-600"}`}
//           >
//             {productDetails.change.dir === "up" ? (
//               <IoCaretUp className="text-red-600 text-[18px]" />
//             ) : productDetails.change.dir === "down" ? (
//               <IoCaretDown className="text-green-600 text-[18px]" />
//             ) : (
//               <GoDash className="text-gray-600 text-[18px]" />
//             )}
//             {Math.abs(productDetails.change.pct)} <span>%</span>
//           </span>
//         </div>
//       </div>
//       <ProductSummary productDetails={productDetails} />
//       <MarketBasedPrice markets={productDetails.markets} />
//       <Link
//         href={`/category/${productDetails.category}`}
//         className="flex gap-2 hover:bg-gray-200 px-4 py-2 rounded-[10px] hover:border border-gray-300 w-[150px]"
//       >
//         <span>{productDetails.image}</span>
//         <button className="font-semibold cursor-pointer ">
//           {`সব ${productDetails.categoryNameBn}`}
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default ProductPage;

import { MarketBasedPrice } from "@/components/productSummaryPage/MarketBasedPrice";
import ProductSummary from "@/components/productSummaryPage/ProductSummary";
import { getProductDetails } from "@/lib/productDetails";
import { formatBanglaNumber, formatBanglaText } from "@/lib/formatBangla";
import { IProduct } from "@/types/product";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GoDash } from "react-icons/go";
import { IoCaretDown, IoCaretUp } from "react-icons/io5";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const productDetails: IProduct = await getProductDetails(productId);

  if (!productDetails) {
    notFound();
  }

  const { change } = productDetails;

  const changeText =
    change.dir === "up"
      ? "বেড়েছে"
      : change.dir === "down"
        ? "কমেছে"
        : "অপরিবর্তিত";

  const formattedUnit = formatBanglaText(productDetails.unit);
  const formattedPrice = formatBanglaNumber(productDetails.today);
  const formattedPercentage = formatBanglaNumber(Math.abs(change.pct));

  return (
    <main className="container mx-auto min-h-[600px] px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
      <nav
        aria-label="পণ্য নেভিগেশন"
        className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-gray-500 sm:mt-6 sm:text-[14px]"
      >
        <Link href="/" className="hover:underline">
          হোম
        </Link>

        <span>&gt;</span>

        <Link
          href={`/category/${productDetails.category}`}
          className="hover:underline"
        >
          {productDetails.categoryNameBn}
        </Link>

        <span>&gt;</span>

        <span className="font-medium text-[#1D281F]">
          {productDetails.nameBn}
        </span>
      </nav>

      <div className="my-6 flex flex-col gap-5 rounded-[16px] border border-gray-300 bg-[#FAF9F6] p-4 sm:my-8 sm:rounded-[20px] sm:p-6 md:flex-row md:items-center md:justify-between lg:my-10 lg:p-8">
        {/* Product information */}
        <div className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-4">
          {/* Product image/icon */}
          <span className="flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-[10px] bg-gray-200 text-[30px] sm:h-[70px] sm:w-[70px] sm:text-[40px]">
            {productDetails.image}
          </span>

          <div className="min-w-0 space-y-1">
            <h1 className="break-words text-[20px] font-bold leading-tight text-[#1D281F] sm:text-[24px] lg:text-[27px]">
              {productDetails.nameBn}
            </h1>

            <div className="flex flex-wrap items-center gap-1 text-[12px] text-gray-600 sm:text-[15px]">
              <span>প্রতি {formattedUnit}</span>
              <span>·</span>
              <span>{productDetails.categoryNameBn}</span>
            </div>

            <p className="text-[12px] leading-5 text-gray-600 sm:text-[14px] lg:text-[15px]">
              গতকালের তুলনায় আজ দাম {changeText}
              {change.pct !== 0 && <> {formattedPercentage}٪</>}
            </p>
          </div>
        </div>

        <div className="flex w-full items-center justify-between gap-3 rounded-[12px] bg-gray-200 px-4 py-3 md:w-auto md:min-w-[170px] md:flex-col md:justify-center md:px-6 md:text-center">
          <div className="space-y-1">
            <p className="text-[12px] text-gray-600 sm:text-[14px]">
              আজকের দাম
            </p>

            <p className="text-[22px] font-bold leading-tight text-[#1D281F] sm:text-[24px]">
              {formattedPrice}
            </p>

            <p className="text-[12px] text-gray-600 sm:text-[14px]">
              টাকা / {formattedUnit}
            </p>
          </div>

          <span
            className={`flex shrink-0 items-center gap-1 text-[13px] font-semibold sm:text-[14px] ${
              change.dir === "up"
                ? "text-red-600"
                : change.dir === "down"
                  ? "text-green-600"
                  : "text-gray-600"
            }`}
          >
            {change.dir === "up" ? (
              <IoCaretUp className="text-[18px]" />
            ) : change.dir === "down" ? (
              <IoCaretDown className="text-[18px]" />
            ) : (
              <GoDash className="text-[18px]" />
            )}
            {formattedPercentage}٪
          </span>
        </div>
      </div>

      <ProductSummary productDetails={productDetails} />

      <MarketBasedPrice markets={productDetails.markets} />

      <Link
        href={`/category/${productDetails.category}`}
        className="inline-flex max-w-full items-center gap-2 rounded-[10px] border border-transparent px-4 py-2 text-[13px] font-semibold text-[#1D281F] transition-colors hover:border-gray-300 hover:bg-gray-200 sm:text-[14px]"
      >
        <span>{productDetails.categoryIcon}</span>
        <span>সব {productDetails.categoryNameBn}</span>
      </Link>
    </main>
  );
};

export default ProductPage;
