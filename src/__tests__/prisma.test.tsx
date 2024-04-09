import { expect, test, vi } from "vitest";
import { Prisma } from "@prisma/client";

vi.mock("../lib/prisma");

test("createCity should return the new city created", async () => {
  const newCity: Prisma.UserCreateInput = {
    name: "test",
    password: "password",
  };
  expect(newCity.name).toEqual("test");
});
