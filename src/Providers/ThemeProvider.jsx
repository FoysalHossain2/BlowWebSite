import React, { useState } from "react";
import { ThemeContext } from "../Context";

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
