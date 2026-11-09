"use client"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"

export function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const spring = { stiffness: 200, damping: 20 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), spring)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), spring)
  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return
        const r = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - r.left) / r.width - 0.5)
        y.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onPointerLeave={() => { x.set(0); y.set(0) }}
    >
      {children}
    </motion.div>
  )
}
