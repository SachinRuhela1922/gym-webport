'use client'

import Navigation from '@/components/Navigation'
import { useState } from 'react'
import BMICalculator from '@/components/tools/BMICalculator'
import CalorieCalculator from '@/components/tools/CalorieCalculator'
import MacroCalculator from '@/components/tools/MacroCalculator'
import BodyFatCalculator from '@/components/tools/BodyFatCalculator'
import WorkoutTimer from '@/components/tools/WorkoutTimer'
import ProgressTracker from '@/components/tools/ProgressTracker'

const tools = [
  { id: 'bmi', name: 'BMI Calculator', description: 'Calculate your Body Mass Index' },
  { id: 'calorie', name: 'Calorie Counter', description: 'Determine your daily caloric needs' },
  { id: 'macro', name: 'Macro Calculator', description: 'Calculate optimal macronutrient ratios' },
  { id: 'bodyfat', name: 'Body Fat %', description: 'Estimate your body fat percentage' },
  { id: 'timer', name: 'Workout Timer', description: 'Track your workout intervals' },
  { id: 'progress', name: 'Progress Tracker', description: 'Monitor your fitness progress' },
]

export default function ToolsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedTool, setSelectedTool] = useState<string>('bmi')

  const renderTool = () => {
    switch (selectedTool) {
      case 'bmi':
        return <BMICalculator />
      case 'calorie':
        return <CalorieCalculator />
      case 'macro':
        return <MacroCalculator />
      case 'bodyfat':
        return <BodyFatCalculator />
      case 'timer':
        return <WorkoutTimer />
      case 'progress':
        return <ProgressTracker />
      default:
        return <BMICalculator />
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={isScrolled} />
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Fitness <span className="gradient-text">Tools</span>
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Use our powerful calculators and trackers to achieve your fitness goals.
            </p>
          </div>

          {/* Tools grid and active tool */}
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Tools menu */}
            <div className="lg:col-span-1">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                {tools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => setSelectedTool(tool.id)}
                    className={`p-4 rounded-lg text-left transition-all duration-200 ${
                      selectedTool === tool.id
                        ? 'glass ring-2 ring-primary'
                        : 'glass-hover'
                    }`}
                  >
                    <div className="font-semibold text-sm">{tool.name}</div>
                    <div className="text-xs text-foreground/60 mt-1">{tool.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Active tool */}
            <div className="lg:col-span-3">
              <div className="glass p-8">
                {renderTool()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
