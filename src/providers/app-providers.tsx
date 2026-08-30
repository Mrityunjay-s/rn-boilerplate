import type { ReactNode } from "react";

// TODO: compose app-wide providers (theme, i18n, session, workspace, etc.)
export function AppProviders({ children }: { children: ReactNode }) {
  return children;
}
