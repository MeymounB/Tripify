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
    <div className="relative flex min-h-[calc(100vh-56px-73px)] w-full flex-col gap-4 overflow-auto px-6 py-7 lg:flex-row lg:px-12">
      <div className="z-10 aspect-video h-[60vh] w-full shrink-0 overflow-hidden rounded border lg:h-auto lg:shrink">
        <LazyMap />
      </div>

      <div className="z-11 lg:w-[400px] lg:max-w-[400px]">
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
