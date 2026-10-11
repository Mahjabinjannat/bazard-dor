import CategoryProductList from "@/components/categorizedProductsPage/CategoryProductList";
import { getCategoriedProduct } from "@/lib/categorizedProduct";
import { IProduct } from "@/types/product";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;
  const categorizedProducts: IProduct[] =
    await getCategoriedProduct(categoryId);
  console.log(categorizedProducts);

  return (
    <div className="container mx-auto  min-h-[600px]">
      <div className="flex gap-5 items-center border border-gray-200 py-5 px-5 rounded-[15px] bg-[#FAF9F6] my-8">
        <p className="h-[40px] w-[40px] text-[40px] flex items-center justify-center ">
          {categorizedProducts[0]?.categoryIcon}
        </p>
        <div>
          <h1 className="font-bold text-[25px]">
            {categorizedProducts[0]?.categoryNameBn ?? "ক্যাটাগরি"}
          </h1>
          <p className="text-[15px] text-gray-500">{`${categorizedProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন`}</p>
        </div>
      </div>

      <CategoryProductList categorizedProducts={categorizedProducts} />
    </div>
  );
};

export default CategoryPage;
