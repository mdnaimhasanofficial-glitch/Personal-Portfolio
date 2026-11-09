import { Reveal } from "@/components/reveal"
import { TiltCard } from "@/components/tilt-card"
import { MediaPreview } from "@/components/media-preview"
import { SectionHeading } from "@/components/sections/about-skills"
import type { ShowcaseItem } from "@/lib/showcase"

export function Showcase({ items }: { items: ShowcaseItem[] }) {
  if (!items.length) return null
  return (
    <section id="showcase" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="05 / Showcase" title="Programs & screens" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.src} delay={(i % 3) * 0.08}>
            <TiltCard className="group glass glow-hover rounded-2xl p-2">
              <MediaPreview image={it.type === "image" ? it.src : undefined} video={it.type === "video" ? it.src : undefined} alt={it.name} />
              <p className="px-2 py-2 text-sm text-white/60 capitalize">{it.name}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
