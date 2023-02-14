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
    // TODO pass as env variable
    clientId: 'BZ0qU4GYQXPs5F0DC0OD74OFdxJCKT3h',
    // TODO pass as env variable
    domain: 'dev-r53od3ppmnig47qs.us.auth0.com',
    // TODO pass as env variable
    audience: 'dev-r53od3ppmnig47qs.us.auth0.com',
    handleRedirectCallback,
    cacheLocation: 'localstorage',
    redirectUri: window.location.origin,
  };
};
