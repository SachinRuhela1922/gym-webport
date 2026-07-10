'use client'

import { useState } from 'react'
import { Mail, CheckCircle } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-hover p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

        <Mail size={48} className="mx-auto mb-6 text-primary" />
        <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive training tips, nutrition guides, member stories, and special offers delivered weekly.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 py-4 px-6 bg-primary/20 rounded-lg inline-block">
            <CheckCircle size={20} className="text-primary" />
            <span className="font-semibold">Thanks for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors placeholder-muted-foreground"
              required
            />
            <button
              type="submit"
              className="btn-primary px-8 py-3"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs text-muted-foreground mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
