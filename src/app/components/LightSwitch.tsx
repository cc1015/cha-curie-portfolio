"use client";
import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

// a component representing a button toggling light/dark mode
const LightSwitch = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <div>
      <button className="outline" onClick={handleClick}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default LightSwitch;
