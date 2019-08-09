// we need to import createContext to make space for shared state
import React, { createContext, useState } from "react";

// contexts are scoped to components
export const LanguageContext = createContext();

//wraps dependent components
export function LanguageProvider(props) {
  const [language, setLanguage] = useState("english");

  const changeLanguage = e => setLanguage(e.target.value);
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
