import { Download, Mail, MessageCircle } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/sections/about-skills"
import { nav, site, waLink } from "@/data/site"

const card = "glass glow-hover flex items-center gap-4 rounded-2xl p-5"

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="06 / Contact" title="Let's work together" />
      <Reveal className="mt-10 grid gap-4 sm:grid-cols-2">
        <a href={waLink} target="_blank" rel="noopener noreferrer" className={card}>
          <MessageCircle className="size-6 text-[#25D366]" />
          <span><b className="block">WhatsApp</b><span className="text-sm text-white/60">{site.phoneLabel}</span></span>
        </a>
        <a href={`mailto:${site.email}`} className={card}>
          <Mail className="size-6 text-cyan-300" />
          <span><b className="block">Email</b><span className="text-sm break-all text-white/60">{site.email}</span></span>
        </a>
        <a href={site.github} target="_blank" rel="noopener noreferrer" className={card}>
          <b>GitHub</b><span className="text-sm text-white/60">Source code & projects</span>
        </a>
        {site.linkedin ? (
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={card}>
            <b>LinkedIn</b><span className="text-sm text-white/60">Let&apos;s connect</span>
          </a>
        ) : (
          <a href={site.cv} download className={card}>
            <Download className="size-6 text-violet-300" />
            <span><b className="block">Download CV</b><span className="text-sm text-white/60">PDF</span></span>
          </a>
        )}
      </Reveal>
    </section>
  )
}

export function Footer({ showcase }: { showcase: boolean }) {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <p className="text-gradient font-semibold">{site.name}</p>
          <p className="text-sm text-white/50">{site.title}</p>
        </div>
        <ul className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
          {nav.filter((l) => showcase || l.id !== "showcase").map((l) => (
            <li key={l.id}><a href={`#${l.id}`} className="hover:text-white">{l.label}</a></li>
          ))}
          <li><a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a></li>
          {site.linkedin && <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>}
          {site.facebook && <li><a href={site.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a></li>}
        </ul>
        <p className="text-xs text-white/40">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  )
}
