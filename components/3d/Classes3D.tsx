'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Box } from '@react-three/drei'
import * as THREE from 'three'

function ClassCard({ position, color, delay = 0 }: { position: [number, number, number]; color: string; delay?: number }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = (clock.getElapsedTime() + delay) * 0.5
      groupRef.current.position.y += Math.sin(t) * 0.01
      groupRef.current.rotation.z = Math.sin(t * 0.5) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5} position={position}>
      <group ref={groupRef}>
        {/* Card */}
        <Box args={[1.5, 2, 0.15]}>
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.4}
            metalness={0.6}
            roughness={0.3}
            transparent
            opacity={0.85}
          />
        </Box>

        {/* Accent stripe */}
        <mesh position={[0, 0.8, 0.08]}>
          <planeGeometry args={[1.5, 0.2]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* Corner accent */}
        <mesh position={[0.6, 0.85, 0.1]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={1}
          />
        </mesh>
      </group>
    </Float>
  )
}

export function Classes3D() {
  return (
    <>
      <ambientLight intensity={0.9} color="#ffffff" />
      <pointLight position={[8, 8, 8]} intensity={1.3} color="#8B5CF6" />
      <pointLight position={[-8, -8, 8]} intensity={0.9} color="#06B6D4" />

      <ClassCard position={[-2.5, 0, 0]} color="#EC4899" delay={0} />
      <ClassCard position={[0, 0.5, -0.5]} color="#8B5CF6" delay={1} />
      <ClassCard position={[2.5, 0, 0]} color="#06B6D4" delay={2} />
    </>
  )
}
