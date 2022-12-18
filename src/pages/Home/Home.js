import { TrandingToday } from 'components/TrandingToday/TrandingToday';
import { useState, useEffect } from 'react';
import { getTrending } from 'utils/getMoviesApi';
export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending().then(data => setTrendingMovies(data));
  }, [trendingMovies]);

  return (
    <main>
      <div>
        <TrandingToday movies={trendingMovies}></TrandingToday>
      </div>
    </main>
  );
};
