import Image from "next/image";
import logo from "@/assests/logo-icon.png";
import BanglaDate from "./BanglaDate";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between container mx-auto py-4 items-center ">
        <div className="flex gap-2 items-center">
          <Image
            src={logo}
            alt="logo"
            height="20"
            width="40"
            className="bg-green-900 rounded-[6px] h-[40px]"
          />
          <div>
            <h1 className="font-bold text-[18px]">বাজার দর</h1>
            <Suspense fallback={<span>তারিখ লোড হচ্ছে...</span>}>
              <BanglaDate />
            </Suspense>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="font-semibold">সাইন ইন</button>
          <button className="bg-green-800 py-2 px-3.5 rounded-[10px] text-white">
            সাইন আপ
          </button>
        </div>
      </div>
      <hr className="border-0 border-t border-gray-100" />
    </div>
  );
};

export default Navbar;
