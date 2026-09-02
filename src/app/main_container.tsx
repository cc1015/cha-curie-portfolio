"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import TabBar from "./components/TabBar";

type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return (
    <AnimatePresence mode="wait">
      <main className="flex flex-col p-4 sm:p-8 md:p-16 sm:mx-8 md:mx-16 min-h-screen">
        <div className="md:mb-10">
          <TabBar />
        </div>
        <div className="flex-grow">{children}</div>
      </main>
    </AnimatePresence>
  );
}

export default Container;
