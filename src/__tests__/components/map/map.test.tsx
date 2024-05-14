import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import Map from "@/components/map/map";

describe("MapComponent", () => {
  test("renders without crashing", () => {
    render(<Map />);
  });
});
