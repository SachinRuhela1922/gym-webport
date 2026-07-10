'use client'

import { CanvasWrapper } from './CanvasWrapper'
import { Stats3D } from './Stats3D'

export function Stats3DScene() {
  return (
    <CanvasWrapper className="h-80">
      <Stats3D />
    </CanvasWrapper>
  )
}
