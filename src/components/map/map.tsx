"use client";

import React, { useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import Pin from "@/components/map/pin";
import EventPin from "@/components/map/eventPin";
import { MapContext } from "@/components/map/map-provider";
import "leaflet/dist/leaflet.css";
import { Routing } from "./routing-machine";
import dayjs from "dayjs";

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
      {events.map((event, index: number) => {
        return (
          <EventPin
            key={index}
            position={[parseFloat(event.latitude), parseFloat(event.longitude)]}
            popup={
              <div>
                {event.label}
                <p>Start : {dayjs(event.startDate).format("DD/MM/YYYY")}</p>
                <p>End : {dayjs(event.endDate).format("DD/MM/YYYY")}</p>
                <p>
                  Opening hours :{" "}
                  {dayjs("01/01/2000 " + `${event.startTime}`).format("hh A")}-
                  {dayjs("01/01/2000 " + `${event.endTime}`).format("hh A")}
                </p>
              </div>
            }
          />
        );
      })}
      <Routing />
    </MapContainer>
  );
}
