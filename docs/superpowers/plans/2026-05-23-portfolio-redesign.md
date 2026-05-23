# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the current one-page Next.js portfolio into a warm, editorial `Personal Artifact` design with deeper in-page storytelling, stronger typography, and richer project/experience sections.

**Architecture:** Keep the existing single-page composition in `src/app/page.tsx` and section component structure in `src/components/sections/*`. Implement the redesign by updating global tokens, adding a serif display font, enriching `src/lib/data.ts`, and reshaping the existing section components instead of adding new routes.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion, Vitest, Testing Library

---

## File Map

- Modify: `.gitignore`
- Modify: `package.json`
- Create: `vitest.config.ts`
- Create: `src/test/setup.ts`
- Create: `src/app/page.test.tsx`
- Create: `src/components/sections/hero.test.tsx`
- Create: `src/components/sections/projects.test.tsx`
- Create: `src/components/sections/experience.test.tsx`
- Create: `src/components/sections/skills.test.tsx`
- Create: `src/components/sections/contact.test.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`
- Modify: `src/components/navbar.tsx`
- Modify: `src/components/sections/hero.tsx`
- Modify: `src/components/sections/projects.tsx`
- Modify: `src/components/sections/experience.tsx`
- Modify: `src/components/sections/skills.tsx`
- Modify: `src/components/sections/contact.tsx`
- Modify: `src/lib/data.ts`

## Task 1: Add Test Harness And Page Contract

**Files:**
- Modify: `.gitignore`
- Modify: `package.json`
- Create: `vitest.config.ts`
- Create: `src/test/setup.ts`
- Create: `src/app/page.test.tsx`

- [ ] **Step 1: Add test tooling and ignore brainstorming artifacts**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "test": "vitest run"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.1.0",
    "jsdom": "^25.0.1",
    "vitest": "^2.1.8"
  }
}
```

```gitignore
/.superpowers/
```

- [ ] **Step 2: Add Vitest configuration and shared test setup**

```ts
// vitest.config.ts
import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    css: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

```ts
// src/test/setup.ts
import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "--font-geist-sans" }),
  Geist_Mono: () => ({ variable: "--font-geist-mono" }),
  Cormorant_Garamond: () => ({ variable: "--font-display" }),
}));

vi.mock("framer-motion", () => {
  const make = (tag: string) =>
    React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
      ({ children, ...props }, ref) => React.createElement(tag, { ref, ...props }, children),
    );

  return {
    motion: new Proxy(
      {},
      {
        get: (_, tag: string) => make(tag),
      },
    ),
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});
```

- [ ] **Step 3: Write the failing page-level redesign test**

```tsx
// src/app/page.test.tsx
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("renders the editorial reading order", () => {
    const { container } = render(<Home />);

    expect(screen.getByRole("heading", { name: /selected work/i })).toBeInTheDocument();

    const sectionIds = Array.from(container.querySelectorAll("main section[id]"))
      .map((section) => section.getAttribute("id"));

    expect(sectionIds).toEqual(["hero", "projects", "experience", "skills", "contact"]);
  });
});
```

- [ ] **Step 4: Run the page test to verify the redesign contract fails**

Run: `npm run test -- src/app/page.test.tsx`

Expected: FAIL because the current page does not render a `Selected Work` heading and the section order is still `Hero -> Experience -> Skills -> Projects -> Contact`.

- [ ] **Step 5: Commit the testing bootstrap**

```bash
git add .gitignore package.json vitest.config.ts src/test/setup.ts src/app/page.test.tsx package-lock.json
git commit -m "test: add portfolio redesign harness"
```

## Task 2: Build The Editorial Shell

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`
- Modify: `src/components/navbar.tsx`
- Test: `src/app/page.test.tsx`

- [ ] **Step 1: Add the display serif font to the app layout**

```tsx
// src/app/layout.tsx
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displaySerif = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

<body className={`${geistSans.variable} ${geistMono.variable} ${displaySerif.variable} font-sans antialiased`}>
```

- [ ] **Step 2: Replace the dark glass theme with editorial tokens and utilities**

```css
/* src/app/globals.css */
:root {
  --background: oklch(0.97 0.01 85);
  --foreground: oklch(0.23 0.02 48);
  --card: oklch(0.985 0.01 85);
  --card-foreground: oklch(0.23 0.02 48);
  --primary: oklch(0.41 0.06 38);
  --primary-foreground: oklch(0.98 0.01 85);
  --secondary: oklch(0.94 0.02 80);
  --secondary-foreground: oklch(0.28 0.02 48);
  --muted: oklch(0.94 0.01 80);
  --muted-foreground: oklch(0.48 0.03 45);
  --accent: oklch(0.88 0.03 50);
  --accent-foreground: oklch(0.23 0.02 48);
  --border: oklch(0.84 0.02 75);
  --ring: oklch(0.52 0.05 40);
}

body {
  @apply bg-background text-foreground;
  background-image: radial-gradient(circle at top, oklch(1 0 0 / 0.6), transparent 35%);
}

.page-shell {
  @apply relative mx-auto max-w-6xl px-5 sm:px-8;
}

.section-frame {
  @apply rounded-[2rem] border border-border/70 bg-card/80 shadow-[0_16px_48px_rgba(50,35,20,0.08)];
}

.section-eyebrow {
  @apply font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground;
}

.display-title {
  font-family: var(--font-display);
  letter-spacing: -0.04em;
}
```

- [ ] **Step 3: Reorder the page and restyle the nav around the new shell**

```tsx
// src/app/page.tsx
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="page-shell pb-16 pt-24 sm:pt-28">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
```

```tsx
// src/components/navbar.tsx
<header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/88 backdrop-blur-xl">
  <nav className="page-shell flex h-16 items-center justify-between">
    <a href="#hero" className="font-mono text-sm tracking-[0.18em] text-muted-foreground uppercase">
      Samuel Zheng
    </a>
    <ul className="hidden items-center gap-6 md:flex">
      {navItems.map((item) => (
        <li key={item.href}>
          <a href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
</header>
```

- [ ] **Step 4: Run the page test and lint to verify the shell passes the contract**

Run: `npm run test -- src/app/page.test.tsx && npm run lint`

Expected: PASS for `src/app/page.test.tsx`; eslint completes without new errors.

- [ ] **Step 5: Commit the shell redesign**

```bash
git add src/app/layout.tsx src/app/page.tsx src/app/globals.css src/components/navbar.tsx
git commit -m "feat: add editorial portfolio shell"
```

## Task 3: Implement Hero And Selected Work

**Files:**
- Modify: `src/lib/data.ts`
- Modify: `src/components/sections/hero.tsx`
- Modify: `src/components/sections/projects.tsx`
- Test: `src/components/sections/hero.test.tsx`
- Test: `src/components/sections/projects.test.tsx`

- [ ] **Step 1: Write the failing tests for the authored intro and featured work modules**

```tsx
// src/components/sections/hero.test.tsx
import { render, screen } from "@testing-library/react";
import { Hero } from "./hero";

describe("Hero", () => {
  it("renders the authored intro and proof points", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { name: /software engineer building reliable systems, useful products, and thoughtful technical work/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(/1m\+ daily transactions/i)).toBeInTheDocument();
    expect(screen.getByText(/90% latency reduction/i)).toBeInTheDocument();
    expect(screen.getByText(/100\+ active users/i)).toBeInTheDocument();
  });
});
```

```tsx
// src/components/sections/projects.test.tsx
import { render, screen } from "@testing-library/react";
import { Projects } from "./projects";

describe("Projects", () => {
  it("renders selected work with why-it-mattered storytelling", () => {
    render(<Projects />);

    expect(screen.getByRole("heading", { name: /selected work/i })).toBeInTheDocument();
    expect(screen.getAllByText(/why it mattered/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/methacks winner/i)).toBeInTheDocument();
    expect(screen.getByText(/100\+ active users/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the section tests to verify they fail against the current UI**

Run: `npm run test -- src/components/sections/hero.test.tsx src/components/sections/projects.test.tsx`

Expected: FAIL because the current hero headline and project cards do not contain the new editorial copy or the `why it mattered` treatment.

- [ ] **Step 3: Expand project data to support featured editorial stories**

```ts
// src/lib/data.ts
export interface Project {
  title: string;
  subtitle: string;
  description: string;
  thesis: string;
  whyItMattered: string;
  impactMetric: string;
  highlights: string[];
  tags: string[];
  featured: boolean;
  link?: string;
}

export const projects: Project[] = [
  {
    title: "NarratorRL",
    subtitle: "MetHacks Winner",
    description: "An accessibility mobile app for the visually impaired with real-time document scanning and speech output.",
    thesis: "A mobile accessibility tool that turned document scanning into a faster, more legible experience.",
    whyItMattered: "It combined product empathy with practical ML and OCR workflows for an underserved user group.",
    impactMetric: "30% improvement in legibility verification accuracy",
    featured: true,
    highlights: [
      "Engineered with React Native, Expo, and a Django REST API for OCR and text-to-speech pipelines",
      "Fine-tuned Cohere NLP models to classify and summarize text, improving legibility verification accuracy by 30%",
      "Recognized by judges for technical impact and accessibility design",
    ],
    tags: ["React Native", "Expo", "Django", "Cohere NLP", "OCR"],
    link: "https://devpost.com/software/narratorrl",
  },
  {
    title: "printbnb",
    subtitle: "Co-Founder / Full-Stack Developer",
    description: "A peer-to-peer marketplace connecting students with local 3D printing resources, reaching 100+ active users.",
    thesis: "A student marketplace built from product sketch to a functioning campus platform.",
    whyItMattered: "It proved the ability to combine product thinking, visual design, and full-stack execution in one build.",
    impactMetric: "100+ active users",
    featured: true,
    highlights: [
      "Architected the platform using Next.js, React, and Firebase (Auth, Firestore, Cloud Functions) with real-time messaging and order tracking",
      "Directed UI/UX design with Figma and led iterative testing cycles",
      "Delivered a full product from concept to deployment",
    ],
    tags: ["Next.js", "React", "Firebase", "Figma"],
    link: "https://printbnb.ca",
  },
];
```

- [ ] **Step 4: Implement the new hero and selected-work layouts**

```tsx
// src/components/sections/hero.tsx
export function Hero() {
  return (
    <section id="hero" className="section-frame mb-8 overflow-hidden px-6 py-10 sm:px-10 sm:py-14">
      <p className="section-eyebrow mb-5">Software Engineer · Waterloo CS</p>
      <h1 className="display-title max-w-4xl text-5xl leading-none text-foreground sm:text-7xl">
        Software engineer building reliable systems, useful products, and thoughtful technical work.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
        I am Samuel Zheng. I build software across healthcare infrastructure, security tooling, semiconductor workflows,
        and student-founded products.
      </p>
      <dl className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
          <dt className="section-eyebrow mb-2">Scale</dt>
          <dd className="text-sm text-foreground">1M+ daily transactions</dd>
        </div>
        <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
          <dt className="section-eyebrow mb-2">Performance</dt>
          <dd className="text-sm text-foreground">90% latency reduction</dd>
        </div>
        <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
          <dt className="section-eyebrow mb-2">Product</dt>
          <dd className="text-sm text-foreground">100+ active users</dd>
        </div>
      </dl>
    </section>
  );
}
```

```tsx
// src/components/sections/projects.tsx
export function Projects() {
  return (
    <section id="projects" className="mb-8 px-1 py-8 sm:py-12">
      <div className="mb-10 max-w-2xl">
        <p className="section-eyebrow mb-3">Selected Work</p>
        <h2 className="display-title text-4xl sm:text-5xl">A few projects that feel representative of how I like to build.</h2>
      </div>

      <div className="space-y-6">
        {projects.filter((project) => project.featured).map((project) => (
          <article key={project.title} className="section-frame grid gap-6 px-6 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="section-eyebrow mb-3">{project.subtitle}</p>
              <h3 className="display-title text-3xl">{project.title}</h3>
              <p className="mt-4 text-muted-foreground">{project.thesis}</p>
              <div className="mt-6 rounded-2xl bg-secondary/60 p-4">
                <p className="section-eyebrow mb-2">Why it mattered</p>
                <p className="text-sm leading-6 text-foreground">{project.whyItMattered}</p>
              </div>
            </div>
            <div>
              <p className="section-eyebrow mb-2">Impact</p>
              <p className="mb-5 text-lg text-foreground">{project.impactMetric}</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {project.highlights.map((highlight) => (
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
```

- [ ] **Step 5: Run the hero and selected-work tests**

Run: `npm run test -- src/components/sections/hero.test.tsx src/components/sections/projects.test.tsx`

Expected: PASS.

- [ ] **Step 6: Commit the authored opening and selected work redesign**

```bash
git add src/lib/data.ts src/components/sections/hero.tsx src/components/sections/projects.tsx src/components/sections/hero.test.tsx src/components/sections/projects.test.tsx
git commit -m "feat: redesign hero and selected work"
```

## Task 4: Reshape Experience, Capabilities, And Closing Note

**Files:**
- Modify: `src/lib/data.ts`
- Modify: `src/components/sections/experience.tsx`
- Modify: `src/components/sections/skills.tsx`
- Modify: `src/components/sections/contact.tsx`
- Test: `src/components/sections/experience.test.tsx`
- Test: `src/components/sections/skills.test.tsx`
- Test: `src/components/sections/contact.test.tsx`

- [ ] **Step 1: Write the failing section tests for the lower half of the page**

```tsx
// src/components/sections/experience.test.tsx
import { render, screen } from "@testing-library/react";
import { Experience } from "./experience";

describe("Experience", () => {
  it("renders editorial field notes with impact metrics", () => {
    render(<Experience />);

    expect(screen.getByRole("heading", { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByText(/field notes from teams and systems i have worked on/i)).toBeInTheDocument();
    expect(screen.getByText(/1m\+ transactions per day/i)).toBeInTheDocument();
  });
});
```

```tsx
// src/components/sections/skills.test.tsx
import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  it("renders the quieter capabilities framing", () => {
    render(<Skills />);

    expect(screen.getByRole("heading", { name: /capabilities/i })).toBeInTheDocument();
    expect(screen.getByText(/tools and domains i work in/i)).toBeInTheDocument();
  });
});
```

```tsx
// src/components/sections/contact.test.tsx
import { render, screen } from "@testing-library/react";
import { Contact } from "./contact";

describe("Contact", () => {
  it("renders the personal closing note", () => {
    render(<Contact />);

    expect(screen.getByRole("heading", { name: /let's keep in touch/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /samuel.zheng@uwaterloo.ca/i })).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the section tests to verify they fail first**

Run: `npm run test -- src/components/sections/experience.test.tsx src/components/sections/skills.test.tsx src/components/sections/contact.test.tsx`

Expected: FAIL because the current section copy and hierarchy are still resume-style and generic.

- [ ] **Step 3: Expand experience data to support editorial snapshots**

```ts
// src/lib/data.ts
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  context: string;
  impactMetric: string;
  highlights: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    company: "NimbleRx",
    role: "Software Engineer Intern",
    period: "May 2025 – Aug 2025",
    location: "Redwood City, CA",
    description: "Built scalable pharmacy infrastructure processing millions of transactions daily, from API architecture to observability.",
    context: "Worked on high-volume healthcare systems where correctness, observability, and latency all mattered at once.",
    impactMetric: "1M+ transactions per day",
    highlights: [
      "Architected a unified GraphQL API layer consolidating SQL queries and RESTful endpoints across distributed pharmacy systems, achieving a 90% reduction in query latency",
      "Engineered and optimized Java/Spring-based services backed by PostgreSQL, processing 1M+ transactions per day with JUnit testing and CI/CD pipelines",
      "Enhanced observability by deploying the ELK stack and AWS CloudWatch, reducing on-call resolution time by 30%",
    ],
    tags: ["Java", "Spring", "GraphQL", "PostgreSQL", "AWS", "ELK Stack"],
  },
  {
    company: "ISARA Corporation",
    role: "Security Software Developer Intern",
    period: "Sep 2024 – Dec 2024",
    location: "Waterloo, ON",
    description: "Strengthened post-quantum cryptographic tooling and infrastructure for enterprise security products.",
    context: "Worked on security-focused internal tooling where reliability, automation, and compliance mattered more than surface polish.",
    impactMetric: "3,000+ scheduled regression tests",
    highlights: [
      "Automated regression testing workflows with Python, running 3,000+ test cases on schedule to ensure cryptographic compliance and minimize release regressions",
      "Implemented backend enhancements for a cryptographic inventory and risk assessment tool using TypeScript, React, GraphQL, and PostgreSQL, resolving 90% of legacy issues",
      "Deployed secure, scalable infrastructure on AWS and containerized services using Docker, strengthening reliability and access control",
    ],
    tags: ["TypeScript", "React", "GraphQL", "PostgreSQL", "AWS", "Docker", "Python"],
  },
  {
    company: "AMD",
    role: "Product Solutions Engineer Intern",
    period: "Jan 2024 – Apr 2024",
    location: "Markham, ON",
    description: "Built GPU benchmarking automation and internal tooling adopted across multiple engineering teams.",
    context: "Built internal systems for hardware teams where performance analysis and developer time savings were the central outcomes.",
    impactMetric: "99% manual validation time reduced",
    highlights: [
      "Led development of automated GPU benchmarking pipelines, applying machine learning models to analyze performance metrics and cutting manual validation time by 99%",
      "Delivered production-ready tooling adopted by multiple teams, scaling benchmarking capabilities across AMD's internal test infrastructure",
      "Built full-stack Python/Express dashboards for 100+ engineers, accelerating report generation and improving visibility into GPU performance data",
    ],
    tags: ["Python", "Express", "Machine Learning", "GPU Architecture"],
  },
];
```

- [ ] **Step 4: Implement editorial experience, quieter capabilities, and a warmer contact section**

```tsx
// src/components/sections/experience.tsx
export function Experience() {
  return (
    <section id="experience" className="mb-8 px-1 py-8 sm:py-12">
      <div className="mb-10 max-w-2xl">
        <p className="section-eyebrow mb-3">Experience</p>
        <h2 className="display-title text-4xl sm:text-5xl">Field notes from teams and systems I have worked on.</h2>
      </div>
      <div className="space-y-5">
        {experiences.map((experience) => (
          <article key={experience.company} className="section-frame grid gap-5 px-6 py-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
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
```

```tsx
// src/components/sections/skills.tsx
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
```

```tsx
// src/components/sections/contact.tsx
export function Contact() {
  return (
    <section id="contact" className="px-1 pb-10 pt-8 sm:pt-12">
      <div className="section-frame px-6 py-8 text-center sm:px-10 sm:py-12">
        <p className="section-eyebrow mb-3">Contact</p>
        <h2 className="display-title text-4xl sm:text-5xl">Let's keep in touch.</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground">
          I am always interested in thoughtful engineering work, ambitious product ideas, and conversations with people who care about building useful things well.
        </p>
        <a href="mailto:samuel.zheng@uwaterloo.ca" className="mt-8 inline-block text-lg text-foreground underline decoration-border underline-offset-4">
          samuel.zheng@uwaterloo.ca
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Run the section tests**

Run: `npm run test -- src/components/sections/experience.test.tsx src/components/sections/skills.test.tsx src/components/sections/contact.test.tsx`

Expected: PASS.

- [ ] **Step 6: Commit the lower-page redesign**

```bash
git add src/lib/data.ts src/components/sections/experience.tsx src/components/sections/skills.tsx src/components/sections/contact.tsx src/components/sections/experience.test.tsx src/components/sections/skills.test.tsx src/components/sections/contact.test.tsx
git commit -m "feat: redesign experience capabilities and contact"
```

## Task 5: Polish, Regression Check, And Final Verification

**Files:**
- Modify: `src/components/navbar.tsx`
- Modify: `src/app/globals.css`
- Test: `src/app/page.test.tsx`
- Test: `src/components/sections/*.test.tsx`

- [ ] **Step 1: Write the failing regression test for nav and contact affordances**

```tsx
// src/app/page.test.tsx
it("keeps primary navigation and resume access intact", () => {
  render(<Home />);

  expect(screen.getByRole("link", { name: /resume/i })).toHaveAttribute("href", "/resume.pdf");
  expect(screen.getByRole("link", { name: /contact/i })).toHaveAttribute("href", "#contact");
});
```

- [ ] **Step 2: Run the page test to verify the regression case fails if the nav lost its actions**

Run: `npm run test -- src/app/page.test.tsx`

Expected: FAIL if the redesigned nav no longer exposes a `Resume` action or a `Contact` jump link.

- [ ] **Step 3: Polish the mobile nav, spacing, and final utilities without adding new sections**

```tsx
// src/components/navbar.tsx
<ul className="hidden items-center gap-6 md:flex">
  {navItems.map((item) => (
    <li key={item.href}>
      <a href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
        {item.label}
      </a>
    </li>
  ))}
  <li>
    <Button size="sm" className="rounded-full px-4" asChild>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
    </Button>
  </li>
</ul>
```

```css
/* src/app/globals.css */
@media (max-width: 640px) {
  .display-title {
    letter-spacing: -0.03em;
  }

  .section-frame {
    border-radius: 1.5rem;
  }
}
```

- [ ] **Step 4: Run the full suite and lint**

Run: `npm run test && npm run lint`

Expected: All Vitest suites PASS and eslint completes without errors.

- [ ] **Step 5: Manually verify the redesign in the dev server**

Run: `npm run dev`

Expected: The page loads at `http://localhost:3000` with the new editorial hierarchy, working anchor links, readable mobile layout, and intact resume/social/project links.

- [ ] **Step 6: Commit the final polish**

```bash
git add src/components/navbar.tsx src/app/globals.css src/app/page.test.tsx
git commit -m "feat: polish portfolio redesign"
```

## Self-Review Notes

- Spec coverage: all approved design sections are mapped to tasks: editorial shell, hero, selected work, experience, capabilities, contact, mobile polish, and verification.
- Placeholder scan: removed tentative label choices from the design spec; this plan contains concrete file paths, commands, and code for each task.
- Type consistency: `Project` and `Experience` additions match the planned component usage (`thesis`, `whyItMattered`, `impactMetric`, `context`, `featured`).
