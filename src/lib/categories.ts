// src/lib/categories.ts

import { cacheLife } from "next/cache";
import { fetchWithFallback } from "./api";
import type { ICategories } from "@/types/categories";

export async function getCategories(): Promise<ICategories[]> {
  "use cache";

  cacheLife("hours");

  return fetchWithFallback<ICategories[]>("categories");
}
