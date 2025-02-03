"use client";
import React, { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import TabBar from "./components/TabBar";
import LightSwitch from "./components/LightSwitch";

function Container({ children }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`z-0 ${darkMode ? "Container-dark" : "Container-light"}`}>
      <div className="sm:px-32 p-12"></div>
      <div className="z-20 flex items-center justify-between sm:px-8 p-8">
        <div className="flex-1 sm:px-8">
          <TabBar />
        </div>
      </div>
      <div className="z-20 min-h-screen sm:px-32 pb-8 sm:p-8">{children}</div>
      <div className="z-10 absolute top-0 right-16 mr-15 overflow-hidden">
        <div className="flex relative">
          <LightSwitch />
        </div>
      </div>
    </div>
  );
}

export default Container;