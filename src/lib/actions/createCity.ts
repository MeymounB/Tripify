import { Prisma } from "@prisma/client";
import prisma from "../prisma";

export async function createCity(newCity: Prisma.CitiesCreateInput) {
  return await prisma.cities.create({
    data: {
      name: newCity.name,
      postalCode: newCity.postalCode,
    },
  });
}
