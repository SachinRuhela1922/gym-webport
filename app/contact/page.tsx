'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { locations } from '@/lib/data'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={true} />

      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link href="/" className="text-primary hover:text-primary/80 text-sm mb-8 inline-block">
          ← Back to Home
        </Link>

        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Have questions? Our friendly team is here to help. Contact us for membership inquiries, class information, or facility tours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {locations.map((location) => (
            <div key={location.id} className="glass-hover p-6">
              <h3 className="text-xl font-bold mb-6">{location.name}</h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-semibold">{location.address}</p>
                    <p className="font-semibold">{location.city}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold">{location.phone}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">{location.email}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Hours</p>
                    <p className="font-semibold">{location.hours}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-muted-foreground mb-3 font-semibold">Amenities:</p>
                  <div className="flex flex-wrap gap-2">
                    {location.amenities.map((amenity) => (
                      <span key={amenity} className="px-3 py-1 rounded-full bg-primary/20 text-xs text-primary">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="classes">Class Information</option>
                  <option value="personal-training">Personal Training</option>
                  <option value="event">Event Booking</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors resize-none"
                  required
                />
              </div>

              {submitted ? (
                <div className="p-4 rounded-lg bg-primary/20 text-primary">
                  <p className="font-semibold">Thank you! We&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send size={16} />
                  Send Message
                </button>
              )}
            </form>
          </div>

          <div className="glass-hover p-8">
            <h2 className="text-3xl font-bold mb-8">Why Choose FitFlow?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary">Expert Trainers</h3>
                <p className="text-muted-foreground">Certified professionals with years of experience in fitness and nutrition.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary">State-of-the-Art Equipment</h3>
                <p className="text-muted-foreground">Latest technology and equipment for optimal training results.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary">Community Support</h3>
                <p className="text-muted-foreground">Join a supportive community of fitness enthusiasts with the same goals.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary">Flexible Programs</h3>
                <p className="text-muted-foreground">Customized fitness plans tailored to your goals and lifestyle.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary">24/7 Facility Access</h3>
                <p className="text-muted-foreground">Train anytime that fits your schedule with premium memberships.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
