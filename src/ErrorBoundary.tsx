/* eslint-disable  */
import React from 'react';

import { Stack, Typography } from '@mui/material';

export class ErrorBoundary extends React.Component<{ children: React.ReactElement }> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render(): React.ReactElement {
    if (this.state.hasError) {
      return (
        <Stack width="100%" height="100vh" spacing={1} justifyContent="center" alignItems="center">
          <Typography variant="h3"> Something went wrong.</Typography>
        </Stack>
      );
    }

    return this.props.children;
  }
}
