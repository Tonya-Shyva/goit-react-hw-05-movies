import { Routes, Route } from 'react-router-dom';
import { NotFound } from '../pages/NotFound(404)/NotFound';
import { Suspense } from 'react';
import { Home } from 'pages/Home/Home';

import { Movies } from 'pages/Movies/Movies';
import { Header } from './Header/Header';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Loader } from './Loader/Loader';
import { Box } from './Box/Box';
import { Cast } from './Cast/Cast';
import { Reviews } from 'pages/MovieDetails/Reviews/Reviwes';

// const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
// const Movies = lazy(() => import('pages/Movies/Movies'));

export const App = () => {
  return (
    <Box>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            {' '}
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Box>
  );
};
