import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CalorieCalculator from '@/components/tools/CalorieCalculator'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Daily Calorie Calculator - FitFlow',
  description: 'Determine your daily caloric needs based on your activity level and fitness goals.',
}

export default function CaloriesPage() {
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
              Daily Calorie <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-foreground/70">
              Determine your daily caloric needs based on your age, gender, weight, height, and activity level. Use this information to create a personalized nutrition plan.
            </p>
          </div>

          {/* Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Activity Levels</h3>
              <ul className="space-y-2 text-foreground/80 text-sm">
                <li><strong>Sedentary:</strong> Little or no exercise</li>
                <li><strong>Light:</strong> 1-3 days/week light activity</li>
                <li><strong>Moderate:</strong> 3-5 days/week moderate activity</li>
                <li><strong>Very Active:</strong> 6-7 days/week intense activity</li>
                <li><strong>Extra Active:</strong> Intense exercise 2x per day</li>
              </ul>
            </div>

            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">About TDEE</h3>
              <p className="text-foreground/70 text-sm">
                TDEE (Total Daily Energy Expenditure) is the total number of calories your body needs to function at rest, plus activities. To lose weight, consume 300-500 calories below TDEE. To gain, consume 300-500 above.
              </p>
            </div>
          </div>

          {/* Calculator */}
          <div className="glass p-8 rounded-lg">
            <CalorieCalculator />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
