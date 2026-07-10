'use client'

import { useState } from 'react'

export default function CalorieCalculator() {
  const [age, setAge] = useState<string>('')
  const [weight, setWeight] = useState<string>('')
  const [height, setHeight] = useState<string>('')
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [activity, setActivity] = useState<string>('1.375')
  const [results, setResults] = useState<{ bmr: number; tdee: number } | null>(null)

  const calculateCalories = () => {
    if (!age || !weight || !height) return

    const a = parseFloat(age)
    const w = parseFloat(weight)
    const h = parseFloat(height)
    const activityLevel = parseFloat(activity)

    let bmr: number
    if (gender === 'male') {
      bmr = 88.362 + 13.397 * w + 4.799 * h - 5.677 * a
    } else {
      bmr = 447.593 + 9.247 * w + 3.098 * h - 4.330 * a
    }

    const tdee = Math.round(bmr * activityLevel)
    setResults({ bmr: Math.round(bmr), tdee })
  }

  const activityLevels = [
    { value: '1.2', label: 'Sedentary (little exercise)' },
    { value: '1.375', label: 'Lightly active (1-3 days/week)' },
    { value: '1.55', label: 'Moderately active (3-5 days/week)' },
    { value: '1.725', label: 'Very active (6-7 days/week)' },
    { value: '1.9', label: 'Extremely active (twice per day)' },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Daily Calorie Calculator</h2>

      <div className="space-y-6">
        {/* Input fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="30"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value as 'male' | 'female')}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="70"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="175"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50"
            />
          </div>
        </div>

        {/* Activity level */}
        <div>
          <label className="block text-sm font-semibold mb-3">Activity Level</label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground"
          >
            {activityLevels.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
        </div>

        {/* Calculate button */}
        <button onClick={calculateCalories} className="w-full btn-primary">
          Calculate Calories
        </button>

        {/* Results */}
        {results && (
          <div className="glass p-6 space-y-6">
            <div>
              <p className="text-foreground/70 mb-2">Basal Metabolic Rate (BMR)</p>
              <div className="text-4xl font-bold gradient-text mb-1">
                {results.bmr}
              </div>
              <p className="text-sm text-foreground/60">
                Calories burned at rest
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-foreground/70 mb-2">Total Daily Energy Expenditure (TDEE)</p>
              <div className="text-4xl font-bold gradient-text mb-1">
                {results.tdee}
              </div>
              <p className="text-sm text-foreground/60">
                Calories burned with activity
              </p>
            </div>

            {/* Deficit/Surplus recommendations */}
            <div className="border-t border-white/10 pt-6 space-y-3">
              <p className="text-foreground/70 mb-3">Recommended intake:</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Fat Loss (-500 cal)</span>
                  <span className="font-bold text-green-400">{results.tdee - 500}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Maintenance</span>
                  <span className="font-bold text-blue-400">{results.tdee}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Muscle Gain (+500 cal)</span>
                  <span className="font-bold text-orange-400">{results.tdee + 500}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Info */}
        <div className="glass p-4 text-sm text-foreground/70">
          <p>
            This calculator uses the Mifflin-St Jeor equation, considered the most accurate for estimating daily calorie needs.
            Adjust based on your actual progress over 2-4 weeks.
          </p>
        </div>
      </div>
    </div>
  )
}
