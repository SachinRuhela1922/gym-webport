'use client'

import { CanvasWrapper } from './CanvasWrapper'
import { MembershipCard3D } from './MembershipCard3D'

export function MembershipCards3D() {
  return (
    <CanvasWrapper className="h-96">
      <ambientLight intensity={0.8} color="#ffffff" />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#8B5CF6" />
      <pointLight position={[-10, -10, 10]} intensity={1} color="#06B6D4" />

      <MembershipCard3D tier="Starter" color="#EC4899" emissiveColor="#EC4899" position={[-3.5, 0, 0]} />
      <MembershipCard3D tier="Pro" color="#8B5CF6" emissiveColor="#8B5CF6" position={[0, 0.5, 0]} />
      <MembershipCard3D tier="Elite" color="#06B6D4" emissiveColor="#06B6D4" position={[3.5, 0, 0]} />
    </CanvasWrapper>
  )
}
