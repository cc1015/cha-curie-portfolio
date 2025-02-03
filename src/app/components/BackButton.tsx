import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { Arrow } from "doodle-icons";

const BackButton = () => {
    const { darkMode } = useContext(DarkModeContext);
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