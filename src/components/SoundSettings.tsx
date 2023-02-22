import React from 'react';

import { VolumeDown, VolumeUp } from '@mui/icons-material';
import { Grid, Slider } from '@mui/material';

export const SoundSettings: React.FC = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6} lg={3}>
        <VolumeDown />
        <Slider defaultValue={70} min={10} max={100} />
        <VolumeUp />
      </Grid>
    </Grid>
  );
};
