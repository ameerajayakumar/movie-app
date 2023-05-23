import { Box, Grid } from '@mui/material';
import MovieCard from '../../components/Card';
import { data } from '../../backend/data/mockData';

const Discover = () => {
  return (
    <Grid container my="56px" mx="48px" rowSpacing="37px">
      {data.map((movie) => (
        <Grid item md={3} style={{ maxWidth: '20%' }} className="gridItem" key={movie.imdbID}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Discover;
