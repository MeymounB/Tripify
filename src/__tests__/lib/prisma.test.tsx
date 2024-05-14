import { describe, it } from "vitest";
import { PrismaClient } from "@prisma/client";
import { prisma as importedPrisma } from "@/lib/prisma";

describe("Prisma", () => {
  it("should create a single instance of PrismaClient", () => {
    // Act
    const prisma1 = importedPrisma;
    const prisma2 = importedPrisma;

    // Assert
    if (prisma1 !== prisma2) {
      throw new Error("Multiple instances of PrismaClient were created");
    }

    if (!(prisma1 instanceof PrismaClient)) {
      throw new Error("PrismaClient instance was not created");
    }
  });
});
