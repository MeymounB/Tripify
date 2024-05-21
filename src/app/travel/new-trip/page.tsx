// pages/new-trip.tsx
import React from "react";
import Link from "next/link";
import { LazyMap } from "@/components/map/map-lazy";
import { Waypoints } from "@/components/travel/waypoints";
import { Button } from "@/components/ui/button";

export default function NewTripPage() {
  return (
    <div className="relative flex min-h-[calc(100vh-56px-73px)] w-full flex-col gap-4 overflow-auto px-6 py-7 lg:flex-row lg:px-12">
      <div className="z-10 aspect-video h-[60vh] w-full shrink-0 overflow-hidden rounded border lg:h-auto lg:shrink">
        <LazyMap />
      </div>

      <div className="z-11 flex flex-col gap-2  lg:w-[400px] lg:max-w-[400px]">
        <Waypoints />
        <Link href="/print">
          <Button className="!bg-black">Print this page</Button>
        </Link>
      </div>
    </div>
  );
}
