import { cacheLife } from "next/cache";
import { fetchAPI } from "./api";
import { IProduct } from "@/types/product";

export async function getProductDetails(productId: string): Promise<IProduct> {
  "use cache";

  cacheLife("hours");

  return fetchAPI<IProduct>(`products/${productId}`);
}
