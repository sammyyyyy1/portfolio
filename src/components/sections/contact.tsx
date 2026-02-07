"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { links } from "@/lib/data";

const socials = [
  {
    label: "GitHub",
    href: links.github,
    icon: <Github className="h-4 w-4" />,
  },
  {
    label: "LinkedIn",
    href: links.linkedin,
    icon: <Linkedin className="h-4 w-4" />,
  },
  {
    label: "Email",
    href: `mailto:${links.email}`,
    icon: <Mail className="h-4 w-4" />,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-6 pb-12 pt-24 sm:pt-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-md text-muted-foreground">
            I&apos;m always open to chatting about new opportunities, interesting
            projects, or anything tech. Reach out anytime.
          </p>
          <a
            href={`mailto:${links.email}`}
            className="mt-6 inline-block font-mono text-sm text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
          >
            {links.email}
          </a>
        </motion.div>

        <Separator className="mb-8" />

        <motion.footer
          className="flex flex-col items-center justify-between gap-4 sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-muted-foreground">
            Samuel Zheng &copy; {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={
                  social.label !== "Email"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                aria-label={social.label}
              >
                {social.icon}
                {social.label}
              </a>
            ))}
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
