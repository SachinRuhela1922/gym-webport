'use client'

import Link from 'next/link'
import { Mail, Share2, Heart, Globe, Send } from 'lucide-react'

const footerLinks = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Programs', 'Blog', 'API'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press', 'Events'],
  },
  {
    title: 'Resources',
    links: ['Help Center', 'Contact', 'Guides', 'Community', 'Partners'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Cookies', 'Accessibility', 'Compliance'],
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-secondary/5 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-bold text-xl">FitFlow</span>
            </Link>
            <p className="text-foreground/70 mb-6">
              Transform your fitness journey with AI-powered personalized training.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {[Globe, Heart, Share2, Send].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label={`Follow on social media ${i}`}
                >
                  <Icon size={18} className="text-foreground" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section, i) => (
            <div key={i}>
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter section */}
        <div className="glass p-8 mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold mb-1">Subscribe to our newsletter</h3>
              <p className="text-foreground/70 text-sm">Get fitness tips, new features, and exclusive offers.</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50"
              />
              <button className="btn-primary">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-foreground/70 text-sm">
          <p>&copy; 2024 FitFlow. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
