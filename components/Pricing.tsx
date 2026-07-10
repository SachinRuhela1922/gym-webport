'use client'

import { Check } from 'lucide-react'
import dynamic from 'next/dynamic'

const MembershipCards3D = dynamic(() => import('./3d/MembershipCards3D').then(mod => ({ default: mod.MembershipCards3D })), {
  ssr: false,
  loading: () => <div className="w-full h-96 bg-gradient-to-b from-primary/5 to-transparent rounded-lg" />
})

const plans = [
  {
    name: 'Starter',
    price: '9',
    description: 'Perfect for beginners',
    features: [
      'Basic workout tracking',
      'Limited AI recommendations',
      'Community access',
      'Monthly progress reports',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '29',
    description: 'For serious fitness enthusiasts',
    features: [
      'Full AI personalization',
      'Unlimited meal plans',
      'Advanced analytics',
      'Weekly check-ins',
      'Priority support',
      'Expert resources library',
      'Form video submissions',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Elite',
    price: '99',
    description: 'Premium 1-on-1 experience',
    features: [
      'All Pro features',
      'Personal trainer match',
      'Weekly coaching calls',
      'Custom nutrition plans',
      '24/7 priority support',
      'Exclusive elite community',
      'Quarterly body composition tests',
    ],
    cta: 'Schedule Consultation',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Flexible <span className="gradient-text">Pricing Plans</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Choose a plan that fits your fitness goals and budget.
          </p>
        </div>

        {/* 3D Membership Cards */}
        <div className="mb-16 h-96 rounded-lg overflow-hidden glass">
          <MembershipCards3D />
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group ${plan.popular ? 'md:scale-105 md:z-10' : ''}`}
            >
              {/* Card */}
              <div
                className={`glass-hover relative h-full p-8 flex flex-col transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/60 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-foreground/60">/month</span>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full font-semibold py-3 rounded-lg transition-all duration-300 mb-8 ${
                    plan.popular
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features list */}
                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-primary" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Footer text */}
                <p className="text-foreground/50 text-xs mt-8 pt-8 border-t border-white/10">
                  Cancel anytime. No credit card required for trial.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16">
          <p className="text-foreground/70">
            All plans include 14-day free trial.{' '}
            <span className="text-primary font-semibold cursor-pointer hover:underline">
              Compare all features
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
