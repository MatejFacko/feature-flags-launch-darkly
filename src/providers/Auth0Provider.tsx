import { Auth0Provider as Auth0ReactProvider } from '@auth0/auth0-react';
import React from 'react';

import { useAuth0Provider } from './useAuth0Provider';

interface Props {
  children: React.ReactNode;
}

export const Auth0Provider: React.FC<Props> = ({ children }) => {
  const { redirectUri, clientId, domain, handleRedirectCallback, cacheLocation } =
    useAuth0Provider();

  return (
    <Auth0ReactProvider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      cacheLocation={cacheLocation}
      onRedirectCallback={handleRedirectCallback}
    >
      {children}
    </Auth0ReactProvider>
  );
};
