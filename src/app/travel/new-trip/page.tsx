import { LazyMap } from "@/components/map/map-lazy";
import { Waypoints } from "@/components/travel/waypoints";

export default function Page() {
  return (
    <div className="relative flex min-h-[calc(100vh-56px-73px)] w-full flex-col gap-4 overflow-auto px-6 py-7 lg:flex-row lg:px-12">
      <div className="z-10 aspect-video h-[60vh] w-full shrink-0 overflow-hidden rounded border lg:h-auto lg:shrink">
        <LazyMap />
      </div>

      <div className="z-11 lg:w-[400px] lg:max-w-[400px]">
        <Waypoints />
      </div>
    </div>
  );
}
