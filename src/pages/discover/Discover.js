import { Grid, Typography } from '@mui/material';
import MovieCard from '../../components/MovieCard';
import ExpandCard from '../../components/ExpandCard';
import { useEffect, useState } from 'react';

const Discover = (props) => {
  const [open, setOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);

  return (
    <>
      {open && <ExpandCard movie={movieDetails} />}
      {props.movieList.length > 0 ? (
        <Grid container my="2.4rem" mx="15px" spacing={2}>
          {props.movieList.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2.25} key={movie.imdbID}>
              <MovieCard movie={movie} open={open} setOpen={setOpen} setMovieDetails={setMovieDetails} prevMovie={movieDetails} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography component="div" fontSize="21px" fontWeight="600" mt="2.5rem" ml="3rem" color="#fff">
          No results found for your search.
        </Typography>
      )}
    </>
  );
};
export default Discover;
