import { describe, expect, vi, it } from "vitest";
import { getEvents } from "@/lib/utils";

const mockImplementation = () =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: {
          poi: {
            results: [
              {
                isLocatedAt: [
                  {
                    schema_geo: [
                      { schema_latitude: ["1"], schema_longitude: ["2"] },
                    ],
                    schema_address: [{ schema_postalCode: ["3"] }],
                  },
                ],
                rdfs_label: [{ value: "label" }],
                takesPlaceAt: [
                  {
                    startDate: "startDate",
                    endDate: "endDate",
                    startTime: "startTime",
                    endTime: "endTime",
                  },
                ],
              },
            ],
          },
        },
      }),
  } as Response);

describe("getEvents", () => {
  const fetchSpy = vi.spyOn(global, "fetch");
  fetchSpy.mockImplementation(mockImplementation);

  it("should make a GET request with the correct lat long and return the data mapped correctly", async () => {
    const result = await getEvents([{ latitude: 1, longitude: 2, radius: 3 }]);
    expect(fetchSpy).toHaveBeenCalledOnce();

    expect(result).toEqual([
      {
        latitude: "1",
        longitude: "2",
        postalCode: 3,
        label: "label",
        startDate: "startDate",
        endDate: "endDate",
        startTime: "startTime",
        endTime: "endTime",
      },
    ]);
  });
});
