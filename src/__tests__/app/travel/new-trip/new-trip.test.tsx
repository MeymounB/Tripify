import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import Page from "@/app/travel/new-trip/page";

describe("New Trip", () => {
  test("renders without crashing", () => {
    render(<Page />);
  });
});
