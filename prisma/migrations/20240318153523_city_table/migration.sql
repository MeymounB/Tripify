/*
  Warnings:

  - You are about to drop the `JsonCity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "JsonCity";

-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "postalCode" INTEGER NOT NULL,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);
