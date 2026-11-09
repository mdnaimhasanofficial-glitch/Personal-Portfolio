export type Project = {
  slug: string // thumbnail: public/projects/<slug>.jpg|png|webp, preview video: <slug>.mp4
  title: string
  category: string
  description: string
  stack: string[] // khali [] hole stack dekhabe na
  live?: string
  frontend?: string
  backend?: string
}

export const projects: Project[] = [
  {
    slug: "studiospace",
    title: "StudioSpace",
    category: "Full Stack",
    description: "Studio and workspace booking platform.",
    stack: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    live: "https://studio-space-360.vercel.app/",
    frontend: "https://github.com/mdnaimhasanofficial-glitch/Studio-Space",
    backend: "https://github.com/mdnaimhasanofficial-glitch/Studio-Space-Server",
  },
  {
    slug: "fitlog",
    title: "FitLog",
    category: "Web App",
    description: "Fitness and workout tracking web application.",
    stack: [], // exact stack confirm kore likhun
    live: "https://fit-log-phi-henna.vercel.app/",
  },
  {
    slug: "bazar-dor",
    title: "Bazar Dor",
    category: "Web App",
    description: "Grocery market price tracking web application.",
    stack: [], // exact stack confirm kore likhun
    live: "https://bazar-dor-utn4.vercel.app/",
  },
]
