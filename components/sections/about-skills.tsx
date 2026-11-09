import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { site, skills } from "@/data/site"

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal>
      <p className="font-mono text-sm text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </Reveal>
  )
}

const chip = "rounded-lg bg-white/5 px-3 py-1.5 text-sm text-white/75 transition-all hover:-translate-y-0.5 hover:bg-cyan-400/10 hover:text-cyan-200"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="01 / About" title="About me" />
      <div className="mt-8 grid gap-8 md:grid-cols-[260px_1fr]">
        <Reveal>
          <div className="glass glow-hover rounded-2xl p-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image src={site.photo} alt={site.name} fill sizes="260px" className="object-cover object-top" />
            </div>
            <p className="px-2 pt-3 pb-1 text-center text-sm text-white/60">{site.location}</p>
          </div>
        </Reveal>
        <div className="space-y-6">
          <Reveal className="space-y-4 text-white/70">
            {site.about.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
          <Reveal delay={0.1} className="glass rounded-2xl p-6">
            <h3 className="font-semibold">Current learning focus</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.learning.map((s) => <li key={s} className={chip}>{s}</li>)}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="02 / Skills" title="Technologies I work with" />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.08}>
            <div className="glass glow-hover h-full rounded-2xl p-6">
              <h3 className="text-gradient text-lg font-semibold">{g.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => <li key={s} className={chip}>{s}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
