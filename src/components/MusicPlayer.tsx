import React from 'react';

import { VolumeDown, VolumeUp } from '@mui/icons-material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  IconButton,
  Slider,
} from '@mui/material';

import { useFeatureFlags } from 'hooks/useFeatureFlags';

export const MusicPlayer: React.FC = () => {
  const flags = useFeatureFlags();

  return (
    <Stack paddingTop={2}>
      <Grid container justifyContent="center">
        <Grid item xs={3}>
          <Card sx={{ display: 'flex' }}>
            <Stack justifyContent="center" alignItems="center">
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Mac Miller
                </Typography>
              </CardContent>
              <Stack direction="row" justifyContent="center" alignItems="center">
                <IconButton aria-label="previous">
                  <SkipNextIcon />
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  <SkipPreviousIcon />
                </IconButton>
              </Stack>
            </Stack>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="live-from-space.jpg"
              alt="Live from space album cover"
            />
          </Card>
        </Grid>
      </Grid>
      {flags.soundsSettings && (
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6} lg={3}>
            <VolumeDown />
            <Slider defaultValue={70} min={10} max={100} />
            <VolumeUp />
          </Grid>
        </Grid>
      )}
    </Stack>
  );
};
