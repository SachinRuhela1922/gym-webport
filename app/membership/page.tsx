'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Check, X } from 'lucide-react'
import { membershipTiers } from '@/lib/data'

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={true} />

      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link href="/" className="text-primary hover:text-primary/80 text-sm mb-8 inline-block">
          ← Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Membership Plans</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect membership that fits your fitness goals and lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {membershipTiers.map((tier) => (
            <div
              key={tier.id}
              className={`glass-hover p-8 flex flex-col h-full transition-transform hover:scale-105 ${
                tier.highlighted ? 'ring-2 ring-primary md:scale-105' : ''
              }`}
            >
              {tier.highlighted && (
                <div className="mb-4 inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-bold w-fit">
                  Most Popular
                </div>
              )}

              <h2 className="text-2xl font-bold mb-2">{tier.name}</h2>
              <div className="mb-8">
                <div className="text-4xl font-bold text-primary">${tier.price}</div>
                <div className="text-sm text-muted-foreground">{tier.duration}</div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  tier.highlighted
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="glass-hover p-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What's Included in All Plans?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Access to full gym floor',
              'Free WiFi throughout facility',
              'Locker room with lockers',
              'Towel service',
              'Water fountain access',
              'Changing facilities',
              'Member community events',
              'Mobile app access',
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <Check size={24} className="text-primary" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="glass-hover p-8">
            <h3 className="text-2xl font-bold mb-6">Flexible Terms</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Check size={20} className="text-primary" />
                <span>No long-term contracts required</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={20} className="text-primary" />
                <span>Cancel anytime with 30 days notice</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={20} className="text-primary" />
                <span>Pause membership up to 3 months</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={20} className="text-primary" />
                <span>Upgrade or downgrade anytime</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={20} className="text-primary" />
                <span>Money-back guarantee first 30 days</span>
              </li>
            </ul>
          </div>

          <div className="glass-hover p-8">
            <h3 className="text-2xl font-bold mb-6">Add-ons & Upgrades</h3>
            <div className="space-y-4">
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="font-semibold">Personal Training</p>
                  <p className="text-sm text-muted-foreground">One-on-one sessions</p>
                </div>
                <p className="font-bold">$30/session</p>
              </div>
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="font-semibold">Nutrition Consultation</p>
                  <p className="text-sm text-muted-foreground">Expert nutrition plan</p>
                </div>
                <p className="font-bold">$50/month</p>
              </div>
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="font-semibold">Group Classes</p>
                  <p className="text-sm text-muted-foreground">Unlimited class access</p>
                </div>
                <p className="font-bold">$30/month</p>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">Recovery Services</p>
                  <p className="text-sm text-muted-foreground">Massage, sauna, ice bath</p>
                </div>
                <p className="font-bold">$40/month</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-hover p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of members achieving their fitness goals. Start your journey today with FitFlow.
          </p>
          <Link href="/signup" className="inline-block btn-primary">
            Get Started Now
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
