/*
  Warnings:

  - You are about to drop the column `Date` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `Description` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `Image` on the `Task` table. All the data in the column will be lost.
  - Added the required column `date` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "Date",
DROP COLUMN "Description",
DROP COLUMN "Image",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "status" SET DATA TYPE TEXT;
