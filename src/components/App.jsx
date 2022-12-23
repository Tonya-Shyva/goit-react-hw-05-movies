import { Routes, Route } from 'react-router-dom';

import { lazy, Suspense } from 'react';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { Loader } from './Loader/Loader';

import { Cast } from './Cast/Cast';
import { Reviews } from 'components/Reviews/Reviwes';
import { NotFound } from '../pages/NotFound(404)/NotFound';
import { Movies } from 'pages/Movies/Movies';

const Home = lazy(() =>
  import('pages/Home/Home').then(module => ({
    ...module,
    default: module.Home,
  }))
);

// const Movies = lazy(() =>
//   import('pages/Movies/Movies').then(module => ({
//     ...module,
//     default: module.Movies,
//   }))
// );
const MovieDetails = lazy(() =>
  import('pages/MovieDetails/MovieDetails').then(module => ({
    ...module,
    default: module.MovieDetails,
  }))
);

// якщо б був дефолтний імпорт, то, наприклад
// const Movies = lazy(() => import('pages/Movies/Movies'));

export const App = () => {
  return (
    <>
      {/* <SharedLayout /> */}
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </>
  );
};
