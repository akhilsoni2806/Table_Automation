import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// Initialize the client only if the key exists, otherwise handle gracefully in calls
const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

export const generateAIResponse = async (prompt: string): Promise<string> => {
  if (!ai) {
    return "Error: API Key not configured. Please set the API_KEY environment variable.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `You are the AI Assistant for 'Maglev Dining Systems', a futuristic startup that builds automated magnet-rail tables. 
        Your tone is sleek, professional, slightly robotic but helpful, and minimalist. 
        Keep answers short (under 50 words) and mysterious yet informative.
        The tech uses electromagnetic grids hidden in tables to move dishes without friction.
        Do not mention you are from Google. You are part of the Maglev system.`
      }
    });

    return response.text || "System malfunction. Please try again.";
  } catch (error) {
    console.error("AI Generation failed:", error);
    return "Connection interrupted. Re-establishing link...";
  }
};
