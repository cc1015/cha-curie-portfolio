"use client";

import { useState } from "react";

const workitems = [
  {
    id: 1,
    title: "Reseach Assistant, Gyori Lab for Computational Biomedicine",
    },
  {
    id: 2,
    title: "Research Informatics Co-op, Tango Therapeutics",
    },
  {
    id: 3,
    title: "Lab Manager, Language and Mind Lab",
    },
];

const leaderitems = [
  {
    id: 4,
    title: "Tech Lead, ViTAL Healthcare Hackathon Organizing Team",
  },
];

const teachingitems = [
  {
    id: 5,
    title: "Teaching Assistant/Peer Tutor",
  },
];

export default function Base() {
  const [expandedItemIds, setExpandedItemIds] = useState<number[]>([]); // Store multiple expanded items

  /*
  // Toggle the expansion of a specific item
  const handleToggle = (id: number) => {
    setExpandedItemIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((itemId) => itemId !== id)
        : [...prevIds, id]
    );
  };
  */

  return (
    <main className="flex sm:items-start h-screen">
      <div className="flex flex-col space-y-1 items-start mx-8 sm:mx-16 w-1/2 overflow-y-auto">
        <h1 className="text-xl">Work</h1>
        {workitems.map((workitem) => (
          <div key={workitem.id} className="mb-4 pb-4 whitespace-pre-line px-2">
            {workitem.title}
          </div>
        ))}

        <h1 className="text-xl">Leadership</h1>
        {leaderitems.map((leaderitem) => (
          <div key={leaderitem.id} className="mb-4 pb-4 whitespace-pre-line px-2">
              {leaderitem.title}
          </div>
        ))}

        <h1 className="text-xl">Teaching</h1>
        {teachingitems.map((teachitem) => (
          <div key={teachitem.id} className="mb-4 pb-4 whitespace-pre-line px-2">
              {teachitem.title}
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:items-start w-1/2 sticky top-0 relative group inline-block">
        <img
          src="/galatea.jpg"
          alt="personal photo"
          className="w-2/3 object-contain"
        />
        <div className="absolute h-full w-2/3 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end bg-black/50 p-4">
          <div className="text-center text-gray-300">
            Galatea of the Spheres, Dali
            <br />
            <br />
            Credit: © 2014 Salvador Dalí, Fundació Gala-Salvador Dalí, Figueres
          </div>
        </div>
      </div>
    </main>
  );
}
