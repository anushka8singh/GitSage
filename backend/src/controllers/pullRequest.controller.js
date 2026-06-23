import prisma from "../lib/prisma.js";

import {
  fetchPullRequests,
} from "../services/github.service.js";

import {
  savePullRequests,
} from "../services/pullRequest.service.js";

export const importPullRequests =
  async (req, res) => {
    try {
      const { repoId } = req.params;

      const repository =
        await prisma.repository.findUnique({
          where: {
            id: repoId,
          },
        });

      const user =
        await prisma.user.findFirst();

      const [owner, repo] =
        repository.fullName.split("/");

      const pullRequests =
        await fetchPullRequests(
          owner,
          repo,
          user.accessToken
        );

      const imported =
        await savePullRequests(
          pullRequests,
          repository.id
        );

      return res.json({
        success: true,
        imported,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };