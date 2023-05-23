import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { CardActions, IconButton } from '@mui/material';
import { Box } from '@mui/system';

export default function MovieCard({ movie }) {
  return (
    <Card sx={{ maxWidth: 178, maxHeight: 278 }} className="card">
      <CardContent className="card-content">
        <CardMedia component="img" height="188" width="157" image={movie.Poster} alt={movie.Title} className="card-image" />
        <Typography variant="h5">{movie.Title}</Typography>
      </CardContent>
      <CardActions>
        <Box display="flex">
          <IconButton type="button" sx={{ p: 1, color: '#D4D7DD' }}>
            <PlayCircleOutlineIcon sx={{ fontSize: 20 }} />
          </IconButton>
          <IconButton type="button" sx={{ p: 1, color: '#D4D7DD' }}>
            <AddCircleOutlineIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}
