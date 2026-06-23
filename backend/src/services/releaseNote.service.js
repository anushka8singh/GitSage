import prisma from "../lib/prisma.js";

export const generateReleaseContent =
  async (repositoryId) => {

    const pullRequests =
      await prisma.pullRequest.findMany({
        where: {
          repositoryId,
        },
      });

    const features =
      pullRequests.filter(
        (pr) => pr.category === "FEATURE"
      );

    const bugFixes =
      pullRequests.filter(
        (pr) => pr.category === "BUG_FIX"
      );

    const chores =
      pullRequests.filter(
        (pr) => pr.category === "CHORE"
      );

    let markdown = "# Release Notes\n\n";

    if (features.length) {
      markdown += "## Features\n\n";

      features.forEach((pr) => {
        markdown += `- ${pr.summary}\n`;
      });

      markdown += "\n";
    }

    if (bugFixes.length) {
      markdown += "## Bug Fixes\n\n";

      bugFixes.forEach((pr) => {
        markdown += `- ${pr.summary}\n`;
      });

      markdown += "\n";
    }

    if (chores.length) {
      markdown += "## Chores\n\n";

      chores.forEach((pr) => {
        markdown += `- ${pr.summary}\n`;
      });

      markdown += "\n";
    }

    return markdown;
};