'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Jessica Park',
    role: 'Lost 40 lbs in 6 months',
    text: 'FitFlow completely changed my relationship with fitness. The AI recommendations are scarily accurate, and the support from the community kept me motivated throughout my journey.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Built 15 lbs of muscle',
    text: 'The personalized workout plans adapt to my schedule perfectly. I&apos;ve never felt more confident about my training. Worth every penny!',
    rating: 5,
  },
  {
    name: 'Maria Rodriguez',
    role: 'Marathon-ready in 12 weeks',
    text: 'The nutrition planning combined with AI coaching helped me achieve my goal faster than I ever thought possible. Highly recommended!',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'From sedentary to athlete',
    text: 'Coming back from years of inactivity seemed impossible. FitFlow made it simple with progressive plans and amazing trainers. I&apos;m now running 5K!',
    rating: 5,
  },
  {
    name: 'Sophie Laurent',
    role: 'Consistent results',
    text: 'The best part is the accountability. Regular check-ins with my trainer and the community keep me on track. Finally found what works!',
    rating: 5,
  },
  {
    name: 'Ahmed Hassan',
    role: 'Transformed in 90 days',
    text: 'The combination of AI planning and human guidance is unbeatable. I went from knowing nothing about fitness to feeling like a pro.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-32 bg-secondary/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Real results from real people. See how FitFlow has transformed thousands of fitness journeys.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-hover p-6">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/90 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                <p className="text-foreground/60 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-16 border-t border-white/10">
          {[
            { number: '50,000+', label: 'Active Members' },
            { number: '4.9★', label: 'Average Rating' },
            { number: '1M+', label: 'Success Stories' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
