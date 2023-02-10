import React from 'react';

import { CircularProgress, Grid, Typography } from '@mui/material';

import { useProtectedRoute } from './useProtectedRoute';

interface Props {
  outlet: React.ReactElement;
}

export const ProtectedRoute: React.FC<Props> = ({ outlet }) => {
  const { isAuthenticated, isLoading, error } = useProtectedRoute();
  let element = null;

  if (error) {
    element = (
      <Grid item xs={12} textAlign="center">
        <Typography>Oops, failed to login. Something went wrong.</Typography>
      </Grid>
    );
  }

  if (isLoading) {
    element = (
      <Grid item xs={12} textAlign="center">
        <CircularProgress size={50} />
      </Grid>
    );
  }

  if (isAuthenticated) {
    element = outlet;
  }

  return <>{element}</>;
};
