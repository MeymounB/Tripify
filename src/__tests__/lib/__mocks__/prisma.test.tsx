import { createUser } from "@/lib/__mocks__/prisma";
import { prisma } from "@/lib/__mocks__/prisma";
import { describe, it, expect } from "vitest";

describe("createUser", () => {
  it("should create a user", async () => {
    const userData = { name: "John", email: "john@example.com" };
    prisma.user.create.mockResolvedValue({ id: 1, ...userData });

    const result = await createUser(userData);
    expect(result).toEqual({ id: 1, name: "John", email: "john@example.com" });
    expect(prisma.user.create).toHaveBeenCalledWith({
      data: userData,
    });
  });
});
