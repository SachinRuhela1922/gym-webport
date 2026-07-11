'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Float } from '@react-three/drei'
import * as THREE from 'three'

function RotatingBackground() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.0005
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, -5]}>
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh key={i} position={[Math.cos((i / 12) * Math.PI * 2) * 4, Math.sin((i / 12) * Math.PI * 2) * 4, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial
            color={['#8B5CF6', '#06B6D4', '#EC4899'][i % 3]}
            emissive={['#8B5CF6', '#06B6D4', '#EC4899'][i % 3]}
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

function CounterText({ number, label, position }: { number: string; label: string; position: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5} position={position}>
      <group>
        <Text
          
          fontSize={1.5}
          color="#8B5CF6"
          anchorX="center"
          anchorY="middle"
          position={[0, 0.5, 0]}
        >
          {number}
        </Text>
        <Text
          
          fontSize={0.5}
          color="#06B6D4"
          anchorX="center"
          anchorY="middle"
          position={[0, -0.5, 0]}
        >
          {label}
        </Text>
      </group>
    </Float>
  )
}

export function Stats3D() {
  return (
    <>
      <ambientLight intensity={1} color="#ffffff" />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#8B5CF6" />
      <pointLight position={[-10, -10, 10]} intensity={1} color="#06B6D4" />

      <RotatingBackground />

      <CounterText number="500+" label="Transformations" position={[-3, 1, 0]} />
      <CounterText number="9.8★" label="Satisfaction" position={[0, 1, 0]} />
      <CounterText number="95%" label="Goal Achievement" position={[3, 1, 0]} />
    </>
  )
}
