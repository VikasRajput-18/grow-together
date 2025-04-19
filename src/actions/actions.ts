"use server";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY!,
});

export async function generateRoadmapAction(
  prevState: { roadmap: string },
  formData: FormData
) {
  const role = formData.get("role") as string;
  const company = formData.get("company") as string;

  if (!role || !company) {
    return { roadmap: "Please provide both a role and a company." };
  }

  const improvedPrompt = `You are a professional roadmap generator. Create a detailed, well-structured, beautifully formatted **Markdown** roadmap for the role of a ${role} at ${company}. 

  Use clear headings, bullet points, and short paragraphs. Ensure:
  
  - Top-level sections (like "Phase 1", "Phase 2") are **H2** ("##")
  - Sub-sections (e.g., "Focus Areas", "Tools") are **H3** ("###")
  - Add extra line breaks between sections for clarity
  - Avoid too much text in a single paragraph
  - Make it easy to scan visually
  
  Also include a short summary about the role and company at the beginning.
  `;

  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{ role: "user", parts: [{ text: improvedPrompt }] }],
    });

    const roadmap = result?.text?.trim() || "No roadmap generated.";
    return { roadmap };
  } catch {
    return { roadmap: "Error generating roadmap. Please try again later." };
  }
}
