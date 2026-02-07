"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";
import type { Experience } from "@/lib/data";

function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  return (
    <motion.div
      className="group relative grid gap-4 pb-1 sm:grid-cols-[140px_1fr] sm:gap-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline period */}
      <div className="flex flex-col items-start">
        <span className="font-mono text-sm text-muted-foreground">
          {experience.period}
        </span>
        <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground/70">
          <MapPin className="h-3 w-3" />
          {experience.location}
        </div>
      </div>

      {/* Card */}
      <div className="relative rounded-xl border border-border bg-card/50 p-6 transition-colors duration-300 hover:border-border/80 hover:bg-card/80">
        {/* Timeline dot */}
        <div className="absolute -left-[29px] top-7 hidden h-3 w-3 rounded-full border-2 border-border bg-background sm:block" />

        <div className="mb-3 flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50">
            <Briefcase className="h-5 w-5 text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-semibold leading-tight">{experience.company}</h3>
            <p className="text-sm text-muted-foreground">{experience.role}</p>
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {experience.description}
        </p>

        <ul className="mb-4 space-y-1.5">
          {experience.highlights.map((highlight) => (
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
          {experience.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Experience
          </h2>
          <p className="text-muted-foreground">
            Building software across healthcare, cybersecurity, and semiconductors.
          </p>
        </motion.div>

        {/* Timeline line */}
        <div className="relative sm:border-l sm:border-border sm:pl-8">
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.company} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
