import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import { Footer } from "@/components/footer";

describe("Footer", () => {
  test("renders without crashing", () => {
    render(<Footer />);
  });
});
