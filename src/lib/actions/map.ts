import { OpenStreetMapProvider } from "leaflet-geosearch";
import { SearchResult } from "@/lib/types";

export const searchQuery = async (
  provider: OpenStreetMapProvider,
  query: string,
): Promise<SearchResult[]> => {
  return (await provider.search({ query })) as unknown as SearchResult[];
};
