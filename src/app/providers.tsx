"use client";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { ReactNode } from "react";
import { MapContextProvider } from "@/components/map/map-provider";
import { SessionProvider } from "next-auth/react";

interface IProviders {
  children: ReactNode;
}

export function Providers({ children }: IProviders) {
  return (
    <SessionProvider>
      <MapContextProvider>
        <DndProvider backend={HTML5Backend}>{children}</DndProvider>
      </MapContextProvider>
    </SessionProvider>
  );
}
