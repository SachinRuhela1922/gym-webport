import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BMICalculator from '@/components/tools/BMICalculator'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'BMI Calculator - FitFlow',
  description: 'Calculate your Body Mass Index to understand your weight status and health category.',
}

export default function BMIPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={false} />
      
      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              BMI <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-foreground/70">
              Calculate your Body Mass Index (BMI) to determine your weight status and understand your health category. BMI is a measure of body fat based on your height and weight.
            </p>
          </div>

          {/* Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">BMI Categories</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex justify-between"><span>Underweight</span> <span className="font-semibold">&lt; 18.5</span></li>
                <li className="flex justify-between"><span>Normal Weight</span> <span className="font-semibold">18.5 - 24.9</span></li>
                <li className="flex justify-between"><span>Overweight</span> <span className="font-semibold">25 - 29.9</span></li>
                <li className="flex justify-between"><span>Obese</span> <span className="font-semibold">≥ 30</span></li>
              </ul>
            </div>

            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">About BMI</h3>
              <p className="text-foreground/70">
                BMI is calculated by dividing your weight in kilograms by your height in meters squared. It&apos;s a screening tool used by healthcare providers to identify potential weight issues in adults.
              </p>
            </div>
          </div>

          {/* Calculator */}
          <div className="glass p-8 rounded-lg">
            <BMICalculator />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
