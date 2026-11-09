"use client"
import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { Menu, X } from "lucide-react"
import { nav, site } from "@/data/site"

export function Navbar({ showcase }: { showcase: boolean }) {
  const links = nav.filter((l) => showcase || l.id !== "showcase")
  const [active, setActive] = useState("")
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    )
    nav.forEach((l) => { const el = document.getElementById(l.id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-4xl">
      <nav className="glass flex items-center justify-between rounded-full px-5 py-2">
        <a href="#top" className="text-gradient font-semibold">{site.name.split(" ")[1] ?? site.name}</a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="relative block rounded-full px-3 py-1.5 text-sm text-white/70 transition-colors hover:text-white">
                {active === l.id && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/10" />}
                <span className="relative">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-primary hidden rounded-full px-4 py-1.5 text-sm font-medium md:block">Contact</a>
        <button className="md:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      {open && (
        <div className="glass mt-2 flex flex-col gap-1 rounded-2xl p-2 md:hidden">
          {[...links, { id: "contact", label: "Contact" }].filter((l, i, a) => a.findIndex((x) => x.id === l.id) === i).map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-white/80 active:bg-white/10">{l.label}</a>
          ))}
        </div>
      )}
    </header>
  )
}
