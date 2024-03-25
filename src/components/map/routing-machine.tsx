import L from "leaflet";
import { useContext, useEffect } from "react";
import { MapContext } from "@/components/map/map-provider";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

export const Routing = () => {
  const map = useMap();
  const { waypoints } = useContext(MapContext);

  console.log(waypoints);

  useEffect(() => {
    if (!map) return;

    const waypointsLatLong = waypoints.map((waypoint) =>
      L.latLng(waypoint.y, waypoint.x),
    );

    const routingControl = L.Routing.control({
      waypoints: waypointsLatLong,
      routeWhileDragging: true,
      // @ts-ignore bravo le typage
      createMarker: () => null,
    }).addTo(map);

    console.log(routingControl);

    routingControl.hide();

    return () => {
      map.removeControl(routingControl);
    };
  }, [map, waypoints]);

  return null;
};
