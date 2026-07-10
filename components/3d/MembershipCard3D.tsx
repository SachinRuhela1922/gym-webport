'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Box } from '@react-three/drei'
import * as THREE from 'three'

interface MembershipCard3DProps {
  tier: string
  color: string
  emissiveColor: string
  position: [number, number, number]
}

export function MembershipCard3D({ tier, color, emissiveColor, position }: MembershipCard3DProps) {
  const groupRef = useRef<THREE.Group>(null)
  const [isHovered, setIsHovered] = useState(false)

  useFrame(() => {
    if (groupRef.current) {
      if (isHovered) {
        groupRef.current.rotation.x += 0.02
        groupRef.current.rotation.y += 0.02
        groupRef.current.scale.lerp(new THREE.Vector3(1.1, 1.1, 1.1), 0.05)
      } else {
        groupRef.current.rotation.x += 0.003
        groupRef.current.rotation.y += 0.005
        groupRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.05)
      }
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={position}>
      <group
        ref={groupRef}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        {/* Card Front */}
        <Box args={[2, 3, 0.2]} position={[0, 0, 0.1]}>
          <meshStandardMaterial
            color={color}
            emissive={emissiveColor}
            emissiveIntensity={isHovered ? 0.8 : 0.3}
            metalness={0.7}
            roughness={0.2}
            transparent
            opacity={0.9}
          />
        </Box>

        {/* Card Border Glow */}
        <Box args={[2.1, 3.1, 0.05]} position={[0, 0, -0.05]}>
          <meshStandardMaterial
            color={emissiveColor}
            emissive={emissiveColor}
            emissiveIntensity={isHovered ? 1 : 0.4}
            transparent
            opacity={0.5}
          />
        </Box>

        {/* Corner accent lights */}
        <mesh position={[-0.9, 1.4, 0.2]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color={emissiveColor}
            emissive={emissiveColor}
            emissiveIntensity={isHovered ? 1.5 : 0.8}
          />
        </mesh>

        <mesh position={[0.9, -1.4, 0.2]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color={emissiveColor}
            emissive={emissiveColor}
            emissiveIntensity={isHovered ? 1.5 : 0.8}
          />
        </mesh>
      </group>
    </Float>
  )
}
