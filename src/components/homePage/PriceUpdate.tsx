import { getProducts } from "@/lib/products";
import { IProduct } from "@/types/product";
import PriceIncreased from "./PriceIncreased";
import PriceDecreased from "./PriceDecreased";

const PriceUpdate = async () => {
  const products: IProduct[] = await getProducts();
  console.log("pro: ", products);
  const sortedProducts = products.toSorted(
    (productA, productB) => productB.change.pct - productA.change.pct,
  );

  const priceIncreasedProducts = sortedProducts.slice(0, 6);
  const priceDecreasedProducts = sortedProducts.slice(-6).toReversed();

  return (
    <div>
      <PriceIncreased products={priceIncreasedProducts} />
      <PriceDecreased products={priceDecreasedProducts} />
    </div>
  );
};

export default PriceUpdate;
