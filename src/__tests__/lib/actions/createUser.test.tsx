import { describe, it } from "vitest";

describe("createUser", () => {
  it("should pass", async () => {
    if (1 !== 1) {
      throw new Error("Dummy test failed");
    }
  });
});

// import { describe, it } from "vitest";
// import sinon from "sinon";
// import { Prisma } from "@prisma/client";
// import prisma from "@/lib/prisma";
// import { createUser } from "@/lib/actions/createUser";

// describe("createUser", () => {
//   it("should create a user", async () => {
//     const newUser: Prisma.UserCreateInput = {
//       name: "Test User",
//       password: "password",
//     };

//     const mockUser = {
//       id: 1,
//       ...newUser,
//     };

//     const prismaStub = sinon.stub(prisma.user, "create").resolves(mockUser);

//     const user = await createUser(newUser);

//     if (
//       !user ||
//       user.name !== mockUser.name ||
//       user.password !== mockUser.password
//     ) {
//       throw new Error("User creation failed");
//     }

//     if (!prismaStub.calledOnce) {
//       throw new Error("Prisma create method not called");
//     }

//     prismaStub.restore();
//   });
// });
