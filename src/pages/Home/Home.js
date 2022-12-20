import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { getTrending } from 'utils/getMoviesApi';
export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending().then(data => setTrendingMovies(data));
  }, []);

  return (
    <main>
      <div>
        <MoviesList movies={trendingMovies}></MoviesList>
      </div>
    </main>
  );
};
