'use client';
import React, { useContext, useState } from "react";
import Image from "next/image";
import { DarkModeContext } from '../context/DarkModeContext'; 

const LightSwitch = () => {
  const [isBouncing, setIsBouncing] = useState(false); // Manage state for click animation

  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error("context error");
  }

  const { darkMode, toggleDarkMode } = context;

  const handleClick = () => {
    toggleDarkMode();
    setIsBouncing(true); // Trigger bounce on click

    // Reset the bounce state after animation (1 second)
    setTimeout(() => {
      setIsBouncing(false);
    }, 1000);
  };

  return (
    <div className="overflow-y-auto">
      <div className="flex">
        <div className="relative -top-40 -mr-8 md:mr-0 z-10">
          <Image
            src={darkMode ? "/bulb_dark.svg" : "/bulb_light.svg"}
            alt="light"
            width={60}
            height={60}
            className="mr-4"
          />
        </div>
        <div className="relative -top-40 Light-switch z-20">
          <Image
            src={darkMode ? "/switch_dark.svg" : "/switch_light.svg"}
            alt="switch"
            width={50}
            height={50}
            className={`transition-all cursor-pointer ${
              isBouncing ? "animate-pull" : ""
            }`} 
            onClick={handleClick} 
          />
        </div>
      </div>
    </div>
  );
};

export default LightSwitch;
