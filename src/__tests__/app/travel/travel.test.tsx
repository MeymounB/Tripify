import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import Layout from "@/app/travel/layout";
import Page from "@/app/travel/page";

describe("Travel", () => {
  test("renders without crashing", () => {
    render(<Layout children={<Page />} />);
  });
});
