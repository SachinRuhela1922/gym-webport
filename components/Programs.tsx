'use client'

import { Users, Dumbbell, Flame, TrendingUp, ArrowRight } from 'lucide-react'

const programs = [
  {
    icon: TrendingUp,
    title: 'Beginner Bootcamp',
    duration: '12 weeks',
    level: 'Beginner',
    description: 'Perfect foundation for your fitness journey with gradual progression and expert guidance.',
    features: ['Full-body training', 'Nutrition basics', 'Daily support', 'Progress tracking'],
    price: '$29',
    color: 'from-blue-500/20 to-blue-600/20',
  },
  {
    icon: Dumbbell,
    title: 'Strength Transformation',
    duration: '16 weeks',
    level: 'Intermediate',
    description: 'Build muscle, increase strength, and develop a powerful physique with advanced training.',
    features: ['Advanced programming', 'Macro coaching', 'Video form checks', '1-on-1 support'],
    price: '$49',
    color: 'from-primary/20 to-primary/10',
    featured: true,
  },
  {
    icon: Flame,
    title: 'Fat Loss Accelerator',
    duration: '8 weeks',
    level: 'Advanced',
    description: 'Intensive program designed to maximize fat loss while preserving muscle mass.',
    features: ['Metabolic conditioning', 'Meal prep guides', 'Recovery protocols', 'Weekly check-ins'],
    price: '$59',
    color: 'from-orange-500/20 to-orange-600/20',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Training <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Choose the perfect program for your fitness level and goals.
          </p>
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <div
                key={index}
                className={`relative group ${program.featured ? 'md:scale-105 md:z-10' : ''}`}
              >
                {/* Card */}
                <div
                  className={`glass-hover relative p-8 h-full flex flex-col transition-all duration-300 ${
                    program.featured ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  {/* Featured badge */}
                  {program.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Icon and level */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${program.color} flex items-center justify-center`}>
                      <Icon size={28} className="text-primary" />
                    </div>
                    <span className="text-xs font-bold text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                      {program.level}
                    </span>
                  </div>

                  {/* Title and duration */}
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className="text-foreground/60 text-sm mb-4">{program.duration} program</p>

                  {/* Description */}
                  <p className="text-foreground/70 mb-6 flex-grow">
                    {program.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price and CTA */}
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="text-3xl font-bold">{program.price}</span>
                      <span className="text-foreground/60 text-sm">/month</span>
                    </div>
                    <button className={program.featured ? 'btn-primary' : 'btn-secondary'}>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
