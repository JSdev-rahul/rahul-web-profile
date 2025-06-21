import { Bot, Cloud, Code, Database, LucideIcon } from "lucide-react";

interface iHighlight {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export const highlights: iHighlight[] = [
  {
    Icon: Code,
    title: "Full Stack Development",
    description:
      "Building end-to-end applications with modern technologies and best practices",
  },
  {
    Icon: Bot,
    title: "AI Automation",
    description:
      "Creating intelligent workflows and agents using n8n and AI technologies",
  },
  {
    Icon: Database,
    title: "Scalable Architecture",
    description:
      "Designing robust backend systems that handle growth and complexity",
  },
  {
    Icon: Cloud,
    title: "DevOps & Deployment",
    description:
      "Implementing CI/CD pipelines and cloud infrastructure for reliable delivery",
  },
];
