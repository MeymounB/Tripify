import { createContext, ReactNode, useState } from "react";
import { SearchResult } from "@/lib/types";

interface IMapContext {
  waypoints: SearchResult[];
  setWaypoints: (waypoints: (prev: SearchResult[]) => SearchResult[]) => void;
}

export const MapContext = createContext({
  waypoints: [],
  setWaypoints: () => {},
} as IMapContext);

interface IMapContextProvider {
  children: ReactNode;
}

export function MapContextProvider({ children }: IMapContextProvider) {
  const [waypoints, setWaypoints] = useState<SearchResult[]>([]);

  return (
    <MapContext.Provider
      value={{
        waypoints,
        setWaypoints,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}
