"use client";
import React, { useContext } from "react";
import { useState } from "react";
import Image from "next/image";
import { DarkModeContext } from "../context/DarkModeContext";

const LightSwitch = () => {
  const [isBouncing, setIsBouncing] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  // Toggle bounce on click
  const handleClick = () => {
    toggleDarkMode();
    setIsBouncing(true);

    setTimeout(() => {
      setIsBouncing(false);
    }, 1000);
  };

  return (
    <main className="flex overflow-y-auto">
      <div className="flex sm:items-start w-1/2 sticky top-0 relative group overflow-hidden">
        <Image
          src={`${darkMode ? "/bulb_dark.svg" : "/bulb_light.svg"}`}
          alt="light"
          width={125}
          height={125}
          className="animate-sway mr-4"
        />
        <div className="relative -top-16 Light-switch">
          <Image
            src={darkMode ? "/switch_dark.svg" : "/switch_light.svg"}
            alt="switch"
            width={100}
            height={100}
            className={`transition-all cursor-pointer ${
              isBouncing ? "animate-pull" : ""
            }`}
            onClick={handleClick}
          />
        </div>
      </div>
    </main>
  );
};

export default LightSwitch;
