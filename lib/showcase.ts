import { access, readdir } from "node:fs/promises"
import path from "node:path"

const IMG = /\.(png|jpe?g|webp|avif|gif)$/i
const VID = /\.(mp4|webm)$/i
const pub = (...p: string[]) => path.join(process.cwd(), "public", ...p)

export type ShowcaseItem = { src: string; type: "image" | "video"; name: string }

// public/showcase er shob picture/video build er somoy auto-read hoy.
export async function getShowcase(): Promise<ShowcaseItem[]> {
  try {
    const files = (await readdir(pub("showcase"))).sort()
    return files
      .filter((f) => IMG.test(f) || VID.test(f))
      .map((f) => ({
        src: `/showcase/${encodeURIComponent(f)}`,
        type: VID.test(f) ? "video" : "image",
        name: f.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " "),
      }))
  } catch {
    return []
  }
}

const exists = (rel: string) => access(pub(rel)).then(() => true, () => false)

export async function getProjectMedia(slug: string) {
  let image: string | undefined
  for (const ext of ["webp", "jpg", "jpeg", "png"]) {
    if (await exists(`projects/${slug}.${ext}`)) { image = `/projects/${slug}.${ext}`; break }
  }
  const video = (await exists(`projects/${slug}.mp4`)) ? `/projects/${slug}.mp4` : undefined
  return { image, video }
}
