'use client'

import { CanvasWrapper } from './CanvasWrapper'
import { Hero3D } from './Hero3D'

export function Hero3DScene() {
  return (
    <CanvasWrapper className="h-screen">
      <Hero3D />
    </CanvasWrapper>
  )
}
