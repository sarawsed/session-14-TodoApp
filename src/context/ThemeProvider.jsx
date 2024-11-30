import React, { createContext, useState } from "react";
export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div
        className={`w-[90%] sm:w-[70%] md:w-[40%] mx-auto{
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
