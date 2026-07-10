'use client'

import { Star, Send } from 'lucide-react'

const trainers = [
  {
    name: 'Alex Morgan',
    specialty: 'Strength & Conditioning',
    rating: 4.9,
    clients: 1200,
    bio: 'Former competitive athlete with 10+ years of training experience.',
    verified: true,
  },
  {
    name: 'Sarah Chen',
    specialty: 'Nutrition & Body Composition',
    rating: 4.8,
    clients: 950,
    bio: 'Registered Dietitian and Certified Nutrition Specialist.',
    verified: true,
  },
  {
    name: 'Marcus Johnson',
    specialty: 'HIIT & Fat Loss',
    rating: 4.9,
    clients: 1450,
    bio: 'NASM-CPT with specialization in metabolic training.',
    verified: true,
  },
  {
    name: 'Emma Williams',
    specialty: 'Flexibility & Recovery',
    rating: 4.7,
    clients: 800,
    bio: 'Yoga instructor and mobility specialist with holistic approach.',
    verified: true,
  },
]

export default function Trainers() {
  return (
    <section id="trainers" className="relative py-20 sm:py-32 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Meet Our Expert <span className="gradient-text">Trainers</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Learn from certified professionals with years of real-world experience.
          </p>
        </div>

        {/* Trainers grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <div key={index} className="glass-hover p-6 flex flex-col">
              {/* Avatar placeholder */}
              <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 mb-4 flex items-center justify-center">
                <div className="text-4xl font-bold text-primary/60">
                  {trainer.name.charAt(0)}
                </div>
              </div>

              {/* Name with verification */}
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-bold">{trainer.name}</h3>
                {trainer.verified && (
                  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Specialty */}
              <p className="text-foreground/60 text-sm mb-3">{trainer.specialty}</p>

              {/* Bio */}
              <p className="text-foreground/70 text-sm mb-4 flex-grow">{trainer.bio}</p>

              {/* Stats */}
              <div className="flex items-center justify-between mb-4 text-sm">
                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(trainer.rating) ? 'fill-primary text-primary' : 'text-foreground/20'}
                      />
                    ))}
                  </div>
                  <span className="font-semibold">{trainer.rating}</span>
                </div>
                <span className="text-foreground/60">{trainer.clients.toLocaleString()} clients</span>
              </div>

              {/* CTA */}
              <button className="btn-secondary w-full flex items-center justify-center gap-2 text-sm">
                <Send size={16} />
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
