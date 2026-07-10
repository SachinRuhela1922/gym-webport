'use client'

import Link from 'next/link'
import { TrendingUp } from 'lucide-react'
import dynamic from 'next/dynamic'
import { transformations } from '@/lib/data'

const Stats3DScene = dynamic(() => import('./3d/Stats3DScene').then(mod => ({ default: mod.Stats3DScene })), {
  ssr: false,
  loading: () => <div className="w-full h-80 bg-gradient-to-b from-primary/5 to-transparent rounded-lg" />
})

export default function TransformationsSection() {
  const featured = transformations.slice(0, 4)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
          Member Transformations
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Real people, real results. Join hundreds of members who have transformed their bodies and lives at FitFlow.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {featured.map((member) => (
          <div
            key={member.id}
            className="glass-hover p-6 group"
          >
            <div className="mb-4 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">{member.image}</span>
            </div>

            <h3 className="text-lg font-bold mb-1">{member.name}</h3>
            <p className="text-xs text-muted-foreground mb-4">{member.startDate}</p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded">
                <p className="text-xs text-muted-foreground">Duration</p>
                <p className="font-bold text-sm">{member.duration}</p>
              </div>
              <div className="bg-primary/10 p-3 rounded">
                <p className="text-xs text-muted-foreground">Weight Loss</p>
                <p className="font-bold text-sm text-primary">{member.weightLoss}</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
              {member.story}
            </p>

            <p className="text-xs font-semibold text-primary mb-4">
              Program: {member.program}
            </p>

            <button className="w-full px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 text-sm font-semibold transition-colors">
              Read Full Story
            </button>
          </div>
        ))}
      </div>

      <div className="mb-12 h-80 rounded-lg overflow-hidden glass">
        <Stats3DScene />
      </div>

      <div className="text-center">
        <Link
          href="/transformations"
          className="inline-block btn-primary"
        >
          View All Stories
        </Link>
      </div>
    </section>
  )
}
