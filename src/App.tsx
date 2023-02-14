import { useFeatureFlags } from 'hooks/useFeatureFlags';
import React, { useEffect, useState } from 'react';

import { VolumeDown, VolumeUp } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import {
  AppBar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Rating,
  Slider,
  Stack,
  styled,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { useAuth0 } from '@auth0/auth0-react';

const DataGridWrapper = styled('div')({
  height: 400,
  width: '100%',
});

export const App: React.FC = () => {
  const flags = useFeatureFlags();
  const { logout } = useAuth0();
  const [data, setData] = useState<
    { albumId: number; id: number; thumbnailUrl: string; title: string; url: string }[]
  >([]);
  const columns = [
    { field: 'albumId', headerName: 'Album Id', width: 200 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'url', headerName: 'Song url', width: 200 },
  ];

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Stack direction="column" justifyContent="space-between" height="100vh">
      <AppBar position="static">
        <Toolbar variant="dense">
          <Stack width="100%" direction="row" alignItems="center" justifyContent="space-between">
            <Stack width="100%" direction="row" justifyContent="end" alignItems="center">
              <Typography variant="h4">Feature flags demo</Typography>
            </Stack>
            <Stack width="100%" direction="row" justifyContent="end" alignItems="center">
              <Tooltip title="Logout">
                <IconButton onClick={(): void => logout()} edge="start" color="inherit">
                  <LogoutIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

      <Stack paddingY={5} direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h4">Feature flags demo APP</Typography>
      </Stack>

      <Stack paddingY={5} direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h5">All flags: {JSON.stringify(flags)}</Typography>
      </Stack>

      <Grid
        spacing={4}
        container
        height="100%"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <Typography variant="h4">Unfinished features</Typography>
            {flags.rating && (
              <Grid container justifyContent="center" spacing={4}>
                <Grid item xs={4} md={3} lg={2} xl={1.5}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="contemplative-reptile.jpg"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Stack>
                        <Rating name="simple-controlled" value={4} />
                        <Typography component="legend">Content</Typography>
                        <Rating name="read-only" value={3} />
                        <Typography component="legend">Total eating</Typography>
                        <Rating name="disabled" value={2} />
                        <Button size="small" color="primary">
                          Confirm rating
                        </Button>
                      </Stack>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={4} md={3} lg={2} xl={1.5}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="contemplative-reptile.jpg"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Stack>
                        <Rating name="simple-controlled" value={4} />
                        <Typography component="legend">Content</Typography>
                        <Rating name="read-only" value={3} />
                        <Typography component="legend">Total eating</Typography>
                        <Rating name="disabled" value={2} />
                        <Button size="small" color="primary">
                          Confirm rating
                        </Button>
                      </Stack>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={4} md={3} lg={2} xl={1.5}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="contemplative-reptile.jpg"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Stack>
                        <Rating name="simple-controlled" value={4} />
                        <Typography component="legend">Content</Typography>
                        <Rating name="read-only" value={3} />
                        <Typography component="legend">Total eating</Typography>
                        <Rating name="disabled" value={2} />
                        <Button size="small" color="primary">
                          Confirm rating
                        </Button>
                      </Stack>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            )}
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <Typography variant="h4">Experimental features</Typography>
          </Stack>
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
        </Grid>

        <Grid paddingBottom={10} item xs={12} sm={6} lg={4}>
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <Typography variant="h4">Performance testing</Typography>
          </Stack>
          <Stack paddingTop={2}>
            <DataGridWrapper>
              <DataGrid rows={data} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
            </DataGridWrapper>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
