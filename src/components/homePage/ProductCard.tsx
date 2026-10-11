import { IProduct } from "@/types/product";
import Link from "next/link";
import { GoDash } from "react-icons/go";
import { IoCaretDown, IoCaretUp } from "react-icons/io5";

const ProductCard = ({ product }: { product: IProduct }) => {
  console.log("id: ", product.id);
  return (
    <Link href={`/product/${product.id}`}>
      <div className="px-4 py-4 border border-gray-300 flex flex-col gap-3 rounded-[20px] bg-[#FAF9F6] hover:border-green-600">
        <div className="flex gap-2">
          <span className="bg-gray-200 px-2 py-1.5 rounded-[7px] h-[45px] w-[45px] flex items-center justify-center text-[22px]">
            {product.image}
          </span>
          <div>
            <p className="font-bold">{product.nameBn}</p>
            <p className="text-[13px] text-gray-600">{`প্রতি ${product.unit}`}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[12px] text-gray-600">আজকের দাম</p>
            <p className="flex gap-2 items-center">
              <span className="text-[20px] font-bold">{product.today}</span>{" "}
              টাকা
            </p>
          </div>
          <p
            className={`flex items-end bg-gray-200 py-[0.5px] px-1 rounded-[15px] ${product.change.dir === "up" ? "text-red-600" : product.change.dir === "down" ? "text-green-600" : "text-gray-500"} text-[12px] gap-2`}
          >
            {product.change.dir === "up" ? (
              <IoCaretUp className="text-red-600 text-[18px]" />
            ) : product.change.dir === "down" ? (
              <IoCaretDown className="text-green-600 text-[18px]" />
            ) : (
              <GoDash className="text-gray-600 text-[18px]" />
            )}
            {Math.abs(product.change.pct)} <span>%</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
