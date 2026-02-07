"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Trophy, Rocket } from "lucide-react";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  NarratorRL: <Trophy className="h-5 w-5" />,
  printbnb: <Rocket className="h-5 w-5" />,
};

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      className="group relative rounded-xl border border-border bg-card/50 p-6 transition-colors duration-300 hover:border-border/80 hover:bg-card/80"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50">
            <span className="text-muted-foreground">
              {iconMap[project.title]}
            </span>
          </div>
          <div>
            <h3 className="font-semibold leading-tight">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.subtitle}</p>
          </div>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-muted-foreground transition-colors hover:text-foreground"
            aria-label={`View ${project.title}`}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>

      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <ul className="mb-4 space-y-1.5">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/50" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="text-xs font-normal"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h2>
          <p className="text-muted-foreground">
            Hackathon wins and side projects I&apos;ve shipped.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
