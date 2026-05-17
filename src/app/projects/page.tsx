"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import PageSkeleton from "../components/PageSkeleton";

type Project = {
  title: string;
  description: string;
  tech: string[];
  href: string;
};

const projects: Project[] = [
  {
    title: "Battleship Game",
    description:
      "A console-based Battleship game playable against a programmed opponent that calculates next moves with a statistical heat-map algorithm. The programmed player won the lecture tournament against 250+ other students.",
    tech: ["Java"],
    href: "https://github.com/cc1015/BattleSalvoAI",
  },
  {
    title: "California Wildfire and Asthma Emergency Department Analysis",
    description:
      "An analysis of California wildfires and asthma-related emergency department visits. A correlation between the overall increase of wildfires in California over time and the increase in asthmatic issues present in the California population over time was found.",
    tech: ["Python", "Pandas"],
    href: "https://github.com/cc1015/Asthma-Wildfire-Analysis",
  },
  {
    title: "Data Science Mini-Projects",
    description:
      "A collection of notebook files of mini data science projects.\n— Condorcet Jury Theorem Simulation\n— Infection Simulation\n— Gene Disease Association Exploration\n— Tree Density Map of Boston\n— Crime and Cannabis Correlation in Boston",
    tech: ["Python", "Jupyter"],
    href: "https://github.com/cc1015/data-science-mini-projects",
  },
  {
    title: "Bullet Journal Application",
    description:
      "Java Journal is an efficient, simple-to-use calendar app for journaling. Schedule tasks and events on any given day, add to a weekly task queue, switch between dark / light / colorful themes, and order entries by name or duration.",
    tech: ["Java"],
    href: "https://github.com/cc1015/JavaJournal",
  },
  {
    title: "Study File Summarizer and Flashcard Generator",
    description:
      "Traverses a root directory, reads its .md files, and extracts headers and double-bracketed phrases into a single destination file (sorted by creation time, modification time, or name). Generates flashcards for each entry and supports difficulty-labeled study sessions.",
    tech: ["Python"],
    href: "https://github.com/cc1015/Study-File-Summarizer-Flashcard-Addition",
  },
  {
    title: "Personal Website",
    description:
      "This website! Made with React, Next.js, Tailwind CSS, deployed with Vercel.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
    href: "https://github.com/cc1015/cha-curie-portfolio",
  },
];

export default function Base() {
  return (
    <PageSkeleton>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
        {projects.map((p) => (
          <li key={p.href}>
            <Link
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block group h-full"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base sm:text-lg leading-snug group-hover:text-yellow-400 transition-colors">
                  {p.title}
                </h3>
                <FaGithub
                  size={18}
                  className="shrink-0 mt-1 opacity-60 group-hover:opacity-100 group-hover:text-yellow-400 transition-colors"
                />
              </div>
              <p className="mt-2 text-sm opacity-70 leading-relaxed whitespace-pre-line">
                {p.description}
              </p>
              <div className="mt-3 text-[10px] sm:text-xs uppercase tracking-[0.15em] opacity-50">
                {p.tech.join("  ·  ")}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </PageSkeleton>
  );
}
