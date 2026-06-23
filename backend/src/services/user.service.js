import prisma from "../lib/prisma.js";

export const createUser = async (data) => {
  return prisma.user.create({
    data,
  });
};

export const getUserByGithubId = async (githubId) => {
  return prisma.user.findUnique({
    where: {
      githubId,
    },
  });
};