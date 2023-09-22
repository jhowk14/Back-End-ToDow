/*
  Warnings:

  - Changed the type of `expires_date_in_minutes` on the `Task` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "expires_date_in_minutes",
ADD COLUMN     "expires_date_in_minutes" INTEGER NOT NULL;
