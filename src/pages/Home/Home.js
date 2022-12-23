// import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { getTrending } from 'utils/getMoviesApi';
import { MainPageContainer } from './Home.styled';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending().then(data => setTrendingMovies(data));
  }, []);

  if (trendingMovies.length === 0) return;
  // console.log(trendingMovies);
  return (
    <main>
      <MainPageContainer>
        <MoviesList movies={trendingMovies}></MoviesList>
      </MainPageContainer>
    </main>
  );
};
