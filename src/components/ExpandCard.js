import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import useMediaQueries from '../hooks/useMediaQueries';

export default function ExpandCard({ movie, open }) {
  const isMobile = useMediaQueries('mobile');
  return (
    <Card
      className={open ? 'expandCard active' : 'expandCard'}
      sx={{
        maxWidth: isMobile ? '' : '94%',
        minWidth: isMobile ? '100px' : '',
      }}
    >
      <Box display="flex" className="movieContent">
        <CardMedia component="img" image={movie.Poster} alt={movie.Title} className="movieImage" />
        <Box display="flex" flexDirection="column" mt="2rem" mb={isMobile ? '0' : '2rem'} mx="3rem" className="movieDetails">
          <Typography className="movieTitle">{movie.Title}</Typography>
          <Box display="flex" mt="9px" justifyContent="space-between" width={isMobile ? '70%' : '25%'} alignItems="baseline">
            {movie.imdbRating === 'N/A' ? (
              <>
                <Box className="ratingbar" width="60%" height="8px">
                  <Box className="rating" width={0}></Box>
                </Box>
                <Typography className="movieMeta">N/A</Typography>
              </>
            ) : (
              <>
                <Box className="ratingbar" width="60%" height="8px">
                  <Box className="rating" width={`${movie.imdbRating * 10}%`}></Box>
                </Box>
                <Typography className="movieMeta">{movie.imdbRating}/10</Typography>
              </>
            )}
          </Box>
          <Box display="flex" my="15px" justifyContent="space-between" width={isMobile ? '100%' : '40%'} maxWidth="100%">
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
      </Box>
    </Card>
  );
}
