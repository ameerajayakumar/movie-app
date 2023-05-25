import { useState } from 'react';
import Discover from '../discover';
import Topnav from './Topnav';
import { Routes, Route } from 'react-router-dom';
import { data } from '../../backend/data/mockData';

const Main = () => {
  const [searchMovies, handleSearch] = useState(data);
  const [movieList, updateMovieList] = useState(data);

  const performSearch = async (text) => {
    const keyword = text.toLowerCase();
    const searchProperties = ['Title', 'Genre', 'Director', 'Writer', 'Actors', 'Plot'];
    const filteredMovies = movieList.filter((movie) => {
      return searchProperties.some((property) => {
        const propertyValue = movie[property];
        return propertyValue.toLowerCase().includes(keyword);
      });
    });
    handleSearch(filteredMovies);
  };
  return (
    <main className="content">
      <Topnav performSearch={performSearch} movieList={movieList} />
      <Routes>
        <Route path="/" element={<Discover movieList={searchMovies} />} />
      </Routes>
    </main>
  );
};
export default Main;
