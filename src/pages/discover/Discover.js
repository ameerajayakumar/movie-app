import { Typography } from '@mui/material';
import MovieCard from '../../components/MovieCard';
import ExpandCard from '../../components/ExpandCard';
import { useState } from 'react';
import useMediaQueries from '../../hooks/useMediaQueries';
import Grid from '@mui/material/Unstable_Grid2';

const Discover = ({ movieList }) => {
  const isMobile = useMediaQueries('mobile');
  const [open, setOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);
  // const [clicked, setClicked] = useState(null);
  const column = 5;
  const rows = Math.ceil(movieList.length / column);
  const [selectedMovie, setSelectedMovie] = useState();

  const onMovieSelect = (row, index) => {
    const clickedMovie = movieList[row === 0 ? index : row * column + index];
    setSelectedMovie({
      row,
      index,
      clickedMovie,
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
        {Array.from({ length: rows }).map((_, i) => {
          const movies = movieList.slice(i * column, (i + 1) * column);
          const show = selectedMovie && selectedMovie['row'] !== undefined && selectedMovie['row'] === i;
          return (
            <>
              <ExpandCard movie={movieDetails} open={show} />
              <Grid
                key={`row-${i}`}
                container
                xs={12}
                my="2rem"
                mx="1rem"
                justifyContent={movies.length < column ? '' : movies.length === 1 ? 'center' : 'space-between'}
              >
                {movies.map((movie, index) => {
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
                        open={show}
                        setOpen={setOpen}
                        setMovieDetails={setMovieDetails}
                        prevMovie={movieDetails}
                        index={index}
                        clicked={selectedMovie && selectedMovie.clickedMovie.imdbID === movie.imdbID}
                        setClicked={() => onMovieSelect(i, index)}
                        // onClick={}
                        // selected={selectedMovie && selectedMovie.movie.imdbID === movie.imdbID}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </>
          );
        })}
      </Grid>
      {/* --------------------------------------------- */}
      {/* <Grid container justifyContent={isMobile ? 'center' : ''}>
        <ExpandCard movie={movieDetails} open={open} />
        {movieList.length > 0 ? (
          <Grid container my="2.4rem" spacing={2}>
            {movieList.map((movie, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2.25} key={movie.imdbID} display="flex" justifyContent="center">
                  <MovieCard
                    movie={movie}
                    open={open}
                    setOpen={setOpen}
                    setMovieDetails={setMovieDetails}
                    prevMovie={movieDetails}
                    index={index}
                    clicked={clicked}
                    setClicked={setClicked}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Typography component="div" fontSize={isMobile ? '15px' : '21px'} fontWeight="600" mt="2.5rem" ml="3rem" color="#fff">
            No results found for your search.
          </Typography>
        )}
      </Grid> */}
    </>
  );
};
export default Discover;
