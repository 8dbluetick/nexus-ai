import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const safetySettings = [
  { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
];

export const geminiPro = genAI.getGenerativeModel({
  model: 'gemini-1.5-pro',
  safetySettings,
  generationConfig: {
    temperature: 0.7,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
  },
});

export const geminiFlash = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  safetySettings,
  generationConfig: {
    temperature: 0.7,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 4096,
  },
});

export type ToolType =
  | 'chat'
  | 'research'
  | 'coding'
  | 'study'
  | 'data-analysis'
  | 'document';

const SYSTEM_PROMPTS: Record<ToolType, string> = {
  chat: `You are Nexus AI, a premium AI assistant. You are helpful, accurate, and provide well-structured responses. Use markdown formatting when appropriate. Be concise but thorough.`,
  research: `You are Nexus AI's Research Assistant. Help users with academic research, summarize papers, generate literature reviews, and create citations. Use proper academic formatting. Provide accurate, well-sourced information.`,
  coding: `You are Nexus AI's Coding Assistant. Help with code generation, debugging, algorithm explanations, and LeetCode problems. Always provide clean, well-commented code with explanations. Support all major programming languages.`,
  study: `You are Nexus AI's Study Assistant. Help students with note generation, quiz creation, flashcard generation, and exam preparation. Make learning engaging and effective. Structure content clearly.`,
  'data-analysis': `You are Nexus AI's Data Analysis Assistant. Help users understand datasets, generate insights, explain statistics, and guide data visualization. Be clear about statistical concepts.`,
  document: `You are Nexus AI's Document Assistant. Help users understand, summarize, and extract insights from documents. Answer questions about document content accurately.`,
};

export async function generateResponse(
  userMessage: string,
  toolType: ToolType = 'chat',
  history: Array<{ role: string; content: string }> = [],
  useFlash = false
): Promise<string> {
  const model = useFlash ? geminiFlash : geminiPro;
  const systemPrompt = SYSTEM_PROMPTS[toolType];

  const chat = model.startChat({
    history: history.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    })),
    systemInstruction: systemPrompt,
  });

  const result = await chat.sendMessage(userMessage);
  return result.response.text();
}

export async function generateStreamingResponse(
  userMessage: string,
  toolType: ToolType = 'chat',
  history: Array<{ role: string; content: string }> = [],
  onChunk: (chunk: string) => void,
  useFlash = false
): Promise<void> {
  const model = useFlash ? geminiFlash : geminiPro;
  const systemPrompt = SYSTEM_PROMPTS[toolType];

  const chat = model.startChat({
    history: history.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    })),
    systemInstruction: systemPrompt,
  });

  const result = await chat.sendMessageStream(userMessage);

  for await (const chunk of result.stream) {
    const chunkText = chunk.text();
    if (chunkText) {
      onChunk(chunkText);
    }
  }
}
