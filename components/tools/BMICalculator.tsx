'use client'

import { useState } from 'react'

export default function BMICalculator() {
  const [height, setHeight] = useState<string>('')
  const [weight, setWeight] = useState<string>('')
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState<string>('')

  const calculateBMI = () => {
    if (!height || !weight) return

    const h = parseFloat(height) / 100
    const w = parseFloat(weight)
    const calculatedBMI = w / (h * h)
    setBmi(Math.round(calculatedBMI * 10) / 10)

    if (calculatedBMI < 18.5) setCategory('Underweight')
    else if (calculatedBMI < 25) setCategory('Normal Weight')
    else if (calculatedBMI < 30) setCategory('Overweight')
    else setCategory('Obese')
  }

  const getBMIColor = () => {
    if (!bmi) return 'text-foreground'
    if (bmi < 18.5) return 'text-blue-400'
    if (bmi < 25) return 'text-green-400'
    if (bmi < 30) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">BMI Calculator</h2>

      <div className="space-y-6">
        {/* Input fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="170"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50"
            />
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
        </div>

        {/* Calculate button */}
        <button
          onClick={calculateBMI}
          className="w-full btn-primary"
        >
          Calculate BMI
        </button>

        {/* Results */}
        {bmi && (
          <div className="glass p-6 space-y-4">
            <div className="text-center">
              <div className={`text-5xl font-bold ${getBMIColor()} mb-2`}>
                {bmi}
              </div>
              <div className="text-xl text-foreground/80">{category}</div>
            </div>

            {/* BMI ranges */}
            <div className="space-y-2 pt-6 border-t border-white/10">
              <div className="flex justify-between items-center text-sm">
                <span className="text-blue-400">Underweight</span>
                <span className="text-foreground/60">{'<'} 18.5</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-green-400">Normal Weight</span>
                <span className="text-foreground/60">18.5 - 24.9</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-yellow-400">Overweight</span>
                <span className="text-foreground/60">25 - 29.9</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-red-400">Obese</span>
                <span className="text-foreground/60">30+</span>
              </div>
            </div>
          </div>
        )}

        {/* Info */}
        <div className="glass p-4 text-sm text-foreground/70">
          <p>
            BMI (Body Mass Index) is a measurement of your body fat based on your height and weight. While it&apos;s not perfect,
            it&apos;s a useful screening tool for health risks.
          </p>
        </div>
      </div>
    </div>
  )
}
