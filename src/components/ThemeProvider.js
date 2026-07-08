"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeProviderContext = createContext();

function getStoredTheme(storageKey, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark") return stored;
  } catch (e) {
    // localStorage unavailable — fall through to default
  }
  return fallback;
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "nutrichef-theme",
  ...props
}) {
  const [theme, setTheme] = useState(() =>
    getStoredTheme(storageKey, defaultTheme)
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (next) => {
      try {
        localStorage.setItem(storageKey, next);
      } catch (e) {
        // ignore storage failures
      }
      setTheme(next);
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
