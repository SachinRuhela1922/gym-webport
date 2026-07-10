'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calculator, ArrowRight } from 'lucide-react'

const calculators = [
  {
    id: 'bmi',
    name: 'BMI Calculator',
    description: 'Calculate your Body Mass Index to understand your weight status and health category.',
    icon: '📊',
    href: '/calculators/bmi',
    color: 'from-blue-500/20 to-blue-600/20',
    borderColor: 'border-blue-500/30',
  },
  {
    id: 'calories',
    name: 'Daily Calories',
    description: 'Determine your daily caloric needs based on your activity level and fitness goals.',
    icon: '🔥',
    href: '/calculators/calories',
    color: 'from-orange-500/20 to-red-600/20',
    borderColor: 'border-orange-500/30',
  },
  {
    id: 'macros',
    name: 'Macro Split',
    description: 'Calculate optimal macronutrient ratios for your specific fitness objectives.',
    icon: '🥗',
    href: '/calculators/macros',
    color: 'from-green-500/20 to-emerald-600/20',
    borderColor: 'border-green-500/30',
  },
]

export default function CalculatorsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4 border border-primary/20">
            <Calculator size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Essential Tools</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Fitness <span className="gradient-text">Calculators</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Use our scientifically-backed calculators to get personalized insights and optimize your fitness journey.
          </p>
        </div>

        {/* Calculators grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {calculators.map((calc) => (
            <Link
              key={calc.id}
              href={calc.href}
              onMouseEnter={() => setHoveredId(calc.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group"
            >
              <div
                className={`glass-hover relative overflow-hidden p-8 h-full transition-all duration-300 ${calc.borderColor} border-2`}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${calc.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon */}
                <div className="relative z-10 text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {calc.icon}
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {calc.name}
                </h3>
                <p className="relative z-10 text-foreground/70 leading-relaxed mb-6">
                  {calc.description}
                </p>

                {/* Link indicator */}
                <div className="relative z-10 flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  <span>Try Calculator</span>
                  <ArrowRight
                    size={18}
                    className={`transition-transform duration-300 ${
                      hoveredId === calc.id ? 'translate-x-2' : ''
                    }`}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA button */}
        <div className="text-center mt-12">
          <Link
            href="/tools"
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>View All Tools</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
