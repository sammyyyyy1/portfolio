import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="mb-8 px-1 py-8 sm:py-12">
      <div className="mb-10 max-w-2xl">
        <p className="section-eyebrow mb-3">Selected Work</p>
        <h2 className="display-title text-4xl sm:text-5xl">A few projects that feel representative of how I like to build.</h2>
      </div>

      <div className="space-y-6">
        {projects.filter((project) => project.featured).map((project) => (
          <article key={project.title} className="section-frame grid gap-6 px-6 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="section-eyebrow mb-3">{project.subtitle}</p>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="display-title text-3xl">{project.title}</h3>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    aria-label={`Open ${project.title}`}
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
              <p className="mt-4 text-muted-foreground">{project.thesis}</p>
              <div className="mt-6 rounded-2xl bg-secondary/60 p-4">
                <p className="section-eyebrow mb-2">Why it mattered</p>
                <p className="text-sm leading-6 text-foreground">{project.whyItMattered}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/70 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="section-eyebrow mb-2">Impact</p>
              <p className="mb-5 text-lg text-foreground">{project.impactMetric}</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
