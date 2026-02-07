import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="grid-bg relative">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
