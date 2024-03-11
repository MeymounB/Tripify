import { OpenStreetMapProvider } from "leaflet-geosearch";

export const searchQuery = async (
  provider: OpenStreetMapProvider,
  query: string,
) => {
  return await provider.search({ query });
};
