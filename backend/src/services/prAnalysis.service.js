import prisma from "../lib/prisma.js";

import { buildPRContext } from "./prContext.service.js";

import { analyzePullRequest }
  from "./gemini.service.js";

export const analyzeAndSavePR =
  async (
    owner,
    repo,
    pullRequest,
    accessToken
  ) => {

    const context =
      await buildPRContext(
        owner,
        repo,
        pullRequest,
        accessToken
      );

    const analysis =
      await analyzePullRequest(
        context
      );

    return prisma.pullRequest.update({
  where: {
    id: pullRequest.id,
  },

  data: {
    category: analysis.category?.toUpperCase(),
    summary: analysis.summary,
    confidence: analysis.confidence,
    reasoning: analysis.reasoning,
    filesChanged: context.files,
    commitMessages: context.commits,
  },
});
};