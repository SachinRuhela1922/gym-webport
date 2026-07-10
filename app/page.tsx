'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ClassesSection from '@/components/ClassesSection'
import CalculatorsSection from '@/components/CalculatorsSection'
import EquipmentSection from '@/components/EquipmentSection'
import Programs from '@/components/Programs'
import Trainers from '@/components/Trainers'
import TransformationsSection from '@/components/TransformationsSection'
import BlogSection from '@/components/BlogSection'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import NewsletterSection from '@/components/NewsletterSection'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <Services />
      <ClassesSection />
      <CalculatorsSection />
      <EquipmentSection />
      <Programs />
      <Trainers />
      <TransformationsSection />
      <BlogSection />
      <Pricing />
      <Testimonials />
      <NewsletterSection />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
