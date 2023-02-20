import React from 'react';

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Stack,
  Rating,
  Button,
} from '@mui/material';

export const Ratings: React.FC = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={4} md={3} lg={2} xl={1.5}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="live-from-space.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Song 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Stack>
                <Rating name="simple-controlled" value={4} />
                <Typography component="legend">Content</Typography>
                <Rating name="read-only" value={3} />
                <Typography component="legend">Total rating</Typography>
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
                image="live-from-space.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Song 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Stack>
                <Rating name="simple-controlled" value={4} />
                <Typography component="legend">Content</Typography>
                <Rating name="read-only" value={3} />
                <Typography component="legend">Total rating</Typography>
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
                image="live-from-space.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Song 3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Stack>
                <Rating name="simple-controlled" value={4} />
                <Typography component="legend">Content</Typography>
                <Rating name="read-only" value={3} />
                <Typography component="legend">Total rating</Typography>
                <Rating name="disabled" value={2} />
                <Button size="small" color="primary">
                  Confirm rating
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};
