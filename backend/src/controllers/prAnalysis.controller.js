import prisma from "../lib/prisma.js";

import {
  analyzeAndSavePR,
} from "../services/prAnalysis.service.js";

export const analyzeRepositoryPRs =
  async (req, res) => {
    try {
      const { repoId } = req.params;

      const repository =
        await prisma.repository.findUnique({
          where: {
            id: repoId,
          },
        });

      if (!repository) {
        return res.status(404).json({
          success: false,
          message: "Repository not found",
        });
      }

      const user =
        await prisma.user.findFirst();

      const [owner, repo] =
        repository.fullName.split("/");

      const pullRequests =
        await prisma.pullRequest.findMany({
          where: {
            repositoryId: repository.id,
          },
        });

      const results = [];

      for (const pr of pullRequests) {
        const analyzed =
          await analyzeAndSavePR(
            owner,
            repo,
            pr,
            user.accessToken
          );

        results.push(analyzed);
      }

      return res.status(200).json({
        success: true,
        analyzed: results.length,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };