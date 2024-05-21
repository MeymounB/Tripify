// components/travel/PrintablePage.tsx
import React, { forwardRef } from "react";
import { LazyMap } from "@/components/map/map-lazy";
import { Waypoints } from "@/components/travel/waypoints";

const PrintablePage = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="relative flex h-full w-full flex-col gap-4 overflow-hidden p-20 lg:flex-row"
    >
      <div className="z-10 aspect-video flex-grow overflow-hidden rounded border">
        <LazyMap />
      </div>
      <div className="z-11">
        <Waypoints />
      </div>
    </div>
  );
});

PrintablePage.displayName = "PrintablePage";

export default PrintablePage;
