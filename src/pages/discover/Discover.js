import { Typography } from '@mui/material';
import MovieCard from '../../components/MovieCard';
import ExpandCard from '../../components/ExpandCard';
import { Fragment, useState } from 'react';
import useMediaQueries, { useWidth } from '../../hooks/useMediaQueries';
import Grid from '@mui/material/Unstable_Grid2';

const Discover = ({ movieList }) => {
  const isMobile = useMediaQueries('mobile');
  const [movieDetails, setMovieDetails] = useState([]);
  const columns = useWidth();
  const rows = Math.ceil(movieList.length / columns);
  const gridRows = Array.from({ length: rows });
  const [selectedMovie, setSelectedMovie] = useState();

  const selectMovie = (rowIndex, movieIndex) => {
    const currentMovie = movieList[rowIndex === 0 ? movieIndex : rowIndex * columns + movieIndex];
    setSelectedMovie({
      row: rowIndex,
      index: movieIndex,
      movie: currentMovie,
    });
  };

  return (
    <>
      {movieList.length > 0 ? (
        <Grid container justifyContent={isMobile ? 'center' : ''}>
          {gridRows.map((_, rowIndex) => {
            const moviesRow = movieList.slice(rowIndex * columns, (rowIndex + 1) * columns);
            const show = selectedMovie && selectedMovie['row'] !== undefined && selectedMovie['row'] === rowIndex;
            return (
              <Fragment key={rowIndex}>
                <ExpandCard movie={movieDetails} open={show} />
                <Grid
                  key={`row-${rowIndex}`}
                  container
                  xs={12}
                  my="2rem"
                  mx="1rem"
                  justifyContent={moviesRow.length < columns ? '' : moviesRow.length === 1 ? 'center' : 'space-between'}
                >
                  {moviesRow.map((movie, movieIndex) => {
                    return (
                      <Grid xl={12 / columns} sx={{ width: 'fit-content' }} key={movie.imdbID} display="flex" justifyContent="center">
                        <MovieCard
                          movie={movie}
                          setMovieDetails={setMovieDetails}
                          prevMovie={movieDetails}
                          index={movieIndex}
                          clicked={selectedMovie && selectedMovie.movie.imdbID === movie.imdbID}
                          setClicked={() => selectMovie(rowIndex, movieIndex)}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Fragment>
            );
          })}
        </Grid>
      ) : (
        <Typography component="div" fontSize={isMobile ? '15px' : '21px'} fontWeight="600" mt="2.5rem" ml="3rem" color="#fff">
          No results found for your search.
        </Typography>
      )}
    </>
  );
};
export default Discover;
