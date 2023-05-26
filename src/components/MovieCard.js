import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';

export default function MovieCard({ movie, setOpen, setMovieDetails, prevMovie }) {
  const handleExpandCard = () => {
    if (prevMovie.imdbID === movie.imdbID) {
      setOpen(false);
    } else {
      setMovieDetails(movie);
      setOpen(true);
    }
  };
  return (
    <Card className="card" onClick={handleExpandCard}>
      <div className="card-content">
        <CardMedia component="img" image={movie.Poster} alt={movie.Title} className="card-image" />
      </div>
      <Typography variant="h5">{movie.Title}</Typography>
      <Box display="flex" justifyContent="flex-start" className="card-actions">
        <IconButton type="button" sx={{ p: 0, color: '#D4D7DD' }}>
          <PlayCircleOutlineIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton type="button" sx={{ color: '#D4D7DD' }}>
          <AddCircleOutlineIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>
    </Card>
  );
}
