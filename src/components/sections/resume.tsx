import { Download, ExternalLink } from "lucide-react";

const resumePath = "/resume.pdf";

export function Resume() {
  return (
    <section id="resume" className="mb-8 px-1 py-8 sm:py-12">
      <div className="mb-8 max-w-2xl">
        <p className="section-eyebrow mb-3">Resume</p>
        <h2 className="display-title text-4xl sm:text-5xl">The full version, right here.</h2>
        <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
          View my current resume in the page, open it in a new tab, or download a copy.
        </p>
      </div>

      <div className="section-frame overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 px-5 py-4 sm:px-6">
          <p className="text-sm font-medium text-foreground">Samuel Zheng Resume</p>
          <div className="flex flex-wrap gap-2">
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ExternalLink size={16} aria-hidden="true" />
              View PDF
            </a>
            <a
              href={resumePath}
              download="samuel-zheng-resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Download size={16} aria-hidden="true" />
              Download PDF
            </a>
          </div>
        </div>

        <iframe
          src={resumePath}
          className="h-[70vh] min-h-[520px] w-full bg-background"
          title="Samuel Zheng resume"
        />
      </div>
    </section>
  );
}
