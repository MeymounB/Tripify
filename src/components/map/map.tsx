"use client";

import React, { useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import Pin from "@/components/map/pin";
import EventPin from "@/components/map/eventPin";
import { MapContext } from "@/components/map/map-provider";
import "leaflet/dist/leaflet.css";
import { Routing } from "./routing-machine";

export default function Map() {
  const { waypoints, events } = useContext(MapContext);
  const position: LatLngTuple = [51.505, -0.09];

  return (
    <MapContainer
      center={position}
      zoom={13}
      className="h-full w-full bg-gray-300"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {waypoints.map((waypoint, index: number) => (
        <Pin key={index} position={[waypoint.y, waypoint.x]} />
      ))}
      {events.map((event, index: number) => (
        <EventPin
          key={index}
          position={[parseFloat(event.latitude), parseFloat(event.longitude)]}
        />
      ))}
      <Routing />
    </MapContainer>
  );
}
