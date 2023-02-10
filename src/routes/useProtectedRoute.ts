import { useAuth0 } from '@auth0/auth0-react';
import { useLdcIdentify } from 'hooks/useLdcIdentify';
import { useEffect } from 'react';

interface HookResult {
  error: any;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export const useProtectedRoute = (): HookResult => {
  const { isAuthenticated, isLoading, loginWithRedirect, error } = useAuth0();
  useLdcIdentify();

  useEffect(() => {
    if (isLoading || isAuthenticated) {
      return;
    }

    (async (): Promise<void> => {
      await loginWithRedirect({
        appState: {
          returnTo: `${window.location.pathname}${window.location.search}`,
          target: window.location.href,
        },
      });
    })();
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  return {
    error,
    isLoading,
    isAuthenticated,
  };
};
