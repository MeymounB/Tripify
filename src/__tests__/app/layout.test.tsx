import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import RootLayout from "@/app/layout";

describe("RootLayout", () => {
  it("should render without crashing", async () => {
    render(
      <RootLayout>
        <div />
      </RootLayout>,
    );

    const navbar = screen.getByRole("navigation");
    if (!navbar) {
      throw new Error("Navbar not found");
    }

    const main = screen.getByRole("main");
    if (!main) {
      throw new Error("Main content not found");
    }

    const footer = screen.getByTestId("testFooter");
    if (!footer) {
      throw new Error("Footer not found");
    }
  });
});
