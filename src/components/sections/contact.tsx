import { links } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="px-1 pb-10 pt-8 sm:pt-12">
      <div className="section-frame px-6 py-8 text-center sm:px-10 sm:py-12">
        <p className="section-eyebrow mb-3">Contact</p>
        <h2 className="display-title text-4xl sm:text-5xl">Let&apos;s keep in touch.</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground">
          I am always interested in thoughtful engineering work, ambitious product ideas, and conversations with people who care about building useful things well.
        </p>
        <a href={`mailto:${links.email}`} className="mt-8 inline-block text-lg text-foreground underline decoration-border underline-offset-4">
          {links.email}
        </a>
      </div>
    </section>
  );
}