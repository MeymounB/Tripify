"use server";
import { Prisma } from "@prisma/client";
import prisma from "../prisma";

export async function createUser(newUser: Prisma.UserCreateInput) {
  return await prisma.user.create({
    data: {
      name: newUser.name,
      password: newUser.password,
    },
  });
}
