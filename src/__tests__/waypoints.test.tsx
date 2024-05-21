import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Waypoint, Waypoints } from "@/components/travel/waypoints";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

global.ResizeObserver = require("resize-observer-polyfill");

describe("Waypoints", () => {
  test("renders without crashing", () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <Waypoints />
      </DndProvider>,
    );
  });

  test("contains 'Add waypoint' button", async () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <Waypoints />
      </DndProvider>,
    );

    expect(await screen.findAllByText("Add waypoint")).toBeDefined();
  });

  test("adds waypoint when 'Add waypoint' button is clicked and a search query is entered", async () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <Waypoints />
      </DndProvider>,
    );

    const addWaypointButton = await screen.findAllByText("Add waypoint");

    fireEvent.click(addWaypointButton[0]);

    const searchInput = screen.getByPlaceholderText("Change status...");

    fireEvent.change(searchInput, {
      target: {
        value: "Orsay",
      },
    });

    const result = await screen.findByText("Orsay, Palaiseau, Essonne", {
      exact: false,
    });

    fireEvent.click(result);
  });
});

describe("Waypoint", () => {
  const mockUpdateWaypoint = vi.fn();
  const mockMoveWaypoints = vi.fn();
  const mockSetCurrentHovered = vi.fn();

  const waypointProps = {
    index: 0,
    value:
      "Orsay, Palaiseau, Essonne, Ile-de-France, Metropolitan France, 91400, France",
    moveWaypoints: mockMoveWaypoints,
    updateWaypoint: mockUpdateWaypoint,
    currentHovered: null,
    setCurrentHovered: mockSetCurrentHovered,
  };

  test("renders without crashing", () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <Waypoint {...waypointProps} />
      </DndProvider>,
    );
  });

  test("renders the correct text", async () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <Waypoint {...waypointProps} />
      </DndProvider>,
    );

    const waypoint = await screen.findAllByText("Orsay, Palaiseau, Essonne", {
      exact: false,
    });

    expect(waypoint).toBeDefined();
  });
});
