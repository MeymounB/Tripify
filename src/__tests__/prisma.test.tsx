import { expect, test, vi } from "vitest";
import { createCity } from "@/lib/actions/createCity";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

vi.mock("../lib/prisma");

test("createCity should return the new city created", async () => {
  const newCity: Prisma.CitiesCreateInput = { name: "test", postalCode: 12345 };
});
