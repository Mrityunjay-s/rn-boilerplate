import { createContext, useContext, type ReactNode } from "react";

// TODO: implement theme provider/context
type ThemeContextValue = {
  resolvedTheme: "light" | "dark";
};

const ThemeContext = createContext<ThemeContextValue>({ resolvedTheme: "light" });

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider value={{ resolvedTheme: "light" }}>{children}</ThemeContext.Provider>
  );
}

export function useAppTheme() {
  return useContext(ThemeContext);
}
