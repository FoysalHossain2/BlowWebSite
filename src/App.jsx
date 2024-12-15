import React, { useContext } from "react";
import { ThemeContext } from "./Context";
import HomePage from "./pages/HomePage";

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
      <HomePage />
    </div>
  );
};

export default App;
