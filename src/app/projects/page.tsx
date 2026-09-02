"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import PageSkeleton from "../components/PageSkeleton";
import { BATTLESALVO_ART, ORTHOSCOPE_ART } from "./art";

type Project = {
  title: string;
  archived?: boolean;
  description: string;
  tech: string[];
  href: string;
  art?: string;
};

const projects: Project[] = [
  {
    title: "OrthoScope",
    description:
      "An automated tool for protein analysis that retrieves, analyzes, and visualizes protein information across multiple organisms. Starting from a human UniProt entry, it finds orthologs, annotates and aligns sequences with MAFFT, superposes AlphaFold structures in PyMOL for RMSD, and pulls interaction networks from STRING. Results render in a Next.js frontend with an interactive Mol* viewer.",
    tech: ["Python", "FastAPI", "Biopython", "PyMOL", "Next.js"],
    href: "https://github.com/cc1015/orthoscope",
    art: ORTHOSCOPE_ART,
  },
  {
    title: "Battleship Game",
    description:
      "A console-based Battleship game playable against a programmed opponent that calculates next moves with a statistical heat-map algorithm. The programmed player won the lecture tournament against 250+ other students.",
    tech: ["Java"],
    href: "https://github.com/cc1015/BattleSalvoAI",
    art: BATTLESALVO_ART,
  },
  {
    title: "California Wildfire and Asthma Emergency Department Analysis",
    archived: true,
    description:
      "An analysis of California wildfires and asthma-related emergency department visits. A correlation between the overall increase of wildfires in California over time and the increase in asthmatic issues present in the California population over time was found.",
    tech: ["Python", "Pandas"],
    href: "https://github.com/cc1015/Asthma-Wildfire-Analysis",
  },
  {
    title: "Data Science Mini-Projects",
    archived: true,
    description:
      "A collection of notebook files of mini data science projects.\n— Condorcet Jury Theorem Simulation\n— Infection Simulation\n— Gene Disease Association Exploration\n— Tree Density Map of Boston\n— Crime and Cannabis Correlation in Boston",
    tech: ["Python", "Jupyter"],
    href: "https://github.com/cc1015/data-science-mini-projects",
  },
  {
    title: "Bullet Journal Application",
    archived: true,
    description:
      "Java Journal is an efficient, simple-to-use calendar app for journaling. Schedule tasks and events on any given day, add to a weekly task queue, switch between dark / light / colorful themes, and order entries by name or duration.",
    tech: ["Java"],
    href: "https://github.com/cc1015/JavaJournal",
  },
  {
    title: "Study File Summarizer and Flashcard Generator",
    archived: true,
    description:
      "Traverses a root directory, reads its .md files, and extracts headers and double-bracketed phrases into a single destination file (sorted by creation time, modification time, or name). Generates flashcards for each entry and supports difficulty-labeled study sessions.",
    tech: ["Python"],
    href: "https://github.com/cc1015/Study-File-Summarizer-Flashcard-Addition",
  },
  {
    title: "Personal Website",
    archived: true,
    description:
      "This website! Made with React, Next.js, Tailwind CSS, deployed with Vercel.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
    href: "https://github.com/cc1015/cha-curie-portfolio",
  },
];

const rule = "border-[color:var(--rule)]";

function Entry({ project }: { project: Project }) {
  return (
    <li className="h-full">
      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex h-full flex-col border ${rule} transition-colors duration-200 hover:border-yellow-400/70`}
      >
        <div className="flex flex-1 flex-col px-3 py-3 sm:px-4">
          <div className="mb-3 flex items-baseline gap-3">
            <h3 className="flex-1 text-sm leading-snug sm:text-base group-hover:text-yellow-400 transition-colors">
              {project.title}
            </h3>
            <FaGithub
              size={14}
              className="shrink-0 translate-y-[1px] opacity-40 transition-opacity group-hover:opacity-100 group-hover:text-yellow-400"
            />
          </div>

          {project.art && (
            <div className="mb-4 overflow-x-auto">
              <pre
                aria-hidden="true"
                className="w-max select-text font-mono text-[10px] leading-[1.45] sm:text-[11px] md:text-[12px]"
              >
                {project.art}
              </pre>
            </div>
          )}
          <p className="whitespace-pre-line text-xs leading-relaxed opacity-70 sm:text-sm">
            {project.description}
          </p>
          <div className="flex-1" />
          <div className="mt-4 font-mono text-[10px] opacity-55 sm:text-[11px]">
            {project.tech.join(", ")}
          </div>
        </div>
      </Link>
    </li>
  );
}

export default function Base() {
  const shown = projects.filter((project) => !project.archived);

  return (
    <PageSkeleton>
      <ul className="grid list-none grid-cols-1 gap-6 p-0 lg:grid-cols-2">
        {shown.map((project) => (
          <Entry key={project.href} project={project} />
        ))}
      </ul>
    </PageSkeleton>
  );
}
