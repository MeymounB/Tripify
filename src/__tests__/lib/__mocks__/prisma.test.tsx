import { describe, it } from "vitest";
import sinon from "sinon";
import { prisma } from "@/lib/__mocks__/prisma";

describe("Prisma Mock", () => {
  it("should reset the mock before each test", async () => {
    // Arrange
    const originalUserFindMany = prisma.user.findMany;

    // Act
    prisma.user.findMany = sinon.stub().returns(Promise.resolve([]));
    await new Promise((resolve) => setTimeout(resolve, 0)); // wait for next tick

    // Assert
    if (prisma.user.findMany === originalUserFindMany) {
      throw new Error("Mock was not reset");
    }
  });
});
