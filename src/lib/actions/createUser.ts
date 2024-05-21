"use server";

import { Prisma } from "@prisma/client";
import { hash } from "bcrypt";
import prisma from "../prisma";

export async function createUser(
  newUser: Prisma.UserCreateInput,
): Promise<{ error: string } | Prisma.UserCreateInput> {
  const existingUser = await prisma.user.findFirst({
    where: { email: newUser.email },
  });

  if (existingUser) return { error: "User already exists" };

  const password = await hash(newUser.password, 10);

  return prisma.user.create({
    data: {
      email: newUser.email,
      password: password,
    },
  });
}
