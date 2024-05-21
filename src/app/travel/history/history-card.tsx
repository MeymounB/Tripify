"use client";

import { SearchResult } from "@/lib/types";
import { searchQuery } from "@/lib/actions/map";
import { Button } from "@/components/ui/button";
import { useContext, useMemo } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { MapContext } from "@/components/map/map-provider";
import { useRouter } from "next/navigation";

export default function HistoryCard({ route }: any) {
  const provider = useMemo(() => new OpenStreetMapProvider(), []);
  const { waypoints, setWaypoints } = useContext(MapContext);
  const router = useRouter();
  const handleOpenTravel = async (route: any) => {
    const waypoints: SearchResult[] = await Promise.all(
      route.waypoints.map(async (waypoint: any) => {
        const results = await searchQuery(provider, waypoint.name);

        return results[0];
      }),
    );

    setWaypoints(() => waypoints);
    router.push("/travel/new-trip");
  };

  return (
    <Button
      key={route.id}
      variant="outline"
      className="flex h-max w-96 flex-col items-start justify-start gap-2"
      onClick={() => handleOpenTravel(route)}
    >
      {route.waypoints.map((waypoint: any) => (
        <li
          key={waypoint.id}
          className="inline-block w-full items-center gap-2 overflow-hidden overflow-ellipsis whitespace-nowrap"
        >
          {waypoint.name}
        </li>
      ))}

      <p className="text-xs font-light text-black/50">
        {route.createdAt.toDateString()}
      </p>
    </Button>
  );
}
