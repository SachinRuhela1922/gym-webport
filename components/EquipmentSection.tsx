'use client'

import Link from 'next/link'
import { Zap, Award, Shield } from 'lucide-react'
import dynamic from 'next/dynamic'
import { equipment } from '@/lib/data'

const Equipment3DScene = dynamic(() => import('./3d/Equipment3DScene').then(mod => ({ default: mod.Equipment3DScene })), {
  ssr: false,
  loading: () => <div className="w-full h-80 bg-gradient-to-b from-primary/5 to-transparent rounded-lg" />
})

export default function EquipmentSection() {
  const categories = ['Free Weights', 'Cardio', 'Machine Weights', 'Calisthenics']

  const groupedEquipment = categories.map((category) => ({
    category,
    items: equipment.filter((eq) => eq.category === category),
  }))

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
          State-of-the-Art Equipment
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Train with premium equipment maintained to the highest standards. We continually upgrade our facilities.
        </p>
      </div>

      <div className="mb-12 h-80 rounded-lg overflow-hidden glass">
        <Equipment3DScene />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {groupedEquipment.map((group) => (
          <div key={group.category} className="glass-hover p-6">
            <h3 className="text-xl font-bold mb-4 text-primary">{group.category}</h3>
            <div className="space-y-3">
              {group.items.map((item) => (
                <div key={item.id} className="pb-3 border-b border-white/10 last:border-b-0">
                  <p className="font-semibold text-sm">{item.name}</p>
                  <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                    <span>{item.quantity} units</span>
                    <span className="px-2 py-1 rounded bg-primary/20 text-primary">
                      {item.condition}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="glass-hover p-6 text-center">
          <Zap size={32} className="mx-auto mb-4 text-primary" />
          <h3 className="text-lg font-bold mb-2">Latest Technology</h3>
          <p className="text-sm text-muted-foreground">
            Top brands like Technogym and Life Fitness
          </p>
        </div>
        <div className="glass-hover p-6 text-center">
          <Award size={32} className="mx-auto mb-4 text-primary" />
          <h3 className="text-lg font-bold mb-2">Regularly Maintained</h3>
          <p className="text-sm text-muted-foreground">
            Professional servicing ensures optimal performance
          </p>
        </div>
        <div className="glass-hover p-6 text-center">
          <Shield size={32} className="mx-auto mb-4 text-primary" />
          <h3 className="text-lg font-bold mb-2">Safe & Clean</h3>
          <p className="text-sm text-muted-foreground">
            Sanitized daily with professional cleaning protocols
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link href="/equipment" className="inline-block btn-primary">
          Explore Full Equipment List
        </Link>
      </div>
    </section>
  )
}
