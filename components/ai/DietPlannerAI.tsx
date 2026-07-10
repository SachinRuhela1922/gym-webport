'use client'

import { useState } from 'react'
import { Zap } from 'lucide-react'

export default function DietPlannerAI() {
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
    goal: 'weight-loss',
    dietPreference: 'balanced',
    restrictions: '',
  })
  const [plan, setPlan] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const generatePlan = async () => {
    if (!formData.age || !formData.weight || !formData.height) {
      setError('Please fill in all required fields')
      return
    }

    setLoading(true)
    setError('')
    setPlan('')

    try {
      const response = await fetch('/api/ai/diet-plan', {
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
        <Zap size={28} className="text-primary" />
        AI Diet Planner
      </h2>

      <div className="space-y-6">
        {/* Input form */}
        <div className="glass p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
              <label className="block text-sm font-semibold mb-2">Weight (kg) *</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                placeholder="70"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Height (cm) *</label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                placeholder="175"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Goal</label>
              <select
                name="goal"
                value={formData.goal}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground text-sm"
              >
                <option value="weight-loss">Weight Loss</option>
                <option value="maintenance">Maintenance</option>
                <option value="muscle-gain">Muscle Gain</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Diet Preference</label>
              <select
                name="dietPreference"
                value={formData.dietPreference}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground text-sm"
              >
                <option value="balanced">Balanced</option>
                <option value="low-carb">Low Carb</option>
                <option value="high-protein">High Protein</option>
                <option value="vegan">Vegan</option>
                <option value="keto">Keto</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Dietary Restrictions</label>
            <textarea
              name="restrictions"
              value={formData.restrictions}
              onChange={handleInputChange}
              placeholder="e.g., gluten-free, nut allergies..."
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50 text-sm resize-none h-20"
            />
          </div>

          {error && <div className="text-red-400 text-sm">{error}</div>}

          <button
            onClick={generatePlan}
            disabled={loading}
            className="w-full btn-primary disabled:opacity-50"
          >
            {loading ? 'Generating Your Plan...' : 'Generate My AI Diet Plan'}
          </button>
        </div>

        {/* Results */}
        {plan && (
          <div className="glass p-6">
            <h3 className="text-xl font-bold mb-4">Your Personalized Diet Plan</h3>
            <div className="prose prose-invert max-w-none text-foreground/90 text-sm leading-relaxed whitespace-pre-wrap">
              {plan}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
