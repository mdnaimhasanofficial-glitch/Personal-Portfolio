import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { TiltCard } from "@/components/tilt-card"
import { MediaPreview } from "@/components/media-preview"
import { SectionHeading } from "@/components/sections/about-skills"
import { projects } from "@/data/projects"
import { getProjectMedia } from "@/lib/showcase"

const ghost = "rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition-colors hover:border-cyan-400/60 hover:text-white"

export async function Projects() {
  const media = await Promise.all(projects.map((p) => getProjectMedia(p.slug)))
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="03 / Projects" title="Featured projects" />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <TiltCard className="group glass glow-hover flex h-full flex-col rounded-2xl p-3">
              <MediaPreview image={media[i].image} video={media[i].video} alt={p.title} />
              <div className="flex flex-1 flex-col p-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <span className="rounded-full border border-cyan-400/30 px-2.5 py-0.5 text-xs text-cyan-300">{p.category}</span>
                </div>
                <p className="mt-2 text-sm text-white/60">{p.description}</p>
                {p.stack.length > 0 && <ul className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => <li key={s} className="rounded-md bg-white/5 px-2 py-1 text-xs text-white/70">{s}</li>)}
                </ul>}
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium">
                      Live Demo <ArrowUpRight className="size-4" />
                    </a>
                  )}
                  {p.frontend && <a href={p.frontend} target="_blank" rel="noopener noreferrer" className={ghost}>GitHub Frontend</a>}
                  {p.backend && <a href={p.backend} target="_blank" rel="noopener noreferrer" className={ghost}>GitHub Backend</a>}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
