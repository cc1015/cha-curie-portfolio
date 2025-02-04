"use client";
import React, { useEffect, useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import TabBar from "./components/TabBar";
import LightSwitch from "./components/LightSwitch";

type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error("BackButton must be used within a DarkModeProvider");
  }

  const { darkMode } = context;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div
      className="z-10 p-4 md:p-8 lg:p-16 xl:p-32 min-h-screen"
    >
      <div className="px-4 md:px-16 lg:px-32 mb-5 md:mb-10">
        <TabBar />
      </div>
      <div className="flex px-4 sm:px-8 lg:px-32">{children}</div>
    </div>
  );

  <div className="absolute top-4 md:top-8 right-4 md:right-8 lg:right-48"> -->
        <LightSwitch />
  </div>
}

export default Container;
