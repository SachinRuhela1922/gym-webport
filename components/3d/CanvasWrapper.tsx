'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, ReactNode } from 'react'

interface CanvasWrapperProps {
  children: ReactNode
  className?: string
  dpr?: number | [number, number]
}

export function CanvasWrapper({
  children,
  className = '',
  dpr = [1, 2],
}: CanvasWrapperProps) {
  return (
    <div className={`w-full ${className}`}>
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0, 8], fov: 50 }}
        performance={{ min: 0.5, max: 1, debounce: 200 }}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  )
}