import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function POST(req: Request) {
  try {
    const { messages, context } = await req.json();

    const systemPrompt = `You are FitFlow, a friendly and knowledgeable fitness coach and wellness advisor.

You help users with:
- Workout advice and form corrections
- Nutrition and meal planning guidance
- Motivation and accountability
- Recovery and injury prevention
- Progress tracking and goal setting

${context ? `User Context: ${context}` : ''}

Be encouraging, informative, and practical.
Ask clarifying questions when needed.
Always prioritize safety and recommend consulting healthcare professionals for medical concerns.`;

    const result = streamText({
      model: openai('gpt-4o-mini'),
      system: systemPrompt,
      messages,
      temperature: 0.8,
      maxOutputTokens: 1500,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Chatbot Error:', error);

    return new Response(
      JSON.stringify({
        error: 'Error processing your message',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}