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

  const improvedPrompt = `You are a professional roadmap generator. Create a clear, visually-scannable, and well-structured **Markdown** roadmap for the role of **${role}** at **${company}**.

  ### Guidelines:
  
  - Begin with a brief summary introducing the **role** and the **company**.
  - Use concise language, short paragraphs, and avoid text-heavy sections.
  - Organize the content using clear markdown formatting:
    
    - Use **H2** (##) for main phases or top-level sections (e.g., "Phase 1: Foundations").
    - Use **H3** (###) for sub-sections (e.g., "Key Skills", "Focus Areas", "Tools & Technologies").
    - Use **bullet points** for lists to improve readability.
    - Ensure there's **extra spacing** between sections to improve visual flow.
  
  ### Formatting Tips:
  
  - Keep paragraphs short (2–3 lines max).
  - Use bold or italic styling to highlight important points.
  - Group related content logically under each phase.
  - Prioritize clarity and simplicity over dense explanations.
  
  Make sure the final roadmap is easy to scan and pleasant to read on both desktop and mobile.`;

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
