// import CategoryProductList from "@/components/categorizedProductsPage/CategoryProductList";
// import EmptyState from "@/components/shared/EmptyState";
// import { getCategories } from "@/lib/categories";
// import { getCategoriedProduct } from "@/lib/categorizedProduct";
// import { IProduct } from "@/types/product";
// import { notFound } from "next/navigation";

// const CategoryPage = async ({
//   params,
// }: {
//   params: Promise<{ categoryId: string }>;
// }) => {
//   const { categoryId } = await params;
//   const categories = await getCategories();
//   const category = categories.find((item) => item.id === categoryId);

//   if (!category) {
//     notFound();
//   }

//   const categorizedProducts: IProduct[] =
//     await getCategoriedProduct(categoryId);
//   console.log(categorizedProducts);

//   return (
//     <div className="container mx-auto  min-h-[600px]">
//       <div className="flex gap-5 items-center border border-gray-200 py-5 px-5 rounded-[15px] bg-[#FAF9F6] my-8">
//         <p className="h-[40px] w-[40px] text-[40px] flex items-center justify-center ">
//           {categorizedProducts[0]?.categoryIcon}
//         </p>
//         <div>
//           <h1 className="font-bold text-[25px]">
//             {categorizedProducts[0]?.categoryNameBn ?? "ক্যাটাগরি"}
//           </h1>
//           <p className="text-[15px] text-gray-500">{`${categorizedProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন`}</p>
//         </div>
//       </div>

//       {categorizedProducts.length === 0 ? (
//         <EmptyState />
//       ) : (
//         <CategoryProductList categorizedProducts={categorizedProducts} />
//       )}
//     </div>
//   );
// };

// export default CategoryPage;

import CategoryProductList from "@/components/categorizedProducts/CategoryProductList";
import EmptyState from "@/components/shared/EmptyState";
import { getCategories } from "@/lib/categories";
import { getCategoriedProduct } from "@/lib/categorizedProduct";
import { IProduct } from "@/types/product";
import { notFound } from "next/navigation";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;

  const categories = await getCategories();

  const category = categories.find((item) => item.id === categoryId);

  if (!category) {
    notFound();
  }

  const categorizedProducts: IProduct[] =
    await getCategoriedProduct(categoryId);

  return (
    <main className="container mx-auto min-h-[500px] px-4 pb-10 sm:min-h-[600px] sm:px-6 lg:px-8">
      <div className="my-5 flex items-center gap-3 rounded-[12px] border border-gray-200 bg-[#FAF9F6] px-4 py-4 sm:my-7 sm:gap-4 sm:rounded-[15px] sm:px-5 sm:py-5 lg:my-8 lg:gap-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center text-[30px] sm:h-12 sm:w-12 sm:text-[40px]">
          {category.icon}
        </span>

        <div className="min-w-0 flex-1">
          <h1 className="break-words text-[18px] font-bold leading-snug text-[#1D281F] sm:text-[22px] lg:text-[25px]">
            {category.nameBn}
          </h1>

          <p className="mt-1 text-[12px] leading-5 text-gray-500 sm:text-[14px] lg:text-[15px]">
            {categorizedProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      {categorizedProducts.length === 0 ? (
        <EmptyState />
      ) : (
        <CategoryProductList categorizedProducts={categorizedProducts} />
      )}
    </main>
  );
};

export default CategoryPage;
