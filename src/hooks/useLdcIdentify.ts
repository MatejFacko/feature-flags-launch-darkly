import { useAuth0 } from '@auth0/auth0-react';
import { useLDClient } from 'launchdarkly-react-client-sdk';
import { useEffect } from 'react';

export const useLdcIdentify = (): void => {
  const { user, isAuthenticated } = useAuth0();
  const ldClient = useLDClient();

  useEffect(() => {
    if (user) {
      const { sub: id, email } = user;
      ldClient?.identify({ key: id, email });
    }
  }, [isAuthenticated]);
};
