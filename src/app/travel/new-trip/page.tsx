"use client";

import { LazyMap } from "@/components/map/map-lazy";
import { Waypoints } from "@/components/travel/waypoints";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { MapContext } from "@/components/map/map-provider";
import { saveRoute } from "@/lib/actions/route";

export default function Page() {
  const { waypoints } = useContext(MapContext);

  return (
    <div className="relative flex h-full w-full flex-col gap-4 overflow-hidden p-20 lg:flex-row">
      <div className="z-10 aspect-video flex-grow overflow-hidden rounded border">
        <LazyMap />
      </div>

      <div className="z-11">
        <Waypoints />

        {waypoints.length > 1 && (
          <Button
            className="mt-4"
            variant={"outline"}
            onClick={() => saveRoute(waypoints)}
          >
            Save Route
          </Button>
        )}
      </div>
    </div>
  );
}
