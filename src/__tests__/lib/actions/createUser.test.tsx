import { describe, it, expect, beforeEach, vi } from "vitest";
import { createUser } from "@/lib/actions/createUser";
import prisma from "@/lib/prisma";

beforeEach(() => {
  vi.clearAllMocks();
  prisma.user.create = vi.fn();
});

describe("createUser function", () => {
  it("creates a user successfully", async () => {
    const mockUser = { id: 1, name: "John Doe", password: "securePassword" };
    prisma.user.create.mockResolvedValue(mockUser);

    const newUser = { name: "John Doe", password: "securePassword" };

    const result = await createUser(newUser);

    expect(prisma.user.create).toHaveBeenCalledWith({
      data: {
        name: newUser.name,
        password: newUser.password,
      },
    });

    expect(result).toEqual(mockUser);
  });
});
