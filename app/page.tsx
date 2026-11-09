import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { About, Skills } from "@/components/sections/about-skills"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { Showcase } from "@/components/sections/showcase"
import { Contact, Footer } from "@/components/sections/contact-footer"
import { getShowcase } from "@/lib/showcase"

export default async function Page() {
  const items = await getShowcase()
  return (
    <>
      <Navbar showcase={items.length > 0} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Showcase items={items} />
        <Contact />
      </main>
      <Footer showcase={items.length > 0} />
    </>
  )
}
