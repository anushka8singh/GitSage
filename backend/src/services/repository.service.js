import prisma from "../lib/prisma.js";

export const saveRepositories = async (
  repositories,
  userId
) => {
  let importedCount = 0;

  for (const repo of repositories) {
    await prisma.repository.upsert({
      where: {
        githubRepoId: String(repo.id),
      },

      update: {
        name: repo.name,
        fullName: repo.full_name,
        defaultBranch: repo.default_branch,
        private: repo.private,
      },

      create: {
        githubRepoId: String(repo.id),
        name: repo.name,
        fullName: repo.full_name,
        defaultBranch: repo.default_branch,
        private: repo.private,
        userId,
      },
    });

    importedCount++;
  }

  return importedCount;
};