"use client";

import { createContext, useContext, useState } from "react";

type ThemeContextValue = {
  isCreative: boolean;
  setIsCreative: (value: boolean) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isCreative, setIsCreative] = useState(false);

  return (
    <ThemeContext.Provider value={{ isCreative, setIsCreative }}>
      <div data-theme={isCreative ? "creative" : "frontend"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
