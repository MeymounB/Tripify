import { expect, test } from "vitest";
import { OpenStreetMapProvider } from "leaflet-geosearch";

test("Test search query for 'New York'", async () => {
  const provider = new OpenStreetMapProvider();

  const results = await provider.search({ query: "New York" });

  expect(results).toBeDefined();

  expect(results[0].label).toBe("City of New York, New York, United States");
  expect(results[1].label).toBe("New York, United States");

  expect(results[0].x).toBe(-74.0060152);
  expect(results[0].y).toBe(40.7127281);

  expect(results[1].x).toBe(-75.8449946);
  expect(results[1].y).toBe(43.1561681);
});
