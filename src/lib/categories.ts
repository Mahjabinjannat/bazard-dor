import { cacheLife } from "next/cache";

import type { ICategory } from "@/types/category";
import { fetchAPI } from "./api";

export async function getCategories(): Promise<ICategory[]> {
  "use cache";

  cacheLife("hours");

  return fetchAPI<ICategory[]>("categories");
}
