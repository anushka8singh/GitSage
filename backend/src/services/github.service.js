import axios from "axios";

export const fetchRepositories = async (accessToken) => {
  const response = await axios.get(
    "https://api.github.com/user/repos",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  return response.data;
};

export const fetchPullRequests = async (
  owner,
  repo,
  accessToken
) => {
  const response = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}/pulls?state=closed`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  return response.data.filter(
    (pr) => pr.merged_at
  );
};

export const fetchPullRequestFiles = async (
  owner,
  repo,
  pullNumber,
  accessToken
) => {
  const response = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}/pulls/${pullNumber}/files`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};

export const fetchPullRequestCommits = async (
  owner,
  repo,
  pullNumber,
  accessToken
) => {
  const response = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}/pulls/${pullNumber}/commits`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};