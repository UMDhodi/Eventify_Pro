
import { GoogleGenAI, Type } from "@google/genai";
import { AIPlanningResponse } from "../types";

const API_KEY = process.env.API_KEY;

export const generateEventPlan = async (prompt: string): Promise<AIPlanningResponse | null> => {
  if (!API_KEY) return null;

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Plan an event based on this description: ${prompt}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            theme: { type: Type.STRING },
            suggestedSchedule: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  time: { type: Type.STRING },
                  activity: { type: Type.STRING }
                }
              }
            },
            marketingCopy: { type: Type.STRING },
            checklist: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["theme", "suggestedSchedule", "marketingCopy", "checklist"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text) as AIPlanningResponse;
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};

export const refineDescription = async (text: string): Promise<string> => {
  if (!API_KEY || !text.trim()) return text;

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Refine this event description to sound more professional, elegant, and detailed for an event management company: "${text}"`,
      config: {
        systemInstruction: "You are a luxury event consultant. Make the text sound high-end and sophisticated but keep it concise (under 100 words).",
      }
    });
    return response.text || text;
  } catch (error) {
    console.error("Refinement Error:", error);
    return text;
  }
};
