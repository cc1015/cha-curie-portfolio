"use client";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import TabItem from "./TabItem";
import Link from "next/link";

// a component representing the tab bar
const TabBar = () => {
  const tabitems = [
    {
      id: 5,
      title: "photos",
      href: "/photos",
    },
    {
      id: 4,
      title: "words",
      href: "/words",
    },
    {
      id: 3,
      title: "projects",
      href: "/projects",
    },
    {
      id: 2,
      title: "experience",
      href: "/experience",
    },
    {
      id: 1,
      title: "home",
      href: "/",
    },
  ];

  const pathname = usePathname();

  const activeTabId = tabitems.find((item) => pathname.includes(item.href))?.id;

  return (
    <nav>
      <div className="sm:pt-32 sm:pl-32">
        <main className="flex flex-col items-start mx-8 sm:ml-16">
          <div className="flex space-x-2 justify-start">
            <h3 className="text-left text-2xl">curie cha</h3>
          </div>
          <h3 className="text-left text-sm flex items-center mb-4">
            cha[dot]c[at]northeastern[dot]edu&nbsp;&nbsp;/&nbsp;&nbsp;
            <Link
              href="https://github.com/cc1015"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaGithub size={20} />
            </Link>
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <Link
              href="https://www.linkedin.com/in/curiecha"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaLinkedin size={20} />
            </Link>
          </h3>
          <ul className="flex space-x-8 text-base">
            {tabitems.reverse().map((tab) => (
              <TabItem
                key={tab.id}
                id={tab.id}
                title={tab.title}
                href={tab.href}
                hover={`${
                  activeTabId === tab.id ? "text-yellow-400" : ""
                } hover:text-yellow-400`}
              />
            ))}
          </ul>
        </main>
      </div>
    </nav>
  );
};

export default TabBar;
