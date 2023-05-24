import { Grid } from '@mui/material';
import MovieCard from '../../components/Card';
import { data } from '../../backend/data/mockData';
import ExpandCard from '../../components/ExpandCard';
import { useState } from 'react';

const Discover = () => {
  const [open, setOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);
  return (
    <>
      {open && <ExpandCard movie={movieDetails} />}
      <Grid container mt="4px" rowSpacing="37px" justifyContent="space-between" ml="15px">
        {data.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={2.25} className="gridItem" key={movie.imdbID}>
            <MovieCard movie={movie} open={open} setOpen={setOpen} setMovieDetails={setMovieDetails} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Discover;
