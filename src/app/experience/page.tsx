"use client";

import { useState } from "react";

const workitems = [
  {
    id: 1,
    title: "Research Informatics Co-op, Tango Therapeutics",
    description:
      "•  Full stack development of Django application connecting scientists to internal and external data warehouse. \n•  Developed pipeline to integrate third-party experimental assay software into internal application, eliminating manual requests and enabling 100% user-driven computations and experimental data analysis.\n• Fine-tuned machine learning model for chemical compound property prediction, informing drug-discovery decisions.",
  },
  {
    id: 2,
    title: "Lab Manager, Language and Mind Lab",
    description:
      "• Designed and coded psychology experiments on dualism and the innateness of dualism for 200+ in-person participants using E-Prime.\n• Trained, supervised, and scheduled 20+ research assistants to conduct in-person psychological experiments.",
  },
  {
    id: 3,
    title: "Research Assistant, Massachusetts General Hospital",
    description:
      "• Labeled major arteries in lower lung lobotomy videos for a machine learning model using CVAT annotation tool.",
  },
];

const leaderitems = [
  {
    id: 4,
    title: "Tech Lead, ViTAL Healthcare Hackathon Organizing Team",
    description:
      "• Define hackathon prompt, integrating real-world issues in healthcare and technology.\n• Design and develop hackathon event website using React and Tailwind CSS.",
  },
];

const teachingitems = [
  {
    id: 5,
    title: "Peer Tutor, Object Oriented Design and Algorithms and Data",
    description:
      "• Taught students object-oriented design principles and algorithms to complete technical problem sets and projects.",
  },
  {
    id: 6,
    title: "Teaching Assistant, Discrete Structures",
    description:
      "• Guided and explained coursework to students during weekly office hours, graded assignments and exams.",
  },
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
    <main className="flex sm:items-start h-screen">
      <div className="flex flex-col space-y-1 items-start mx-8 sm:mx-16 w-1/2 overflow-y-auto">
        <h1 className="text-xl">Work</h1>
        {workitems.map((workitem) => (
          <div key={workitem.id} className="mb-4 pb-4 whitespace-pre-line">
            <button
              onClick={() => handleToggle(workitem.id)}
              className={`px-2 text-left hover:underline ${
                expandedItemIds.includes(workitem.id) ? "underline" : ""
              }`}
            >
              {workitem.title}
            </button>

            {expandedItemIds.includes(workitem.id) && (
              <div className="mt-2">{workitem.description}</div>
            )}
          </div>
        ))}

        <h1 className="text-xl">Leadership</h1>
        {leaderitems.map((leaderitem) => (
          <div key={leaderitem.id} className="mb-4 pb-4 whitespace-pre-line">
            <button
              onClick={() => handleToggle(leaderitem.id)}
              className={`px-2 text-left hover:underline ${
                expandedItemIds.includes(leaderitem.id) ? "underline" : ""
              }`}
            >
              {leaderitem.title}
            </button>

            {expandedItemIds.includes(leaderitem.id) && (
              <div className="mt-2">{leaderitem.description}</div>
            )}
          </div>
        ))}

        <h1 className="text-xl">Teaching</h1>
        {teachingitems.map((teachitem) => (
          <div key={teachitem.id} className="mb-4 pb-4 whitespace-pre-line">
            <button
              onClick={() => handleToggle(teachitem.id)}
              className={`px-2 text-left hover:underline ${
                expandedItemIds.includes(teachitem.id) ? "underline" : ""
              }`}
            >
              {teachitem.title}
            </button>

            {expandedItemIds.includes(teachitem.id) && (
              <div className="mt-2">{teachitem.description}</div>
            )}
          </div>
        ))}

        <h1 className="text-xl">Coursework</h1>
        <ul className="flex-col space-y-1 text-base">
          <h2>BINF6310, Computational Methods in Bioinformatics</h2>
          <h2>CS3000, Algorithms and Data</h2>
          <h2>CS3500, Objects Oriented Design</h2>
          <h2>CS3200, Database Design</h2>
          <h2>DS3000, Foundations of Data Science</h2>
          <h2>CHEM2311, Organic Chemistry</h2>
          <h2>BIOL2301, Genetics and Molecular Biology</h2>
        </ul>
      </div>
      <figure className="flex flex-col sm:items-start w-1/2 sticky top-0">
        <img src='/galatea.jpg' alt="personal photo" className="w-100 h-100 object-contain"
        />
        <figcaption className="mt-2 text-sm italic ">
        Galatea of the Spheres, Dali
          <br />
          <br />
          Credit: © 2014 Salvador Dalí, Fundació Gala-Salvador Dalí, Figueres
        </figcaption>
      </figure>
    </main>
  );
}
