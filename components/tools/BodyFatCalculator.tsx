'use client'

import { useState } from 'react'

export default function BodyFatCalculator() {
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [age, setAge] = useState<string>('')
  const [waist, setWaist] = useState<string>('')
  const [neck, setNeck] = useState<string>('')
  const [hip, setHip] = useState<string>('')
  const [bodyFat, setBodyFat] = useState<number | null>(null)
  const [category, setCategory] = useState<string>('')

  const calculateBodyFat = () => {
    if (gender === 'male' && (!age || !waist || !neck)) return
    if (gender === 'female' && (!age || !waist || !neck || !hip)) return

    let bf: number

    if (gender === 'male') {
      const w = parseFloat(waist)
      const n = parseFloat(neck)
      const a = parseFloat(age)
      bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(a)) - 450
    } else {
      const w = parseFloat(waist)
      const n = parseFloat(neck)
      const h = parseFloat(hip)
      const a = parseFloat(age)
      bf = 495 / (1.29579 - 0.35004 * Math.log10(w + h - n) + 0.22100 * Math.log10(a)) - 450
    }

    setBodyFat(Math.round(bf * 10) / 10)

    if (gender === 'male') {
      if (bf < 10) setCategory('Essential Fat')
      else if (bf < 14) setCategory('Athletes')
      else if (bf < 18) setCategory('Fitness')
      else if (bf < 25) setCategory('Average')
      else setCategory('Obese')
    } else {
      if (bf < 14) setCategory('Essential Fat')
      else if (bf < 21) setCategory('Athletes')
      else if (bf < 25) setCategory('Fitness')
      else if (bf < 32) setCategory('Average')
      else setCategory('Obese')
    }
  }

  const getBodyFatColor = () => {
    if (!bodyFat) return 'text-foreground'
    if (category === 'Athletes') return 'text-green-400'
    if (category === 'Fitness') return 'text-blue-400'
    if (category === 'Average') return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Body Fat Percentage Calculator</h2>

      <div className="space-y-6">
        {/* Gender selection */}
        <div>
          <label className="block text-sm font-semibold mb-3">Gender</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
            ].map((opt) => (
              <button
                key={opt.value}
                onClick={() => setGender(opt.value as 'male' | 'female')}
                className={`p-3 rounded-lg transition-all duration-200 ${
                  gender === opt.value ? 'glass ring-2 ring-primary' : 'glass-hover'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

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
            <label className="block text-sm font-semibold mb-2">Neck (cm)</label>
            <input
              type="number"
              value={neck}
              onChange={(e) => setNeck(e.target.value)}
              placeholder="38"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Waist (cm)</label>
            <input
              type="number"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
              placeholder="80"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50"
            />
          </div>
          {gender === 'female' && (
            <div>
              <label className="block text-sm font-semibold mb-2">Hip (cm)</label>
              <input
                type="number"
                value={hip}
                onChange={(e) => setHip(e.target.value)}
                placeholder="95"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50"
              />
            </div>
          )}
        </div>

        {/* Calculate button */}
        <button onClick={calculateBodyFat} className="w-full btn-primary">
          Calculate Body Fat
        </button>

        {/* Results */}
        {bodyFat !== null && (
          <div className="glass p-6 space-y-4">
            <div className="text-center">
              <div className={`text-5xl font-bold ${getBodyFatColor()} mb-2`}>
                {bodyFat}%
              </div>
              <div className="text-xl text-foreground/80">{category}</div>
            </div>

            {/* Categories */}
            <div className="space-y-2 pt-6 border-t border-white/10">
              {gender === 'male' ? (
                <>
                  <div className="flex justify-between items-center text-sm">
                    <span>Essential Fat</span>
                    <span className="text-foreground/60">{'<'} 10%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Athletes</span>
                    <span className="text-foreground/60">10-14%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Fitness</span>
                    <span className="text-foreground/60">14-18%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Average</span>
                    <span className="text-foreground/60">18-25%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Obese</span>
                    <span className="text-foreground/60">25%+</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-center text-sm">
                    <span>Essential Fat</span>
                    <span className="text-foreground/60">{'<'} 14%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Athletes</span>
                    <span className="text-foreground/60">14-21%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Fitness</span>
                    <span className="text-foreground/60">21-25%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Average</span>
                    <span className="text-foreground/60">25-32%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Obese</span>
                    <span className="text-foreground/60">32%+</span>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Info */}
        <div className="glass p-4 text-sm text-foreground/70">
          <p>
            This calculator uses the U.S. Navy method based on body circumference measurements. For the most accurate body
            fat assessment, consider professional methods like DEXA scans or calipers.
          </p>
        </div>
      </div>
    </div>
  )
}
