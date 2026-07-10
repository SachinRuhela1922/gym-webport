'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { transformations } from '@/lib/data'

export default function TransformationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={true} />

      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link href="/" className="text-primary hover:text-primary/80 text-sm mb-8 inline-block">
          ← Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Member Transformations</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Inspiring stories from real members who transformed their bodies and changed their lives at FitFlow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {transformations.map((member) => (
            <div
              key={member.id}
              className="glass-hover p-6 group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-6 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">{member.image}</span>
              </div>

              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-xs text-muted-foreground mb-6">{member.startDate}</p>

              <div className="grid grid-cols-2 gap-4 mb-6 py-6 border-y border-white/10">
                <div className="bg-primary/10 p-4 rounded text-center">
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="text-lg font-bold mt-2">{member.duration}</p>
                </div>
                <div className="bg-primary/10 p-4 rounded text-center">
                  <p className="text-xs text-muted-foreground">Achievement</p>
                  <p className="text-lg font-bold text-primary mt-2">{member.weightLoss}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                {member.story}
              </p>

              <div className="mb-6">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  Program
                </p>
                <p className="text-sm font-semibold bg-primary/10 p-3 rounded">
                  {member.program}
                </p>
              </div>

              <button className="w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
                Get Started on Your Journey
              </button>
            </div>
          ))}
        </div>

        <div className="glass-hover p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Your Transformation Starts Here</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of members who have achieved their fitness goals. Our expert trainers and supportive community will guide you every step of the way.
          </p>
          <button className="btn-primary">
            Join FitFlow Today
          </button>
        </div>
      </div>

      <Footer />
    </main>
  )
}
