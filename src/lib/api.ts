// // const API_BASE_URLS = [
// //   "https://openapi.programming-hero.com/api/bazardor/",
// //   "https://api.api-store.workers.dev/api/bazardor",
// //   "https://api.abcz.workers.dev/api/bazardor",
// // ];
// const API_BASE_URL = "https://openapi.programming-hero.com/api/bazardor";
// export async function fetchWithFallback<T>(endpoint: string): Promise<T> {
//   //   for (const baseUrl of API_BASE_URLS) {
//   const url = `${API_BASE_URL}/${endpoint.replace(/^\/+/, "")}`;
//   try {
//     const response = await fetch(`${url}/${endpoint}`, {
//       signal: AbortSignal.timeout(5000),
//     });

import { notFound } from "next/navigation";

//     if (!response.ok) {
//       throw new Error(`HTTP Error: ${response.status} - ${url}`);
//     }

//     const data: T = await response.json();

//     return data;
//   } catch (error) {
//     console.error(`Failed to fetch from ${url}:`, error);
//     throw error;
//   }
//   //   }

//   //   throw new Error(`All APIs failed for endpoint: ${endpoint}`);
// }

const API_BASE_URL = "https://openapi.programming-hero.com/api/bazardor";

export async function fetchAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(
    `${API_BASE_URL}/${endpoint.replace(/^\/+/, "")}`,
    {
      signal: AbortSignal.timeout(5000),
    },
  );

  if (!response.ok) {
    notFound();
    throw new Error(`Failed to fetch ${endpoint}: HTTP ${response.status}`);
  }

  return response.json() as Promise<T>;
}
