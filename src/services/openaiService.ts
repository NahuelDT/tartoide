import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const getOpenAIResponse = async (message: string): Promise<string> => {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: message }],
  });

  // Check if completion and its properties are not null or undefined
  if (completion && completion.choices && completion.choices.length > 0) {
    const content = completion.choices[0]?.message?.content?.trim();
    if (content) {
      return content;
    }
  }
  
  throw new Error("Failed to get a valid response from OpenAI API");
};

