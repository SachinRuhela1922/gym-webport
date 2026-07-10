'use client'

import { useState } from 'react'
import { Dumbbell } from 'lucide-react'

export default function WorkoutPlannerAI() {
  const [formData, setFormData] = useState({
    age: '',
    fitnessLevel: 'beginner',
    goal: 'strength',
    daysPerWeek: '4',
    equipment: 'full',
    injuries: '',
    experience: '0-1',
  })
  const [plan, setPlan] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const generatePlan = async () => {
    if (!formData.age) {
      setError('Please fill in your age')
      return
    }

    setLoading(true)
    setError('')
    setPlan('')

    try {
      const response = await fetch('/api/ai/workout-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to generate plan')

      const reader = response.body?.getReader()
      if (!reader) throw new Error('No response body')

      const decoder = new TextDecoder()
      let fullPlan = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        fullPlan += chunk
        setPlan(fullPlan)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate plan')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <Dumbbell size={28} className="text-primary" />
        AI Workout Planner
      </h2>

      <div className="space-y-6">
        {/* Input form */}
        <div className="glass p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Age *</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="30"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Fitness Level</label>
              <select
                name="fitnessLevel"
                value={formData.fitnessLevel}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground text-sm"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Primary Goal</label>
              <select
                name="goal"
                value={formData.goal}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground text-sm"
              >
                <option value="strength">Strength</option>
                <option value="muscle">Muscle Gain</option>
                <option value="fat-loss">Fat Loss</option>
                <option value="endurance">Endurance</option>
                <option value="flexibility">Flexibility</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Days Per Week</label>
              <select
                name="daysPerWeek"
                value={formData.daysPerWeek}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground text-sm"
              >
                <option value="3">3 days</option>
                <option value="4">4 days</option>
                <option value="5">5 days</option>
                <option value="6">6 days</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Equipment Access</label>
              <select
                name="equipment"
                value={formData.equipment}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground text-sm"
              >
                <option value="full">Full Gym</option>
                <option value="dumbbells">Dumbbells Only</option>
                <option value="home">Home Equipment</option>
                <option value="bodyweight">Bodyweight Only</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Training Experience</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground text-sm"
              >
                <option value="0-1">0-1 year</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Injuries/Limitations</label>
            <textarea
              name="injuries"
              value={formData.injuries}
              onChange={handleInputChange}
              placeholder="e.g., lower back pain, shoulder injury..."
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50 text-sm resize-none h-20"
            />
          </div>

          {error && <div className="text-red-400 text-sm">{error}</div>}

          <button
            onClick={generatePlan}
            disabled={loading}
            className="w-full btn-primary disabled:opacity-50"
          >
            {loading ? 'Generating Your Program...' : 'Generate My AI Workout Program'}
          </button>
        </div>

        {/* Results */}
        {plan && (
          <div className="glass p-6">
            <h3 className="text-xl font-bold mb-4">Your Personalized Workout Program</h3>
            <div className="prose prose-invert max-w-none text-foreground/90 text-sm leading-relaxed whitespace-pre-wrap">
              {plan}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
