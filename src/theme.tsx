"use client";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
  useEffect,
} from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  Theme,
  CssBaseline,
  ThemeOptions,
} from "@mui/material";

interface ThemeContextProps {
  theme: ThemeOptions;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProviderWrapper: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  const [themeType, setThemeType] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme) setThemeType(savedTheme === "light" ? "light" : "dark");
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeType((prevTheme) => {
      localStorage.setItem('theme', prevTheme === "light" ? "dark" : "light")
      return prevTheme === "light" ? "dark" : "light"
    });
  }, []);

  const theme: Theme = createTheme({
    palette: {
      mode: themeType,
      background: {
        default: themeType === "light" ? "#F0F0F0" : "#121212",
        paper: themeType === "light" ? "#FFFFFF" : "#1E1E1E",
      },
      text: {
        primary: themeType === "light" ? "#333333" : "#FFFFFF",
        secondary: themeType === "light" ? "#555555" : "#CCCCCC",
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProviderWrapper");
  }
  return context;
};
