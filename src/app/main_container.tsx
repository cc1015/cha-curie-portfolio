"use client";
import React, { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import TabBar from "./components/TabBar";
import LightSwitch from "./components/LightSwitch";

function Container({ children }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "Container-dark" : "Container-light"}>
      <TabBar />
      <div className="flex justify-end mx-24">
        <LightSwitch />
      </div>
      <div className="min-h-screen sm:px-32 pb-8 sm:p-8">{children}</div>
    </div>
  );
}

export default Container;
