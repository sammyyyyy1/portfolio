import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="mb-8 px-1 py-8 sm:py-12">
      <div className="section-frame px-6 py-6 sm:px-8">
        <p className="section-eyebrow mb-3">Capabilities</p>
        <h2 className="display-title text-4xl sm:text-5xl">Tools and domains I work in.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {skillCategories.map((category) => (
            <section key={category.title} className="rounded-2xl border border-border/70 bg-background/70 p-4">
              <h3 className="mb-3 text-lg font-medium text-foreground">{category.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{category.items.join(" · ")}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}