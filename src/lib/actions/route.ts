"use server";

import { SearchResult } from "@/lib/types";
import { prisma } from "@/lib/prisma";

export const saveRoute = async (waypoints: SearchResult[]) => {
  const route = await prisma.route.create({
    data: {
      waypoints: {
        create: waypoints.map((waypoint) => ({
          latitude: waypoint.y,
          longitude: waypoint.x,
          name: waypoint.label,
        })),
      },
    },
  });
};

export const getRoutes = async () => {
  return prisma.route.findMany({
    include: {
      waypoints: true,
    },
  });
};
