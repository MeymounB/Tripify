import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import PlanTripButton from "@/components/homepage/PlanTripButton";

describe("PlanTripButton", () => {
  test("renders without crashing", () => {
    render(<PlanTripButton buttonText="Test" targetPage="/" />);
  });
});
