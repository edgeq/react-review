import React, { createContext } from "react";
import useToggle from "../hooks/useToggleState";

//Creates space for state to be shared.
export const ThemeContext = createContext();

// this provides a context and is invoked by wrapping context aware components inside it.
export function ThemeProvider(props) {
  const [isDarkMode, toggleTheme] = useToggle(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
