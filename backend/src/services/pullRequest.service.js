import prisma from "../lib/prisma.js";

export const savePullRequests = async (
  pullRequests,
  repositoryId
) => {
  let count = 0;

  for (const pr of pullRequests) {
    await prisma.pullRequest.upsert({
      where: {
        githubPrId: String(pr.id),
      },

      update: {},

      create: {
        githubPrId: String(pr.id),
        number: pr.number,
        title: pr.title,
        state: pr.state,
        mergedAt: pr.merged_at
          ? new Date(pr.merged_at)
          : null,
        author: pr.user?.login,
        repositoryId,
      },
    });

    count++;
  }

  return count;
};