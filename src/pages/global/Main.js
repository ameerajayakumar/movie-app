import { useState } from 'react';
import Discover from '../discover';
import Topnav from './Topnav';
import { Routes, Route } from 'react-router-dom';
import { data } from '../../backend/data/mockData';

const Main = () => {
  const [movies, setMovies] = useState(data);

  const performSearch = async (text) => {
    const keyword = text.toLowerCase();
    const searchProperties = ['Title', 'Genre', 'Director', 'Writer', 'Actors', 'Plot'];
    const filteredMovies = data.filter((movie) => {
      return searchProperties.some((property) => {
        const propertyValue = movie[property];
        return propertyValue.toLowerCase().includes(keyword);
      });
    });
    setMovies(filteredMovies);
  };

  return (
    <main className="content">
      <Topnav performSearch={performSearch} movieList={data} setMovies={setMovies} />
      <Routes>
        <Route path="/" element={<Discover movieList={movies} />} />
      </Routes>
    </main>
  );
};
export default Main;
