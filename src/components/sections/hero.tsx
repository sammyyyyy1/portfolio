"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { links } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
            CS @ University of Waterloo &middot; SWE Intern @ NimbleRx
          </div>
        </motion.div>

        <motion.h1
          className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Building scalable systems
          <br />
          <span className="gradient-text">& high-quality software.</span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, I&apos;m Samuel Zheng. Software engineer with experience at
          NimbleRx, ISARA Corporation, and AMD. Passionate about distributed
          systems, developer tooling, and shipping products that matter.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button asChild size="lg">
            <a href="#experience">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={`mailto:${links.email}`} aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
