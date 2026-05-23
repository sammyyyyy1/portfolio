import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="mb-8 px-1 py-8 sm:py-12">
      <div className="mb-10 max-w-2xl">
        <p className="section-eyebrow mb-3">Experience</p>
        <h2 className="display-title text-4xl sm:text-5xl">Field notes from teams and systems I have worked on.</h2>
      </div>
      <div className="space-y-5">
        {experiences.map((experience) => (
          <article key={`${experience.company}-${experience.period}`} className="section-frame grid gap-5 px-6 py-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="section-eyebrow mb-2">{experience.period}</p>
              <h3 className="text-xl font-semibold text-foreground">{experience.company}</h3>
              <p className="text-sm text-muted-foreground">{experience.role} · {experience.location}</p>
              <p className="mt-5 text-sm text-foreground">{experience.impactMetric}</p>
            </div>
            <div>
              <p className="mb-4 text-sm leading-6 text-muted-foreground">{experience.context}</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {experience.highlights.map((highlight) => (
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
