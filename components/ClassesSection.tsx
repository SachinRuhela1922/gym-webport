'use client'

import Link from 'next/link'
import { Clock, Users, Zap } from 'lucide-react'
import dynamic from 'next/dynamic'
import { gymClasses } from '@/lib/data'

const Classes3DScene = dynamic(() => import('./3d/Classes3DScene').then(mod => ({ default: mod.Classes3DScene })), {
  ssr: false,
  loading: () => <div className="w-full h-72 bg-gradient-to-b from-primary/5 to-transparent rounded-lg" />
})

export default function ClassesSection() {
  const featuredClasses = gymClasses.slice(0, 3)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
          Group Fitness Classes
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Join our energetic community classes led by certified instructors. From HIIT to yoga, find your perfect workout.
        </p>
      </div>

      <div className="mb-12 h-72 rounded-lg overflow-hidden glass">
        <Classes3DScene />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {featuredClasses.map((gymClass) => (
          <div
            key={gymClass.id}
            className="glass-hover p-6 group cursor-pointer"
          >
            <div className="mb-4 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">{gymClass.image}</span>
            </div>

            <h3 className="text-xl font-bold mb-2">{gymClass.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">by {gymClass.instructor}</p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <Clock size={16} className="text-primary" />
                <span>{gymClass.schedule[0]?.time || 'TBA'}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Users size={16} className="text-primary" />
                <span>{gymClass.enrolled}/{gymClass.capacity} enrolled</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Zap size={16} className="text-primary" />
                <span className="px-2 py-1 rounded bg-primary/20 text-xs">{gymClass.level}</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6">{gymClass.description}</p>

            <button className="btn-primary w-full text-center">Book Now</button>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/classes"
          className="inline-block btn-primary"
        >
          View All Classes
        </Link>
      </div>
    </section>
  )
}
