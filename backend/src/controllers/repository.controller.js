import prisma from "../lib/prisma.js";

import {
  fetchRepositories,
} from "../services/github.service.js";

import {
  saveRepositories,
} from "../services/repository.service.js";

export const importRepositories = async (
  req,
  res
) => {
  try {
    const user = await prisma.user.findFirst();

    if (!user?.accessToken) {
      return res.status(400).json({
        success: false,
        message: "Access token missing",
      });
    }

    const repositories =
      await fetchRepositories(
        user.accessToken
      );

    const importedCount =
      await saveRepositories(
        repositories,
        user.id
      );

    return res.status(200).json({
      success: true,
      imported: importedCount,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};