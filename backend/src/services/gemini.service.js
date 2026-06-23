import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});


export const generateJson =
  async (prompt) => {

    let result;

    for (
      let attempt = 1;
      attempt <= 3;
      attempt++
    ) {
      try {

        result =
          await model.generateContent(
            prompt
          );

        break;

      } catch (error) {

        if (attempt === 3)
          throw error;

        await new Promise(
          (resolve) =>
            setTimeout(
              resolve,
              2000
            )
        );
      }
    }

    let response =
      result.response.text();

    response = response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(response);
};

export const analyzePullRequest = async (
  context
) => {
  const prompt = `
You are a senior software engineer.

Analyze this pull request.

Return ONLY valid JSON.

{
  "category": "FEATURE | BUG_FIX | CHORE | OTHER",
  "confidence": 0.0,
  "summary": "short summary",
  "reasoning": "why this category was selected"
}

Title:
${context.title}

Description:
${context.body || "No description"}

Changed Files:
${context.files.join("\n")}

Commit Messages:
${context.commits.join("\n")}
`;

 let result;

for (let attempt = 1; attempt <= 3; attempt++) {
  try {
    result = await model.generateContent(prompt);
    break;
  } catch (error) {
    if (attempt === 3) throw error;

    console.log(
      `Gemini Retry ${attempt}`
    );

    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );
  }
}

let response =
  result.response.text();

response = response
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

return JSON.parse(response);}