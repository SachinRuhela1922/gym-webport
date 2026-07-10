import { streamText } from 'ai'
import { openai } from '@ai-sdk/openai'

export async function POST(req: Request) {
  try {
    const { age, weight, height, goal, dietPreference, restrictions } = await req.json()

    const prompt = `You are a professional nutritionist and fitness coach. Generate a personalized meal plan based on the following information:

- Age: ${age} years
- Weight: ${weight} kg
- Height: ${height} cm
- Goal: ${goal}
- Diet Preference: ${dietPreference}
- Dietary Restrictions: ${restrictions || 'None'}

Create a detailed and practical meal plan that includes:
1. Daily caloric needs estimation
2. Macronutrient breakdown (protein, carbs, fats)
3. Sample breakfast, lunch, dinner, and snacks for a typical day
4. Shopping list recommendations
5. Tips for meal prep and consistency
6. Adjustments based on progress

Make the plan practical, achievable, and aligned with the person's lifestyle and preferences.`

    const result = streamText({
      model: openai('gpt-4o-mini'),
      prompt,
      temperature: 0.7,
      maxTokens: 2000,
    })

    return (await result).toDataStreamResponse()
  } catch (error) {
    console.error('Error generating diet plan:', error)
    return new Response('Error generating diet plan', { status: 500 })
  }
}
