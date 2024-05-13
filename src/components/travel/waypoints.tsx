"use client";

import { LazySearch } from "@/components/travel/search-lazy";
import { useContext, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { SearchResult } from "@/lib/types";
import { MapContext } from "@/components/map/map-provider";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

interface IWaypoint {
  index: number;
  value: string;
  moveWaypoints: (aIndex: number, bIndex: number) => void;
  updateWaypoint: (waypoint: SearchResult) => void;
  currentHovered: number | null;
  setCurrentHovered: (index: number | null) => void;
}

export function Waypoint({
  value,
  index,
  moveWaypoints,
  updateWaypoint,
  currentHovered,
  setCurrentHovered,
}: IWaypoint) {
  const ref = useRef<HTMLDivElement>(null);
  const [_handler, drop] = useDrop({
    accept: "card",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },

    drop(item: unknown, monitor) {
      if (!ref.current) return;

      const dragIndex = (item as { index: number }).index;
      const hoverIndex = index;

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

      if (hoverClientY < hoverMiddleY) moveWaypoints(dragIndex, hoverIndex);
      if (hoverClientY > hoverMiddleY) moveWaypoints(dragIndex, hoverIndex + 1);

      (item as { index: number }).index = hoverIndex;
      setCurrentHovered(-1);
    },
    hover(item: unknown, monitor) {
      // check if hover is over or under
      if (!ref.current) return;

      const dragIndex = (item as { index: number }).index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

      if (hoverClientY < hoverMiddleY) setCurrentHovered(hoverIndex);
      else setCurrentHovered(hoverIndex + 1);
    },
  });

  const [_, drag] = useDrag({
    type: "card",
    end: (item, monitor) => {
      setCurrentHovered(-1);
    },
    item: () => ({ index }),
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={cn("w-[400px] rounded-lg border-y-2 border-y-transparent", {
        "border-b-sky-500 border-t-transparent": currentHovered === index + 1,
        "border-b-transparent border-t-sky-500": currentHovered === index,
      })}
    >
      <LazySearch onSelect={updateWaypoint}>
        <div className="flex w-full items-center gap-2 p-2">
          <Icon
            icon="akar-icons:drag-vertical-fill"
            className="aspect-square h-full flex-grow text-foreground/50"
          />
          <p className="w-full flex-shrink truncate">{value}</p>
        </div>
      </LazySearch>
    </div>
  );
}

export function Waypoints() {
  const { waypoints, setWaypoints } = useContext(MapContext);
  const [currentHovered, setCurrentHovered] = useState<number | null>(null);

  const handleMoveWaypoints = (dragIndex: number, hoverIndex: number) => {
    setWaypoints((prev: SearchResult[]) => {
      const newWaypoints = [...prev];
      const dragWaypoint = prev[dragIndex];

      newWaypoints.splice(dragIndex, 1);
      newWaypoints.splice(hoverIndex, 0, dragWaypoint);

      return newWaypoints;
    });
  };

  const handleAddWaypoint = (waypoint: SearchResult) => {
    setWaypoints((prev: SearchResult[]) => [...prev, waypoint]);
  };

  const handleUpdateWaypoint = (index: number, waypoint: SearchResult) => {
    setWaypoints((prev: SearchResult[]) => {
      const newWaypoints = [...prev];
      newWaypoints[index] = waypoint;

      return newWaypoints;
    });
  };

  return (
    <div className="flex w-[400px] flex-col gap-1">
      {waypoints.map((waypoint, index) => (
        <Waypoint
          key={index}
          index={index}
          value={waypoint.label}
          moveWaypoints={handleMoveWaypoints}
          updateWaypoint={(waypoint) => handleUpdateWaypoint(index, waypoint)}
          currentHovered={currentHovered}
          setCurrentHovered={setCurrentHovered}
        />
      ))}

      <LazySearch onSelect={handleAddWaypoint}>
        <div className="flex w-full items-center gap-2 p-2">
          <Icon icon="akar-icons:plus" className="h-3 w-3 text-foreground/50" />
          <p>Add waypoint</p>
        </div>
      </LazySearch>
    </div>
  );
}
