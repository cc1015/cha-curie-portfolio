"use client";
import React, { useEffect, useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import TabBar from "./components/TabBar";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error("context error");
  }

  const { darkMode } = context;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <AnimatePresence mode="wait">
      <main className="flex flex-col p-4 sm:p-8 md:p-16 sm:mx-8 md:mx-16 min-h-screen">
        <div className="md:mb-10">
          <TabBar />
        </div>
        <div className="flex-grow">{children}</div>
        <div className="mt-8">
          <Footer />
        </div>
      </main>
    </AnimatePresence>
  );
}

export default Container;
