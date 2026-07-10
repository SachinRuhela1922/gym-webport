'use client'

import { useState } from 'react'

export default function MacroCalculator() {
  const [calories, setCalories] = useState<string>('')
  const [goal, setGoal] = useState<'loss' | 'maintenance' | 'gain'>('loss')
  const [macros, setMacros] = useState<{ protein: number; carbs: number; fat: number } | null>(null)

  const calculateMacros = () => {
    if (!calories) return

    const cal = parseFloat(calories)
    let protein, carbs, fat

    switch (goal) {
      case 'loss':
        protein = (cal * 0.40) / 4
        fat = (cal * 0.30) / 9
        carbs = (cal * 0.30) / 4
        break
      case 'maintenance':
        protein = (cal * 0.30) / 4
        fat = (cal * 0.30) / 9
        carbs = (cal * 0.40) / 4
        break
      case 'gain':
        protein = (cal * 0.30) / 4
        fat = (cal * 0.30) / 9
        carbs = (cal * 0.40) / 4
        break
    }

    setMacros({
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fat: Math.round(fat),
    })
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Macronutrient Calculator</h2>

      <div className="space-y-6">
        {/* Input fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Daily Calories</label>
            <input
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              placeholder="2000"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-3">Fitness Goal</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'loss', label: 'Fat Loss', color: 'from-green-500/20 to-green-600/20' },
                { value: 'maintenance', label: 'Maintenance', color: 'from-blue-500/20 to-blue-600/20' },
                { value: 'gain', label: 'Muscle Gain', color: 'from-orange-500/20 to-orange-600/20' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setGoal(opt.value as 'loss' | 'maintenance' | 'gain')}
                  className={`p-3 rounded-lg transition-all duration-200 ${
                    goal === opt.value
                      ? 'glass ring-2 ring-primary'
                      : 'glass-hover'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calculate button */}
        <button onClick={calculateMacros} className="w-full btn-primary">
          Calculate Macros
        </button>

        {/* Results */}
        {macros && (
          <div className="space-y-4">
            <div className="glass p-6">
              <p className="text-foreground/70 text-sm mb-4">Daily Macronutrient Targets:</p>
              <div className="space-y-4">
                {/* Protein */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Protein</span>
                    <span className="gradient-text font-bold">{macros.protein}g</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 to-red-400"
                      style={{ width: '40%' }}
                    />
                  </div>
                  <p className="text-xs text-foreground/60 mt-1">4 cal/g</p>
                </div>

                {/* Carbs */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Carbohydrates</span>
                    <span className="gradient-text font-bold">{macros.carbs}g</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400"
                      style={{ width: '40%' }}
                    />
                  </div>
                  <p className="text-xs text-foreground/60 mt-1">4 cal/g</p>
                </div>

                {/* Fat */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Fat</span>
                    <span className="gradient-text font-bold">{macros.fat}g</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
                      style={{ width: '30%' }}
                    />
                  </div>
                  <p className="text-xs text-foreground/60 mt-1">9 cal/g</p>
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="glass p-6">
              <p className="font-semibold mb-4">Calorie Breakdown:</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-foreground/70">Protein:</span>
                  <span>{Math.round(macros.protein * 4)} cal ({Math.round((macros.protein * 4 / parseFloat(calories)) * 100)}%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Carbs:</span>
                  <span>{Math.round(macros.carbs * 4)} cal ({Math.round((macros.carbs * 4 / parseFloat(calories)) * 100)}%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Fat:</span>
                  <span>{Math.round(macros.fat * 9)} cal ({Math.round((macros.fat * 9 / parseFloat(calories)) * 100)}%)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Info */}
        <div className="glass p-4 text-sm text-foreground/70">
          <p>
            Macro ratios are adjusted based on your goal. These are guidelines—individual needs may vary. Monitor your
            progress and adjust accordingly.
          </p>
        </div>
      </div>
    </div>
  )
}
