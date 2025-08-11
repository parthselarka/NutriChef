"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeProviderContext = createContext();

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "nutrichef-theme",
  ...props
}) {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    // Use requestAnimationFrame to avoid blocking animations
    requestAnimationFrame(() => {
      root.classList.remove("light", "dark");

      if (theme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
        root.classList.add(systemTheme);
        return;
      }

      root.classList.add(theme);
    });
  }, [theme]);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      setTheme(stored);
    } else {
      // Default to dark theme if no preference is stored
      setTheme("dark");
    }
  }, [storageKey]);

  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
