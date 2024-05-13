import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import Page from "@/app/page";
import NotFound from "@/app/not-found";

describe("App", () => {
  test("renders without crashing", () => {
    render(<Page />);
  });
});

describe("Not Found", () => {
  test("renders without crashing", () => {
    render(<NotFound />);
  });
});
