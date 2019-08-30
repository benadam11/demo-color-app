import React, { createContext, useContext } from "react";
import baseTheme from "./themes/theme";

// Theme Provider
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);
export const withTheme = Wrapped => props => (
  <Wrapped theme={useTheme()} {...props} />
);

export const ThemeProvider = ({ theme, children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

// Themes
export const theme = baseTheme;
