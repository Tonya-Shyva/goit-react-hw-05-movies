import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';

import { Cast } from './Cast/Cast';
import { Reviews } from 'components/Reviews/Reviwes';
import { NotFound } from '../pages/NotFound(404)/NotFound';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';

const Home = lazy(() =>
  import('pages/Home/Home').then(module => ({
    ...module,
    default: module.Home,
  }))
);

const Movies = lazy(() =>
  import('pages/Movies/Movies').then(module => ({
    ...module,
    default: module.Movies,
  }))
);

// якщо б був дефолтний імпорт, то, наприклад
// const Movies = lazy(() => import('pages/Movies/Movies'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            {' '}
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
