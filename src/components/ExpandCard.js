import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

export default function ExpandCard({ movie }) {
  return (
    <Card className="expandCard">
      <CardMedia component="img" image={movie.Poster} alt={movie.Title} className="movieImage" />
      <Box display="flex" flexDirection="column" my="2rem" mx="3rem" className="movieDetails">
        <Typography className="movieTitle">{movie.Title}</Typography>
        <Box display="flex" mt="9px" justifyContent="space-between" width="25%">
          Rating: <Typography className="movieMeta">{movie.imdbRating}/10</Typography>
        </Box>
        <Box display="flex" my="15px" justifyContent="space-between" width="40%" maxWidth="100%">
          <Box display="flex" flexDirection="column">
            <Typography className="movieMeta">Year:</Typography>
            <Typography className="movieMeta">Running Time:</Typography>
            <Typography className="movieMeta">Directed By:</Typography>
            <Typography className="movieMeta">Language:</Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography className="movieMeta">{movie.Year}</Typography>
            <Typography className="movieMeta">{movie.Runtime}</Typography>
            <Typography className="movieMeta">{movie.Director}</Typography>
            <Typography className="movieMeta">{movie.Language}</Typography>
          </Box>
        </Box>
        <Typography className="moviePlot">{movie.Plot}</Typography>
        <Box display="flex" mt="21px">
          <Button variant="contained" sx={{ backgroundColor: '#00E0FF', textAlign: 'center', marginRight: '16px' }}>
            <Typography className="movieBtn" sx={{ color: '#000000' }}>
              Play Movie
            </Typography>
          </Button>
          <Button variant="outlined" sx={{ borderColor: '#00E0FF', textAlign: 'center' }}>
            <Typography className="movieBtn" sx={{ color: '#00E0FF' }}>
              Watch Trailer
            </Typography>
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
