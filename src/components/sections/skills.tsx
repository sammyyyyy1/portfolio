"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, GraduationCap } from "lucide-react";
import { skillCategories } from "@/lib/data";
import type { SkillCategory } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Languages: <Code2 className="h-5 w-5" />,
  "Backend & Databases": <Database className="h-5 w-5" />,
  "Infrastructure & Tools": <Cloud className="h-5 w-5" />,
  Coursework: <GraduationCap className="h-5 w-5" />,
};

function SkillCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  return (
    <motion.div
      className={`rounded-xl border border-border bg-card/50 p-6 transition-colors duration-300 hover:border-border/80 hover:bg-card/80 ${
        category.span === "wide" ? "md:col-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50">
          <span className="text-muted-foreground">
            {iconMap[category.title]}
          </span>
        </div>
        <h3 className="font-semibold">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.items.map((item) => (
          <Badge
            key={item}
            variant="secondary"
            className="text-sm font-normal"
          >
            {item}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Skills
          </h2>
          <p className="text-muted-foreground">
            Technologies and domains I work with.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
