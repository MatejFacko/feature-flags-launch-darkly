import React from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar as MuiAppBar, IconButton, Stack, Toolbar, Tooltip } from '@mui/material';

import { useAuth0 } from '@auth0/auth0-react';

export const AppBar: React.FC = () => {
  const { logout } = useAuth0();

  return (
    <MuiAppBar position="static">
      <Toolbar variant="dense">
        <Stack width="100%" direction="row" justifyContent="end" alignItems="center">
          <Tooltip title="Logout">
            <IconButton
              onClick={(): void => logout({ returnTo: window.location.origin })}
              edge="start"
              color="inherit"
            >
              <LogoutIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Stack>
      </Toolbar>
    </MuiAppBar>
  );
};
