"use client";

import { LazySearch } from "@/components/travel/search-lazy";
import { useContext, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { XYCoord } from "dnd-core";
import { SearchResult } from "@/lib/types";
import { MapContext } from "@/components/map/map-provider";

interface IWaypoint {
  index: number;
  value: string;
  switchWaypoints: (aIndex: number, bIndex: number) => void;
  addWaypoint: (waypoint: SearchResult) => void;
}

function Waypoint({ value, index, switchWaypoints, addWaypoint }: IWaypoint) {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "card",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: unknown, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      switchWaypoints(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: () => {
      return { index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div ref={ref} className="w-[400px]">
      <LazySearch value={value} onSelect={addWaypoint} />
    </div>
  );
}

export function Waypoints() {
  const { waypoints, setWaypoints } = useContext(MapContext);

  const handleSwitchWaypoints = (aIndex: number, bIndex: number) => {
    const a = waypoints[aIndex];
    const b = waypoints[bIndex];

    setWaypoints((prev: SearchResult[]) => {
      const newWaypoints = [...prev];

      newWaypoints[aIndex] = b;
      newWaypoints[bIndex] = a;

      return newWaypoints;
    });
  };

  const handleAddWaypoint = (waypoint: SearchResult) => {
    setWaypoints((prev: SearchResult[]) => [...prev, waypoint]);
  };

  return (
    <div className="flex w-[400px] flex-col gap-2">
      {waypoints.map((waypoint, index) => (
        <Waypoint
          key={index}
          index={index}
          value={waypoint.label}
          switchWaypoints={handleSwitchWaypoints}
          addWaypoint={handleAddWaypoint}
        />
      ))}

      <LazySearch value={null} onSelect={handleAddWaypoint} />
    </div>
  );
}
