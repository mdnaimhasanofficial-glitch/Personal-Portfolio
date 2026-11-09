"use client"
import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"

const Scene = dynamic(() => import("./hero-scene"), { ssr: false })

// 3D shudhu desktop e, reduced-motion e off, screen er baire gele pause.
export function Hero3D() {
  const ref = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    setEnabled(matchMedia("(min-width: 768px)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches)
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting))
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-full opacity-70 md:w-3/5">
      {enabled && <Scene active={visible} />}
    </div>
  )
}
