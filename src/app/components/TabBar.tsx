"use client";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LightSwitch from "./LightSwitch";

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
    <div className="flex flex-col border-t">
      <div className="flex-1 text-left">
        <h3 className="text-xl sm:text-2xl">curie cha</h3>
        <div className="flex">
          <h3 className="text-left text-xs flex mb-2 sm:text-sm">
            cha[dot]c[at]northeastern[dot]edu&nbsp;&nbsp;/&nbsp;&nbsp;
            <Link
              href="https://github.com/cc1015"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaGithub className="w-3 h-3 sm:w-4 sm:h-4" />
            </Link>
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <Link
              href="https://www.linkedin.com/in/curiecha"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaLinkedin className="w-3 h-3 sm:w-4 sm:h-4" />
            </Link>
          </h3>
        </div>
        <ul className="flex max-w-full">
          {tabitems.reverse().map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              className={`text-xs sm:text-base mr-2 md:mr-4 lg:mr-8 justify-between ${
                activeTabId === tab.id ? "text-yellow-400" : ""
              } hover:text-yellow-400`}
            >
              {tab.title}
            </Link>
          ))}
        </ul>
      </div>
      <div className="absolute right-4 sm:right-16 md:right-32 lg:right-50 z-10">
        <LightSwitch />
      </div>
    </div>
  );
};

export default TabBar;
