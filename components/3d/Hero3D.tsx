'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Box } from '@react-three/drei'
import * as THREE from 'three'

function FloatingBox() {
  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Box args={[1, 1, 1]} position={[-2, 0, 0]}>
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Box>
    </Float>
  )
}

function FloatingSphere() {
  return (
    <Float speed={3} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh position={[2, 1, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color="#06B6D4"
          emissive="#06B6D4"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </Float>
  )
}

function FloatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003
      meshRef.current.rotation.y += 0.004
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, -1, 0]}>
        <torusGeometry args={[1, 0.4, 100, 100]} />
        <meshStandardMaterial
          color="#EC4899"
          emissive="#EC4899"
          emissiveIntensity={0.3}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
    </Float>
  )
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0003
      particlesRef.current.rotation.y += 0.0005
    }
  })

  const particleCount = 100
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20
    positions[i + 1] = (Math.random() - 0.5) * 20
    positions[i + 2] = (Math.random() - 0.5) * 20
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#8B5CF6" sizeAttenuation transparent opacity={0.6} />
    </points>
  )
}

export function Hero3D() {
  return (
    <>
      <ambientLight intensity={0.8} color="#ffffff" />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#8B5CF6" />
      <pointLight position={[-10, -10, 5]} intensity={1} color="#06B6D4" />

      <ParticleField />
      <FloatingBox />
      <FloatingSphere />
      <FloatingTorus />
    </>
  )
}
