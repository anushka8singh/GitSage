import {
  fetchPullRequestFiles,
  fetchPullRequestCommits,
} from "./github.service.js";

export const buildPRContext = async (
  owner,
  repo,
  pullRequest,
  accessToken
) => {
  const files =
    await fetchPullRequestFiles(
      owner,
      repo,
      pullRequest.number,
      accessToken
    );

  const commits =
    await fetchPullRequestCommits(
      owner,
      repo,
      pullRequest.number,
      accessToken
    );

  return {
    title: pullRequest.title,
    body: pullRequest.body,

    files: files.map(
      (file) => file.filename
    ),

    commits: commits.map(
      (commit) =>
        commit.commit.message
    ),
  };
};