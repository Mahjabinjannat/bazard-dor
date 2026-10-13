// import { getCategories } from "@/lib/categories";
// import Link from "next/link";

// const Categories = async () => {
//   const categories = await getCategories();
//   console.log(categories);
//   return (
//     <div>
//       <div className="flex gap-6 container mx-auto py-4">
//         {categories.map((category) => (
//           <Link
//             href={`/category/${category.slug}`}
//             key={category.id}
//             className="flex gap-2 text-[13px] font-semibold"
//           >
//             <span className="">{category.icon}</span>
//             {category.nameBn}
//           </Link>
//         ))}
//       </div>
//       <hr className="border-0 border-t border-gray-300" />
//     </div>
//   );
// };

// export default Categories;


import { getCategories } from "@/lib/categories";
import Link from "next/link";

const Categories = async () => {
  const categories = await getCategories();

  return (
    <nav
      aria-label="পণ্যের ক্যাটাগরি"
      className="w-full border-b border-[#DDE7DE] bg-[#FAF9F6]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            flex items-center gap-5
            overflow-x-auto overscroll-x-contain
            whitespace-nowrap
            py-3
            sm:gap-7 sm:py-4
            lg:gap-8
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {categories.map((category) => (
            <Link
              href={`/category/${category.slug}`}
              key={category.id}
              className="
                flex shrink-0 items-center gap-1.5
                rounded-lg px-2 py-1.5
                text-[12px] font-semibold text-[#37463B]
                transition-colors duration-200
                hover:bg-[#E8F3EA] hover:text-[#008C45]
                sm:gap-2 sm:px-3 sm:text-[13px]
              "
            >
              <span
                aria-hidden="true"
                className="text-[17px] leading-none sm:text-[19px]"
              >
                {category.icon}
              </span>

              <span>{category.nameBn}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Categories;
