import { Grid, Typography } from '@mui/material';
import MovieCard from '../../components/Card';
import ExpandCard from '../../components/ExpandCard';
import { useState } from 'react';

const Discover = (props) => {
  const [open, setOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);
  return (
    <>
      {open && <ExpandCard movie={movieDetails} />}
      {props.movieList.length > 0 ? (
        <Grid container mt="4px" rowSpacing="37px" justifyContent="space-between" ml="15px">
          {props.movieList.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={2.25} className="gridItem" key={movie.imdbID}>
              <MovieCard movie={movie} open={open} setOpen={setOpen} setMovieDetails={setMovieDetails} />
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
