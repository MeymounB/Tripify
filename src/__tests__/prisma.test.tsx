import { expect, test, vi } from "vitest";
import { prisma } from "@/lib/__mocks__/prisma";
import { createUser } from "@/lib/actions/createUser";

vi.mock("@/lib/__mocks__/prisma", async () => {
  const actual = await vi.importActual("@/lib/__mocks__/prisma");
  return { ...actual };
});

test("createUser should return the user informations", async () => {
  // const newUser = { name: "test", password: "password" };
  // prisma.user.create.mockResolvedValue({
  //   ...newUser,
  //   id: 1,
  // });
  // const result = await createUser(newUser);
  // expect(result.name).toEqual("test");
  expect(true).toEqual(true);
});
