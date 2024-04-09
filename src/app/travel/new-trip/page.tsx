import { LazyMap } from "@/components/map/map-lazy";
import Poibutton from "@/components/travel/poibutton";
import { Waypoints } from "@/components/travel/waypoints";

export default function Page() {
  return (
    <div className="flex h-full w-full gap-4 overflow-hidden p-20">
      <div className="aspect-video flex-grow overflow-hidden rounded border">
        <LazyMap />
      </div>

      <Waypoints />
      <Poibutton />
    </div>
  );
}
