import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

export default function ExpandCard({ data }) {
  const movie = {
    Title: 'Avatar',
    Year: '2009',
    Rated: 'PG-13',
    Released: '18 Dec 2009',
    Runtime: '162 min',
    Genre: 'Action, Adventure, Fantasy',
    Director: 'James Cameron',
    Writer: 'James Cameron',
    Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
    Plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    Language: 'English, Spanish',
    Country: 'USA, UK',
    Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
    Poster: 'https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
    Metascore: '83',
    imdbRating: '7.9',
    imdbVotes: '890,617',
    imdbID: 'tt0499549',
    Type: 'movie',
    Response: 'True',
    Images: [
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
    ],
  };
  return (
    <Card className="expandCard">
      <CardMedia component="img" image={movie.Poster} alt={movie.Title} className="movieImage" />
      <Box display="flex" flexDirection="column" my="2rem" mx="3rem" className="movieDetails">
        <Typography className="movieTitle">{movie.Title}</Typography>
        <Box display="flex" mt="9px" justifyContent="space-between" width="25%">
          Rating: <Typography class="movieMeta">{movie.imdbRating}/10</Typography>
        </Box>
        <Box display="flex" my="15px" justifyContent="space-between" width="40%" maxWidth="100%">
          <Box display="flex" flexDirection="column">
            <Typography class="movieMeta">Year:</Typography>
            <Typography class="movieMeta">Running Time:</Typography>
            <Typography class="movieMeta">Directed By:</Typography>
            <Typography class="movieMeta">Language:</Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography class="movieMeta">{movie.Year}</Typography>
            <Typography class="movieMeta">{movie.Runtime}</Typography>
            <Typography class="movieMeta">{movie.Director}</Typography>
            <Typography class="movieMeta">{movie.Language}</Typography>
          </Box>
        </Box>
        <Typography className="moviePlot">{movie.Plot}</Typography>
        <Box display="flex" mt="21px">
          <Button variant="contained" sx={{ backgroundColor: '#00E0FF', textAlign: 'center', marginRight: '16px' }}>
            <Typography className="movieBtn" sx={{ color: '#000000' }}>
              Play Movie
            </Typography>
          </Button>
          <Button variant="outlined" sx={{ borderColor: '#00E0FF', textAlign: 'center' }}>
            <Typography className="movieBtn" sx={{ color: '#00E0FF' }}>
              Watch Trailer
            </Typography>
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
