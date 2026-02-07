// ─── Navigation ───────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
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
  highlights: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    company: "NimbleRx",
    role: "Software Engineer Intern",
    period: "May 2025 – Aug 2025",
    location: "Redwood City, CA",
    description:
      "Built scalable pharmacy infrastructure processing millions of transactions daily, from API architecture to observability.",
    highlights: [
      "Architected a unified GraphQL API layer consolidating SQL queries and RESTful endpoints across distributed pharmacy systems, achieving a 90% reduction in query latency",
      "Engineered and optimized Java/Spring-based services backed by PostgreSQL, processing 1M+ transactions per day with JUnit testing and CI/CD pipelines",
      "Developed backend modules for a FHIR-compliant medical records integration system, enabling secure real-time data exchange supporting millions of prescriptions daily",
      "Enhanced observability by deploying the ELK stack (Elasticsearch, Logstash, Kibana) and AWS CloudWatch, reducing on-call resolution time by 30%",
    ],
    tags: ["Java", "Spring", "GraphQL", "PostgreSQL", "AWS", "ELK Stack"],
  },
  {
    company: "ISARA Corporation",
    role: "Security Software Developer Intern",
    period: "Sep 2024 – Dec 2024",
    location: "Waterloo, ON",
    description:
      "Strengthened post-quantum cryptographic tooling and infrastructure for enterprise security products.",
    highlights: [
      "Automated regression testing workflows with Python, running 3,000+ test cases on schedule to ensure cryptographic compliance and minimize release regressions",
      "Implemented backend enhancements for a cryptographic inventory and risk assessment tool using TypeScript, React, GraphQL, and PostgreSQL, resolving 90% of legacy issues",
      "Deployed secure, scalable infrastructure on AWS (EC2, S3, IAM) and containerized services using Docker, strengthening reliability and access control",
    ],
    tags: ["TypeScript", "React", "GraphQL", "PostgreSQL", "AWS", "Docker", "Python"],
  },
  {
    company: "AMD",
    role: "Product Solutions Engineer Intern",
    period: "Jan 2024 – Apr 2024",
    location: "Markham, ON",
    description:
      "Built GPU benchmarking automation and internal tooling adopted across multiple engineering teams.",
    highlights: [
      "Led development of automated GPU benchmarking pipelines, applying machine learning models to analyze performance metrics and cutting manual validation time by 99%",
      "Delivered production-ready tooling adopted by multiple teams, scaling benchmarking capabilities across AMD's internal test infrastructure",
      "Built full-stack Python/Express dashboards for 100+ engineers, accelerating report generation and improving visibility into GPU performance data",
    ],
    tags: ["Python", "Express", "Machine Learning", "GPU Architecture"],
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
    items: ["Java", "C/C++", "Python", "JavaScript", "TypeScript", "Kotlin", "Bash"],
    span: "wide",
  },
  {
    title: "Backend & Databases",
    items: ["Spring", "PostgreSQL", "REST APIs", "GraphQL", "Firebase", "Express"],
  },
  {
    title: "Infrastructure & Tools",
    items: ["AWS (EC2, S3, IAM, CloudWatch)", "Docker", "Kubernetes", "GCP", "Postman", "Cursor"],
  },
  {
    title: "Coursework",
    items: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Architecture",
      "Database Systems",
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "NarratorRL",
    subtitle: "MetHacks Winner",
    description:
      "An accessibility mobile app for the visually impaired with real-time document scanning and speech output.",
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
    description:
      "A peer-to-peer marketplace connecting students with local 3D printing resources, reaching 100+ active users.",
    highlights: [
      "Architected the platform using Next.js, React, and Firebase (Auth, Firestore, Cloud Functions) with real-time messaging and order tracking",
      "Directed UI/UX design with Figma and led iterative testing cycles",
      "Delivered a full product from concept to deployment",
    ],
    tags: ["Next.js", "React", "Firebase", "Figma"],
    link: "https://printbnb.ca",
  },
];
