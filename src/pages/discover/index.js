import { Box } from '@mui/material';
import MovieCard from '../../components/Card';
import { data } from '../../backend/data/mockData';

const Discover = () => {
  return (
    <Box my="56px" mx="48px">
      Discover
      {data.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </Box>
  );
};
export default Discover;
