'use client'

import { CanvasWrapper } from './CanvasWrapper'
import { Equipment3D } from './Equipment3D'

export function Equipment3DScene() {
  return (
    <CanvasWrapper className="h-80">
      <Equipment3D />
    </CanvasWrapper>
  )
}
