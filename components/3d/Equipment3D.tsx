'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

type Props = {
  position?: [number, number, number]
}

function Dumbbell({ position = [0, 0, 0] }: Props) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.01
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} position={position}>
        {/* Left weight */}
        <mesh position={[-1.5, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
          <meshStandardMaterial color="#DC2626" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Center bar */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.15, 0.15, 2.5, 32]} />
          <meshStandardMaterial color="#A3A3A3" metalness={1} roughness={0.05} />
        </mesh>

        {/* Right weight */}
        <mesh position={[1.5, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
          <meshStandardMaterial color="#DC2626" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>
    </Float>
  )
}

function Barbell({ position = [0, 0, 0] }: Props) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.008
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={groupRef} position={position}>
        {/* Left plates */}
        <mesh position={[-2, 0, 0]}>
          <cylinderGeometry args={[0.7, 0.7, 0.2, 32]} />
          <meshStandardMaterial color="#1F2937" metalness={0.8} roughness={0.2} />
        </mesh>

        <mesh position={[-1.5, 0, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.2, 32]} />
          <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Bar */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.2, 0.2, 3, 32]} />
          <meshStandardMaterial color="#8B5CF6" metalness={1} roughness={0.05} />
        </mesh>

        {/* Right plates */}
        <mesh position={[1.5, 0, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.2, 32]} />
          <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
        </mesh>

        <mesh position={[2, 0, 0]}>
          <cylinderGeometry args={[0.7, 0.7, 0.2, 32]} />
          <meshStandardMaterial color="#1F2937" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  )
}

function Kettlebell({ position = [0, 0, 0] }: Props) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <group position={position}>
        {/* Body */}
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color="#F59E0B" metalness={0.8} roughness={0.15} />
        </mesh>

        {/* Handle */}
        <mesh position={[0, 0.8, 0]}>
          <torusGeometry args={[0.4, 0.12, 16, 100]} />
          <meshStandardMaterial color="#D97706" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  )
}

export function Equipment3D() {
  return (
    <>
      <ambientLight intensity={0.8} color="#ffffff" />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#8B5CF6" />
      <pointLight position={[-5, -5, 5]} intensity={0.8} color="#06B6D4" />

      <Dumbbell position={[-3, 0, 0]} />
      <Barbell position={[0, 0, 0]} />
      <Kettlebell position={[3, 0, 0]} />
    </>
  )
}