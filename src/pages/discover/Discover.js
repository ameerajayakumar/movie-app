import { Grid, Typography } from '@mui/material';
import MovieCard from '../../components/MovieCard';
import ExpandCard from '../../components/ExpandCard';
import { useState } from 'react';

const Discover = (props) => {
  const [open, setOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);
  // const [row, setRow] = useState([]);

  // // on resize of window,get the rownumber
  // useEffect(() => {
  //   const handleResize = () => {
  //     const windowWidth = window.innerWidth;
  //     const newIndexArray = props.movieList.map((_, index) => {
  //       let newRowIndex;
  //       if (windowWidth >= 1920) {
  //         newRowIndex = Math.floor(index / 5) + 1;
  //       } else if (windowWidth >= 1280) {
  //         newRowIndex = Math.floor(index / 4) + 1;
  //       } else if (windowWidth >= 960) {
  //         newRowIndex = Math.floor(index / 3) + 1;
  //       } else if (windowWidth >= 600) {
  //         newRowIndex = Math.floor(index / 2) + 1;
  //       } else {
  //         newRowIndex = 1;
  //       }
  //       return newRowIndex;
  //     });
  //     setRow(newIndexArray);
  //   };
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [props.movieList]);

  return (
    <>
      <Grid container>
        <ExpandCard movie={movieDetails} open={open} />
        {props.movieList.length > 0 ? (
          <Grid container my="2.4rem" mx="15px" spacing={2}>
            {props.movieList.map((movie, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2.25} key={movie.imdbID}>
                  <MovieCard movie={movie} open={open} setOpen={setOpen} setMovieDetails={setMovieDetails} prevMovie={movieDetails} />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Typography component="div" fontSize="21px" fontWeight="600" mt="2.5rem" ml="3rem" color="#fff">
            No results found for your search.
          </Typography>
        )}
      </Grid>
    </>
  );
};
export default Discover;
