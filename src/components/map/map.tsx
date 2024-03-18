"use client";

import React, { useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import Pin from "@/components/map/pin";
import { MapContext } from "@/components/map/map-provider";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const { waypoints } = useContext(MapContext);
  const position: LatLngTuple = [51.505, -0.09];

  return (
    <MapContainer
      center={position}
      zoom={13}
      className="h-full w-full bg-gray-300"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {waypoints.map((waypoint) => (
        <Pin position={[waypoint.y, waypoint.x]} />
      ))}
    </MapContainer>
  );
}
