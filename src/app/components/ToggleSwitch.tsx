"use client";
import "./ToggleSwitch.css";
import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const ToggleSwitch = () => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error("LightSwitch must be used within a DarkModeProvider");
  }

  const { toggleDarkMode } = context;

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <div className="container">
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" name="toggle" id="toggle" onClick={handleClick} />
        <label className="label" htmlFor="toggle">
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
