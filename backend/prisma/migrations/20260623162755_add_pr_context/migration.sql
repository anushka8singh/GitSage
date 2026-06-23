/*
  Warnings:

  - The `category` column on the `PullRequest` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "PRCategory" AS ENUM ('FEATURE', 'BUG_FIX', 'CHORE', 'OTHER');

-- AlterTable
ALTER TABLE "PullRequest" ADD COLUMN     "body" TEXT,
ADD COLUMN     "commitMessages" JSONB,
ADD COLUMN     "filesChanged" JSONB,
DROP COLUMN "category",
ADD COLUMN     "category" "PRCategory";
