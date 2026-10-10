import { getCategories } from "@/lib/categories";

const Marquee = async () => {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div>
      <div className="flex gap-6 container mx-auto py-4">
        {categories.map((category) => (
          <span key={category.id} className="flex gap-2">
            <span>{category.icon}</span>
            {category.nameBn}
          </span>
        ))}
      </div>
      <hr className="border-0 border-t border-gray-300" />
    </div>
  );
};

export default Marquee;
