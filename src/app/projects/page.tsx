"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "Battleship Game",
    description:
      "A console-based battle ship game. You can play individually with a programmed battleship player that calculates next moves based on a statistical heat map algorithm. This programmed player won the lecture tournament against 250+ other students.",
    href: "https://github.com/cc1015/BattleSalvoAI",
  },
  {
    id: 2,
    title: "Bullet Journal Application",
    description:
      "Java Journal is an efficient, simple to use calendar app for all your journaling needs. Within the app, you can easily schedule new tasks and events to any given day and add to a weekly task queu. Your Java Journal can also be personalized through the settings. There, you can change your theme : dark, light, or colorful! You can also select how you want your tasks and events to be ordered: by name or duration. ",
    href: "https://github.com/cc1015/JavaJournal",
  },
  {
    id: 3,
    title: "Study File Summarizer and Flashcard Generator",
    description:
      "This program traverses a given root directory and reads the .md files in the directory. It extracts only the headers and double-bracketed phrases from the .md files and writes the extracted text into a single destination file. The extracted information can be sorted by file creation time, modification time, or alphabetically by file name on the destination file. Flashcards can be created for each header and double-bracketed phrase. You can start a study session with the flashcards and label them based on difficulty.",
    href: "https://github.com/cc1015/Study-File-Summarizer-Flashcard-Addition",
  },
  {
    id: 4,
    title: "California Wildfire and Asthma Emergency Department Analysis",
    description:
      "This is an analysis of California wildfires and ashthma-related emergency department visits. A correlation between the overall increase of wildfires in California over time and the increase in asthmatic issues present in the California population over time was found.",
    href: "https://github.com/cc1015/Asthma-Wildfire-Analysis",
  },
  {
    id: 5,
    title: "Data Science Mini-Projects",
    description:
      "This repo contains notebook files of mini data science projects.\n- Condorcet Jury Theorem Simulation\n- Infection Simulation\n- Gene Disease Assocation Exploration\n- Tree Density Map of Boston\n- Crime and Cannabis Correlation in Boston",
    href: "https://github.com/cc1015/data-science-mini-projects",
  },
  {
    id: 6, 
    title: "Personal Website",
    description:
      "This website! Made with React and Tailwind CSS, deployed with Vercel.",
    href: "https://github.com/cc1015/cha-curie-portfolio",
  }

];

export default function Base() {
  const [expandedItemIds, setExpandedItemIds] = useState<number[]>([]); // Store multiple expanded items

  // Toggle the expansion of a specific item
  const handleToggle = (id: number) => {
    setExpandedItemIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((itemId) => itemId !== id)
        : [...prevIds, id]
    );
  };

  return (
    <main className="flex overflow-y-auto">
      <div className="flex flex-col sm:items-start w-1/2 sticky top-0 relative group inline-block">
        <Image
          src="/swallows_tail_cellos.jpg"
          alt="personal photo"
          className="object-contain"
          layout="intrinsic"
          width={500} 
          height={300}
        />
        <div className="absolute h-full opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end bg-black/50 p-4">
          <div className="text-center text-gray-300">
          Swallow’s Tail and Cellos (Catastrophes Series), Dali
            <br />
            <br />
            Credit: © 2014 Salvador Dalí, Fundació Gala-Salvador Dalí, Figueres
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-1 items-start mx-8 sm:mx-16 w-3/4 overflow-y-auto">
      <h1 className="text-xl">Projects</h1>
      {projects.map((project) => (
        <div key={project.id} className="mb-4 pb-4">
          <button
            onClick={() => handleToggle(project.id)}
            className={`font-bold px-2 text-left underline hover:text-yellow-400 ${
              expandedItemIds.includes(project.id) ? "text-yellow-400" : ""
            }`}
          >
            {project.title}
          </button>

          {expandedItemIds.includes(project.id) && (
            <div className="mt-2">
              <a
                href={project.href}
                target="_blank"
                className="flex items-center hover:text-yellow-400"
              ><FaGithub size={24} />
              </a>{" "}
              <p
                  dangerouslySetInnerHTML={{
                    __html: project.description.replace(/\n/g, "<br />"),
                  }}
                ></p>
            </div>
          )}
        </div>
      ))}
      </div>
    </main>
  );
}
