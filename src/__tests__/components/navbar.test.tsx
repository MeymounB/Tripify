import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import { Navbar } from "@/components/navbar";

describe("Navbar", () => {
  test("renders without crashing", () => {
    render(<Navbar />);
  });
});
