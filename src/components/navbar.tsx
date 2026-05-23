"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/88 backdrop-blur-xl">
      <nav className="page-shell flex h-16 items-center justify-between">
        <a
          href="#hero"
          className="font-mono text-sm tracking-[0.18em] text-muted-foreground uppercase"
        >
          Samuel Zheng
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <Button size="sm" className="rounded-full px-4" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open resume PDF">
                PDF
              </a>
            </Button>
          </li>
        </ul>

        <button
          type="button"
          className="text-muted-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="page-shell overflow-hidden border-t border-border/40 md:hidden"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 text-sm text-foreground font-medium transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Open resume PDF
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
