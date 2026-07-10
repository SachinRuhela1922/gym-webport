'use client'

import Navigation from '@/components/Navigation'
import DietPlannerAI from '@/components/ai/DietPlannerAI'
import WorkoutPlannerAI from '@/components/ai/WorkoutPlannerAI'
import FitnessChatbot from '@/components/ai/FitnessChatbot'
import { useState } from 'react'
import { Brain, Lightbulb } from 'lucide-react'

const aiTools = [
  { id: 'diet', name: 'AI Diet Planner', description: 'Get personalized meal plans powered by AI' },
  { id: 'workout', name: 'AI Workout Planner', description: 'AI-generated workout programs tailored to you' },
  { id: 'chatbot', name: 'Fitness Chatbot', description: 'Chat with your personal AI fitness coach' },
]

export default function AIPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedTool, setSelectedTool] = useState<string>('diet')

  const renderTool = () => {
    switch (selectedTool) {
      case 'diet':
        return <DietPlannerAI />
      case 'workout':
        return <WorkoutPlannerAI />
      case 'chatbot':
        return <FitnessChatbot />
      default:
        return <DietPlannerAI />
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={isScrolled} />
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 glass px-4 py-2">
              <Brain size={18} className="text-primary" />
              <span className="text-sm font-semibold gradient-text">AI-Powered Intelligence</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Your Personal AI <span className="gradient-text">Fitness Coach</span>
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Experience the power of artificial intelligence tailored to your fitness goals. Get personalized plans,
              real-time guidance, and expert coaching at your fingertips.
            </p>
          </div>

          {/* Features info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {aiTools.map((tool) => (
              <div
                key={tool.id}
                onClick={() => setSelectedTool(tool.id)}
                className={`glass p-6 cursor-pointer transition-all duration-200 ${
                  selectedTool === tool.id
                    ? 'ring-2 ring-primary scale-105'
                    : 'hover:bg-white/8'
                }`}
              >
                <Lightbulb size={24} className="text-primary mb-3" />
                <h3 className="font-bold text-lg mb-1">{tool.name}</h3>
                <p className="text-foreground/70 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>

          {/* Active tool */}
          <div className="glass p-8">{renderTool()}</div>

          {/* Info section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Personalized Plans',
                description: 'AI analyzes your unique profile to create customized fitness and nutrition plans.',
              },
              {
                title: '24/7 Coaching',
                description: 'Get instant answers to fitness questions anytime with our intelligent chatbot.',
              },
              {
                title: 'Continuous Learning',
                description: 'Our AI adapts and improves recommendations based on your feedback and progress.',
              },
            ].map((item, i) => (
              <div key={i} className="glass p-6">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 glass p-6 text-sm text-foreground/70 text-center">
            <p>
              *These AI-powered tools provide general fitness guidance and recommendations. Always consult with healthcare
              professionals before starting new exercise or nutrition programs, especially if you have existing health conditions.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
