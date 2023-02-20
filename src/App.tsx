import React from 'react';

import { Grid, Stack, Typography } from '@mui/material';

import { AppBar, Table, MusicPlayer } from 'components';

export const App: React.FC = () => {
  return (
    <Stack direction="column" justifyContent="space-between" height="100vh">
      <AppBar />
      <Stack paddingY={5} direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h3">Feature flags demo APP</Typography>
      </Stack>

      <Grid
        spacing={8}
        container
        height="100%"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <MusicPlayer />
        </Grid>

        <Grid item xs={12}>
          {/* <Ratings /> */}
        </Grid>

        <Grid paddingBottom={10} item xs={10}>
          <Table />
        </Grid>
      </Grid>
    </Stack>
  );
};
