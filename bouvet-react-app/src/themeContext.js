import React from "react";

export const themes = {
  light: {
    foreground: '#000000',
    background: '#c4d3c9',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  }
};

export const ThemeContext = React.createContext(
    themes.light
);
