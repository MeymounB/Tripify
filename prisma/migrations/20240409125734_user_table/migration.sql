/*
  Warnings:

  - You are about to drop the `Cities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Cities";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
