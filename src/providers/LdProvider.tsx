import React, { Suspense } from 'react';

import { CircularProgress, Stack } from '@mui/material';

const LazyLdProvider = React.lazy(() =>
  import('launchdarkly-react-client-sdk').then(async ({ asyncWithLDProvider }) => {
    return {
      default: await asyncWithLDProvider({
        clientSideID: process.env.REACT_APP_LAUNCH_DARKLY_CLIENT_ID as string,
        options: { streaming: true },
        // NOTE It is recommend to use the same user key for every initialization and then replacing that with the actual user key.
        // This way LaunchDarkly counts the initialization user key only once against your MAU, instead of every time you initialize.
        // More info: https://docs.launchdarkly.com/sdk/features/user-config#javascript
        user: { key: 'ff6f4c76-84d9-4994-95b4-3a81bb44e014' },
      }),
    };
  })
);

interface Props {
  children: React.ReactNode;
}

export const LdProvider: React.FC<Props> = ({ children }) => (
  <Suspense
    fallback={
      <Stack width="100%" height="100vh" spacing={1} justifyContent="center" alignItems="center">
        <CircularProgress size={50} />
      </Stack>
    }
  >
    <LazyLdProvider>{children}</LazyLdProvider>
  </Suspense>
);
