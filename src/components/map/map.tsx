"use client";

import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import Pin from "@/components/map/pin";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const position: LatLngTuple = [51.505, -0.09];

  return (
    <MapContainer
      center={position}
      zoom={13}
      className="h-full w-full bg-gray-300"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Pin position={position} />
    </MapContainer>
  );
}
