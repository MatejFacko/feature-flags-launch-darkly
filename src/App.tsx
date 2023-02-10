import { useFeatureFlags } from 'hooks/useFeatureFlags';
import React from 'react';

import { VolumeDown, VolumeUp } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  AppBar,
  IconButton,
  Rating,
  Slider,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';

import { useAuth0 } from '@auth0/auth0-react';

export const App: React.FC = () => {
  const flags = useFeatureFlags();
  const { logout } = useAuth0();

  return (
    <Stack direction="column" justifyContent="space-between" height="100vh">
      <AppBar position="static">
        <Toolbar variant="dense">
          <Stack width="100%" direction="row" alignItems="center" justifyContent="space-between">
            <Stack width="100%" direction="row" justifyContent="end" alignItems="center">
              <Typography variant="h4">Feature flags demo</Typography>
            </Stack>
            <Stack width="100%" direction="row" justifyContent="end" alignItems="center">
              <Tooltip title="logout">
                <IconButton onClick={(): void => logout()} edge="start" color="inherit">
                  <LogoutIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Stack
        direction="column"
        width="100%"
        height="100%"
        justifyContent="space-around"
        alignItems="center"
      >
        <Typography variant="h4">All flags: {JSON.stringify(flags)}</Typography>

        <Stack>
          <Typography variant="h5">Rating section</Typography>
          <Rating name="simple-controlled" value={4} />
          <Typography component="legend">Read only</Typography>
          <Rating name="read-only" value={3} readOnly />
          <Typography component="legend">Disabled</Typography>
          <Rating name="disabled" value={2} disabled />
          <Typography component="legend">No rating given</Typography>
          <Rating name="no-value" value={0} />
        </Stack>

        <Stack width="50%" spacing={2} direction="row" alignItems="center">
          <VolumeDown />
          <Slider defaultValue={70} min={10} max={100} />
          <VolumeUp />
        </Stack>
      </Stack>
    </Stack>
  );
};
