'use client';
import React, { useContext, useState } from "react";
import Image from "next/image";
import { DarkModeContext } from '../context/DarkModeContext'; 

const LightSwitch = () => {
  const [isBouncing, setIsBouncing] = useState(false);

  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error("LightSwitch must be used within a DarkModeProvider");
  }

  const { darkMode, toggleDarkMode } = context;

  const handleClick = () => {
    toggleDarkMode(); 
    setIsBouncing(true);

    setTimeout(() => {
      setIsBouncing(false);
    }, 1000);
  };

  return (
    <main className="overflow-y-auto">
      <div className="flex mr-30">
        <div className="relative -top-20">
          <Image
            src={darkMode ? "/bulb_dark.svg" : "/bulb_light.svg"}
            alt="light"
            width={60}
            height={60}
            className="mr-4"
          />
        </div>
        <div className="relative -top-20 Light-switch">
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
    </main>
  );
};

export default LightSwitch;
