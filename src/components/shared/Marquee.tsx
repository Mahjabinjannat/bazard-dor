import { getProducts } from "@/lib/products";
import { IProduct } from "@/types/product";
import { FaCaretUp } from "react-icons/fa";
import { IoCaretDown } from "react-icons/io5";

import FastMarquee from "react-fast-marquee";
import "react-marquee-text/dist/styles.css";
import Link from "next/link";

const Marquee = async () => {
  const products: IProduct[] = await getProducts();
  console.log("mq:", products);
  return (
    <div className="w-full overflow-hidden bg-[#F0F5F0] py-[0.5px]">
      <FastMarquee
        speed={160}
        direction="left"
        gradient={false}
        pauseOnHover={true}
        autoFill={true}
      >
        <div className="flex items-center">
          {products.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="flex shrink-0 items-center gap-3 px-5"
            >
              <span className="shrink-0 text-xl">{product.categoryIcon}</span>
              <span className="whitespace-nowrap text-sm font-semibold text-gray-800">
                {product.nameBn}
              </span>
              <div className="flex items-center gap-1 whitespace-nowrap text-sm text-gray-600">
                <span>{product.today}</span>
                <span>/</span>
                <span>{product.unit}</span>
              </div>
              <span className="flex shrink-0 items-center">
                {product.change.dir === "up" ? (
                  <FaCaretUp className="text-[18px] text-red-600" />
                ) : (
                  <IoCaretDown className="text-[18px] text-green-600" />
                )}
              </span>
              <div className="ml-2 h-6 w-px shrink-0 bg-gray-200" />
            </Link>
          ))}
        </div>
      </FastMarquee>
      <hr className="border-0 border-b border-gray-300" />
    </div>
  );
};

export default Marquee;
