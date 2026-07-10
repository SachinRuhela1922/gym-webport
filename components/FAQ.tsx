'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How does the AI personalization work?',
    answer: 'Our AI analyzes your fitness level, goals, preferences, and past performance to create customized workout and nutrition plans. It continuously learns and adapts based on your progress.',
  },
  {
    question: 'Do I need experience with fitness to start?',
    answer: 'Not at all! FitFlow caters to all levels from complete beginners to advanced athletes. Our programs start at your level and progressively challenge you as you improve.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, absolutely. You can cancel your subscription anytime without penalties. However, most members stay with us because they love the results!',
  },
  {
    question: 'What if I have dietary restrictions?',
    answer: 'Our AI meal planning takes all dietary restrictions into account - vegan, keto, gluten-free, allergies, and more. You can customize every aspect of your nutrition plan.',
  },
  {
    question: 'How often are workouts updated?',
    answer: 'Your personalized workouts adjust weekly based on your performance, feedback, and progress. You&apos;ll never get bored with the same routine.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes! If you&apos;re not satisfied with your results after 30 days, we&apos;ll refund your money. That&apos;s how confident we are in our platform.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Everything you need to know about FitFlow.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-hover">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-white/10 pt-4">
                  <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-4">Still have questions?</p>
          <button className="btn-primary">Contact our support team</button>
        </div>
      </div>
    </section>
  )
}
