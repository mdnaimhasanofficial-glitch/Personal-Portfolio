"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import type { Group } from "three"

function Shapes() {
  const g = useRef<Group>(null)
  const m = useRef({ x: 0, y: 0 })
  useEffect(() => {
    const on = (e: PointerEvent) => {
      m.current.x = (e.clientX / window.innerWidth) * 2 - 1
      m.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener("pointermove", on, { passive: true })
    return () => window.removeEventListener("pointermove", on)
  }, [])
  useFrame((_, dt) => {
    if (!g.current) return
    g.current.rotation.x += dt * (0.15 + m.current.y * 0.4)
    g.current.rotation.y += dt * (0.25 + m.current.x * 0.4)
  })
  return (
    <group ref={g}>
      <mesh>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh>
        <octahedronGeometry args={[0.8]} />
        <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.8} />
      </mesh>
    </group>
  )
}

export default function HeroScene({ active }: { active: boolean }) {
  return (
    <Canvas frameloop={active ? "always" : "never"} dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ antialias: false, powerPreference: "low-power" }}>
      <Shapes />
    </Canvas>
  )
}
