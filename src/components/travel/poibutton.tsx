"use client";
import React, { useContext } from "react";
import { MapContext } from "../map/map-provider";
import { getEvents } from "@/lib/utils";

type Props = {};

function Poibutton({}: Props) {
  const { waypoints, setWaypoints } = useContext(MapContext);
  async function GetPOI(latitude: number, longitude: number, radius: number) {
    const response = await getEvents(latitude, longitude, radius);
  }
  function handlePOIClick() {
    if (!waypoints) {
      return;
    }
    const latitude = parseFloat(waypoints[0].raw.lat);
    const longitude = parseFloat(waypoints[0].raw.lon);
    GetPOI(latitude, longitude, 5);
  }

  return (
    <div>
      <button onClick={(e) => handlePOIClick()}>BIG TEST FIND ME </button>
    </div>
  );
}

export default Poibutton;
