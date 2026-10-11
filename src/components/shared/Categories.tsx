import { getCategories } from "@/lib/categories";
import Link from "next/link";

const Categories = async () => {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div>
      <div className="flex gap-6 container mx-auto py-4">
        {categories.map((category) => (
          <Link
            href={`/category/${category.slug}`}
            key={category.id}
            className="flex gap-2 text-[13px] font-semibold"
          >
            <span className="">{category.icon}</span>
            {category.nameBn}
          </Link>
        ))}
      </div>
      <hr className="border-0 border-t border-gray-300" />
    </div>
  );
};

export default Categories;
