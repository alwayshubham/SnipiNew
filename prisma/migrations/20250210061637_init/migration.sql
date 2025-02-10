/*
  Warnings:

  - You are about to drop the `Snipi` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Snipi";

-- CreateTable
CREATE TABLE "snipi" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "snipi_pkey" PRIMARY KEY ("id")
);
