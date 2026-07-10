'use client'

import Navigation from '@/components/Navigation'
import { useState } from 'react'
import { Mail, Lock, User, Phone, CheckCircle, ArrowRight } from 'lucide-react'

export default function SignupPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [step, setStep] = useState(1)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      setSubmitted(true)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={isScrolled} />
      <div className="pt-24 pb-20">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-3">Join FitFlow</h1>
            <p className="text-foreground/70">Start your fitness transformation today</p>
          </div>

          {/* Success message */}
          {submitted ? (
            <div className="glass p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <CheckCircle size={32} className="text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Welcome to FitFlow!</h2>
                <p className="text-foreground/70 mb-6">
                  Your account has been created successfully. Check your email for verification link.
                </p>
              </div>
              <div className="space-y-2">
                <button className="w-full btn-primary">Go to Dashboard</button>
                <button className="w-full btn-secondary">Explore Features</button>
              </div>
              <p className="text-sm text-foreground/60">
                *Note: This is a demo. To use the platform, you&apos;ll need to set up authentication with Better Auth or
                Supabase.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Step indicator */}
              <div className="flex gap-2 mb-8">
                <div className={`flex-1 h-1 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-white/10'}`} />
                <div className={`flex-1 h-1 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-white/10'}`} />
              </div>

              {/* Step 1: Personal Info */}
              {step === 1 && (
                <div className="glass p-8 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">First Name *</label>
                      <div className="relative">
                        <User size={18} className="absolute left-3 top-3 text-foreground/50" />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          placeholder="John"
                          className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Last Name *</label>
                      <div className="relative">
                        <User size={18} className="absolute left-3 top-3 text-foreground/50" />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          placeholder="Doe"
                          className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-3 top-3 text-foreground/50" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone (optional)</label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-3 top-3 text-foreground/50" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50"
                      />
                    </div>
                  </div>

                  <button type="submit" className="w-full btn-primary mt-6 flex items-center justify-center gap-2">
                    Next
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}

              {/* Step 2: Security & Agreement */}
              {step === 2 && (
                <div className="glass p-8 space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Password *</label>
                    <div className="relative">
                      <Lock size={18} className="absolute left-3 top-3 text-foreground/50" />
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50"
                      />
                    </div>
                    <p className="text-xs text-foreground/60 mt-2">
                      At least 8 characters with uppercase, lowercase, and numbers
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Confirm Password *</label>
                    <div className="relative">
                      <Lock size={18} className="absolute left-3 top-3 text-foreground/50" />
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        required
                        className="mt-1 w-4 h-4 rounded border-white/20 text-primary"
                      />
                      <span className="text-sm text-foreground/80">
                        I agree to the Terms of Service and Privacy Policy
                      </span>
                    </label>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 btn-secondary"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.agreeToTerms}
                      className="flex-1 btn-primary disabled:opacity-50"
                    >
                      Create Account
                    </button>
                  </div>
                </div>
              )}

              {/* Info */}
              <p className="text-xs text-foreground/60 text-center mt-6">
                Already have an account?{' '}
                <span className="text-primary cursor-pointer hover:underline">Sign in here</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
