// "use client";
// import Image from "next/image";
// import logo from "@/assests/logo-icon.png";
// import BanglaDate from "./BanglaDate";
// import { Suspense } from "react";
// import Link from "next/link";
// import { useSession } from "@/lib/auth-client";
// import { Spinner } from "@heroui/react";
// import { router, signOut } from "better-auth/api";

// const Navbar = () => {
//   const { data: session, isPending, error } = useSession();
//   if (isPending) {
//     return (
//       <div className="flex flex-col items-center gap-2">
//         <Spinner size="xl" />
//         <span className="text-xs text-muted">Loading...</span>
//       </div>
//     );
//   }
//   if (error) {
//     return <p>Session check failed</p>;
//   }
//   const handleSignOut = async () => {
//     await signOut();
//   };

//   return (
//     <div>
//       <div className="flex justify-between container mx-auto py-4 items-center ">
//         <Link href="/" className="flex gap-2 items-center">
//           <Image
//             src={logo}
//             alt="logo"
//             height="20"
//             width="40"
//             className="bg-green-900 rounded-[6px] h-[40px]"
//           />
//           <div>
//             <h1 className="font-bold text-[18px] leading-tight">বাজার দর</h1>
//             <Suspense fallback={<span>তারিখ লোড হচ্ছে...</span>}>
//               <BanglaDate />
//             </Suspense>
//           </div>
//         </Link>
//         <div className="flex items-center gap-4">
//           {session?.user ? (
//             <div>
//               <p>Welcome, {session.user.name}</p>
//               <p>Email: {session.user.email}</p>
//               <button onClick={handleSignOut}>Sign Out</button>
//             </div>
//           ) : (
//             <div>
//               <Link href="/signIn">
//                 <button className="font-semibold cursor-pointer">
//                   সাইন ইন
//                 </button>
//               </Link>
//               <Link href="/signUp">
//                 <button className="bg-green-800 py-2 px-3.5 rounded-[10px] cursor-pointer text-white">
//                   সাইন আপ
//                 </button>
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//       <hr className="border-0 border-t border-gray-200" />
//     </div>
//   );
// };

// export default Navbar;

import Image from "next/image";
import logo from "@/assests/logo-icon.png";
import BanglaDate from "./BanglaDate";
import NavbarAuth from "./NavbarAuth";
import { Suspense } from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between container mx-auto py-4 items-center">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src={logo}
            alt="logo"
            width={40}
            height={40}
            className="bg-green-900 rounded-[6px] h-[40px]"
          />

          <div>
            <h1 className="font-bold text-[18px] leading-tight">
              বাজার দর
            </h1>

            <Suspense fallback={<span>তারিখ লোড হচ্ছে...</span>}>
              <BanglaDate />
            </Suspense>
          </div>
        </Link>

        <NavbarAuth />
      </div>

      <hr className="border-0 border-t border-gray-200" />
    </div>
  );
};

export default Navbar;