import invariant from 'tiny-invariant';
import { ReactNode, createContext, useState, useEffect, useContext, useMemo } from 'react';

import { loadAccessToken } from '@/services/axios';
import { getAccount } from '@/services/resources/account';

interface AuthContextValues {
  isAuthenticated: boolean;
  isInitialized: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const AuthContext = createContext<AuthContextValues | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    loadAccessToken();

    getAccount()
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false))
      .finally(() => setIsInitialized(true));
  }, []);

  const value = useMemo(
    () => ({ isAuthenticated, isInitialized, setIsAuthenticated }),
    [isAuthenticated, isInitialized]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  invariant(context, 'useAuth must be used within an AuthProvider');
  return context;
}
