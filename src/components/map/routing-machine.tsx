import L from "leaflet";
import { useContext, useEffect } from "react";
import { MapContext } from "@/components/map/map-provider";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";
import { IGetEvents, getEvents } from "@/lib/utils";
import { SearchResult } from "@/lib/types";

export const Routing = () => {
  const map = useMap();
  const { waypoints, setEvents } = useContext(MapContext);

  async function addEventsToMap() {
    const allButFirst = waypoints.slice(1);
    const events = await getEvents(
      allButFirst.map((waypoint: SearchResult, index) => {
        return {
          latitude: waypoint.y,
          longitude: waypoint.x,
          radius: 5,
        };
      }) as IGetEvents[],
    );
    if (events === null) return;
    setEvents((prev) => events);
  }

  useEffect(() => {
    if (!map) return;
    addEventsToMap();
    const waypointsLatLong = waypoints.map((waypoint) =>
      L.latLng(waypoint.y, waypoint.x),
    );

    const routingControl = L.Routing.control({
      waypoints: waypointsLatLong,
      routeWhileDragging: true,
      // @ts-ignore bravo le typage
      createMarker: () => null,
    }).addTo(map);

    routingControl.hide();

    return () => {
      map.removeControl(routingControl);
    };
  }, [map, waypoints]);

  return null;
};
