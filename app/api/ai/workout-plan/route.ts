import { streamText } from 'ai'
import { openai } from '@ai-sdk/openai'

export async function POST(req: Request) {
  try {
    const { age, fitnessLevel, goal, daysPerWeek, equipment, injuries, experience } = await req.json()

    const prompt = `You are a certified personal trainer and strength coach. Generate a personalized workout program based on the following information:

- Age: ${age} years
- Fitness Level: ${fitnessLevel}
- Primary Goal: ${goal}
- Days Available per Week: ${daysPerWeek}
- Available Equipment: ${equipment}
- Injuries/Limitations: ${injuries || 'None'}
- Training Experience: ${experience}

Create a comprehensive workout program that includes:
1. Weekly split recommendation (e.g., push/pull/legs, upper/lower)
2. Daily workout breakdown with:
   - Warm-up routine (5-10 min)
   - Main exercises with sets, reps, and rest periods
   - Cool-down stretches
3. Progressive overload strategy (how to increase difficulty)
4. Exercise form tips and common mistakes to avoid
5. Recovery and rest day activities
6. Modifications for home workouts if needed
7. Key performance metrics to track

Make the program realistic, sustainable, and aligned with their experience level.`

    const result = streamText({
      model: openai('gpt-4o-mini'),
      prompt,
      temperature: 0.7,
      maxTokens: 2500,
    })

    return (await result).toDataStreamResponse()
  } catch (error) {
    console.error('Error generating workout plan:', error)
    return new Response('Error generating workout plan', { status: 500 })
  }
}
