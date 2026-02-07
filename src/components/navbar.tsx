"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/data";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-6xl items-center justify-between border-b border-border/50 bg-background/60 px-6 py-4 backdrop-blur-xl">
        <a
          href="#"
          className="font-mono text-sm font-semibold tracking-tight"
        >
          samuel.dev
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <Button size="sm" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-border/50 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <Button size="sm" className="w-full" asChild>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
