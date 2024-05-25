import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '@/providers/auth-provider';
import { LoadingScreen } from '@/components/loading-screen';
import { routes } from '@/routes';

interface GuestGuardProps {
  children: ReactNode;
}

const REDIRECT_QUERY_PARAM_REGEX = /r=([^&]*)/;

export function GuestGuard({ children }: GuestGuardProps) {
  const { search } = useLocation();
  const { isAuthenticated, isInitialized } = useAuth();

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (isAuthenticated) {
    const redirectPath = REDIRECT_QUERY_PARAM_REGEX.exec(search)?.[1] ?? routes.dashboard.root;
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}
