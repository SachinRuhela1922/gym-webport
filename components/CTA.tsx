'use client'

import { ArrowRight, Zap } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-hover p-12 sm:p-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <Zap size={18} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Limited Time Offer</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="gradient-text">Fitness?</span>
          </h2>

          {/* Subheading */}
          <p className="text-foreground/80 text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Get 50% off your first month when you join today. No commitment, cancel anytime. Plus, get a free consultation with one of our expert trainers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary group w-full sm:w-auto flex items-center justify-center gap-2">
              Start Your Free Trial
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary w-full sm:w-auto">
              Watch Success Stories
            </button>
          </div>

          {/* Trust elements */}
          <div className="mt-12 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-8 text-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-primary/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              No credit card required
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-primary/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              Cancel anytime
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-primary/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              30-day money-back guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
