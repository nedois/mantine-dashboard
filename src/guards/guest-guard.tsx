import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { LoadingScreen } from '@/components/loading-screen';
import { app } from '@/config';
import { useAuth } from '@/hooks';
import { paths } from '@/routes';

interface GuestGuardProps {
  children: ReactNode;
}

function getRedirectPath(search: string) {
  const REDIRECT_QUERY_PARAM_REGEX = new RegExp(`${app.redirectQueryParamName}=([^&]*)`);
  return REDIRECT_QUERY_PARAM_REGEX.exec(search)?.[1] ?? paths.dashboard.root;
}

export function GuestGuard({ children }: GuestGuardProps) {
  const { search } = useLocation();
  const { isAuthenticated, isInitialized } = useAuth();

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (isAuthenticated) {
    const redirectPath = getRedirectPath(search);
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}
