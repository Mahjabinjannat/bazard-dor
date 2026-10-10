const API_BASE_URLS = [
  "https://api.api-store.workers.dev/api/bazardor",
  "https://api.abcz.workers.dev/api/bazardor",
];

export async function fetchWithFallback<T>(
  endpoint: string
): Promise<T> {
  for (const baseUrl of API_BASE_URLS) {
    try {
      const response = await fetch(`${baseUrl}/${endpoint}`, {
        signal: AbortSignal.timeout(5000),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data: T = await response.json();

      return data;
    } catch (error) {
      console.error(`Failed to fetch from ${baseUrl}:`, error);
    }
  }

  throw new Error(`All APIs failed for endpoint: ${endpoint}`);
}