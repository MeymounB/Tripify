import { mockDeep, mockReset } from "vitest-mock-extended";
import { beforeEach } from "vitest";
import { PrismaClient } from "@prisma/client";

beforeEach(() => {
  mockReset(prisma);
});
const prisma = mockDeep<PrismaClient>();
export { prisma };

async function createUser(userData: any) {
  return await prisma.user.create({
    data: userData,
  });
}

export { createUser };
