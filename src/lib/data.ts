// ─── Navigation ───────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// ─── Links ────────────────────────────────────────────────────

export const links = {
  github: "https://github.com/sammyyyyy1",
  linkedin: "https://www.linkedin.com/in/samuel-zheng-37898323b/",
  email: "samuel.zheng@uwaterloo.ca",
} as const;

// ─── Experience ───────────────────────────────────────────────

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
    period: "Jan 2026 - Apr 2026",
    location: "Redwood City, CA",
    description:
      "Deployed AI-automated workflows and production product work across pharmacy-facing web, mobile, and backend systems.",
    context:
      "Worked across agentic engineering workflows, Java services, TypeScript/React portals, and Flutter mobile apps for pharmacy infrastructure.",
    impactMetric: "20x sprint velocity acceleration",
    highlights: [
      "Deployed AI-automated workflows using Claude Code and Model Context Protocol (MCP), automating technical design reviews and E2E testing to accelerate sprint velocity by 20x",
      "Architected a backend refactor of Java services using Domain-Driven Design (DDD), reducing code complexity and increasing scalability for autonomous agentic workflows",
      "Spearheaded forward-deployed engineering for refill monetization, designing and implementing projects that reduced churn risk by 95% for high-value Pharmacy and Pharma clients",
      "Developed and maintained mission-critical features across TypeScript/React web portals and Flutter mobile apps, improving prescription fulfillment UX for pharmacy partners and patients",
    ],
    tags: ["Java", "Spring Boot", "TypeScript", "React", "Flutter", "MCP"],
  },
  {
    company: "NimbleRx",
    role: "Software Engineer Intern",
    period: "May 2025 - Aug 2025",
    location: "Redwood City, CA",
    description:
      "Built scalable pharmacy infrastructure processing millions of transactions daily, from API architecture to observability.",
    context: "Worked on high-volume healthcare systems where correctness, observability, and latency all mattered at once.",
    impactMetric: "1M+ transactions per day",
    highlights: [
      "Architected a unified GraphQL API layer consolidating SQL queries and RESTful endpoints across distributed pharmacy systems, achieving an 80% reduction in query latency",
      "Engineered high-throughput Java/Spring microservices backed by PostgreSQL, processing 1M+ daily transactions while reducing database IOPS by 30% through query optimization",
      "Developed a FHIR/HIPAA-compliant medical record lookup system for 6,000+ pharmacies, unlocking a new B2B revenue stream via secure, real-time data exchange",
    ],
    tags: ["Java", "Spring Boot", "GraphQL", "PostgreSQL", "FHIR", "HIPAA"],
  },
  {
    company: "ISARA Corporation",
    role: "Security Software Developer Intern",
    period: "Sep 2024 - Dec 2024",
    location: "Waterloo, ON",
    description:
      "Strengthened post-quantum cryptographic tooling and infrastructure for enterprise security products.",
    context: "Worked on security-focused internal tooling where reliability, automation, and compliance mattered more than surface polish.",
    impactMetric: "3,000+ scheduled regression tests",
    highlights: [
      "Automated regression testing workflows using Python and Bash, integrating system metrics into a unified dashboard for real-time performance bottleneck analysis",
      "Refined a Post-Quantum Cryptographic inventory tool using TypeScript, React, and GraphQL, resolving 90% of legacy technical debt and improving UI responsiveness",
      "Deployed scalable, containerized infrastructure on AWS (EC2, S3, IAM) using Docker, strengthening system reliability and granular access control",
    ],
    tags: ["Python", "Bash", "TypeScript", "React", "GraphQL", "AWS", "Docker"],
  },
  {
    company: "AMD",
    role: "Product Solutions Engineer Intern",
    period: "Jan 2024 - Apr 2024",
    location: "Markham, ON",
    description:
      "Built GPU benchmarking automation and internal tooling adopted across multiple engineering teams.",
    context: "Built internal systems for hardware teams where performance analysis and developer time savings were the central outcomes.",
    impactMetric: "10x test volume increase",
    highlights: [
      "Led development of automated GPU benchmarking pipelines, applying machine learning models to analyze performance metrics on graphics-intensive software, cutting manual validation time by 100%",
      "Increased benchmarking test volume by 10x across AMD's internal test infrastructure",
      "Built full-stack Python/Express dashboards for 100+ engineers, accelerating report generation and improving visibility into GPU performance data",
    ],
    tags: ["Python", "Azure", "TensorFlow", "Express", "GPU Architecture"],
  },
];

// ─── Skills ───────────────────────────────────────────────────

export interface SkillCategory {
  title: string;
  items: string[];
  span?: "wide" | "normal";
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: ["Java", "C/C++", "Python", "JavaScript", "TypeScript", "Kotlin", "Flutter", "Bash", "HTML/CSS"],
    span: "wide",
  },
  {
    title: "Frameworks & Databases",
    items: ["Spring Boot", "PostgreSQL", "MySQL", "GraphQL", "REST APIs", "Firebase", "Express", "Node.js"],
  },
  {
    title: "Infrastructure",
    items: ["AWS (EC2, S3, IAM, CloudWatch)", "Docker", "Kubernetes", "GCP", "Linux", "CI/CD"],
  },
  {
    title: "AI & Tools",
    items: ["Claude Code", "MCP", "Cursor", "LLM Fine-tuning", "Postman", "Git"],
  },
];

// ─── Projects ─────────────────────────────────────────────────

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
    title: "PocketTrader",
    subtitle: "TypeScript / React",
    description: "A tool that streamlines card trading in PTCGP and makes digital collection management fast and intuitive.",
    thesis: "A trading workflow tool for players managing digital card collections.",
    whyItMattered: "It turns a scattered trading process into a faster interface for comparing inventory, wants, and potential trades.",
    impactMetric: "Faster PTCGP trade matching",
    featured: true,
    highlights: [
      "Built with TypeScript and React for a responsive collection-management experience",
      "Designed around quick lookup and trade planning for active players",
      "Focused on practical product flow rather than one-off data display",
    ],
    tags: ["TypeScript", "React", "PTCGP"],
    link: "https://github.com/sammyyyyy1/PocketTrader",
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
  {
    title: "MotiSpectra",
    subtitle: "ConUHacks Winner 2024",
    description: "A computer-vision and ML tool analyzing facial expressions to measure engagement in virtual meetings.",
    thesis: "A meeting engagement tool that translated facial-expression signals into practical feedback.",
    whyItMattered: "It explored how computer vision could make virtual meetings more measurable without requiring extra participant input.",
    impactMetric: "ConUHacks Winner 2024",
    featured: true,
    highlights: [
      "Built expression analysis with Python, OpenCV, and CNN-based models",
      "Created a Next.js frontend for presenting engagement signals cleanly",
      "Recognized at ConUHacks for technical execution and product direction",
    ],
    tags: ["Python", "OpenCV", "CNN", "Next.js"],
    link: "https://github.com/sammyyyyy1/MotiSpectra",
  },
  {
    title: "GPT George",
    subtitle: "CalHacks 2023",
    description: "A GPT-4 powered voice assistant that detects and reacts to emotions in speech.",
    thesis: "A conversational assistant experiment centered on emotional context in voice interactions.",
    whyItMattered: "It combined speech emotion detection with LLM responses to make voice interfaces feel more adaptive.",
    impactMetric: "Emotion-aware voice assistant",
    featured: true,
    highlights: [
      "Integrated Hume AI for emotion detection from speech",
      "Used OpenAI APIs to generate context-aware assistant responses",
      "Built during CalHacks 2023 as an applied multimodal AI prototype",
    ],
    tags: ["GPT-4", "OpenAI API", "Hume AI", "Voice AI"],
    link: "https://github.com/sammyyyyy1/gpt-george",
  },
  {
    title: "Review Recap",
    subtitle: "uOttaHack 5 Winner",
    description: "A Chrome extension that scrapes Amazon product reviews and summarizes insights using NLP.",
    thesis: "A browser tool for turning noisy product reviews into quick buying signals.",
    whyItMattered: "It shortened the product-research loop by extracting patterns from review text directly where people shop.",
    impactMetric: "uOttaHack 5 Winner",
    featured: true,
    highlights: [
      "Built a Chrome extension workflow around Amazon product pages",
      "Scraped review content and summarized recurring themes with NLP",
      "Recognized at uOttaHack 5 for usefulness and execution",
    ],
    tags: ["Chrome Extension", "NLP", "JavaScript"],
    link: "https://github.com/sammyyyyy1/ReviewRecap",
  },
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
];
