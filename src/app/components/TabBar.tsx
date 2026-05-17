"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LightSwitch from "./LightSwitch";

const tabItems = [
  { title: "home", href: "/" },
  { title: "experience", href: "/experience" },
  { title: "projects", href: "/projects" },
  { title: "posts", href: "/words" },
  { title: "photos", href: "/photos" },
];

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

const TabBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col border-t">
      <div className="flex-1 text-left">
        <h3 className="text-xl sm:text-2xl">Curie Cha</h3>
        <div className="flex items-center text-xs sm:text-sm mb-2 gap-2">
          <Link
            href="https://www.linkedin.com/in/curiecha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-yellow-400"
          >
            <FaLinkedin className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href="https://github.com/cc1015"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-yellow-400"
          >
            <FaGithub className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
        </div>
        <ul className="flex max-w-full">
          {tabItems.map((tab) => (
            <li key={tab.href} className="mr-2 md:mr-4 lg:mr-8">
              <Link
                href={tab.href}
                className={`text-xs sm:text-base hover:text-yellow-400 ${
                  isActive(pathname, tab.href) ? "text-yellow-400" : ""
                }`}
              >
                {tab.title}
              </Link>
            </li>
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
