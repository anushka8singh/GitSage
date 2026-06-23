import prisma from "../lib/prisma.js";

import {
  generateReleaseContent,
} from "../services/releaseNote.service.js";

export const generateRelease =
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

      const releaseData =
  await generateReleaseContent(
    repoId
  );

      const release =
        await prisma.release.create({
          data: {
            title: `Release ${new Date()
              .toISOString()
              .split("T")[0]}`,
             overview:
            releaseData.overview,
            content: releaseData.markdown,

            repositoryId: repoId,
          },
        });

      return res.status(201).json({
        success: true,
        release,
      });

    } catch (error) {

      return res.status(500).json({
        success: false,
        message: error.message,
      });

    }
  };