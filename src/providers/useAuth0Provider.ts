import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppState, CacheLocation } from '@auth0/auth0-react';

interface HookOptions {
  clientId: string;
  domain: string;
  audience: string;
  handleRedirectCallback(appState?: AppState): void;
  cacheLocation: CacheLocation;
  redirectUri: string;
}

export const useAuth0Provider = (): HookOptions => {
  const navigate = useNavigate();

  const handleRedirectCallback = useCallback((appState?: AppState) => {
    const { returnTo } = appState ?? {};
    if (returnTo) {
      navigate(returnTo);
    }
  }, []);

  return {
    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID as string,
    domain: process.env.REACT_APP_AUTH0_DOMAIN as string,
    audience: process.env.REACT_APP_AUTH0_AUDIENCE as string,
    handleRedirectCallback,
    cacheLocation: 'localstorage',
    redirectUri: window.location.origin,
  };
};
