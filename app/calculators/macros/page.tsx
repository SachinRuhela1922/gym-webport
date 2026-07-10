import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MacroCalculator from '@/components/tools/MacroCalculator'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Macro Calculator - FitFlow',
  description: 'Calculate optimal macronutrient ratios for your specific fitness objectives.',
}

export default function MacrosPage() {
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
              Macro <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-foreground/70">
              Calculate your optimal macronutrient distribution based on your fitness goals. Macronutrients (protein, carbs, and fats) are essential for your body&apos;s function and fitness progress.
            </p>
          </div>

          {/* Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-400">Protein</h3>
              <p className="text-foreground/70 text-sm">
                Builds and repairs muscle tissue. Essential for muscle growth and recovery after workouts.
              </p>
              <p className="text-xs text-foreground/50 mt-2">4 calories per gram</p>
            </div>

            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Carbs</h3>
              <p className="text-foreground/70 text-sm">
                Provides energy for workouts and daily activities. Fuels your brain and muscles.
              </p>
              <p className="text-xs text-foreground/50 mt-2">4 calories per gram</p>
            </div>

            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-orange-400">Fats</h3>
              <p className="text-foreground/70 text-sm">
                Supports hormone production and nutrient absorption. Essential for overall health.
              </p>
              <p className="text-xs text-foreground/50 mt-2">9 calories per gram</p>
            </div>
          </div>

          {/* Common ratios */}
          <div className="glass p-6 rounded-lg mb-12">
            <h3 className="text-xl font-bold mb-4">Recommended Macro Ratios</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="font-semibold text-primary">Balanced</p>
                <p className="text-foreground/70">P: 30% | C: 40% | F: 30%</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Muscle Gain</p>
                <p className="text-foreground/70">P: 35% | C: 45% | F: 20%</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Fat Loss</p>
                <p className="text-foreground/70">P: 40% | C: 35% | F: 25%</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Keto</p>
                <p className="text-foreground/70">P: 25% | C: 5% | F: 70%</p>
              </div>
            </div>
          </div>

          {/* Calculator */}
          <div className="glass p-8 rounded-lg">
            <MacroCalculator />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
