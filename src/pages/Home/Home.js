import { TrandingToday } from 'components/TrandingToday/TrandingToday';
import { useState, useEffect } from 'react';
import { getTrending } from 'utils/getMoviesApi';
export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending().then(resp => setTrendingMovies(resp));
  }, [trendingMovies]);

  return (
    <div>
      <TrandingToday movies={trendingMovies}></TrandingToday>
    </div>
  );
};
