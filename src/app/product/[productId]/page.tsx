import { MarketBasedPrice } from "@/components/productSummaryPage/MarketBasedPrice";
import ProductSummary from "@/components/productSummaryPage/ProductSummary";
import { getProductDetails } from "@/lib/productDetails";
import { IProduct } from "@/types/product";
import Link from "next/link";
import { GoDash } from "react-icons/go";
import { IoCaretDown, IoCaretUp } from "react-icons/io5";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const productDetails: IProduct = await getProductDetails(productId);
  console.log("p:", productDetails);
  return (
    <div className="container mx-auto min-h-[600px] mb-16">
      <div className="flex gap-2 mt-6 text-gray-500">
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
        <span>{productDetails.nameBn}</span>
      </div>
      <div className=" flex items-center justify-between border border-gray-300 rounded-[20px] bg-[#FAF9F6] px-8 py-5 my-10">
        <div className="flex gap-3 items-center ">
          <span className="h-[70px] w-[70px] text-[40px] bg-gray-200 flex justify-center items-center rounded-[10px]">
            {productDetails.image}
          </span>
          <div>
            <h1 className="text-[27px] font-bold">{productDetails.nameBn}</h1>
            <div className=" flex gap-1">
              <span className="text-gray-600 text-[15px]">প্রতি কেজি</span>
              <span className="text-gray-600 text-[15px]">.</span>
              <span className="text-gray-600 text-[15px]">
                {productDetails.category}
              </span>
            </div>
            <span className="text-gray-600 text-[15px]">{`গতকালের তুলনায় আজ দাম ${productDetails?.change?.dir === "up" ? "বেড়েছে" : productDetails?.change?.dir === "down" ? " কমেছে" : "অপরিবর্তিত"} ${productDetails.change.pct === 0 ? "" : Math.abs(productDetails.change.pct).toFixed(1) + "%"}`}</span>
          </div>
        </div>
        <div className=" bg-gray-200 rounded-[10px]  py-3 px-6 flex flex-col items-center justify-center space-y-1">
          <h1 className="text-gray-600">আজকের দাম</h1>
          <p className="font-bold text-[22px]">{productDetails.today}</p>
          <div className="flex gap-1 text-gray-600">
            <span>টাকা</span>
            <span>/</span>
            <span>{productDetails.unit}</span>
          </div>
          <span
            className={`flex gap-2 text-[14px] items-center ${productDetails.change.dir === "up" ? "text-red-600" : productDetails.change.dir === "down" ? "text-green-600" : "text-gray-600"}`}
          >
            {productDetails.change.dir === "up" ? (
              <IoCaretUp className="text-red-600 text-[18px]" />
            ) : productDetails.change.dir === "down" ? (
              <IoCaretDown className="text-green-600 text-[18px]" />
            ) : (
              <GoDash className="text-gray-600 text-[18px]" />
            )}
            {Math.abs(productDetails.change.pct)} <span>%</span>
          </span>
        </div>
      </div>
      <ProductSummary productDetails={productDetails} />
      <MarketBasedPrice markets={productDetails.markets} />
      <Link
        href={`/category/${productDetails.category}`}
        className="flex gap-2 hover:bg-gray-200 px-4 py-2 rounded-[10px] hover:border border-gray-300 w-[150px]"
      >
        <span>{productDetails.image}</span>
        <button className="font-semibold cursor-pointer ">
          {`সব ${productDetails.categoryNameBn}`}
        </button>
      </Link>
    </div>
  );
};

export default ProductPage;
