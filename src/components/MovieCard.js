import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { IconButton } from '@mui/material';
import { Box } from '@mui/system';

export default function MovieCard({ movie, setMovieDetails, index, clicked, setClicked }) {
  const handleExpandCard = () => {
    setClicked();
    setMovieDetails(movie);
  };

  return (
    <Card className={`${clicked ? 'card clicked' : 'card'}`} onClick={() => handleExpandCard()} index={index}>
      <div className="card-content">
        <CardMedia component="img" image={movie.Poster} alt={movie.Title} className="card-image" />
      </div>
      <Typography variant="h5" mt="5px">
        {movie.Title}
      </Typography>
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
