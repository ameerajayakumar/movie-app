import { Grid } from '@mui/material';
import MovieCard from '../../components/Card';
import { data } from '../../backend/data/mockData';

const Discover = () => {
  return (
    <Grid container mt="4px" rowSpacing="37px" justifyContent="space-between" ml="15px">
      {data.map((movie) => (
        <Grid item xs={12} sm={6} md={4} lg={2.25} className="gridItem" key={movie.imdbID}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Discover;
