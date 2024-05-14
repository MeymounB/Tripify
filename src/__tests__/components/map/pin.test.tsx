import { describe, expect, test } from "vitest";
import Pin from "@/components/map/pin";
import { LatLngTuple } from "leaflet";
import { MapContainer } from "react-leaflet";
import { render } from "@testing-library/react";

describe("Pin Component", () => {
  test("should render without crashing", () => {
    const position: LatLngTuple = [51.505, -0.09];
    const popup = <div>Test Popup</div>;

    const { container } = render(
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100vh", width: "100%" }}
      >
        <Pin position={position} popup={popup} />
      </MapContainer>,
    );
    expect(container).toBeTruthy();
  });
});
