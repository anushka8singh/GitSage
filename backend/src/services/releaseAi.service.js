import { generateJson }
from "./gemini.service.js";

export const generateReleaseNarrative =
  async ({
    features,
    bugFixes,
    chores,
  }) => {

    const prompt = `
You are a senior engineering manager.

Generate professional release notes.

Return valid JSON only.

{
  "overview": ""
}

Features:
${features.join("\n")}

Bug Fixes:
${bugFixes.join("\n")}

Chores:
${chores.join("\n")}
`;

    return generateJson(prompt);
};