"use client";
import React, { useContext } from "react";
import { MapContext } from "../map/map-provider";
import { getEvents } from "@/lib/utils";

type Props = {};

function Poibutton({}: Props) {
  const { waypoints, events, setEvents } = useContext(MapContext);
  async function GetPOI(latitude: number, longitude: number, radius: number) {
    const response = await getEvents(latitude, longitude, radius);
    response?.map((event) => {
      console.log(event);
      setEvents((prev) => [...prev, event]);
    });
  }
  function handlePOIClick() {
    if (!waypoints) {
      return;
    }
    waypoints.map((waypoint) => {
      const latitude = parseFloat(waypoint.raw.lat);
      const longitude = parseFloat(waypoint.raw.lon);
      console.log(latitude, longitude);
      GetPOI(latitude, longitude, 5);
    });
  }

  return (
    <div>
      <button onClick={(e) => handlePOIClick()}>
        Find events near your waypoints
      </button>
    </div>
  );
}

export default Poibutton;
