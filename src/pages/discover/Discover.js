import { Typography } from '@mui/material';
import MovieCard from '../../components/MovieCard';
import ExpandCard from '../../components/ExpandCard';
import { useEffect, useState } from 'react';
import useMediaQueries from '../../hooks/useMediaQueries';
import Grid from '@mui/material/Unstable_Grid2';

const Discover = ({ movieList }) => {
  const isMobile = useMediaQueries('mobile');
  const [open, setOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);
  const column = 5;
  const rows = Math.ceil(movieList.length / column);
  const gridRows = Array.from({ length: rows });
  const [selectedMovie, setSelectedMovie] = useState();

  const selectMovie = (rowIndex, movieIndex) => {
    const currentMovie = movieList[rowIndex === 0 ? movieIndex : rowIndex * column + movieIndex];
    // if (selectedMovie) {
    //   if (selectedMovie.movie.imdbID === currentMovie.imdbID && open === true) setOpen(false);
    //   else {
    //     setOpen(false);
    //     setTimeout(() => {
    //       setOpen(true);
    //     }, 80);
    //   }
    // }
    setSelectedMovie({
      row: rowIndex,
      index: movieIndex,
      movie: currentMovie,
    });
  };

  return (
    <>
      {movieList.length === 0 && (
        <Typography component="div" fontSize={isMobile ? '15px' : '21px'} fontWeight="600" mt="2.5rem" ml="3rem" color="#fff">
          No results found for your search.
        </Typography>
      )}
      <Grid container justifyContent={isMobile ? 'center' : ''}>
        {gridRows.map((_, rowIndex) => {
          const moviesRow = movieList.slice(rowIndex * column, (rowIndex + 1) * column);
          const show = selectedMovie && selectedMovie['row'] !== undefined && selectedMovie['row'] === rowIndex;
          return (
            <>
              <ExpandCard movie={movieDetails} open={show} />
              <Grid
                key={`row-${rowIndex}`}
                container
                xs={12}
                my="2rem"
                mx="1rem"
                justifyContent={moviesRow.length < column ? '' : moviesRow.length === 1 ? 'center' : 'space-between'}
              >
                {moviesRow.map((movie, movieIndex) => {
                  return (
                    <Grid
                      xl={12 / column}
                      lg={15 / column}
                      md={20 / column}
                      xs={25 / column}
                      sx={{ width: 'fit-content' }}
                      key={movie.imdbID}
                      display="flex"
                      justifyContent="center"
                    >
                      <MovieCard
                        movie={movie}
                        open={open}
                        setOpen={setOpen}
                        setMovieDetails={setMovieDetails}
                        prevMovie={movieDetails}
                        index={movieIndex}
                        clicked={selectedMovie && selectedMovie.movie.imdbID === movie.imdbID}
                        setClicked={() => selectMovie(rowIndex, movieIndex)}
                        selectedMovie={selectedMovie}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};
export default Discover;
