"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

const TabBar = () => {
  return (
    <nav>
      <div className="sm:pt-32 sm:pl-32 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col items-start ml-8 sm:ml-16">
          <div className="flex space-x-2 justify-start">
            <h3 className="text-left text-2xl">Curie Cha</h3>
            <a
              href="https://github.com/cc1015"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="bi:github"
                className="w-6 h-6 text-gray-700 hover:text-gray-900"
              />
            </a>
            <a
              className="text-right"
              href="https://www.linkedin.com/in/curiecha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="bi:linkedin"
                className="w-6 h-6 text-gray-700 hover:text-gray-900"
              />
            </a>
          </div>
          <h3 className="text-left text-sm">cha.c[at]northeastern[dot]edu</h3>
          <ul className="flex space-x-8 text-base">
            <Link href="/" className="hover:text-yellow-300">
              Home
            </Link>
            <Link href="/experience" className="hover:text-yellow-300">
              Experience
            </Link>
            <Link href="/projects" className="hover:text-yellow-300">
              Projects
            </Link>
            <Link href="/photos" className="hover:text-yellow-300">
              Photos
            </Link>
            <Link href="/writing" className="hover:text-yellow-300">
              Writing
            </Link>
          </ul>
        </main>
      </div>
    </nav>
  );
};

export default TabBar;
