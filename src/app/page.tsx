import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Resume } from "@/components/sections/resume";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="page-shell pb-16 pt-24 sm:pt-28">
        <Hero />
        <Projects />
        <Resume />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
