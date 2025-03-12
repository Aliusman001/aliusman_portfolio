"use client";
import { createContext, useState, ReactNode, useContext } from "react";

export const ThemeContext = createContext<{
  isInView: string;
  setIsInView: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

interface BlogPostProviderProps {
  children: ReactNode;
}

export function BlogPostProvider({ children }: BlogPostProviderProps) {
  const [isInView, setIsInView] = useState<string>("");

  return (
    <ThemeContext.Provider value={{ isInView, setIsInView }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useBlogPostContext() {
  const context = useContext(ThemeContext);
  if (context) {
    return context;
  } else {
    throw new Error(
      "useBlogPostContext must be used within a BlogPostProvider"
    );
  }
}
