'use client'

import { useState, useEffect } from 'react'
import { Play, Pause, RotateCcw } from 'lucide-react'

export default function WorkoutTimer() {
  const [workTime, setWorkTime] = useState(30)
  const [restTime, setRestTime] = useState(15)
  const [rounds, setRounds] = useState(10)
  const [isRunning, setIsRunning] = useState(false)
  const [currentRound, setCurrentRound] = useState(1)
  const [isWorkPhase, setIsWorkPhase] = useState(true)
  const [timeLeft, setTimeLeft] = useState(30)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            if (isWorkPhase) {
              setIsWorkPhase(false)
              return restTime
            } else {
              if (currentRound < rounds) {
                setCurrentRound((r) => r + 1)
                setIsWorkPhase(true)
                return workTime
              } else {
                setIsRunning(false)
                return 0
              }
            }
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isRunning, isWorkPhase, currentRound, rounds, workTime, restTime])

  const startTimer = () => {
    setIsRunning(true)
    if (timeLeft === 0) {
      setCurrentRound(1)
      setIsWorkPhase(true)
      setTimeLeft(workTime)
    }
  }

  const resetTimer = () => {
    setIsRunning(false)
    setCurrentRound(1)
    setIsWorkPhase(true)
    setTimeLeft(workTime)
  }

  const progress = isWorkPhase
    ? ((workTime - timeLeft) / workTime) * 100
    : ((restTime - timeLeft) / restTime) * 100

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Workout Timer</h2>

      <div className="space-y-6">
        {/* Setup section */}
        {!isRunning && currentRound === 1 && timeLeft === workTime && (
          <div className="glass p-6 space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-3">Work Duration (seconds)</label>
              <input
                type="number"
                value={workTime}
                onChange={(e) => setWorkTime(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">Rest Duration (seconds)</label>
              <input
                type="number"
                value={restTime}
                onChange={(e) => setRestTime(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">Number of Rounds</label>
              <input
                type="number"
                value={rounds}
                onChange={(e) => setRounds(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground"
              />
            </div>
          </div>
        )}

        {/* Timer display */}
        <div className="glass p-12 text-center space-y-8">
          {/* Status */}
          <div>
            <p className="text-foreground/70 text-sm mb-2">
              Round {currentRound} / {rounds}
            </p>
            <p className={`text-2xl font-bold ${isWorkPhase ? 'text-green-400' : 'text-blue-400'}`}>
              {isWorkPhase ? 'WORK' : 'REST'}
            </p>
          </div>

          {/* Large timer */}
          <div className="relative w-64 h-64 mx-auto">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-white/10"
              />
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray={`${(progress / 100) * 565.48} 565.48`}
                className={`${isWorkPhase ? 'text-green-400' : 'text-blue-400'} transition-all duration-300`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold gradient-text">{timeLeft}</span>
            </div>
          </div>

          {/* Control buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => (isRunning ? setIsRunning(false) : startTimer())}
              className="btn-primary flex items-center gap-2"
            >
              {isRunning ? (
                <>
                  <Pause size={20} /> Pause
                </>
              ) : (
                <>
                  <Play size={20} /> Start
                </>
              )}
            </button>
            <button onClick={resetTimer} className="btn-secondary flex items-center gap-2">
              <RotateCcw size={20} /> Reset
            </button>
          </div>

          {/* Session summary */}
          {!isRunning && currentRound > rounds && (
            <div className="border-t border-white/10 pt-6 mt-6">
              <p className="text-xl font-bold text-green-400 mb-2">Workout Complete!</p>
              <p className="text-foreground/70">
                Total time: {((workTime + restTime) * rounds - restTime) / 60} minutes
              </p>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="glass p-4 text-sm text-foreground/70">
          <p>
            Perfect for HIIT workouts and circuit training. The timer will automatically switch between work and rest
            phases.
          </p>
        </div>
      </div>
    </div>
  )
}
