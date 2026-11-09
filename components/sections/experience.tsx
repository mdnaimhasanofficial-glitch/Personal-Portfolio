import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/sections/about-skills"
import { education, experience } from "@/data/site"

const cols = [
  { label: "Experience", items: experience },
  { label: "Education & achievements", items: education },
]

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="04 / Experience" title="Experience & education" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {cols.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.08}>
            <div className="glass glow-hover h-full rounded-2xl p-6">
              <h3 className="text-gradient text-lg font-semibold">{c.label}</h3>
              <ol className="mt-5 space-y-5 border-l border-white/10 pl-5">
                {c.items.map((it) => (
                  <li key={it.title} className="relative">
                    <span className="absolute top-1.5 -left-[25px] size-2 rounded-full bg-cyan-400" />
                    <p className="font-medium">{it.title}</p>
                    <p className="text-sm text-white/60">{it.place}{it.period && ` · ${it.period}`}</p>
                    {it.points && (
                      <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-white/60">
                        {it.points.map((p) => <li key={p}>{p}</li>)}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
