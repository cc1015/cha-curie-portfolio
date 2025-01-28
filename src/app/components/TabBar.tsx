"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";

const TabBar = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const tabitems = [
    {
      id: 1,
      title: "home",
      href: "/",
    },
    {
      id: 2,
      title: "projects",
      href: "/projects",
    },
    {
      id: 3,
      title: "experience",
      href: "/experience",
    },
    {
      id: 4,
      title: "words",
      href: "/writing",
    },
    {
      id: 5,
      title: "photos",
      href: "/photos",
    },
  ];

  return (
    <nav>
      <div className="sm:pt-32 sm:pl-32 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col items-start ml-8 sm:ml-16">
          <div className="flex space-x-2 justify-start">
            <h3 className="text-left text-2xl">curie cha</h3>
          </div>
          <h3 className="text-left text-sm flex items-center mb-4">
            cha[dot]c[at]northeastern[dot]edu&nbsp;&nbsp;/&nbsp;&nbsp;    
            <a
              href="https://github.com/cc1015"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>&nbsp;&nbsp;/&nbsp;&nbsp;
            <a
              href="https://www.linkedin.com/in/curiecha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
          </h3>
          <ul className="flex space-x-8 text-base">
            {tabitems.map((tab) => (
              <Link
                key={tab.id}
                href={tab.href}
                className={`${
                  activeTab === tab.id ? "text-yellow-300" : ""
                } hover:text-yellow-300`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </Link>
            ))}
          </ul>
        </main>
      </div>
    </nav>
  );
};

export default TabBar;
