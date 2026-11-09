"use client"
import { motion, useReducedMotion } from "motion/react"
import { ArrowUpRight, Download } from "lucide-react"
import { Hero3D } from "@/components/three/hero-3d"
import { site, waLink } from "@/data/site"

export function Hero() {
  const reduce = useReducedMotion()
  const fade = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: d },
  }) as const
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden px-6 pt-24"
      style={{ backgroundImage: "radial-gradient(520px circle at var(--mx,70%) var(--my,30%), rgba(34,211,238,.14), transparent 60%)" }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`)
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`)
      }}
    >
      <div className="bg-grid absolute inset-0" />
      <Hero3D />
      <div className="relative mx-auto w-full max-w-5xl">
        <motion.p {...fade(0)} className="font-mono text-sm text-cyan-300">Hello, I&apos;m {site.name}</motion.p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">
          {site.title.split(" ").map((w, i) => (
            <span key={i} className="mr-4 inline-block overflow-hidden pb-2 align-bottom">
              <motion.span
                className={`inline-block ${i > 1 ? "text-gradient" : ""}`}
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >{w}</motion.span>
            </span>
          ))}
        </h1>
        <motion.p {...fade(0.6)} className="mt-6 max-w-xl text-lg text-white/65">{site.tagline}</motion.p>
        <motion.div {...fade(0.75)} className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-transform hover:scale-105">
            View Projects <ArrowUpRight className="size-4" />
          </a>
          <a href={site.cv} download className="glass glow-hover inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium">
            <Download className="size-4" /> Download CV
          </a>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="glass glow-hover inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium">
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
