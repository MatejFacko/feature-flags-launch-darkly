import { useFeatureFlags } from 'hooks/useFeatureFlags';
import React from 'react';

import { Stack, Typography } from '@mui/material';

export const App: React.FC = () => {
  const { firstFlag } = useFeatureFlags();

  return (
    <Stack width="100%" height="100vh" spacing={1} justifyContent="center" alignItems="center">
      <Typography variant="h1">Feature flags demo</Typography>
      <Typography variant="body1">First flag value is: {JSON.stringify(firstFlag)}</Typography>
    </Stack>
  );
};
