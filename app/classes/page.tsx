'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Clock, Users, Zap, Filter } from 'lucide-react'
import { gymClasses } from '@/lib/data'

export default function ClassesPage() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)

  const filteredClasses = selectedLevel
    ? gymClasses.filter((c) => c.level === selectedLevel)
    : gymClasses

  const levels = ['Beginner', 'Intermediate', 'Advanced']

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={true} />

      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link href="/" className="text-primary hover:text-primary/80 text-sm mb-8 inline-block">
          ← Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Group Fitness Classes</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Discover our diverse range of classes led by expert instructors. Whether you&apos;re a beginner or advanced, we have something for everyone.
          </p>
        </div>

        <div className="mb-8 flex items-center gap-4 flex-wrap">
          <Filter size={20} className="text-primary" />
          <button
            onClick={() => setSelectedLevel(null)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedLevel === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-white/10 hover:bg-white/20 text-foreground'
            }`}
          >
            All Levels
          </button>
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedLevel === level
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-white/10 hover:bg-white/20 text-foreground'
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredClasses.map((gymClass) => (
            <div key={gymClass.id} className="glass-hover p-6 flex flex-col h-full">
              <div className="mb-4 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">{gymClass.image}</span>
              </div>

              <h3 className="text-xl font-bold mb-2">{gymClass.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">by {gymClass.instructor}</p>

              <div className="space-y-3 mb-6 flex-grow">
                {gymClass.schedule.map((sched, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    <Clock size={16} className="text-primary flex-shrink-0" />
                    <span>
                      {sched.day} at {sched.time} ({sched.duration} min)
                    </span>
                  </div>
                ))}

                <div className="flex items-center gap-3 text-sm">
                  <Users size={16} className="text-primary flex-shrink-0" />
                  <span>{gymClass.enrolled}/{gymClass.capacity} enrolled</span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Zap size={16} className="text-primary flex-shrink-0" />
                  <span className="px-2 py-1 rounded bg-primary/20 text-xs">{gymClass.level}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6">{gymClass.description}</p>

              <button className="btn-primary w-full text-center">Reserve Spot</button>
            </div>
          ))}
        </div>

        {filteredClasses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No classes found for the selected level.</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
