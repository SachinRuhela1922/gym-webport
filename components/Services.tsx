'use client'

import { Zap, Brain, Users, Gauge, BarChart3, Shield } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'AI Workout Planning',
    description: 'Get personalized workout routines powered by AI that adapt to your fitness level and goals.',
  },
  {
    icon: Zap,
    title: 'Smart Nutrition',
    description: 'AI-generated meal plans tailored to your dietary preferences and caloric needs.',
  },
  {
    icon: Users,
    title: 'Expert Coaching',
    description: 'Connect with certified fitness trainers for guidance and support on your journey.',
  },
  {
    icon: Gauge,
    title: 'Progress Tracking',
    description: 'Monitor your metrics with detailed analytics and real-time performance insights.',
  },
  {
    icon: BarChart3,
    title: 'Fitness Calculators',
    description: 'Access advanced calculators for BMI, calorie intake, body fat, and macros.',
  },
  {
    icon: Shield,
    title: 'Community Support',
    description: 'Join thousands of like-minded fitness enthusiasts in our exclusive community.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-32 bg-secondary/5 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Premium <span className="gradient-text">Features</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Everything you need to achieve your fitness goals with cutting-edge technology and expert support.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="glass-hover group p-8 relative overflow-hidden"
              >
                {/* Gradient accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Icon size={24} className="text-primary" />
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="relative z-10 text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
