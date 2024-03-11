import { LazyMap } from "@/components/map/map-lazy";
import { LazySearch } from "@/components/travel/search-lazy";

export default function Page() {
  return (
    <div className="flex h-full w-full gap-4 overflow-hidden p-20">
      <div className="aspect-video w-2/3 overflow-hidden rounded border">
        <LazyMap />
      </div>

      <LazySearch />
    </div>
  );
}
