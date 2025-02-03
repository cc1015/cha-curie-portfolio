'use client'
import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext'; 
import { Arrow } from 'doodle-icons';

const BackButton = () => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error('BackButton must be used within a DarkModeProvider');
  }

  const { darkMode } = context;
  const iconColor = darkMode ? 'white' : 'black';

  return (
    <Arrow.ArrowLeft
      width={30}
      height={30}
      fill={iconColor}
      className="Doodle-icon"
    />
  );
};

export default BackButton;
