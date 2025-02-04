"use client";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ToggleSwitch from "./ToggleSwitch";

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
    <main className="flex flex-col">
      <h3 className="text-left text-2xl">curie cha</h3>
      <div className="flex">
        <h3 className="text-left text-sm flex mb-4">
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
        <ToggleSwitch />
      </div>
      <ul className="flex max-w-full">
        {tabitems.reverse().map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            className={`mr-2 md:mr-4 lg:mr-8 justify-between ${
              activeTabId === tab.id ? "text-yellow-400" : ""
            } hover:text-yellow-400`}
          >
            {tab.title}
          </Link>
        ))}
      </ul>
    </main>
  );
};

export default TabBar;
