"use client";
import React, { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import TabBar from "./components/TabBar";
import LightSwitch from "./components/LightSwitch";

function Container({ children }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`z-10 min-h-screen p-32 Container ${
        darkMode ? "Container-dark" : "Container-light"
      }`}
    >
      <div className="z-30 flex items-center">
        <div className="flex-1 px-32 mb-10">
          <TabBar />
        </div>
      </div>

      <div className="z-20 px-32">{children}</div>

      <div className="absolute top-0 right-48">
          <LightSwitch />
      </div>
    </div>
  );
}

export default Container;
