import { useContext } from 'react';
import invariant from 'tiny-invariant';
import { AuthContext } from '@/providers/auth-provider';

export function useAuth() {
  const context = useContext(AuthContext);
  invariant(context, 'useAuth must be used within an AuthProvider');
  return context;
}
