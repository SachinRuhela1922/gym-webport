'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Zap } from 'lucide-react'
import dynamic from 'next/dynamic'

const Hero3DScene = dynamic(() => import('./3d/Hero3DScene').then(mod => ({ default: mod.Hero3DScene })), {
  ssr: false,
  loading: () => <div className="w-full h-80 bg-gradient-to-b from-primary/5 to-transparent rounded-lg" />
})

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      r: number
      a: number
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 1,
        a: Math.random() * 0.5 + 0.3,
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(13, 13, 13, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.a *= 0.99

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.fillStyle = `rgba(85, 180, 255, ${p.a})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />

      {/* 3D Scene Background */}
      <div className="absolute top-0 right-0 w-1/2 h-screen opacity-30 pointer-events-none">
        <Hero3DScene />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 glass px-4 py-2">
          <Zap size={16} className="text-primary" />
          <span className="text-sm font-semibold gradient-text">AI-Powered Fitness Revolution</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-foreground">Transform Your Body,</span>
          <span className="block gradient-text">Transform Your Life</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience personalized AI-powered workouts, meal plans, and expert guidance designed specifically for your goals and fitness level.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="btn-primary group w-full sm:w-auto flex items-center justify-center gap-2">
            Start Your Journey
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-secondary w-full sm:w-auto">
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10">
          {[
            { number: '50K+', label: 'Active Members' },
            { number: '10K+', label: 'Success Stories' },
            { number: '4.9★', label: 'Average Rating' },
          ].map((stat, i) => (
            <div key={i} className="glass p-6 hover:bg-white/8 transition-colors">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
