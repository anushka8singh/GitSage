-- AlterTable
ALTER TABLE "Repository" ADD COLUMN     "defaultBranch" TEXT,
ADD COLUMN     "private" BOOLEAN NOT NULL DEFAULT false;
