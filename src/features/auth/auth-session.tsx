import { createContext, useContext, type ReactNode } from "react";

// TODO: implement real session/auth state management
type SessionContextValue = {
  hasHydrated: boolean;
  isSignedIn: boolean;
};

const SessionContext = createContext<SessionContextValue>({
  hasHydrated: true,
  isSignedIn: false,
});

export function SessionProvider({ children }: { children: ReactNode }) {
  return (
    <SessionContext.Provider value={{ hasHydrated: true, isSignedIn: false }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  return useContext(SessionContext);
}
