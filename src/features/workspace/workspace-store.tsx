import { createContext, useContext, type ReactNode } from "react";

// TODO: implement workspace state store
const WorkspaceContext = createContext<unknown>(null);

export function WorkspaceProvider({ children }: { children: ReactNode }) {
  return <WorkspaceContext.Provider value={null}>{children}</WorkspaceContext.Provider>;
}

export function useWorkspace() {
  return useContext(WorkspaceContext);
}
