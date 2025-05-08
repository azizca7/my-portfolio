import About from "@/components/about"
import Contact from "@/components/contact"
import Projects from "@/components/projects"
import Hero from "@/components/shared/hero"
import Skills from "@/components/skills"
import { Separator } from "@/components/ui/separator"

function HomePage() {
  return (
    <div className=" min-h-screen bg-background text-white ">
      <Hero/>
      <Separator />
      <About/>
      <Separator/>
      <Skills/>
      <Separator/>
      <Projects/>
      <Separator/>
      <Contact/>
    </div>
  )
}

export default HomePage