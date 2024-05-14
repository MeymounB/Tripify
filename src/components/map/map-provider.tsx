import { createContext, ReactNode, useState } from "react";
import { SearchResult, EventsType } from "@/lib/types";

interface IMapContext {
  waypoints: SearchResult[];
  setWaypoints: (waypoints: (prev: SearchResult[]) => SearchResult[]) => void;
  events: EventsType[];
  setEvents: (events: (prev: EventsType[]) => EventsType[] | []) => void;
}

export const MapContext = createContext({
  waypoints: [],
  setWaypoints: () => {},
  events: [],
  setEvents: () => {},
} as IMapContext);

interface IMapContextProvider {
  children: ReactNode;
}

export function MapContextProvider({ children }: IMapContextProvider) {
  const [waypoints, setWaypoints] = useState<SearchResult[]>([]);
  const [events, setEvents] = useState<EventsType[]>([]);

  return (
    <MapContext.Provider
      value={{
        waypoints,
        setWaypoints,
        events,
        setEvents,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}
