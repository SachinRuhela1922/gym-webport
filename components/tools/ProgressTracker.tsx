'use client'

import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { formatDate } from '@/lib/dateUtils'

interface ProgressEntry {
  id: string
  date: string
  weight: number
  chest?: number
  waist?: number
  arms?: number
  notes: string
}

export default function ProgressTracker() {
  const [entries, setEntries] = useState<ProgressEntry[]>([])
  const [weight, setWeight] = useState<string>('')
  const [chest, setChest] = useState<string>('')
  const [waist, setWaist] = useState<string>('')
  const [arms, setArms] = useState<string>('')
  const [notes, setNotes] = useState<string>('')

  const addEntry = () => {
    if (!weight) return

    const newEntry: ProgressEntry = {
      id: Date.now().toString(),
      date: formatDate(new Date()),
      weight: parseFloat(weight),
      chest: chest ? parseFloat(chest) : undefined,
      waist: waist ? parseFloat(waist) : undefined,
      arms: arms ? parseFloat(arms) : undefined,
      notes,
    }

    setEntries([newEntry, ...entries])
    setWeight('')
    setChest('')
    setWaist('')
    setArms('')
    setNotes('')
  }

  const deleteEntry = (id: string) => {
    setEntries(entries.filter((e) => e.id !== id))
  }

  const getProgress = (metric: 'weight' | 'chest' | 'waist' | 'arms') => {
    if (entries.length < 2) return null

    const filtered = entries
      .filter((e) => e[metric] !== undefined)
      .reverse()

    if (filtered.length < 2) return null

    const current = filtered[0][metric]
    const previous = filtered[1][metric]
    const diff = current! - previous!

    return {
      diff,
      percent: ((diff / previous!) * 100).toFixed(1),
      direction: diff < 0 ? 'down' : 'up',
    }
  }

  const progressW = getProgress('weight')
  const progressC = getProgress('chest')
  const progressWa = getProgress('waist')
  const progressA = getProgress('arms')

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Progress Tracker</h2>

      <div className="space-y-6">
        {/* Input section */}
        <div className="glass p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="75"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Chest (cm)</label>
              <input
                type="number"
                value={chest}
                onChange={(e) => setChest(e.target.value)}
                placeholder="95"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Waist (cm)</label>
              <input
                type="number"
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
                placeholder="80"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Arms (cm)</label>
              <input
                type="number"
                value={arms}
                onChange={(e) => setArms(e.target.value)}
                placeholder="35"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="How do you feel today?"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-primary outline-none transition-colors text-foreground placeholder:text-foreground/50 text-sm resize-none h-16"
            />
          </div>

          <button onClick={addEntry} className="w-full btn-primary flex items-center justify-center gap-2">
            <Plus size={18} />
            Add Entry
          </button>
        </div>

        {/* Progress summary */}
        {entries.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Weight', progress: progressW, unit: 'kg' },
              { label: 'Chest', progress: progressC, unit: 'cm' },
              { label: 'Waist', progress: progressWa, unit: 'cm' },
              { label: 'Arms', progress: progressA, unit: 'cm' },
            ].map((item) => (
              <div key={item.label} className="glass p-4">
                <p className="text-xs text-foreground/60 mb-1">{item.label}</p>
                {item.progress ? (
                  <>
                    <p className="text-sm font-bold text-foreground mb-1">
                      {item.progress.diff > 0 ? '+' : ''}{item.progress.diff.toFixed(1)} {item.unit}
                    </p>
                    <p className={`text-xs ${item.progress.direction === 'down' ? 'text-green-400' : 'text-orange-400'}`}>
                      {item.progress.direction === 'down' ? '↓' : '↑'} {Math.abs(parseFloat(item.progress.percent))}%
                    </p>
                  </>
                ) : (
                  <p className="text-xs text-foreground/50">Need 2+ entries</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Entries list */}
        {entries.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-bold">Entries History</h3>
            {entries.map((entry) => (
              <div key={entry.id} className="glass p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{entry.date}</p>
                    <p className="text-foreground/70 text-sm">Weight: {entry.weight} kg</p>
                    {(entry.chest || entry.waist || entry.arms) && (
                      <p className="text-foreground/60 text-xs mt-1">
                        {entry.chest && `Chest: ${entry.chest}cm`}
                        {entry.waist && ` • Waist: ${entry.waist}cm`}
                        {entry.arms && ` • Arms: ${entry.arms}cm`}
                      </p>
                    )}
                    {entry.notes && (
                      <p className="text-foreground/60 text-xs mt-2 italic">"{entry.notes}"</p>
                    )}
                  </div>
                  <button
                    onClick={() => deleteEntry(entry.id)}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Trash2 size={18} className="text-red-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {entries.length === 0 && (
          <div className="glass p-8 text-center text-foreground/70">
            <p>No entries yet. Add your first entry to start tracking your progress!</p>
          </div>
        )}

        {/* Info */}
        <div className="glass p-4 text-sm text-foreground/70">
          <p>
            Track your measurements weekly for best results. Progress isn&apos;t always linear—focus on consistency and
            long-term trends.
          </p>
        </div>
      </div>
    </div>
  )
}
