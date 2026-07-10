'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

interface CanvasWrapperProps {
  children: React.ReactNode
  className?: string
  dpr?: number
}

export function CanvasWrapper({ children, className = '', dpr = [1, 2] }: CanvasWrapperProps) {
  return (
    <div className={`w-full ${className}`}>
      <Canvas
        dpr={dpr}
        performance={{ min: 0.5, max: 1, debounce: 200 }}
        camera={{ position: [0, 0, 8] }}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  )
}
